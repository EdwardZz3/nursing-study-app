import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, BarChart2, Award } from 'lucide-react';
import { subjects } from '../data/content';
import { getProgress, evaluatePerformance } from '../utils/storage';

const Progress = () => {
  const progressData = getProgress();
  const subjectIds = Object.keys(progressData);

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '80px', maxWidth: '800px' }}>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', marginBottom: '24px', fontWeight: '500' }}>
        <ChevronLeft size={20} /> Back to Home
      </Link>

      <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ background: 'var(--primary)', padding: '12px', borderRadius: 'var(--radius-md)', color: 'white' }}>
          <BarChart2 size={32} />
        </div>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '4px', color: 'var(--text-main)' }}>
            My Progress
          </h1>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>
            Track your study performance across all subjects.
          </p>
        </div>
      </div>

      {subjectIds.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '48px 24px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>No Progress Yet</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Start reading chapters and taking quizzes to track your performance.</p>
          <Link to="/" className="btn-primary">Browse Subjects</Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {subjectIds.map(subjectId => {
            const subject = subjects.find(s => s.id === subjectId);
            if (!subject) return null;
            
            const p = progressData[subjectId];
            const completedChapters = Object.keys(p.chapters).length;
            const totalChapters = subject.chapters.length;
            const progressPercentage = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
            
            return (
              <div key={subjectId} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '1.25rem', margin: 0 }}>{subject.name}</h2>
                  <div style={{ background: 'var(--bg-color)', padding: '4px 12px', borderRadius: '16px', fontSize: '0.875rem', fontWeight: '600', color: 'var(--primary)' }}>
                    {progressPercentage}% Complete
                  </div>
                </div>
                
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ height: '8px', background: 'var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${progressPercentage}%`, background: 'var(--primary)' }} />
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--text-muted)' }}>Chapter Scores</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                    {Object.entries(p.chapters).map(([chapId, chapData]) => {
                      const chapter = subject.chapters.find(c => c.id === chapId);
                      const eval_ = evaluatePerformance(chapData.percentage);
                      
                      return (
                        <div key={chapId} style={{ background: 'var(--bg-color)', padding: '12px', borderRadius: 'var(--radius-sm)', borderLeft: `4px solid ${eval_.color}` }}>
                          <div style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '4px' }}>
                            {chapter?.title || 'Unknown Chapter'}
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Score</span>
                            <span style={{ fontWeight: '600', color: eval_.color }}>{chapData.percentage}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {p.finalExam && (
                  <div style={{ marginTop: '20px', background: `${evaluatePerformance(p.finalExam.percentage).color}15`, padding: '16px', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Award size={24} color={evaluatePerformance(p.finalExam.percentage).color} />
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-main)' }}>Final Exam Score</div>
                      <div style={{ color: evaluatePerformance(p.finalExam.percentage).color, fontWeight: '700' }}>{p.finalExam.percentage}%</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Progress;
