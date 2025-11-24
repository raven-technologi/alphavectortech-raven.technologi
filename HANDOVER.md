# ALPHA VECTOR TECHNOLOGIES WEBSITE - HANDOVER DOCUMENT
## Created: 2025-11-25
## Status: BUILD SUCCESSFUL - CONTENT ISSUES REMAIN

---

## CRITICAL ISSUES TO FIX

### Issue 1: Research Navigation Link Points to Wrong Page
**Location**: `src/components/Navigation.tsx` line ~27
**Current**: `<Link href="/research/mens-rea-vector">`
**Should Be**: Either create `/research/page.tsx` landing page OR change to dropdown menu with all 3 papers

### Issue 2: Sangedha Framework Page - NOT VERBATIM CONTENT
**Location**: `src/app/research/sangedha-framework/page.tsx`
**Problem**: Content was truncated/incomplete - NOT the full verbatim source
**Source File**: `C:\Gav_War_Room\whitepapers\The Sangedha Framework - A Causal Forensics Protocol for Algorithmic Negligence Attribution.pdf`
**Action Required**: Extract FULL content from PDF and replace page.tsx

### Issue 3: Verify Mens Rea Vector - Check if Verbatim
**Location**: `src/app/research/mens-rea-vector/page.tsx`
**Source File**: `C:\Gav_War_Room\whitepapers\The Mens Rea Vector - AI-Driven Epistemic Analysis for Quantifying Executive Liability.pdf`
**Action Required**: Compare page content against PDF - ensure verbatim match

### Issue 4: Verify Byzantine Calculus - Check if Verbatim  
**Location**: `src/app/research/byzantine-calculus/page.tsx`
**Source File**: `C:\Gav_War_Room\whitepapers\The Byzantine Calculus - Quantifying Distributed Ledger Security as Enterprise Financial Risk.pdf`
**Action Required**: Compare page content against PDF - ensure verbatim match

---

## PROJECT STRUCTURE (VERIFIED WORKING)

```
C:\Gav_War_Room\alphavectortech-site\
├── src/
│   ├── app/
│   │   ├── layout.tsx ✓
│   │   ├── page.tsx ✓ (homepage)
│   │   ├── globals.css ✓
│   │   ├── about/page.tsx ✓
│   │   ├── contact/page.tsx ✓
│   │   ├── methodologies/page.tsx ✓
│   │   └── research/
│   │       ├── mens-rea-vector/page.tsx ⚠️ VERIFY CONTENT
│   │       ├── byzantine-calculus/page.tsx ⚠️ VERIFY CONTENT
│   │       └── sangedha-framework/page.tsx ❌ NEEDS FULL CONTENT
│   └── components/
│       ├── Navigation.tsx ⚠️ FIX RESEARCH LINK
│       ├── Footer.tsx ✓
│       └── ResearchCard.tsx ✓
├── public/
│   └── logo-cyan.png ✓ (user's logo)
├── next.config.mjs ✓ (renamed from .ts)
├── tailwind.config.ts ✓
├── tsconfig.json ✓ (added baseUrl: ".")
└── package.json ✓
```

---

## BUILD STATUS

**Last Build**: SUCCESSFUL
**Command**: `npm run build`
**Output**: All 10 pages generated successfully

---

## DEPLOYMENT

**Platform**: Vercel (attempted)
**Note**: User mentioned unpaid Vercel invoice - may need alternative
**Alternative Options**:
- Cloudflare Pages: `npx wrangler pages deploy out --project-name=alphavectortech`
- Manual: Upload `out/` folder contents

---

## SOURCE PDF LOCATIONS

All source PDFs are in: `C:\Gav_War_Room\whitepapers\`

1. `The Mens Rea Vector - AI-Driven Epistemic Analysis for Quantifying Executive Liability.pdf`
2. `The Byzantine Calculus - Quantifying Distributed Ledger Security as Enterprise Financial Risk.pdf`
3. `The Sangedha Framework - A Causal Forensics Protocol for Algorithmic Negligence Attribution.pdf`

Also copies in: `C:\Gav_War_Room\` (root)

---

## PARTIAL CONTENT SAVED

User saved partial Claude outputs in: `C:\Gav_War_Room\claude_unfinished_files\`
- `srcappresearchsangedhaframeworkpage.txt` - 386 lines of Sangedha Framework (partial)
- `byzantine_started.txt` - 119 lines of Byzantine Calculus (partial)

---

## BUSINESS DETAILS (FOR SITE CONTENT)

- **Legal Entity**: ALPHA VECTOR TECH
- **ABN**: 50 353 196 500
- **Principal Researcher**: Gavin Sangedha
- **Domain**: alphavectortech.com
- **Email**: gavin.sangedha@alphavectortech.com
- **Location**: South Australia

---

## LOGO

User provided custom logo: `logo-cyan.png`
- Cyan "A" with arrow/vector design
- Already copied to `public/logo-cyan.png`
- Navigation.tsx and Footer.tsx updated to use it

---

## NEXT STEPS FOR NEW CLAUDE INSTANCE

1. READ the three source PDFs from `C:\Gav_War_Room\whitepapers\`
2. COMPARE each PDF against its corresponding page.tsx
3. REPLACE any truncated/incomplete content with FULL VERBATIM text
4. FIX Navigation.tsx research link (create dropdown or landing page)
5. REBUILD: `npm run build`
6. DEPLOY to working platform

---

## MASTER PROMPT REFERENCE

Full requirements document available in user's context - contains:
- Typography system specs
- Color system (CSS variables)
- Page structure requirements
- Deployment configuration

---

END OF HANDOVER
