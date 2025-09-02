import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Homepage } from './components/Homepage';
import { ArticlePage } from './components/ArticlePage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'article'>('home');

  const handleNavigate = (page: 'home' | 'article') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-all duration-500">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="relative">
        {currentPage === 'home' ? (
          <Homepage onNavigate={handleNavigate} />
        ) : (
          <ArticlePage onNavigate={handleNavigate} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}