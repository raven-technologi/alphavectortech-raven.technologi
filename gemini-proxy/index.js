require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { GoogleAuth } = require('google-auth-library');
const fetch = globalThis.fetch || require('node-fetch');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const LOCAL_API_KEY = process.env.LOCAL_API_KEY || 'local_dev_key';

// Helper: get access token from Google (service account or ADC)
async function getGoogleAccessToken() {
    const auth = new GoogleAuth({
        scopes: ['https://www.googleapis.com/auth/cloud-platform']
    });
    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();
    if (!accessToken || !accessToken.token) return accessToken; // node-google-auth-lib returns string or object
    return accessToken.token || accessToken;
}

// Build a single prompt from OpenAI chat messages
function buildPromptFromMessages(messages) {
    // join messages into a readable prompt
    const lines = messages.map(m => {
        const role = m.role || 'user';
        // keep role label concise
        const label = role === 'system' ? 'System' : role === 'assistant' ? 'Assistant' : 'User';
        return `${label}: ${m.content || m.message || ''}`;
    });
    return lines.join('\n');
}

// Minimal route: OpenAI chat completions -> Google Generative Models
app.post('/v1/chat/completions', async (req, res) => {
    try {
        const authHeader = (req.headers.authorization || '').trim();
        if (!authHeader || !authHeader.toLowerCase().startsWith('bearer')) {
            return res.status(401).json({ error: 'Missing or invalid Authorization header. Use Bearer <LOCAL_API_KEY>' });
        }
        const token = authHeader.split(' ')[1];
        if (token !== LOCAL_API_KEY) return res.status(403).json({ error: 'Invalid local API key' });

        const body = req.body || {};
        const messages = body.messages || [];
        const promptText = buildPromptFromMessages(messages);

        // Determine target model and endpoint
        const model = process.env.GOOGLE_MODEL || body.model;
        if (!model) return res.status(400).json({ error: 'No target model configured. Set GOOGLE_MODEL in .env or include model in request body.' });

        // Base url
        const base = process.env.GOOGLE_API_BASE_URL || 'https://generativelanguage.googleapis.com/v1';
        // Example target: `${base}/models/${model}:generateText`
        const endpoint = `${base}/models/${model}:generateText`;

        // Support two auth modes:
        // 1) GOOGLE_API_KEY in env — append ?key=API_KEY to endpoint and don't use OAuth.
        // 2) Service account / ADC — obtain access token and send Authorization: Bearer <token>.
        const gReq = {
            prompt: { text: promptText },
            temperature: body.temperature ?? Number(process.env.TEMPERATURE) ?? 0.2,
            maxOutputTokens: body.max_tokens ?? Number(process.env.MAX_TOKENS) ?? 512
        };

        let finalEndpoint = endpoint;
        const apiKey = process.env.GOOGLE_API_KEY;
        const headers = { 'Content-Type': 'application/json' };

        if (apiKey && apiKey.length) {
            // Append API key as query param. If endpoint already has query, append with &
            finalEndpoint = endpoint + (endpoint.includes('?') ? '&' : '?') + `key=${encodeURIComponent(apiKey)}`;
        } else {
            // Acquire Google Access Token and use Bearer header
            const accessToken = await getGoogleAccessToken();
            if (!accessToken) return res.status(500).json({ error: 'Failed to acquire Google access token' });
            headers['Authorization'] = `Bearer ${accessToken}`;
        }

        const gRes = await fetch(finalEndpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify(gReq)
        });

        if (!gRes.ok) {
            const txt = await gRes.text();
            return res.status(gRes.status).json({ error: 'Google API error', details: txt });
        }

        const gJson = await gRes.json();

        // Try to extract text from common fields
        let text = '';
        if (gJson && gJson.candidates && gJson.candidates.length) {
            text = gJson.candidates.map(c => c.output ?? c.content ?? '').join('\n');
        } else if (gJson && gJson.output && gJson.output[0] && gJson.output[0].content) {
            // some variants
            text = gJson.output.map(o => (o.content || '')).join('\n');
        } else if (typeof gJson.text === 'string') {
            text = gJson.text;
        } else if (typeof gJson.outputText === 'string') {
            text = gJson.outputText;
        } else {
            // Fallback: stringify entire response
            text = JSON.stringify(gJson);
        }

        // Return OpenAI-style response
        const reply = {
            id: `gemini-proxy-${Date.now()}`,
            object: 'chat.completion',
            created: Math.floor(Date.now() / 1000),
            model: model,
            choices: [
                {
                    index: 0,
                    message: { role: 'assistant', content: text },
                    finish_reason: 'stop'
                }
            ]
        };

        res.json(reply);

    } catch (err) {
        console.error('Proxy error', err);
        res.status(500).json({ error: 'proxy_error', details: String(err) });
    }
});

// Minimal OpenAI /v1/completions mapping as well (simple)
app.post('/v1/completions', async (req, res) => {
    // Reuse the chat mapping by converting to messages
    const body = req.body || {};
    const prompt = (body.prompt && (Array.isArray(body.prompt) ? body.prompt.join('\n') : body.prompt)) || '';
    const messages = [{ role: 'user', content: prompt }];
    // forward shape to chat endpoint handler
    req.body = { messages, model: body.model, temperature: body.temperature, max_tokens: body.max_tokens };
    app._router.handle(req, res, () => { });
});

app.listen(PORT, () => {
    console.log(`Gemini proxy listening on http://localhost:${PORT}`);
});
