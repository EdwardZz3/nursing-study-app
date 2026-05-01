import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SummaryExpander = ({ summary }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && contentRef.current.scrollHeight > 150) {
      setNeedsExpansion(true);
    }
  }, [summary]);

  return (
    <div className="card" style={{ marginBottom: '24px' }}>
      <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        Chapter Summary
      </h3>
      <div 
        ref={contentRef}
        style={{ 
          maxHeight: isExpanded ? '2000px' : '150px', 
          overflow: 'hidden', 
          transition: 'max-height 0.5s ease',
          position: 'relative',
          whiteSpace: 'pre-wrap'
        }}
      >
        {summary}
        {!isExpanded && needsExpansion && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0), var(--card-bg))',
            pointerEvents: 'none'
          }} />
        )}
      </div>
      
      {needsExpansion && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            marginTop: '16px',
            color: 'var(--primary)',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            width: '100%',
            justifyContent: 'center',
            padding: '8px 0',
            borderTop: '1px solid var(--border-color)',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--primary-hover)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--primary)'}
        >
          {isExpanded ? (
            <><ChevronUp size={20} /> Show Less</>
          ) : (
            <><ChevronDown size={20} /> Read Full Summary</>
          )}
        </button>
      )}
    </div>
  );
};

export default SummaryExpander;
