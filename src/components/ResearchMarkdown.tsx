import type { ComponentPropsWithoutRef } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import type { Components } from "react-markdown"

interface ResearchMarkdownProps {
  content: string
}

type CodeProps = ComponentPropsWithoutRef<"code"> & {
  inline?: boolean
}

type CodeMeta = {
  badge: string
  channel: string
  status: string
  footer: string
  reference: string
}

const CODE_TEMPLATES: Record<string, CodeMeta> = {
  sql: {
    badge: "SQL // LEDGER TRACE",
    channel: "Query Stack",
    status: "Checksum Issued",
    footer: "Byzantine Calculus",
    reference: "Ref. BC-Σ.19",
  },
  python: {
    badge: "PYTHON // CAUSAL MODEL",
    channel: "Simulation Channel",
    status: "Integrity Verified",
    footer: "Mens Rea Vector",
    reference: "Ref. MRV-Ω.12",
  },
  typescript: {
    badge: "TS // INTERFACE SPEC",
    channel: "Telemetry Binding",
    status: "Chain Authenticated",
    footer: "Sangedha Framework",
    reference: "Ref. SF-Δ.08",
  },
}

const DEFAULT_CODE_META: CodeMeta = {
  badge: "AUTONOMOUS SPECIMEN",
  channel: "Execution Record",
  status: "Chain-of-Custody Recorded",
  footer: "Research Archive // AVT",
  reference: "FRE 902(14) Ready",
}

const resolveCodeMeta = (language?: string): CodeMeta => {
  if (!language) return DEFAULT_CODE_META
  return CODE_TEMPLATES[language] ?? DEFAULT_CODE_META
}

const components: Components = {
  hr: ({ className, ...props }) => (
    <hr {...props} className={`my-12 border-black/10 ${className ?? ""}`.trim()} />
  ),
  a: ({ children, ...props }) => (
    <a
      {...props}
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noreferrer" : undefined}
      className="text-[#4b6bff] underline decoration-dotted underline-offset-4 hover:text-[#2b3dbf]"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#4b6bff]/80 bg-white/80 px-6 py-4 text-[#010409]">
      {children}
    </blockquote>
  ),
  code({ inline, className, children, ...props }: CodeProps) {
    if (inline) {
      return (
        <code {...props} className={className}>
          {children}
        </code>
      )
    }

    const language = /language-(\w+)/.exec(className ?? "")?.[1]?.toLowerCase()
    const meta = resolveCodeMeta(language)

    return (
      <figure className="code-specimen" data-channel={meta.channel}>
        <div className="code-specimen__header">
          <div>
            <p className="code-specimen__eyebrow">Protocol Channel</p>
            <p className="code-specimen__title">{meta.badge}</p>
          </div>
          <div className="code-specimen__meta">
            <span>{meta.channel}</span>
            <span>{meta.status}</span>
          </div>
        </div>
        <pre data-language={meta.badge}>
          <code {...props} className={className}>
            {children}
          </code>
        </pre>
        <div className="code-specimen__footer">
          <span>{meta.footer}</span>
          <span>{meta.reference}</span>
        </div>
      </figure>
    )
  },
}

export default function ResearchMarkdown({ content }: ResearchMarkdownProps) {
  return (
    <div className="prose-research mt-10">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, [remarkMath, { singleDollarTextMath: false }]]}
        rehypePlugins={[rehypeKatex]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
