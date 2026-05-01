import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { getProgress } from '../utils/storage';

const SubjectCard = ({ subject }) => {
  const IconComponent = Icons[subject.icon] || BookOpen;
  
  const progress = getProgress();
  const subjectProgress = progress[subject.id] || { chapters: {} };
  const completedChaptersCount = Object.keys(subjectProgress.chapters).length;
  const totalChapters = subject.chapters.length;
  
  const progressPercentage = totalChapters > 0 ? Math.round((completedChaptersCount / totalChapters) * 100) : 0;

  return (
    <Link to={`/subject/${subject.id}`} className="card animate-fade-in" style={{ display: 'block', textDecoration: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ background: 'var(--bg-color)', padding: '12px', borderRadius: 'var(--radius-md)', color: 'var(--primary)' }}>
          <IconComponent size={32} />
        </div>
        {progressPercentage === 100 && (
          <div style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.875rem', fontWeight: '500' }}>
            <CheckCircle size={16} /> Completed
          </div>
        )}
      </div>
      
      <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{subject.name}</h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.9rem' }}>{subject.description}</p>
      
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '4px' }}>
          <span>Progress</span>
          <span style={{ fontWeight: '600' }}>{progressPercentage}%</span>
        </div>
        <div style={{ height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progressPercentage}%`, background: 'var(--primary)', transition: 'width 0.5s ease' }} />
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '16px', color: 'var(--primary)', fontWeight: '500' }}>
        <span>{totalChapters} Chapters</span>
        <ChevronRight size={20} />
      </div>
    </Link>
  );
};

export default SubjectCard;
