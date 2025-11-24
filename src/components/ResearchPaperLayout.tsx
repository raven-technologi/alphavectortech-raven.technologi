import React from 'react';
import Link from 'next/link';

interface ResearchPaperLayoutProps {
  title: string;
  authors?: string[];
  date?: string;
  backLink?: string;
  children: React.ReactNode;
}

const ResearchPaperLayout: React.FC<ResearchPaperLayoutProps> = ({
  title,
  authors = [],
  date,
  backLink = '/research',
  children
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href={backLink}
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
                onClick={() => {
                  // Implement PDF download
                  alert('PDF download coming soon');
                }}
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
        {/* Paper Header */}
        <header className="research-header">
          <h1 className="research-title">{title}</h1>
          
          {authors.length > 0 && (
            <div className="mt-4">
              <p className="text-lg font-sans text-gray-600">
                {authors.join(', ')}
              </p>
            </div>
          )}
          
          {date && (
            <div className="mt-2">
              <p className="text-base font-sans text-gray-500">
                {date}
              </p>
            </div>
          )}
        </header>

        {/* Paper Body */}
        <main className="research-content">
          {children}
        </main>

        {/* Paper Footer */}
        <footer className="mt-20 pt-8 border-t-2 border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500 font-sans">
              © 2025 Alpha Vector Technologies. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 font-sans mt-2">
              Principal Researcher: Gavin McNicol | ABN: 50353196500
            </p>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default ResearchPaperLayout;