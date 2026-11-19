# Product Requirements Document (PRD)
**Nama Produk:** Website Resmi Nur Art Shop Labuan Bajo  
**Tipe Website:** Digital Lookbook, Brand Storytelling & Local Foot-Traffic Driver (*Offline-Only Retail*)  
**Target Peluncuran:** Q4 / Fase 1  

---

## 1. Ringkasan Eksekutif & Tujuan Bisnis
**Nur Art Shop Labuan Bajo** adalah toko seni, kerajinan tangan, dan cendera mata autentik khas Nusa Tenggara Timur (NTT) yang beroperasi secara eksklusif melalui penjualan langsung (tatap muka) di toko fisik.

### Masalah yang Diselesaikan
Wisatawan domestik maupun mancanegara di Labuan Bajo sering kali kesulitan membedakan toko suvenir yang menjual produk asli pengrajin lokal dengan toko barang pabrikan massal. Selain itu, turis membutuhkan kepastian informasi mengenai lokasi, jam buka (terutama menjelang jadwal penerbangan pulang), dan metode pembayaran sebelum memutuskan mampir ke toko fisik.

### Tujuan Utama Website (*Core Objectives*)
1. **Meningkatkan Kunjungan Fisik (*Foot Traffic*):** Mengonversi pengunjung website menjadi pengunjung langsung ke toko melalui integrasi navigasi Google Maps yang mulus.
2. **Membangun Kepercayaan & Persepsi Nilai (*Brand Positioning*):** Menampilkan kualitas dan keaslian karya seni lokal melalui pendekatan *editorial lookbook* yang berkelas.
3. **Memfasilitasi Pertanyaan Pra-Kunjungan:** Memudahkan turis menanyakan ketersediaan barang tertentu atau konfirmasi jam buka melalui WhatsApp sebelum berangkat ke lokasi.

---

## 2. Target Pengguna (User Personas)

### Persona 1: Wisatawan Mancanegara (*International Explorer*)
* **Profil:** Turis asal Eropa, Australia, atau Asia yang berkunjung ke Taman Nasional Komodo.
* **Kebutuhan:** Mencari oleh-oleh autentik berstandar seni tinggi (tenun ikat asli, ukiran kayu, mutiara), membutuhkan informasi dalam bahasa Inggris, dan perlu kepastian apakah toko menerima kartu kredit serta menyediakan layanan *packing* aman untuk penerbangan internasional.
* **Perilaku:** Mencari melalui Google Search / Google Maps dengan kata kunci *"authentic art shop Labuan Bajo"* atau *"Flores ikat weaving shop"*.

### Persona 2: Wisatawan Domestik (*Urban Leisure Traveler*)
* **Profil:** Wisatawan dari Jakarta, Surabaya, Bali, atau kota besar lainnya yang sedang berlibur di Labuan Bajo.
* **Kebutuhan:** Mencari buah tangan khas NTT yang berkualitas sebelum menuju Bandara Komodo, mengecek jam buka di akhir pekan/hari libur, dan memastikan ketersediaan pembayaran non-tunai (QRIS/Debit).
* **Perilaku:** Mengakses website lewat ponsel pintar sambil mencari rute tercepat dari hotel atau pelabuhan.

---

## 3. Ruang Lingkup Fitur (Functional Requirements)

### 3.1. Fitur Wajib (MVP / Phase 1)

| ID | Nama Fitur | Deskripsi & Spesifikasi Fungsional | Kriteria Penerimaan (*Acceptance Criteria*) |
| :--- | :--- | :--- | :--- |
| **F-01** | **Bilingual Support (ID / EN)** | Pengalih bahasa instan (*toggle*) di header untuk seluruh konten teks website (Bahasa Indonesia & Bahasa Inggris). | - Klik tombol `ID` / `EN` mengubah seluruh teks halaman tanpa *reload* yang lambat.<br>- Preferensi bahasa tersimpan selama sesi kunjungan. |
| **F-02** | **Editorial Hero & Direct Maps CTA** | Tampilan pembuka layar penuh (*full-screen*) dengan foto suasana toko, *headline* dwibahasa, dan tombol CTA utama yang membuka rute navigasi langsung di aplikasi Google Maps. | - Tombol *"Kunjungi Toko Kami / Get Directions"* membuka URL spesifik profil Google Maps Nur Art Shop di tab baru atau aplikasi Maps ponsel. |
| **F-03** | **Curated Collection Lookbook** | Galeri katalog produk unggulan yang dikelompokkan berdasarkan kategori (*Tenun Ikat, Ukiran Komodo, Mutiara Laut, Anyaman*) tanpa fitur keranjang belanja atau checkout. | - Pengguna dapat memfilter koleksi berdasarkan kategori.<br>- Setiap item menampilkan foto HD, judul, asal daerah, label *"Tersedia Eksklusif di Toko"*, dan cerita singkat.<br>- Klik item membuka tampilan detail (*modal/lightbox*). |
| **F-04** | **The Story & Authenticity Section** | Halaman/bagian naratif yang menjelaskan kurasi pengrajin lokal NTT dan jaminan keaslian produk. | - Menampilkan teks editorial yang mudah dibaca beserta foto dokumentasi pengrajin/toko. |
| **F-05** | **Plan Your Visit (Panduan Kunjungan)** | Pusat informasi praktis: peta interaktif, patokan jarak dari Bandara Komodo & Pelabuhan Marina, jam operasional (termasuk akhir pekan), dan ikon fasilitas toko (QRIS, Kartu Kredit, *Safe Luggage Packing*, Parkir). | - Peta Google Maps tersemat (*embedded*) berfungsi dengan baik.<br>- Informasi jam buka dan fasilitas terlihat jelas tanpa perlu menggulir terlalu dalam. |
| **F-06** | **WhatsApp Concierge Integration** | Tombol WhatsApp mengambang (*floating*) dan tombol di dalam detail produk dengan pesan otomatis (*pre-filled message*) sesuai bahasa yang dipilih pengguna. | - Klik tombol membuka WhatsApp dengan teks otomatis, contoh (ID): *"Halo Nur Art Shop, saya melihat katalog di website dan ingin menanyakan jam buka / ketersediaan koleksi..."* |
| **F-07** | **Google Reviews & Visitor Social Proof** | Menampilkan rating Google Maps toko dan kutipan ulasan bintang 5 dari pengunjung sebelumnya. | - Menampilkan minimal 3–4 ulasan terkurasi beserta nama pengunjung dan tautan untuk melihat semua ulasan di Google Maps. |

### 3.2. Di Luar Ruang Lingkup (*Out of Scope*)
Untuk menjaga fokus pada model bisnis tatap muka, fitur berikut **tidak** akan dibuat:
* Sistem keranjang belanja (*Shopping Cart*) dan proses *Checkout* online.
* Integrasi *Payment Gateway* online.
* Manajemen stok *real-time* otomatis berbasis SKU (cukup label status manual seperti *Tersedia di Toko* atau *Koleksi Terbatas*).
* Sistem akun pengguna / *Login* pelanggan.

---

## 4. Kebutuhan Non-Fungsional (Non-Functional Requirements)

1. **Performa & Kecepatan Akses:**
   * Koneksi internet seluler di beberapa area wisata Labuan Bajo bisa tidak stabil. Website harus ringan dengan waktu muat awal (*First Contentful Paint*) di bawah **2.5 detik**.
   * Semua gambar galeri wajib menggunakan format modern (`WebP`) dengan teknik *lazy-loading* dan kompresi optimal tanpa merusak detail tekstur karya seni.
2. **Responsivitas (*Mobile-First Design*):**
   * Minimal 80% wisatawan akan mengakses situs ini melalui ponsel pintar saat berada di perjalanan. Tata letak, ukuran tombol sentuh (*tap targets* minimal `44x44px`), dan integrasi ke aplikasi Google Maps/WhatsApp harus dioptimalkan untuk layar mobile.
3. **SEO Lokal & Schema Markup:**
   * Implementasi struktur data **JSON-LD (`LocalBusiness` / `Store`)** yang memuat nama toko, koordinat geografis Labuan Bajo, jam buka, rentang harga, dan tautan Google Business Profile.
   * Optimasi *meta tags* dwibahasa untuk kata kunci lokal seperti *"Nur Art Shop Labuan Bajo"*, *"Toko Oleh-oleh Labuan Bajo"*, *"Art Shop Labuan Bajo"*, dan *"Tenun Ikat Flores"*.

---

## 5. Metrik Keberhasilan (Key Performance Indicators / KPIs)
Keberhasilan website tidak diukur dari transaksi online, melainkan dari **niat kunjungan fisik (*visit intent*)**:

1. **Click-Through Rate (CTR) Tombol "Get Directions / Kunjungi Toko":** Persentase pengunjung website yang mengklik tombol rute Google Maps.
2. **Klik Tombol WhatsApp Konsultasi:** Jumlah interaksi pertanyaan stok atau jam buka yang masuk melalui tombol WhatsApp dari website.
3. **Peningkatan Permintaan Rute di Google Business Profile:** Kenaikan statistik *"Direction Requests"* pada dashboard Google Maps Nur Art Shop setelah website diluncurkan.
4. **Waktu Kunjungan Halaman (*Average Engagement Time*):** Target rata-rata di atas 1 menit 30 detik, menandakan pengunjung menikmati katalog *lookbook* dan membaca panduan kunjungan.

---

## 6. Struktur Konten & Aset yang Dibutuhkan Sebelum Pengembangan
Untuk memulai tahap desain dan *coding*, tim/pemilik toko perlu menyiapkan aset berikut:
* [ ] **Fotografi Utama (10–15 foto):** Foto interior toko yang estetik, fasad depan toko (agar mudah dikenali turis saat mencari lokasi), dan foto pengrajin/staf.
* [ ] **Fotografi Katalog (12–20 item unggulan):** Foto detail tekstur kain tenun, ukiran komodo, mutiara, dan anyaman dengan pencahayaan alami.
* [ ] **Data Operasional:** Titik koordinat Google Maps resmi, nomor WhatsApp admin toko, jadwal buka/tutup harian, serta daftar lengkap metode pembayaran dan layanan *packing* yang tersedia.
* [ ] **Teks Terjemahan:** Naskah cerita toko dan deskripsi singkat produk dalam Bahasa Indonesia dan Bahasa Inggris.