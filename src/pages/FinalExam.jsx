import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { subjects } from '../data/content';
import QuizSection from '../components/QuizSection';
import { saveFinalExam } from '../utils/storage';

const FinalExam = () => {
  const { subjectId } = useParams();
  const subject = subjects.find(s => s.id === subjectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!subject) return <div className="container">Subject not found</div>;

  const handleExamComplete = (score, total) => {
    saveFinalExam(subjectId, score, total);
  };

  if (!subject.finalExam || subject.finalExam.length === 0) {
    return (
      <div className="container animate-fade-in" style={{ maxWidth: '800px', textAlign: 'center', paddingTop: '60px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Final Exam Not Available</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>This subject doesn't have a final exam yet.</p>
        <Link to={`/subject/${subject.id}`} className="btn-primary">Back to Subject</Link>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '80px', maxWidth: '800px' }}>
      <Link to={`/subject/${subject.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', marginBottom: '24px', fontWeight: '500' }}>
        <ChevronLeft size={20} /> Back to {subject.name}
      </Link>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px', color: 'var(--text-main)' }}>
          Final Exam
        </h1>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: '500' }}>
          {subject.name}
        </h2>
      </div>

      <QuizSection 
        questions={subject.finalExam} 
        onComplete={handleExamComplete} 
      />
    </div>
  );
};

export default FinalExam;
