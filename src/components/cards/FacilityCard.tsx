import React from 'react';
import { FacilityItem } from '../../types';
import { Check } from 'lucide-react';

interface FacilityCardProps {
  facility: FacilityItem;
  large?: boolean;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({ facility, large = false }) => {
  return (
    <div
      className={`group bg-white rounded-xl border border-[#E8EAE9] overflow-hidden hover:border-[#315C4A]/40 hover:shadow-[0_4px_20px_rgba(49,92,74,0.06)] transition-all duration-300 flex flex-col ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      {/* Image container */}
      <div className={`relative overflow-hidden bg-[#F8FAF9] ${large ? 'h-64 sm:h-80' : 'h-52'}`}>
        <img
          src={facility.image}
          alt={facility.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-white/90 backdrop-blur-xs text-[#315C4A] shadow-xs">
          {facility.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#1F2933] group-hover:text-[#315C4A] transition-colors leading-snug">
            {facility.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed line-clamp-3">
            {facility.description}
          </p>
        </div>

        {/* Feature chips */}
        {facility.features && facility.features.length > 0 && (
          <div className="mt-4 pt-3 border-t border-[#E8EAE9] flex flex-wrap gap-1.5">
            {facility.features.slice(0, 3).map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] text-[#6B7280] bg-[#F8FAF9] px-2 py-0.5 rounded border border-[#E8EAE9]"
              >
                <Check className="w-3 h-3 text-[#315C4A]" />
                <span className="truncate max-w-[180px]">{feat}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
