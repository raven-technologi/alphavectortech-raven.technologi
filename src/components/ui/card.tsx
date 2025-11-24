import { cn } from "@/lib/utils";
import * as React from "react";

interface ResearchArtifactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  documentId: string;
  classification: string;
  title: string;
  tags: string[];
  footerItems: { label: string; value: string }[];
}

const ResearchArtifactCard = React.forwardRef<
  HTMLDivElement,
  ResearchArtifactCardProps
>(
  (
    {
      className,
      documentId,
      classification,
      title,
      tags,
      footerItems,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex flex-col justify-between border border-secondary bg-background p-4 transition-colors hover:border-primary/50",
          className
        )}
        {...props}
      >
        {/* Header */}
        <header className="flex items-center justify-between">
          <span className="font-mono text-xs text-slate-500">{documentId}</span>
          <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
            {classification}
          </span>
        </header>

        {/* Body */}
        <div className="my-4 flex-grow">
          <h3 className="font-sans text-2xl font-light text-slate-800">
            {title}
          </h3>
          <div className="prose prose-slate prose-sm mt-2 text-slate-600">
            {children}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-secondary pt-3">
          <div className="flex items-center justify-between text-xs">
            {footerItems.map((item, i) => (
              <div key={i}>
                <span className="text-slate-500">{item.label}: </span>
                <span className="font-mono text-slate-700">{item.value}</span>
              </div>
            ))}
          </div>
        </footer>
      </div>
    );
  }
);
ResearchArtifactCard.displayName = "ResearchArtifactCard";

export { ResearchArtifactCard };
