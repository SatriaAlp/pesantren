import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbCurrent: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  description,
  breadcrumbCurrent
}) => {
  return (
    <section className="relative bg-[#F8FAF9] border-b border-[#E8EAE9] pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      {/* Subtle background geometric pattern for modern Islamic touch */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(#315C4A 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6B7280] mb-4">
          <Link to="/" className="hover:text-[#315C4A] transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-[#9CA3AF]" />
          <span className="text-[#315C4A] font-medium">{breadcrumbCurrent}</span>
        </nav>

        <div className="max-w-3xl">
          {badge && (
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc] mb-3">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F2933] leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
