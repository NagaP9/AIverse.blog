import { useEffect, useState } from 'react';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
      <div 
        className="h-full bg-gradient-to-r from-[var(--electric-blue)] via-[var(--cyber-cyan)] to-[var(--neon-purple)] transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div 
        className="absolute top-0 h-full w-2 bg-gradient-to-r from-[var(--plasma-pink)] to-[var(--cyber-cyan)] shadow-lg"
        style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
      />
    </div>
  );
}