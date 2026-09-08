import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { galleryData } from '../data/gallery';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2, Calendar } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'Semua',
    'Pendidikan',
    'Keagamaan',
    'Kegiatan',
    'Olahraga',
    'Event',
    'Fasilitas'
  ];

  const filteredGallery = selectedCategory === 'Semua'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  const currentItem = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <PageHero
        badge="Dokumentasi Visual"
        title="Galeri Dokumentasi Pesantren"
        description="Rekam jejak kebersamaan, suasana kegiatan belajar, peribadatan santri, serta keasrian fasilitas kampus Pesantren Modern Al-Hikmah."
        breadcrumbCurrent="Galeri"
      />

      {/* 2. CATEGORY FILTER */}
      <section className="pt-12 pb-4 bg-white border-b border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#315C4A] text-white shadow-xs'
                    : 'bg-[#F8FAF9] text-[#6B7280] hover:text-[#1F2933] hover:bg-[#EDF5F0] border border-[#E8EAE9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GALLERY GRID */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 text-xs text-[#6B7280]">
            <span>Menampilkan {filteredGallery.length} foto dokumentasi</span>
            <span>Kategori: <strong className="text-[#315C4A]">{selectedCategory}</strong></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-xl overflow-hidden border border-[#E8EAE9] bg-[#F8FAF9] aspect-[4/3] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold leading-snug">{item.title}</h3>
                    <p className="text-xs text-white/80 mt-1 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-20 bg-[#F8FAF9] rounded-2xl border border-[#E8EAE9]">
              <p className="text-sm text-[#6B7280]">Tidak ada foto dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      {lightboxIndex !== null && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 select-none animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Tutup Galeri"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Foto Berikutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[90vh] flex flex-col bg-[#1F2933] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[480px]">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            <div className="p-4 sm:p-6 bg-[#1F2933] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-semibold text-[#C9A96E] uppercase tracking-wider">
                    {currentItem.category}
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="text-xs text-white/60 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {currentItem.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold">{currentItem.title}</h3>
                <p className="text-xs text-white/80 mt-1">{currentItem.caption}</p>
              </div>

              <div className="text-xs text-white/50 shrink-0 font-mono">
                {lightboxIndex + 1} dari {filteredGallery.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
