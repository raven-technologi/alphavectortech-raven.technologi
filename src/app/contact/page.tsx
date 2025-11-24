'use client';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    alert('Thank you for your inquiry. We will respond within 2-3 business days.');
  };

  return (
    <div className="min-h-screen bg-surface-base">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm mb-8">
            <Link href="/" className="text-text-tertiary hover:text-accent transition-colors">Home</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent">Contact</span>
          </div>

          {/* Header */}
          <header className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight mb-6">
              Professional Inquiry
            </h1>
            <p className="text-xl text-text-secondary">
              For research collaboration, expert consultation, or institutional inquiries
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-surface-elevated border border-border-subtle rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-surface-elevated border border-border-subtle rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-text-primary mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-3 bg-surface-elevated border border-border-subtle rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors"
                    placeholder="Company or institution"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-text-primary mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    required
                    className="w-full px-4 py-3 bg-surface-elevated border border-border-subtle rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                  >
                    <option value="">Select inquiry type</option>
                    <option value="research">Research Collaboration</option>
                    <option value="expert">Expert Consultation</option>
                    <option value="legal">Legal/Litigation Support</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-surface-elevated border border-border-subtle rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Please describe your inquiry in detail"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="bg-surface-elevated rounded-xl p-6 border border-border-subtle">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-mono text-accent uppercase tracking-wide mb-1">Email</p>
                    <a href="mailto:gavin.sangedha@alphavectortech.com" className="text-text-secondary hover:text-accent transition-colors text-sm break-all">
                      gavin.sangedha@alphavectortech.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-accent uppercase tracking-wide mb-1">Location</p>
                    <p className="text-text-secondary text-sm">South Australia, Australia</p>
                  </div>
                </div>
              </div>

              {/* Response Expectations */}
              <div className="bg-surface-elevated rounded-xl p-6 border border-border-subtle">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Response Times</h3>
                <ul className="space-y-3 text-sm text-text-secondary">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>General inquiries: 2-3 business days</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Legal/litigation matters: 24-48 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Media inquiries: Same day when possible</span>
                  </li>
                </ul>
              </div>

              {/* Legal Notice */}
              <div className="bg-warning/10 rounded-xl p-6 border border-warning/20">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Legal Representation Notice</h3>
                <p className="text-sm text-text-secondary">
                  Alpha Vector Technologies may be represented by legal counsel in ongoing matters. 
                  Communications regarding active litigation should be directed through appropriate legal channels.
                </p>
              </div>

              {/* Secure Communications */}
              <div className="bg-surface-elevated rounded-xl p-6 border border-border-subtle">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Secure Communications</h3>
                <p className="text-sm text-text-secondary mb-4">
                  For sensitive communications, encrypted channels are available upon request.
                </p>
                <ul className="space-y-2 text-sm text-text-tertiary">
                  <li>• PGP encryption available</li>
                  <li>• Signal messaging available</li>
                  <li>• Secure file transfer options</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
