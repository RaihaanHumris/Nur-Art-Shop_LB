export type Language = 'id' | 'en';

export type CategoryId = 'all' | 'tenun' | 'ukiran' | 'mutiara' | 'anyaman';

export interface CollectionItem {
  id: string;
  catalogNumber: string;
  accessionNo: string;
  category: Exclude<CategoryId, 'all'>;
  categoryLabel: { id: string; en: string };
  heritageKicker: { id: string; en: string };
  title: { id: string; en: string };
  origin: { id: string; en: string };
  artisanGroup: { id: string; en: string };
  availabilityStatus: { id: string; en: string };
  badgeVariant: 'cream' | 'terracotta' | 'teal';
  priceRangeLabel: { id: string; en: string };
  gridSpanClass: string;
  aspectClass: string;
  image: string;
  shortStory: { id: string; en: string };
  fullNarrative: { id: string; en: string };
  materials: { id: string; en: string };
  dimensions: string;
  craftingDuration: { id: string; en: string };
  careNotes: { id: string; en: string };
  flightPackingNote: { id: string; en: string };
}

export interface VisitorReview {
  id: string;
  author: string;
  initials: string;
  origin: string;
  visitedDate: { id: string; en: string };
  purchasedItem: { id: string; en: string };
  rating: number;
  quote: { id: string; en: string };
}

export const STORE_INFO = {
  name: 'Toko oleh oleh dan souvenir labuan bajo | NUR ART SHOP',
  shortName: 'Nur Art Shop Labuan Bajo',
  address: 'Jl. Soekarno Hatta, Kampung Tengah, Labuan Bajo, Kec. Komodo, Kabupaten Manggarai Barat, Nusa Tenggara Timur 86554',
  shortAddress: 'Jl. Soekarno Hatta, Kampung Tengah, Labuan Bajo',
  googleMapsUrl: 'https://maps.app.goo.gl/vD95mBh1dBotJRxd7',
  googleReviewsUrl: 'https://maps.app.goo.gl/vD95mBh1dBotJRxd7',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.5!2d119.8784846!3d-8.4939895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db4675a80152919%3A0xefb54c815a35b08c!2sToko%20oleh%20oleh%20dan%20souvenir%20labuan%20bajo%20%7C%20NUR%20ART%20SHOP!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  whatsappNumber: '6281238904421',
  phoneDisplay: '+62 812-3890-4421',
  coordinates: '8°29\'38.4"S 119°52\'42.5"E',
  rating: '4.9',
  reviewCount: '180+',
};

export const HOTLINK_IMAGES = {
  hero: '/src/assets/images/hero_nur_art_shop_gallery_1795070278898.webp',
  heroMobile: '/src/assets/images/hero_mobile.webp',
  tenun: '/src/assets/images/tenun_ikat_sikka_royal_1795070277552.webp',
  komodo: '/src/assets/images/ukiran_komodo_kayu_jati_1795070278648.webp',
  pearls: '/src/assets/images/mutiara_laut_flores_south_sea_1795070278073.webp',
  rattan: '/src/assets/images/anyaman_lontar_songke_manggarai_1795070278597.webp',
  storyWeaver: '/src/assets/images/artisan_weaver_hands_flores_1795070288024.webp',
};

export const COLLECTION_ITEMS: CollectionItem[] = [
  {
    id: 'tenun-songke-manggarai-jok-ntala',
    catalogNumber: 'NO. 01',
    accessionNo: 'NAS-MGR-01',
    category: 'tenun',
    categoryLabel: { id: 'Tenun Manggarai', en: 'Handwoven Tenun Manggarai' },
    heritageKicker: { id: 'WARISAN ADAT MANGGARAI RAYA', en: 'MANGGARAI HIGHLAND HERITAGE' },
    title: {
      id: 'Tenun Songke Manggarai Pewarna Alam',
      en: 'Tenun Songke Manggarai Natural Plant Dye',
    },
    origin: { id: 'Cibal & Todo, Kabupaten Manggarai, Flores Barat', en: 'Cibal & Todo, Manggarai Regency, West Flores' },
    artisanGroup: { id: 'Sanggar Tenun Adat Cibal Manggarai', en: 'Cibal Heritage Weavers Collective, Manggarai' },
    availabilityStatus: { id: 'EKSKLUSIF DI TOKO', en: 'IN-STORE EXCLUSIVE' },
    badgeVariant: 'cream',
    priceRangeLabel: {
      id: 'Kisaran Pengrajin Langsung: Rp 250.000 – Rp 1.800.000',
      en: 'Direct Artisan Range: Rp 250.000 – Rp 1.800.000',
    },
    gridSpanClass: 'lg:col-span-7',
    aspectClass: 'aspect-[5/4]',
    image: HOTLINK_IMAGES.tenun,
    shortStory: {
      id: 'Dipintal dari kapas organik asli Flores dan direndam dalam daun tarum liar serta akar mengkudu selama 3 bulan. Motif geometris sakral Manggarai (Ntala & Ranggong) penjaga berkah leluhur.',
      en: 'Spun from native organic Flores cotton and steeped in wild indigo leaves and fermented mengkudu roots over 3 months. Distinct sacred Manggarai geometric motifs guarding ancestral blessings.',
    },
    fullNarrative: {
      id: 'Setiap helai kain tenun Manggarai ini merangkum filosofi hidup masyarakat Manggarai Barat dan Manggarai Raya. Motif Ntala (bintang) melambangkan harapan dan tuntunan hidup yang luhur, sementara motif Ranggong (laba-laba) melambangkan kejujuran, kerja keras, dan ketekunan dalam merajut persaudaraan. Ditenun secara manual selama berbulan-bulan oleh ibu-ibu penenun di kaki pegunungan Manggarai.',
      en: 'Each thread of this Manggarai textile embodies the ancestral worldview of West Flores. The Ntala (star) motif symbolizes high aspiration and guiding light, while the Ranggong (spiderweb) motif honors diligence, honesty, and community kinship. Handwoven over several months by master women weavers in the Manggarai highlands.',
    },
    materials: {
      id: '100% Kapas Pintal Tangan, Pewarna Alam Mengkudu, Tarum & Benang Sulam Songke',
      en: '100% Hand-spun Cotton, Natural Terracotta & Indigo Dyes with Songke Weft',
    },
    dimensions: '225 cm × 118 cm',
    craftingDuration: { id: '3 hingga 5 Bulan Pengerjaan Tangan', en: '3 to 5 Months of Handcrafting' },
    careNotes: {
      id: 'Cuci lembut dengan air dingin tanpa deterjen pemutih, jemur di tempat teduh berangin.',
      en: 'Gentle cold hand-wash without bleach; air dry in shaded coastal breeze.',
    },
    flightPackingNote: {
      id: 'Dilipat dengan kertas bebas asam (acid-free tissue) dan tabung pelindung kedap udara untuk bagasi kabin.',
      en: 'Folded with acid-free archival tissue and sealed in a breathable travel cylinder for cabin luggage.',
    },
  },
  {
    id: 'ukiran-komodo-jati-tua',
    catalogNumber: 'NO. 02',
    accessionNo: 'NAS-WOOD-02',
    category: 'ukiran',
    categoryLabel: { id: 'Ukiran Komodo', en: 'Wooden Komodo Sculptures' },
    heritageKicker: { id: 'MAESTRO PENGUKIR LABUAN BAJO', en: 'LABUAN BAJO MASTER CARVERS' },
    title: {
      id: 'Patung Komodo Kayu Jati Tua Pahat Tangan',
      en: 'Hand-Carved Aged Teak Komodo Sculpture',
    },
    origin: { id: 'Pulau Komodo & Labuan Bajo, Manggarai Barat', en: 'Komodo Island & West Manggarai' },
    artisanGroup: { id: 'Pengukir Pesisir Kampung Komodo', en: 'Kampung Komodo Coastal Master Carvers' },
    availabilityStatus: { id: 'MAESTERPIS TERBATAS', en: 'LIMITED MASTERPIECE' },
    badgeVariant: 'terracotta',
    priceRangeLabel: {
      id: 'Kisaran Pengrajin Langsung: Rp 75.000 – Rp 950.000',
      en: 'Direct Artisan Range: Rp 75.000 – Rp 950.000',
    },
    gridSpanClass: 'lg:col-span-5',
    aspectClass: 'aspect-[16/10]',
    image: HOTLINK_IMAGES.komodo,
    shortStory: {
      id: 'Dipahat dari kayu jati tua Flores pilihan yang lestari. Setiap lekuk otot dan tekstur sisik dipahat manual oleh pengrajin lintas generasi. Termasuk pengemasan kotak aman bagasi pesawat.',
      en: 'Sculpted from sustainably reclaimed antique Flores teak. Every muscular curve and textured scale is chiselled by hand by multigenerational artisans. Airline-safe boxed packing included.',
    },
    fullNarrative: {
      id: 'Dikerjakan oleh pengukir generasi ketiga asal Pulau Komodo yang mengamati langsung gerak-gerik sang naga purba di habitat aslinya. Tanpa sambungan lem, seluruh lekuk otot, cakar, hingga tekstur sisik kulit dipahat dari satu batang kayu jati tua pilihan yang telah dikeringkan selama bertahun-tahun agar tidak retak saat dibawa ke negara beriklim empat musim.',
      en: 'Created by third-generation carvers from Komodo Island who grew up observing the ancient dragon in its native savanna. Carved from a single solid block of seasoned teak with zero glue joints, every muscular contour, claw, and dermal scale is rendered by hand. The timber is kiln-and-sun seasoned to prevent cracking in four-season climates.',
    },
    materials: {
      id: 'Kayu Jati Tua Solid (Tectona grandis), Lapisan Lilin Lebah Alami',
      en: 'Solid Seasoned Aged Teak (Tectona grandis), Natural Beeswax Finish',
    },
    dimensions: '54 cm × 21 cm × 16 cm',
    craftingDuration: { id: '3 Minggu Pemahatan Detail', en: '3 Weeks of Fine Chiseling' },
    careNotes: {
      id: 'Usap dengan kain kering lembut; oleskan beeswax alami setahun sekali untuk menjaga patina kayu.',
      en: 'Dust with a soft dry cloth; apply natural beeswax annually to nourish the wood patina.',
    },
    flightPackingNote: {
      id: 'Dibungkus busa pelindung berlapis dan kotak kayu/karton keras berstandar bagasi penerbangan internasional.',
      en: 'Custom-wrapped in multi-layer shock-absorbing foam and rigid flight-ready box for international check-in.',
    },
  },
  {
    id: 'mutiara-laut-selatan-flores',
    catalogNumber: 'NO. 03',
    accessionNo: 'NAS-PEARL-03',
    category: 'mutiara',
    categoryLabel: { id: 'Mutiara Laut', en: 'South Sea Pearls' },
    heritageKicker: { id: 'PERAIRAN LAUT DALAM KOMODO', en: 'KOMODO DEEP SEA WATERS' },
    title: {
      id: 'Mutiara Laut Selatan Emas & Putih Flores',
      en: 'Flores Golden & White South Sea Pearls',
    },
    origin: { id: 'Perairan Selat Molo & Kepulauan Komodo, Manggarai Barat', en: 'Molo Strait & Komodo Waters, West Manggarai' },
    artisanGroup: { id: 'Pembudidaya Mutiara Pinctada maxima Flores', en: 'Flores Pinctada maxima Pearl Artisans' },
    availabilityStatus: { id: 'PANEN LAUT TERSERTIFIKASI', en: 'CERTIFIED MARINE HARVEST' },
    badgeVariant: 'teal',
    priceRangeLabel: {
      id: 'Kisaran Panen Langsung: Rp 150.000 – Rp 2.500.000',
      en: 'Direct Harvest Range: Rp 150.000 – Rp 2.500.000',
    },
    gridSpanClass: 'lg:col-span-5',
    aspectClass: 'aspect-[16/10]',
    image: HOTLINK_IMAGES.pearls,
    shortStory: {
      id: 'Dipanen dari budidaya tiram murni di sekitar Taman Nasional Komodo. Terkenal akan kilau nakre yang tebal, rona keemasan alami tanpa pemutih, dan ikatan perak tempa tangan.',
      en: 'Harvested from pristine oyster farms around Komodo National Park. Celebrated for their rich deep nacre luster, untreated natural golden hues, and bespoke silver mountings.',
    },
    fullNarrative: {
      id: 'Perairan laut dalam di sekitar Labuan Bajo dan pulau-pulau kecil Manggarai Barat merupakan salah satu habitat terbaik kerang mutiara bibir emas dan perak (Pinctada maxima). Setiap butir mutiara di galeri Nur Art Shop diseleksi secara individual berdasarkan ketebalan nakre, kemurnian kilau alami tanpa pewarna buatan, dan diikat dengan perak murni 925 hasil tempaan pengrajin lokal.',
      en: 'The nutrient-rich, crystal waters surrounding Labuan Bajo and West Manggarai are among the world’s premier habitats for gold- and silver-lipped Pinctada maxima oysters. Each pearl at Nur Art Shop is individually hand-selected for nacre thickness and unbleached natural orient, set into hammered 925 sterling silver mounts.',
    },
    materials: {
      id: 'Mutiara Air Asin Laut Selatan Asli (10–13mm), Perak Murni 925 Tempa Tangan',
      en: 'Authentic Saltwater South Sea Pearls (10–13mm), Hand-forged 925 Sterling Silver',
    },
    dimensions: 'Diameter Mutiara 10.5 mm – 12.8 mm | Rantai 45 cm',
    craftingDuration: { id: '2 Tahun Budidaya Laut & Kurasi Tangan', en: '2 Years Marine Cultivation & Hand-Grading' },
    careNotes: {
      id: 'Hindari kontak langsung dengan parfum; simpan di dalam kotak beludru terpisah.',
      en: 'Keep away from direct perfume spray; store inside the provided velvet-lined travel pouch.',
    },
    flightPackingNote: {
      id: 'Dilengkapi sertifikat keaslian toko Nur Art Shop dan kotak perhiasan keras untuk tas kabin.',
      en: 'Accompanied by a Nur Art Shop certificate of authenticity and hard travel case for carry-on luggage.',
    },
  },
  {
    id: 'anyaman-lontar-desu-manggarai',
    catalogNumber: 'NO. 04',
    accessionNo: 'NAS-WEAVE-04',
    category: 'anyaman',
    categoryLabel: { id: 'Anyaman Alam', en: 'Natural Rattan Crafts' },
    heritageKicker: { id: 'PANEN ALAM MANGGARAI BARAT', en: 'WEST MANGGARAI WILD HARVEST' },
    title: {
      id: 'Wadah Anyaman Rotan & Lontar Alami Pengrajin',
      en: 'Artisan Handwoven Natural Rattan Vessels',
    },
    origin: { id: 'Lembor & Sano Nggoang, Manggarai Barat', en: 'Lembor & Sano Nggoang, West Manggarai' },
    artisanGroup: { id: 'Kelompok Penganyam Perempuan Lembor', en: 'Lembor Women’s Basketry Guild' },
    availabilityStatus: { id: 'EKSKLUSIF DI TOKO', en: 'IN-STORE EXCLUSIVE' },
    badgeVariant: 'cream',
    priceRangeLabel: {
      id: 'Kisaran Pengrajin Langsung: Rp 35.000 – Rp 350.000',
      en: 'Direct Artisan Range: Rp 35.000 – Rp 350.000',
    },
    gridSpanClass: 'lg:col-span-7',
    aspectClass: 'aspect-[5/4]',
    image: HOTLINK_IMAGES.rattan,
    shortStory: {
      id: 'Dipanen langsung dari hutan dataran tinggi Flores. Disayat halus dan dianyam rapat menjadi wadah dekoratif serbaguna, kotak penyimpanan bertutup, serta keranjang jinjing ramah lingkungan.',
      en: 'Harvested by hand from the highland rainforests of Flores. Splinted and tightly braided into versatile decorative vessels, lidded keepsake chests, and sustainable carrying baskets.',
    },
    fullNarrative: {
      id: 'Rotan hutan, daun lontar, dan pandan merupakan bagian tak terpisahkan dari tradisi kriya masyarakat Manggarai Barat. Pucuk daun dan serat rotan dipanen pada musim kemarau, dikeringkan di bawah terik matahari pesisir, lalu disayat halus sebelum dianyam oleh jari-jemari terampil pengrajin perempuan menjadi wadah penyimpanan (Desu & Lonto Leok) bernilai seni tinggi.',
      en: 'Wild rattan, lontar palm, and pandanus are integral to the craft heritage of West Manggarai. Fronds and rattan fibers are harvested during the dry season, sun-cured, and split into fine ribbons before being braided by master women basket-makers into geometric vessels that last for decades.',
    },
    materials: {
      id: 'Rotan Hutan Flores, Serat Daun Lontar & Pandan Alami Manggarai',
      en: 'Wild Flores Rattan, Sun-cured Lontar Palm & Manggarai Pandanus',
    },
    dimensions: 'Set 3 Wadah: Ø 28 cm, Ø 22 cm, Ø 16 cm',
    craftingDuration: { id: '14 Hari Pengeringan & Penganyaman', en: '14 Days of Sun-Curing & Hand-Plaiting' },
    careNotes: {
      id: 'Simpan di ruang kering berventilasi baik; bersihkan dengan kuas bulu halus.',
      en: 'Keep in dry, well-ventilated spaces; clean gently with a soft bristle brush.',
    },
    flightPackingNote: {
      id: 'Dapat disusun bersarang (nested) sehingga hemat ruang dan dikemas kotak tahan tekan.',
      en: 'Nests compactly together and packed inside a crush-proof travel carton for easy check-in.',
    },
  },
  {
    id: 'songke-manggarai-benang-emas',
    catalogNumber: 'NO. 05',
    accessionNo: 'NAS-MGR-05',
    category: 'tenun',
    categoryLabel: { id: 'Tenun Manggarai', en: 'Handwoven Tenun Manggarai' },
    heritageKicker: { id: 'TENUN ADAT DATARAN TINGGI RUTENG', en: 'RUTENG HIGHLAND ROYAL WEAVING' },
    title: {
      id: 'Tenun Songke Manggarai Motif Wela Kaweng',
      en: 'Manggarai Royal Songke — Wela Kaweng Motif',
    },
    origin: { id: 'Ruteng & Lembor, Manggarai Raya, Flores', en: 'Ruteng & Lembor, Greater Manggarai, Flores' },
    artisanGroup: { id: 'Penenun Adat Ruteng Manggarai', en: 'Ruteng Highland Weavers, Manggarai' },
    availabilityStatus: { id: 'EKSKLUSIF DI TOKO', en: 'IN-STORE EXCLUSIVE' },
    badgeVariant: 'cream',
    priceRangeLabel: {
      id: 'Kisaran Pengrajin Langsung: Rp 350.000 – Rp 2.200.000',
      en: 'Direct Artisan Range: Rp 350.000 – Rp 2.200.000',
    },
    gridSpanClass: 'lg:col-span-7',
    aspectClass: 'aspect-[5/4]',
    image: HOTLINK_IMAGES.storyWeaver,
    shortStory: {
      id: 'Kain tenun adat tanah tinggi Manggarai berlatar hitam indigo pekat dengan sulaman pakan tambahan motif bunga Wela Kaweng dan Mata Manuk yang melambangkan harmoni.',
      en: 'Highland Manggarai ceremonial textile featuring a deep midnight-indigo ground woven with golden supplementary weft Wela Kaweng blossoms.',
    },
    fullNarrative: {
      id: 'Kain Songke dari pegunungan Manggarai menggunakan teknik pakan tambahan (supplementary weft) yang menyulam simbol filosofis di atas dasar kain gelap yang melambangkan keagungan bumi (Ina Nuca Lale). Motif Wela Kaweng mengingatkan manusia pada hubungan timbal balik yang harmonis dengan sesama dan alam semesta.',
      en: 'The Songke cloths of the Manggarai highlands employ an intricate supplementary weft technique across a deep dark ground symbolizing Mother Earth. The golden Wela Kaweng floral geometry honors interdependence, hospitality, and ancestral wisdom.',
    },
    materials: {
      id: 'Kapas Tenun Tangan, Benang Pakan Emas Halus, Pewarna Indigo Pekat',
      en: 'Handwoven Cotton, Fine Metallic Gold Weft Thread, Deep Indigo Ground',
    },
    dimensions: '210 cm × 115 cm',
    craftingDuration: { id: '2 hingga 3 Bulan Pengerjaan', en: '2 to 3 Months on Traditional Loom' },
    careNotes: {
      id: 'Angin-anginkan secara berkala; jangan disetrika langsung pada bagian sulaman benang emas.',
      en: 'Air periodically in shade; iron on reverse side using a pressing cloth over metallic threads.',
    },
    flightPackingNote: {
      id: 'Digulung bebas lipatan tajam dalam selongsong pelindung agar sulaman tetap rata.',
      en: 'Rolled crease-free around an archival core tube so supplementary threads remain pristine.',
    },
  },
  {
    id: 'tenun-manggarai-lipa-songke-wela-runu',
    catalogNumber: 'NO. 06',
    accessionNo: 'NAS-MGR-06',
    category: 'tenun',
    categoryLabel: { id: 'Tenun Manggarai', en: 'Handwoven Tenun Manggarai' },
    heritageKicker: { id: 'DESA ADAT LERENG WAE REBO & TODO', en: 'WAE REBO & TODO VILLAGE LOOMS' },
    title: {
      id: 'Selendang & Lipa Songke Motif Wela Runu',
      en: 'Manggarai Lipa Songke — Wela Runu & Jok Motif',
    },
    origin: { id: 'Wae Rebo & Satarmese, Kabupaten Manggarai, Flores', en: 'Wae Rebo & Satarmese, Manggarai Regency, Flores' },
    artisanGroup: { id: 'Komunitas Penenun Lereng Wae Rebo & Todo', en: 'Wae Rebo & Todo Highland Weavers' },
    availabilityStatus: { id: 'MAESTERPIS TERBATAS', en: 'LIMITED MASTERPIECE' },
    badgeVariant: 'terracotta',
    priceRangeLabel: {
      id: 'Kisaran Pengrajin Langsung: Rp 180.000 – Rp 1.450.000',
      en: 'Direct Artisan Range: Rp 180.000 – Rp 1.450.000',
    },
    gridSpanClass: 'lg:col-span-5',
    aspectClass: 'aspect-[16/10]',
    image: HOTLINK_IMAGES.tenun,
    shortStory: {
      id: 'Tenun tangan khas desa adat pegunungan Manggarai dengan motif Wela Runu (bunga kecil pegunungan) dan garis geometris Jok yang sarat makna kesatuan adat.',
      en: 'Handwoven textile from the misty mountain villages of Manggarai featuring Wela Runu highland blossoms and sacred Jok geometric borders.',
    },
    fullNarrative: {
      id: 'Ditenun di desa-desa pegunungan sekitar Wae Rebo dan Satarmese, Lipa Songke motif Wela Runu menggambarkan keindahan bunga-bunga kecil di lereng gunung yang tetap mekar tangguh di tengah kabut dingin. Garis-garis geometris Jok melambangkan kesatuan adat dan ikatan kekeluargaan masyarakat Manggarai yang kokoh.',
      en: 'Woven in the mountain villages surrounding Wae Rebo and Satarmese, the Wela Runu motif celebrates the resilient tiny mountain blossoms that thrive amidst highland mist, while the Jok geometric borders signify ancestral unity across Manggarai.',
    },
    materials: {
      id: 'Kapas Pilihan Pintal Tangan, Pewarna Alam Akar Mengkudu, Kunyit & Tarum',
      en: 'Fine Hand-spun Cotton, Natural Morinda Root, Turmeric & Indigo Dyes',
    },
    dimensions: '205 cm × 112 cm',
    craftingDuration: { id: '4 Bulan Penenunan Manual', en: '4 Months of Highland Loom Weaving' },
    careNotes: {
      id: 'Hindari paparan sinar matahari langsung secara terus-menerus saat dipajang di dinding.',
      en: 'Avoid prolonged direct harsh sunlight when displayed as a wall tapestry.',
    },
    flightPackingNote: {
      id: 'Dikemas vakum lembut atau tabung galeri lengkap dengan kisah tertulis asal desa pembuatnya di Manggarai.',
      en: 'Packed in a protective gallery sleeve accompanied by a printed provenance card naming its Manggarai village of origin.',
    },
  },
];

export const VISITOR_REVIEWS: VisitorReview[] = [
  {
    id: 'rev-1',
    author: 'Claire W.',
    initials: 'CW',
    origin: 'Sydney, Australia',
    visitedDate: { id: 'Oktober 2026 · Google Maps Review', en: 'October 2026 · Google Maps Review' },
    purchasedItem: { id: 'Tenun Songke Manggarai & Patung Komodo Jati', en: 'Manggarai Songke Weaving & Teak Komodo Carving' },
    rating: 5,
    quote: {
      id: 'Toko paling autentik di Labuan Bajo. Pemilik menyiapkan peti kayu ringan yang aman untuk penerbangan pulang kami ke Sydney!',
      en: 'The most authentic store in Labuan Bajo. The owner packed our Komodo carving in an airline-safe crate for our flight home to Sydney!',
    },
  },
  {
    id: 'rev-2',
    author: 'Andi Suryo',
    initials: 'AS',
    origin: 'Jakarta, Indonesia',
    visitedDate: { id: 'November 2026 · Google Maps Review', en: 'November 2026 · Google Maps Review' },
    purchasedItem: { id: 'Lipa Songke Manggarai & Mutiara Laut Flores', en: 'Manggarai Lipa Songke & Flores South Sea Pearls' },
    rating: 5,
    quote: {
      id: 'Sangat rekomen buat yang cari kain tenun asli NTT bukan printing pabrik. Penjelasannya sangat detail mengenai filosofi motif Tenun Manggarai.',
      en: 'Highly recommended for anyone seeking genuine handwoven NTT textiles rather than factory prints. Very detailed explanation of Manggarai motifs.',
    },
  },
  {
    id: 'rev-3',
    author: 'Lena H.',
    initials: 'LH',
    origin: 'Munich, Germany',
    visitedDate: { id: 'September 2026 · Google Maps Review', en: 'September 2026 · Google Maps Review' },
    purchasedItem: { id: 'Mutiara Laut Selatan Emas & Anyaman', en: 'Golden South Sea Pearls & Basketry' },
    rating: 5,
    quote: {
      id: 'Mutiara air laut emas alami dengan sertifikat keaslian. Suasana galeri yang tenang tanpa paksaan belanja sama sekali.',
      en: 'Authentic golden sea pearls with genuine certificates. Calm gallery vibe with zero aggressive sales pressure.',
    },
  },
  {
    id: 'rev-4',
    author: 'Kenji Takahashi',
    initials: 'KT',
    origin: 'Kyoto, Japan',
    visitedDate: { id: 'Agustus 2026 · Google Maps Review', en: 'August 2026 · Google Maps Review' },
    purchasedItem: { id: 'Tenun Manggarai Motif Wela Runu', en: 'Manggarai Wela Runu Highland Textile' },
    rating: 5,
    quote: {
      id: 'Sebagai pecinta tekstil tradisional, saya sangat menghargai kurasi Tenun Manggarai di Nur Art Shop. Serat kapas pintal tangan dan detail sulaman motif Wela Kaweng terasa begitu autentik.',
      en: 'As an admirer of traditional heritage textiles, I deeply respect the Manggarai textile curation at Nur Art Shop. You can immediately feel the hand-spun cotton texture.',
    },
  },
];

export const UI_COPY = {
  nav: {
    collection: { id: 'Koleksi', en: 'Collections' },
    priceGuide: { id: 'Panduan Harga', en: 'Price Guide' },
    story: { id: 'Cerita Kami', en: 'Our Story' },
    visit: { id: 'Panduan Kunjungan', en: 'Plan Your Visit' },
    reviews: { id: 'Ulasan Pengunjung', en: 'Visitor Reviews' },
    storeLocationCta: { id: 'PETUNJUK ARAH', en: 'GET DIRECTIONS' },
  },
  hero: {
    overline: {
      id: 'GALERI SENI & TENUN MANGGARAI AUTENTIK · LABUAN BAJO',
      en: 'AUTHENTIC MANGGARAI WEAVING & NTT FINE CRAFT GALLERY · LABUAN BAJO',
    },
    headline: {
      id: 'Warisan Tangan Pengrajin Manggarai & Flores, Terkurasi di Jantung Labuan Bajo.',
      en: 'Living Heritage of Manggarai & Flores Artisans, Curated in the Heart of Labuan Bajo.',
    },
    subheadline: {
      id: 'Seluruh koleksi tenun Songke Manggarai asli, ukiran kayu jati Pulau Komodo, dan mutiara laut Flores kami hadir secara eksklusif untuk Anda sentuh dan rasakan langsung di galeri fisik kami.',
      en: 'Every authentic handwoven Manggarai Songke textile, seasoned teak Komodo sculpture, and Flores South Sea pearl is presented exclusively in our physical gallery—meant to be felt, experienced, and carried home in person.',
    },
    primaryCta: {
      id: 'Kunjungi Toko Kami (Google Maps)',
      en: 'Get Directions in Google Maps',
    },
    secondaryCta: {
      id: 'Tanya Ketersediaan via WhatsApp',
      en: 'Inquire via WhatsApp Concierge',
    },
    operationalBar: {
      hoursLabel: { id: 'Buka Setiap Hari', en: 'Open Daily' },
      hoursValue: { id: '08.30 – 21.30 WITA (Termasuk Akhir Pekan & Hari Libur)', en: '08:30 – 21:30 WITA (Including Weekends & Holidays)' },
      airportLabel: { id: 'Dari Bandara Komodo', en: 'From Komodo Airport' },
      airportValue: { id: '10 Menit Berkendara (3,8 km)', en: '10 Mins Drive (3.8 km)' },
      harborLabel: { id: 'Dari Pelabuhan Marina', en: 'From Marina Harbor' },
      harborValue: { id: '3 Menit Jalan Kaki (450 m)', en: '3 Mins Walk (450 m)' },
      exclusivityLabel: { id: 'Model Galeri', en: 'Gallery Model' },
      exclusivityValue: { id: 'Penjualan Tatap Muka Eksklusif (Tanpa E-Commerce)', en: 'In-Store Exclusive Experience (Offline Boutique)' },
    },
  },
  lookbook: {
    overline: {
      id: 'KATALOG KURASI · VOL. IV / KOLEKSI GALERI FISIK',
      en: 'CURATED LOOKBOOK · VOL. IV / IN-GALLERY ARCHIVE',
    },
    title: {
      id: 'Karya Seni yang Memiliki Jiwa & Asal-Usul',
      en: 'Artisanal Works with Provenance & Soul',
    },
    subtitle: {
      id: 'Kami tidak menjual barang secara daring. Karena setiap tenun Songke Manggarai dan ukiran tangan memiliki karakter serat yang unik, katalog ini dirancang sebagai panduan visual sebelum Anda singgah di galeri kami.',
      en: 'We do not operate an online checkout. Because every handwoven Manggarai textile and wood carving carries a one-of-a-kind tactile character, this lookbook serves as your visual preview before visiting our Labuan Bajo gallery.',
    },
    categories: {
      all: { id: 'SEMUA KARYA', en: 'ALL WORKS' },
      tenun: { id: 'TENUN TANGAN MANGGARAI', en: 'HANDWOVEN TENUN MANGGARAI' },
      ukiran: { id: 'PATUNG KAYU KOMODO', en: 'WOODEN KOMODO SCULPTURES' },
      mutiara: { id: 'MUTIARA LAUT SELATAN', en: 'SOUTH SEA PEARLS' },
      anyaman: { id: 'KERAJINAN ROTAN & LONTAR', en: 'NATURAL RATTAN CRAFTS' },
    },
    viewDetailLabel: {
      id: 'Baca Kisah & Detail Karya',
      en: 'Explore Provenance & Details',
    },
    inquireItemLabel: {
      id: 'Tanya Ketersediaan Karya Ini',
      en: 'Ask Availability In-Store',
    },
    priceGuide: {
      overline: {
        id: 'KERAJINAN LANGSUNG YANG JUJUR & TERJANGKAU',
        en: 'HONEST & AFFORDABLE DIRECT CRAFT',
      },
      title: {
        id: 'Panduan Harga Transparan di Toko',
        en: 'Transparent In-Store Price Guide',
      },
      description: {
        id: 'Bekerja langsung dengan komunitas penenun desa Manggarai dan pengukir lokal, Nur Art Shop menghadirkan kualitas asli dengan harga jujur, transparan, dan bersahabat tanpa mark-up turis.',
        en: 'By working directly with village weaver communities and local carvers, Nur Art Shop offers genuine quality at fair, transparent, and pocket-friendly prices without tourist markups.',
      },
      cards: [
        {
          id: 'pg-textile',
          tag: { id: 'TEKSTIL', en: 'TEXTILE' },
          title: { id: 'Tenun Manggarai Asli', en: 'Tenun Manggarai Asli' },
          desc: {
            id: 'Selendang leher, sarung tenun Songke Manggarai, hingga kain lembaran pusaka pewarna alami.',
            en: 'Neck scarves, handwoven Manggarai Songke sarongs, to heirloom natural-dyed textiles.',
          },
          rangeLabel: { id: 'RENTANG HARGA', en: 'PRICE RANGE' },
          price: 'Rp 250rb – Rp 1,8jt',
          accentColor: 'terracotta',
        },
        {
          id: 'pg-woodcraft',
          tag: { id: 'KRIYA KAYU', en: 'WOODCRAFT' },
          title: { id: 'Ukiran Kayu Komodo', en: 'Ukiran Kayu Komodo' },
          desc: {
            id: 'Gantungan kunci kayu, miniatur meja, patung jati sedang, hingga ukiran besar berkotak peti.',
            en: 'Wooden keychains, desk miniatures, medium teak sculptures, to crated master carvings.',
          },
          rangeLabel: { id: 'RENTANG HARGA', en: 'PRICE RANGE' },
          price: 'Rp 75rb – Rp 950rb',
          accentColor: 'terracotta',
        },
        {
          id: 'pg-jewelry',
          tag: { id: 'PERHIASAN', en: 'JEWELRY' },
          title: { id: 'Mutiara Laut Flores', en: 'Mutiara Laut Flores' },
          desc: {
            id: 'Cincin perak mutiara, anting emas alami, gelang mutiara barok bersertifikat resmi.',
            en: 'Silver pearl rings, natural golden earrings, certified baroque South Sea pearl bracelets.',
          },
          rangeLabel: { id: 'RENTANG HARGA', en: 'PRICE RANGE' },
          price: 'Rp 150rb – Rp 2,5jt',
          accentColor: 'teal',
        },
        {
          id: 'pg-handicraft',
          tag: { id: 'KERAJINAN', en: 'HANDICRAFT' },
          title: { id: 'Anyaman & Souvenir', en: 'Anyaman & Souvenir' },
          desc: {
            id: 'Tatakan gelas rotan, kotak anyaman suvenir, dompet tenun koin, dan tas selempang.',
            en: 'Rattan coasters, woven keepsake boxes, handwoven coin pouches, and sling bags.',
          },
          rangeLabel: { id: 'RENTANG HARGA', en: 'PRICE RANGE' },
          price: 'Rp 35rb – Rp 350rb',
          accentColor: 'terracotta',
        },
      ],
      footerGuarantee: {
        id: '100% Harga Pengrajin Tetap • Tanpa Mark-up Turis • Termasuk Packing Aman',
        en: '100% Fixed Artisan Prices • No Tourist Markups • Safe Packing Included',
      },
      footerCta: {
        id: 'KUNJUNGI TOKO UNTUK MELIHAT',
        en: 'VISIT STORE TO INSPECT',
      },
      quoteBanner: {
        quote: {
          id: '"Setiap karya di Nur Art Shop menyimpan tarikan napas, keringat, dan warisan leluhur dari pengrajin Manggarai & Flores yang hidup."',
          en: '"Every piece at Nur Art Shop carries the tactile breath, sweat, and ancestral legacy of a living Flores artisan."',
        },
        sublabel: {
          id: 'DIKURASI SECARA EKSKLUSIF UNTUK PENEMUAN LANGSUNG DI LABUAN BAJO',
          en: 'CURATED EXCLUSIVELY FOR IN-PERSON DISCOVERY IN LABUAN BAJO',
        },
        cta: {
          id: 'RENCANAKAN RUTE',
          en: 'PLAN YOUR ROUTE',
        },
      },
    },
  },
  story: {
    badgeTop: {
      id: '100% ASLI',
      en: '100% GENUINE',
    },
    badgeSub: {
      id: 'Langsung dari Pengrajin',
      en: 'Direct Artisan Sourced',
    },
    overline: {
      id: 'ASAL-USUL & WARISAN KAMI',
      en: 'OUR PROVENANCE & HERITAGE',
    },
    title: {
      id: 'Melestarikan Warisan Asli Manggarai & Flores di Atas Suvenir Massal',
      en: 'Preserving Genuine Flores Heritage Over Mass Souvenirs',
    },
    leadParagraph: {
      id: 'Di kota wisata yang kian dipenuhi kain sintetis cetakan mesin dan replika plastik impor, Nur Art Shop hadir sebagai penjaga setia karya seni autentik Manggarai dan Nusa Tenggara Timur.',
      en: 'In a tourist town rapidly filled with machine-printed synthetic fabrics and imported plastic replicas, Nur Art Shop stands as a dedicated guardian of authentic Manggarai and East Nusa Tenggara artistry.',
    },
    bodyParagraph1: {
      id: 'Selama lebih dari satu dekade, butik fisik kami di Labuan Bajo bekerja secara tatap muka langsung dengan penenun desa di Manggarai, Cibal, Ruteng, Wae Rebo, Ende, dan Sumba, serta maestro pengukir yang telah memahat kayu jati lokal lintas generasi. Kami memotong rantai tengkulak agar apresiasi yang adil sampai langsung ke tangan para ibu penenun penjaga kearifan leluhur.',
      en: 'For more than a decade, our physical boutique in Labuan Bajo has worked face-to-face with remote weavers in Manggarai, Cibal, Wae Rebo, Ende, and Sumba, as well as master woodcarvers who have shaped local teak for generations. We bypass middlemen to ensure fair wages reach the artisan matriarchs whose hands keep centuries of ancestral wisdom alive.',
    },
    bodyParagraph2: {
      id: 'Kami memilih untuk tidak menjual melalui keranjang belanja daring yang kaku. Karya kriya sejati membutuhkan pancaindra: merasakan tegangan halus benang kapas pintal tangan, mencium aroma fermentasi alami daun tarum indigo, dan mendengar langsung kisah di balik pahatan pengukir di toko kami.',
      en: 'We choose not to sell through an impersonal online cart. Authentic craft requires the senses: feeling the subtle tension of hand-spun cotton, smelling the earthy fermentation of natural indigo, and hearing the story behind the carver’s chisel directly in our shop.',
    },
    highlights: [
      {
        title: { id: '100% Pewarna Alami', en: '100% Natural Dyes' },
        desc: {
          id: 'Diekstrak dari daun tarum indigo, kunyit, dan kulit akar mengkudu.',
          en: 'Extracted from indigo leaves, turmeric, and root bark.',
        },
      },
      {
        title: { id: 'Kemitraan Desa Langsung', en: 'Direct Village Trade' },
        desc: {
          id: 'Memberdayakan penenun perempuan lokal di Manggarai & kabupaten NTT.',
          en: 'Empowering local women weavers across Manggarai & NTT regencies.',
        },
      },
    ],
  },
  visit: {
    overline: {
      id: 'PANDUAN KUNJUNGAN · RENCANAKAN SINGGAH ANDA',
      en: 'PLAN YOUR VISIT · VISITOR CONCIERGE GUIDE',
    },
    title: {
      id: 'Singgah dengan Tenang Sebelum Penerbangan atau Pelayaran Anda',
      en: 'Visit Effortlessly Before Your Flight or Phinisi Voyage',
    },
    subtitle: {
      id: 'Terletak strategis di koridor utama Jl. Soekarno Hatta, Kampung Tengah, Labuan Bajo, galeri kami sangat mudah dijangkau baik dari pelabuhan kapal wisata maupun dalam perjalanan menuju Bandara Internasional Komodo.',
      en: 'Conveniently situated on Jl. Soekarno Hatta, Kampung Tengah, Labuan Bajo, our gallery is an easy stop whether you are disembarking at the marina or heading to Komodo International Airport.',
    },
    addressHeading: { id: 'Alamat Galeri Fisik', en: 'Physical Gallery Address' },
    landmarksHeading: { id: 'Patokan Jarak & Waktu Tempuh', en: 'Distance from Key Landmarks' },
    landmarks: [
      {
        place: { id: 'Bandara Internasional Komodo (LBJ)', en: 'Komodo International Airport (LBJ)' },
        time: { id: '10 Menit Berkendara (3,8 km)', en: '10 Minutes by Car / Taxi (3.8 km)' },
        note: { id: 'Sangat ideal untuk mampir sebelum jadwal check-in pesawat', en: 'Ideal stop on your way to airport check-in' },
      },
      {
        place: { id: 'Pelabuhan Marina & Dermaga Kampung Ujung', en: 'Labuan Bajo Marina & Phinisi Harbor' },
        time: { id: '3 Menit Jalan Kaki (450 meter)', en: '3 Minutes Walk along the Waterfront (450 m)' },
        note: { id: 'Tepat di jalur utama setelah turun dari kapal phinisi', en: 'Right along the main promenade after disembarking your boat' },
      },
      {
        place: { id: 'Pusat Kuliner Malam Kampung Ujung', en: 'Kampung Ujung Culinary Waterfront' },
        time: { id: '1 Menit Jalan Kaki (120 meter)', en: '1 Minute Walk (120 meters)' },
        note: { id: 'Nyaman dikunjungi sore atau malam hari seusai makan malam', en: 'Convenient evening stroll before or after dinner' },
      },
    ],
    hoursHeading: { id: 'Jam Operasional Harian', en: 'Daily Opening Hours' },
    hoursSchedule: [
      {
        days: { id: 'Senin – Jumat', en: 'Monday – Friday' },
        time: '08:30 – 21:30 WITA',
      },
      {
        days: { id: 'Sabtu, Minggu & Hari Libur Nasional', en: 'Saturday, Sunday & Public Holidays' },
        time: '08:30 – 21:30 WITA',
      },
    ],
    hoursFootnote: {
      id: 'Ingin berkunjung lebih pagi sebelum jadwal penerbangan pagi? Hubungi WhatsApp kami sehari sebelumnya.',
      en: 'Catching an early morning flight? Message our WhatsApp concierge a day ahead for an early private opening.',
    },
    facilitiesHeading: { id: 'Fasilitas & Kenyamanan Wisatawan', en: 'Traveler Amenities & In-Store Services' },
    facilities: [
      {
        title: { id: 'Pembayaran Lengkap (QRIS & Kartu Kredit)', en: 'Cashless Ready (Visa, Mastercard & QRIS)' },
        desc: {
          id: 'Menerima Visa, Mastercard, JCB, Kartu Debit semua bank, QRIS, serta tunai Rupiah.',
          en: 'We accept international Visa, Mastercard, JCB credit cards, domestic debit, QRIS, and IDR cash.',
        },
      },
      {
        title: { id: 'Safe Flight & Luggage Packaging', en: 'Safe Flight & Cabin/Check-In Packaging' },
        desc: {
          id: 'Pengemasan gratis dengan busa pelindung, kardus keras, atau tabung tenun agar aman di bagasi pesawat.',
          en: 'Complimentary heavy-duty wrapping, shock-proof boxes, and textile tubes ready for airline baggage.',
        },
      },
      {
        title: { id: 'Jaminan Keaslian & Penitipan Koper Sementara', en: '100% Authentic Craft & Luggage Corner' },
        desc: {
          id: 'Jaminan tenun tangan asli (bukan printing) serta tempat penitipan koper sementara saat Anda memilih koleksi.',
          en: 'Guaranteed authentic handwoven textiles alongside a dedicated luggage corner while you browse comfortably.',
        },
      },
      {
        title: { id: 'Area Parkir Mobil Travel & HiAce', en: 'Easy Drop-Off & Travel Van Parking' },
        desc: {
          id: 'Akses mudah untuk mobil jemputan hotel, taksi bandara, maupun minibus rombongan wisata.',
          en: 'Convenient curbside pull-in for hotel shuttles, airport taxis, and private tour vans.',
        },
      },
    ],
    mapCardTitle: { id: 'Navigasi Langsung ke Nur Art Shop', en: 'Direct Navigation to Nur Art Shop' },
    mapOpenBtn: { id: 'Buka Rute di Aplikasi Google Maps', en: 'Open Turn-by-Turn Route in Google Maps' },
    whatsappVisitBtn: { id: 'Konfirmasi Jam Buka Hari Ini via WhatsApp', en: 'Confirm Today’s Hours via WhatsApp' },
  },
  reviews: {
    overline: {
      id: 'JEJAK PENGUNJUNG & ULASAN GOOGLE MAPS',
      en: 'VISITOR MEMORIES & GOOGLE MAPS REVIEWS',
    },
    title: {
      id: 'Dipercaya oleh Kolektor & Wisatawan dari Berbagai Penjuru Dunia',
      en: 'Trusted by Discerning Travelers & Cultural Collectors Worldwide',
    },
    basedOnText: {
      id: 'Berdasarkan 148+ ulasan terverifikasi pengunjung toko fisik di Google Maps',
      en: 'Based on 148+ verified in-store visitor reviews on Google Maps',
    },
    viewAllMapsBtn: {
      id: 'Lihat Semua Ulasan di Google Maps',
      en: 'Read All Reviews on Google Maps',
    },
  },
  whatsapp: {
    floatingLabel: {
      id: 'Tanya Stok & Jam Buka',
      en: 'Ask Stock & Opening Hours',
    },
    generalPrefill: {
      id: 'Halo Nur Art Shop Labuan Bajo, saya melihat katalog di website dan ingin menanyakan jam buka toko hari ini serta ketersediaan koleksi.',
      en: 'Hello Nur Art Shop Labuan Bajo, I viewed your online lookbook and would like to confirm today’s opening hours and collection availability.',
    },
    itemPrefillPrefix: {
      id: 'Halo Nur Art Shop Labuan Bajo, saya melihat katalog di website dan ingin menanyakan ketersediaan karya berikut di toko fisik: ',
      en: 'Hello Nur Art Shop Labuan Bajo, I was browsing your lookbook and would like to ask if this piece is currently available in your gallery: ',
    },
  },
};
