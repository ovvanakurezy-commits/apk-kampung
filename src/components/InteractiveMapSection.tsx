import { useState } from 'react';
import {
  MapPin,
  Navigation,
  Clock,
  Footprints,
  Car,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import {
  DESTINATIONS,
  ROUTE_GUIDES,
  VILLAGE_INFO,
  formatRupiah,
  type DestinationItem,
} from '../data/villageData';
import { ResilientImage } from './ResilientImage';

interface InteractiveMapSectionProps {
  onAskRouteViaWa: (destinationName?: string) => void;
}

export function InteractiveMapSection({
  onAskRouteViaWa,
}: InteractiveMapSectionProps) {
  const [selectedDest, setSelectedDest] = useState<DestinationItem>(
    DESTINATIONS[0]
  );

  return (
    <section
      id="lokasi"
      className="py-12 md:py-16 border-t border-[#e5e2dc] bg-[#f6f3ed]"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-8 md:mb-10">
          <p className="text-sm font-semibold text-[#994703] mb-2">
            Peta Lokasi &amp; Akses Jalan
          </p>
          <h2 className="text-[26px] md:text-[32px] font-bold leading-tight tracking-tight text-[#04301c] text-balance">
            Mudah Dijangkau, Parkir Luas untuk Mobil &amp; Bus Wisata
          </h2>
          <p className="mt-3 text-base md:text-[17px] leading-relaxed text-[#414943]">
            Ketuk titik lokasi pada peta kawasan desa di bawah untuk melihat jarak jalan kaki dari gerbang utama, waktu tempuh, dan kondisi jalurnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Interactive Village Terrain Map */}
          <div className="lg:col-span-7 bg-[#ffffff] rounded-3xl border border-[#e5e2dc] shadow-forest-sm p-4 md:p-6 flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#04301c]">
                  Peta Kawasan Desa Wisata Lereng Asri
                </h3>
                <p className="text-sm text-[#414943] tabular-nums">
                  {VILLAGE_INFO.coordinatesLabel} · Ketinggian 1.050–1.280 mdpl
                </p>
              </div>
              <span className="text-xs font-semibold text-[#1e4731]">
                Ketuk pin untuk detail
              </span>
            </div>

            {/* Illustrated Topographic SVG Map */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#eaf2ea] border border-[#d6e2d6]">
              <svg
                viewBox="0 0 800 550"
                className="w-full h-full block select-none"
                role="img"
                aria-label="Peta interaktif lokasi destinasi di Desa Wisata Lereng Asri"
              >
                <defs>
                  <linearGradient id="meadowGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#dfece0" />
                    <stop offset="55%" stopColor="#edf3e8" />
                    <stop offset="100%" stopColor="#e5e9da" />
                  </linearGradient>
                  <linearGradient id="ridgeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c9dec9" />
                    <stop offset="100%" stopColor="#dfece0" />
                  </linearGradient>
                </defs>

                {/* Base Terrain */}
                <rect width="800" height="550" fill="url(#meadowGrad)" />

                {/* Topographic Contour Hills */}
                <path
                  d="M 420 40 Q 590 10 780 90 L 800 280 Q 620 260 470 190 Z"
                  fill="url(#ridgeGrad)"
                  opacity="0.85"
                />
                <path
                  d="M 0 110 Q 170 80 310 180 T 520 340 L 0 420 Z"
                  fill="#d5e6d6"
                  opacity="0.65"
                />
                <ellipse
                  cx="615"
                  cy="140"
                  rx="135"
                  ry="75"
                  fill="none"
                  stroke="#b8d0ba"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <ellipse
                  cx="190"
                  cy="190"
                  rx="110"
                  ry="65"
                  fill="none"
                  stroke="#b8d0ba"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Mountain River Stream from Waterfall */}
                <path
                  d="M 165 180 Q 150 280 215 360 T 275 530"
                  fill="none"
                  stroke="#7ec4cf"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M 165 180 Q 150 280 215 360 T 275 530"
                  fill="none"
                  stroke="#bce7ee"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Main Paved Access Road from Bottom Gate */}
                <path
                  d="M 415 545 Q 430 470 500 415 T 515 350"
                  fill="none"
                  stroke="#d9d1c3"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <path
                  d="M 415 545 Q 430 470 500 415 T 515 350"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                />

                {/* Walking Trails Connecting Destinations */}
                <path
                  d="M 510 355 Q 420 295 368 253 T 176 187"
                  fill="none"
                  stroke="#b48a5a"
                  strokeWidth="4"
                  strokeDasharray="8 6"
                  strokeLinecap="round"
                />
                <path
                  d="M 368 253 Q 490 210 608 132"
                  fill="none"
                  stroke="#b48a5a"
                  strokeWidth="4"
                  strokeDasharray="8 6"
                  strokeLinecap="round"
                />
                <path
                  d="M 490 415 Q 375 425 280 407"
                  fill="none"
                  stroke="#b48a5a"
                  strokeWidth="4"
                  strokeDasharray="8 6"
                  strokeLinecap="round"
                />

                {/* Subtle Terrain Zone Labels */}
                <text
                  x="76"
                  y="70"
                  fill="#4d6b56"
                  fontSize="13"
                  fontWeight="700"
                  letterSpacing="0.04em"
                >
                  ZONA HUTAN PAKIS
                </text>
                <text
                  x="560"
                  y="62"
                  fill="#4d6b56"
                  fontSize="13"
                  fontWeight="700"
                  letterSpacing="0.04em"
                >
                  PUNCAK TIMUR (1.280 MDPL)
                </text>
                <text
                  x="58"
                  y="495"
                  fill="#4d6b56"
                  fontSize="13"
                  fontWeight="700"
                  letterSpacing="0.04em"
                >
                  ZONA HUTAN PINUS
                </text>

                {/* Main Gate & Parking Area Marker */}
                <g transform="translate(415, 488)">
                  <rect
                    x="-78"
                    y="-18"
                    width="156"
                    height="34"
                    rx="10"
                    fill="#1e4731"
                  />
                  <text
                    x="0"
                    y="4"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="12"
                    fontWeight="700"
                  >
                    Gerbang &amp; Parkir Utama
                  </text>
                </g>
              </svg>

              {/* Interactive HTML Pin Buttons Layered Over SVG */}
              {DESTINATIONS.map((dest, idx) => {
                const isSelected = selectedDest.id === dest.id;
                return (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setSelectedDest(dest)}
                    style={{
                      left: `${dest.mapPosition.x}%`,
                      top: `${dest.mapPosition.y}%`,
                    }}
                    aria-pressed={isSelected}
                    aria-label={`Pilih lokasi ${dest.name}`}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 min-h-[44px] px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#04301c] ${
                      isSelected
                        ? 'bg-[#994703] text-white scale-105 z-20 ring-4 ring-white'
                        : 'bg-white text-[#04301c] border border-[#c1c8c1] hover:bg-[#c0edce] z-10'
                    }`}
                  >
                    <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span className="whitespace-nowrap">
                      {idx + 1}. {dest.name.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Select Strip for Mobile Accessibility */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {DESTINATIONS.map((dest, idx) => {
                const isSelected = selectedDest.id === dest.id;
                return (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setSelectedDest(dest)}
                    className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#1e4731] text-white'
                        : 'bg-[#f6f3ed] text-[#414943] hover:bg-[#ebe8e2]'
                    }`}
                  >
                    {idx + 1}. {dest.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Pin Details + Access Route Guide */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Selected Location Card */}
            <div className="bg-[#ffffff] rounded-3xl border border-[#e5e2dc] shadow-forest-sm overflow-hidden flex-1 flex flex-col">
              <div className="aspect-[16/9] w-full overflow-hidden bg-[#e5e2dc]">
                <ResilientImage
                  src={selectedDest.image}
                  alt={selectedDest.alt}
                  fallbackTitle={selectedDest.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#994703] mb-1.5">
                    <span>{selectedDest.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{selectedDest.elevation}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#04301c]">
                    {selectedDest.name}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#414943]">
                    {selectedDest.shortDesc}
                  </p>

                  <dl className="mt-4 pt-4 border-t border-[#ebe8e2] space-y-2.5 text-sm">
                    <div className="flex items-start gap-2.5 text-[#1c1c18]">
                      <Footprints
                        className="w-4 h-4 text-[#1e4731] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{selectedDest.walkFromGate}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[#1c1c18]">
                      <Clock
                        className="w-4 h-4 text-[#1e4731] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="tabular-nums">
                        Buka {selectedDest.openHours} · Tiket{' '}
                        {formatRupiah(selectedDest.ticketPrice)}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[#414943]">
                      <Car
                        className="w-4 h-4 text-[#1e4731] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{selectedDest.accessNote}</span>
                    </div>
                  </dl>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={VILLAGE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-4 py-3 rounded-full bg-[#1e4731] hover:bg-[#04301c] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                  >
                    <Navigation className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Buka Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-80" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => onAskRouteViaWa(selectedDest.name)}
                    className="min-h-[48px] px-4 py-3 rounded-full border-2 border-[#1e4731] text-[#1e4731] hover:bg-[#e5e2dc]/50 text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Tanya Rute WA</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* City Route Guides */}
        <div className="mt-8 bg-[#ffffff] rounded-3xl border border-[#e5e2dc] p-5 md:p-7">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#ebe8e2]">
            <div>
              <h3 className="text-lg font-bold text-[#04301c]">
                Alamat Lengkap &amp; Estimasi Waktu Tempuh
              </h3>
              <p className="text-[15px] text-[#414943] mt-1">
                {VILLAGE_INFO.address}
              </p>
            </div>
            <span className="text-sm font-semibold text-[#1e4731] tabular-nums shrink-0">
              {VILLAGE_INFO.openHours}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">
            {ROUTE_GUIDES.map((guide) => (
              <div key={guide.city} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-base font-bold text-[#04301c]">
                    {guide.city}
                  </h4>
                  <span className="text-sm font-bold text-[#994703] tabular-nums whitespace-nowrap">
                    {guide.travelTime}
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#414943] tabular-nums">
                  Jarak tempuh sekitar {guide.distance}
                </p>
                <p className="text-sm leading-relaxed text-[#414943]">
                  {guide.routeNote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
