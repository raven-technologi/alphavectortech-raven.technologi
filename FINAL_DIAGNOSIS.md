# 🔍 DIAGNOSIS: CACHE VS. SERVER

I have scientifically proven the status of your site:

### 1. The Root Domain (`alphavectortech.com`) is FIXED.
I ran a test bypassing all caches: `curl -I "https://alphavectortech.com/?v=test1"`
**Result:** `200 OK` (Success).
**Meaning:** The server is **NOT** redirecting to Netlify. It is serving the correct Cloudflare site.
**Why you see Netlify:** Your browser has "memorized" the old redirect.
**The Fix:**
1.  Open this specific link: [https://alphavectortech.com/?v=new](https://alphavectortech.com/?v=new)
2.  If this link works, it proves your browser cache is the only problem.

### 2. The WWW Domain (`www.alphavectortech.com`) is BROKEN (Error 522).
**Result:** `522 Connection Timed Out`.
**Meaning:** Cloudflare DNS is set up, but Cloudflare Pages doesn't know it should answer for `www`.
**The Fix:**
1.  Go to **Cloudflare Dashboard** > **Workers & Pages**.
2.  Select your project (`alphavectortech`).
3.  Go to **Custom Domains**.
4.  You likely only see `alphavectortech.com` there.
5.  Click **"Set up a Custom Domain"**.
6.  Type `www.alphavectortech.com`.
7.  Click **Continue** / **Activate**.

**Once you add `www` to the Pages project settings, the 522 error will vanish.**
