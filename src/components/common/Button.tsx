import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: string;
  rel?: string;
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  target,
  rel,
  id
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-medium gap-1.5 rounded-lg',
    md: 'px-5 py-2.5 text-sm font-semibold gap-2 rounded-lg',
    lg: 'px-6 py-3 text-base font-semibold gap-2.5 rounded-xl'
  };

  const variantClasses = {
    primary: 'bg-[#315C4A] text-white hover:bg-[#28493b] active:scale-[0.99] shadow-sm hover:shadow transition-all duration-200',
    secondary: 'bg-[#EDF5F0] text-[#315C4A] hover:bg-[#dfeee5] active:scale-[0.99] transition-all duration-200',
    outline: 'border border-[#E8EAE9] bg-white text-[#1F2933] hover:border-[#315C4A] hover:text-[#315C4A] hover:bg-[#F8FAF9] active:scale-[0.99] transition-all duration-200',
    ghost: 'bg-transparent text-[#1F2933] hover:bg-[#EDF5F0] hover:text-[#315C4A] transition-all duration-200',
    gold: 'bg-[#C9A96E] text-white hover:bg-[#ba985b] active:scale-[0.99] shadow-sm hover:shadow transition-all duration-200'
  };

  const combinedClasses = `inline-flex items-center justify-center font-sans tracking-wide transition-colors whitespace-nowrap cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link id={id} to={to} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        id={id}
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button id={id} type="button" className={combinedClasses} onClick={onClick}>
      {content}
    </button>
  );
};
