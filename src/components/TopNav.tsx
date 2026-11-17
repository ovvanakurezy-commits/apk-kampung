import { MessageCircle } from 'lucide-react';

interface TopNavProps {
  onOpenBooking: () => void;
}

export function TopNav({ onOpenBooking }: TopNavProps) {
  return (
    <header className="bg-[#fcf9f3]/95 backdrop-blur-md border-b border-[#e5e2dc] md:sticky md:top-0 z-40">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#beranda"
          className="text-xl font-extrabold tracking-tight text-[#04301c] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4731] rounded"
        >
          Lereng Asri
        </a>

        {/* Zone 2: Clean Typography Nav Links (Desktop) */}
        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-7 text-[15px] font-semibold text-[#414943]"
        >
          <a
            href="#destinasi"
            className="hover:text-[#04301c] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 py-2"
          >
            Destinasi
          </a>
          <a
            href="#paket"
            className="hover:text-[#04301c] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 py-2"
          >
            Paket Wisata
          </a>
          <a
            href="#galeri"
            className="hover:text-[#04301c] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 py-2"
          >
            Galeri
          </a>
          <a
            href="#testimoni"
            className="hover:text-[#04301c] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 py-2"
          >
            Testimoni
          </a>
          <a
            href="#lokasi"
            className="hover:text-[#04301c] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 py-2"
          >
            Peta Lokasi
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#1e4731] hover:bg-[#04301c] active:scale-[0.98] text-white text-sm font-semibold inline-flex items-center gap-2 transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#04301c]"
        >
          <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Pesan Wisata</span>
        </button>
      </div>
    </header>
  );
}
