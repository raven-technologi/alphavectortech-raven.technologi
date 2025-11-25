const fs = require("fs")
const path = require("path")
const PDFDocument = require("pdfkit")

const rootDir = path.resolve(__dirname, "..")
const sourceDir = path.join(rootDir, "source-verbatim")
const outputDir = path.join(rootDir, "public", "pdfs")

const papers = [
  {
    slug: "mens-rea-vector",
    title: "The Mens Rea Vector",
    subtitle: "AI-Driven Epistemic Analysis for Quantifying Executive Liability",
    category: "Computational Law",
    sources: ["The Mens Rea Vector.md", "Mens-Rea-Vector.md"],
  },
  {
    slug: "byzantine-calculus",
    title: "The Byzantine Calculus",
    subtitle: "Quantifying Distributed Ledger Security as Enterprise Financial Risk",
    category: "Cryptoeconomics",
    sources: ["The Byzantine Calculus.md", "Byzantine-Calculus.md"],
  },
  {
    slug: "sangedha-framework",
    title: "The Sangedha Framework",
    subtitle: "A Causal Forensics Protocol for Algorithmic Negligence Attribution",
    category: "Legal Engineering",
    sources: ["The Sangedha Framework.md", "Sangedha-Framework.md"],
  },
]

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

function resolveSourceFile(candidates) {
  for (const fileName of candidates) {
    const fullPath = path.join(sourceDir, fileName)
    if (fs.existsSync(fullPath)) {
      return fullPath
    }
  }

  throw new Error(`Missing verbatim source. Looked for: ${candidates.join(", ")}`)
}

function renderCover(doc, paper) {
  doc
    .fillColor("#0b1424")
    .font("Helvetica-Bold")
    .fontSize(24)
    .text(paper.title, { align: "left", lineGap: 8 })

  doc
    .font("Helvetica")
    .fontSize(14)
    .fillColor("#4b6bff")
    .text(paper.subtitle, { align: "left", lineGap: 6 })

  doc.moveDown()

  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor("#6b7280")
    .text(`Discipline: ${paper.category}`)
    .text("Classification: Alpha Vector Technologies // Restricted")

  doc.moveDown(2)
  doc
    .strokeColor("#d9ddff")
    .lineWidth(1)
    .moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y)
    .stroke()
  doc.moveDown(2)
}

function renderParagraph(doc, text) {
  doc.font("Helvetica").fontSize(11).fillColor("#0b1424").text(text, {
    align: "left",
    paragraphGap: 6,
  })
}

function renderHeading(doc, text, level) {
  const sizes = { 1: 18, 2: 15, 3: 13, 4: 12 }
  const size = sizes[level] ?? 12
  doc
    .font("Helvetica-Bold")
    .fontSize(size)
    .fillColor("#010409")
    .text(text.toUpperCase(), { paragraphGap: 8 })
}

function renderList(doc, items) {
  doc.font("Helvetica").fontSize(11).fillColor("#0b1424")
  items.forEach((item) => {
    doc.text(`• ${item}`, { indent: 12, paragraphGap: 4 })
  })
}

function renderBlockquote(doc, text) {
  doc
    .save()
    .lineWidth(3)
    .strokeColor("#4b6bff")
    .moveTo(doc.x, doc.y)
    .lineTo(doc.x, doc.y + doc.currentLineHeight(true) * 2)
    .stroke()
    .restore()

  doc
    .font("Helvetica-Oblique")
    .fontSize(11)
    .fillColor("#1f2937")
    .text(text, {
      indent: 18,
      paragraphGap: 6,
    })
}

function renderCodeBlock(doc, lines) {
  const height = lines.length * 14 + 24
  const width = doc.page.width - doc.page.margins.right - doc.x

  doc
    .save()
    .roundedRect(doc.x, doc.y, width, height, 12)
    .fillAndStroke("#050915", "#d1d5db")
    .restore()

  doc
    .font("Courier")
    .fontSize(10)
    .fillColor("#f3f4f6")
    .text(lines.join("\n"), {
      indent: 12,
      paragraphGap: 10,
      lineGap: 4,
    })
}

function renderRule(doc) {
  doc.strokeColor("#e5e7eb").lineWidth(1).moveTo(doc.x, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).stroke()
  doc.moveDown()
}

function processMarkdown(doc, content) {
  const lines = content.split(/\r?\n/)
  let buffer = []
  let listBuffer = []
  let inCode = false

  const flushParagraph = () => {
    if (buffer.length) {
      renderParagraph(doc, buffer.join(" "))
      buffer = []
    }
  }

  const flushList = () => {
    if (listBuffer.length) {
      renderList(doc, listBuffer)
      listBuffer = []
    }
  }

  lines.forEach((rawLine) => {
    const line = rawLine.trimEnd()

    if (line.startsWith("```") || line === "~~~") {
      if (inCode) {
        renderCodeBlock(doc, buffer)
        buffer = []
        inCode = false
      } else {
        flushParagraph()
        flushList()
        buffer = []
        inCode = true
      }
      return
    }

    if (inCode) {
      buffer.push(rawLine)
      return
    }

    if (!line) {
      flushParagraph()
      flushList()
      doc.moveDown(0.35)
      return
    }

    const headingMatch = line.match(/^(#{1,4})\s+(.*)$/)
    if (headingMatch) {
      flushParagraph()
      flushList()
      const level = headingMatch[1].length
      renderHeading(doc, headingMatch[2], level)
      return
    }

    if (/^[-*+]\s+/.test(line)) {
      buffer.push(line.replace(/^[-*+]\s+/, ""))
      flushParagraph()
      listBuffer.push(buffer.join(" "))
      buffer = []
      return
    }

    if (/^>\s+/.test(line)) {
      flushParagraph()
      flushList()
      renderBlockquote(doc, line.replace(/^>\s+/, ""))
      return
    }

    if (/^\d+\.\s+/.test(line)) {
      buffer.push(line.replace(/^\d+\.\s+/, ""))
      flushParagraph()
      listBuffer.push(buffer.join(" "))
      buffer = []
      return
    }

    if (/^(---|\*\*\*)$/.test(line)) {
      flushParagraph()
      flushList()
      renderRule(doc)
      return
    }

    buffer.push(line)
  })

  flushParagraph()
  flushList()
}

async function generatePaper(paper) {
  const sourcePath = resolveSourceFile(paper.sources)
  const content = fs.readFileSync(sourcePath, "utf8")
  const outputPath = path.join(outputDir, `${paper.slug}.pdf`)

  const doc = new PDFDocument({
    size: "LETTER",
    margin: 64,
    info: {
      Title: paper.title,
      Author: "Alpha Vector Technologies",
      Subject: paper.subtitle,
      Keywords: `Alpha Vector Technologies, ${paper.category}`,
    },
  })

  await new Promise((resolve, reject) => {
    doc.pipe(fs.createWriteStream(outputPath))
      .on("finish", resolve)
      .on("error", reject)

    renderCover(doc, paper)
    processMarkdown(doc, content)
    doc.end()
  })

  console.log(`Generated ${outputPath}`)
}

async function main() {
  for (const paper of papers) {
    await generatePaper(paper)
  }
}

main().catch((error) => {
  console.error("PDF export failed", error)
  process.exit(1)
})
