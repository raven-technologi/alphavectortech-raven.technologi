import PageFrame from "@/components/PageFrame"
import RelatedResearch from "@/components/RelatedResearch"
import ResearchMarkdown from "@/components/ResearchMarkdown"
import { getVerbatimContent } from "@/lib/verbatim"

export default async function MensReaVectorPage() {
	const content = await getVerbatimContent("mens-rea-vector")

	return (
			<PageFrame
				tag="RESEARCH | 001"
				description="AI-Driven Epistemic Analysis for Quantifying Executive Liability"
				showHeading={false}
				showTagBarcode
			>
			<article className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10">
				<div className="flex flex-wrap gap-6 microtype text-[10px] tracking-[0.35em] text-[#010409]">
					<span>Published: Q4 2025</span>
					<span>Computational Law</span>
					<span>Read Time: 25 min</span>
				</div>

				<ResearchMarkdown content={content} />
			</article>

			<RelatedResearch currentPath="/research/mens-rea-vector" />
		</PageFrame>
	)
}
