import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { NewsItem } from '../../types';

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <article className="group bg-white rounded-xl border border-[#E8EAE9] overflow-hidden hover:border-[#315C4A]/40 hover:shadow-[0_4px_20px_rgba(49,92,74,0.06)] transition-all duration-300 flex flex-col h-full">
      {/* Image thumbnail */}
      <Link to={`/berita/${news.slug}`} className="block relative overflow-hidden h-48 bg-[#F8FAF9]">
        <img
          src={news.image}
          alt={news.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-white/95 backdrop-blur-xs text-[#315C4A] shadow-xs">
            {news.category}
          </span>
        </div>
      </Link>

      {/* Text body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-2.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#9CA3AF]" />
              {news.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#9CA3AF]" />
              {news.readTime}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#1F2933] group-hover:text-[#315C4A] transition-colors leading-snug line-clamp-2">
            <Link to={`/berita/${news.slug}`}>{news.title}</Link>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#6B7280] line-clamp-2 leading-relaxed">
            {news.excerpt}
          </p>
        </div>

        {/* Read more link */}
        <div className="mt-4 pt-3 border-t border-[#E8EAE9]">
          <Link
            to={`/berita/${news.slug}`}
            className="inline-flex items-center text-xs font-semibold text-[#315C4A] group-hover:underline"
          >
            <span>Baca Selengkapnya</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};
