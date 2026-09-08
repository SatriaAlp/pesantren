import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Sparkles, Globe, Compass, TrendingUp, Cpu, Award } from 'lucide-react';
import { ProgramItem } from '../../types';

interface ProgramCardProps {
  program: ProgramItem;
  index?: number;
  horizontal?: boolean;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, index, horizontal = false }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  const numberFormatted = index !== undefined ? String(index + 1).padStart(2, '0') : null;

  return (
    <Link
      to="/pendidikan"
      className={`group block bg-white rounded-xl border border-[#E8EAE9] p-6 hover:border-[#315C4A]/40 hover:shadow-[0_4px_20px_rgba(49,92,74,0.06)] transition-all duration-300 relative ${
        horizontal ? 'sm:flex sm:items-center sm:gap-6' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#EDF5F0] text-[#315C4A] flex items-center justify-center group-hover:bg-[#315C4A] group-hover:text-white transition-colors duration-200">
            {getIcon(program.iconName)}
          </div>
          {numberFormatted && (
            <span className="text-xs font-mono font-bold text-[#9CA3AF] tracking-wider">
              {numberFormatted}
            </span>
          )}
        </div>
        <div className="w-8 h-8 rounded-full bg-[#F8FAF9] flex items-center justify-center text-[#6B7280] group-hover:text-[#315C4A] group-hover:bg-[#EDF5F0] group-hover:translate-x-1 transition-all duration-200">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#1F2933] group-hover:text-[#315C4A] transition-colors leading-snug">
          {program.title}
        </h3>
        <p className="mt-2 text-sm text-[#6B7280] line-clamp-2 leading-relaxed">
          {program.shortDesc}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-[#E8EAE9]/60 flex items-center text-xs font-semibold text-[#315C4A] group-hover:underline">
        <span>Pelajari Kurikulum</span>
        <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};
