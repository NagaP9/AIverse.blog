import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Moon, Sun, Menu, X, Zap } from 'lucide-react';

interface NavigationProps {
  currentPage: 'home' | 'article';
  onNavigate: (page: 'home' | 'article') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="glass-effect border-b border-white/10 dark:border-white/5 sticky top-0 z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--neon-purple)] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 neural-glow">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--neon-purple)] rounded-xl opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold hologram-text">
                NeuraInsights
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/5 ${
                currentPage === 'home' 
                  ? 'text-[var(--electric-blue)] font-medium' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-[var(--electric-blue)]'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-purple)] rounded-full"></div>
              )}
            </button>
            <button
              onClick={() => onNavigate('article')}
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/5 ${
                currentPage === 'article' 
                  ? 'text-[var(--electric-blue)] font-medium' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-[var(--electric-blue)]'
              }`}
            >
              Articles
              {currentPage === 'article' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-purple)] rounded-full"></div>
              )}
            </button>
            <button className="px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-[var(--electric-blue)] hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300">
              Research
            </button>
            <button className="px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-[var(--electric-blue)] hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300">
              About
            </button>
            <button className="px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-[var(--electric-blue)] hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300">
              Contact
            </button>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 rounded-xl glass-effect hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 neural-glow"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-[var(--cyber-cyan)]" />
              ) : (
                <Moon className="h-4 w-4 text-[var(--neon-purple)]" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl glass-effect hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4 text-[var(--plasma-pink)]" />
                ) : (
                  <Menu className="h-4 w-4 text-[var(--electric-blue)]" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 glass-effect rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  currentPage === 'home' 
                    ? 'bg-gradient-to-r from-[var(--electric-blue)]/20 to-[var(--neon-purple)]/20 text-[var(--electric-blue)] font-medium' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-white/5'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('article');
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  currentPage === 'article' 
                    ? 'bg-gradient-to-r from-[var(--electric-blue)]/20 to-[var(--neon-purple)]/20 text-[var(--electric-blue)] font-medium' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-white/5'
                }`}
              >
                Articles
              </button>
              <button className="text-left py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300">
                Research
              </button>
              <button className="text-left py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300">
                About
              </button>
              <button className="text-left py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}