import { Button } from './ui/button';
import { AIBackgroundPattern } from './AIBackgroundPattern';
import { ArrowRight, Brain, Zap, Cpu, Network } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: 'home' | 'article') => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20 flex items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <AIBackgroundPattern />
      
      {/* Holographic overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--electric-blue)]/5 via-transparent to-[var(--neon-purple)]/5"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="floating glass-effect backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full px-4 py-2 shadow-lg neural-glow">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-[var(--electric-blue)]" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Neural Networks
              </span>
            </div>
          </div>
          <div className="floating glass-effect backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full px-4 py-2 shadow-lg neural-glow" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[var(--cyber-cyan)]" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Deep Learning
              </span>
            </div>
          </div>
          <div className="floating glass-effect backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full px-4 py-2 shadow-lg neural-glow" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-[var(--neon-purple)]" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                AI updates
              </span>
            </div>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          <span className="block mb-2">Decoding the</span>
          <span className="block hologram-text text-6xl sm:text-7xl lg:text-8xl">
            Future of AI
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4 text-gray-600 dark:text-gray-400">
            One Neural Network at a Time
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Dive deep into the quantum realm of artificial intelligence with cutting-edge research, 
          breakthrough discoveries, and insights that push the boundaries of what's possible.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            onClick={() => onNavigate('article')}
            className="relative overflow-hidden bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-purple)] hover:from-[var(--cyber-cyan)] hover:to-[var(--plasma-pink)] text-white border-0 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 neural-glow neon-glow"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore AIverse
              <Zap className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--cyber-cyan)] to-[var(--plasma-pink)] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
          
          <Button
            variant="outline"
            className="glass-effect backdrop-blur-xl border-2 border-[var(--electric-blue)]/30 text-[var(--electric-blue)] hover:bg-[var(--electric-blue)]/10 dark:hover:bg-[var(--electric-blue)]/20 px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 cyber-border"
          >
            <span className="flex items-center gap-2">
              Subscribe to Updates
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="glass-effect backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-lg quantum-shadow hover:shadow-2xl transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold hologram-text mb-2">500K+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Neural Connections</div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">Active Readers</div>
          </div>
          <div className="glass-effect backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-lg quantum-shadow hover:shadow-2xl transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold hologram-text mb-2">1.2M+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Data Points</div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">Articles Published</div>
          </div>
          <div className="glass-effect backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-lg quantum-shadow hover:shadow-2xl transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold hologram-text mb-2">99.9%</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Accuracy Rate</div>
            <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">Reader Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Futuristic decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[var(--electric-blue)]/20 to-[var(--neon-purple)]/20 rounded-full blur-2xl floating"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[var(--cyber-cyan)]/20 to-[var(--plasma-pink)]/20 rounded-full blur-2xl floating" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-5 w-20 h-20 bg-gradient-to-br from-[var(--plasma-pink)]/30 to-[var(--electric-blue)]/30 rounded-full blur-xl floating" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(10, 132, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(10, 132, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
    </section>
  );
}