# ALPHA VECTOR TECHNOLOGIES WEBSITE - BUILD MANIFEST
## Version: 1.0.0 | Last Updated: 2025-11-25T06:30:00+10:30

---

## PROJECT IDENTITY
- **Project:** Alpha Vector Technologies Institutional Website
- **Domain:** alphavectortech.com
- **ABN:** 50 353 196 500
- **Principal:** Gavin Sangedha
- **Location:** South Australia

---

## BUILD STATUS TRACKING

### VERIFIED COMPLETE FILES ✅
| File Path | Status | Lines | Size | Verified |
|-----------|--------|-------|------|----------|
| `src/app/layout.tsx` | ✅ COMPLETE | 35 | ~1.2KB | 2025-11-25 |
| `src/app/page.tsx` | ✅ COMPLETE | 168 | ~6.5KB | 2025-11-25 |
| `src/app/globals.css` | ✅ COMPLETE | TBD | TBD | 2025-11-25 |
| `src/components/Navigation.tsx` | ✅ COMPLETE | 62 | ~2KB | 2025-11-25 |
| `src/components/Footer.tsx` | ✅ COMPLETE | 88 | ~3KB | 2025-11-25 |
| `src/components/ResearchCard.tsx` | ✅ COMPLETE | TBD | TBD | 2025-11-25 |
| `src/app/research/mens-rea-vector/page.tsx` | ✅ COMPLETE | 409 | 32KB | 2025-11-25 |
| `src/app/research/byzantine-calculus/page.tsx` | ✅ COMPLETE | 194 | 30KB | 2025-11-25 |
| `next.config.ts` | ✅ COMPLETE | TBD | TBD | 2025-11-25 |
| `package.json` | ✅ COMPLETE | TBD | TBD | 2025-11-25 |
| `tailwind.config.ts` | ✅ COMPLETE | TBD | TBD | 2025-11-25 |
| `tsconfig.json` | ✅ COMPLETE | TBD | TBD | 2025-11-25 |
| `postcss.config.mjs` | ✅ COMPLETE | TBD | TBD | 2025-11-25 |

### PENDING FILES ❌
| File Path | Status | Priority | Notes |
|-----------|--------|----------|-------|
| `src/app/research/sangedha-framework/page.tsx` | ❌ MISSING | HIGH | Partial content in claude_unfinished_files |
| `src/app/about/page.tsx` | ❌ MISSING | MEDIUM | Professional bio page |
| `src/app/contact/page.tsx` | ❌ MISSING | MEDIUM | Contact form & PGP key |
| `src/app/methodologies/page.tsx` | ❌ MISSING | LOW | Research methodology overview |

---

## CHECKPOINT PROTOCOL

After creating EACH file, Claude MUST:
1. Verify file exists with `get_file_info`
2. Read first 10 lines to confirm content
3. Update this manifest with status
4. Save checkpoint to `.build-system/checkpoints/`

### Checkpoint Format:
```
CHECKPOINT_[TIMESTAMP]_[FILENAME].txt
- File: [path]
- Status: CREATED/VERIFIED/FAILED
- Lines: [count]
- First 100 chars: [preview]
```

---

## RECOVERY SOURCES

If files are lost, content can be recovered from:

1. **Partial Saves:** `C:\Gav_War_Room\claude_unfinished_files\`
   - `srcappresearchsangedhaframeworkpage.txt` (386 lines of Sangedha Framework)
   - `byzantine_started.txt` (119 lines)

2. **Source PDFs:** `C:\Gav_War_Room\whitepapers\`
   - `The Mens Rea Vector - AI-Driven Epistemic Analysis for Quantifying Executive Liability.pdf`
   - `The Byzantine Calculus - Quantifying Distributed Ledger Security as Enterprise Financial Risk.pdf`
   - `The Sangedha Framework - A Causal Forensics Protocol for Algorithmic Negligence Attribution.pdf`

3. **This Manifest:** Always check `.build-system/BUILD_MANIFEST.md` first

---

## DEPLOYMENT TARGET

- **Platform:** Cloudflare Pages
- **Build Command:** `npm run build`
- **Output Directory:** `out/`
- **Deploy Command:** `npx wrangler pages deploy out --project-name=alphavectortech`

---

## CRITICAL REQUIREMENTS

1. **NO DYNAMIC LOADING** - All paper content must be hardcoded in page components
2. **STATIC EXPORT ONLY** - next.config.ts must have `output: 'export'`
3. **ALL PAPERS COMPLETE** - No placeholders, excerpts, or "read more" truncation
4. **INSTITUTIONAL GRADE** - Professional enough for SEC/Federal Court submissions

---

## UPDATE LOG

| Timestamp | Action | Files Affected | Status |
|-----------|--------|----------------|--------|
| 2025-11-25T06:30 | Initial manifest created | BUILD_MANIFEST.md | ✅ |
| | | | |

