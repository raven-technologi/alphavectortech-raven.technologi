import { getPaperBySlug, researchPapers, getCapstone } from "@/lib/research-papers";
import { promises as fs } from "fs";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Download, ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      fullContent = fullContent.replace(/^---[\s\S]*?---\s*/m, "");
    } catch (error) {
      console.error("Error loading paper content:", error);
      fullContent = `# Content Error\nCould not load research paper content.`;
    }
  }

  // Extract headings for TOC
  const headings = fullContent.match(/^#{1,3}\s+.+$/gm) || [];
  const toc = headings.slice(0, 20).map((heading) => {
    const level = (heading.match(/^#+/) || [""])[0].length;
    const text = heading.replace(/^#+\s+/, "").replace(/\*\*/g, "");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return { level, text, id };
  });

  return (
    <div className="min-h-screen bg-white">
      
      {/* Document Header */}
      <header className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-12">
          
          <Link 
            href="/research" 
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-cyan-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Research Index
          </Link>

          <div className="flex items-center gap-4 mb-4 text-xs font-mono text-slate-500">
            <span>{paper.documentId}</span>
            <span className="text-slate-300">|</span>
            <span>{paper.date}</span>
            <span className="text-slate-300">|</span>
            <span className="px-2 py-0.5 bg-cyan-700 text-white text-[10px] uppercase tracking-wider">
              {paper.status}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extralight tracking-tight text-slate-900 mb-3">
            {paper.title}
          </h1>
          
          {paper.subtitle && (
            <p className="text-xl md:text-2xl font-light text-cyan-700 mb-8">
              {paper.subtitle}
            </p>
          )}

          <p className="text-base text-slate-600 leading-relaxed max-w-3xl mb-8">
            {paper.abstract}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {paper.keywords.map((keyword) => (
              <span 
                key={keyword} 
                className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-mono"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {paper.pdfPath && (
              <a href={paper.pdfPath} download>
                <Button size="sm" className="font-mono text-xs uppercase tracking-widest">
                  <Download className="w-3 h-3 mr-2" />
                  Download PDF
                </Button>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* TOC Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 pb-2 border-b border-slate-100">
                Table of Contents
              </p>
              <nav className="space-y-1">
                {toc.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    className={`block text-sm leading-relaxed transition-colors hover:text-cyan-700 ${
                      item.level === 1 
                        ? "font-medium text-slate-800 py-1" 
                        : item.level === 2 
                          ? "pl-4 text-slate-600 text-[13px]" 
                          : "pl-8 text-slate-500 text-xs"
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>

              {/* Cross-reference for doctrines */}
              {!isCapstone && capstone && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
                    Parent Framework
                  </p>
                  <Link 
                    href={`/research/${capstone.slug}`}
                    className="flex items-center gap-2 text-sm text-cyan-700 hover:underline"
                  >
                    <FileText className="w-4 h-4" />
                    {capstone.title}
                  </Link>
                </div>
              )}
            </div>
          </aside>

          {/* Document Body */}
          <article className="lg:col-span-9 min-w-0">
            <div className="prose prose-slate max-w-none
              prose-headings:font-light prose-headings:tracking-tight prose-headings:text-slate-900
              prose-h1:text-3xl prose-h1:font-extralight prose-h1:mt-16 prose-h1:mb-6 prose-h1:pb-4 prose-h1:border-b prose-h1:border-slate-200
              prose-h2:text-2xl prose-h2:font-light prose-h2:mt-14 prose-h2:mb-4
              prose-h3:text-lg prose-h3:font-medium prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-slate-800
              prose-h4:text-base prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-slate-700
              prose-p:text-[15px] prose-p:leading-[1.8] prose-p:text-slate-700 prose-p:mb-4
              prose-strong:font-semibold prose-strong:text-slate-900
              prose-em:italic prose-em:text-slate-600
              prose-code:text-cyan-700 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:text-sm prose-pre:leading-relaxed prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-blockquote:border-l-2 prose-blockquote:border-cyan-700 prose-blockquote:bg-slate-50 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:not-italic prose-blockquote:text-slate-700
              prose-ul:my-4 prose-ul:pl-0 prose-ul:list-none
              prose-ol:my-4 prose-ol:pl-0
              prose-li:text-[15px] prose-li:leading-[1.8] prose-li:text-slate-700 prose-li:my-2 prose-li:pl-6 prose-li:relative prose-li:before:absolute prose-li:before:left-0 prose-li:before:text-cyan-700
              prose-table:text-sm prose-table:my-8
              prose-th:bg-slate-100 prose-th:font-medium prose-th:text-left prose-th:px-4 prose-th:py-3 prose-th:border prose-th:border-slate-200 prose-th:text-slate-800
              prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-slate-200 prose-td:align-top
              prose-hr:border-slate-200 prose-hr:my-16
              prose-a:text-cyan-700 prose-a:no-underline prose-a:font-medium hover:prose-a:underline
              prose-img:rounded-lg prose-img:shadow-md
              prose-figure:my-8
            ">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children, ...props }) => {
                    const text = String(children).replace(/\*\*/g, "");
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    return <h1 id={id} className="scroll-mt-8" {...props}>{children}</h1>;
                  },
                  h2: ({ children, ...props }) => {
                    const text = String(children).replace(/\*\*/g, "");
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    return <h2 id={id} className="scroll-mt-8" {...props}>{children}</h2>;
                  },
                  h3: ({ children, ...props }) => {
                    const text = String(children).replace(/\*\*/g, "");
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    return <h3 id={id} className="scroll-mt-8" {...props}>{children}</h3>;
                  },
                  ul: ({ children }) => (
                    <ul className="my-4 space-y-2">{children}</ul>
                  ),
                  li: ({ children }) => (
                    <li className="relative pl-6 text-[15px] leading-[1.8] text-slate-700">
                      <span className="absolute left-0 text-cyan-700 font-bold">—</span>
                      {children}
                    </li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-2 border-cyan-700 bg-slate-50 pl-6 pr-6 py-4 my-8 text-slate-700 text-[15px]">
                      {children}
                    </blockquote>
                  ),
                  table: ({ children }) => (
                    <div className="my-8 overflow-x-auto border border-slate-200 rounded-lg">
                      <table className="w-full text-sm">{children}</table>
                    </div>
                  ),
                }}
              >
                {fullContent}
              </ReactMarkdown>
            </div>

            {/* Document Footer */}
            <footer className="mt-20 pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-500">
                <div className="font-mono">
                  {paper.documentId} · {paper.classification}
                </div>
                <div className="flex gap-6">
                  {paper.pdfPath && (
                    <a href={paper.pdfPath} download className="text-cyan-700 hover:underline font-medium">
                      Download PDF
                    </a>
                  )}
                  <Link href="/research" className="hover:text-cyan-700">
                    View All Research
                  </Link>
                </div>
              </div>
              <p className="mt-6 text-xs text-slate-400">
                © 2025 Alpha Vector Technologies (ABN 50 353 196 500). All rights reserved.
              </p>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
}
