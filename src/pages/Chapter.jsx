import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { subjects } from '../data/content';
import SummaryExpander from '../components/SummaryExpander';
import QuizSection from '../components/QuizSection';
import PdfViewer from '../components/PdfViewer';
import { saveProgress } from '../utils/storage';

const Chapter = () => {
  const { subjectId, chapterId } = useParams();
  
  const subject = subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!subject || !chapter) return <div className="container">Chapter not found</div>;

  const handleQuizComplete = (score, total) => {
    saveProgress(subjectId, chapterId, score, total);
  };

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '80px', maxWidth: '800px' }}>
      <Link to={`/subject/${subject.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', marginBottom: '24px', fontWeight: '500' }}>
        <ChevronLeft size={20} /> Back to {subject.name}
      </Link>

      <h1 style={{ fontSize: '2rem', marginBottom: '32px', color: 'var(--text-main)' }}>
        {chapter.title}
      </h1>

      <PdfViewer 
        pdfUrl={`/pdfs/${chapter.id}.pdf`} 
        pdfs={chapter.pdfs ? chapter.pdfs.map(pdf => `/pdfs/${pdf}`) : null}
        title={`${chapter.title} - Lecture Slides`} 
      />

      <SummaryExpander summary={chapter.summary} />
      
      <div style={{ marginTop: '48px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Chapter Quiz</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Test your understanding of {chapter.title}.</p>
        
        <QuizSection 
          key={chapter.id}
          questions={chapter.questions} 
          onComplete={handleQuizComplete} 
        />
      </div>
    </div>
  );
};

export default Chapter;
