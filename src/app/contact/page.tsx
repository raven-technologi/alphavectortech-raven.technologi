'use client'

import { useState } from 'react'
import PageFrame from '@/components/PageFrame'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry. We will respond within 2-3 business days.')
  }

  return (
    <PageFrame
      tag="DOSSIER // 02"
      title="Secure Contact Procedures"
      description="Use this channel for institutional engagements, litigation support, or research coordination. Signal and PGP endpoints provision on validation."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/[0.02] p-8 space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {[{
              id: 'name',
              label: 'Full Name *',
              type: 'text',
              placeholder: 'Executive / Counsel / Research Lead'
            }, {
              id: 'email',
              label: 'Email *',
              type: 'email',
              placeholder: 'name@institution.tld'
            }].map(({ id, label, type, placeholder }) => (
              <label key={id} className="space-y-2 text-xs font-medium tracking-[0.25em] text-white/70 uppercase">
                {label}
                <input
                  id={id}
                  type={type}
                  required
                  placeholder={placeholder}
                  value={(formData as any)[id]}
                  onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                  className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 font-light text-white placeholder:text-white/30 focus:border-[#00ffff] focus:outline-none transition-colors"
                />
              </label>
            ))}
          </div>

          <label className="space-y-2 text-xs font-medium tracking-[0.25em] text-white/70 uppercase">
            Organization
            <input
              type="text"
              placeholder="Company / Fund / Agency"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 font-light text-white placeholder:text-white/30 focus:border-[#00ffff] focus:outline-none transition-colors"
            />
          </label>

          <label className="space-y-2 text-xs font-medium tracking-[0.25em] text-white/70 uppercase">
            Inquiry Type *
            <select
              required
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full rounded-lg border border-white/15 bg-[#050505] px-4 py-3 text-white focus:border-[#00ffff] focus:outline-none transition-colors"
            >
              <option value="" className="bg-[#050505] text-black">Select classification</option>
              <option value="research" className="bg-[#050505] text-black">Research Collaboration</option>
              <option value="expert" className="bg-[#050505] text-black">Expert Consultation</option>
              <option value="legal" className="bg-[#050505] text-black">Litigation / Expert Witness</option>
              <option value="media" className="bg-[#050505] text-black">Media / Briefing</option>
              <option value="other" className="bg-[#050505] text-black">Other</option>
            </select>
          </label>

          <label className="space-y-2 text-xs font-medium tracking-[0.25em] text-white/70 uppercase">
            Communication
            <textarea
              required
              rows={6}
              placeholder="Summarize objectives, timelines, and required evidence standards."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 font-light text-white placeholder:text-white/30 focus:border-[#00ffff] focus:outline-none transition-colors"
            />
          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#00ffff]/40 bg-[#00ffff]/10 px-8 py-4 text-[10px] font-mono uppercase tracking-[0.35em] text-[#00ffff] hover:bg-[#00ffff]/20"
          >
            Transmit dossier
          </button>

          <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-[10px] font-mono uppercase tracking-[0.3em] text-[#c0f9ff]">
            <span>Alpha Vector Tech</span>
            <span className="text-white/40">/</span>
            <span>Gavin Sangedha</span>
            <span className="text-white/40">/</span>
            <span>ABN 50 353 196 500</span>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.01] p-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#6d6d6d]">Primary Channel</p>
            <a href="mailto:gavin.sangedha@alphavectortech.com" className="mt-4 block text-sm text-white hover:text-[#00ffff]">
              gavin.sangedha@alphavectortech.com
            </a>
            <div className="mt-6 text-[11px] font-mono uppercase tracking-[0.3em] text-[#7f7f7f]">
              Signal: +61 489 218 235
            </div>
          </div>

          <div className="space-y-3 border-l border-white/15 pl-6">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#6d6d6d]">Response SLA</p>
            <ul className="space-y-2 text-sm text-[#c5c5c5]">
              <li>General programs: 2–3 business days</li>
              <li>Litigation or regulatory: 24–48 hours</li>
              <li>Media briefings: same day when feasible</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#00d7ff]/40 bg-[#00d7ff]/5 p-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#00eaff]">Legal Notice</p>
            <p className="mt-4 text-sm text-[#c7f8ff]">
              Active matters may route through counsel. Reference docket numbers where applicable.
            </p>
          </div>

          <div className="space-y-3 border-l border-white/15 pl-6">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#6d6d6d]">Secure Options</p>
            <ul className="space-y-2 text-sm text-[#c7c7c7]">
              <li>PGP + Signal key exchange</li>
              <li>SFTP dropbox provisioning</li>
              <li>Air-gapped evidentiary review</li>
            </ul>
          </div>
        </aside>
      </div>
    </PageFrame>
  )
}
