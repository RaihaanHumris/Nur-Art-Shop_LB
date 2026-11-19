# Design System & UI/UX Specification
**Project:** Nur Art Shop Labuan Bajo (Digital Lookbook & Visitor Guide)  
**Concept:** Editorial Boutique & Gallery Showcase  
**Version:** 1.0  

---

## 1. Filosofi Desain & Arah Visual
Website ini dirancang menyerupai majalah gaya hidup, seni, dan budaya (*editorial lookbook*) daripada sebuah toko *e-commerce* konvensional. Karena seluruh transaksi terjadi secara tatap muka (*offline*), antarmuka pengguna (*UI*) harus menghilangkan kesan transaksional (tidak ada harga mencolok, ikon keranjang belanja, atau tombol *checkout*) dan menggantinya dengan narasi visual yang hangat, autentik, dan eksklusif.

* **Atmosfer:** Organik, hangat, berkelas, dan menghargai warisan budaya Nusa Tenggara Timur (NTT).
* **Prinsip Tata Letak:** *Generous whitespace* (ruang kosong yang lega), tipografi bergaya majalah cetak klasik yang dipadukan dengan font modern yang bersih, serta fotografi beresolusi tinggi yang menonjolkan detail tekstur (serat tenun, urat kayu, kilau mutiara).

---

## 2. Palet Warna (Color Palette)
Palet warna terinspirasi langsung dari lanskap alam Flores dan material kerajinan tangan lokal:

| Nama Token | Kode Hex | Penggunaan Utama | Makna & Filosofi |
| :--- | :--- | :--- | :--- |
| **Warm Sand** (Primary Background) | `#F5F0E6` | Latar belakang utama halaman (*canvas*) | Pasir pantai pesisir Labuan Bajo yang hangat dan alami. |
| **Soft Linen** (Secondary Surface) | `#EAE3D5` | Kartu kurasi, bagian ulasan, pemisah blok | Tekstur serat kain tenun alami yang belum diwarnai. |
| **NTT Terracotta** (Primary Accent) | `#A85232` | Tombol CTA utama, label eksklusif, aksen garis | Pewarna alami akar mengkudu pada tenun ikat dan tanah liat Flores. |
| **Deep Ocean Teal** (Secondary Accent) | `#1C4B52` | Tombol sekunder, badge informasi, footer | Kedalaman laut Taman Nasional Komodo. |
| **Dark Espresso** (Primary Text) | `#2B2520` | Teks judul dan paragraf utama | Cokelat kayu jati/asam tua; lebih lembut dan hangat dibanding hitam pekat (`#000`). |
| **Muted Clay** (Secondary Text) | `#6E6359` | Subjudul, keterangan foto (*caption*), metadata | Warna batu karang dan debu tanah alami. |

---

## 3. Tipografi (Typography)
Kombinasi *High-Contrast Serif* untuk judul bergaya galeri seni dan *Humanist Sans-Serif* untuk keterbacaan informasi panduan kunjungan yang optimal di layar ponsel.

### Font Families
* **Heading / Display:** `Cormorant Garamond` atau `Playfair Display` (Google Fonts) — Memberikan nuansa editorial mewah dan artistik.
* **Body / UI Controls:** `Plus Jakarta Sans` (Google Fonts) — Modern, bersih, dan sangat nyaman dibaca dalam ukuran kecil maupun panjang.

### Skala Tipografi (Desktop / Mobile)
* **Hero Headline (H1):** `56px` / `36px` | Line-height: `1.15` | Weight: `600` (SemiBold) | Font: *Cormorant Garamond*
* **Section Title (H2):** `40px` / `28px` | Line-height: `1.2` | Weight: `600` | Font: *Cormorant Garamond*
* **Card / Artwork Title (H3):** `24px` / `20px` | Line-height: `1.3` | Weight: `500` | Font: *Cormorant Garamond*
* **Body Copy:** `16px` / `15px` | Line-height: `1.7` | Weight: `400` | Font: *Plus Jakarta Sans*
* **Editorial Label / Overline:** `12px` | Letter-spacing: `0.15em` | Uppercase | Weight: `600` | Font: *Plus Jakarta Sans*

---

## 4. Komponen UI & Aturan Desain

### A. Navigation Bar (Header)
* **Tipe:** *Sticky transparent-to-solid header* (transparan saat di atas *Hero Section*, berubah menjadi `#F5F0E6` dengan garis bawah halus `#DCD3C4` saat di-scroll).
* **Elemen Kiri:** Logo Nur Art Shop (tipografi monogram atau wordmark elegan).
* **Elemen Tengah:** Tautan navigasi minimalis (`Koleksi`, `Cerita Kami`, `Panduan Kunjungan`, `Ulasan`).
* **Elemen Kanan:**
  * **Language Switcher (`ID | EN`):** Tombol *toggle* ringkas dengan indikator bahasa aktif berwarna `#A85232`.
  * **Mini CTA:** Tautan cepat *"Lokasi Toko"* dengan ikon pin peta kecil.

### B. Tombol (Buttons)
* **Primary CTA ("Kunjungi Toko Kami" / "Get Directions"):**
  * Background: `#A85232` (NTT Terracotta), Teks: `#F5F0E6`, Border-radius: `4px` (sudut sedikit tegas untuk kesan galeri klasik).
  * Padding: `14px 28px`.
  * Hover state: Gelap sedikit ke `#8C4125` dengan transisi `0.3s ease`.
* **Secondary CTA ("Tanya Ketersediaan via WhatsApp"):**
  * Background: Transparent, Border: `1px solid #1C4B52`, Teks: `#1C4B52`.
  * Hover state: Background `#1C4B52`, Teks `#F5F0E6`.

### C. Kartu Kurasi Koleksi (*Lookbook Cards*)
* Tidak menggunakan bayangan tebal (*drop-shadow* berat). Gunakan bingkai bersih tanpa border atau garis tipis `1px solid rgba(43, 37, 32, 0.1)`.
* **Rasio Foto:** Asimetris bergantian antara `4:5` (Portrait) dan `3:4` untuk menciptakan ritme visual seperti halaman majalah.
* **Konten Kartu:**
  1. Badge kecil di pojok atas gambar: *"Tersedia Eksklusif di Toko"* atau *"Koleksi Terbatas"*.
  2. Nama Karya (H3).
  3. Asal Daerah (misal: *Sikka, Flores* atau *Manggarai Barat*).
  4. Narasi singkat 2–3 baris mengenai teknik pembuatan atau filosofi motif.

### D. Floating WhatsApp Concierge
* Terletak di pojok kanan bawah (`bottom: 24px`, `right: 24px`).
* Menggunakan warna `#1C4B52` (Deep Ocean Teal) agar menyatu dengan estetika website (tidak memakai hijau neon standar agar tetap elegan), dilengkapi label teks singkat saat di layar desktop: *"Tanya Stok & Jam Buka"*.

---

## 5. Tata Letak Halaman (Wireframe Blueprint)

1. **Hero Section (100vh):**
   * Foto *full-bleed* interior toko yang hangat atau pengrajin yang sedang menenun, dilapisi gradasi gelap tipis (`rgba(25, 20, 16, 0.45)`) agar teks putih gading terbaca jelas.
   * Posisi teks rata tengah atau rata kiri bawah dengan tombol utama langsung mengarah ke Google Maps.
2. **Curated Gallery / Lookbook (Grid Asimetris 2–3 Kolom):**
   * Filter kategori sederhana di bagian atas: `Semua Koleksi`, `Tenun Ikat`, `Ukiran Komodo`, `Mutiara Laut`, `Anyaman`.
   * Klik pada kartu membuka *Editorial Modal / Lightbox* yang menampilkan foto ukuran penuh dan cerita lengkap karya tersebut.
3. **The Story & Authenticity (Split Layout 50:50):**
   * Kiri: Kolase foto detail tekstur tangan pengrajin dan suasana toko.
   * Kanan: Narasi tentang komitmen Nur Art Shop dalam melestarikan karya asli pengrajin NTT (tanpa barang tiruan/pabrikan).
4. **Plan Your Visit (Panduan Kunjungan):**
   * Tata letak 2 kolom:
     * **Kolom Kiri:** Informasi praktis dalam format ikon minimalis + teks jelas (Alamat lengkap & patokan lokasi dari Bandara/Pelabuhan, Jam Operasional harian & hari libur, Fasilitas: QRIS/Kartu Kredit, *Safe Flight Packaging*, Parkir).
     * **Kolom Kanan:** *Interactive Google Maps Embed* dengan gaya peta yang bersih dan tombol besar *"Buka Rute di Google Maps"*.
5. **Visitor Memories & Google Reviews:**
   * Skor agregat bintang Google Maps (misal: `4.9 / 5.0 berdasarkan ulasan pengunjung`).
   * Carousel horizontal berisi 3–4 kutipan ulasan autentik wisatawan lokal dan mancanegara.