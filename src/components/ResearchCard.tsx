import Link from 'next/link';

interface ResearchCardProps {
  title: string;
  subtitle: string;
  abstract: string;
  wordCount: string;
  href: string;
  index: number;
}

export default function ResearchCard({ title, subtitle, abstract, wordCount, href, index }: ResearchCardProps) {
  return (
    <div 
      className="research-card animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-accent font-mono text-xs uppercase tracking-wide">Research Paper</span>
        <span className="text-text-tertiary font-mono text-xs">{wordCount}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-text-primary mb-2 leading-tight">
        {title}
      </h3>
      
      <p className="text-accent text-sm mb-4 font-medium">
        {subtitle}
      </p>
      
      <p className="text-text-secondary text-sm leading-relaxed mb-6">
        {abstract}
      </p>
      
      <Link href={href} className="btn-secondary inline-flex items-center space-x-2 text-sm">
        <span>Read Full Paper</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
