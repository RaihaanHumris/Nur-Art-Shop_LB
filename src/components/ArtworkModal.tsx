import React, { useEffect } from 'react';
import { X, MapPin, MessageCircle, ShieldCheck, Plane } from './Icons';
import { CollectionItem, Language, STORE_INFO, UI_COPY } from '../data/lookbookData';
import { ResilientImage } from './ResilientImage';

interface ArtworkModalProps {
  item: CollectionItem | null;
  lang: Language;
  onClose: () => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({ item, lang, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  const whatsappMessage = encodeURIComponent(
    `${UI_COPY.whatsapp.itemPrefillPrefix[lang]}"${item.title[lang]}" (${item.accessionNo} - ${item.origin[lang]}).`
  );
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#2B2520]/75 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-artwork-title"
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#F5F0E6] text-[#2B2520] border border-[#DCD3C4] rounded-[4px] shadow-2xl grid grid-cols-1 lg:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={lang === 'id' ? 'Tutup detail karya' : 'Close artwork details'}
          className="absolute top-4 right-4 z-20 w-11 h-11 flex items-center justify-center bg-[#F5F0E6]/90 hover:bg-[#EAE3D5] text-[#2B2520] border border-[#DCD3C4] rounded-[4px] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: High-Res Visual Showcase */}
        <div className="lg:col-span-6 bg-[#EAE3D5] flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#DCD3C4]">
          <div className="relative w-full h-full min-h-[340px] sm:min-h-[460px] lg:min-h-[560px] overflow-hidden">
            <ResilientImage
              src={item.image}
              alt={item.title[lang]}
              loading="eager"
              className="w-full h-full object-cover"
              fallbackTitle={item.title[lang]}
              fallbackSubtitle={item.origin[lang]}
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2B2520]/80 via-[#2B2520]/30 to-transparent p-6 text-[#F5F0E6]">
              <p className="text-xs tracking-[0.15em] uppercase text-[#EAE3D5]/90">
                {item.accessionNo} · {item.categoryLabel[lang]}
              </p>
              <p className="text-xs text-[#EAE3D5]/80 mt-1">
                {item.availabilityStatus[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Museum Accession Metadata & Narrative */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            {/* Overline metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.15em] uppercase font-semibold text-[#A85232]">
              <span>{item.categoryLabel[lang]}</span>
              <span aria-hidden="true">·</span>
              <span>{item.availabilityStatus[lang]}</span>
            </div>

            {/* Artwork Title */}
            <h2
              id="modal-artwork-title"
              className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#2B2520] leading-[1.2] mt-2"
            >
              {item.title[lang]}
            </h2>

            {/* Origin & Artisan */}
            <p className="text-sm text-[#6E6359] mt-2">
              {lang === 'id' ? 'Asal Daerah:' : 'Region of Origin:'}{' '}
              <span className="text-[#2B2520] font-medium">{item.origin[lang]}</span>
            </p>

            <div className="my-6 border-t border-[#DCD3C4]" />

            {/* Full Editorial Narrative */}
            <div className="space-y-4">
              <p className="text-[15px] leading-[1.75] text-[#2B2520]">
                {item.fullNarrative[lang]}
              </p>
            </div>

            {/* Accession Specifications Definition List */}
            <dl className="mt-6 pt-6 border-t border-[#DCD3C4] grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-[#6E6359] font-semibold">
                  {lang === 'id' ? 'Komunitas Pengrajin' : 'Artisan Collective'}
                </dt>
                <dd className="mt-1 text-[#2B2520] font-medium">{item.artisanGroup[lang]}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-[#6E6359] font-semibold">
                  {lang === 'id' ? 'Material & Pewarna' : 'Material & Dyes'}
                </dt>
                <dd className="mt-1 text-[#2B2520] font-medium">{item.materials[lang]}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-[#6E6359] font-semibold">
                  {lang === 'id' ? 'Dimensi Rata-Rata' : 'Typical Dimensions'}
                </dt>
                <dd className="mt-1 text-[#2B2520] font-medium tabular-nums">{item.dimensions}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.12em] text-[#6E6359] font-semibold">
                  {lang === 'id' ? 'Durasi Pengerjaan' : 'Crafting Duration'}
                </dt>
                <dd className="mt-1 text-[#2B2520] font-medium">{item.craftingDuration[lang]}</dd>
              </div>
            </dl>

            {/* Flight Packing & Care Callout */}
            <div className="mt-6 p-4 bg-[#EAE3D5] border border-[#DCD3C4] rounded-[4px] space-y-2 text-xs text-[#2B2520]">
              <div className="flex items-start gap-2.5">
                <Plane className="w-4 h-4 text-[#1C4B52] shrink-0 mt-0.5" />
                <p>
                  <strong className="font-semibold">
                    {lang === 'id' ? 'Standar Bagasi Pesawat: ' : 'Flight-Ready Packaging: '}
                  </strong>
                  {item.flightPackingNote[lang]}
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#A85232] shrink-0 mt-0.5" />
                <p>
                  <strong className="font-semibold">
                    {lang === 'id' ? 'Panduan Perawatan: ' : 'Preservation Note: '}
                  </strong>
                  {item.careNotes[lang]}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons (Offline-Only Model: WhatsApp Inquiry or Direct Maps Route) */}
          <div className="mt-8 pt-6 border-t border-[#DCD3C4] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A85232] hover:bg-[#8C4125] text-[#F5F0E6] text-sm font-medium rounded-[4px] transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>{UI_COPY.lookbook.inquireItemLabel[lang]}</span>
            </a>
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#1C4B52] text-[#1C4B52] hover:bg-[#1C4B52] hover:text-[#F5F0E6] text-sm font-medium rounded-[4px] transition-colors whitespace-nowrap shrink-0"
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{lang === 'id' ? 'Rute ke Galeri' : 'View Store Map'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
