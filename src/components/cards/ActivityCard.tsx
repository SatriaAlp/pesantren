import React from 'react';
import { Clock } from 'lucide-react';
import { ActivityItem } from '../../types';

interface ActivityCardProps {
  activity: ActivityItem;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="group bg-white rounded-xl border border-[#E8EAE9] overflow-hidden hover:border-[#315C4A]/40 hover:shadow-[0_4px_20px_rgba(49,92,74,0.06)] transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-[#F8FAF9]">
        <img
          src={activity.image}
          alt={activity.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-white/95 backdrop-blur-xs text-[#315C4A] shadow-xs">
          {activity.category}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#6B7280] mb-2 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#315C4A]" />
            <span>{activity.time}</span>
          </div>

          <h3 className="text-base font-bold text-[#1F2933] group-hover:text-[#315C4A] transition-colors leading-snug">
            {activity.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed line-clamp-3">
            {activity.description}
          </p>
        </div>
      </div>
    </div>
  );
};
