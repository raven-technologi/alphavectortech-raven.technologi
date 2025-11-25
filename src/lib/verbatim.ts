import { promises as fs } from "node:fs"
import path from "node:path"

const FILE_CANDIDATES = {
  "mens-rea-vector": [
    "Mens-Rea-Vector.md",
    "The Mens Rea Vector.md",
  ],
  "byzantine-calculus": [
    "Byzantine-Calculus.md",
    "The Byzantine Calculus.md",
  ],
  "sangedha-framework": [
    "Sangedha-Framework.md",
    "The Sangedha Framework.md",
  ],
} as const

export type VerbatimSlug = keyof typeof FILE_CANDIDATES

const VERBATIM_DIR = path.join(process.cwd(), "source-verbatim")

async function resolveVerbatimFile(slug: VerbatimSlug) {
  const candidates = FILE_CANDIDATES[slug]

  for (const fileName of candidates) {
    const filePath = path.join(VERBATIM_DIR, fileName)

    try {
      await fs.access(filePath)
      return filePath
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
        throw error
      }
    }
  }

  throw new Error(`Missing verbatim source for "${slug}". Looked for: ${candidates.join(", ")}`)
}

export async function getVerbatimContent(slug: VerbatimSlug) {
  const filePath = await resolveVerbatimFile(slug)
  return fs.readFile(filePath, "utf8")
}
