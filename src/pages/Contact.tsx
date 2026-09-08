import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { pesantrenInfo } from '../data/pesantrenInfo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Youtube, 
  ExternalLink,
  Compass
} from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO */}
      <PageHero
        badge="Informasi & Komunikasi"
        title="Kontak & Lokasi Pesantren"
        description="Silaturahmi dan konsultasi pendidikan. Kami dengan senang hati melayani pertanyaan dan kunjungan dari para orang tua dan masyarakat."
        breadcrumbCurrent="Kontak"
      />

      {/* 2. MAIN CONTACT DETAILS & CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left side: Contact Cards & WhatsApp CTA */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#EDF5F0] text-[#315C4A] border border-[#d6e8dc] mb-3">
                  Pusat Layanan Informasi
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2933]">
                  Hubungi Sekretariat Resmi
                </h2>
                <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                  Layanan informasi seputar program pendidikan, kurikulum, kehidupan asrama santri, serta agenda kunjungan silaturahmi.
                </p>
              </div>

              {/* Big WhatsApp CTA Card */}
              <div className="bg-[#EDF5F0] border border-[#d6e8dc] rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-sm">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1F2933]">Layanan Cepat via WhatsApp</h3>
                    <p className="text-xs text-[#6B7280]">Respon langsung dari Customer Service Pesantren</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#315C4A] font-medium leading-relaxed">
                  Dapatkan brosur digital, rincian kurikulum, dan informasi kunjungan kampus langsung ke kontak WhatsApp Anda.
                </p>

                <div className="pt-2">
                  <WhatsAppButton
                    size="lg"
                    label="Chat via WhatsApp Resmi"
                    className="w-full"
                    message="Assalamu'alaikum Warahmatullahi Wabarakatuh, saya ingin menanyakan informasi seputar Pesantren Ar-Rozzaq."
                  />
                </div>
              </div>

              {/* Detail Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Alamat */}
                <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EDF5F0] text-[#315C4A] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F2933]">Alamat Kampus</h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {pesantrenInfo.address.full}
                  </p>
                </div>

                {/* Jam Layanan */}
                <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EDF5F0] text-[#315C4A] flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F2933]">Jam Kerja Kantor</h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {pesantrenInfo.contact.officeHours}
                  </p>
                </div>

                {/* Telepon */}
                <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EDF5F0] text-[#315C4A] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F2933]">Telepon Kantor</h4>
                  <a
                    href={`tel:${pesantrenInfo.contact.phone.replace(/\s+/g, '')}`}
                    className="text-xs font-semibold text-[#1F2933] hover:text-[#315C4A] transition-colors block"
                  >
                    {pesantrenInfo.contact.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="p-5 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EDF5F0] text-[#315C4A] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F2933]">Surel Resmi</h4>
                  <a
                    href={`mailto:${pesantrenInfo.contact.email}`}
                    className="text-xs font-semibold text-[#1F2933] hover:text-[#315C4A] transition-colors block truncate"
                  >
                    {pesantrenInfo.contact.email}
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F2933] mb-3">
                  Kanal Media Sosial Resmi:
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={pesantrenInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9] text-xs font-semibold text-[#1F2933] hover:text-[#315C4A] hover:border-[#315C4A] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#E4405F]" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={pesantrenInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9] text-xs font-semibold text-[#1F2933] hover:text-[#315C4A] hover:border-[#315C4A] transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-[#1877F2]" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={pesantrenInfo.socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9] text-xs font-semibold text-[#1F2933] hover:text-[#315C4A] hover:border-[#315C4A] transition-colors"
                  >
                    <Youtube className="w-4 h-4 text-[#FF0000]" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right side: Google Maps Embed & Directions */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#1F2933]">Lokasi Kampus di Google Maps</h3>
                  <p className="text-xs text-[#6B7280]">Cisarua, Bogor, Jawa Barat</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#315C4A] hover:underline flex items-center gap-1"
                >
                  <span>Buka di Aplikasi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Container */}
              <div className="rounded-2xl overflow-hidden border border-[#E8EAE9] shadow-sm bg-[#F8FAF9] h-[420px] relative">
                <iframe
                  title="Lokasi Pesantren Ar-Rozzaq"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8839077977467!2d106.94237197499423!3d-6.661303293333423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b6574f1b7ea7%3A0x1c8b368739a48972!2sCisarua%2C%20Bogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Travel guidelines info */}
              <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#E8EAE9] flex items-start gap-3 text-xs text-[#6B7280]">
                <Compass className="w-4 h-4 text-[#315C4A] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Akses Transportasi:</strong> Berjarak sekitar 20 menit dari Gerbang Tol Ciawi / Jagorawi, dekat dengan jalur utama Puncak. Akses jalan aspal mulus dan aman dilalui kendaraan roda dua, roda empat, maupun bus rombongan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
