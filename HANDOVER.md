# ALPHA VECTOR TECHNOLOGIES WEBSITE - HANDOVER DOCUMENT# ALPHA VECTOR TECHNOLOGIES WEBSITE - HANDOVER DOCUMENT

## Updated: 2025-11-25## Created: 2025-11-25

## Status: DEPLOYED - ALL ISSUES RESOLVED## Status: BUILD SUCCESSFUL - CONTENT ISSUES REMAIN



------



## RESOLVED ISSUES## CRITICAL ISSUES TO FIX



### Issue 1: Research Navigation Link### Issue 1: Research Navigation Link Points to Wrong Page

**Status**: FIXED**Location**: `src/components/Navigation.tsx` line ~27

**Resolution**: Created `src/app/research/page.tsx` as a main index for all research papers. Updated `Navigation.tsx` to link to `/research`.**Current**: `<Link href="/research/mens-rea-vector">`

**Should Be**: Either create `/research/page.tsx` landing page OR change to dropdown menu with all 3 papers

### Issue 2: Sangedha Framework Page Content

**Status**: FIXED### Issue 2: Sangedha Framework Page - NOT VERBATIM CONTENT

**Resolution**: Updated `src/app/research/sangedha-framework/page.tsx` with full verbatim content from the source markdown.**Location**: `src/app/research/sangedha-framework/page.tsx`

**Problem**: Content was truncated/incomplete - NOT the full verbatim source

### Issue 3: Mens Rea Vector Content**Source File**: `C:\Gav_War_Room\whitepapers\The Sangedha Framework - A Causal Forensics Protocol for Algorithmic Negligence Attribution.pdf`

**Status**: FIXED**Action Required**: Extract FULL content from PDF and replace page.tsx

**Resolution**: Updated `src/app/research/mens-rea-vector/page.tsx` with full verbatim content from the source markdown.

### Issue 3: Verify Mens Rea Vector - Check if Verbatim

### Issue 4: Byzantine Calculus Content**Location**: `src/app/research/mens-rea-vector/page.tsx`

**Status**: FIXED**Source File**: `C:\Gav_War_Room\whitepapers\The Mens Rea Vector - AI-Driven Epistemic Analysis for Quantifying Executive Liability.pdf`

**Resolution**: Updated `src/app/research/byzantine-calculus/page.tsx` with full verbatim content from the source markdown.**Action Required**: Compare page content against PDF - ensure verbatim match



### Issue 5: Cross-Linking### Issue 4: Verify Byzantine Calculus - Check if Verbatim  

**Status**: FIXED**Location**: `src/app/research/byzantine-calculus/page.tsx`

**Resolution**: Created `src/components/RelatedResearch.tsx` and added it to the footer of all research paper pages to allow easy navigation between papers.**Source File**: `C:\Gav_War_Room\whitepapers\The Byzantine Calculus - Quantifying Distributed Ledger Security as Enterprise Financial Risk.pdf`

**Action Required**: Compare page content against PDF - ensure verbatim match

---

---

## DEPLOYMENT

## PROJECT STRUCTURE (VERIFIED WORKING)

**Repository**: `https://github.com/raven-technologi/alphavectortech-raven.technologi`

**Branch**: `main````

**Status**: Pushed successfully. Cloudflare Pages deployment should be triggered automatically.C:\Gav_War_Room\alphavectortech-site\

├── src/

---│   ├── app/

│   │   ├── layout.tsx ✓

## PROJECT STRUCTURE│   │   ├── page.tsx ✓ (homepage)

│   │   ├── globals.css ✓

```│   │   ├── about/page.tsx ✓

C:\Gav_War_Room\alphavectortech-site\│   │   ├── contact/page.tsx ✓

├── src/│   │   ├── methodologies/page.tsx ✓

│   ├── app/│   │   └── research/

│   │   ├── layout.tsx│   │       ├── mens-rea-vector/page.tsx ⚠️ VERIFY CONTENT

│   │   ├── page.tsx│   │       ├── byzantine-calculus/page.tsx ⚠️ VERIFY CONTENT

│   │   ├── globals.css│   │       └── sangedha-framework/page.tsx ❌ NEEDS FULL CONTENT

│   │   ├── about/page.tsx│   └── components/

│   │   ├── contact/page.tsx│       ├── Navigation.tsx ⚠️ FIX RESEARCH LINK

│   │   ├── methodologies/page.tsx│       ├── Footer.tsx ✓

│   │   └── research/│       └── ResearchCard.tsx ✓

│   │       ├── page.tsx (Research Index)├── public/

│   │       ├── mens-rea-vector/page.tsx│   └── logo-cyan.png ✓ (user's logo)

│   │       ├── byzantine-calculus/page.tsx├── next.config.mjs ✓ (renamed from .ts)

│   │       └── sangedha-framework/page.tsx├── tailwind.config.ts ✓

│   └── components/├── tsconfig.json ✓ (added baseUrl: ".")

│       ├── Navigation.tsx└── package.json ✓

│       ├── Footer.tsx```

│       ├── ResearchCard.tsx

│       └── RelatedResearch.tsx---

├── src/lib/

│   └── research-data.ts (Centralized metadata)## BUILD STATUS

```

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
- **Location**: Global Operations

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
