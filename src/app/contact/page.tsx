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
    
    // Track contact form submission
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'contact_form_submit', {
        form_location: '/contact',
        inquiry_type: formData.inquiryType,
        organization: formData.organization || 'not_provided',
        has_organization: formData.organization.length > 0,
      })
      console.log('Contact Form Submission Tracked:', formData.inquiryType)
    }
    
    alert('Thank you for your inquiry. We will respond within 2-3 business days.')
  }

  return (
    <PageFrame
      tag="DOSSIER | 02"
      description="Use this channel for institutional engagements, litigation support, or research coordination. Signal and PGP endpoints provision on validation."
      showHeading={false}
      showTagBarcode
    >
      <section className="rounded-3xl border border-black/10 bg-white p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#4b6bff]">Contact Architecture</p>
            <h1 className="mt-4 text-4xl font-light tracking-tight text-[#010409]">Secure Contact Procedures</h1>
            <p className="mt-3 text-base text-[#050505]">
              Use this channel for institutional engagements, litigation support, or research coordination. Signal and PGP endpoints provision on validation.
            </p>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#010409]">
            Response matrix: 24–48h for litigation matters
          </div>
        </div>
      </section>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <form onSubmit={handleSubmit} className="rounded-3xl border border-black/10 bg-white p-8 space-y-8">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#4b6bff]">Transmission dossier</p>
            <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#010409]">Encrypted intake</span>
          </div>
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
              <label key={id} className="space-y-2 text-xs font-medium tracking-[0.25em] text-[#010409] uppercase">
                {label}
                <input
                  id={id}
                  type={type}
                  required
                  placeholder={placeholder}
                  value={(formData as any)[id]}
                  onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 font-light text-[#010409] placeholder:text-black/30 focus:border-[#4b6bff] focus:outline-none transition-colors"
                />
              </label>
            ))}
          </div>

          <label className="space-y-2 text-xs font-medium tracking-[0.25em] text-[#010409] uppercase">
            Organization
            <input
              type="text"
              placeholder="Company / Fund / Agency"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 font-light text-[#010409] placeholder:text-black/30 focus:border-[#4b6bff] focus:outline-none transition-colors"
            />
          </label>

          <label className="space-y-2 text-xs font-medium tracking-[0.25em] text-[#010409] uppercase">
            Inquiry Type *
            <select
              required
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full rounded-lg border border-black/10 bg-[#f3f6ff] px-4 py-3 text-[#010409] focus:border-[#4b6bff] focus:outline-none transition-colors"
            >
              <option value="" className="bg-white text-[#010409]">Select classification</option>
              <option value="research" className="bg-white text-[#010409]">Research Collaboration</option>
              <option value="expert" className="bg-white text-[#010409]">Expert Consultation</option>
              <option value="legal" className="bg-white text-[#010409]">Litigation / Expert Witness</option>
              <option value="media" className="bg-white text-[#010409]">Media / Briefing</option>
              <option value="other" className="bg-white text-[#010409]">Other</option>
            </select>
          </label>

          <label className="space-y-2 text-xs font-medium tracking-[0.25em] text-[#010409] uppercase">
            Communication
            <textarea
              required
              rows={6}
              placeholder="Summarize objectives, timelines, and required evidence standards."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 font-light text-[#010409] placeholder:text-black/30 focus:border-[#4b6bff] focus:outline-none transition-colors"
            />
          </label>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#010409] bg-[#010409] px-8 py-4 text-[10px] font-mono uppercase tracking-[0.35em] text-white hover:bg-[#4b6bff] hover:border-[#4b6bff]"
          >
            Transmit dossier
          </button>

          <div className="flex flex-wrap items-center gap-4 border-t border-black/10 pt-4 text-[10px] font-mono uppercase tracking-[0.3em] text-[#010409]">
            <span>Alpha Vector Tech</span>
            <span className="text-black/30">/</span>
            <span>Gavin Sangedha</span>
            <span className="text-black/30">/</span>
            <span>ABN 50 353 196 500</span>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#010409]">Primary Channel</p>
            <a href="mailto:gsangedha.desk@proton.me" className="mt-4 block text-sm text-[#010409] hover:text-[#4b6bff]">
              gsangedha.desk@proton.me
            </a>
            <div className="mt-6 text-[10px] font-mono uppercase tracking-[0.3em] text-[#010409]">
              Signal endpoint issued post-clearance
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#010409]">Response SLA</p>
            <ul className="mt-4 space-y-2 text-sm text-[#050505]">
              <li>General programs: 2–3 business days</li>
              <li>Litigation or regulatory: 24–48 hours</li>
              <li>Media briefings: same day when feasible</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#4b6bff]/40 bg-[#edf0ff] p-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#4b6bff]">Legal Notice</p>
            <p className="mt-4 text-sm text-[#050505]">
              Active matters may route through counsel. Reference docket numbers where applicable.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#010409]">Secure Options</p>
            <ul className="mt-4 space-y-2 text-sm text-[#050505]">
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
