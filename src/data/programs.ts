import { ProgramItem } from '../types';

export const programsData: ProgramItem[] = [
  {
    id: 'formal',
    title: 'Pendidikan Formal Terakreditasi',
    category: 'formal',
    shortDesc: 'Jenjang MTs dan MA dengan kurikulum nasional terintegrasi dengan wawasan sains kontemporer.',
    description: 'Pendidikan formal diselenggarakan dengan standar nasional Kemendikbudristek & Kemenag yang diperkaya dengan muatan kurikulum khas pesantren. Santri dipersiapkan menghadapi ujian nasional, olimpiade sains, serta seleksi masuk perguruan tinggi negeri maupun luar negeri.',
    goals: [
      'Menghasilkan lulusan yang kompeten dalam sains, sosial, dan teknologi',
      'Membekali santri dengan ijazah resmi negara untuk jenjang pendidikan tinggi',
      'Menumbuhkan budaya literasi, riset, dan pemikiran kritis berlandaskan nilai Islam'
    ],
    benefits: [
      'Ijazah Resmi Nasional (Kemenag & Kemendikbud)',
      'Laboratorium Sains & Komputer Berstandar Modern',
      'Bimbingan Intensif Persiapan PTN & Beasiswa Internasional',
      'Keikutsertaan aktif dalam Olimpiade Sains Nasional (OSN)'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    iconName: 'GraduationCap',
    featured: true
  },
  {
    id: 'pesantren',
    title: 'Dirasah Islamiyah (Kepesantrenan)',
    category: 'pesantren',
    shortDesc: 'Pendalaman khazanah turats Islam meliputi Fiqih, Aqidah, Akhlak, Tafsir, dan Hadits.',
    description: 'Kurikulum dirasah islamiyah membekali santri pemahaman agama yang mendalam (tafaqquh fiddin) bersumber dari kitab-kitab muktabar para ulama ahlus sunnah wal jamaah, diampu langsung oleh para asatidz berpengalaman.',
    goals: [
      'Memahami kaidah-kaidah syariat Islam secara komprehensif dan moderat',
      'Membentuk kepribadian santri yang berakhlak karimah sesuai tuntunan Rasulullah SAW',
      'Menguasai literatur kitab turats Arab gundul secara mandiri'
    ],
    benefits: [
      'Kajian Kitab Fiqih, Aqidah, Ushul Fiqih, Tafsir, Hadits, & Tarikh',
      'Metode Bandongan dan Sorogan yang menjaga sanad keilmuan',
      'Diskusi Bahtsul Masail santri untuk isu-isu kontemporer',
      'Bimbingan langsung dari masyayikh dan ulama tamu dari Timur Tengah'
    ],
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80',
    iconName: 'BookOpen',
    featured: true
  },
  {
    id: 'tahfidz',
    title: 'Tahfidz Al-Qur\'an Terpadu',
    category: 'tahfidz',
    shortDesc: 'Program pembinaan hafalan Al-Qur\'an dengan metode talaqqi bersanad dan mutqin.',
    description: 'Program Tahfidz Al-Qur\'an dirancang dengan pendekatan bertahap, mulai dari tahsin tajwid makharijul huruf, ziyadah (penambahan hafalan), hingga murojaah berkala untuk menjaga kemutqinan hafalan santri.',
    goals: [
      'Membimbing santri menuntaskan target hafalan 10 hingga 30 Juz',
      'Menerapkan kaidah tajwid yang benar sesuai riwayat Hafsh \'an \'Ashim',
      'Menanamkan kecintaan mengamalkan nilai-nilai Al-Qur\'an dalam perilaku sehari-hari'
    ],
    benefits: [
      'Halaqah intensif ba\'da Subuh dan ba\'da Maghrib (rasio 1:12)',
      'Ujian Tasmi\' 1-5 Juz sekali duduk di hadapan dewan penguji',
      'Peluang pengambilan Sanad Al-Qur\'an bagi santri berprestasi',
      'Karantina Tahfidz tematik pada masa liburan'
    ],
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1000&q=80',
    iconName: 'Sparkles',
    featured: true
  },
  {
    id: 'bahasa',
    title: 'Bilingual Language Immersion',
    category: 'bahasa',
    shortDesc: 'Penguasaan aktif Bahasa Arab dan Bahasa Inggris sebagai bahasa percakapan harian.',
    description: 'Lingkungan santri dikondisikan menggunakan dua bahasa asing (Bahasa Arab dan Bahasa Inggris) secara bergantian setiap dua pekan, didukung pembinaan public speaking (muhadharah) dan debate club.',
    goals: [
      'Menjadikan bahasa Arab dan Inggris sebagai instrumen komunikasi dan telaah ilmu',
      'Meningkatkan rasa percaya diri berbicara di forum internasional',
      'Membekali santri skor TOEFL/IELTS dan TOAFL yang kompetitif'
    ],
    benefits: [
      'Arabic & English Daily Environment Zone',
      'Latihan Pidato Tiga Bahasa (Muhadharah) mingguan',
      'TOEFL & TOAFL Preparation Clinic',
      'Program Native Speaker Visiting Fellow'
    ],
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80',
    iconName: 'Globe',
    featured: true
  },
  {
    id: 'leadership',
    title: 'Islamic Leadership & Character',
    category: 'unggulan',
    shortDesc: 'Penempaan jiwa kepemimpinan, integritas, dan kecakapan organisasi santri.',
    description: 'Santri dilatih memimpin dan mengelola berbagai agenda kehidupan asrama melalui Organisasi Santri, latihan dasar kepemimpinan (LDK), serta kepanduan pramuka Islam.',
    goals: [
      'Melatih tanggung jawab, manajemen waktu, dan problem-solving',
      'Menumbuhkan kepedulian sosial kemasyarakatan',
      'Membentuk calon pemimpin bangsa yang amanah dan berakhlak'
    ],
    benefits: [
      'Praktik kepengurusan organisasi santri otonom',
      'Pelatihan Public Speaking, Resolusi Konflik, dan Negosiasi',
      'Ekspedisi Kepemimpinan Alam Terbuka & Bela Negara',
      'Mentoring kepemimpinan bersama tokoh nasional'
    ],
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
    iconName: 'Compass',
    featured: false
  },
  {
    id: 'entrepreneurship',
    title: 'Santripreneur & Kemandirian',
    category: 'unggulan',
    shortDesc: 'Pembekalan dasar kewirausahaan halal, ekonomi syariah, dan literasi finansial.',
    description: 'Mengajarkan santri kemandirian ekonomi melalui unit usaha pesantren seperti hidroponik, mini market santri, konveksi busana muslim, dan dasar-dasar akad muamalah kontemporer.',
    goals: [
      'Membangun etos kerja keras dan mentalitas wirausaha beretika syar\'i',
      'Mengenalkan prinsip-prinsip ekonomi Islam praktis',
      'Menghasilkan santri mandiri yang mampu membuka lapangan kerja'
    ],
    benefits: [
      'Laboratorium Bisnis & Koperasi Santri',
      'Pelatihan Produksi Produk Kreatif dan Pemasaran Syariah',
      'Seminar & Workshop bersama praktisi pengusaha muslim',
      'Bazar Karya Santri tahunan'
    ],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
    iconName: 'TrendingUp',
    featured: false
  },
  {
    id: 'technology',
    title: 'Technology & Digital Literacy',
    category: 'unggulan',
    shortDesc: 'Pengenalan teknologi informasi, dasar pemrograman komputer, dan literasi digital beradab.',
    description: 'Santri dibekali keterampilan teknologi masa depan seperti pengenalan coding, desain grafis, robotika dasar, dan etika bermedia digital agar mampu menjadi produsen konten bermanfaat.',
    goals: [
      'Menguasai kecakapan digital dasar yang relevan dengan era revolusi industri',
      'Membentengi santri dari dampak negatif media sosial dengan adab digital',
      'Memanfaatkan teknologi untuk sarana syiar dakwah yang edukatif'
    ],
    benefits: [
      'Laboratorium Komputer Multimedia terkoneksi internet sehat',
      'Modul Pemrograman Web & Desain Grafis Dasar',
      'Klub Robotika & Karya Ilmiah Remaja',
      'Sertifikasi kompetensi komputer'
    ],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    iconName: 'Cpu',
    featured: false
  }
];
