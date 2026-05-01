// Helper to get or set user progress in localStorage

const STORAGE_KEY = 'nursing_study_progress';

export const getProgress = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
};

export const saveProgress = (subjectId, chapterId, score, total) => {
  const progress = getProgress();
  
  if (!progress[subjectId]) {
    progress[subjectId] = { chapters: {}, finalExam: null };
  }
  
  const percentage = Math.round((score / total) * 100);
  
  progress[subjectId].chapters[chapterId] = {
    score,
    total,
    percentage,
    completedAt: new Date().toISOString()
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const saveFinalExam = (subjectId, score, total) => {
  const progress = getProgress();
  
  if (!progress[subjectId]) {
    progress[subjectId] = { chapters: {}, finalExam: null };
  }
  
  const percentage = Math.round((score / total) * 100);
  
  progress[subjectId].finalExam = {
    score,
    total,
    percentage,
    completedAt: new Date().toISOString()
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const evaluatePerformance = (percentage) => {
  if (percentage >= 80) return { level: 'High', message: 'Excellent', color: 'var(--success)' };
  if (percentage >= 50) return { level: 'Medium', message: 'Good, needs revision', color: 'var(--secondary)' };
  return { level: 'Low', message: 'Needs more study', color: 'var(--error)' };
};
