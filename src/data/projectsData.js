export const PORTFOLIO_CATEGORIES = ['All', 'Web Dev', 'Mobile App', 'AI & ML'];

export const PROJECTS_DATA = [
  {
    id: 'scholar-search',
    title: 'Scholar Search — Academic Journal Search & Scraper',
    tag: 'Full-Stack • Open Source',
    category: 'AI & ML',
    categories: ['All', 'AI & ML', 'Web Dev'],
    description:
      'Platform pencarian jurnal Google Scholar untuk mahasiswa dan peneliti. Fitur: integrasi SerpApi, pagination offset, urutan berdasarkan sitasi, deteksi PDF open-access, backend caching, dan skeleton loading.',
    tech: ['React 19', 'Express.js', 'SerpApi', 'Tailwind CSS', 'Axios'],
    techStack: ['React 19', 'Express.js', 'SerpApi', 'Tailwind CSS', 'Axios'],
    image: '/scholar_search.png',
    github: 'https://github.com/FatkurRizky',
    githubUrl: 'https://github.com/FatkurRizky',
    demo: 'https://github.com/FatkurRizky',
    liveUrl: 'https://github.com/FatkurRizky',
    metrics: {
      accuracy: '99.4%',
      responseTime: '<120ms (Cached)',
      dataSources: 'Google Scholar API'
    },
    highlights: [
      'Backend in-memory cache untuk menghemat request API & mempercepat waktu loading',
      'Filter otomatis untuk mendeteksi jurnal yang menyediakan file PDF gratis',
      'Pemisahan komponen UI & logika data secara modular'
    ]
  },
  {
    id: 'toko-lala-pos',
    title: 'Toko Lala POS & Mobile Ecosystem',
    tag: 'Full-Stack Web & Mobile',
    category: 'Mobile App',
    categories: ['All', 'Web Dev', 'Mobile App'],
    description:
      'Sistem manajemen toko sembako: Laravel REST API + dashboard kasir React POS + aplikasi Android React Native untuk pelanggan. Memudahkan pencatatan transaksi, manajemen stok, dan laporan penjualan.',
    tech: ['Laravel 11', 'React 19', 'React Native', 'MySQL', 'REST API'],
    techStack: ['Laravel 11', 'React 19', 'React Native', 'MySQL', 'REST API'],
    image: '/toko_mobile.png',
    github: 'https://github.com/FatkurRizky',
    githubUrl: 'https://github.com/FatkurRizky',
    demo: 'https://github.com/FatkurRizky',
    liveUrl: 'https://github.com/FatkurRizky',
    metrics: {
      accuracy: '100% Sync Rate',
      responseTime: 'Realtime POS',
      dataSources: 'Laravel MySQL Backend'
    },
    highlights: [
      'Sinkronisasi data real-time antara kasir web dan aplikasi pelanggan',
      'Peringatan otomatis saat stok barang di bawah batas minimum',
      'REST API terstruktur dengan validasi input dan keamanan token JWT'
    ]
  },
  {
    id: 'kraken-air-3d',
    title: 'Kraken Air 3D Sneaker Showcase',
    tag: 'Frontend • Interactive UI',
    category: 'Web Dev',
    categories: ['All', 'Web Dev'],
    description:
      'Landing page interaktif untuk produk sepatu dengan visual 3D tilt, pemilih warna dinamis, dan animasi micro-interaction menggunakan Framer Motion.',
    tech: ['React 19', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    techStack: ['React 19', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    image: '/sneaker.png',
    github: 'https://github.com/FatkurRizky',
    githubUrl: 'https://github.com/FatkurRizky',
    demo: 'https://github.com/FatkurRizky',
    liveUrl: 'https://github.com/FatkurRizky',
    metrics: {
      accuracy: '60 FPS Motion',
      responseTime: 'Instant Load',
      dataSources: 'Vite Client App'
    },
    highlights: [
      'Animasi halus 60fps dengan Framer Motion',
      'Desain responsif untuk perangkat HP hingga monitor desktop',
      'Komponen interaktif tanpa mengurangi performa load'
    ]
  },
  {
    id: 'crochette-umkm',
    title: 'Crochette — Katalog Website UMKM Rajutan',
    tag: 'Frontend • Catalog',
    category: 'Web Dev',
    categories: ['All', 'Web Dev'],
    description:
      'Website etalase produk rajutan tangan UMKM. Menampilkan foto produk berkualitas, kategori pilihan, dan rute order langsung ke WhatsApp admin.',
    tech: ['React 19', 'Tailwind CSS', 'Vite'],
    techStack: ['React 19', 'Tailwind CSS', 'Vite'],
    image: '/crockhet.jpeg',
    github: 'https://github.com/FatkurRizky',
    githubUrl: 'https://github.com/FatkurRizky',
    demo: 'https://github.com/FatkurRizky',
    liveUrl: 'https://github.com/FatkurRizky',
    metrics: {
      accuracy: 'Fast Conversion',
      responseTime: '<100ms Load',
      dataSources: 'Static JSON Catalog'
    },
    highlights: [
      'Format rincian pesanan otomatis terkirim langsung ke WA admin',
      'Layout bersih dan fokus pada foto produk rajutan',
      'Waktu muat halaman sangat cepat di koneksi HP'
    ]
  }
];

export const PROJECTS = PROJECTS_DATA;
