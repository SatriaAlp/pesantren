import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { programsData } from '../data/programs';
import { CheckCircle2, Target, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';

export const Programs: React.FC = () => {
  // Filter all programs
  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <PageHero
        badge="Kecakapan Masa Depan"
        title="Program Unggulan Pesantren"
        description="Membekali santri dengan penguasaan Al-Qur'an, dwibahasa aktif, kepemimpinan Islam, kemandirian wirausaha, serta literasi teknologi."
        breadcrumbCurrent="Program"
      />

      {/* 2. PROGRAM LIST (ALTERNATING LAYOUT) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {programsData.map((program, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={program.id}
                id={program.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-[#E8EAE9] shadow-md aspect-[4/3] bg-[#F8FAF9] group">
                    <img
                      src={program.image}
                      alt={program.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-white/95 text-[#315C4A] shadow-xs">
                      {program.category}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-xs font-bold font-mono text-[#315C4A] bg-[#EDF5F0] px-2.5 py-0.5 rounded">
                      Program 0{idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F2933] mt-2">
                      {program.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                    {program.description}
                  </p>

                  {/* Tujuan */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F2933]">
                      <Target className="w-4 h-4 text-[#315C4A]" />
                      <span>Tujuan Program:</span>
                    </div>
                    <ul className="space-y-1.5 pl-6 list-disc text-xs sm:text-sm text-[#6B7280]">
                      {program.goals.map((goal, gIdx) => (
                        <li key={gIdx}>{goal}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Manfaat */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F2933]">
                      <Award className="w-4 h-4 text-[#C9A96E]" />
                      <span>Manfaat & Keunggulan Santri:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {program.benefits.map((b, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2 p-2.5 rounded-lg bg-[#F8FAF9] border border-[#E8EAE9] text-xs text-[#1F2933]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#315C4A] shrink-0 mt-0.5" />
                          <span className="leading-snug">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <Button to="/kontak" variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                      Konsultasi Program Ini
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 bg-[#F8FAF9] border-t border-[#E8EAE9]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#1F2933]">
            Tertarik Mengetahui Kurikulum Detail Program Kami?
          </h2>
          <p className="text-sm text-[#6B7280] max-w-xl mx-auto">
            Tim layanan informasi kami siap memberikan panduan lengkap mengenai capaian santri dan jadwal pelaksanaan program.
          </p>
          <Button to="/kontak" variant="primary">
            Hubungi Bagian Kurikulum
          </Button>
        </div>
      </section>
    </div>
  );
};
