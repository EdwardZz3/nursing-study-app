import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, FileText, Award, CheckCircle, Wrench } from 'lucide-react';
import { subjects } from '../data/content';
import { getProgress } from '../utils/storage';

const Subject = () => {
  const { subjectId } = useParams();
  const subject = subjects.find(s => s.id === subjectId);
  const progress = getProgress()[subjectId] || { chapters: {} };

  if (!subject) return <div className="container">Subject not found</div>;

  if (subject.underDevelopment) {
    return (
      <div className="container animate-fade-in" style={{ textAlign: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', marginBottom: '40px', fontWeight: '500' }}>
          <ChevronLeft size={20} /> Back to Subjects
        </Link>
        
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 24px' }} className="card">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{ background: 'var(--bg-color)', padding: '20px', borderRadius: '50%', color: 'var(--primary)' }}>
              <Wrench size={48} />
            </div>
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-main)' }}>
            {subject.name}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '8px' }}>
            This subject is currently under development.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
            Content will be available soon. Please check back later!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in">
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', marginBottom: '24px', fontWeight: '500' }}>
        <ChevronLeft size={20} /> Back to Subjects
      </Link>

      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px', color: 'var(--text-main)' }}>
          {subject.name}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          {subject.description}
        </p>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileText size={24} color="var(--primary)" /> Chapters
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {subject.chapters.map((chapter, index) => {
            const isCompleted = !!progress.chapters[chapter.id];
            const chapterProgress = progress.chapters[chapter.id];
            
            return (
              <Link 
                to={`/subject/${subject.id}/chapter/${chapter.id}`} 
                key={chapter.id}
                className="card"
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: '12px',
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '20px 24px',
                  textDecoration: 'none',
                  borderLeft: isCompleted ? '4px solid var(--success)' : '4px solid var(--primary)'
                }}
              >
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '4px', fontWeight: '500' }}>
                    Chapter {index + 1}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{chapter.title}</h3>
                </div>
                
                {isCompleted ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <span style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600', marginBottom: '4px' }}>
                      <CheckCircle size={18} /> Completed
                    </span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Score: {chapterProgress.percentage}%</span>
                  </div>
                ) : (
                  <span style={{ color: 'var(--primary)', fontWeight: '500' }}>Start Chapter →</span>
                )}
              </Link>
            )
          })}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '40px', paddingBottom: '60px' }}>
        <div className="card" style={{ background: 'var(--primary)', color: 'white', border: 'none' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={24} /> Final Exam
              </h2>
              <p style={{ opacity: 0.9, margin: 0 }}>
                Test your knowledge on the entire subject.
              </p>
            </div>
            
            {progress.finalExam ? (
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '12px 24px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.875rem', marginBottom: '4px' }}>Previous Score</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{progress.finalExam.percentage}%</div>
                <Link to={`/subject/${subject.id}/exam`} style={{ color: 'white', textDecoration: 'underline', fontSize: '0.875rem', marginTop: '8px', display: 'block' }}>Retake Exam</Link>
              </div>
            ) : (
              <Link to={`/subject/${subject.id}/exam`} className="btn-secondary" style={{ border: 'none', color: 'var(--primary)' }}>
                Take Final Exam
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
