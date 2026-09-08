import { PesantrenInfo, Milestone, LeaderProfile, DailyScheduleItem } from '../types';

export const pesantrenInfo: PesantrenInfo = {
  name: "Pesantren Modern Ar-Rozzaq",
  tagline: "Membangun Generasi Qurani, Berilmu, dan Berakhlak Mulia",
  foundedYear: 2005,
  accreditation: "Terakreditasi A (Unggul)",
  address: {
    street: "Jl. Pendidikan Pesantren No. 45, Cisarua",
    village: "Tugu Selatan",
    district: "Cisarua",
    city: "Kabupaten Bogor",
    province: "Jawa Barat",
    postalCode: "16750",
    country: "Indonesia",
    full: "Jl. Pendidikan Pesantren No. 45, Cisarua, Kabupaten Bogor, Jawa Barat 16750"
  },
  contact: {
    phone: "+62 251 8259 888",
    whatsapp: "+62 812 3456 7890",
    whatsappNumberOnly: "6281234567890",
    email: "info@arrozzaq-pesantren.sch.id",
    officeHours: "Senin - Sabtu: 08.00 - 16.00 WIB"
  },
  socialMedia: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com"
  },
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126830.123456789!2d106.9123456!3d-6.6891234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b6123456789%3A0x123456789abcdef!2sCisarua%2C%20Bogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
  stats: {
    santriCount: "500+",
    teacherCount: "50+",
    experienceYears: "20+",
    programCount: "10+",
    hafidzCount: "120+",
    campusArea: "4.5 Ha"
  }
};

export const historyMilestones: Milestone[] = [
  {
    year: "2005",
    title: "Pesantren Didirikan",
    description: "Didirikan oleh para ulama dan cendekiawan dengan niat mewujudkan lembaga pendidikan Islam modern yang memadukan kedalaman tradisi keilmuan Islam dan wawasan sains kontemporer."
  },
  {
    year: "2010",
    title: "Pembangunan Asrama & Masjid Jami'",
    description: "Perluasan sarana asrama representatif bertingkat serta pembangunan Masjid Jami' sebagai pusat ibadah dan halaqah tahfidz santri."
  },
  {
    year: "2015",
    title: "Pengembangan Pendidikan Formal",
    description: "Membuka jenjang formal MTs dan MA Ar-Rozzaq berakreditasi 'A', dengan penguatan kurikulum sains, sains teknologi, dan penguasaan dwibahasa (Arab-Inggris)."
  },
  {
    year: "2020",
    title: "Modernisasi & Perluasan Fasilitas",
    description: "Pembangunan gedung sains terpadu, perpustakaan digital, sarana olahraga, serta penataan lanskap kampus hijau asri ramah lingkungan."
  },
  {
    year: "2025",
    title: "Transformasi Digital & Jaringan Global",
    description: "Implementasi sistem smart campus, kolaborasi pertukaran pelajar internasional, penguatan tahfidz sanad, dan pembekalan kewirausahaan digital."
  }
];

export const leaderProfile: LeaderProfile = {
  name: "K.H. Dr. Abdullah Syamsuddin, M.A.",
  role: "Pimpinan & Pengasuh Pesantren",
  education: "Al-Azhar University Cairo (S1, S2) & UIN Syarif Hidayatullah (S3)",
  quote: "Pendidikan pesantren bukan sekadar transfer pengetahuan, melainkan penanaman adab, penempaan jiwa kepemimpinan, dan penyemaian cinta kepada Al-Qur'an demi melahirkan generasi yang rahmatan lil 'alamin.",
  bio: "Beliau telah mengabdikan lebih dari 25 tahun hidupnya dalam dunia dakwah dan tarbiyah Islam. Berpengalaman memimpin berbagai forum ilmiah Islam dan senantiasa mendampingi para santri dalam pembinaan akhlak serta hafalan Al-Qur'an dengan kehangatan seorang ayah.",
  image: "/images/leader-profile.png"
};

export const dailySchedules: DailyScheduleItem[] = [
  {
    time: "04:00 - 05:00",
    activity: "Persiapan Ibadah & Tahajud",
    description: "Bangun pagi, qiyamul lail, mandi, dan persiapan menuju masjid.",
    icon: "Moon"
  },
  {
    time: "05:00 - 06:30",
    activity: "Shalat Subuh & Halaqah Al-Qur'an",
    description: "Shalat Subuh berjamaah, dzikir pagi, dan setoran hafalan (ziyadah) tahfidz.",
    icon: "Sun"
  },
  {
    time: "06:30 - 07:15",
    activity: "Sarapan & Persiapan Sekolah",
    description: "Sarapan pagi bersama di ruang makan santri dan persiapan ke kelas formal.",
    icon: "Coffee"
  },
  {
    time: "07:15 - 13:45",
    activity: "Kegiatan Akademik Sekolah",
    description: "Pembelajaran kurikulum formal nasional, sains, bahasa asing, dan teknologi di kelas multimedia.",
    icon: "BookOpen"
  },
  {
    time: "14:00 - 15:30",
    activity: "Istirahat & Pembelajaran Pesantren",
    description: "Kajian kitab turats (kitab kuning), fiqih, tafsir, dan gramatika bahasa Arab.",
    icon: "Scroll"
  },
  {
    time: "16:00 - 17:30",
    activity: "Olahraga & Ekstrakurikuler",
    description: "Aktivitas fisik terpadu (memanah, berkuda, futsal, silat), keorganisasian, dan pengembangan minat.",
    icon: "Trophy"
  },
  {
    time: "18:00 - 19:45",
    activity: "Shalat Maghrib & Murojaah",
    description: "Shalat Maghrib berjamaah, muraja'ah akbar hafalan Al-Qur'an, dan tausiyah maghrib.",
    icon: "Users"
  },
  {
    time: "20:00 - 21:30",
    activity: "Belajar Mandiri & Pendalaman",
    description: "Muthala'ah terbimbing, penyelesaian tugas sekolah, dan persiapan materi esok hari.",
    icon: "Sparkles"
  },
  {
    time: "22:00",
    activity: "Istirahat Malam",
    description: "Tidur malam tepat waktu untuk menjaga kebugaran fisik dan kesiapan ibadah malam.",
    icon: "Shield"
  }
];

export const advantages = [
  {
    id: 1,
    title: "Pendidikan Terintegrasi",
    description: "Memadukan kurikulum keagamaan pesantren dan kurikulum nasional demi keunggulan sains dan iman.",
    icon: "Layers"
  },
  {
    id: 2,
    title: "Tahfidz Al-Qur'an Terbimbing",
    description: "Metode talaqqi bersanad dengan target hafalan terukur dan pembinaan murojaah yang konsisten.",
    icon: "BookOpen"
  },
  {
    id: 3,
    title: "Lingkungan Islami Kondusif",
    description: "Suasana kampus asri, sejuk, dan terbebas dari distraksi negatif untuk ketenangan belajar dan beribadah.",
    icon: "HeartHandshake"
  },
  {
    id: 4,
    title: "Tenaga Pengajar Kompeten",
    description: "Didukung asatidz lulusan perguruan tinggi Islam ternama (Timur Tengah & Dalam Negeri) serta guru profesional.",
    icon: "GraduationCap"
  },
  {
    id: 5,
    title: "Pembentukan Karakter & Adab",
    description: "Menanamkan nilai kejujuran, kemandirian, kedisiplinan, dan kesantunan dalam interaksi sehari-hari.",
    icon: "Award"
  },
  {
    id: 6,
    title: "Pengembangan Potensi Diri",
    description: "Mendukung bakat santri melalui wadah kepemimpinan, riset ilmiah, bahasa internasional, dan teknologi.",
    icon: "Sparkles"
  }
];
