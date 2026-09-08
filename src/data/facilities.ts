import { FacilityItem } from '../types';

export const facilitiesData: FacilityItem[] = [
  {
    id: 'masjid',
    name: 'Masjid Jami\' Ar-Rozzaq',
    category: 'ibadah',
    description: 'Pusat spiritual dan kegiatan peribadatan pesantren berkapasitas 1.500 jamaah. Dilengkapi tata suara akustik prima, penyejuk udara, dan karpet lembut untuk kenyamanan iktikaf serta halaqah Al-Qur\'an.',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Kapasitas 1.500 Jamaah',
      'Area Shalat Putra & Putri Terpisah Rapi',
      'Tempat Wudhu Bersih & Mengalir Deras',
      'Ruang Khusus Halaqah Tahfidz'
    ],
    featured: true
  },
  {
    id: 'asrama',
    name: 'Gedung Asrama Santri Sehat & Asri',
    category: 'asrama',
    description: 'Asrama santri putra dan putri berada di kompleks terpisah dengan pengawasan 24 jam oleh musyrif/musyrifah. Ruangan bersih, ventilasi silang yang sejuk, serta ranjang tingkat berkualitas tinggi.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Kamar tidur berpenghuni 6-8 santri',
      'Lemari dan meja belajar pribadi',
      'Kamar mandi higienis berstandar sanitasi',
      'Pengawasan Pembina 24 Jam'
    ],
    featured: true
  },
  {
    id: 'kelas',
    name: 'Ruang Kelas Multimedia Terpadu',
    category: 'akademik',
    description: 'Ruang belajar berkonsep ergonomis dilengkapi Smart TV/Proyektor, pencahayaan alami memadai, meja kursi nyaman, dan pendingin ruangan untuk mendukung konsentrasi belajar optimal.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Smart TV Display Interaktif',
      'Pendingin Udara (AC) & Tata Udara Sejuk',
      'Maksimal 28 santri per kelas',
      'Whiteboard luas dan sound system terintegrasi'
    ],
    featured: true
  },
  {
    id: 'perpustakaan',
    name: 'Perpustakaan & Ruang Baca Digital',
    category: 'akademik',
    description: 'Menyediakan ribuan koleksi kitab turats Islam klasik, buku referensi sains, sastra dunia, ensiklopedia, serta terminal komputer untuk mengakses jurnal dan perpustakaan digital nasional.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
    features: [
      '5.000+ Judul Kitab Turats & Buku Modern',
      'Katalogisasi Digital OPAC',
      'Ruang Diskusi & Silent Study Area',
      'Akses Database Jurnal Ilmiah Online'
    ],
    featured: true
  },
  {
    id: 'laboratorium',
    name: 'Laboratorium Sains & Komputer',
    category: 'akademik',
    description: 'Laboratorium Fisika, Kimia, Biologi dengan instrumen praktikum lengkap, serta Laboratorium Komputer dengan koneksi serat optik berfilter internet sehat.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Peralatan Eksperimen Sains Standar Olimpiade',
      '40 Unit PC Modern untuk Lab Komputer',
      'Jaringan LAN & Internet Fiber Optic',
      'Perangkat Pembelajaran Robotika Dasar'
    ],
    featured: false
  },
  {
    id: 'olahraga',
    name: 'Kompleks Olahraga & Lapangan Terbuka',
    category: 'olahraga',
    description: 'Fasilitas olahraga terpadu untuk menjaga kebugaran jasmani santri, mencakup lapangan futsal sintetis, lapangan basket, voli, bulutangkis, arena memanah (archery), dan lintasan lari.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Lapangan Futsal & Mini Soccer',
      'Lapangan Basket & Voli Standar',
      'Arena Memanah (Sunnah Sports)',
      'Jogging Track Mengelilingi Kampus'
    ],
    featured: true
  },
  {
    id: 'aula',
    name: 'Auditorium Serbaguna Ar-Rozzaq',
    category: 'penunjang',
    description: 'Gedung pertemuan megah untuk wisuda kelulusan, seminar nasional, musabaqah tilawatil Qur\'an, haflah akhirussanah, dan penyambutan wali santri.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Kapasitas 1.000 Tempat Duduk',
      'Tata Suara & Tata Cahaya Teatrikal',
      'Panggung Luas dan Megah',
      'Ruang Transit VIP'
    ],
    featured: false
  },
  {
    id: 'ruang-makan',
    name: 'Ruang Makan & Dapur Bersertifikasi Halal',
    category: 'penunjang',
    description: 'Dapur pesantren higienis dengan menu makanan bergizi seimbang 3 kali sehari yang diawasi ahli gizi, disajikan secara tertib dan mengedepankan adab makan islami.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Menu 4 Sehat Berputar Setiap Pekan',
      'Sertifikasi Halal & Standar Sanitasi Dinkes',
      'Air Minum Higienis Reverse Osmosis',
      'Peralatan Stainless Food-Grade'
    ],
    featured: false
  }
];
