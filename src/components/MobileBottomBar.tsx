import { Compass, Ticket, MapPin, MessageCircle } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export function MobileBottomBar({ onOpenBooking }: MobileBottomBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fcf9f3]/95 backdrop-blur-md border-t border-[#e5e2dc] px-3 py-2 shadow-forest-md">
      <div className="flex items-center justify-between gap-2">
        <nav
          aria-label="Navigasi cepat bawah"
          className="grid grid-cols-3 gap-1 flex-1"
        >
          <a
            href="#destinasi"
            className="min-h-[46px] flex flex-col items-center justify-center text-[#414943] hover:text-[#04301c] rounded-xl transition-colors"
          >
            <Compass className="w-5 h-5" aria-hidden="true" />
            <span className="text-[11px] font-semibold mt-0.5">Destinasi</span>
          </a>
          <a
            href="#paket"
            className="min-h-[46px] flex flex-col items-center justify-center text-[#414943] hover:text-[#04301c] rounded-xl transition-colors"
          >
            <Ticket className="w-5 h-5" aria-hidden="true" />
            <span className="text-[11px] font-semibold mt-0.5">Paket</span>
          </a>
          <a
            href="#lokasi"
            className="min-h-[46px] flex flex-col items-center justify-center text-[#414943] hover:text-[#04301c] rounded-xl transition-colors"
          >
            <MapPin className="w-5 h-5" aria-hidden="true" />
            <span className="text-[11px] font-semibold mt-0.5">Peta</span>
          </a>
        </nav>

        <button
          type="button"
          onClick={onOpenBooking}
          className="min-h-[48px] px-4 py-2.5 rounded-full bg-[#25d366] hover:bg-[#1fc15b] active:scale-[0.98] text-[#002109] font-extrabold text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 shadow-wa cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Pesan WA</span>
        </button>
      </div>
    </div>
  );
}
