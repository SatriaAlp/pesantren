import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  align = 'center',
  className = ''
}) => {
  const alignClasses = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc] mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1F2933] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-2xl font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
