import React from 'react';
import SubjectCard from '../components/SubjectCard';
import { subjects } from '../data/content';
import { BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <div className="container animate-fade-in">
      <div style={{ marginBottom: '40px', textAlign: 'center', paddingTop: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--primary)' }}>
          Welcome back!
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Select a subject below to continue learning, read chapter summaries, and test your knowledge with interactive quizzes.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '12px' }}>
        <BookOpen size={24} color="var(--primary)" />
        <h2 style={{ fontSize: '1.5rem' }}>Your Subjects</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px',
        marginBottom: '60px'
      }}>
        {subjects.map(subject => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default Home;
