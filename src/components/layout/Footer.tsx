import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Youtube, Globe, Heart } from 'lucide-react';
import { pesantrenInfo } from '../../data/pesantrenInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8FAF9] border-t border-[#E8EAE9] pt-16 pb-12 text-[#1F2933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Kolom 1: Profil Singkat */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#315C4A] text-white flex items-center justify-center shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-[#1F2933] font-serif leading-tight">
                  AL-HIKMAH
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-[#6B7280]">
                  Modern Islamic Boarding School
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#6B7280] leading-relaxed pr-2">
              Institusi pendidikan Islam modern yang mengintegrasikan kurikulum nasional, keilmuan kepesantrenan, tahfidz Al-Qur'an, dan pembentukan adab mulia untuk melahirkan generasi yang siap menghadapi masa depan.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc]">
                {pesantrenInfo.accreditation}
              </span>
            </div>
          </div>

          {/* Kolom 2: Navigasi Utama */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1F2933] mb-4">
              Navigasi Utama
            </h3>
            <ul className="space-y-2.5 text-sm text-[#6B7280]">
              <li>
                <Link to="/" className="hover:text-[#315C4A] transition-colors inline-block">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/profil" className="hover:text-[#315C4A] transition-colors inline-block">
                  Profil Pesantren
                </Link>
              </li>
              <li>
                <Link to="/pendidikan" className="hover:text-[#315C4A] transition-colors inline-block">
                  Sistem Pendidikan
                </Link>
              </li>
              <li>
                <Link to="/program" className="hover:text-[#315C4A] transition-colors inline-block">
                  Program Unggulan
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Informasi */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1F2933] mb-4">
              Informasi Pesantren
            </h3>
            <ul className="space-y-2.5 text-sm text-[#6B7280]">
              <li>
                <Link to="/fasilitas" className="hover:text-[#315C4A] transition-colors inline-block">
                  Fasilitas Kampus
                </Link>
              </li>
              <li>
                <Link to="/kegiatan" className="hover:text-[#315C4A] transition-colors inline-block">
                  Kegiatan Santri
                </Link>
              </li>
              <li>
                <Link to="/berita" className="hover:text-[#315C4A] transition-colors inline-block">
                  Berita & Pengumuman
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="hover:text-[#315C4A] transition-colors inline-block">
                  Galeri Dokumentasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak & Social Media */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#1F2933]">
              Kontak Resmi
            </h3>
            <ul className="space-y-3 text-sm text-[#6B7280]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#315C4A] shrink-0 mt-0.5" />
                <span className="leading-snug">{pesantrenInfo.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#315C4A] shrink-0" />
                <a
                  href={`https://wa.me/${pesantrenInfo.contact.whatsappNumberOnly}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#315C4A] transition-colors"
                >
                  {pesantrenInfo.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#315C4A] shrink-0" />
                <a
                  href={`mailto:${pesantrenInfo.contact.email}`}
                  className="hover:text-[#315C4A] transition-colors"
                >
                  {pesantrenInfo.contact.email}
                </a>
              </li>
            </ul>

            {/* Social media icons */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-[#1F2933] mb-2.5">Media Sosial Resmi:</p>
              <div className="flex items-center gap-2.5">
                <a
                  href={pesantrenInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Resmi"
                  className="w-8 h-8 rounded-lg bg-white border border-[#E8EAE9] flex items-center justify-center text-[#6B7280] hover:text-[#315C4A] hover:border-[#315C4A] hover:bg-[#EDF5F0] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={pesantrenInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Resmi"
                  className="w-8 h-8 rounded-lg bg-white border border-[#E8EAE9] flex items-center justify-center text-[#6B7280] hover:text-[#315C4A] hover:border-[#315C4A] hover:bg-[#EDF5F0] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={pesantrenInfo.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Resmi"
                  className="w-8 h-8 rounded-lg bg-white border border-[#E8EAE9] flex items-center justify-center text-[#6B7280] hover:text-[#315C4A] hover:border-[#315C4A] hover:bg-[#EDF5F0] transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[#E8EAE9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>© 2026 {pesantrenInfo.name}. Seluruh Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            <span>Website Profil Resmi Institusi Pendidikan Islam Modern</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
