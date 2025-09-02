import { ArrowLeft, Calendar, Clock, User, Share, Bookmark, Twitter, Linkedin, Facebook, Link, Eye, Heart, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArticleCard } from './ArticleCard';
import { ReadingProgress } from './ReadingProgress';

interface ArticlePageProps {
  onNavigate: (page: 'home' | 'article') => void;
}

export function ArticlePage({ onNavigate }: ArticlePageProps) {
  const article = {
    title: 'The Future of Neural Networks: Understanding Transformer Architecture',
    author: 'Dr. Sarah Chen',
    date: 'December 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzU2MTE2NzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Deep Learning'
  };

  const relatedArticles = [
    {
      id: '2',
      title: 'Machine Learning Model Interpretability: A Practical Guide',
      excerpt: 'Understand why your ML models make certain predictions with SHAP and LIME.',
      author: 'Alex Rodriguez',
      date: 'Dec 10, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYwMzA3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Interpretability'
    },
    {
      id: '3',
      title: 'Building Your First Computer Vision Pipeline',
      excerpt: 'A step-by-step tutorial for creating robust computer vision applications.',
      author: 'Maria Silva',
      date: 'Dec 5, 2024',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1675557010061-315772f6efef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwbGVhcm5pbmclMjBjb21wdXRlciUyMHNjaWVuY2V8ZW58MXx8fHwxNzU2MTE2Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Computer Vision'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Reading Progress */}
      <ReadingProgress />

      {/* Enhanced Sticky Social Share Bar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        <div className="glass-effect backdrop-blur-xl rounded-2xl p-3 border border-white/20 dark:border-white/10 shadow-lg">
          <div className="flex flex-col gap-3">
            <Button variant="ghost" size="sm" className="p-3 hover:bg-blue-500/20 transition-all duration-300 neural-glow">
              <Twitter className="w-5 h-5 text-blue-500" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-blue-600/20 transition-all duration-300 neural-glow">
              <Linkedin className="w-5 h-5 text-blue-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-blue-700/20 transition-all duration-300 neural-glow">
              <Facebook className="w-5 h-5 text-blue-700" />
            </Button>
            <Button variant="ghost" size="sm" className="p-3 hover:bg-gray-600/20 transition-all duration-300 neural-glow">
              <Link className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </Button>
          </div>
        </div>
        
        {/* Article engagement stats */}
        <div className="glass-effect backdrop-blur-xl rounded-2xl p-3 border border-white/20 dark:border-white/10 shadow-lg">
          <div className="flex flex-col gap-3 text-center">
            <div className="flex flex-col items-center gap-1">
              <Eye className="w-4 h-4 text-[var(--electric-blue)]" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">2.4K</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Heart className="w-4 h-4 text-[var(--plasma-pink)]" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">156</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <MessageCircle className="w-4 h-4 text-[var(--neon-purple)]" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">42</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="glass-effect backdrop-blur-xl border-b border-white/10 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-[var(--electric-blue)] glass-effect backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 hover:border-[var(--electric-blue)]/30 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Neural Hub
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Badge */}
        <div className="mb-8">
          <span className="glass-effect backdrop-blur-xl bg-gradient-to-r from-[var(--electric-blue)] to-[var(--neon-purple)] text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg border border-white/20 neural-glow">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight hologram-text">
          {article.title}
        </h1>

        {/* Meta Information */}
        <div className="glass-effect backdrop-blur-xl rounded-2xl p-6 mb-10 border border-white/20 dark:border-white/10 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--neon-purple)] rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white block">{article.author}</span>
                  <span className="text-sm">AI Research Scientist</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium">{article.readTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="glass-effect backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 hover:border-[var(--electric-blue)]/30 transition-all duration-300">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="glass-effect backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 hover:border-[var(--neon-purple)]/30 transition-all duration-300">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl quantum-shadow">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="article-content prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-serif leading-relaxed glass-effect backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            The landscape of artificial intelligence has been revolutionized by the introduction of Transformer architecture. 
            This groundbreaking approach to neural networks has fundamentally changed how we process sequential data and has 
            become the backbone of modern AI systems.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 hologram-text">Understanding the Transformer Revolution</h2>
          
          <p className="mb-8 font-serif leading-relaxed text-lg">
            Traditional neural networks processed information sequentially, which created bottlenecks in training and limited 
            their ability to capture long-range dependencies. The Transformer architecture introduced the concept of 
            "attention mechanisms" that allow the model to focus on different parts of the input simultaneously.
          </p>

          <p className="mb-8 font-serif leading-relaxed text-lg">
            This parallel processing capability has made Transformers incredibly efficient and effective for a wide range of 
            tasks, from language translation to image generation. The key innovation lies in the self-attention mechanism, 
            which enables the model to weigh the importance of different elements in the input sequence.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 hologram-text">Key Components of Transformer Architecture</h2>

          <div className="glass-effect backdrop-blur-xl rounded-2xl p-8 mb-8 border border-white/20 dark:border-white/10">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-[var(--electric-blue)]">1. Multi-Head Attention</h3>
            <p className="mb-6 font-serif leading-relaxed text-lg">
              The multi-head attention mechanism allows the model to attend to different positions simultaneously. By using 
              multiple attention heads, the Transformer can capture various types of relationships and dependencies within the data.
            </p>
          </div>

          <div className="glass-effect backdrop-blur-xl rounded-2xl p-8 mb-8 border border-white/20 dark:border-white/10">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-[var(--neon-purple)]">2. Positional Encoding</h3>
            <p className="mb-6 font-serif leading-relaxed text-lg">
              Since Transformers process all positions in parallel, they need a way to understand the order of elements. 
              Positional encoding provides this crucial information by adding position-specific patterns to the input embeddings.
            </p>
          </div>

          <div className="glass-effect backdrop-blur-xl rounded-2xl p-8 mb-8 border border-white/20 dark:border-white/10">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-[var(--cyber-cyan)]">3. Feed-Forward Networks</h3>
            <p className="mb-6 font-serif leading-relaxed text-lg">
              Each layer of a Transformer includes a position-wise feed-forward network that processes the attention output. 
              These networks add non-linearity and complexity to the model, enabling it to learn sophisticated patterns.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 hologram-text">Applications and Impact</h2>
          
          <p className="mb-8 font-serif leading-relaxed text-lg">
            The impact of Transformer architecture extends far beyond its original application in machine translation. 
            Today, we see Transformers powering breakthrough applications in natural language processing, computer vision, 
            and even scientific research.
          </p>

          <p className="mb-8 font-serif leading-relaxed text-lg">
            Models like GPT, BERT, and Vision Transformers have demonstrated the versatility and power of this architecture. 
            They've achieved state-of-the-art results across numerous benchmarks and have enabled entirely new categories 
            of AI applications.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 hologram-text">Looking Forward</h2>
          
          <p className="mb-8 font-serif leading-relaxed text-lg">
            As we continue to scale Transformer models and explore new architectural innovations, we're witnessing 
            unprecedented capabilities in AI systems. The future promises even more sophisticated models that can 
            understand and generate content across multiple modalities with human-like proficiency.
          </p>

          <p className="mb-12 font-serif leading-relaxed text-lg glass-effect backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            Understanding Transformer architecture is crucial for anyone working in AI today. It represents not just a 
            technical achievement, but a fundamental shift in how we approach machine learning and artificial intelligence.
          </p>
        </div>

        {/* Article Footer */}
        <div className="glass-effect backdrop-blur-xl rounded-2xl p-8 mt-12 border border-white/20 dark:border-white/10 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Share this neural insight:</span>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="glass-effect backdrop-blur-sm border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300">
                  <Twitter className="w-4 h-4 text-blue-500 mr-2" />
                  Tweet
                </Button>
                <Button variant="outline" size="sm" className="glass-effect backdrop-blur-sm border-blue-600/30 hover:bg-blue-600/10 transition-all duration-300">
                  <Linkedin className="w-4 h-4 text-blue-600 mr-2" />
                  Share
                </Button>
              </div>
            </div>
            <Button variant="ghost" className="flex items-center gap-2 text-[var(--electric-blue)] hover:bg-[var(--electric-blue)]/10 transition-all duration-300">
              <Bookmark className="w-4 h-4" />
              Add to Neural Library
            </Button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="glass-effect backdrop-blur-xl py-20 border-t border-white/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center hologram-text">
            Related Neural Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard 
                key={relatedArticle.id} 
                article={relatedArticle}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}