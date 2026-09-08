import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Users, 
  Calendar, 
  MapPin, 
  Layers, 
  HeartHandshake, 
  GraduationCap, 
  Award,
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { pesantrenInfo, leaderProfile, dailySchedules, advantages } from '../data/pesantrenInfo';
import { programsData } from '../data/programs';
import { facilitiesData } from '../data/facilities';
import { activitiesData } from '../data/activities';
import { newsData } from '../data/news';
import { galleryData } from '../data/gallery';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProgramCard } from '../components/cards/ProgramCard';
import { FacilityCard } from '../components/cards/FacilityCard';
import { ActivityCard } from '../components/cards/ActivityCard';
import { NewsCard } from '../components/cards/NewsCard';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const Home: React.FC = () => {
  // Select data for home sections
  const corePrograms = programsData.slice(0, 4);
  const featuredPrograms = programsData.filter(p => p.category === 'unggulan' || p.category === 'tahfidz').slice(0, 3);
  const homeFacilities = facilitiesData.slice(0, 5);
  const homeActivities = activitiesData.slice(0, 4);
  const recentNews = newsData.slice(0, 3);
  const previewGallery = galleryData.slice(0, 6);

  const getAdvantageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION - FULL EDGE-TO-EDGE IMAGE */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#0d1f18]">
        {/* Full Edge-to-Edge Background Mosque Image */}
        <img
          src="/images/pesantren-hero.png"
          alt="Kompleks Masjid dan Lingkungan Pesantren Modern Al-Hikmah"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Gradient Overlay across full width */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f16]/95 via-[#0a1f16]/75 to-transparent sm:to-[#0a1f16]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f16]/90 via-transparent to-black/30" />

        {/* Hero Content aligned to standard container grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
              Membangun Generasi <span className="text-[#4ADE80]">Qurani</span>, Berilmu, dan Berakhlak Mulia
            </h1>

            <p className="text-base sm:text-xl text-emerald-50/90 leading-relaxed max-w-2xl font-normal">
              Pesantren Modern yang mengintegrasikan pendidikan Islam, ilmu pengetahuan, karakter, dan keterampilan untuk membentuk generasi yang siap menghadapi masa depan.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button to="/profil" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} className="bg-[#315C4A] hover:bg-[#264839] text-white shadow-lg border border-emerald-400/20">
                Jelajahi Pesantren
              </Button>
              <Button to="/kontak" variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md">
                Hubungi Kami
              </Button>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-emerald-100 font-medium">
              <div className="bg-black/30 px-3.5 py-1.5 rounded-lg border border-white/10 backdrop-blur-xs">
                Akreditasi A Unggul
              </div>
              <div className="bg-black/30 px-3.5 py-1.5 rounded-lg border border-white/10 backdrop-blur-xs">
                Kurikulum Terintegrasi
              </div>
              <div className="bg-black/30 px-3.5 py-1.5 rounded-lg border border-white/10 backdrop-blur-xs">
                Tahfidz Bersanad
              </div>
            </div>
          </div>
        </div>

        {/* Floating Information Badges (Bottom Right inside Hero) */}
        <div className="hidden lg:flex absolute bottom-8 right-8 lg:right-12 bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-white items-center gap-3.5 max-w-xs shadow-xl z-10">
          <div>
            <p className="text-xs font-bold text-white">Kompleks Masjid Jami</p>
            <p className="text-[11px] text-emerald-200/80">Pusat Ibadah dan Halaqah Al-Quran 4.5 Ha</p>
          </div>
        </div>
      </section>

      {/* 2. STATISTIK PESANTREN */}
      <section className="bg-white py-12 border-b border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {/* Stat 1 */}
            <div className="text-center md:border-r border-[#E8EAE9] px-4">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#315C4A] tracking-tight">
                {pesantrenInfo.stats.santriCount}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#6B7280]">
                Santri Aktif
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center md:border-r border-[#E8EAE9] px-4">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#315C4A] tracking-tight">
                {pesantrenInfo.stats.teacherCount}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#6B7280]">
                Tenaga Pengajar
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center md:border-r border-[#E8EAE9] px-4">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#315C4A] tracking-tight">
                {pesantrenInfo.stats.experienceYears}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#6B7280]">
                Tahun Berdiri
              </p>
            </div>

            {/* Stat 4 */}
            <div className="text-center px-4">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#315C4A] tracking-tight">
                {pesantrenInfo.stats.programCount}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#6B7280]">
                Program Pendidikan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TENTANG PESANTREN */}
      <section className="py-20 lg:py-24 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Sisi Foto Lingkungan */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E8EAE9] aspect-[4/3] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80"
                  alt="Lingkungan Kampus Pesantren"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-lg text-xs font-semibold text-[#315C4A]">
                  Kampus Hijau Terpadu 4.5 Ha
                </div>
              </div>
            </div>

            {/* Sisi Konten */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc]">
                Tentang Kami
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1F2933] leading-tight">
                Menjadi Rumah untuk Belajar, Bertumbuh, dan Berakhlak
              </h2>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                Pesantren Al-Hikmah berikhtiar memadukan kedalaman tradisi keilmuan Islam klasik dengan kecakapan ilmu pengetahuan modern. Di sini, santri tidak hanya ditempa kemampuan akademis dan hafalan Al-Qur'an, tetapi juga dilatih adab, kemandirian, dan kepedulian sosial.
              </p>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                Dengan sistem asrama penuh (boarding school), santri mendapatkan bimbingan 24 jam dalam lingkungan kondusif yang menunjang ketenangan belajar, pembiasaan ibadah, dan penguasaan bahasa internasional.
              </p>
              <div className="pt-3">
                <Button to="/profil" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  Selengkapnya Tentang Kami
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEUNGGULAN PESANTREN */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Nilai Unggul"
            title="Mengapa Memilih Pesantren Kami?"
            description="Enam pilar utama yang menjadikan proses pembinaan dan pendidikan santri berlangsung utuh, seimbang, dan berdaya saing."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.id}
                className="bg-white rounded-xl border border-[#E8EAE9] p-6 hover:border-[#315C4A]/40 hover:shadow-[0_4px_16px_rgba(49,92,74,0.05)] transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-lg bg-[#EDF5F0] text-[#315C4A] flex items-center justify-center mb-4">
                  {getAdvantageIcon(adv.icon)}
                </div>
                <h3 className="text-base font-bold text-[#1F2933] leading-snug">
                  {adv.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SAMBUTAN PIMPINAN PESANTREN */}
      <section className="py-20 bg-[#F8FAF9] border-y border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Foto Pimpinan di Kiri */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative max-w-xs w-full">
                <div className="rounded-2xl overflow-hidden border border-[#E8EAE9] shadow-md aspect-[3/4] bg-white">
                  <img
                    src={leaderProfile.image}
                    alt={leaderProfile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full border border-[#E8EAE9] shadow-xs text-xs font-semibold text-[#315C4A] whitespace-nowrap">
                  Pimpinan Pesantren
                </div>
              </div>
            </div>

            {/* Konten di Kanan */}
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc]">
                Sambutan Pimpinan
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1F2933] leading-tight">
                Membangun Generasi yang Berilmu dan Berakhlak
              </h2>

              <blockquote className="border-l-2 border-[#315C4A] pl-4 py-1 text-base sm:text-lg italic text-[#1F2933] leading-relaxed">
                "{leaderProfile.quote}"
              </blockquote>

              <p className="text-sm text-[#6B7280] leading-relaxed">
                {leaderProfile.bio}
              </p>

              <div className="pt-3 border-t border-[#E8EAE9] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#1F2933]">{leaderProfile.name}</h3>
                  <p className="text-xs text-[#6B7280]">{leaderProfile.role} | {leaderProfile.education}</p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="font-serif italic text-xs text-[#C9A96E] font-semibold">Al-Hikmah Boarding School</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROGRAM PENDIDIKAN */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc] mb-2">
                Pilar Pendidikan
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1F2933]">
                Pendidikan yang Membentuk Masa Depan
              </h2>
            </div>
            <Link
              to="/pendidikan"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#315C4A] hover:underline shrink-0"
            >
              <span>Pelajari Semua Jalur</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corePrograms.map((prog, idx) => (
              <ProgramCard key={prog.id} program={prog} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROGRAM UNGGULAN */}
      <section className="py-20 bg-[#F8FAF9] border-y border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Program Unggulan"
            title="Kecakapan Tambahan dan Program Unggulan"
            description="Program akselerasi untuk membekali santri keterampilan bahasa, kepemimpinan, dan teknologi masa depan."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="group relative rounded-xl overflow-hidden shadow-sm border border-[#E8EAE9] bg-white h-96 flex flex-col justify-end p-6 hover:shadow-md transition-all duration-300"
              >
                {/* Background Image */}
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content Overlay */}
                <div className="relative z-10 text-white">
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#C9A96E] mb-1">
                    Program Unggulan
                  </span>
                  <h3 className="text-xl font-bold leading-snug">{prog.title}</h3>
                  <p className="mt-2 text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {prog.shortDesc}
                  </p>
                  <Link
                    to="/program"
                    className="mt-4 inline-flex items-center text-xs font-semibold text-white group-hover:text-[#EDF5F0] transition-colors"
                  >
                    <span>Detail Program</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button to="/program" variant="outline">
              Lihat Semua Program
            </Button>
          </div>
        </div>
      </section>

      {/* 8. KEHIDUPAN SANTRI (STORYTELLING TIMELINE) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Keseharian Santri"
            title="Sehari Bersama Santri"
            description="Ritme kehidupan disiplin, berkah, dan produktif mulai dari qiyamul lail hingga istirahat malam."
            align="center"
            className="mb-14"
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E8EAE9] space-y-8">
              {dailySchedules.slice(0, 7).map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#315C4A] group-hover:bg-[#315C4A] group-hover:scale-110 transition-all duration-200" />
                  
                  <div className="bg-[#F8FAF9] border border-[#E8EAE9] rounded-xl p-4 sm:p-5 hover:border-[#315C4A]/40 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold font-mono text-[#315C4A] bg-[#EDF5F0] px-2.5 py-0.5 rounded">
                        {item.time}
                      </span>
                      <span className="text-xs text-[#9CA3AF] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Rutinitas</span>
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1F2933]">{item.activity}</h3>
                    <p className="text-xs sm:text-sm text-[#6B7280] mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FASILITAS */}
      <section className="py-20 lg:py-24 bg-[#F8FAF9] border-y border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc] mb-2">
                Sarana dan Prasarana
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1F2933]">
                Fasilitas untuk Mendukung Proses Belajar
              </h2>
            </div>
            <Link
              to="/fasilitas"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#315C4A] hover:underline shrink-0"
            >
              <span>Jelajahi Semua Fasilitas</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Visual hierarchy: First item is large */}
            <FacilityCard facility={homeFacilities[0]} large={true} />
            <FacilityCard facility={homeFacilities[1]} />
            <FacilityCard facility={homeFacilities[2]} />
            <FacilityCard facility={homeFacilities[3]} />
            <FacilityCard facility={homeFacilities[4]} />
          </div>

          <div className="text-center mt-10">
            <Button to="/fasilitas" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Jelajahi Fasilitas Lengkap
            </Button>
          </div>
        </div>
      </section>

      {/* 10. KEGIATAN TERBARU */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc] mb-2">
                Aktivitas Santri
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1F2933]">
                Kegiatan Terbaru di Pesantren
              </h2>
            </div>
            <Button to="/kegiatan" variant="outline" size="sm">
              Lihat Semua Kegiatan
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeActivities.map((act) => (
              <ActivityCard key={act.id} activity={act} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. BERITA TERBARU */}
      <section className="py-20 lg:py-24 bg-[#F8FAF9] border-y border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc] mb-2">
                Kabar dan Informasi
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1F2933]">
                Berita dan Informasi Terkini
              </h2>
            </div>
            <Link
              to="/berita"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#315C4A] hover:underline shrink-0"
            >
              <span>Lihat Semua Berita</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. GALERI PREVIEW */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Dokumentasi Visual"
            title="Galeri Kegiatan dan Lingkungan"
            description="Potret kebersamaan santri, suasana ibadah, proses belajar, dan ragam kegiatan positif di kampus kami."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {previewGallery.map((item) => (
              <Link
                key={item.id}
                to="/galeri"
                className="group relative rounded-xl overflow-hidden aspect-square border border-[#E8EAE9] bg-[#F8FAF9]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-2 text-center">
                  <span className="text-[11px] font-semibold text-white leading-tight">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button to="/galeri" variant="outline">
              Lihat Semua Galeri
            </Button>
          </div>
        </div>
      </section>

      {/* 13. CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-[#EDF5F0] border-t border-[#d6e8dc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white text-[#315C4A] border border-[#d6e8dc]">
            Layanan Informasi
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1F2933] leading-tight">
            Ingin Mengenal Pesantren Kami Lebih Dekat?
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-xl mx-auto">
            Hubungi kami untuk mendapatkan informasi lebih lanjut mengenai pendidikan, program, dan kehidupan di Pesantren.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              size="lg"
              label="Hubungi Kami via WhatsApp"
              message="Assalamu'alaikum, saya ingin bertanya dan mendapatkan informasi lengkap mengenai Pesantren Al-Hikmah."
            />
          </div>
        </div>
      </section>
    </div>
  );
};
