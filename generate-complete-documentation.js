#!/usr/bin/env node

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ALPHA VECTOR TECHNOLOGIES - COMPLETE PROJECT DOCUMENTATION GENERATOR
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * PURPOSE:
 * Generates a comprehensive, institutional-grade documentation file of the
 * entire Alpha Vector Technologies website project. This document provides
 * AI systems with complete context for making intelligent modifications while
 * preserving architectural integrity, SEO optimization, and business logic.
 *
 * OUTPUT:
 * A single, beautifully formatted text file containing:
 * - Complete project architecture analysis
 * - Full source code of all files
 * - Component relationships and dependencies
 * - SEO strategy and implementation
 * - Routing structure and data flows
 * - Business logic and configuration
 * - Research paper metadata and content
 * - Development guidelines and best practices
 *
 * USAGE:
 * node generate-complete-documentation.js
 *
 * AUTHOR: Generated for Alpha Vector Technologies
 * VERSION: 1.0.0
 * DATE: November 2025
 * ═══════════════════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const CONFIG = {
  projectRoot: __dirname,
  outputFile: 'COMPLETE_PROJECT_DOCUMENTATION.txt',
  projectName: 'Alpha Vector Technologies Website',

  // Directories to exclude from documentation
  excludeDirs: [
    'node_modules',
    '.next',
    '.git',
    'dist',
    'build',
    'coverage',
    '.vscode',
    '.idea'
  ],

  // File patterns to exclude
  excludePatterns: [
    /.*:Zone\.Identifier$/,
    /\.DS_Store$/,
    /\.env\.local$/,
    /\.env\.production$/
  ],

  // Binary extensions to skip content reading
  binaryExtensions: [
    '.png', '.jpg', '.jpeg', '.gif', '.ico', '.pdf', '.woff', '.woff2',
    '.ttf', '.eot', '.svg', '.mp4', '.webm', '.ogg', '.mp3', '.wav',
    '.zip', '.tar', '.gz', '.rar', '.7z'
  ],

  // File categories for organization
  categories: {
    config: ['package.json', 'tsconfig.json', 'next.config.ts', 'eslint.config.mjs', 'postcss.config.mjs', '.gitignore'],
    pages: ['src/app/**/*.tsx', 'src/app/**/*.ts'],
    components: ['src/components/**/*.tsx', 'src/components/**/*.ts'],
    lib: ['src/lib/**/*.ts', 'src/lib/**/*.tsx'],
    styles: ['src/app/**/*.css', '**/*.css'],
    public: ['public/**/*'],
    docs: ['README.md', '*.md']
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Check if a file is binary based on extension
 */
function isBinaryFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return CONFIG.binaryExtensions.includes(ext);
}

/**
 * Check if path should be excluded
 */
function shouldExclude(filePath) {
  const relativePath = path.relative(CONFIG.projectRoot, filePath);

  // Check excluded directories
  for (const dir of CONFIG.excludeDirs) {
    if (relativePath.includes(dir)) return true;
  }

  // Check excluded patterns
  for (const pattern of CONFIG.excludePatterns) {
    if (pattern.test(relativePath)) return true;
  }

  return false;
}

/**
 * Recursively get all files in directory
 */
function getAllFiles(dirPath, fileList = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);

    if (shouldExclude(filePath)) return;

    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Get file category based on path
 */
function getFileCategory(filePath) {
  const relativePath = path.relative(CONFIG.projectRoot, filePath);
  const filename = path.basename(filePath);

  for (const [category, patterns] of Object.entries(CONFIG.categories)) {
    if (patterns.includes(filename)) return category;

    for (const pattern of patterns) {
      if (pattern.includes('**') || pattern.includes('*')) {
        const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
        if (regex.test(relativePath)) return category;
      }
    }
  }

  return 'other';
}

/**
 * Analyze file imports and dependencies
 */
function analyzeImports(content, filePath) {
  if (!content) return [];

  const imports = [];
  const importRegex = /import\s+(?:{[^}]*}|[\w*]+)\s+from\s+['"]([^'"]+)['"]/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    imports.push(match[1]);
  }

  return imports;
}

/**
 * Extract SEO metadata from file
 */
function extractSEOMetadata(content) {
  if (!content) return null;

  const metadata = {};

  // Look for Next.js metadata exports
  const metadataMatch = content.match(/export\s+const\s+metadata[^=]*=\s*({[\s\S]*?})\s*;?/);
  if (metadataMatch) {
    metadata.hasMetadata = true;
    metadata.raw = metadataMatch[1];
  }

  // Look for title
  const titleMatch = content.match(/title[:\s]*['"](.*?)['"]/);
  if (titleMatch) metadata.title = titleMatch[1];

  // Look for description
  const descMatch = content.match(/description[:\s]*['"](.*?)['"]/);
  if (descMatch) metadata.description = descMatch[1];

  // Look for keywords
  const keywordsMatch = content.match(/keywords[:\s]*\[([\s\S]*?)\]/);
  if (keywordsMatch) metadata.hasKeywords = true;

  return Object.keys(metadata).length > 0 ? metadata : null;
}

/**
 * Generate a beautiful header section
 */
function generateHeader(title, symbol = '═') {
  const width = 80;
  const padding = Math.floor((width - title.length - 2) / 2);

  return [
    symbol.repeat(width),
    symbol + ' '.repeat(padding) + title.toUpperCase() + ' '.repeat(width - padding - title.length - 2) + symbol,
    symbol.repeat(width)
  ].join('\n');
}

/**
 * Generate table of contents entry
 */
function generateTOC(files) {
  const toc = [];
  const categorized = {};

  files.forEach(file => {
    const category = getFileCategory(file);
    if (!categorized[category]) categorized[category] = [];
    categorized[category].push(file);
  });

  Object.entries(categorized).forEach(([category, files]) => {
    toc.push(`\n${category.toUpperCase()} (${files.length} files)`);
    files.forEach(file => {
      const relativePath = path.relative(CONFIG.projectRoot, file);
      const size = fs.statSync(file).size;
      toc.push(`  │ ${relativePath} (${formatFileSize(size)})`);
    });
  });

  return toc.join('\n');
}

/**
 * Format file size
 */
function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * Generate file checksum
 */
function generateChecksum(content) {
  return crypto.createHash('sha256').update(content).digest('hex').substring(0, 16);
}

// ═══════════════════════════════════════════════════════════════════════════
// DOCUMENTATION SECTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Generate executive summary
 */
function generateExecutiveSummary(files) {
  const stats = {
    totalFiles: files.length,
    totalSize: files.reduce((sum, f) => sum + fs.statSync(f).size, 0),
    categories: {},
    extensions: {}
  };

  files.forEach(file => {
    const category = getFileCategory(file);
    const ext = path.extname(file) || 'no extension';

    stats.categories[category] = (stats.categories[category] || 0) + 1;
    stats.extensions[ext] = (stats.extensions[ext] || 0) + 1;
  });

  return `
${generateHeader('EXECUTIVE SUMMARY')}

PROJECT: ${CONFIG.projectName}
GENERATED: ${new Date().toISOString()}
TOTAL FILES: ${stats.totalFiles}
TOTAL SIZE: ${formatFileSize(stats.totalSize)}

TECHNOLOGY STACK:
  │ Framework: Next.js 16.0.3 (App Router)
  │ Language: TypeScript 5.x
  │ UI Library: React 19.2.0
  │ Styling: Tailwind CSS 4.x
  │ Animations: Framer Motion 12.x
  │ Icons: Lucide React
  │ Markdown: React Markdown with Remark GFM
  │ PDF Generation: PDF-lib

PROJECT STRUCTURE:
${Object.entries(stats.categories).map(([cat, count]) =>
  `  │ ${cat.padEnd(15)} : ${count} files`
).join('\n')}

FILE TYPES:
${Object.entries(stats.extensions).map(([ext, count]) =>
  `  │ ${ext.padEnd(15)} : ${count} files`
).join('\n')}

BUSINESS CONTEXT:
  │ Company: Alpha Vector Technologies
  │ ABN: 50 353 196 500
  │ Domain: alphavectortech.com
  │ Focus: Forensic Methodologies for Digital Accountability
  │ Principal Researcher: Gavin Sangedha
  │ Research Papers: 7 institutional-grade papers
  │ Total Market Addressable: $32B across all research verticals

SEO STRATEGY:
  │ Target Keywords: Digital forensics, AI accountability, cryptocurrency security
  │ Content Marketing: Research papers as lead magnets
  │ Technical SEO: Next.js metadata API, semantic HTML, OpenGraph tags
  │ Link Building: Academic citations, peer-reviewed sources

ROUTING ARCHITECTURE:
  │ / (Home) - Landing page with wireframe network visualization
  │ /research - Research papers listing
  │ /research/[slug] - Individual paper pages (7 dynamic routes)
  │ /methodologies - Methodologies overview
  │ /about - About page with founder bio
  │ /contact - Contact page with email form

KEY COMPONENTS:
  │ Navbar - Global navigation with responsive design
  │ Footer - Company info, links, copyright
  │ WireframeNetwork - Animated 3D network visualization (Framer Motion)
  │ UI Components - Shadcn-style button and card components

DATA ARCHITECTURE:
  │ Site Config (src/config/site.ts) - Centralized configuration
  │ Research Papers DB (src/lib/research-papers.ts) - 7 papers with full metadata
  │ PDF Assets (public/papers/) - 7 PDFs + 7 enhanced markdown versions
  │ Utilities (src/lib/utils.ts) - Tailwind merge helpers

═══════════════════════════════════════════════════════════════════════════
`;
}

/**
 * Generate architecture analysis
 */
function generateArchitectureAnalysis() {
  return `
${generateHeader('ARCHITECTURE ANALYSIS')}

DESIGN PATTERNS:
  │ Pattern: Next.js App Router (File-based routing)
  │ Structure: Feature-based organization
  │ State: No global state management (server components)
  │ Styling: Utility-first CSS (Tailwind)
  │ Type Safety: Full TypeScript coverage

COMPONENT HIERARCHY:
  │
  │ RootLayout (src/app/layout.tsx)
  │   ├─ Navbar (src/components/navbar.tsx)
  │   ├─ [Page Content]
  │   │   ├─ HomePage (src/app/page.tsx)
  │   │   │   └─ WireframeNetwork (src/components/wireframe-network.tsx)
  │   │   ├─ ResearchPage (src/app/research/page.tsx)
  │   │   │   └─ Card components for each paper
  │   │   ├─ ResearchDetailPage (src/app/research/[slug]/page.tsx)
  │   │   │   └─ Dynamic markdown rendering
  │   │   ├─ MethodologiesPage (src/app/methodologies/page.tsx)
  │   │   ├─ AboutPage (src/app/about/page.tsx)
  │   │   └─ ContactPage (src/app/contact/page.tsx)
  │   └─ Footer (src/components/footer.tsx)

DATA FLOW:
  │
  │ Site Configuration Flow:
  │   siteConfig (src/config/site.ts)
  │     ├─ Consumed by layout.tsx for metadata
  │     ├─ Consumed by navbar.tsx for navigation
  │     └─ Consumed by footer.tsx for company info
  │
  │ Research Papers Flow:
  │   researchPapers[] (src/lib/research-papers.ts)
  │     ├─ Displayed in listing (src/app/research/page.tsx)
  │     └─ getPaperBySlug() → Detail pages (src/app/research/[slug]/page.tsx)
  │         └─ Loads markdown from public/papers/ENHANCED_*.md
  │             └─ Rendered with react-markdown + remark-gfm

ROUTING STRATEGY:
  │
  │ Static Routes (Pre-rendered at build time):
  │   ├─ / (Home page)
  │   ├─ /research (Papers listing)
  │   ├─ /methodologies
  │   ├─ /about
  │   └─ /contact
  │
  │ Dynamic Routes (Generated from data):
  │   └─ /research/[slug]
  │       ├─ /research/ghost-in-machine
  │       ├─ /research/chimera-doctrine
  │       ├─ /research/byzantine-calculus
  │       ├─ /research/coercion-doctrine
  │       ├─ /research/dependency-nexus
  │       ├─ /research/enclave-exposure
  │       └─ /research/geopolitics-silicon

SEO OPTIMIZATION:
  │
  │ Metadata Strategy:
  │   ├─ Root Layout: Default metadata with OpenGraph
  │   ├─ Page-level: generateMetadata() for dynamic routes
  │   ├─ Keywords: Comprehensive SEO keywords in siteConfig
  │   └─ Structured Data: Author, publisher metadata
  │
  │ Technical SEO:
  │   ├─ Semantic HTML (proper heading hierarchy)
  │   ├─ Mobile-responsive (Tailwind breakpoints)
  │   ├─ Performance: Next.js optimization (Image, Font, Script)
  │   ├─ Sitemap: Auto-generated by Next.js
  │   └─ Robots.txt: Configured in metadata

EXTERNAL DEPENDENCIES:
  │
  │ Core Framework:
  │   └─ next@16.0.3 - React framework with App Router
  │
  │ UI & Styling:
  │   ├─ tailwindcss@4 - Utility-first CSS
  │   ├─ class-variance-authority@0.7.1 - Component variants
  │   ├─ clsx@2.1.1 - Conditional classes
  │   ├─ tailwind-merge@3.4.0 - Merge Tailwind classes
  │   ├─ framer-motion@12.23.24 - Animations
  │   └─ lucide-react@0.554.0 - Icon library
  │
  │ Content Rendering:
  │   ├─ react-markdown@10.1.0 - Markdown to React
  │   ├─ remark-gfm@4.0.1 - GitHub Flavored Markdown
  │   ├─ rehype-raw@7.0.0 - HTML in Markdown
  │   ├─ marked@17.0.0 - Markdown parser
  │   └─ pdf-lib@1.17.1 - PDF generation
  │
  │ Development:
  │   ├─ typescript@5 - Type safety
  │   ├─ eslint@9 - Code linting
  │   └─ @tailwindcss/postcss@4 - CSS processing

SECURITY CONSIDERATIONS:
  │
  │ Input Validation:
  │   └─ Dynamic routes validated against researchPapers database
  │
  │ XSS Prevention:
  │   ├─ React auto-escapes all content
  │   └─ rehype-raw sanitizes HTML in markdown
  │
  │ Dependencies:
  │   └─ Regular npm audit for vulnerabilities

PERFORMANCE OPTIMIZATION:
  │
  │ Build-time:
  │   ├─ Static generation for all routes
  │   └─ Automatic code splitting
  │
  │ Runtime:
  │   ├─ Font optimization (Inter Tight via next/font)
  │   ├─ Lazy loading for heavy components
  │   └─ Framer Motion animations optimized

DEPLOYMENT STRATEGY:
  │
  │ Platform: Vercel (recommended for Next.js)
  │ Build Command: npm run build
  │ Output: .next/ directory (static + server)
  │ Environment: Node.js 20+
  │ Domain: alphavectortech.com

═══════════════════════════════════════════════════════════════════════════
`;
}

/**
 * Generate full file documentation
 */
function generateFileDocumentation(filePath) {
  const relativePath = path.relative(CONFIG.projectRoot, filePath);
  const stats = fs.statSync(filePath);
  const category = getFileCategory(filePath);
  const isBinary = isBinaryFile(filePath);

  let doc = `\n${generateHeader(relativePath, '─')}\n\n`;
  doc += `FILE METADATA:\n`;
  doc += `  Path:     ${relativePath}\n`;
  doc += `  Category: ${category}\n`;
  doc += `  Size:     ${formatFileSize(stats.size)}\n`;
  doc += `  Modified: ${stats.mtime.toISOString()}\n`;

  if (isBinary) {
    doc += `  Type:     Binary file (content not included)\n`;
    doc += `\n[This is a binary file - content omitted for brevity]\n`;
    return doc;
  }

  let content = '';
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    doc += `\n[Error reading file: ${err.message}]\n`;
    return doc;
  }

  const checksum = generateChecksum(content);
  const lines = content.split('\n').length;
  const imports = analyzeImports(content, filePath);
  const seo = extractSEOMetadata(content);

  doc += `  Lines:    ${lines}\n`;
  doc += `  Checksum: ${checksum}\n`;

  if (imports.length > 0) {
    doc += `\nDEPENDENCIES:\n`;
    imports.forEach(imp => {
      doc += `  │ import from "${imp}"\n`;
    });
  }

  if (seo) {
    doc += `\nSEO METADATA:\n`;
    if (seo.title) doc += `  │ Title: ${seo.title}\n`;
    if (seo.description) doc += `  │ Description: ${seo.description}\n`;
    if (seo.hasKeywords) doc += `  │ Has Keywords: Yes\n`;
    if (seo.hasMetadata) doc += `  │ Has Next.js Metadata Export: Yes\n`;
  }

  doc += `\nFULL CONTENT:\n`;
  doc += `┌${'─'.repeat(78)}┐\n`;

  content.split('\n').forEach((line, idx) => {
    const lineNum = String(idx + 1).padStart(4, ' ');
    doc += `│ ${lineNum} │ ${line}\n`;
  });

  doc += `└${'─'.repeat(78)}┘\n`;

  return doc;
}

/**
 * Generate component relationship graph
 */
function generateComponentGraph(files) {
  const graph = {};

  files.forEach(file => {
    if (!file.endsWith('.tsx') && !file.endsWith('.ts')) return;

    const content = fs.readFileSync(file, 'utf8');
    const imports = analyzeImports(content, file);
    const relativePath = path.relative(CONFIG.projectRoot, file);

    graph[relativePath] = imports.filter(imp => imp.startsWith('@/') || imp.startsWith('.'));
  });

  let output = `\n${generateHeader('COMPONENT DEPENDENCY GRAPH')}\n\n`;

  Object.entries(graph).forEach(([file, deps]) => {
    if (deps.length > 0) {
      output += `${file}\n`;
      deps.forEach((dep, idx) => {
        const isLast = idx === deps.length - 1;
        const prefix = isLast ? '└─' : '├─';
        output += `  ${prefix} ${dep}\n`;
      });
      output += '\n';
    }
  });

  output += `═${'═'.repeat(78)}\n`;

  return output;
}

/**
 * Generate development guidelines
 */
function generateDevelopmentGuidelines() {
  return `
${generateHeader('DEVELOPMENT GUIDELINES')}

MAKING CHANGES TO THIS PROJECT:

1. CONFIGURATION CHANGES:
   │ The site is designed for easy customization through src/config/site.ts
   │ All branding, navigation, SEO keywords are centralized there
   │ Modifying siteConfig will propagate changes throughout the app

2. ADDING NEW PAGES:
   │ Create new route: src/app/[route-name]/page.tsx
   │ Add to navigation: Update siteConfig.mainNav in src/config/site.ts
   │ Include metadata: Export generateMetadata() or metadata object
   │ Follow naming: Use kebab-case for routes (e.g., /my-new-page)

3. ADDING RESEARCH PAPERS:
   │ Add PDF: public/papers/[filename].pdf
   │ Add Enhanced MD: public/papers/ENHANCED_[name].md
   │ Register paper: Add to researchPapers[] in src/lib/research-papers.ts
   │ Required fields: id, slug, documentId, title, author, date, abstract, keywords
   │ The dynamic route /research/[slug] will automatically pick it up

4. STYLING CHANGES:
   │ Global styles: src/app/globals.css
   │ Tailwind config: Uses Tailwind v4 with @tailwindcss/postcss
   │ Component styles: Use Tailwind utility classes
   │ Animations: Use framer-motion for complex animations

5. COMPONENT MODIFICATIONS:
   │ Navbar: src/components/navbar.tsx (reads from siteConfig)
   │ Footer: src/components/footer.tsx (reads from siteConfig)
   │ UI Components: src/components/ui/ (Shadcn-style components)
   │ Maintain TypeScript types for all props

6. SEO OPTIMIZATION:
   │ Page metadata: Use Next.js Metadata API
   │ Keywords: Update siteConfig.keywords for global SEO
   │ OpenGraph: Configured in layout.tsx metadata
   │ Dynamic pages: Use generateMetadata() for paper-specific SEO

7. BUILDING & DEPLOYMENT:
   │ Development: npm run dev (runs on localhost:3000)
   │ Production build: npm run build
   │ Start production: npm start
   │ Linting: npm run lint
   │ Deploy to Vercel: Push to main branch (auto-deploys)

8. BEST PRACTICES:
   │ Always use TypeScript - no 'any' types
   │ Server components by default (no 'use client' unless needed)
   │ Use semantic HTML for accessibility
   │ Mobile-first responsive design
   │ Keep components small and focused
   │ Extract reusable logic to src/lib/

9. COMMON TASKS:
   │
   │ Update company info:
   │   → Edit src/config/site.ts (founder, abn, contact info)
   │
   │ Change site description:
   │   → Edit siteConfig.description in src/config/site.ts
   │
   │ Add navigation link:
   │   → Add to siteConfig.mainNav array
   │
   │ Modify home page animation:
   │   → Edit src/components/wireframe-network.tsx
   │
   │ Update research paper content:
   │   → Edit public/papers/ENHANCED_[paper-name].md
   │   → Metadata in src/lib/research-papers.ts

10. TROUBLESHOOTING:
    │
    │ Build errors:
    │   → Check TypeScript errors: npm run build
    │   → Verify all imports resolve correctly
    │   → Ensure all required fields in research papers are present
    │
    │ Styling issues:
    │   → Clear .next folder: rm -rf .next
    │   → Rebuild: npm run build
    │   → Check Tailwind class names are valid
    │
    │ Dynamic routes not working:
    │   → Verify slug matches entry in researchPapers array
    │   → Check file exists at fullContentPath location
    │   → Ensure markdown file is properly formatted

═══════════════════════════════════════════════════════════════════════════
`;
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN DOCUMENTATION GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

async function generateCompleteDocumentation() {
  console.log('🚀 Starting documentation generation...\n');

  // Get all files
  console.log('📁 Scanning project files...');
  const allFiles = getAllFiles(CONFIG.projectRoot);
  const sortedFiles = allFiles.sort();

  console.log(`✅ Found ${sortedFiles.length} files\n`);

  // Start building documentation
  let documentation = '';

  // Title
  documentation += `
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║              ALPHA VECTOR TECHNOLOGIES WEBSITE                            ║
║              COMPLETE PROJECT DOCUMENTATION                               ║
║                                                                           ║
║              Comprehensive Technical & Business Documentation             ║
║              For AI-Assisted Development & Modifications                  ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝

Generated: ${new Date().toISOString()}
Total Files: ${sortedFiles.length}
Project: Alpha Vector Technologies Website (alphavectortech.com)
Version: 1.0.0

═══════════════════════════════════════════════════════════════════════════

PURPOSE OF THIS DOCUMENT:

This document provides a complete, institutional-grade snapshot of the entire
Alpha Vector Technologies website project. It is specifically designed to give
AI systems full context for understanding and modifying the codebase while
maintaining architectural integrity, SEO optimization, and business logic.

Every file, every relationship, every configuration detail is documented here
with comprehensive explanations suitable for enterprise-level development.

═══════════════════════════════════════════════════════════════════════════
`;

  console.log('📝 Generating executive summary...');
  documentation += generateExecutiveSummary(sortedFiles);

  console.log('🏗️  Generating architecture analysis...');
  documentation += generateArchitectureAnalysis();

  console.log('📊 Generating component dependency graph...');
  documentation += generateComponentGraph(sortedFiles);

  console.log('📚 Generating development guidelines...');
  documentation += generateDevelopmentGuidelines();

  console.log('📋 Generating table of contents...');
  documentation += `\n${generateHeader('TABLE OF CONTENTS')}\n`;
  documentation += generateTOC(sortedFiles);
  documentation += `\n${'═'.repeat(80)}\n`;

  console.log('📄 Documenting individual files...');
  documentation += `\n${generateHeader('COMPLETE FILE CONTENTS')}\n`;

  sortedFiles.forEach((file, idx) => {
    const relativePath = path.relative(CONFIG.projectRoot, file);
    console.log(`  [${idx + 1}/${sortedFiles.length}] ${relativePath}`);
    documentation += generateFileDocumentation(file);
  });

  // Footer
  documentation += `\n\n${generateHeader('END OF DOCUMENTATION')}\n\n`;
  documentation += `
This documentation was automatically generated and represents the complete
state of the Alpha Vector Technologies website project at the time of generation.

For updates or questions, contact: ${require(path.join(CONFIG.projectRoot, 'package.json')).name}

Generated by: Alpha Vector Technologies Documentation Generator v1.0.0
Timestamp: ${new Date().toISOString()}
Total Files Documented: ${sortedFiles.length}
Total Size of Project: ${formatFileSize(sortedFiles.reduce((sum, f) => sum + fs.statSync(f).size, 0))}

═══════════════════════════════════════════════════════════════════════════
`;

  // Write to file
  const outputPath = path.join(CONFIG.projectRoot, CONFIG.outputFile);
  console.log(`\n💾 Writing documentation to ${CONFIG.outputFile}...`);
  fs.writeFileSync(outputPath, documentation, 'utf8');

  const outputSize = fs.statSync(outputPath).size;
  console.log(`\n✨ Documentation generated successfully!`);
  console.log(`📊 Output file: ${CONFIG.outputFile}`);
  console.log(`📏 File size: ${formatFileSize(outputSize)}`);
  console.log(`📝 Total lines: ${documentation.split('\n').length.toLocaleString()}`);
  console.log(`\n🎉 Complete! You can now share this file with AI systems for analysis.\n`);
}

// ═══════════════════════════════════════════════════════════════════════════
// ENTRY POINT
// ═══════════════════════════════════════════════════════════════════════════

generateCompleteDocumentation().catch(err => {
  console.error('❌ Error generating documentation:', err);
  process.exit(1);
});
