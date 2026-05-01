import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, FileText, Download } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PdfViewer = ({ pdfUrl, pdfs, title = "Document" }) => {
  const pdfList = pdfs && pdfs.length > 0 ? pdfs : (pdfUrl ? [pdfUrl] : []);
  const [activePdfIndex, setActivePdfIndex] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setActivePdfIndex(0);
  }, [pdfUrl, pdfs]);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth - 32); // 16px padding on each side
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (pdfList.length === 0) return null;

  const currentPdf = pdfList[activePdfIndex];
  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <a 
            href={currentPdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.875rem' }}
          >
            <ExternalLink size={16} />
            Open in New Tab
          </a>
          <a 
            href={currentPdf} 
            download={title}
            className="btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.875rem' }}
          >
            <Download size={16} />
            Download
          </a>
        </div>
      </div>
      
      {pdfList.length > 1 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', borderBottom: '1px solid var(--border-color)', background: '#f8fafc' }}>
          {pdfList.map((pdf, idx) => (
            <button
              key={idx}
              onClick={() => setActivePdfIndex(idx)}
              style={{
                flex: 1,
                minWidth: '100px',
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
      
      <div ref={containerRef} style={{ width: '100%', height: '75vh', backgroundColor: '#e2e8f0', overflowY: 'auto', padding: '16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Document
          file={currentPdf}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div style={{ padding: '20px', color: 'var(--text-muted)' }}>Loading PDF...</div>}
          error={<div style={{ padding: '20px', color: 'var(--error)' }}>Failed to load PDF. Please download it instead.</div>}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div key={`page_${index + 1}`} style={{ marginBottom: '16px', boxShadow: 'var(--shadow-md)' }}>
              <Page 
                pageNumber={index + 1} 
                width={containerWidth ? Math.min(containerWidth, 800) : undefined}
                devicePixelRatio={Math.max(window.devicePixelRatio || 1, 2)}
                renderTextLayer={false} 
                renderAnnotationLayer={false}
                loading={null}
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
