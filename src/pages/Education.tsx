import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  Check, 
  Layers, 
  Award, 
  Clock, 
  Target, 
  Repeat, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/common/Button';

export const Education: React.FC = () => {
  const formalLevels = [
    {
      level: 'Madrasah Tsanawiyah (MTs)',
      equivalent: 'Setingkat SMP (Usia 12 - 15 Tahun)',
      desc: 'Menyelenggarakan kurikulum terpadu Kemenag & Kemendikbud dengan penekanan pada pembentukan akhlak masa transisi remaja, penguatan hafalan Al-Qur\'an 10-15 Juz, serta pondasi sains dan matematika.',
      features: [
        'Akreditasi A Unggul',
        'Pembiasaan dwibahasa Arab & Inggris',
        'Praktikum Sains & Eksperimen Dasar',
        'Bimbingan Lomba Sains & MTQ Pelajar'
      ]
    },
    {
      level: 'Madrasah Aliyah (MA)',
      equivalent: 'Setingkat SMA (Usia 15 - 18 Tahun)',
      desc: 'Pendidikan lanjutan jenjang menengah atas dengan peminatan Matematika & Ilmu Pengetahuan Alam (MIPA) serta Keagamaan. Santri dipersiapkan lolos seleksi PTN favorit, universitas luar negeri (Timur Tengah, Eropa, Asia), dan perguruan tinggi kedinasan.',
      features: [
        'Peminatan IPA Terpadu & Keagamaan',
        'Program Akselerasi Bimbingan UTBK & PTN',
        'Kelas Khusus Persiapan Beasiswa Timur Tengah',
        'Riset Karya Tulis Ilmiah Santri (KIR)'
      ]
    }
  ];

  const pesantrenSubjects = [
    {
      name: 'Fiqih & Ushul Fiqih',
      description: 'Mempelajari hukum-hukum syariat Islam dalam ranah ibadah, muamalah, munakahat, dan jinayat berlandaskan mazhab Syafi\'i.',
      books: ['Safinatun Najah', 'Fathul Qorib', 'Kifayatul Akhyar', 'Al-Waraqat']
    },
    {
      name: 'Aqidah & Tauhid',
      description: 'Menanamkan pokok-pokok keimanan ahlus sunnah wal jamaah demi membentengi akal dan hati dari pemikiran menyimpang.',
      books: ['Aqidatul Awam', 'Tijatud Darori', 'Jauharotut Tauhid']
    },
    {
      name: 'Akhlak & Tasawuf',
      description: 'Menempa budi pekerti, adab kepada orang tua, guru, sesama, serta pensucian jiwa (tazkiyatun nafs).',
      books: ['Ta\'limul Muta\'allim', 'Bidayatul Hidayah', 'Ihya\' Ulumiddin']
    },
    {
      name: 'Tafsir & Ulumul Qur\'an',
      description: 'Memahami kaidah penafsiran ayat-ayat suci Al-Qur\'an, asbabun nuzul, dan maknanya dalam konteks kontemporer.',
      books: ['Tafsir Jalalain', 'Tafsir Ibnu Katsir', 'Zubdatut Tafsir']
    },
    {
      name: 'Hadits & Mushthalah Hadits',
      description: 'Mengkaji sunnah nabawiyah, sanad periwayatan, serta derajat kesahihan hadits sebagai pedoman hidup mukmin.',
      books: ['Arba\'in Nawawiyah', 'Riyadhus Shalihin', 'Bulughul Maram', 'Al-Baiquniyyah']
    },
    {
      name: 'Bahasa Arab (Nahwu & Sharaf)',
      description: 'Kunci memahami kitab turats melalui penguasaan tata bahasa, gramatika kalimat, morfologi, dan sastra balaghah.',
      books: ['Al-Jurumiyah', 'Al-Amtsilah At-Tashrifiyyah', 'Al-Fiyah Ibnu Malik']
    }
  ];

  const tahfidzPillars = [
    {
      title: 'Sistem Setoran (Ziyadah)',
      desc: 'Setoran hafalan baru dilakukan setiap hari di hadapan musyrif tahfidz dengan kuota terukur 1/2 hingga 1 halaman per hari.',
      icon: <Target className="w-5 h-5 text-[#315C4A]" />
    },
    {
      title: 'Target Hafalan Jelas',
      desc: 'Program reguler menargetkan 10-15 Juz selama masa studi, dan program takhasus menargetkan 30 Juz mutqin bersanad.',
      icon: <Award className="w-5 h-5 text-[#315C4A]" />
    },
    {
      title: 'Metode Talaqqi Bersanad',
      desc: 'Santri menyimak pelafalan asatidz, memperbaiki makharijul huruf, dan mempraktikkan hukum tajwid secara teliti dan talaqqi langsung.',
      icon: <BookOpen className="w-5 h-5 text-[#315C4A]" />
    },
    {
      title: 'Sistem Murojaah Terjadwal',
      desc: 'Murojaah harian (pasangan santri), murojaah pekanan, dan ujian tasmi\' 1-5 Juz sekali duduk untuk menjamin kualitas hafalan.',
      icon: <Repeat className="w-5 h-5 text-[#315C4A]" />
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <PageHero
        badge="Kurikulum & Pengajaran"
        title="Sistem Pendidikan"
        description="Integrasi kurikulum terpadu antara ilmu agama, kurikulum nasional, tahfidz Al-Qur'an, dan kecakapan hidup."
        breadcrumbCurrent="Pendidikan"
      />

      {/* 2. PENJELASAN SISTEM PENDIDIKAN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc]">
                Metode Pendidikan
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1F2933] leading-tight">
                Memadukan Kedalaman Tradisi dan Keunggulan Sains Modern
              </h2>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                Pola pendidikan di Pesantren Al-Hikmah berlandaskan konsep *Ta'dib*, *Ta'lim*, dan *Tarbiyah*. Seluruh aspek kehidupan santri selama 24 jam di asrama dirancang menjadi media pembelajaran: keteladanan akhlak, pembiasaan ibadah sunnah, kemandirian mengatur waktu, dan kebersamaan ukhuwah.
              </p>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                Kami tidak memisahkan antara ilmu agama dan sains. Keduanya merupakan ayat-ayat Allah—baik yang termaktub dalam firman-Nya (qauliyah) maupun yang terbentang di alam semesta (kauniyah).
              </p>

              <div className="pt-2 grid grid-cols-3 gap-3">
                <div className="text-center p-3 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9]">
                  <p className="text-xl font-bold text-[#315C4A]">24 Jam</p>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">Pengasuhan Santri</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9]">
                  <p className="text-xl font-bold text-[#315C4A]">1 : 12</p>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">Rasio Halaqah</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9]">
                  <p className="text-xl font-bold text-[#315C4A]">100%</p>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">Lulus Ujian Nasional</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#E8EAE9] shadow-sm aspect-[4/3] bg-[#F8FAF9]">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                  alt="Metode Pendidikan Pesantren"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PENDIDIKAN FORMAL */}
      <section className="py-20 bg-[#F8FAF9] border-y border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Jenjang Formal"
            title="Pendidikan Formal Nasional"
            description="Jenjang pendidikan resmi dengan legalitas negara dari Kementerian Agama dan Kemendikbudristek."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {formalLevels.map((lvl, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8EAE9] p-6 sm:p-8 shadow-xs hover:border-[#315C4A]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-[#EDF5F0] text-[#315C4A] flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A96E]">
                      {lvl.equivalent}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1F2933]">
                    {lvl.level}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {lvl.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[#E8EAE9] space-y-2.5">
                    <p className="text-xs font-bold text-[#1F2933] uppercase tracking-wider">
                      Keunggulan Kurikulum:
                    </p>
                    {lvl.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#1F2933]">
                        <Check className="w-4 h-4 text-[#315C4A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Button to="/kontak" variant="secondary" size="sm" className="w-full">
                    Konsultasikan Jenjang Ini
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PENDIDIKAN PESANTREN (DIRASAH ISLAMIYAH) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Kitab Turats"
            title="Pendidikan Pesantren & Kajian Kitab"
            description="Kajian terstruktur cabang ilmu keislaman yang dipelajari santri dengan mengacu pada kitab-kitab ulama rujukan."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pesantrenSubjects.map((sub, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E8EAE9] p-6 hover:border-[#315C4A]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#1F2933] leading-snug">
                    {sub.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E8EAE9]">
                  <p className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-2">
                    Kitab Rujukan:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {sub.books.map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="text-[11px] font-medium bg-[#EDF5F0] text-[#315C4A] px-2 py-0.5 rounded"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TAHFIDZ AL-QUR'AN */}
      <section className="py-20 bg-[#F8FAF9] border-t border-[#E8EAE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc]">
                Mahkota Kemuliaan
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1F2933] leading-tight">
                Program Pembinaan Tahfidz Al-Qur'an
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Mencetak para huffadz yang tidak hanya lancar secara hafalan lafal, tetapi juga mendalami kaidah tajwid, tartil pelafalan, dan menghayati adab seorang penghafal Al-Qur'an.
              </p>

              <div className="p-5 rounded-xl bg-white border border-[#E8EAE9] space-y-2">
                <p className="text-xs font-bold text-[#1F2933] uppercase tracking-wider">
                  Target Capaian Santri:
                </p>
                <div className="text-xs text-[#6B7280] space-y-1">
                  <p>• <strong>Program Reguler:</strong> Target 10 - 15 Juz mutqin.</p>
                  <p>• <strong>Program Takhasus Tahfidz:</strong> Target 30 Juz mutqin bersanad.</p>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/program" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                  Lihat Program Takhasus
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tahfidzPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#E8EAE9] shadow-xs hover:border-[#315C4A]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#EDF5F0] flex items-center justify-center mb-3">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-bold text-[#1F2933]">{pillar.title}</h3>
                    <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
