# QUICK START GUIDE
**Project:** Alpha Vector Technologies
**Role:** Operator / Developer

---

## 1. Prerequisites

Ensure the following environment is configured before initiating operations:

*   **Node.js**: Version 18.17.0 or higher (LTS recommended).
*   **Package Manager**: `npm` (v9+) or `pnpm`.
*   **Git**: Version 2.30+.
*   **Terminal**: PowerShell (Windows) or Bash/Zsh (Linux/macOS).

## 2. Installation

Clone the repository and install dependencies.

```bash
# Clone repository
git clone https://github.com/raven-technologi/alphavectortech-raven.technologi.git
cd alphavectortech-site

# Install dependencies
npm install
```

## 3. Development Operations

To launch the local development environment with hot-reloading:

```bash
npm run dev
```
*   **Access**: `http://localhost:3000`
*   **Status**: Changes to `src/` files will reflect immediately.

## 4. Production Build

To generate the static export artifacts for deployment:

```bash
npm run build
```
*   **Output Directory**: `./out`
*   **Validation**: This process runs type checking and linting. Any errors will halt the build.

## 5. Deployment

### 5.1 Automated (Recommended)
Pushing to the `main` branch triggers an automatic build and deployment via Cloudflare Pages.

```bash
git add .
git commit -m "Update: Description of changes"
git push origin main
```

### 5.2 Manual (Emergency)
If the CI/CD pipeline is compromised or unavailable, deploy manually using Wrangler:

```bash
# Build first
npm run build

# Deploy 'out' directory
npx wrangler pages deploy out --project-name=alphavectortech
```

## 6. Troubleshooting

*   **Missing Content**: If changes don't appear, verify you are editing the correct `page.tsx` and that the build succeeded.
*   **Navigation Issues**: Ensure links use the Next.js `<Link>` component, not `<a>` tags, unless linking externally.
*   **Style Glitches**: If Tailwind classes aren't applying, check `tailwind.config.js` content paths.

---
**Support**: Contact Principal Researcher
