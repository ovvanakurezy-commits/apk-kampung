import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import {
  GALLERY_ITEMS,
  type GalleryCategory,
  type GalleryPhoto,
} from '../data/villageData';
import { ResilientImage } from './ResilientImage';

const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Semua',
  'Alam',
  'Budaya & Kopi',
  'Penginapan',
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === 'Semua'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const activePhoto: GalleryPhoto | null =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] ?? null : null;

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredPhotos.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
            : null
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <section id="galeri" className="py-12 md:py-16 border-t border-[#e5e2dc]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#994703] mb-2">
              Galeri Suasana Desa
            </p>
            <h2 className="text-[26px] md:text-[32px] font-bold leading-tight tracking-tight text-[#04301c] text-balance">
              Potret Hangat &amp; Hijau dari Penjuru Lereng Asri
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter foto galeri"
            className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isSelected
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

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredPhotos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group text-left bg-white rounded-2xl border border-[#e5e2dc] shadow-forest-sm overflow-hidden flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e4731]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e2dc]">
                <ResilientImage
                  src={photo.image}
                  alt={photo.alt}
                  fallbackTitle={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />
                <span className="absolute bottom-3 right-3 min-h-[36px] min-w-[36px] rounded-full bg-black/55 text-white flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
              <div className="p-4 md:p-5">
                <p className="text-xs font-semibold text-[#994703] mb-1">
                  {photo.spot}
                </p>
                <h3 className="text-base font-bold text-[#04301c]">
                  {photo.title}
                </h3>
                <p className="mt-1 text-sm text-[#414943] leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Viewer */}
      {activePhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#fcf9f3] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10] bg-[#1c1c18]">
              <ResilientImage
                src={activePhoto.image}
                alt={activePhoto.alt}
                fallbackTitle={activePhoto.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Tutup foto"
                className="absolute top-3 right-3 min-h-[44px] min-w-[44px] rounded-full bg-black/65 hover:bg-black/85 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              {filteredPhotos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + filteredPhotos.length) %
                          filteredPhotos.length
                      )
                    }
                    aria-label="Foto sebelumnya"
                    className="absolute left-3 top-1/2 -translate-y-1/2 min-h-[48px] min-w-[48px] rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex + 1) % filteredPhotos.length
                      )
                    }
                    aria-label="Foto berikutnya"
                    className="absolute right-3 top-1/2 -translate-y-1/2 min-h-[48px] min-w-[48px] rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>
            <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#994703] mb-1">
                  {activePhoto.spot} · {lightboxIndex + 1} / {filteredPhotos.length}
                </p>
                <h3 className="text-lg font-bold text-[#04301c]">
                  {activePhoto.title}
                </h3>
                <p className="mt-1 text-sm text-[#414943]">
                  {activePhoto.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="min-h-[44px] px-5 py-2 rounded-full bg-[#1e4731] text-white text-sm font-semibold whitespace-nowrap shrink-0 cursor-pointer"
              >
                Tutup Galeri
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
