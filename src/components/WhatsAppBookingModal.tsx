import { useState, useEffect } from 'react';
import {
  X,
  MessageCircle,
  Minus,
  Plus,
  Calendar,
  Users,
  Check,
  Copy,
} from 'lucide-react';
import {
  TOUR_PACKAGES,
  buildWhatsAppUrl,
  formatRupiah,
  type TourPackage,
} from '../data/villageData';

interface WhatsAppBookingModalProps {
  isOpen: boolean;
  initialPackage: TourPackage | null;
  initialTopic?: string | null;
  onClose: () => void;
}

export function WhatsAppBookingModal({
  isOpen,
  initialPackage,
  initialTopic,
  onClose,
}: WhatsAppBookingModalProps) {
  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    initialPackage?.id || TOUR_PACKAGES[1].id
  );
  const [guestCount, setGuestCount] = useState<number>(
    initialPackage?.minPeople || 2
  );
  const [visitDate, setVisitDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 3);
    return tomorrow.toISOString().split('T')[0];
  });
  const [visitorName, setVisitorName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setSelectedPackageId(initialPackage.id);
      setGuestCount((prev) => Math.max(prev, initialPackage.minPeople));
    }
  }, [initialPackage]);

  useEffect(() => {
    if (initialTopic) {
      setNotes(`Ingin bertanya mengenai kunjungan ke ${initialTopic}.`);
    } else {
      setNotes('');
    }
  }, [initialTopic]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activePackage =
    TOUR_PACKAGES.find((p) => p.id === selectedPackageId) || TOUR_PACKAGES[0];
  const effectiveGuests = Math.max(guestCount, activePackage.minPeople);
  const estimatedTotal = effectiveGuests * activePackage.pricePerPerson;

  const formattedDate = visitDate
    ? new Date(`${visitDate}T00:00:00`).toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Belum ditentukan';

  const whatsappMessage = [
    `Halo Pengelola Desa Wisata Lereng Asri,`,
    `Saya ${visitorName.trim() || 'Calon Wisatawan'} ingin memesan / menanyakan kunjungan wisata:`,
    ``,
    `• Paket: ${activePackage.title} (${formatRupiah(activePackage.pricePerPerson)}${activePackage.unitLabel})`,
    `• Rencana Tanggal: ${formattedDate}`,
    `• Jumlah Peserta: ${effectiveGuests} orang`,
    `• Estimasi Total: ${formatRupiah(estimatedTotal)}`,
    notes.trim() ? `• Catatan: ${notes.trim()}` : '',
    ``,
    `Mohon informasi ketersediaan dan langkah konfirmasinya ya. Terima kasih!`,
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappHref = buildWhatsAppUrl(whatsappMessage);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/55 backdrop-blur-xs p-0 md:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wa-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full md:max-w-lg bg-[#fcf9f3] rounded-t-3xl md:rounded-3xl border border-[#e5e2dc] shadow-forest-md max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Handle */}
        <div className="md:hidden pt-3 pb-1 flex justify-center">
          <div className="w-10 h-1.5 rounded-full bg-[#c1c8c1]" />
        </div>

        {/* Header */}
        <div className="px-5 md:px-6 py-4 border-b border-[#e5e2dc] flex items-center justify-between gap-4 bg-[#ffffff]">
          <div>
            <h2
              id="wa-modal-title"
              className="text-xl font-bold text-[#04301c]"
            >
              Pesan Wisata via WhatsApp
            </h2>
            <p className="text-sm text-[#414943]">
              Langsung terhubung dengan pengelola resmi desa · Tanpa biaya admin
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup formulir pemesanan"
            className="min-h-[44px] min-w-[44px] rounded-full bg-[#f6f3ed] hover:bg-[#e5e2dc] text-[#1c1c18] flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-5 md:p-6 space-y-5 overflow-y-auto">
          {/* Package Selection */}
          <div>
            <label
              htmlFor="select-package"
              className="block text-sm font-bold text-[#04301c] mb-2"
            >
              Pilih Paket Wisata
            </label>
            <select
              id="select-package"
              value={activePackage.id}
              onChange={(e) => {
                const nextPkg = TOUR_PACKAGES.find(
                  (p) => p.id === e.target.value
                );
                setSelectedPackageId(e.target.value);
                if (nextPkg) {
                  setGuestCount((prev) => Math.max(prev, nextPkg.minPeople));
                }
              }}
              className="w-full min-h-[52px] px-4 rounded-xl bg-white border-[1.5px] border-[#ddd6c9] focus:border-[#1e4731] focus:outline-none text-base font-semibold text-[#1c1c18]"
            >
              {TOUR_PACKAGES.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.title} — {formatRupiah(pkg.pricePerPerson)}/orang
                </option>
              ))}
            </select>
            <p className="mt-1.5 text-xs text-[#414943] tabular-nums">
              Minimal pemesanan {activePackage.minPeople} orang · Durasi{' '}
              {activePackage.duration}
            </p>
          </div>

          {/* Date & Guest Count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="visit-date"
                className="flex items-center gap-1.5 text-sm font-bold text-[#04301c] mb-2"
              >
                <Calendar className="w-4 h-4 text-[#1e4731]" aria-hidden="true" />
                <span>Rencana Tanggal</span>
              </label>
              <input
                id="visit-date"
                type="date"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className="w-full min-h-[50px] px-4 rounded-xl bg-white border-[1.5px] border-[#ddd6c9] focus:border-[#1e4731] focus:outline-none text-base font-medium text-[#1c1c18]"
              />
            </div>

            <div>
              <span className="flex items-center gap-1.5 text-sm font-bold text-[#04301c] mb-2">
                <Users className="w-4 h-4 text-[#1e4731]" aria-hidden="true" />
                <span>Jumlah Pengunjung</span>
              </span>
              <div className="flex items-center justify-between bg-white border-[1.5px] border-[#ddd6c9] rounded-xl min-h-[50px] px-2">
                <button
                  type="button"
                  onClick={() =>
                    setGuestCount((c) => Math.max(activePackage.minPeople, c - 1))
                  }
                  disabled={effectiveGuests <= activePackage.minPeople}
                  aria-label="Kurangi jumlah pengunjung"
                  className="min-h-[44px] min-w-[44px] rounded-lg hover:bg-[#f6f3ed] disabled:opacity-40 flex items-center justify-center text-[#04301c] cursor-pointer"
                >
                  <Minus className="w-5 h-5" aria-hidden="true" />
                </button>
                <span className="text-base font-bold text-[#04301c] tabular-nums">
                  {effectiveGuests} orang
                </span>
                <button
                  type="button"
                  onClick={() => setGuestCount((c) => Math.min(100, c + 1))}
                  aria-label="Tambah jumlah pengunjung"
                  className="min-h-[44px] min-w-[44px] rounded-lg hover:bg-[#f6f3ed] flex items-center justify-center text-[#04301c] cursor-pointer"
                >
                  <Plus className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Visitor Name & Optional Notes */}
          <div>
            <label
              htmlFor="visitor-name"
              className="block text-sm font-bold text-[#04301c] mb-2"
            >
              Nama Pemesan (Opsional)
            </label>
            <input
              id="visitor-name"
              type="text"
              placeholder="Contoh: Ibu Budi / Rombongan Keluarga Semarang"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              className="w-full min-h-[50px] px-4 rounded-xl bg-white border-[1.5px] border-[#ddd6c9] focus:border-[#1e4731] focus:outline-none text-base text-[#1c1c18] placeholder:text-[#717972]"
            />
          </div>

          <div>
            <label
              htmlFor="visitor-notes"
              className="block text-sm font-bold text-[#04301c] mb-2"
            >
              Catatan Tambahan (Opsional)
            </label>
            <textarea
              id="visitor-notes"
              rows={2}
              placeholder="Contoh: Membawa anak balita, minta menu tidak pedas, atau tanya rute bus"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3.5 rounded-xl bg-white border-[1.5px] border-[#ddd6c9] focus:border-[#1e4731] focus:outline-none text-base text-[#1c1c18] placeholder:text-[#717972]"
            />
          </div>

          {/* Transparent Price Summary */}
          <div className="bg-[#f0eee8] rounded-2xl p-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-[#414943]">
                Estimasi Total Biaya
              </p>
              <p className="text-xs text-[#414943] tabular-nums mt-0.5">
                {effectiveGuests} orang × {formatRupiah(activePackage.pricePerPerson)}
              </p>
            </div>
            <p className="text-2xl font-extrabold text-[#04301c] tabular-nums tracking-tight">
              {formatRupiah(estimatedTotal)}
            </p>
          </div>
        </div>

        {/* Sticky Modal Footer CTA */}
        <div className="px-5 md:px-6 py-4 border-t border-[#e5e2dc] bg-[#ffffff] space-y-2.5">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[52px] px-6 py-3.5 rounded-full bg-[#25d366] hover:bg-[#1fc15b] active:scale-[0.99] text-[#002109] font-extrabold text-base inline-flex items-center justify-center gap-2.5 transition-all shadow-wa"
          >
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Kirim Pesanan via WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={handleCopyMessage}
            className="w-full min-h-[44px] px-4 py-2 rounded-full text-sm font-semibold text-[#414943] hover:text-[#04301c] hover:bg-[#f6f3ed] inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#1e4731]" aria-hidden="true" />
                <span className="text-[#1e4731]">
                  Teks pesan tersalin! Siap ditempel di WhatsApp
                </span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" aria-hidden="true" />
                <span>Salin format pesan pemesanan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
