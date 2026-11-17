import { useState } from 'react';
import {
  MessageCircle,
  ArrowDown,
  CheckCircle2,
  Star,
  Clock,
  MapPin,
  Users,
  Ticket,
  Phone,
} from 'lucide-react';
import {
  DESTINATIONS,
  TOUR_PACKAGES,
  TESTIMONIALS,
  VILLAGE_INFO,
  formatRupiah,
  type DestinationCategory,
  type TourPackage,
} from './data/villageData';
import { TopNav } from './components/TopNav';
import { ResilientImage } from './components/ResilientImage';
import { GallerySection } from './components/GallerySection';
import { InteractiveMapSection } from './components/InteractiveMapSection';
import { WhatsAppBookingModal } from './components/WhatsAppBookingModal';
import { MobileBottomBar } from './components/MobileBottomBar';

const DESTINATION_CATEGORIES: DestinationCategory[] = [
  'Semua',
  'Alam',
  'Edukasi',
  'Panorama',
  'Menginap',
];

export default function App() {
  const [selectedDestCategory, setSelectedDestCategory] =
    useState<DestinationCategory>('Semua');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackageForBooking, setSelectedPackageForBooking] =
    useState<TourPackage | null>(null);
  const [bookingTopic, setBookingTopic] = useState<string | null>(null);

  const filteredDestinations =
    selectedDestCategory === 'Semua'
      ? DESTINATIONS
      : DESTINATIONS.filter((item) => item.category === selectedDestCategory);

  const openGeneralBooking = () => {
    setSelectedPackageForBooking(TOUR_PACKAGES[1]);
    setBookingTopic(null);
    setBookingModalOpen(true);
  };

  const openPackageBooking = (pkg: TourPackage) => {
    setSelectedPackageForBooking(pkg);
    setBookingTopic(null);
    setBookingModalOpen(true);
  };

  const openTopicInquiry = (topicName?: string) => {
    setSelectedPackageForBooking(TOUR_PACKAGES[1]);
    setBookingTopic(topicName || null);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f3] text-[#1c1c18] pb-20 md:pb-0">
      <TopNav onOpenBooking={openGeneralBooking} />

      <main>
        {/* 1. BERANDA / HERO SECTION */}
        <section id="beranda" className="pt-6 pb-10 md:pt-12 md:pb-16">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Hero Text Column */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <p className="text-sm font-semibold text-[#994703] mb-3">
                  Ungaran Selatan · 1.050–1.280 mdpl · Udara Sejuk Alami
                </p>
                <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] font-extrabold leading-[1.16] tracking-tight text-[#04301c] text-balance">
                  Nikmati Sejuknya Alam &amp; Keramahan Desa di Lereng Asri
                </h1>
                <p className="mt-4 text-base md:text-[17px] leading-[1.65] text-[#414943] max-w-xl">
                  Liburan tenang bersama keluarga dan sahabat. Jelajahi kebun teh hijau, air terjun jernih, seduhan kopi arabika warga, hingga menginap nyaman di bawah rindangnya hutan pinus.
                </p>

                {/* Primary Hero CTAs */}
                <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <button
                    type="button"
                    onClick={openGeneralBooking}
                    className="min-h-[52px] px-7 py-3.5 rounded-full bg-[#25d366] hover:bg-[#1fc15b] active:scale-[0.98] text-[#002109] font-extrabold text-base inline-flex items-center justify-center gap-2.5 transition-all shadow-wa cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle
                      className="w-5 h-5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>Pesan via WhatsApp</span>
                  </button>

                  <a
                    href="#paket"
                    className="min-h-[52px] px-7 py-3.5 rounded-full border-2 border-[#1e4731] text-[#1e4731] hover:bg-[#e5e2dc]/60 font-bold text-base inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                  >
                    <span>Lihat Paket &amp; Harga</span>
                    <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Hero Main Photo */}
              <div className="lg:col-span-6">
                <div className="relative h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[420px] rounded-3xl overflow-hidden shadow-forest-md border border-[#e5e2dc] bg-[#e5e2dc]">
                  <ResilientImage
                    src={VILLAGE_INFO.heroImage}
                    alt={VILLAGE_INFO.heroAlt}
                    fallbackTitle={VILLAGE_INFO.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-black/75 via-black/35 to-transparent text-white">
                    <p className="text-xs font-semibold text-[#c0edce] mb-0.5">
                      Anjungan Utama Lembah Lereng Asri
                    </p>
                    <p className="text-sm sm:text-base font-semibold leading-snug">
                      Buka setiap hari mulai pukul 05.30 WIB untuk menyambut matahari terbit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Quick Practical Facts Strip */}
            <div className="mt-8 md:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#ffffff] rounded-3xl border border-[#e5e2dc] shadow-forest-sm p-5 md:p-6">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#414943] flex items-center gap-1.5">
                  <Ticket className="w-4 h-4 text-[#1e4731]" aria-hidden="true" />
                  <span>Tiket Masuk Mulai</span>
                </p>
                <p className="text-xl md:text-2xl font-extrabold text-[#04301c] tabular-nums">
                  Rp 12.000
                </p>
                <p className="text-xs text-[#414943]">Ramah kantong keluarga</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#414943] flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-[#994703]" aria-hidden="true" />
                  <span>Rating Pengunjung</span>
                </p>
                <p className="text-xl md:text-2xl font-extrabold text-[#04301c] tabular-nums">
                  4,9 / 5,0
                </p>
                <p className="text-xs text-[#414943] tabular-nums">
                  Dari 320+ ulasan tamu
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#414943] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#1e4731]" aria-hidden="true" />
                  <span>Jarak dari Semarang</span>
                </p>
                <p className="text-xl md:text-2xl font-extrabold text-[#04301c] tabular-nums">
                  ± 45 Menit
                </p>
                <p className="text-xs text-[#414943]">Jalan aspal mulus</p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold text-[#414943] flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#1e4731]" aria-hidden="true" />
                  <span>Cocok Untuk</span>
                </p>
                <p className="text-xl md:text-2xl font-extrabold text-[#04301c]">
                  Semua Usia
                </p>
                <p className="text-xs text-[#414943]">Jalur landai &amp; aman</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. DAFTAR DESTINASI */}
        <section
          id="destinasi"
          className="py-12 md:py-16 border-t border-[#e5e2dc]"
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div className="max-w-xl">
                <p className="text-sm font-semibold text-[#994703] mb-2">
                  Daftar Destinasi Pilihan
                </p>
                <h2 className="text-[26px] md:text-[32px] font-bold leading-tight tracking-tight text-[#04301c] text-balance">
                  Lima Sudut Alam &amp; Kampung yang Wajib Dikunjungi
                </h2>
              </div>

              {/* Filter Chips */}
              <div
                role="tablist"
                aria-label="Filter kategori destinasi"
                className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1"
              >
                {DESTINATION_CATEGORIES.map((category) => {
                  const isActive = selectedDestCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedDestCategory(category)}
                      className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#1e4731] text-white'
                          : 'bg-white border border-[#ddd6c9] text-[#414943] hover:text-[#04301c] hover:border-[#1e4731]'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((dest) => (
                <article
                  key={dest.id}
                  className="bg-[#ffffff] rounded-2xl border border-[#e5e2dc] shadow-forest-sm overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e2dc]">
                      <ResilientImage
                        src={dest.image}
                        alt={dest.alt}
                        fallbackTitle={dest.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-5 md:p-6">
                      {/* Clean Unboxed Metadata */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-[#414943] mb-2">
                        <span className="text-[#994703]">{dest.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{dest.elevation}</span>
                        <span aria-hidden="true">·</span>
                        <span>{dest.duration}</span>
                      </div>

                      <h3 className="text-xl font-bold text-[#04301c]">
                        {dest.name}
                      </h3>

                      <p className="mt-2.5 text-[15px] leading-relaxed text-[#414943]">
                        {dest.shortDesc}
                      </p>

                      <ul className="mt-4 space-y-2 border-t border-[#ebe8e2] pt-4">
                        {dest.highlights.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm text-[#1c1c18]"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-[#2d734c] mt-0.5 shrink-0"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-xs text-[#414943] block">
                        Tiket Masuk
                      </span>
                      <span className="text-lg font-extrabold text-[#04301c] tabular-nums">
                        {formatRupiah(dest.ticketPrice)}
                      </span>
                    </div>

                    <a
                      href="#lokasi"
                      className="min-h-[44px] px-4 py-2 rounded-full bg-[#f6f3ed] hover:bg-[#e5e2dc] text-[#1e4731] text-sm font-bold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
                    >
                      <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Lihat di Peta</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. PAKET WISATA & HARGA */}
        <section
          id="paket"
          className="py-12 md:py-16 border-t border-[#e5e2dc] bg-[#f6f3ed]"
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="max-w-2xl mb-8 md:mb-10">
              <p className="text-sm font-semibold text-[#994703] mb-2">
                Paket Wisata &amp; Harga Transparan
              </p>
              <h2 className="text-[26px] md:text-[32px] font-bold leading-tight tracking-tight text-[#04301c] text-balance">
                Pilih Paket Hemat Tanpa Biaya Tersembunyi
              </h2>
              <p className="mt-3 text-base md:text-[17px] leading-relaxed text-[#414943]">
                Semua harga sudah termasuk tiket masuk destinasi sesuai pilihan paket, pemandu ramah dari warga lokal, dan kudapan tradisional. Klik tombol WhatsApp untuk hitung total biaya otomatis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TOUR_PACKAGES.map((pkg) => (
                <article
                  key={pkg.id}
                  className={`bg-[#ffffff] rounded-3xl border shadow-forest-sm overflow-hidden flex flex-col justify-between ${
                    pkg.featuredLabel
                      ? 'border-[#1e4731]/40'
                      : 'border-[#e5e2dc]'
                  }`}
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#e5e2dc]">
                      <ResilientImage
                        src={pkg.image}
                        alt={pkg.alt}
                        fallbackTitle={pkg.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-5 md:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold text-[#414943]">
                          {pkg.subtitle}
                        </span>
                        {pkg.featuredLabel && (
                          <span className="text-xs font-bold text-[#994703]">
                            ★ {pkg.featuredLabel}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-[#04301c]">
                        {pkg.title}
                      </h3>

                      <div className="mt-3 flex items-baseline gap-1.5">
                        <span className="text-3xl font-extrabold text-[#04301c] tabular-nums tracking-tight">
                          {formatRupiah(pkg.pricePerPerson)}
                        </span>
                        <span className="text-sm font-medium text-[#414943]">
                          {pkg.unitLabel} · Min. {pkg.minPeople} orang
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-[#414943] tabular-nums">
                        Waktu kegiatan: {pkg.duration}
                      </p>

                      <ul className="mt-5 pt-5 border-t border-[#ebe8e2] space-y-2.5">
                        {pkg.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-[15px] text-[#1c1c18]"
                          >
                            <CheckCircle2
                              className="w-5 h-5 text-[#2d734c] mt-0.5 shrink-0"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-5 md:px-7 pb-6 pt-2 space-y-3">
                    <p className="text-xs font-medium text-[#414943]">
                      Cocok untuk: {pkg.suitableFor}
                    </p>
                    <button
                      type="button"
                      onClick={() => openPackageBooking(pkg)}
                      className="w-full min-h-[52px] px-6 py-3.5 rounded-full bg-[#25d366] hover:bg-[#1fc15b] active:scale-[0.99] text-[#002109] font-extrabold text-base inline-flex items-center justify-center gap-2.5 transition-all shadow-wa cursor-pointer"
                    >
                      <MessageCircle
                        className="w-5 h-5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>Pesan Paket Ini via WhatsApp</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. TESTIMONI PENGUNJUNG (Claim-to-Proof Adjacency right after Packages) */}
        <section
          id="testimoni"
          className="py-12 md:py-16 border-t border-[#e5e2dc] bg-[#1e4731] text-white"
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-9">
              <div className="max-w-xl">
                <p className="text-sm font-semibold text-[#c0edce] mb-2">
                  Cerita Pengunjung yang Sudah Berkunjung
                </p>
                <h2 className="text-[26px] md:text-[32px] font-bold leading-tight tracking-tight text-white text-balance">
                  Dipercaya Ratusan Keluarga &amp; Rombongan Wisatawan
                </h2>
              </div>

              <div className="bg-[#04301c]/70 border border-[#89b598]/30 rounded-2xl px-5 py-4 shrink-0">
                <div className="flex items-center gap-2">
                  <Star
                    className="w-5 h-5 text-[#fc934f] fill-[#fc934f]"
                    aria-hidden="true"
                  />
                  <span className="text-2xl font-extrabold tabular-nums">
                    4,9 / 5,0
                  </span>
                </div>
                <p className="text-xs text-[#c0edce] mt-1 tabular-nums">
                  Rata-rata kepuasan dari 320+ tamu sepanjang 2026
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((item) => (
                <blockquote
                  key={item.id}
                  className="bg-[#fcf9f3] text-[#1c1c18] rounded-3xl p-6 flex flex-col justify-between shadow-forest-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div
                        className="flex items-center gap-1"
                        aria-label={`Penilaian ${item.rating} dari 5 bintang`}
                      >
                        {[1, 2, 3, 4, 5].map((starIndex) => (
                          <Star
                            key={starIndex}
                            className="w-4 h-4 text-[#d97736] fill-[#d97736]"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#994703] tabular-nums">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>

                    <p className="text-[15px] leading-[1.65] text-[#1c1c18]">
                      “{item.quote}”
                    </p>
                  </div>

                  <footer className="mt-5 pt-4 border-t border-[#e5e2dc]">
                    <p className="text-base font-bold text-[#04301c]">
                      {item.visitorName}
                    </p>
                    <p className="text-xs font-medium text-[#414943] mt-0.5">
                      {item.originCity} · {item.packageTaken} · {item.visitMonth}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Reassurance CTA Banner */}
            <div className="mt-8 bg-[#04301c] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-[#89b598]/25">
              <div className="max-w-xl">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Masih Bingung Memilih Paket atau Waktu Kunjungan Terbaik?
                </h3>
                <p className="mt-2 text-[15px] text-[#c0edce] leading-relaxed">
                  Tanyakan langsung kepada pengurus Desa Wisata Lereng Asri melalui WhatsApp. Kami siap membantu menyesuaikan jadwal ramah anak maupun lansia.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openTopicInquiry('Konsultasi Rencana Kunjungan')}
                className="min-h-[52px] px-7 py-3.5 rounded-full bg-[#25d366] hover:bg-[#1fc15b] text-[#002109] font-extrabold text-base inline-flex items-center justify-center gap-2.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-wa"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Tanya Pengelola Sekarang</span>
              </button>
            </div>
          </div>
        </section>

        {/* 5. GALERI FOTO */}
        <GallerySection />

        {/* 6. PETA LOKASI & RUTE */}
        <InteractiveMapSection onAskRouteViaWa={openTopicInquiry} />
      </main>

      {/* QUIET FOOTER */}
      <footer className="bg-[#04301c] text-[#f3f0ea] py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-md space-y-2.5">
            <p className="text-xl font-extrabold tracking-tight text-white">
              Desa Wisata Lereng Asri
            </p>
            <p className="text-sm text-[#c0edce] leading-relaxed">
              {VILLAGE_INFO.address}
            </p>
            <p className="text-sm text-[#c0edce] tabular-nums">
              {VILLAGE_INFO.openHours}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-sm font-bold text-white mb-2.5">
                Menu Halaman
              </p>
              <ul className="space-y-2 text-sm text-[#c0edce]">
                <li>
                  <a href="#beranda" className="hover:text-white hover:underline">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#destinasi" className="hover:text-white hover:underline">
                    Daftar Destinasi
                  </a>
                </li>
                <li>
                  <a href="#paket" className="hover:text-white hover:underline">
                    Paket &amp; Harga
                  </a>
                </li>
                <li>
                  <a href="#galeri" className="hover:text-white hover:underline">
                    Galeri Foto
                  </a>
                </li>
                <li>
                  <a href="#lokasi" className="hover:text-white hover:underline">
                    Peta Lokasi
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold text-white mb-2.5">
                Kontak Resmi Wisata
              </p>
              <button
                type="button"
                onClick={openGeneralBooking}
                className="min-h-[48px] px-5 py-2.5 rounded-full bg-[#25d366] hover:bg-[#1fc15b] text-[#002109] font-extrabold text-sm inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp: 0812-2845-7910</span>
              </button>
              <p className="mt-3 text-xs text-[#89b598]">
                Dikelola langsung oleh Pokdarwis Desa Lereng Asri.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Thumb Bar */}
      <MobileBottomBar onOpenBooking={openGeneralBooking} />

      {/* Interactive WhatsApp Reservation Modal */}
      <WhatsAppBookingModal
        isOpen={bookingModalOpen}
        initialPackage={selectedPackageForBooking}
        initialTopic={bookingTopic}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
