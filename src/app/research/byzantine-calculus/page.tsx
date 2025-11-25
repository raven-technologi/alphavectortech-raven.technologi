import PageFrame from "@/components/PageFrame"
import RelatedResearch from "@/components/RelatedResearch"
import ResearchMarkdown from "@/components/ResearchMarkdown"
import { getVerbatimContent } from "@/lib/verbatim"

export default async function ByzantineCalculusPage() {
	const content = await getVerbatimContent("byzantine-calculus")

	return (
		<PageFrame
			tag="RESEARCH | 002"
			description="Quantifying Distributed Ledger Security as Enterprise Financial Risk"
			showHeading={false}
			showTagBarcode
		>
			<article className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10">
				<div className="flex flex-wrap gap-6 microtype text-[10px] tracking-[0.35em] text-[#010409]">
					<span>Published: Q4 2025</span>
					<span>Cryptoeconomics</span>
					<span>Read Time: 35 min</span>
				</div>

				<ResearchMarkdown content={content} />
			</article>

			<RelatedResearch currentPath="/research/byzantine-calculus" />
		</PageFrame>
	)
}
