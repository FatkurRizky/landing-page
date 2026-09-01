# 📖 PANDUAN LENGKAP & DOKUMENTASI KUSTOMISASI
## 🚀 Web Portofolio Style Presentation Deck (Muhammad Fatkur Rizky)

Selamat datang di dokumentasi resmi **Web Portofolio Style Presentation Deck**! Website ini dirancang menggunakan **React JS, Tailwind CSS, dan Clean Code Architecture**, di mana seluruh konten (data pribadi, foto, logo sekolah, daftar proyek, keahlian, hingga riwayat kerja) **dapat diubah HANYA dengan mengedit 1 file data terpusat** di `src/data/portfolioData.js` tanpa perlu menyentuh kodingan UI React sama sekali!

---

## 🏛️ 1. PETA FOLDER & STRUKTUR PROJECT

```text
landing-page/
├── 📁 public/
│   ├── 🖼️ profile.png                         <-- Foto profil Arch Halaman Utama
│   ├── 📄 Muhammad Fatkur Rizky – CV.pdf     <-- File CV PDF untuk tombol Download
│   └── 📁 logos/                              <-- Logo Resmi Sekolah & Perguruan Tinggi
│       ├── 🖼️ logo-unp-kediri.png             <-- UNP Kediri
│       ├── 🖼️ logo-man-sorong.png             <-- MAN Sorong
│       ├── 🖼️ logo-smp-muhas.png              <-- SMP Muhammadiyah Al-Amin Sorong
│       └── 🖼️ logo-al-maarif.png             <-- SD / MI Al-Ma'arif
├── 📁 src/
│   ├── 📁 data/
│   │   └── 📄 portfolioData.js               <-- 🌟 PUSAT KUSTOMISASI KONTEN (SINGLE SOURCE OF TRUTH)
│   ├── 📁 components/
│   │   ├── 📁 common/
│   │   │   └── 📄 SocialIcons.jsx             <-- Icon SVG GitHub, LinkedIn, WhatsApp
│   │   └── 📁 presentation/
│   │       ├── 📄 GridBackground.jsx          <-- Background Isometric Grid Lines
│   │       ├── 📄 PresentationHeader.jsx      <-- Baris Header Atas Deck & Download CV
│   │       ├── 📄 HeroSlide.jsx               <-- Slide 1: Cover & Photo Arch Frame
│   │       ├── 📄 SkillsSlide.jsx             <-- Slide 2: 3 Pilar Keahlian Utama
│   │       ├── 📄 AboutSlide.jsx              <-- Slide 3: Riwayat Pendidikan & 4 Logo
│   │       ├── 📄 ExperienceSlide.jsx         <-- Slide 4: Pengalaman Kerja & Server
│   │       ├── 📄 ProjectsSlide.jsx           <-- Slide 5: Grid 6 Proyek Unggulan
│   │       ├── 📄 ContactSlide.jsx            <-- Slide 6: Form WhatsApp & Kontak
│   │       ├── 📄 SlideControls.jsx           <-- Deck Footer Bar & Navigation
│   │       └── 📄 ProjectModal.jsx            <-- Modal Detail Arsitektur Proyek
│   ├── 📄 App.jsx                             <-- Controller Utama (Slide & Hotkeys)
│   └── 📄 index.css                           <-- Styling Base & Custom Scrollbar
├── 📄 tailwind.config.js                      <-- Konfigurasi Color Palette
├── 📄 README.md                               <-- Dokumentasi Kustomisasi (File Ini)
└── 📄 package.json
```

---

## ✏️ 2. PANDUAN KUSTOMISASI STEP-BY-STEP

### 👤 A. Mengubah Data Pribadi, Ringkasan, & Kontak
Buka file **`src/data/portfolioData.js`** dan ubah pada bagian objek `personal` dan `contact`:

```javascript
export const PORTFOLIO_DATA = {
  personal: {
    fullName: 'Nama Lengkap Anda',
    shortName: 'Nama Panggilan',
    nickname: 'Fatkur',
    title: 'Backend Developer & Software Engineer',
    subtitle: 'Mahasiswa Teknik Informatika S1',
    year: '2026',
    location: 'Kediri, Jawa Timur, Indonesia',
    statusBadge: 'Terbuka untuk Intern & Remote Work',
    avatar: '/profile.png',                     // Path foto di folder public/
    cvPdfPath: '/Nama_File_CV_Anda.pdf',        // Path CV PDF di folder public/
    summary: `Tuliskan ringkasan profil eksekutif Anda di sini...`,
  },
  contact: {
    email: 'emailanda@domain.com',
    phone: '081234567890',
    whatsappUrl: 'https://wa.me/6281234567890?text=Halo',
    github: { username: 'UsernameGitHub', url: 'https://github.com/Username' },
    linkedin: { username: 'UsernameLinkedIn', url: 'https://linkedin.com/in/Username' },
  }
}
```

---

### 🖼️ B. Mengganti Foto Profil
1. Simpan foto profil baru Anda di folder: **`public/profile.png`** (atau `public/profile.jpg`).
2. Jika menggunakan format nama file berbeda (misal `myphoto.png`), ubah baris `avatar` di `src/data/portfolioData.js`:
   ```javascript
   avatar: '/myphoto.png',
   ```

---

### 🛠️ C. Mengubah 3 Pilar Keahlian Utama
Buka file `src/data/portfolioData.js` pada array `mainSkillPillars`. Anda bisa mengedit 3 pilar keahlian utama (*Kemampuan Teknis, Sistem & Infrastruktur, Pemecahan Masalah*):

```javascript
mainSkillPillars: [
  {
    id: 'kemampuan-teknis',
    title: 'Kemampuan Teknis',
    subtitle: 'Backend & RESTful API',
    description: 'Deskripsi singkat keahlian backend Anda...',
    techs: ['Node.js', 'Express.js', 'Python', 'MySQL', 'Laravel'], // Daftar badge skill
  },
  // ... Pilar 2 & 3
]
```

---

### 🎓 D. Menambah / Mengubah Riwayat Pendidikan & Logo Sekolah
Buka file `src/data/portfolioData.js` pada array `educationList`. Urutannya adalah dari **Kuliah, SMA, SMP, hingga SD**:

1. Masukkan file logo baru ke folder **`public/logos/`** (contoh: `logo-sekolah.png`).
2. Edit / tambah data sekolah di array `educationList`:
```javascript
educationList: [
  {
    id: 'unp-kediri',
    school: 'Universitas Nusantara PGRI Kediri',
    degree: 'S1 Teknik Informatika',
    period: '2023 – Sekarang',
    status: 'Semester 7 Aktif',
    location: 'Kediri, Jawa Timur',
    logo: '/logos/logo-unp-kediri.png',  // Path logo di public/logos/
    isCurrent: true,
  },
  {
    id: 'sma-anda',
    school: 'Nama SMA / MAN Anda',
    degree: 'Sekolah Menengah Atas',
    period: '2020 – 2023',
    status: 'Alumni',
    location: 'Kota Anda',
    logo: '/logos/logo-sma-anda.png',
    isCurrent: false,
  },
  // ... SMP & SD
]
```

---

### 🚀 E. Menambahkan Proyek Portofolio Baru
Buka file `src/data/portfolioData.js` pada array `projects`. Anda bisa menambah atau mengubah proyek:

```javascript
projects: [
  {
    id: 'proyek-baru',
    title: 'Judul Proyek Anda',
    category: 'Full-Stack Web / Mobile',
    tagline: 'Satu kalimat deskripsi singkat',
    summary: 'Penjelasan lengkap mengenai proyek ini...',
    tech: ['React.js', 'Node.js', 'PostgreSQL'],
    metrics: 'Pencapaian / performa utama proyek',
    features: ['Fitur utama 1', 'Fitur utama 2', 'Fitur utama 3'],
    githubUrl: 'https://github.com/Username/repository-proyek',
    featured: true,
    imageBg: 'bg-gradient-to-br from-[#0F3040] to-[#464858]',
  },
]
```

---

### 🎨 F. Mengubah Palette Warna Website
Warna website diatur menggunakan token Tailwind CSS pada file **`tailwind.config.js`** & **`src/index.css`**:

#### File `tailwind.config.js`:
```javascript
colors: {
  palette: {
    dark: '#0F3040',   // Deep Navy / Slate Teal (Judul, Header Kartu, & Primary Button)
    muted: '#464858',  // Slate Charcoal (Teks Deskripsi & Sub-elements)
    warm: '#A56F63',   // Warm Terracotta (Badges & Highlight Warm)
    peach: '#D99B7F',  // Sand Peach Gold (Underline Bar, Title Accent & Active Dots)
    bg: '#f7f6f4',     // Soft Off-White Background
  }
}
```
*Cukup ganti kode Hex di atas jika di kemudian hari Anda ingin mencoba kombinasi warna lain!*

---

## 🎛️ 3. FITUR INTERAKTIF DECK

- ⌨️ **Keyboard Panah Navigation**: Tekan tombol `Panah Kiri` (`←`) atau `Panah Kanan` (`→`) pada keyboard untuk berpindah slide.
- 🔄 **Autoplay Presentation Mode**: Klik tombol **Auto** pada footer kanan bawah untuk mengaktifkan pemutaran slide otomatis setiap 6 detik.
- 🔍 **Interactive Project Modal**: Klik **"Detail Architecture"** pada setiap kartu proyek untuk membuka pop-up breakdown fitur & metrics lengkap.
- 💬 **Form WhatsApp Direct Link**: Pada slide Kontak, pengisian form akan otomatis memformat pesan ke WhatsApp pemilik website.

---

## 🚀 4. CARA MENJALANKAN LOKAL & DEPLOYMENT

### Menjalankan Mode Development (Lokal):
```bash
npm run dev
```
Buka browser di `http://localhost:5173`.

### Menguji Build Produksi:
```bash
npm run build
```
Folder hasil build `dist/` siap di-upload secara gratis ke platform seperti **Vercel, Netlify, Cloudflare Pages, atau VPS Nginx**.

---

> *Dokumentasi dikembangkan resmi untuk Portofolio Muhammad Fatkur Rizky.* 🚀✨
