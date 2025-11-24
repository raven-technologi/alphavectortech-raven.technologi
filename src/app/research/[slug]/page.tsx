import { getPaperBySlug, researchPapers, getCapstone } from "@/lib/research-papers";
import { promises as fs } from "fs";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Download, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./paper.css";

export async function generateStaticParams() {
  return researchPapers.map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paper = getPaperBySlug(slug);
  if (!paper) return { title: "Paper Not Found" };
  
  return {
    title: `${paper.title} | Alpha Vector Technologies`,
    description: paper.abstract,
    keywords: paper.keywords.join(", "),
  };
}

export default async function PaperDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const paper = getPaperBySlug(slug);
  if (!paper) notFound();

  const capstone = getCapstone();
  const isCapstone = paper.type === "capstone";

  let fullContent = "";
  if (paper.fullContentPath) {
    try {
      const filePath = path.join(process.cwd(), "public", paper.fullContentPath);
      fullContent = await fs.readFile(filePath, "utf-8");
      // Remove YAML frontmatter if present
      fullContent = fullContent.replace(/^---[\s\S]*?---\s*/m, "");
    } catch (error) {
      console.error("Error loading paper content:", error);
      fullContent = `# Content Error\nCould not load research paper content. Please contact administrator.`;
    }
  }

  // Extract headings for TOC
  const headings = fullContent.match(/^#{1,3}\s+.+$/gm) || [];
  const toc = headings.slice(0, 15).map((heading) => {
    const level = (heading.match(/^#+/) || [""])[0].length;
    const text = heading.replace(/^#+\s+/, "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return { level, text, id };
  });

  return (
    <div className="w-full min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <Link 
          href="/research" 
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-700 hover:text-cyan-800 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return to Research Index
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-12">
          
          {/* Left Sidebar - TOC */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Document Metadata */}
              <div className="border-b border-slate-200 pb-4">
                <p className="font-mono text-xs text-slate-500 mb-1">{paper.documentId}</p>
                <p className="font-mono text-xs text-slate-400">{paper.date}</p>
                <div className="mt-2">
                  <span className="px-2 py-0.5 bg-cyan-700/10 text-cyan-800 font-mono text-xs uppercase">
                    {paper.status}
                  </span>
                </div>
              </div>

              {/* TOC */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-1 text-sm max-h-[50vh] overflow-y-auto">
                  {toc.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className={`block text-slate-600 hover:text-cyan-700 transition-colors truncate ${
                        item.level === 1 ? "font-medium" : 
                        item.level === 2 ? "pl-3 text-xs" : 
                        "pl-6 text-xs text-slate-500"
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Download */}
              {paper.pdfPath && (
                <div className="pt-4 border-t border-slate-200">
                  <a href={paper.pdfPath} download>
                    <Button variant="outline" size="sm" className="w-full font-mono text-xs">
                      <Download className="w-3 h-3 mr-2" />
                      Download PDF
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Dossier Header */}
            <header className="border-b border-slate-200 pb-8 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm text-slate-500">{paper.documentId}</span>
                <span className="text-slate-300">|</span>
                <span className="text-sm text-slate-500">{paper.classification}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-3">
                {paper.title}
              </h1>
              
              {paper.subtitle && (
                <p className="text-xl text-cyan-700 font-light mb-6">
                  {paper.subtitle}
                </p>
              )}

              <p className="text-slate-600 leading-relaxed max-w-3xl mb-6">
                {paper.abstract}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {paper.keywords.map((keyword) => (
                  <span 
                    key={keyword} 
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-mono"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </header>

            {/* Cross-Reference Banner for Doctrines */}
            {!isCapstone && capstone && (
              <div className="bg-slate-50 border-l-4 border-cyan-700 p-4 mb-12">
                <p className="text-sm text-slate-700">
                  <strong className="font-medium">Integrated Research Notice:</strong>{" "}
                  This doctrine is a specialized component of the foundational treatise.
                </p>
                <Link 
                  href={`/research/${capstone.slug}`}
                  className="inline-flex items-center gap-2 mt-2 text-sm text-cyan-700 hover:underline font-medium"
                >
                  <FileText className="w-4 h-4" />
                  Access The Sangedha Framework →
                </Link>
              </div>
            )}

            {/* Markdown Body */}
            <article className="paper-content prose prose-slate max-w-none 
              prose-headings:font-light prose-headings:tracking-tight
              prose-h1:text-3xl prose-h1:border-b prose-h1:border-slate-200 prose-h1:pb-4 prose-h1:mb-6
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8
              prose-p:text-slate-700 prose-p:leading-relaxed
              prose-strong:text-slate-900 prose-strong:font-medium
              prose-code:text-cyan-700 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-slate-900 prose-pre:text-slate-100
              prose-blockquote:border-cyan-700 prose-blockquote:bg-slate-50 prose-blockquote:italic
              prose-table:text-sm
              prose-th:bg-slate-100 prose-th:font-medium
              prose-td:border-slate-200
            ">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children, ...props }) => {
                    const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    return <h1 id={id} {...props}>{children}</h1>;
                  },
                  h2: ({ children, ...props }) => {
                    const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    return <h2 id={id} {...props}>{children}</h2>;
                  },
                  h3: ({ children, ...props }) => {
                    const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    return <h3 id={id} {...props}>{children}</h3>;
                  },
                }}
              >
                {fullContent}
              </ReactMarkdown>
            </article>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-slate-500 font-mono">
                  {paper.documentId} • {paper.date} • Alpha Vector Technologies
                </p>
                <div className="flex gap-4">
                  {paper.pdfPath && (
                    <a 
                      href={paper.pdfPath} 
                      download
                      className="text-xs font-mono text-cyan-700 hover:underline"
                    >
                      Download PDF →
                    </a>
                  )}
                  <Link 
                    href="/research"
                    className="text-xs font-mono text-slate-600 hover:text-cyan-700"
                  >
                    View All Research →
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
