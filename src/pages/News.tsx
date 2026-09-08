import React, { useState, useMemo } from 'react';
import { PageHero } from '../components/common/PageHero';
import { newsData } from '../data/news';
import { NewsCard } from '../components/cards/NewsCard';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

export const News: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = [
    'Semua',
    'Pendidikan',
    'Kegiatan',
    'Prestasi',
    'Pengumuman'
  ];

  const filteredNews = useMemo(() => {
    return newsData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Semua' || item.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        item.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Reset page on search or category change
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Pagination calculation
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage) || 1;
  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(start, start + itemsPerPage);
  }, [filteredNews, currentPage, itemsPerPage]);

  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <PageHero
        badge="Warta Pesantren"
        title="Berita & Informasi"
        description="Kabar terkini seputar agenda kegiatan santri, prestasi akademik, seminar pendidikan, serta pengumuman resmi kelembagaan."
        breadcrumbCurrent="Berita"
      />

      {/* 2. SEARCH & FILTER BAR */}
      <section className="py-8 bg-white border-b border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
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

            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Cari berita atau topik..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-[#E8EAE9] bg-[#F8FAF9] focus:bg-white focus:outline-none focus:border-[#315C4A] focus:ring-1 focus:ring-[#315C4A] transition-all text-[#1F2933] placeholder-[#9CA3AF]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEWS GRID */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 text-xs text-[#6B7280]">
            <span>Menampilkan {filteredNews.length} artikel</span>
            {searchQuery && (
              <span>Hasil pencarian: <strong className="text-[#315C4A]">"{searchQuery}"</strong></span>
            )}
          </div>

          {paginatedNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {paginatedNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#F8FAF9] rounded-2xl border border-[#E8EAE9]">
              <p className="text-sm font-semibold text-[#1F2933]">Tidak ada artikel yang sesuai.</p>
              <p className="text-xs text-[#6B7280] mt-1">Coba gunakan kata kunci lain atau pilih kategori Semua.</p>
            </div>
          )}

          {/* 4. PAGINATION */}
          {totalPages > 1 && (
            <div className="mt-12 pt-8 border-t border-[#E8EAE9] flex items-center justify-center gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="p-2 rounded-lg border border-[#E8EAE9] bg-white text-[#6B7280] hover:bg-[#F8FAF9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Halaman Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-9 h-9 rounded-lg text-xs font-semibold transition-all duration-150 ${
                    currentPage === pageNum
                      ? 'bg-[#315C4A] text-white shadow-xs'
                      : 'bg-white border border-[#E8EAE9] text-[#6B7280] hover:bg-[#F8FAF9]'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="p-2 rounded-lg border border-[#E8EAE9] bg-white text-[#6B7280] hover:bg-[#F8FAF9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Halaman Berikutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
