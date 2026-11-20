import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  Navigation,
  MessageCircle,
  Clock,
  Plane,
  Anchor,
  CreditCard,
  ShieldCheck,
  Car,
  Star,
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Menu,
  X,
  Layers,
  PenTool,
  Gem,
  ShoppingBag,
  CheckCircle2,
  Package,
  Leaf,
  Handshake,
} from './components/Icons';
import {
  COLLECTION_ITEMS,
  CollectionItem,
  CategoryId,
  Language,
  STORE_INFO,
  UI_COPY,
  VISITOR_REVIEWS,
  HOTLINK_IMAGES,
} from './data/lookbookData';
import { ResilientImage } from './components/ResilientImage';
import { ArtworkModal } from './components/ArtworkModal';

const HERO_IMAGE = HOTLINK_IMAGES.hero;
const HERO_MOBILE_IMAGE = HOTLINK_IMAGES.heroMobile;
const STORY_PRIMARY_IMAGE = HOTLINK_IMAGES.storyWeaver;

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = sessionStorage.getItem('nur_art_shop_lang');
      return saved === 'en' || saved === 'id' ? saved : 'id';
    } catch {
      return 'id';
    }
  });

  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<CollectionItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Lazy-mount Google Maps iframe when user scrolls near #panduan-kunjungan
  // so third-party maps scripts never block FCP/LCP during initial page load
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const visitSectionRef = useRef<HTMLElement | null>(null);

  // Mobile lookbook carousel state & drag-to-scroll ref
  const lookbookCarouselRef = useRef<HTMLDivElement | null>(null);
  const [activeLookbookSlide, setActiveLookbookSlide] = useState(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const scrollStartLeftRef = useRef(0);
  const dragMovedRef = useRef(false);

  useEffect(() => {
    try {
      sessionStorage.setItem('nur_art_shop_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore storage restrictions
    }
  }, [lang]);

  useEffect(() => {
    if (shouldLoadMap) return;
    const target = visitSectionRef.current;
    if (!target || typeof IntersectionObserver === 'undefined') {
      setShouldLoadMap(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '450px 0px' }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [shouldLoadMap]);

  const filteredCollections =
    activeCategory === 'all'
      ? COLLECTION_ITEMS
      : COLLECTION_ITEMS.filter((item) => item.category === activeCategory);

  const generalWhatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    UI_COPY.whatsapp.generalPrefill[lang]
  )}`;

  const categoriesList: { id: CategoryId; label: string }[] = [
    { id: 'all', label: UI_COPY.lookbook.categories.all[lang] },
    { id: 'tenun', label: UI_COPY.lookbook.categories.tenun[lang] },
    { id: 'ukiran', label: UI_COPY.lookbook.categories.ukiran[lang] },
    { id: 'mutiara', label: UI_COPY.lookbook.categories.mutiara[lang] },
    { id: 'anyaman', label: UI_COPY.lookbook.categories.anyaman[lang] },
  ];

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? VISITOR_REVIEWS.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev === VISITOR_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  // Scroll the mobile lookbook carousel left or right by 1 card
  const scrollLookbookCarousel = (direction: 'prev' | 'next' | number) => {
    const container = lookbookCarouselRef.current;
    if (!container) return;
    const cardWidth = 295; // 280px width + 16px gap
    let targetIndex = activeLookbookSlide;

    if (typeof direction === 'number') {
      targetIndex = direction;
    } else if (direction === 'prev') {
      targetIndex =
        activeLookbookSlide <= 0 ? filteredCollections.length - 1 : activeLookbookSlide - 1;
    } else {
      targetIndex =
        activeLookbookSlide >= filteredCollections.length - 1 ? 0 : activeLookbookSlide + 1;
    }

    setActiveLookbookSlide(targetIndex);
    container.scrollTo({
      left: targetIndex * cardWidth,
      behavior: 'smooth',
    });
  };

  const handleLookbookScroll = () => {
    const container = lookbookCarouselRef.current;
    if (!container) return;
    const cardWidth = 295;
    const idx = Math.round(container.scrollLeft / cardWidth);
    if (idx >= 0 && idx < filteredCollections.length && idx !== activeLookbookSlide) {
      setActiveLookbookSlide(idx);
    }
  };

  // Mouse drag-to-scroll handlers so users can also drag cards with a mouse
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = lookbookCarouselRef.current;
    if (!container) return;
    isDraggingRef.current = true;
    dragMovedRef.current = false;
    dragStartXRef.current = e.pageX - container.offsetLeft;
    scrollStartLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const container = lookbookCarouselRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - dragStartXRef.current) * 1.25;
    if (Math.abs(walk) > 6) {
      dragMovedRef.current = true;
    }
    container.scrollLeft = scrollStartLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#2B2520] flex flex-col pb-16 lg:pb-0">
      {/* =====================================================================
          HEADER: Warm Sand Navigation Bar matching Reference Image
         ===================================================================== */}
      <header className="sticky top-0 inset-x-0 z-40 bg-[#F5F0E6]/95 backdrop-blur-md border-b border-[#DCD3C4] text-[#2B2520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4 lg:gap-6">
          {/* Left Zone: Brand Lockup (NUR ART SHOP + LABUAN BAJO • FLORES) */}
          <a
            href="#"
            className="flex flex-col justify-center shrink-0 focus-visible:outline-2 focus-visible:outline-[#8F3F22] group"
          >
            <span className="font-serif text-[19px] sm:text-[23px] font-normal uppercase tracking-[0.06em] text-[#2B2520] leading-none">
              NUR ART SHOP
            </span>
            <span className="font-sans text-[9px] sm:text-[9.5px] font-medium uppercase tracking-[0.22em] text-[#574D44] mt-1.5 leading-none">
              LABUAN BAJO <span className="text-[#8F3F22] mx-0.5">•</span> FLORES
            </span>
          </a>

          {/* Center Zone: 5 Clean Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8 text-[13.5px] font-normal text-[#3B332C]"
          >
            <a
              href="#koleksi"
              className="hover:text-[#8F3F22] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {UI_COPY.nav.collection[lang]}
            </a>
            <a
              href="#panduan-harga"
              className="hover:text-[#8F3F22] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {UI_COPY.nav.priceGuide[lang]}
            </a>
            <a
              href="#cerita-kami"
              className="hover:text-[#8F3F22] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {UI_COPY.nav.story[lang]}
            </a>
            <a
              href="#panduan-kunjungan"
              className="hover:text-[#8F3F22] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {UI_COPY.nav.visit[lang]}
            </a>
            <a
              href="#ulasan"
              className="hover:text-[#8F3F22] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {UI_COPY.nav.reviews[lang]}
            </a>
          </nav>

          {/* Right Zone: Language Switcher (EN | ID) & Primary GET DIRECTIONS Button */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            {/* Bilingual Toggle (EN | ID) */}
            <div
              role="group"
              aria-label="Language Switcher"
              className="inline-flex items-center text-[11px] font-bold tracking-[0.08em] border border-[#DCD3C4] bg-[#EAE3D5] rounded-[4px] p-0.5 sm:p-1"
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`min-h-[30px] min-w-[34px] px-2.5 py-1 rounded-[3px] transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  lang === 'en'
                    ? 'bg-[#8F3F22] text-[#F5F0E6] shadow-2xs'
                    : 'text-[#574D44] hover:text-[#2B2520]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('id')}
                aria-pressed={lang === 'id'}
                className={`min-h-[30px] min-w-[34px] px-2.5 py-1 rounded-[3px] transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  lang === 'id'
                    ? 'bg-[#8F3F22] text-[#F5F0E6] shadow-2xs'
                    : 'text-[#574D44] hover:text-[#2B2520]'
                }`}
              >
                ID
              </button>
            </div>

            {/* Primary CTA: GET DIRECTIONS */}
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#8F3F22] hover:bg-[#7A341B] text-[#F5F0E6] text-[11px] font-bold uppercase tracking-[0.12em] rounded-[3px] transition-colors whitespace-nowrap shrink-0"
            >
              <Navigation className="w-3.5 h-3.5 shrink-0" />
              <span>{UI_COPY.nav.storeLocationCta[lang]}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-[4px] border border-[#DCD3C4] text-[#2B2520] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F5F0E6] border-b border-[#DCD3C4] px-5 py-4 space-y-3 text-[#2B2520]">
            <nav className="flex flex-col space-y-2.5 text-sm font-medium">
              <a
                href="#koleksi"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#DCD3C4]/60"
              >
                {UI_COPY.nav.collection[lang]}
              </a>
              <a
                href="#panduan-harga"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#DCD3C4]/60"
              >
                {UI_COPY.nav.priceGuide[lang]}
              </a>
              <a
                href="#cerita-kami"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#DCD3C4]/60"
              >
                {UI_COPY.nav.story[lang]}
              </a>
              <a
                href="#panduan-kunjungan"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#DCD3C4]/60"
              >
                {UI_COPY.nav.visit[lang]}
              </a>
              <a
                href="#ulasan"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5"
              >
                {UI_COPY.nav.reviews[lang]}
              </a>
            </nav>
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#8F3F22] text-[#F5F0E6] text-xs font-bold uppercase tracking-[0.12em] rounded-[3px]"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{UI_COPY.nav.storeLocationCta[lang]}</span>
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* ===================================================================
            SECTION 1: EDITORIAL HERO & DIRECT MAPS CTA (F-02)
           =================================================================== */}
        <section className="relative min-h-[75vh] lg:min-h-screen flex flex-col justify-end overflow-hidden bg-[#2B2520]">
          {/* Full-bleed background photography with responsive WebP srcSet for sub-2s LCP */}
          <div className="absolute inset-0">
            <ResilientImage
              src={HERO_IMAGE}
              srcSet={`${HERO_MOBILE_IMAGE} 640w, ${HERO_IMAGE} 1200w`}
              sizes="100vw"
              alt="Interior Galeri Nur Art Shop Labuan Bajo dengan koleksi tenun Songke Manggarai dan ukiran kayu Komodo"
              loading="eager"
              fetchPriority="high"
              width={1200}
              height={900}
              className="w-full h-full object-cover object-center scale-101"
              fallbackTitle="Nur Art Shop Labuan Bajo"
            />
            <div className="absolute inset-0 bg-[#191410]/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191410]/90 via-[#191410]/50 to-transparent" />
          </div>

          {/* Hero Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-8 lg:pt-32 lg:pb-16">
            <div className="max-w-3xl">
              <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase font-semibold text-[#EAE3D5]/95">
                {UI_COPY.hero.overline[lang]}
              </p>

              <h1 className="font-serif text-[32px] sm:text-5xl lg:text-[56px] font-semibold text-[#F5F0E6] leading-[1.15] mt-2.5 lg:mt-3 [text-wrap:balance]">
                {UI_COPY.hero.headline[lang]}
              </h1>

              <p className="text-sm sm:text-lg text-[#EAE3D5]/95 leading-[1.65] mt-3.5 lg:mt-5 max-w-2xl">
                {UI_COPY.hero.subheadline[lang]}
              </p>

              <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 lg:px-7 py-3.5 bg-[#8F3F22] hover:bg-[#7A341B] text-[#F5F0E6] text-xs sm:text-base font-semibold uppercase sm:normal-case tracking-[0.1em] sm:tracking-normal rounded-[4px] transition-colors whitespace-nowrap shrink-0 min-h-[46px]"
                >
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{UI_COPY.hero.primaryCta[lang]}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 opacity-85" />
                </a>

                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 lg:px-7 py-3.5 bg-[#191410]/45 hover:bg-[#1C4B52] border border-[#F5F0E6]/70 hover:border-[#1C4B52] text-[#F5F0E6] text-xs sm:text-base font-semibold uppercase sm:normal-case tracking-[0.1em] sm:tracking-normal rounded-[4px] transition-colors whitespace-nowrap shrink-0 min-h-[46px]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{UI_COPY.hero.secondaryCta[lang]}</span>
                </a>
              </div>
            </div>

            {/* Compact Mobile Trust Strip (< lg) */}
            <div className="lg:hidden mt-7 pt-4 border-t border-[#F5F0E6]/20 grid grid-cols-3 gap-2 text-center text-[#F5F0E6]">
              <div>
                <p className="font-serif text-base font-medium leading-tight">100% Asli</p>
                <p className="text-[10px] text-[#EAE3D5]/85 uppercase tracking-wider mt-0.5">
                  {lang === 'id' ? 'Tenun Tangan' : 'Handwoven'}
                </p>
              </div>
              <div className="border-x border-[#F5F0E6]/15 px-1">
                <p className="font-serif text-base font-medium leading-tight">4.9 ★</p>
                <p className="text-[10px] text-[#EAE3D5]/85 uppercase tracking-wider mt-0.5">
                  Google Maps
                </p>
              </div>
              <div>
                <p className="font-serif text-base font-medium leading-tight">
                  {lang === 'id' ? 'Harga Jujur' : 'Fair Price'}
                </p>
                <p className="text-[10px] text-[#EAE3D5]/85 uppercase tracking-wider mt-0.5">
                  {lang === 'id' ? 'Pengrajin' : 'Direct Craft'}
                </p>
              </div>
            </div>

            {/* Desktop Operational Utility Ribbon (lg+) */}
            <div className="hidden lg:grid mt-12 pt-6 border-t border-[#F5F0E6]/20 grid-cols-4 gap-6 text-[#F5F0E6]">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#EAE3D5]/85 font-semibold">
                  {UI_COPY.hero.operationalBar.hoursLabel[lang]}
                </p>
                <p className="text-sm font-medium mt-1 tabular-nums">
                  {UI_COPY.hero.operationalBar.hoursValue[lang]}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#EAE3D5]/85 font-semibold">
                  {UI_COPY.hero.operationalBar.airportLabel[lang]}
                </p>
                <p className="text-sm font-medium mt-1 tabular-nums">
                  {UI_COPY.hero.operationalBar.airportValue[lang]}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#EAE3D5]/85 font-semibold">
                  {UI_COPY.hero.operationalBar.harborLabel[lang]}
                </p>
                <p className="text-sm font-medium mt-1 tabular-nums">
                  {UI_COPY.hero.operationalBar.harborValue[lang]}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#EAE3D5]/85 font-semibold">
                  {UI_COPY.hero.operationalBar.exclusivityLabel[lang]}
                </p>
                <p className="text-sm font-medium mt-1">
                  {UI_COPY.hero.operationalBar.exclusivityValue[lang]}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: CURATED COLLECTION LOOKBOOK (F-03 - Offline-Only Gallery)
           =================================================================== */}
        <section id="koleksi" className="py-12 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Editorial Section Header + Interactive Slide Controls on Mobile */}
          <div className="flex items-end justify-between gap-4 pb-5 lg:pb-8">
            <div className="max-w-3xl">
              <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase font-semibold text-[#8F3F22]">
                {UI_COPY.lookbook.overline[lang]}
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-semibold text-[#2B2520] leading-[1.2] mt-1.5 lg:mt-2 [text-wrap:balance]">
                {UI_COPY.lookbook.title[lang]}
              </h2>
              <p className="hidden lg:block text-[15px] sm:text-base text-[#574D44] leading-[1.7] mt-3">
                {UI_COPY.lookbook.subtitle[lang]}
              </p>
            </div>

            {/* Mobile Interactive Geser / Slide Left-Right Buttons (< lg) */}
            <div className="lg:hidden flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => scrollLookbookCarousel('prev')}
                aria-label={lang === 'id' ? 'Geser katalog ke kiri' : 'Slide lookbook left'}
                className="w-8 h-8 rounded-[3px] border border-[#D8CEBE] bg-[#EBE4D6] hover:bg-[#8F3F22] hover:text-[#F5F0E6] text-[#2B2520] flex items-center justify-center transition-colors cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8F3F22] px-1 tabular-nums">
                {activeLookbookSlide + 1}/{filteredCollections.length}
              </span>
              <button
                type="button"
                onClick={() => scrollLookbookCarousel('next')}
                aria-label={lang === 'id' ? 'Geser katalog ke kanan' : 'Slide lookbook right'}
                className="w-8 h-8 rounded-[3px] border border-[#D8CEBE] bg-[#EBE4D6] hover:bg-[#8F3F22] hover:text-[#F5F0E6] text-[#2B2520] flex items-center justify-center transition-colors cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Category Filter Bar (accessible group with aria-pressed) */}
          <div
            role="group"
            aria-label={lang === 'id' ? 'Filter kategori koleksi' : 'Collection category filter'}
            className="flex overflow-x-auto no-scrollbar lg:flex-wrap items-center gap-2 pb-5 lg:pb-8 -mx-4 px-4 lg:mx-0 lg:px-0"
          >
            {categoriesList.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveLookbookSlide(0);
                    if (lookbookCarouselRef.current) {
                      lookbookCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`px-3.5 lg:px-4 py-2 lg:py-2.5 text-[10px] lg:text-[11px] font-bold tracking-[0.13em] uppercase rounded-[3px] border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#2B2520] text-[#F5F0E6] border-[#2B2520]'
                      : 'bg-[#EAE3D5]/70 text-[#2B2520] border-[#DCD3C4] hover:bg-[#EAE3D5] hover:border-[#2B2520]/30'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* -----------------------------------------------------------------
              MOBILE LOOKBOOK: Swipeable & Drag-Scrollable Horizontal Carousel (< lg)
             ----------------------------------------------------------------- */}
          <div className="lg:hidden relative">
            <div
              ref={lookbookCarouselRef}
              onScroll={handleLookbookScroll}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-3 -mx-4 px-4 select-none cursor-grab active:cursor-grabbing"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {filteredCollections.map((item) => {
                const badgeStyle =
                  item.badgeVariant === 'terracotta'
                    ? 'bg-[#8F3F22] text-[#F5F0E6]'
                    : item.badgeVariant === 'teal'
                    ? 'bg-[#1C4B52] text-[#F5F0E6]'
                    : 'bg-[#F5F0E6]/95 text-[#2B2520] shadow-xs';

                const compactPrice = item.priceRangeLabel[lang].includes(':')
                  ? item.priceRangeLabel[lang].split(':')[1].trim()
                  : item.priceRangeLabel[lang];

                return (
                  <article
                    key={item.id}
                    onClick={() => {
                      if (!dragMovedRef.current) {
                        setSelectedArtwork(item);
                      }
                    }}
                    className="snap-center shrink-0 w-[280px] bg-[#EBE4D6] border border-[#D8CEBE] rounded-[2px] p-3 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      {/* Single Clean Photo per Catalog Card */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#DCD3C4] mb-3 rounded-[2px]">
                        <ResilientImage
                          src={item.image}
                          alt={item.title[lang]}
                          width={560}
                          height={420}
                          className="w-full h-full object-cover"
                          fallbackTitle={item.title[lang]}
                          fallbackSubtitle={item.origin[lang]}
                        />

                        {/* Top-Left Status Badge */}
                        <span
                          className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] rounded-full ${badgeStyle}`}
                        >
                          {item.availabilityStatus[lang]}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#8F3F22] block">
                          {item.heritageKicker[lang]}
                        </span>
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-[#574D44] tabular-nums">
                          {item.catalogNumber}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-medium text-[#2B2520] leading-snug mt-0.5">
                        {item.title[lang]}
                      </h3>
                      <p className="text-xs text-[#574D44] mt-1.5 line-clamp-2 leading-relaxed">
                        {item.shortStory[lang]}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#D8CEBE] flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-[#8F3F22] bg-[#F5F0E6] px-2 py-0.5 border border-[#D8CEBE] tabular-nums">
                        {compactPrice}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1C4B52] shrink-0">
                        {lang === 'id' ? 'Lihat Cerita →' : 'Inspect Story →'}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Interactive Carousel Dots & Geser Controls Bar Below Mobile Cards */}
            <div className="mt-2 flex items-center justify-between px-1">
              <button
                type="button"
                onClick={() => scrollLookbookCarousel('prev')}
                className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2B2520] hover:text-[#8F3F22] py-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-[#8F3F22]" />
                <span>{lang === 'id' ? 'Sebelumnya' : 'Prev'}</span>
              </button>

              <div className="flex items-center gap-0.5">
                {filteredCollections.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollLookbookCarousel(idx)}
                    aria-label={`${lang === 'id' ? 'Karya' : 'Piece'} ${idx + 1}`}
                    className="p-1.5 flex items-center justify-center cursor-pointer"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all ${
                        idx === activeLookbookSlide
                          ? 'w-6 bg-[#8F3F22]'
                          : 'w-2 bg-[#C8BDAE] hover:bg-[#8F3F22]/60'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollLookbookCarousel('next')}
                className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#8F3F22] hover:text-[#2B2520] py-1.5 cursor-pointer"
              >
                <span>{lang === 'id' ? 'Geser Karya' : 'Next Piece'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              DESKTOP LOOKBOOK: Asymmetric 12-Column Grid with Equal-Height Frames (lg+)
             ----------------------------------------------------------------- */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-7 items-stretch">
            {filteredCollections.map((item) => {
              const badgeStyle =
                item.badgeVariant === 'terracotta'
                  ? 'bg-[#8F3F22] text-[#F5F0E6]'
                  : item.badgeVariant === 'teal'
                  ? 'bg-[#1C4B52] text-[#F5F0E6]'
                  : 'bg-[#F5F0E6]/95 text-[#2B2520] shadow-xs';

              return (
                <article
                  key={item.id}
                  onClick={() => setSelectedArtwork(item)}
                  className={`${
                    activeCategory === 'all' ? item.gridSpanClass : 'lg:col-span-6'
                  } h-full group cursor-pointer bg-[#F5F0E6] border border-[#DCD3C4] hover:border-[#8F3F22]/60 p-4 sm:p-5 rounded-[2px] transition-colors duration-200 flex flex-col`}
                >
                  {/* Single Framed Artwork Photo with Top-Left Pill Badge */}
                  <div className="relative w-full h-[380px] overflow-hidden bg-[#EAE3D5] shrink-0">
                    <ResilientImage
                      src={item.image}
                      alt={item.title[lang]}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      fallbackTitle={item.title[lang]}
                      fallbackSubtitle={item.origin[lang]}
                    />

                    {/* Top-Left Pill Status Badge */}
                    <div className="absolute top-3.5 left-3.5 pointer-events-none">
                      <span
                        className={`inline-block px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.14em] uppercase ${badgeStyle}`}
                      >
                        {item.availabilityStatus[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Card Body Below Image */}
                  <div className="pt-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="pt-0.5">
                          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#8F3F22]">
                            {item.heritageKicker[lang]}
                          </p>
                          <h3 className="font-serif text-2xl sm:text-[26px] font-normal text-[#2B2520] leading-[1.22] mt-1.5 group-hover:text-[#8F3F22] transition-colors">
                            {item.title[lang]}
                          </h3>
                        </div>

                        <div className="px-2.5 py-1.5 border border-[#DCD3C4] bg-[#F5F0E6] text-[11px] font-semibold tracking-[0.1em] uppercase text-[#574D44] tabular-nums shrink-0 text-center leading-tight">
                          {item.catalogNumber}
                        </div>
                      </div>

                      <p className="text-[13.5px] sm:text-sm text-[#574D44] leading-[1.65] mt-2.5">
                        {item.shortStory[lang]}
                      </p>
                    </div>

                    <div className="mt-5 pt-2 flex flex-wrap items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF7F2] border border-[#DCD3C4] text-[11.5px] font-semibold tracking-wide text-[#82381D] tabular-nums">
                        <CreditCard className="w-3.5 h-3.5 text-[#8F3F22] shrink-0" />
                        <span>{item.priceRangeLabel[lang]}</span>
                      </div>

                      <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1C4B52] group-hover:text-[#8F3F22] inline-flex items-center gap-1 transition-colors">
                        <span>{lang === 'id' ? 'Detail Karya' : 'View Story'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* =================================================================
              PRICE GUIDE SECTION (#panduan-harga)
              - Compact 2x2 Summary Box on Mobile (< lg)
              - Full 4-Column Guide + Editorial Quote Banner on Desktop (lg+)
             ================================================================= */}
          <div id="panduan-harga" className="mt-6 lg:mt-14">
            {/* MOBILE COMPACT PRICE RANGE SUMMARY (< lg) */}
            <div className="lg:hidden bg-[#EBE4D6] border border-[#D8CEBE] rounded-[2px] p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8F3F22]">
                  {lang === 'id' ? 'Kisaran Harga Terjangkau' : 'Affordable Price Range'}
                </span>
                <span className="text-[10px] font-semibold text-[#1C4B52]">
                  {lang === 'id' ? '100% Harga Pengrajin' : '100% Direct Artisan'}
                </span>
              </div>
              <p className="text-xs text-[#574D44] mb-3 leading-relaxed">
                {lang === 'id'
                  ? 'Harga jujur langsung dari pengrajin lokal tanpa mark-up turis:'
                  : 'Honest direct-from-artisan prices with zero tourist markups:'}
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#F5F0E6] p-2.5 border border-[#D8CEBE] rounded-[2px]">
                  <p className="font-semibold text-[#2B2520]">Tenun Manggarai</p>
                  <p className="text-[#8F3F22] font-medium mt-0.5 tabular-nums">Rp 250rb – 1,8jt</p>
                </div>
                <div className="bg-[#F5F0E6] p-2.5 border border-[#D8CEBE] rounded-[2px]">
                  <p className="font-semibold text-[#2B2520]">Ukiran Komodo</p>
                  <p className="text-[#8F3F22] font-medium mt-0.5 tabular-nums">Rp 75rb – 950rb</p>
                </div>
                <div className="bg-[#F5F0E6] p-2.5 border border-[#D8CEBE] rounded-[2px]">
                  <p className="font-semibold text-[#2B2520]">Mutiara Laut</p>
                  <p className="text-[#1C4B52] font-medium mt-0.5 tabular-nums">Rp 150rb – 2,5jt</p>
                </div>
                <div className="bg-[#F5F0E6] p-2.5 border border-[#D8CEBE] rounded-[2px]">
                  <p className="font-semibold text-[#2B2520]">Anyaman/Souvenir</p>
                  <p className="text-[#8F3F22] font-medium mt-0.5 tabular-nums">Rp 35rb – 350rb</p>
                </div>
              </div>
            </div>

            {/* DESKTOP FULL 4-COLUMN PRICE GUIDE & QUOTE BANNER (lg+) */}
            <div className="hidden lg:block space-y-6">
              <div className="bg-[#EAE3D5]/70 border border-[#DCD3C4] rounded-[2px] p-6 sm:p-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-7 border-b border-[#DCD3C4]">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#8F3F22]">
                      {UI_COPY.lookbook.priceGuide.overline[lang]}
                    </p>
                    <h3 className="font-serif text-3xl sm:text-[34px] font-normal text-[#2B2520] leading-[1.2] mt-1.5">
                      {UI_COPY.lookbook.priceGuide.title[lang]}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-[#574D44] leading-[1.65] max-w-md">
                    {UI_COPY.lookbook.priceGuide.description[lang]}
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
                  {UI_COPY.lookbook.priceGuide.cards.map((card, index) => (
                    <div
                      key={card.id}
                      className="bg-[#F5F0E6] border border-[#DCD3C4] rounded-[2px] p-5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          {index === 0 ? (
                            <Layers className="w-4 h-4 text-[#8F3F22] shrink-0" />
                          ) : index === 1 ? (
                            <PenTool className="w-4 h-4 text-[#8F3F22] shrink-0" />
                          ) : index === 2 ? (
                            <Gem className="w-4 h-4 text-[#1C4B52] shrink-0" />
                          ) : (
                            <ShoppingBag className="w-4 h-4 text-[#8F3F22] shrink-0" />
                          )}
                          <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#574D44]">
                            {card.tag[lang]}
                          </span>
                        </div>

                        <h4 className="font-serif text-xl font-semibold text-[#2B2520] mt-3.5">
                          {card.title[lang]}
                        </h4>

                        <p className="text-xs text-[#574D44] leading-[1.65] mt-2">
                          {card.desc[lang]}
                        </p>
                      </div>

                      <div className="mt-6 pt-3.5 border-t border-[#DCD3C4]">
                        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#574D44]">
                          {card.rangeLabel[lang]}
                        </p>
                        <p
                          className={`font-serif text-lg sm:text-[19px] font-semibold tabular-nums mt-0.5 ${
                            card.accentColor === 'teal' ? 'text-[#1C4B52]' : 'text-[#8F3F22]'
                          }`}
                        >
                          {card.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 pt-5 border-t border-[#DCD3C4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-2 text-[#574D44]">
                    <CheckCircle2 className="w-4 h-4 text-[#8F3F22] shrink-0" />
                    <span>{UI_COPY.lookbook.priceGuide.footerGuarantee[lang]}</span>
                  </div>
                  <a
                    href="#panduan-kunjungan"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.13em] uppercase text-[#8F3F22] hover:text-[#2B2520] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>{UI_COPY.lookbook.priceGuide.footerCta[lang]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Separate Quote Callout Banner Directly Below Price Guide */}
              <div className="bg-[#EAE3D5]/70 border border-[#DCD3C4] rounded-[2px] p-6 sm:px-10 sm:py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-3xl">
                  <p className="font-serif text-xl sm:text-2xl italic text-[#2B2520] leading-[1.45]">
                    {UI_COPY.lookbook.priceGuide.quoteBanner.quote[lang]}
                  </p>
                  <p className="text-[10.5px] font-bold tracking-[0.15em] uppercase text-[#574D44] mt-2.5">
                    {UI_COPY.lookbook.priceGuide.quoteBanner.sublabel[lang]}
                  </p>
                </div>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#2B2520] hover:bg-[#8F3F22] text-[#F5F0E6] text-[11px] font-bold tracking-[0.14em] uppercase rounded-[2px] transition-colors whitespace-nowrap shrink-0 self-start lg:self-center"
                >
                  <span>{UI_COPY.lookbook.priceGuide.quoteBanner.cta[lang]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: THE STORY & AUTHENTICITY SECTION (F-04)
            - Trimmed concise version on Mobile (< lg)
            - Full 12-Column Split with Overlapping Photos on Desktop (lg+)
           =================================================================== */}
        <section
          id="cerita-kami"
          className="relative bg-[#EAE3D5] border-y border-[#DCD3C4]"
        >
          {/* Decorative Woven Pattern Top Border Strip */}
          <div
            aria-hidden="true"
            className="w-full h-2.5 lg:h-3 border-b border-[#DCD3C4] opacity-60"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #8F3F22 0px, #8F3F22 4px, transparent 4px, transparent 8px, #1C4B52 8px, #1C4B52 12px, transparent 12px, transparent 16px)',
            }}
          />

          {/* MOBILE TRIMMED STORY (< lg) */}
          <div className="lg:hidden py-10 px-4 max-w-xl mx-auto">
            <div className="relative rounded-[2px] overflow-hidden aspect-[16/10] mb-5 shadow-xs bg-[#DCD3C4]">
              <ResilientImage
                src={STORY_PRIMARY_IMAGE}
                alt={
                  lang === 'id'
                    ? 'Penenun tradisional Manggarai menenun kain dengan benang kapas pewarna alam'
                    : 'Flores master weaver working on a traditional wooden backstrap loom'
                }
                width={640}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#8F3F22] text-[#F5F0E6] px-3 py-1.5 rounded-[2px] shadow-sm flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  {lang === 'id' ? 'Langsung dari Pengrajin' : 'Direct Artisan Sourced'}
                </span>
              </div>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8F3F22] block mb-1">
              {lang === 'id' ? 'Cerita Pengrajin Kami' : 'Our Artisan Story'}
            </span>
            <h2 className="font-serif text-2xl font-medium text-[#2B2520] leading-tight mb-3">
              {lang === 'id'
                ? 'Melestarikan Warisan Asli Manggarai & NTT'
                : 'Preserving Authentic Manggarai & NTT Heritage'}
            </h2>
            <p className="text-xs text-[#574D44] leading-relaxed mb-4">
              {lang === 'id'
                ? 'Selama lebih dari satu dekade, Nur Art Shop bekerja langsung dengan ibu-ibu penenun desa di Manggarai, Cibal, Ruteng, dan Wae Rebo serta pengukir kayu lokal. Kami memilih hadir eksklusif di toko fisik agar Anda dapat menyentuh sendiri tekstur benang pintal tangan dan merasakan keasliannya.'
                : 'For over a decade, Nur Art Shop has worked directly with village women weavers in Manggarai, Cibal, Ruteng, and Wae Rebo alongside local master carvers. We operate exclusively offline so you can feel the hand-spun cotton and natural dyes in person.'}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#D8CEBE] text-xs">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#8F3F22] shrink-0" />
                <span className="font-medium text-[#2B2520]">
                  {lang === 'id' ? '100% Pewarna Alam' : '100% Plant Dyes'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Handshake className="w-4 h-4 text-[#1C4B52] shrink-0" />
                <span className="font-medium text-[#2B2520]">
                  {lang === 'id' ? 'Mitra Desa Langsung' : 'Direct Fair Trade'}
                </span>
              </div>
            </div>
          </div>

          {/* DESKTOP FULL STORY SPLIT LAYOUT (lg+) */}
          <div className="hidden lg:block py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 relative pt-4 pb-12 pr-8">
                <div className="absolute top-0 -left-3 z-20 bg-[#8F3F22] text-[#F5F0E6] px-5 py-3.5 rounded-[2px] shadow-md flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#F5F0E6] shrink-0" />
                  <div className="leading-tight">
                    <p className="text-[11px] font-bold tracking-[0.14em] uppercase">
                      {UI_COPY.story.badgeTop[lang]}
                    </p>
                    <p className="text-xs text-[#F5F0E6]/95 font-medium mt-0.5">
                      {UI_COPY.story.badgeSub[lang]}
                    </p>
                  </div>
                </div>

                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] shadow-md bg-[#DCD3C4] ml-4">
                  <ResilientImage
                    src={STORY_PRIMARY_IMAGE}
                    alt={
                      lang === 'id'
                        ? 'Penenun tradisional Manggarai menenun kain dengan benang kapas pewarna alam'
                        : 'Flores master weaver working on a traditional wooden backstrap loom'
                    }
                    width={720}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-0 right-2 z-20 w-[54%] aspect-[16/10] bg-[#F5F0E6] p-2 rounded-[2px] shadow-xl border border-[#DCD3C4]">
                  <ResilientImage
                    src={HERO_MOBILE_IMAGE}
                    alt="Suasana Butik Fisik Nur Art Shop Labuan Bajo"
                    width={540}
                    height={340}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center">
                <p className="text-[11px] tracking-[0.16em] uppercase font-bold text-[#8F3F22]">
                  {UI_COPY.story.overline[lang]}
                </p>

                <h2 className="font-serif text-[44px] font-normal text-[#2B2520] leading-[1.18] mt-2.5 [text-wrap:balance]">
                  {UI_COPY.story.title[lang]}
                </h2>

                <div className="mt-6 space-y-5 text-[15.5px] text-[#4E453C] leading-[1.75]">
                  <p>
                    {lang === 'id' ? (
                      <>
                        Di kota wisata yang kian dipenuhi kain sintetis cetakan mesin dan replika
                        plastik impor,{' '}
                        <strong className="font-semibold text-[#2B2520]">Nur Art Shop</strong> hadir
                        sebagai penjaga setia karya seni autentik Manggarai dan Nusa Tenggara Timur.
                      </>
                    ) : (
                      <>
                        In a tourist town rapidly filled with machine-printed synthetic fabrics and
                        imported plastic replicas,{' '}
                        <strong className="font-semibold text-[#2B2520]">Nur Art Shop</strong>{' '}
                        stands as a dedicated guardian of authentic Manggarai and East Nusa Tenggara
                        artistry.
                      </>
                    )}
                  </p>
                  <p>{UI_COPY.story.bodyParagraph1[lang]}</p>
                  <p>{UI_COPY.story.bodyParagraph2[lang]}</p>
                </div>

                <div className="mt-8 pt-7 border-t border-[#DCD3C4] grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#8F3F22] font-serif text-lg leading-none">❧</span>
                      <h3 className="font-serif text-xl font-medium text-[#2B2520]">
                        {UI_COPY.story.highlights[0].title[lang]}
                      </h3>
                    </div>
                    <p className="text-[13px] text-[#574D44] leading-[1.6] mt-2 pl-6">
                      {UI_COPY.story.highlights[0].desc[lang]}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#1C4B52] font-serif text-lg leading-none">❖</span>
                      <h3 className="font-serif text-xl font-medium text-[#2B2520]">
                        {UI_COPY.story.highlights[1].title[lang]}
                      </h3>
                    </div>
                    <p className="text-[13px] text-[#574D44] leading-[1.6] mt-2 pl-6">
                      {UI_COPY.story.highlights[1].desc[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: PLAN YOUR VISIT / PANDUAN KUNJUNGAN (F-05)
            - Mobile Card with Live Google Maps Pin Embed (< lg)
            - Full 2-Column Split with Live Google Maps Pin Embed on Desktop (lg+)
            - Deferred Map Mounting via IntersectionObserver for high Lighthouse score
           =================================================================== */}
        <section
          id="panduan-kunjungan"
          ref={visitSectionRef}
          className="py-10 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* -----------------------------------------------------------------
              MOBILE PLAN YOUR VISIT CARD (< lg)
             ----------------------------------------------------------------- */}
          <div className="lg:hidden max-w-xl mx-auto">
            <div className="text-center mb-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8F3F22] block mb-1">
                {lang === 'id' ? 'Rencanakan Kunjungan' : 'Plan Your Visit'}
              </span>
              <h2 className="font-serif text-2xl font-medium text-[#2B2520]">
                {lang === 'id' ? 'Temukan Butik Kami di Labuan Bajo' : 'Find Our Boutique in Labuan Bajo'}
              </h2>
            </div>

            <div className="bg-[#EBE4D6] border border-[#D8CEBE] rounded-[2px] p-4 shadow-xs">
              {/* Top Landmark Distance Pills */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#2B2520] bg-[#F5F0E6] px-2.5 py-1.5 border border-[#D8CEBE] rounded-[2px]">
                  <Plane className="w-3.5 h-3.5 text-[#8F3F22] shrink-0" />
                  <span>
                    {lang === 'id' ? '10 mnt dari Bandara Komodo' : '10 mins from Komodo Airport'}
                  </span>
                </span>
                <span className="text-[11px] text-[#574D44] font-medium">
                  {lang === 'id' ? '3 mnt dari Marina' : '3 mins from Marina'}
                </span>
              </div>

              {/* Official Store Name & Kampung Tengah Address */}
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8F3F22]">
                {STORE_INFO.name}
              </p>
              <h3 className="font-serif text-lg font-medium text-[#2B2520] mt-0.5">
                {STORE_INFO.shortAddress}
              </h3>
              <p className="text-xs text-[#574D44] mt-0.5 mb-3.5">
                {lang === 'id'
                  ? 'Kec. Komodo, Kabupaten Manggarai Barat, NTT 86554 — Tepat di koridor jalan utama sebelum ke bandara.'
                  : 'Kec. Komodo, West Manggarai, NTT 86554 — Right on the main boutique street, convenient before your flight.'}
              </p>

              {/* Live Google Maps Embed Directly at NUR ART SHOP Pin Location */}
              <div className="relative w-full h-[220px] sm:h-[260px] rounded-[2px] overflow-hidden bg-[#DFD6C5] border border-[#D8CEBE] mb-4">
                {shouldLoadMap ? (
                  <iframe
                    title="Titik Lokasi Google Maps Toko oleh oleh dan souvenir labuan bajo | NUR ART SHOP"
                    src={STORE_INFO.googleMapsEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setShouldLoadMap(true)}
                    className="w-full h-full flex flex-col items-center justify-center gap-2 text-xs font-semibold text-[#2B2520] cursor-pointer"
                  >
                    <MapPin className="w-6 h-6 text-[#8F3F22]" />
                    <span>{STORE_INFO.name}</span>
                  </button>
                )}
              </div>

              {/* Compact Hours Box */}
              <div className="bg-[#F5F0E6] p-3 rounded-[2px] border border-[#D8CEBE] mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse" />
                  <span className="text-xs font-semibold text-[#2B2520]">
                    {lang === 'id' ? 'Buka Setiap Hari' : 'Open Daily'}
                  </span>
                </div>
                <span className="font-serif text-sm font-medium text-[#2B2520] tabular-nums">
                  08:00 – 21:00 WITA
                </span>
              </div>

              {/* 2x2 Facilities Grid (Without AC claim) */}
              <div className="grid grid-cols-2 gap-2 text-[11px] mb-4">
                <div className="flex items-center gap-1.5 bg-[#F5F0E6] p-2 border border-[#D8CEBE] rounded-[2px]">
                  <CreditCard className="w-3.5 h-3.5 text-[#1C4B52] shrink-0" />
                  <span className="text-[#2B2520] font-medium">
                    {lang === 'id' ? 'QRIS & Kartu' : 'QRIS & Cards'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#F5F0E6] p-2 border border-[#D8CEBE] rounded-[2px]">
                  <Package className="w-3.5 h-3.5 text-[#1C4B52] shrink-0" />
                  <span className="text-[#2B2520] font-medium">
                    {lang === 'id' ? 'Packing Pesawat' : 'Flight-Safe Box'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#F5F0E6] p-2 border border-[#D8CEBE] rounded-[2px]">
                  <span className="w-3.5 h-3.5 inline-flex items-center justify-center font-bold text-[10px] text-[#1C4B52] shrink-0">
                    P
                  </span>
                  <span className="text-[#2B2520] font-medium">
                    {lang === 'id' ? 'Parkir Luas' : 'Free Parking'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#F5F0E6] p-2 border border-[#D8CEBE] rounded-[2px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1C4B52] shrink-0" />
                  <span className="text-[#2B2520] font-medium">
                    {lang === 'id' ? '100% Karya Asli' : '100% Authentic'}
                  </span>
                </div>
              </div>

              {/* Full-Width Terracotta Open in Google Maps CTA */}
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#8F3F22] hover:bg-[#7A341B] text-[#F5F0E6] text-xs font-bold uppercase tracking-[0.14em] rounded-[2px] transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Buka di Google Maps' : 'Open in Google Maps'}</span>
              </a>
            </div>
          </div>

          {/* -----------------------------------------------------------------
              DESKTOP PLAN YOUR VISIT SPLIT LAYOUT (lg+)
             ----------------------------------------------------------------- */}
          <div className="hidden lg:block">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.15em] uppercase font-semibold text-[#8F3F22]">
                {UI_COPY.visit.overline[lang]}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#2B2520] leading-[1.2] mt-2 [text-wrap:balance]">
                {UI_COPY.visit.title[lang]}
              </h2>
              <p className="text-[15px] sm:text-base text-[#574D44] leading-[1.7] mt-3">
                {UI_COPY.visit.subtitle[lang]}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left Column: Landmarks, Opening Hours, and Store Facilities */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
                {/* Block 1: Official Address & Landmark Distances */}
                <div className="p-6 sm:p-8 bg-[#EAE3D5] border border-[#DCD3C4] rounded-[4px]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#8F3F22] shrink-0 mt-1" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8F3F22]">
                        {STORE_INFO.name}
                      </p>
                      <h3 className="font-serif text-2xl font-semibold text-[#2B2520] mt-0.5">
                        {UI_COPY.visit.addressHeading[lang]}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#2B2520] font-medium mt-1">
                        {STORE_INFO.address}
                      </p>
                      <p className="text-xs text-[#574D44] font-mono tabular-nums mt-1">
                        GPS: {STORE_INFO.coordinates} · Tel/WA: {STORE_INFO.phoneDisplay}
                      </p>
                    </div>
                  </div>

                  <div className="my-6 border-t border-[#DCD3C4]" />

                  <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-[#574D44]">
                    {UI_COPY.visit.landmarksHeading[lang]}
                  </h4>
                  <div className="mt-4 space-y-4">
                    {UI_COPY.visit.landmarks.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3.5 pb-3.5 border-b border-[#DCD3C4]/80 last:border-b-0 last:pb-0"
                      >
                        {index === 0 ? (
                          <Plane className="w-4 h-4 text-[#1C4B52] shrink-0 mt-1" />
                        ) : index === 1 ? (
                          <Anchor className="w-4 h-4 text-[#1C4B52] shrink-0 mt-1" />
                        ) : (
                          <Compass className="w-4 h-4 text-[#1C4B52] shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <p className="text-sm font-semibold text-[#2B2520]">
                              {item.place[lang]}
                            </p>
                            <span className="text-xs font-semibold text-[#8F3F22] tabular-nums">
                              {item.time[lang]}
                            </span>
                          </div>
                          <p className="text-xs text-[#574D44] mt-0.5">{item.note[lang]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Block 2: Daily Opening Hours */}
                <div className="p-6 sm:p-8 bg-[#EAE3D5] border border-[#DCD3C4] rounded-[4px]">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#8F3F22] shrink-0" />
                    <h3 className="font-serif text-2xl font-semibold text-[#2B2520]">
                      {UI_COPY.visit.hoursHeading[lang]}
                    </h3>
                  </div>

                  <div className="mt-4 space-y-3">
                    {UI_COPY.visit.hoursSchedule.map((row, idx) => (
                      <div
                        key={idx}
                        className="flex flex-wrap items-center justify-between gap-2 py-2 border-b border-[#DCD3C4]"
                      >
                        <span className="text-sm font-medium text-[#2B2520]">
                          {row.days[lang]}
                        </span>
                        <span className="text-sm font-semibold text-[#1C4B52] tabular-nums">
                          {row.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#574D44] mt-3 leading-relaxed">
                    {UI_COPY.visit.hoursFootnote[lang]}
                  </p>
                </div>

                {/* Block 3: Store Amenities & Payment Methods */}
                <div className="p-6 sm:p-8 bg-[#EAE3D5] border border-[#DCD3C4] rounded-[4px]">
                  <h3 className="font-serif text-2xl font-semibold text-[#2B2520]">
                    {UI_COPY.visit.facilitiesHeading[lang]}
                  </h3>
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {UI_COPY.visit.facilities.map((fac, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {idx === 0 ? (
                          <CreditCard className="w-4 h-4 text-[#8F3F22] shrink-0 mt-1" />
                        ) : idx === 1 ? (
                          <Plane className="w-4 h-4 text-[#8F3F22] shrink-0 mt-1" />
                        ) : idx === 2 ? (
                          <ShieldCheck className="w-4 h-4 text-[#8F3F22] shrink-0 mt-1" />
                        ) : (
                          <Car className="w-4 h-4 text-[#8F3F22] shrink-0 mt-1" />
                        )}
                        <div>
                          <h4 className="text-sm font-semibold text-[#2B2520]">
                            {fac.title[lang]}
                          </h4>
                          <p className="text-xs text-[#574D44] leading-relaxed mt-1">
                            {fac.desc[lang]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Google Maps Embed Directly at NUR ART SHOP Pin */}
              <div className="lg:col-span-6 flex flex-col justify-between bg-[#EAE3D5] border border-[#DCD3C4] rounded-[4px] overflow-hidden">
                <div className="p-6 sm:p-8 border-b border-[#DCD3C4]">
                  <p className="text-xs uppercase tracking-[0.15em] font-semibold text-[#1C4B52]">
                    GOOGLE MAPS · {STORE_INFO.name.toUpperCase()}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2B2520] mt-1">
                    {UI_COPY.visit.mapCardTitle[lang]}
                  </h3>
                  <p className="text-sm text-[#574D44] mt-1">
                    {STORE_INFO.address}
                  </p>
                </div>

                {/* Embedded Interactive Google Map at exact Place Pin (-8.4939895, 119.8784846) */}
                <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] w-full bg-[#DCD3C4]">
                  {shouldLoadMap ? (
                    <iframe
                      title="Titik Lokasi Peta Toko oleh oleh dan souvenir labuan bajo | NUR ART SHOP"
                      src={STORE_INFO.googleMapsEmbedUrl}
                      className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShouldLoadMap(true)}
                      className="w-full h-full min-h-[380px] flex flex-col items-center justify-center gap-2 text-sm font-semibold text-[#2B2520] cursor-pointer"
                    >
                      <MapPin className="w-7 h-7 text-[#8F3F22]" />
                      <span>{STORE_INFO.name}</span>
                    </button>
                  )}
                </div>

                {/* Map Action Footer */}
                <div className="p-6 sm:p-8 bg-[#EAE3D5] border-t border-[#DCD3C4] space-y-3">
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#8F3F22] hover:bg-[#7A341B] text-[#F5F0E6] text-sm sm:text-base font-medium rounded-[4px] transition-colors whitespace-nowrap shrink-0 min-h-[48px]"
                  >
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{UI_COPY.visit.mapOpenBtn[lang]}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>

                  <a
                    href={generalWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-[#1C4B52] text-[#1C4B52] hover:bg-[#1C4B52] hover:text-[#F5F0E6] text-sm font-medium rounded-[4px] transition-colors whitespace-nowrap shrink-0 min-h-[48px]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>{UI_COPY.visit.whatsappVisitBtn[lang]}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: VISITOR MEMORIES & GOOGLE REVIEWS (F-07)
           =================================================================== */}
        <section
          id="ulasan"
          className="py-10 lg:py-28 bg-[#EAE3D5] border-t border-[#DCD3C4]"
        >
          {/* MOBILE SWIPEABLE REVIEWS (< lg) */}
          <div className="lg:hidden max-w-xl mx-auto px-4">
            <div className="flex items-end justify-between mb-4">
              <div>
                <div className="flex items-center gap-1 text-[#8F3F22] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#8F3F22]" />
                  ))}
                  <span className="text-xs font-bold text-[#2B2520] ml-1">4.9 / 5.0</span>
                </div>
                <h2 className="font-serif text-2xl font-medium text-[#2B2520]">
                  {lang === 'id' ? 'Jejak Pengunjung' : 'Traveler Memories'}
                </h2>
              </div>
              <a
                href={STORE_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-1 text-[10px] font-bold uppercase tracking-wider text-[#1C4B52] underline"
              >
                {lang === 'id' ? '180+ Ulasan' : '180+ Reviews'}
              </a>
            </div>

            <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 -mx-4 px-4">
              {VISITOR_REVIEWS.map((rev, idx) => (
                <article
                  key={rev.id}
                  className="snap-center shrink-0 w-[280px] bg-[#F5F0E6] border border-[#D8CEBE] p-4 rounded-[2px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 text-[#8F3F22] mb-2">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#8F3F22]" />
                      ))}
                    </div>
                    <p className="font-serif italic text-sm text-[#2B2520] leading-relaxed mb-3">
                      "{rev.quote[lang]}"
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 pt-2.5 border-t border-[#D8CEBE]">
                    <div
                      className={`w-7 h-7 rounded-full text-[#F5F0E6] flex items-center justify-center font-serif text-xs font-bold shrink-0 ${
                        idx % 2 === 0 ? 'bg-[#1C4B52]' : 'bg-[#8F3F22]'
                      }`}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#2B2520]">{rev.author}</p>
                      <p className="text-[10px] text-[#574D44]">{rev.origin}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* DESKTOP REVIEWS GRID (lg+) */}
          <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#DCD3C4]">
              <div className="max-w-2xl">
                <p className="text-xs tracking-[0.15em] uppercase font-semibold text-[#8F3F22]">
                  {UI_COPY.reviews.overline[lang]}
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#2B2520] leading-[1.2] mt-2 [text-wrap:balance]">
                  {UI_COPY.reviews.title[lang]}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 bg-[#F5F0E6] border border-[#DCD3C4] rounded-[4px]">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-semibold text-[#2B2520] tabular-nums">
                    {STORE_INFO.rating}
                  </span>
                  <span className="text-sm text-[#574D44] tabular-nums">/ 5.0</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#8F3F22]" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#8F3F22]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#574D44] mt-1">
                    {UI_COPY.reviews.basedOnText[lang]}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.14em] text-[#574D44] font-semibold">
                {lang === 'id'
                  ? `Menampilkan Ulasan Pilihan (${activeReviewIndex + 1} dari ${VISITOR_REVIEWS.length})`
                  : `Featured Visitor Testimonies (${activeReviewIndex + 1} of ${VISITOR_REVIEWS.length})`}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevReview}
                  aria-label={lang === 'id' ? 'Ulasan sebelumnya' : 'Previous review'}
                  className="w-10 h-10 flex items-center justify-center rounded-[4px] border border-[#DCD3C4] bg-[#F5F0E6] hover:bg-[#8F3F22] hover:text-[#F5F0E6] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextReview}
                  aria-label={lang === 'id' ? 'Ulasan berikutnya' : 'Next review'}
                  className="w-10 h-10 flex items-center justify-center rounded-[4px] border border-[#DCD3C4] bg-[#F5F0E6] hover:bg-[#8F3F22] hover:text-[#F5F0E6] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {VISITOR_REVIEWS.map((rev, idx) => {
                const isHighlighted = idx === activeReviewIndex;
                return (
                  <article
                    key={rev.id}
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`p-6 sm:p-8 bg-[#F5F0E6] border rounded-[4px] flex flex-col justify-between transition-colors cursor-pointer ${
                      isHighlighted
                        ? 'border-[#8F3F22]'
                        : 'border-[#DCD3C4] hover:border-[#2B2520]/40'
                    }`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1 text-[#8F3F22]">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#8F3F22]" />
                          ))}
                        </div>
                        <span className="text-xs text-[#574D44]">{rev.visitedDate[lang]}</span>
                      </div>

                      <blockquote className="mt-4 font-serif text-lg sm:text-xl text-[#2B2520] leading-[1.55]">
                        “{rev.quote[lang]}”
                      </blockquote>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#DCD3C4] flex flex-wrap items-baseline justify-between gap-2 text-xs">
                      <div>
                        <p className="font-semibold text-sm text-[#2B2520]">{rev.author}</p>
                        <p className="text-[#574D44] mt-0.5">{rev.origin}</p>
                      </div>
                      <span className="text-[#1C4B52] font-medium">
                        {rev.purchasedItem[lang]}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href={STORE_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#1C4B52] text-[#1C4B52] hover:bg-[#1C4B52] hover:text-[#F5F0E6] text-sm font-medium rounded-[4px] transition-colors whitespace-nowrap shrink-0 min-h-[48px]"
              >
                <span>{UI_COPY.reviews.viewAllMapsBtn[lang]}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          FOOTER: Editorial Footer
         ===================================================================== */}
      <footer className="bg-[#1C4B52] text-[#F5F0E6] py-12 lg:py-16 border-t border-[#1C4B52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-10 lg:pb-12 border-b border-[#F5F0E6]/15">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <p className="font-serif text-2xl lg:text-3xl font-semibold tracking-tight text-[#F5F0E6]">
                Nur Art Shop Labuan Bajo
              </p>
              <p className="text-xs text-[#EAE3D5]/85 uppercase tracking-[0.14em] mt-1">
                {STORE_INFO.name}
              </p>
              <p className="text-xs sm:text-sm text-[#EAE3D5]/90 leading-relaxed mt-3 max-w-md">
                {lang === 'id'
                  ? 'Galeri kurasi tenun Songke Manggarai pewarna alam, ukiran kayu jati Pulau Komodo, mutiara laut selatan Flores, dan kerajinan tangan autentik Nusa Tenggara Timur. Beroperasi secara eksklusif melalui kunjungan langsung di toko fisik kami.'
                  : 'Curated gallery of natural-dyed handwoven Manggarai Songke, Komodo Island aged teak carvings, Flores South Sea pearls, and authentic East Nusa Tenggara fine crafts. Exclusively available in-person at our Labuan Bajo boutique.'}
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="md:col-span-3 space-y-2.5 text-sm">
              <p className="text-xs uppercase tracking-[0.15em] font-semibold text-[#EAE3D5]/85">
                {lang === 'id' ? 'Eksplorasi Galeri' : 'Explore Gallery'}
              </p>
              <ul className="space-y-1 pt-1 text-xs sm:text-sm">
                <li>
                  <a href="#koleksi" className="inline-block py-1.5 hover:underline underline-offset-4">
                    {UI_COPY.nav.collection[lang]}
                  </a>
                </li>
                <li>
                  <a href="#panduan-harga" className="inline-block py-1.5 hover:underline underline-offset-4">
                    {UI_COPY.nav.priceGuide[lang]}
                  </a>
                </li>
                <li>
                  <a href="#cerita-kami" className="inline-block py-1.5 hover:underline underline-offset-4">
                    {UI_COPY.nav.story[lang]}
                  </a>
                </li>
                <li>
                  <a href="#panduan-kunjungan" className="inline-block py-1.5 hover:underline underline-offset-4">
                    {UI_COPY.nav.visit[lang]}
                  </a>
                </li>
                <li>
                  <a href="#ulasan" className="inline-block py-1.5 hover:underline underline-offset-4">
                    {UI_COPY.nav.reviews[lang]}
                  </a>
                </li>
              </ul>
            </div>

            {/* Physical Store Info */}
            <div className="md:col-span-4 space-y-2.5 text-xs sm:text-sm">
              <p className="text-xs uppercase tracking-[0.15em] font-semibold text-[#EAE3D5]/85">
                {lang === 'id' ? 'Kunjungan Tatap Muka' : 'Visit Our Boutique'}
              </p>
              <p className="text-[#EAE3D5]/95 leading-relaxed pt-1">{STORE_INFO.address}</p>
              <p className="text-[#EAE3D5]/95 tabular-nums">
                {lang === 'id' ? 'Buka Setiap Hari:' : 'Open Daily:'} 08:00 – 21:00 WITA
              </p>
              <p className="text-[#EAE3D5]/95 tabular-nums">
                WhatsApp Concierge: {STORE_INFO.phoneDisplay}
              </p>
            </div>
          </div>

          <div className="pt-6 lg:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAE3D5]/85">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} {STORE_INFO.name}.{' '}
              {lang === 'id'
                ? 'Hak Cipta Dilindungi · Galeri Fisik Resmi Manggarai Barat, NTT.'
                : 'All Rights Reserved · Official Physical Gallery in West Manggarai, NTT.'}
            </p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
                className="py-1.5 px-1 hover:text-[#F5F0E6] underline underline-offset-4 cursor-pointer"
              >
                {lang === 'id' ? 'Switch to English (EN)' : 'Ganti ke Bahasa Indonesia (ID)'}
              </button>
              <span aria-hidden="true">·</span>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-1 hover:text-[#F5F0E6] underline underline-offset-4"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MOBILE STICKY BOTTOM ACTION BAR (< lg)
         ===================================================================== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#F5F0E6]/95 backdrop-blur-md border-t border-[#DCD3C4] p-2.5 flex items-center gap-2 lg:hidden">
        <a
          href={STORE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-[#8F3F22] text-[#F5F0E6] text-[11px] font-bold uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-1.5 shadow-xs"
        >
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span>Google Maps</span>
        </a>
        <a
          href={generalWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-[#1C4B52] text-[#F5F0E6] text-[11px] font-bold uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-1.5 shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{lang === 'id' ? 'Tanya WhatsApp' : 'WhatsApp Inquiry'}</span>
        </a>
      </div>

      {/* =====================================================================
          DESKTOP FLOATING WHATSAPP CONCIERGE (lg+)
         ===================================================================== */}
      <a
        href={generalWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={UI_COPY.whatsapp.floatingLabel[lang]}
        className="hidden lg:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-5 py-3.5 bg-[#1C4B52] hover:bg-[#15393F] text-[#F5F0E6] border border-[#F5F0E6]/25 rounded-[4px] shadow-lg transition-colors min-h-[48px]"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
          {UI_COPY.whatsapp.floatingLabel[lang]}
        </span>
      </a>

      {/* =====================================================================
          EDITORIAL ARTWORK LIGHTBOX MODAL (F-03 & F-06)
         ===================================================================== */}
      <ArtworkModal
        item={selectedArtwork}
        lang={lang}
        onClose={() => setSelectedArtwork(null)}
      />
    </div>
  );
}
