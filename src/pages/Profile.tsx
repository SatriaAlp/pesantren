import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { historyMilestones, leaderProfile, pesantrenInfo } from '../data/pesantrenInfo';
import { CheckCircle2, Award, BookOpen, Compass, ShieldCheck, Heart } from 'lucide-react';
import { Button } from '../components/common/Button';

export const Profile: React.FC = () => {
  const missions = [
    'Menyelenggarakan pendidikan Islam yang berakar kuat pada nilai-nilai Al-Qur\'an dan As-Sunnah.',
    'Membina santri agar memiliki akidah yang lurus, ibadah yang shahih, dan akhlak yang mulia.',
    'Mengintegrasikan kurikulum pesantren dengan kurikulum nasional berbasis sains dan teknologi modern.',
    'Menumbuhkan budaya tahfidz Al-Qur\'an yang mutqin dengan pemahaman makna dan pengamalan nyata.',
    'Membekali santri kemampuan dwibahasa internasional (Arab dan Inggris) serta jiwa kepemimpinan mandiri.',
    'Mencetak lulusan yang siap melanjutkan ke jenjang perguruan tinggi terbaik dunia dan berkontribusi bagi umat.'
  ];

  const values = [
    {
      title: 'Integritas & Adab',
      desc: 'Mendahulukan adab sebelum ilmu, menjunjung tinggi kejujuran dan amanah dalam setiap amal.',
      icon: <ShieldCheck className="w-5 h-5 text-[#315C4A]" />
    },
    {
      title: 'Keunggulan Akademik',
      desc: 'Berorientasi pada prestasi keilmuan mutakhir dan riset berlandaskan etika Islam.',
      icon: <BookOpen className="w-5 h-5 text-[#315C4A]" />
    },
    {
      title: 'Wawasan Global',
      desc: 'Membekali santri pemahaman multibahasa, diplomasi, dan kematangan menghadapi dinamika dunia.',
      icon: <Compass className="w-5 h-5 text-[#315C4A]" />
    },
    {
      title: 'Kepedulian Sosial',
      desc: 'Menanamkan jiwa empati, filantropi, dan kerelawanan untuk menebar kemaslahatan di masyarakat.',
      icon: <Heart className="w-5 h-5 text-[#315C4A]" />
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO PAGE */}
      <PageHero
        badge="Tentang Kami"
        title="Profil Pesantren"
        description="Mengenal lebih dekat identitas, sejarah, visi-misi, serta kepemimpinan Pesantren Modern Ar-Rozzaq."
        breadcrumbCurrent="Profil"
      />

      {/* 2. TENTANG PESANTREN (IDENTITAS) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc]">
                Identitas Lembaga
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1F2933] leading-tight">
                Pondasi Pendidikan Islam yang Menjawab Tantangan Zaman
              </h2>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                {pesantrenInfo.name} didirikan sebagai respon atas kebutuhan masyarakat muslim modern akan lembaga pendidikan yang mampu menjaga kemurnian tauhid dan kedalaman tradisi keilmuan Islam, sekaligus melahirkan kader-kader ilmuwan, profesional, dan pemimpin yang adaptif terhadap kemajuan sains.
              </p>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                Berdiri di atas lahan seluas 4.5 hektar dengan atmosfer pegunungan yang sejuk dan asri di Cisarua, Bogor, pesantren ini menyelenggarakan pola pengasuhan 24 jam dengan rasio pembina dan santri yang ideal.
              </p>
              
              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9]">
                  <p className="text-xs text-[#6B7280]">Status Legalitas</p>
                  <p className="text-sm font-bold text-[#1F2933] mt-1">Kemenag & Kemendikbud</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9]">
                  <p className="text-xs text-[#6B7280]">Akreditasi</p>
                  <p className="text-sm font-bold text-[#315C4A] mt-1">{pesantrenInfo.accreditation}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-[#E8EAE9] shadow-sm aspect-[4/5] bg-[#F8FAF9]">
                    <img
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                      alt="Santri berdiskusi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-[#E8EAE9] shadow-sm aspect-square bg-[#F8FAF9]">
                    <img
                      src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80"
                      alt="Masjid Pesantren"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-6">
                  <div className="rounded-2xl overflow-hidden border border-[#E8EAE9] shadow-sm aspect-square bg-[#F8FAF9]">
                    <img
                      src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80"
                      alt="Halaqah Quran"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-[#E8EAE9] shadow-sm aspect-[4/5] bg-[#F8FAF9]">
                    <img
                      src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
                      alt="Ruang Kelas Modern"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEJARAH PESANTREN (TIMELINE) */}
      <section className="py-20 bg-[#F8FAF9] border-y border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Perjalanan Panjang"
            title="Sejarah Singkat Pesantren"
            description="Tonggak bersejarah perkembangan Pesantren dari masa awal perintisan hingga era transformasi digital saat ini."
            align="center"
            className="mb-14"
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E8EAE9] space-y-10">
              {historyMilestones.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Circle milestone */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#315C4A] group-hover:bg-[#315C4A] group-hover:scale-125 transition-all duration-200" />

                  <div className="bg-white rounded-xl border border-[#E8EAE9] p-5 sm:p-6 shadow-xs group-hover:border-[#315C4A]/40 transition-colors">
                    <span className="inline-block font-mono text-sm font-bold text-[#315C4A] bg-[#EDF5F0] px-3 py-1 rounded-md mb-2">
                      Tahun {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-[#1F2933]">{item.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISI & MISI */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Visi */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc]">
                Visi Pesantren
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F2933]">
                Arah & Pandangan Masa Depan
              </h2>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAF9] border border-[#E8EAE9]">
                <p className="text-xl sm:text-2xl font-semibold text-[#1F2933] leading-relaxed font-serif">
                  "Menjadi lembaga pendidikan Islam unggulan terdepan di tingkat internasional yang melahirkan generasi muttaqin, cendekiawan berakhlak mulia, berwawasan global, dan berjiwa pelopor."
                </p>
                <div className="mt-6 pt-4 border-t border-[#E8EAE9] flex items-center justify-between text-xs text-[#6B7280]">
                  <span>Visi Jangka Panjang</span>
                  <span className="font-semibold text-[#315C4A]">Menuju 2035</span>
                </div>
              </div>

              {/* Nilai Inti */}
              <div className="pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1F2933] mb-4">
                  Nilai-Nilai Utama (Core Values)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {values.map((v, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-[#E8EAE9] bg-white">
                      <div className="flex items-center gap-2 mb-1">
                        {v.icon}
                        <span className="text-xs font-bold text-[#1F2933]">{v.title}</span>
                      </div>
                      <p className="text-[11px] text-[#6B7280] leading-snug">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Misi */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc]">
                Misi Pesantren
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F2933]">
                Langkah Nyata Mewujudkan Cita-Cita
              </h2>
              <p className="text-sm text-[#6B7280]">
                Upaya terstruktur dan berkesinambungan yang kami jalankan dalam seluruh ranah pendidikan santri:
              </p>

              <div className="space-y-3.5 pt-2">
                {missions.map((misi, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl border border-[#E8EAE9] bg-white hover:border-[#315C4A]/40 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#EDF5F0] text-[#315C4A] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#1F2933] leading-relaxed">
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PIMPINAN PESANTREN */}
      <section className="py-20 bg-[#F8FAF9] border-t border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Kepemimpinan"
            title="Pimpinan & Pengasuh Pesantren"
            description="Keteladanan para masyayikh dan dewan asatidz dalam memimpin pembinaan santri dengan penuh kasih sayang dan kearifan."
            align="center"
            className="mb-14"
          />

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E8EAE9] p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[260px] aspect-[3/4] rounded-xl overflow-hidden border border-[#E8EAE9] shadow-xs bg-[#F8FAF9]">
                  <img
                    src={leaderProfile.image}
                    alt={leaderProfile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-[#315C4A] uppercase tracking-wider">
                    {leaderProfile.role}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1F2933] mt-1">
                    {leaderProfile.name}
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-0.5">
                    {leaderProfile.education}
                  </p>
                </div>

                <blockquote className="text-sm italic text-[#1F2933] bg-[#F8FAF9] p-4 rounded-xl border-l-2 border-[#315C4A]">
                  "{leaderProfile.quote}"
                </blockquote>

                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  {leaderProfile.bio}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <Button to="/kontak" variant="outline" size="sm">
                    Hubungi Sekretariat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
