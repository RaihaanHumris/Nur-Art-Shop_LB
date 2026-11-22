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
  whatsappNumber: '6282144191140',
  phoneDisplay: '+62 821-4419-1140',
  coordinates: '8°29\'38.4"S 119°52\'42.5"E',
  rating: '5.0',
  reviewCount: '180+',
};

export const HOTLINK_IMAGES = {
  hero: '/images/hero.webp',
  heroMobile: '/images/hero_mobile.webp',
  tenun: '/images/tenun.webp',
  komodo: '/images/komodo.webp',
  pearls: '/images/pearls.webp',
  rattan: '/images/rattan.webp',
  selendang: '/images/selendang.webp',
  storyWeaver: '/images/weaver.webp',
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
      id: 'Kain Tenun Songke Manggarai Motif Ntala & Wela',
      en: 'Handwoven Manggarai Songke — Ntala & Wela Motif',
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
      id: 'Kain Lipa Songke Manggarai berlatar hitam pekat dengan deretan sulaman benang warna-warni motif bintang (Ntala), bunga (Wela Kaweng), dan lajur garis geometris Jok asli tenunan tangan.',
      en: 'Authentic deep-black Manggarai Lipa Songke woven by hand with vibrant multi-colored supplementary weft rows of Ntala stars, Wela blossoms, and traditional Jok geometric stripes.',
    },
    fullNarrative: {
      id: 'Setiap helai kain Lipa Songke Manggarai ini ditenun secara manual menggunakan alat tenun tradisional oleh ibu-ibu penenun di Manggarai. Latar warna hitam pekat melambangkan kebesaran bumi dan keteguhan hati, sedangkan deretan motif warna-warni Ntala (bintang) serta Wela (bunga pegunungan) melambangkan harapan, sukacita, dan doa restu leluhur.',
      en: 'Each Manggarai Lipa Songke textile is handwoven on traditional looms by master women weavers in Manggarai. The deep black ground represents Mother Earth and steadfastness, while the vibrant rows of Ntala (star) and Wela (blossom) motifs celebrate hope, kinship, and ancestral blessings.',
    },
    materials: {
      id: '100% Benang Kapas Pilihan, Dasar Hitam Pekat & Sulam Benang Songke Timbul',
      en: '100% Fine Artisanal Cotton, Deep Black Ground & Raised Songke Weft Brocade',
    },
    dimensions: '220 cm × 118 cm',
    craftingDuration: { id: '2 hingga 4 Bulan Pengerjaan Tangan', en: '2 to 4 Months of Handweaving' },
    careNotes: {
      id: 'Cuci lembut dengan air dingin tanpa deterjen pemutih, jemur di tempat teduh berangin.',
      en: 'Gentle cold hand-wash without bleach; air dry in shaded coastal breeze.',
    },
    flightPackingNote: {
      id: 'Dilipat rapi dengan pelindung bebas lembap agar sulaman benang timbul Songke tetap utuh di bagasi kabin.',
      en: 'Folded with protective tissue and sealed in a travel sleeve suitable for cabin luggage.',
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
      id: 'Patung Ukiran Komodo Kayu Pahat Tangan',
      en: 'Hand-Carved Wooden Komodo Dragon Sculptures',
    },
    origin: { id: 'Pulau Komodo & Labuan Bajo, Manggarai Barat', en: 'Komodo Island & West Manggarai' },
    artisanGroup: { id: 'Pengukir Pesisir Kampung Komodo', en: 'Kampung Komodo Coastal Master Carvers' },
    availabilityStatus: { id: 'TERSEDIA DI GALERI', en: 'AVAILABLE IN GALLERY' },
    badgeVariant: 'terracotta',
    priceRangeLabel: {
      id: 'Kisaran Pengrajin Langsung: Rp 75.000 – Rp 950.000',
      en: 'Direct Artisan Range: Rp 75.000 – Rp 950.000',
    },
    gridSpanClass: 'lg:col-span-5',
    aspectClass: 'aspect-[16/10]',
    image: HOTLINK_IMAGES.komodo,
    shortStory: {
      id: 'Karya pahat tangan khas Pulau Komodo dan Labuan Bajo dengan detail pahatan ribuan sisik kulit, cakar kokoh, dan ekspresi hidup. Tersedia pose tunggal maupun sepasang komodo.',
      en: 'Hand-chiselled wooden Komodo sculptures crafted by local island carvers featuring thousands of finely textured dermal scales, sturdy claws, and lifelike standing or single poses.',
    },
    fullNarrative: {
      id: 'Dikerjakan langsung oleh pengrajin pahat kayu dari Pulau Komodo dan pesisir Labuan Bajo. Setiap detail lekuk tubuh, cakar, mata, hingga tekstur ribuan sisik kulit komodo dipahat satu per satu secara manual menggunakan pahat besi tempa dari kayu tua pilihan yang awet dan tidak mudah retak.',
      en: 'Sculpted by experienced woodcarvers from Komodo Island and Labuan Bajo. Every contour, claw, and scale texture is individually chiselled by hand from seasoned local hardwood so each sculpture carries authentic artisan character.',
    },
    materials: {
      id: 'Kayu Tua Solid Pilihan Flores & Poles Alami Halus',
      en: 'Solid Seasoned Flores Hardwood & Hand-Burnished Finish',
    },
    dimensions: 'Tersedia ukuran meja 20 cm hingga pajangan 55 cm',
    craftingDuration: { id: '1 hingga 3 Minggu Pemahatan Detail', en: '1 to 3 Weeks of Fine Hand-Chiseling' },
    careNotes: {
      id: 'Usap dengan kain kering lembut; oleskan sedikit minyak kayu alami setahun sekali.',
      en: 'Dust with a soft dry cloth; apply a drop of natural wood oil annually.',
    },
    flightPackingNote: {
      id: 'Dibungkus bubble-wrap berlapis tebal dan kotak kardus kaku aman untuk bagasi pesawat.',
      en: 'Wrapped in multi-layer protective bubble foam and rigid carton for safe flight check-in.',
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
      id: 'Gelang & Perhiasan Mutiara Asli Flores',
      en: 'Authentic Flores Pearl Bangle & Jewelry',
    },
    origin: { id: 'Perairan Selat Molo & Kepulauan Komodo, Manggarai Barat', en: 'Molo Strait & Komodo Waters, West Manggarai' },
    artisanGroup: { id: 'Pengrajin Mutiara & Perak Pesisir Labuan Bajo', en: 'Labuan Bajo Coastal Pearl & Silver Artisans' },
    availabilityStatus: { id: 'LENGKAP KOTAK DISPLAY', en: 'DISPLAY CASE INCLUDED' },
    badgeVariant: 'teal',
    priceRangeLabel: {
      id: 'Kisaran Panen Langsung: Rp 150.000 – Rp 2.500.000',
      en: 'Direct Harvest Range: Rp 150.000 – Rp 2.500.000',
    },
    gridSpanClass: 'lg:col-span-5',
    aspectClass: 'aspect-[16/10]',
    image: HOTLINK_IMAGES.pearls,
    shortStory: {
      id: 'Rangkaian gelang lilit, kalung, dan anting mutiara asli Flores dengan kilau nakre lembut alami, dirangkai kokoh dengan ornamen perak dan dikemas dalam kotak bingkai transparan eksklusif.',
      en: 'Handcrafted multi-wrap pearl bangles, necklaces, and earrings featuring lustrous natural Flores pearls accented with silver spacers and presented in a clear floating display frame.',
    },
    fullNarrative: {
      id: 'Perairan jernih di sekitar Labuan Bajo dan kepulauan Manggarai Barat menghasilkan mutiara dengan rona kilau putih, krem keemasan, dan peach alami yang anggun. Setiap gelang dan perhiasan mutiara di Nur Art Shop dirangkai dengan teliti serta dilengkapi kotak bingkai pelindung transparan (floating display frame) yang elegan dan aman dibawa di tas kabin.',
      en: 'The pristine waters surrounding Labuan Bajo yield pearls with a warm cream, peach, and white natural orient. Each bracelet and jewelry piece at Nur Art Shop is carefully strung with silver-toned accents and housed inside a protective transparent floating display frame ready for gifting or travel.',
    },
    materials: {
      id: 'Mutiara Asli Budidaya Perairan Flores, Rangka Lilit & Ornamen Perak Pilihan',
      en: 'Genuine Flores Cultured Pearls, Silver-Plated/925 Wire Mount & Display Frame',
    },
    dimensions: 'Diameter Mutiara 8 mm – 11 mm | Kotak Display 9 × 9 cm',
    craftingDuration: { id: 'Budidaya Laut & Perakitan Tangan Presisi', en: 'Marine Cultivation & Hand-Strung Assembly' },
    careNotes: {
      id: 'Hindari semprotan parfum langsung; simpan di dalam kotak bingkai pelindung saat tidak dipakai.',
      en: 'Keep away from direct perfume spray; store inside the protective display frame when not worn.',
    },
    flightPackingNote: {
      id: 'Sudah termasuk kotak bingkai pelindung kedap guncangan yang sangat aman untuk tas kabin pesawat.',
      en: 'Includes the shock-absorbing floating display frame case ideal for carry-on luggage.',
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
    heritageKicker: { id: 'SYAL & SELENDANG TENUN MANGGARAI', en: 'HANDWOVEN MANGGARAI SHAWLS & SCARVES' },
    title: {
      id: 'Selendang & Syal Tenun Songke Manggarai',
      en: 'Handwoven Manggarai Songke Shawls & Scarves',
    },
    origin: { id: 'Ruteng, Cibal & Lembor, Manggarai, Flores', en: 'Ruteng, Cibal & Lembor, Manggarai, Flores' },
    artisanGroup: { id: 'Komunitas Penenun Perempuan Manggarai', en: 'Manggarai Women Weavers Collective' },
    availabilityStatus: { id: 'FAVORIT WISATAWAN', en: 'TRAVELER FAVORITE' },
    badgeVariant: 'terracotta',
    priceRangeLabel: {
      id: 'Kisaran Pengrajin Langsung: Rp 65.000 – Rp 350.000',
      en: 'Direct Artisan Range: Rp 65.000 – Rp 350.000',
    },
    gridSpanClass: 'lg:col-span-5',
    aspectClass: 'aspect-[16/10]',
    image: HOTLINK_IMAGES.selendang,
    shortStory: {
      id: 'Pilihan selendang bahu, syal leher, dan ikat kepala tenun tangan asli Manggarai dengan ragam warna tepi cerah serta motif geometris tradisional. Ringan dan mudah dibawa sebagai oleh-oleh.',
      en: 'Handwoven Manggarai shoulder shawls, scarves, and headbands featuring vibrant bordered edges and traditional geometric motifs—lightweight and effortless to pack as authentic gifts.',
    },
    fullNarrative: {
      id: 'Selain kain sarung Lipa Songke berukuran penuh, para penenun Manggarai juga menenun selendang dan syal dengan ragam motif geometris khas Flores. Sangat digemari oleh wisatawan yang berkunjung ke Taman Nasional Komodo dan Labuan Bajo baik untuk dikenakan saat berlayar maupun sebagai cendera mata autentik bagi keluarga dan kerabat.',
      en: 'Alongside full-length ceremonial Lipa Songke sarongs, Manggarai artisans weave slender shawls and scarves rich with traditional Flores geometry. Highly sought after by visitors sailing through Komodo National Park or looking for an authentic, wearable keepsake from Labuan Bajo.',
    },
    materials: {
      id: '100% Benang Kapas Tenun Tangan & Rumbai Tradisional',
      en: '100% Handloomed Artisanal Cotton & Hand-Twisted Fringe',
    },
    dimensions: 'Selendang & Syal: Lebar 12–35 cm × Panjang 150–180 cm',
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
      hoursValue: { id: '07.00 – 23.00 WITA (Minggu 08.00 – 23.00 WITA)', en: '07:00 – 23:00 WITA (Sun 08:00 – 23:00 WITA)' },
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
        days: { id: 'Senin – Sabtu', en: 'Monday – Saturday' },
        time: '07:00 – 23:00 WITA',
      },
      {
        days: { id: 'Minggu & Hari Libur Nasional', en: 'Sunday & Public Holidays' },
        time: '08:00 – 23:00 WITA',
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
