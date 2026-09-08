import React from 'react';
import { MessageCircle } from 'lucide-react';
import { pesantrenInfo } from '../../data/pesantrenInfo';

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'floating' | 'inline';
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  label = "Hubungi Kami via WhatsApp",
  className = "",
  size = "md",
  variant = "inline",
  message = "Assalamu'alaikum, saya ingin bertanya dan mendapatkan informasi mengenai Pesantren Al-Hikmah."
}) => {
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${pesantrenInfo.contact.whatsappNumberOnly}?text=${encodedMessage}`;

  if (variant === 'floating') {
    return (
      <a
        id="floating-whatsapp-btn"
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Resmi Pesantren"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-5 h-5 text-white shrink-0 fill-current" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block pr-1">
          Chat WhatsApp
        </span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      </a>
    );
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold gap-2 rounded-lg',
    md: 'px-5 py-2.5 text-sm font-semibold gap-2.5 rounded-xl',
    lg: 'px-7 py-3.5 text-base font-semibold gap-3 rounded-xl'
  };

  return (
    <a
      id="whatsapp-cta-button"
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-[#315C4A] hover:bg-[#28493b] text-white shadow-sm hover:shadow transition-all duration-200 cursor-pointer ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
};
