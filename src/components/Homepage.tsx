import { HeroSection } from './HeroSection';
import { ArticleCard } from './ArticleCard';

interface HomepageProps {
  onNavigate: (page: 'home' | 'article') => void;
}

export function Homepage({ onNavigate }: HomepageProps) {
  // Mock article data
  const featuredArticle = {
    id: '1',
    title: 'The Future of Neural Networks: Understanding Transformer Architecture',
    excerpt: 'Dive deep into the revolutionary Transformer architecture that powers modern AI systems like GPT and BERT. Learn how attention mechanisms are reshaping the landscape of artificial intelligence.',
    author: 'Dr. Sarah Chen',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzU2MTE2NzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Deep Learning'
  };

  const recentArticles = [
    {
      id: '2',
      title: 'Machine Learning Model Interpretability: A Practical Guide',
      excerpt: 'Understand why your ML models make certain predictions. Explore SHAP, LIME, and other techniques for building transparent AI systems.',
      author: 'Alex Rodriguez',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYwMzA3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Interpretability'
    },
    {
      id: '3',
      title: 'Building Your First Computer Vision Pipeline',
      excerpt: 'A step-by-step tutorial for creating robust computer vision applications using PyTorch and OpenCV.',
      author: 'Maria Silva',
      date: 'Dec 5, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1675557010061-315772f6efef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwbGVhcm5pbmclMjBjb21wdXRlciUyMHNjaWVuY2V8ZW58MXx8fHwxNzU2MTE2Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Computer Vision'
    },
    {
      id: '4',
      title: 'The Ethics of AI: Navigating Bias and Fairness',
      excerpt: 'Explore the critical ethical considerations in AI development and learn strategies for building more equitable systems.',
      author: 'Dr. James Park',
      date: 'Nov 28, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90aWNzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTYxMTY3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'AI Ethics'
    },
    {
      id: '5',
      title: 'Natural Language Processing in 2024: What\'s New?',
      excerpt: 'Discover the latest breakthroughs in NLP, from multimodal models to improved language understanding.',
      author: 'Emily Zhang',
      date: 'Nov 20, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzU2MTE2NzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'NLP'
    },
    {
      id: '6',
      title: 'Reinforcement Learning: From Theory to Practice',
      excerpt: 'Master the fundamentals of RL and implement your first agent using modern frameworks and techniques.',
      author: 'David Kim',
      date: 'Nov 15, 2024',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYwMzA3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Reinforcement Learning'
    },
    {
      id: '7',
      title: 'MLOps Best Practices for Production Deployment',
      excerpt: 'Learn how to deploy, monitor, and maintain machine learning models in production environments.',
      author: 'Rachel Thompson',
      date: 'Nov 8, 2024',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1675557010061-315772f6efef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwbGVhcm5pbmclMjBjb21wdXRlciUyMHNjaWVuY2V8ZW58MXx8fHwxNzU2MTE2Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'MLOps'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <HeroSection onNavigate={onNavigate} />

      {/* Featured Article Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Article</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dive into our most popular and comprehensive guide to understanding modern AI
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <ArticleCard 
              article={featuredArticle} 
              featured={true}
              onNavigate={onNavigate}
            />
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Recent Articles</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay up-to-date with the latest insights and tutorials in AI and Machine Learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <ArticleCard 
                key={article.id} 
                article={article}
                onNavigate={onNavigate}
              />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('article')}
              className="bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-purple)] hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View All Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}