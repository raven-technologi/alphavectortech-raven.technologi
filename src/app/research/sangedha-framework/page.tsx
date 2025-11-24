'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { marked } from 'marked';

export default function SanghedhaFrameworkPage() {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the markdown content
    fetch('/research/the-sangedha-framework.md')
      .then(res => res.text())
      .then(text => {
        setContent(marked(text));
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading content:', err);
        setLoading(false);
      });
  }, []);

  const handleDownloadPDF = () => {
    window.open('/research/the-sangedha-framework.pdf', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/research"
              className="flex items-center text-gray-600 hover:text-cyan-600 transition-colors font-sans"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Research
            </Link>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => window.print()}
                className="text-gray-600 hover:text-cyan-600 transition-colors font-sans flex items-center"
                aria-label="Print"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print
              </button>
              
              <button 
                onClick={handleDownloadPDF}
                className="text-gray-600 hover:text-cyan-600 transition-colors font-sans flex items-center"
                aria-label="Download PDF"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Paper Content */}
      <article className="research-paper">
        <header className="research-header">
          <div className="mt-4">
            <p className="text-lg font-sans text-gray-600">
              Gavin Sangedha
            </p>
            <p className="text-sm font-sans text-gray-500 mt-1">
              Principal Researcher, Alpha Vector Tech
            </p>
            <p className="text-sm font-sans text-gray-400 mt-1">
              ABN: 50 353 196 500
            </p>
          </div>
        </header>

        {/* Render the full markdown content */}
        <main 
          className="research-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Paper Footer */}
        <footer className="mt-20 pt-8 border-t-2 border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500 font-sans">
              © 2025 Alpha Vector Tech. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 font-sans mt-2">
              Principal Researcher: Gavin Sangedha | ABN: 50 353 196 500
            </p>
          </div>
        </footer>
      </article>
    </div>
  );
}