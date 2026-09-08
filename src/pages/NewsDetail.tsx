import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { newsData } from '../data/news';
import { Calendar, Clock, User, ArrowLeft, Share2, Tag, ChevronRight } from 'lucide-react';
import { NewsCard } from '../components/cards/NewsCard';
import { Button } from '../components/common/Button';

export const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentNews = newsData.find((item) => item.slug === slug);

  if (!currentNews) {
    return (
      <div className="pt-36 pb-24 text-center max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-[#1F2933]">Artikel Tidak Ditemukan</h1>
        <p className="mt-2 text-sm text-[#6B7280]">
          Mohon maaf, artikel berita yang Anda cari mungkin telah dipindahkan atau tautan tidak valid.
        </p>
        <div className="mt-6">
          <Button to="/berita" variant="primary">
            Kembali ke Berita
          </Button>
        </div>
      </div>
    );
  }

  // Related news
  const relatedNews = newsData
    .filter((item) => item.id !== currentNews.id && item.category === currentNews.category)
    .slice(0, 3);

  const fallbackRelated = relatedNews.length > 0 
    ? relatedNews 
    : newsData.filter((item) => item.id !== currentNews.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentNews.title,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Tautan artikel berhasil disalin!');
    }
  };

  return (
    <div className="bg-white pt-28 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back Link */}
        <div className="flex items-center justify-between py-4 mb-6 border-b border-[#E8EAE9]">
          <Link
            to="/berita"
            className="inline-flex items-center text-xs font-semibold text-[#6B7280] hover:text-[#315C4A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            <span>Kembali ke Semua Berita</span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B7280] hover:text-[#315C4A] px-3 py-1.5 rounded-lg border border-[#E8EAE9] hover:bg-[#F8FAF9] transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Bagikan</span>
          </button>
        </div>

        {/* Header Content */}
        <header className="space-y-4 mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc]">
            {currentNews.category}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1F2933] leading-tight">
            {currentNews.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#6B7280] pt-1">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#315C4A]" />
              {currentNews.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#315C4A]" />
              {currentNews.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#315C4A]" />
              {currentNews.readTime}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden border border-[#E8EAE9] shadow-sm mb-10 aspect-[16/9] bg-[#F8FAF9]">
          <img
            src={currentNews.image}
            alt={currentNews.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content Body */}
        <div className="prose prose-neutral max-w-none text-[#1F2933] text-base sm:text-lg leading-relaxed space-y-6">
          {currentNews.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed text-[#374151]">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        {currentNews.tags && currentNews.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-[#E8EAE9] flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-[#6B7280] mr-1" />
            <span className="text-xs font-semibold text-[#6B7280] mr-2">Topik:</span>
            {currentNews.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-[#F8FAF9] text-[#1F2933] px-3 py-1 rounded-full border border-[#E8EAE9]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* Related News Section */}
      <section className="mt-20 pt-16 bg-[#F8FAF9] border-t border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1F2933]">
              Berita Terkait Lainnya
            </h2>
            <Link
              to="/berita"
              className="text-xs font-semibold text-[#315C4A] hover:underline flex items-center gap-1"
            >
              <span>Semua Berita</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackRelated.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
