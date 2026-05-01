import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, Award, RefreshCw, AlertCircle } from 'lucide-react';
import { evaluatePerformance } from '../utils/storage';

// Utility to shuffle an array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const QuizSection = ({ questions, onComplete }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  // Initialize and shuffle questions on mount or when questions prop changes
  useEffect(() => {
    if (questions && questions.length > 0) {
      const shuffled = shuffleArray(questions).map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }));
      setShuffledQuestions(shuffled);
      resetQuizState();
    }
  }, [questions]);

  const resetQuizState = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setMistakes([]);
    setIsFinished(false);
  };

  if (shuffledQuestions.length === 0) return null;

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    if (option === currentQuestion.answer) {
      setScore(prev => prev + 1);
    } else {
      setMistakes(prev => [...prev, {
        question: currentQuestion.question,
        userAnswer: option,
        correctAnswer: currentQuestion.answer
      }]);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      if (onComplete) {
        // Evaluate score based on current answer if just answered correctly
        const finalScore = selectedOption === currentQuestion.answer ? score + 1 : score;
        onComplete(finalScore, shuffledQuestions.length);
      }
    }
  };

  const handleRetry = () => {
    // Reshuffle on retry
    const reshuffled = shuffleArray(questions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    setShuffledQuestions(reshuffled);
    resetQuizState();
  };

  if (isFinished) {
    const total = shuffledQuestions.length;
    // Recalculate final score from mistakes to be absolutely certain it's up to date
    const finalScore = total - mistakes.length; 
    const percentage = Math.round((finalScore / total) * 100);
    const evaluation = evaluatePerformance(percentage);
    
    return (
      <div className="card animate-fade-in" style={{ padding: '40px 24px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
            <Award size={64} color={evaluation.color} />
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Quiz Complete!</h2>
          <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '8px' }}>
            {percentage}%
          </div>
          <div style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '16px', fontWeight: '500' }}>
            Score: {finalScore} / {total}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px' }}>
             <div style={{ color: 'var(--success)', fontWeight: '600' }}>{finalScore} Correct</div>
             <div style={{ color: 'var(--error)', fontWeight: '600' }}>{mistakes.length} Incorrect</div>
          </div>
          <div style={{ 
            background: `${evaluation.color}20`, 
            color: evaluation.color,
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            marginBottom: '32px',
            fontWeight: '500',
            fontSize: '1.1rem'
          }}>
            {evaluation.message}
          </div>
          
          <button className="btn-primary" onClick={handleRetry} style={{ width: '100%', maxWidth: '250px', marginBottom: '40px' }}>
            <RefreshCw size={18} /> Restart Quiz
          </button>
        </div>

        {mistakes.length > 0 && (
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--error)' }}>
              <AlertCircle size={24} />
              Mistakes Review
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {mistakes.map((mistake, index) => (
                <div key={index} style={{ 
                  background: 'var(--bg-color)', 
                  padding: '20px', 
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)'
                }}>
                  <p style={{ fontWeight: '600', marginBottom: '16px', fontSize: '1.1rem' }}>
                    {index + 1}. {mistake.question}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ 
                      padding: '12px 16px', 
                      borderRadius: 'var(--radius-sm)', 
                      background: 'var(--error-bg)',
                      border: '1px solid var(--error)',
                      color: 'var(--error)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px'
                    }}>
                      <XCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <span style={{ fontWeight: '600', display: 'block', marginBottom: '4px', fontSize: '0.875rem', opacity: 0.8 }}>Your Answer:</span>
                        {mistake.userAnswer}
                      </div>
                    </div>
                    <div style={{ 
                      padding: '12px 16px', 
                      borderRadius: 'var(--radius-sm)', 
                      background: 'var(--success-bg)',
                      border: '1px solid var(--success)',
                      color: 'var(--success)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px'
                    }}>
                      <CheckCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <span style={{ fontWeight: '600', display: 'block', marginBottom: '4px', fontSize: '0.875rem', opacity: 0.8 }}>Correct Answer:</span>
                        {mistake.correctAnswer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="card animate-fade-in" style={{ marginTop: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', color: 'var(--text-muted)', fontWeight: '500' }}>
        <span>Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</span>
        <span>Score: {score}</span>
      </div>
      
      <div style={{ height: '4px', background: 'var(--border-color)', borderRadius: '2px', marginBottom: '32px' }}>
        <div style={{ 
          height: '100%', 
          width: `${((currentQuestionIndex) / shuffledQuestions.length) * 100}%`, 
          background: 'var(--primary)',
          transition: 'width 0.3s ease'
        }} />
      </div>

      <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', lineHeight: '1.5' }}>
        {currentQuestion.question}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
        {currentQuestion.options.map((option, index) => {
          let bgColor = 'var(--bg-color)';
          let borderColor = 'var(--border-color)';
          let color = 'var(--text-main)';
          let icon = null;

          if (isAnswered) {
            if (option === currentQuestion.answer) {
              bgColor = 'var(--success-bg)';
              borderColor = 'var(--success)';
              color = 'var(--success)';
              icon = <CheckCircle size={20} />;
            } else if (option === selectedOption) {
              bgColor = 'var(--error-bg)';
              borderColor = 'var(--error)';
              color = 'var(--error)';
              icon = <XCircle size={20} />;
            }
          } else if (option === selectedOption) {
            borderColor = 'var(--primary)';
            bgColor = 'rgba(13, 148, 136, 0.1)'; // subtle primary
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              disabled={isAnswered}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                background: bgColor,
                border: `2px solid ${borderColor}`,
                color: color,
                fontSize: '1rem',
                fontWeight: '500',
                cursor: isAnswered ? 'default' : 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                if (!isAnswered) {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isAnswered && option !== selectedOption) {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }
              }}
            >
              <span style={{ paddingRight: '16px' }}>{option}</span>
              {icon && <span style={{ flexShrink: 0 }}>{icon}</span>}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="animate-fade-in" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn-primary" onClick={handleNext}>
            {currentQuestionIndex < shuffledQuestions.length - 1 ? 'Next Question' : 'View Results'}
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizSection;

