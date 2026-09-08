import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { facilitiesData } from '../data/facilities';
import { FacilityCard } from '../components/cards/FacilityCard';
import { Check, Sparkles, Building2, BookOpen, Shield, Trophy } from 'lucide-react';

export const Facilities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('semua');

  const categories = [
    { id: 'semua', label: 'Semua Fasilitas' },
    { id: 'ibadah', label: 'Ibadah dan Spiritual' },
    { id: 'akademik', label: 'Akademik dan Sains' },
    { id: 'asrama', label: 'Asrama dan Hunian' },
    { id: 'olahraga', label: 'Olahraga' },
    { id: 'penunjang', label: 'Sarana Penunjang' },
  ];

  const filteredFacilities = activeCategory === 'semua'
    ? facilitiesData
    : facilitiesData.filter(f => f.category === activeCategory);

  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <PageHero
        badge="Sarana dan Lingkungan"
        title="Fasilitas Kampus Pesantren"
        description="Fasilitas representatif, bersih, dan modern yang dirancang untuk mendukung kenyamanan ibadah, belajar, dan tumbuh kembang santri."
        breadcrumbCurrent="Fasilitas"
      />

      {/* 2. CATEGORY FILTER */}
      <section className="pt-12 pb-4 bg-white border-b border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#315C4A] text-white shadow-xs'
                    : 'bg-[#F8FAF9] text-[#6B7280] hover:text-[#1F2933] hover:bg-[#EDF5F0] border border-[#E8EAE9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FACILITIES GRID (KOMBINASI LARGE IMAGE & CARDS) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredFacilities.map((facility, idx) => {
              // Set the very first item as large if viewing 'semua'
              const isHeroCard = activeCategory === 'semua' && idx === 0;

              return (
                <FacilityCard
                  key={facility.id}
                  facility={facility}
                  large={isHeroCard}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CAMPUS ENVIRONMENT STANDARDS */}
      <section className="py-16 bg-[#F8FAF9] border-t border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#315C4A]">
              Standar Kenyamanan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2933]">
              Komitmen Lingkungan Sehat, Aman, dan Bersih
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Kami menerapkan standar sanitasi, keamanan 24 jam, dan tata ruang ramah lingkungan demi terciptanya rumah kedua yang penuh ketenangan bagi para santri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-white border border-[#E8EAE9]">
              <Shield className="w-6 h-6 text-[#315C4A] mb-3" />
              <h3 className="text-sm font-bold text-[#1F2933]">Keamanan 24 Jam</h3>
              <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                Pengawasan pos satpam di pintu gerbang utama serta CCTV di area publik kampus demi keamanan santri.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8EAE9]">
              <Sparkles className="w-6 h-6 text-[#315C4A] mb-3" />
              <h3 className="text-sm font-bold text-[#1F2933]">Air Minum RO Higienis</h3>
              <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                Stasiun air minum reverse osmosis yang tersebar di asrama dan sekolah, teruji steril dan menyehatkan.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8EAE9]">
              <Building2 className="w-6 h-6 text-[#315C4A] mb-3" />
              <h3 className="text-sm font-bold text-[#1F2933]">Klinik Kesehatan Santri</h3>
              <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                Pemeriksaan kesehatan rutin oleh dokter dan tenaga medis yang siaga merawat santri yang membutuhkan.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E8EAE9]">
              <Trophy className="w-6 h-6 text-[#315C4A] mb-3" />
              <h3 className="text-sm font-bold text-[#1F2933]">Kampus Hijau Bebas Asap</h3>
              <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                Kawasan bebas rokok 100% dengan penanaman puluhan varietas pohon pelindung dan tanaman buah asri.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
