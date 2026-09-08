import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, BookOpen, Compass } from 'lucide-react';
import { pesantrenInfo } from '../../data/pesantrenInfo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Profil', href: '/profil' },
    { label: 'Pendidikan', href: '/pendidikan' },
    { label: 'Program', href: '/program' },
    { label: 'Fasilitas', href: '/fasilitas' },
    { label: 'Kegiatan', href: '/kegiatan' },
    { label: 'Berita', href: '/berita' },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Kontak', href: '/kontak' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.04)] border-b border-[#E8EAE9] py-3'
          : 'bg-white border-b border-[#E8EAE9] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Beranda Pesantren Ar-Rozzaq"
          >
            {/* Elegant emblem icon */}
            <div className="w-10 h-10 rounded-xl bg-[#EDF5F0] border border-[#d6e8dc] flex items-center justify-center text-[#315C4A] shadow-xs group-hover:bg-[#315C4A] group-hover:text-white transition-all duration-200">
              <BookOpen className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#1F2933] font-serif leading-none">
                AR-ROZZAQ
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#6B7280] mt-1">
                Islamic Boarding School
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-150 relative ${
                    active
                      ? 'text-[#315C4A] font-semibold bg-[#EDF5F0]'
                      : 'text-[#1F2933] hover:text-[#315C4A] hover:bg-[#F8FAF9]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#315C4A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${pesantrenInfo.contact.whatsappNumberOnly}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin informasi seputar Pesantren Ar-Rozzaq.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#315C4A] hover:bg-[#28493b] text-white px-4 py-2 text-xs font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Hubungi Kami</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-nav-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1F2933] hover:bg-[#F8FAF9] focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#315C4A]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Fullscreen */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white/98 backdrop-blur-lg z-40 border-t border-[#E8EAE9] flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF] px-3 mb-2">
              Navigasi Halaman
            </p>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#EDF5F0] text-[#315C4A] font-semibold'
                      : 'text-[#1F2933] hover:bg-[#F8FAF9]'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#315C4A]" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#E8EAE9] mt-6 flex flex-col gap-3">
            <a
              href={`https://wa.me/${pesantrenInfo.contact.whatsappNumberOnly}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin konsultasi mengenai Pesantren Ar-Rozzaq.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#315C4A] text-white rounded-xl font-semibold text-sm shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hubungi via WhatsApp</span>
            </a>
            <div className="text-center text-xs text-[#6B7280] pt-1">
              Telp: {pesantrenInfo.contact.phone}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
