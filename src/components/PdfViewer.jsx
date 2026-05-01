import React, { useState } from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const PdfViewer = ({ pdfUrl, pdfs, title = "Document" }) => {
  // If we receive an array of PDFs, use it. Otherwise, fallback to an array of one from pdfUrl
  const pdfList = pdfs && pdfs.length > 0 ? pdfs : (pdfUrl ? [pdfUrl] : []);
  const [activePdfIndex, setActivePdfIndex] = useState(0);

  // Reset active index if the pdfList changes completely (e.g. navigation)
  React.useEffect(() => {
    setActivePdfIndex(0);
  }, [pdfUrl, pdfs]);

  if (pdfList.length === 0) return null;

  const currentPdf = pdfList[activePdfIndex];
  
  return (
    <div className="card animate-fade-in" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '12px',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '16px 24px',
        borderBottom: '1px solid var(--border-color)',
        background: 'var(--bg-color)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', color: 'var(--text-main)' }}>
          <FileText size={20} color="var(--primary)" />
          <span>{title} {pdfList.length > 1 && `- Part ${activePdfIndex + 1}`}</span>
        </div>
        <a 
          href={currentPdf} 
          target="_blank" 
          rel="noopener noreferrer"
          download={title}
          className="btn-secondary"
          style={{ padding: '8px 16px', fontSize: '0.875rem' }}
        >
          <ExternalLink size={16} />
          Open / Download
        </a>
      </div>
      
      {pdfList.length > 1 && (
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', background: '#f8fafc' }}>
          {pdfList.map((pdf, idx) => (
            <button
              key={idx}
              onClick={() => setActivePdfIndex(idx)}
              style={{
                flex: 1,
                padding: '12px 16px',
                border: 'none',
                background: activePdfIndex === idx ? 'white' : 'transparent',
                borderBottom: activePdfIndex === idx ? '2px solid var(--primary)' : '2px solid transparent',
                color: activePdfIndex === idx ? 'var(--primary)' : 'var(--text-muted)',
                fontWeight: activePdfIndex === idx ? '600' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Part {idx + 1}
            </button>
          ))}
        </div>
      )}
      
      <div style={{ width: '100%', height: '75vh', minHeight: '400px', backgroundColor: '#e2e8f0' }}>
        <iframe 
          src={`${currentPdf}#view=FitH`} 
          title={`${title} Part ${activePdfIndex + 1}`}
          width="100%" 
          height="100%" 
          style={{ border: 'none', display: 'block' }}
        />
      </div>
    </div>
  );
};

export default PdfViewer;
