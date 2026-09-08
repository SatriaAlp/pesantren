export interface NavItem {
  label: string;
  href: string;
}

export interface PesantrenInfo {
  name: string;
  tagline: string;
  foundedYear: number;
  accreditation: string;
  address: {
    street: string;
    village: string;
    district: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    full: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    whatsappNumberOnly: string;
    email: string;
    officeHours: string;
  };
  socialMedia: {
    instagram: string;
    facebook: string;
    youtube: string;
    tiktok: string;
  };
  mapsEmbedUrl: string;
  stats: {
    santriCount: string;
    teacherCount: string;
    experienceYears: string;
    programCount: string;
    hafidzCount: string;
    campusArea: string;
  };
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface LeaderProfile {
  name: string;
  role: string;
  education: string;
  bio: string;
  quote: string;
  image: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  category: 'formal' | 'pesantren' | 'tahfidz' | 'bahasa' | 'unggulan';
  shortDesc: string;
  description: string;
  goals: string[];
  benefits: string[];
  image: string;
  iconName: string;
  featured?: boolean;
}

export interface FacilityItem {
  id: string;
  name: string;
  category: 'ibadah' | 'akademik' | 'asrama' | 'penunjang' | 'olahraga';
  description: string;
  image: string;
  features: string[];
  featured?: boolean;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: 'Keagamaan' | 'Akademik' | 'Olahraga' | 'Seni' | 'Sosial' | 'Organisasi';
  time: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: 'Pendidikan' | 'Kegiatan' | 'Prestasi' | 'Pengumuman';
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Semua' | 'Pendidikan' | 'Keagamaan' | 'Kegiatan' | 'Olahraga' | 'Event' | 'Fasilitas';
  image: string;
  caption: string;
  date: string;
}

export interface DailyScheduleItem {
  time: string;
  activity: string;
  description: string;
  icon: string;
}
