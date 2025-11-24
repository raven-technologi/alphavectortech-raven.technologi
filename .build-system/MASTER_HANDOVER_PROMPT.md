# MASTER HANDOVER PROMPT: Alpha Vector Technologies Website Build
## FOR ANY CLAUDE CONVERSATION TO CONTINUE THIS PROJECT

---

## 🚨 CRITICAL CONTEXT FOR CLAUDE

You are continuing a website build that has experienced multiple context failures. Files created by previous Claude sessions have been lost. **YOU MUST FOLLOW THE CHECKPOINT PROTOCOL BELOW OR FILES WILL BE LOST AGAIN.**

### THE PROBLEM
When Claude creates many files rapidly via Desktop Commander:
- Operations can fail silently
- Connections can drop mid-write
- Files appear created but contain nothing or partial content
- No verification happens, so neither Claude nor user knows until later

### THE SOLUTION
**AFTER EVERY FILE YOU CREATE:**
1. Call `get_file_info` on that file to verify it exists
2. Call `read_file` with `length: 10` to verify content was written
3. Create a checkpoint file in `.build-system/checkpoints/`
4. Update the BUILD_MANIFEST.md with status

**NEVER CREATE MORE THAN ONE FILE WITHOUT VERIFICATION.**

---

## PROJECT SPECIFICATION

### Identity
- **Business:** Alpha Vector Technologies
- **ABN:** 50 353 196 500
- **Principal:** Gavin Sangedha
- **Domain:** alphavectortech.com
- **Email:** gavin.sangedha@alphavectortech.com
- **Location:** South Australia

### Purpose
Institutional-grade website to serve as credibility anchor for Gavin Sangedha's legal action against Coinbase. Must display three research papers in their entirety with professional presentation suitable for SEC/Federal Court submission.

### Technical Stack
- Next.js 14+ with App Router
- Static export only (`output: 'export'` in next.config.ts)
- Tailwind CSS for styling
- Cloudflare Pages deployment
- **NO dynamic content loading** - all paper text hardcoded in components

---

## FILE LOCATIONS

### Project Root
```
C:\Gav_War_Room\alphavectortech-site\
```

### Build System (THIS FOLDER)
```
C:\Gav_War_Room\alphavectortech-site\.build-system\
├── BUILD_MANIFEST.md          ← Current status of all files
├── MASTER_HANDOVER_PROMPT.md  ← This document
└── checkpoints\               ← Verification records
```

### Source PDFs (Full Paper Content)
```
C:\Gav_War_Room\whitepapers\
├── The Mens Rea Vector - AI-Driven Epistemic Analysis for Quantifying Executive Liability.pdf
├── The Byzantine Calculus - Quantifying Distributed Ledger Security as Enterprise Financial Risk.pdf
└── The Sangedha Framework - A Causal Forensics Protocol for Algorithmic Negligence Attribution.pdf
```

### Partial Recovery Files
```
C:\Gav_War_Room\claude_unfinished_files\
├── srcappresearchsangedhaframeworkpage.txt  ← 386 lines of Sangedha Framework page
├── byzantine_started.txt                      ← 119 lines of Byzantine Calculus content
└── [other partial saves]
```

---

## CURRENT STATUS (Check BUILD_MANIFEST.md for latest)

### ✅ VERIFIED COMPLETE
- `src/app/layout.tsx` - Root layout with metadata
- `src/app/page.tsx` - Homepage with hero, research cards, about section
- `src/app/globals.css` - All CSS custom properties and styles
- `src/components/Navigation.tsx` - Fixed nav with mobile menu
- `src/components/Footer.tsx` - Footer with legal disclaimer
- `src/components/ResearchCard.tsx` - Card component for papers
- `src/app/research/mens-rea-vector/page.tsx` - FULL ~5,000 word paper
- `src/app/research/byzantine-calculus/page.tsx` - FULL ~5,000 word paper
- Config files (next.config.ts, package.json, tailwind.config.ts, etc.)

### ❌ FILES STILL NEEDED
1. `src/app/research/sangedha-framework/page.tsx`
   - Full ~5,500 word research paper
   - Partial content available in `claude_unfinished_files/srcappresearchsangedhaframeworkpage.txt`
   
2. `src/app/about/page.tsx`
   - Professional biography
   - Alpha Vector Technologies mission
   - Research philosophy
   - Notable discoveries
   
3. `src/app/contact/page.tsx`
   - Professional inquiry form
   - PGP public key section
   - Response time expectations
   - Legal representation notice
   
4. `src/app/methodologies/page.tsx`
   - Bug bounty approach
   - Responsible disclosure protocol
   - Forensic reconstruction techniques
   - Legal-technical synthesis methods

---

## CHECKPOINT PROTOCOL

### After Creating Each File:
```
1. WRITE FILE
   └─> Desktop Commander: write_file(path, content)

2. VERIFY EXISTS
   └─> Desktop Commander: get_file_info(path)
   └─> Confirm: isFile: true, size > 0

3. VERIFY CONTENT
   └─> Desktop Commander: read_file(path, length: 10)
   └─> Confirm: First lines match expected content

4. CREATE CHECKPOINT
   └─> Desktop Commander: write_file(
         ".build-system/checkpoints/CP_[TIMESTAMP]_[FILENAME].txt",
         "File: [path]\nStatus: VERIFIED\nLines: [count]\nFirst 100 chars: [preview]"
       )

5. UPDATE MANIFEST
   └─> Desktop Commander: edit_block(
         ".build-system/BUILD_MANIFEST.md",
         old_string: "[file row with ❌]",
         new_string: "[file row with ✅]"
       )
```

### If Verification Fails:
- DO NOT PROCEED to next file
- Retry the write operation
- If fails 3 times, STOP and inform user
- Document failure in checkpoint

---

## STYLE GUIDELINES

### Color System (in globals.css)
```css
--color-primary: #0A0F14;     /* Deep Charcoal */
--color-accent: #00D4FF;      /* Cyan */
--color-success: #10B981;     /* Emerald */
--surface-base: #0D1117;      /* Dark surface */
--text-primary: #F5F5F7;      /* Off-white */
--text-secondary: #A1A1A6;    /* Muted gray */
```

### Typography
- Primary: Inter
- Monospace: JetBrains Mono
- Paper content: prose-research class (serif-like)

### Component Patterns
- All pages import Navigation and Footer
- Research paper pages use `prose-research` div for content
- All pages are 'use client' for static export compatibility

---

## DEPLOYMENT COMMANDS

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare
npx wrangler pages deploy out --project-name=alphavectortech
```

---

## INSTRUCTIONS FOR CONTINUING CLAUDE

1. **FIRST:** Read `BUILD_MANIFEST.md` to see current status
2. **SECOND:** Identify which files are missing (marked ❌)
3. **THIRD:** For each missing file:
   - Check if partial content exists in `claude_unfinished_files/`
   - Create the file with FULL content (no placeholders)
   - Follow checkpoint protocol
   - Update manifest
4. **FOURTH:** After all files complete, run `npm run build` to verify
5. **FIFTH:** Update manifest with BUILD VERIFIED status

---

## CONTACT FOR QUESTIONS

If unclear on any requirement, the user (Gavin Sangedha) can clarify. Do not make assumptions about:
- Legal claims or statements
- Specific technical details about the Coinbase case
- Content of research papers (use PDFs as source of truth)

---

**This document is the single source of truth for project continuity.**
**Any Claude continuing this project MUST read this first.**

