Gemini Proxy — OpenAI-compatible local proxy to Google Gemini

What this is
- A small Express server that accepts OpenAI-style requests (e.g., POST /v1/chat/completions) and forwards them to Google Generative Models (Gemini).
- Useful when a VS Code chat extension only supports OpenAI-compatible endpoints but you want to talk to Gemini.

Important notes
- You must have Google Cloud API access to the Generative Models API. An "Ultra" web plan does not automatically provide API credentials — enable the Generative Models API in your Google Cloud project and create a service account with the `Cloud Platform` scope and the appropriate roles.
- This proxy is minimal and intended for local development only.

Setup
1. Copy the example env file and fill in values:

```bash
cp .env.example .env
# Edit .env to point GOOGLE_APPLICATION_CREDENTIALS at your service account JSON
```

2. Install dependencies:

```bash
cd gemini-proxy
npm install
```

3. Run the proxy:

```bash
npm run start
```

4. Configure your VS Code chat extension (or any OpenAI-compatible client):
- API host / base URL: http://localhost:3000
- API key: use the value of `LOCAL_API_KEY` in `.env` (default: `local_dev_key`).

Example curl test against the proxy

```bash
curl -X POST "http://localhost:3000/v1/chat/completions" \
  -H "Authorization: Bearer local_dev_key" \
  -H "Content-Type: application/json" \
  -d '{"model":"gpt-compat","messages":[{"role":"user","content":"Say hello from Gemini proxy"}] }'
```

How it works (brief)
- The proxy exchanges the incoming OpenAI-style request into a single prompt, calls the Google Generative Models endpoint using your service account credentials, then returns a response shaped like an OpenAI chat completion.

If something fails
- Check that you enabled the Generative Models API in Google Cloud and that billing is active.
- Confirm the service account JSON path in `GOOGLE_APPLICATION_CREDENTIALS` or that Application Default Credentials are configured.
- Provide the exact error message and I will help debug.
