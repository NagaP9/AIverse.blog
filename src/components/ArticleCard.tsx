import { Calendar, Clock, ArrowRight, User, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  onNavigate: (page: 'home' | 'article') => void;
}

export function ArticleCard({ article, featured = false, onNavigate }: ArticleCardProps) {
  const handleClick = () => {
    onNavigate('article');
  };

  return (
    <article 
      className={`group cursor-pointer transition-all duration-500 hover:transform hover:scale-[1.02] ${
        featured ? 'col-span-full' : ''
      }`}
      onClick={handleClick}
    >
      <div className={`glass-effect backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 quantum-shadow group-hover:neural-glow ${
        featured ? 'lg:flex lg:items-center' : ''
      }`}>
        {/* Image */}
        <div className={`relative overflow-hidden ${
          featured ? 'lg:w-1/2 h-64 lg:h-96' : 'h-56'
        }`}>
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="glass-effect backdrop-blur-xl bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-purple)] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-white/20 flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              {article.category}
            </span>
          </div>

          {/* Holographic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Futuristic corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--cyber-cyan)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? 'lg:w-1/2 lg:p-10' : ''}`}>
          {/* Meta info */}
          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-2 glass-effect backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              <User className="w-3 h-3" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3 h-3" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className={`font-bold text-gray-900 dark:text-white mb-4 group-hover:hologram-text transition-all duration-500 leading-tight ${
            featured ? 'text-2xl lg:text-4xl' : 'text-xl'
          }`}>
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className={`text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${
            featured ? 'text-lg lg:text-xl' : 'text-base'
          }`}>
            {article.excerpt}
          </p>

          {/* Read more link */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-[var(--electric-blue)] font-medium group-hover:gap-3 transition-all duration-300">
              <span className="group-hover:hologram-text transition-all duration-300">Read More</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            
            {/* Futuristic progress indicator */}
            <div className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-purple)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}