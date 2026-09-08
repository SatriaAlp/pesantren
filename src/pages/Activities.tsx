import React, { useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { activitiesData } from '../data/activities';
import { ActivityCard } from '../components/cards/ActivityCard';
import { ActivityItem } from '../types';

export const Activities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = [
    'Semua',
    'Keagamaan',
    'Akademik',
    'Olahraga',
    'Seni',
    'Sosial',
    'Organisasi'
  ];

  const filteredActivities = selectedCategory === 'Semua'
    ? activitiesData
    : activitiesData.filter(act => act.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <PageHero
        badge="Dinamika Kehidupan Santri"
        title="Kegiatan & Ekstrakurikuler"
        description="Aktivitas terarah yang mengisi keseharian santri dalam mengasah intelektual, membina spiritualitas, melatih fisik, dan menumbuhkan bakat seni."
        breadcrumbCurrent="Kegiatan"
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

      {/* 3. ACTIVITIES GRID */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 text-xs text-[#6B7280]">
            <span>Menampilkan {filteredActivities.length} kegiatan aktif</span>
            <span>Kategori: <strong className="text-[#315C4A]">{selectedCategory}</strong></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredActivities.map((act) => (
              <ActivityCard key={act.id} activity={act} />
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-20 bg-[#F8FAF9] rounded-2xl border border-[#E8EAE9]">
              <p className="text-sm text-[#6B7280]">Tidak ada kegiatan dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
