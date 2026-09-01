/**
 * PORTFOLIO DATA CONFIGURATION
 * Single source of truth untuk seluruh konten web portofolio Muhammad Fatkur Rizky.
 * Edit data di file ini untuk mengubah isi teks, proyek, skill, dan kontak tanpa mengubah UI React.
 */

export const PORTFOLIO_DATA = {
  // 👤 Informasi Personal & Branding
  personal: {
    fullName: 'Muhammad Fatkur Rizky',
    shortName: 'Fatkur Rizky',
    nickname: 'Fatkur',
    title: 'Backend Developer & Software Engineer',
    subtitle: 'Mahasiswa Teknik Informatika S1 | Linux & REST API Enthusiast',
    year: '2026',
    location: 'Kediri, Jawa Timur, Indonesia',
    statusBadge: 'Terbuka untuk Intern & Full-Time Remote / On-Site',
    avatar: '/profile.png',
    cvPdfPath: '/Muhammad Fatkur Rizky – Curriculum Vitae.pdf',
    
    // Header Presentation Tag
    headerTag: 'Presentasi Tentang Saya',
    
    // Ringkasan Profil dari CV
    summary: `Mahasiswa S1 Teknik Informatika (semester 7) di Universitas Nusantara PGRI Kediri dengan minat mendalam pada Backend Development dan Software Engineering. Memiliki pengalaman mengembangkan aplikasi dan REST API menggunakan Node.js, Express.js, dan Python, serta mengelola database MySQL dan PostgreSQL. Berpengalaman praktis dalam pengembangan aplikasi, technical troubleshooting, serta konfigurasi Linux Server (Ubuntu & Tailscale). Aktif mengembangkan project untuk memperdalam kemampuan pemrograman dan memecahkan masalah nyata.`,
  },

  // 📞 Kontak & Media Sosial
  contact: {
    email: 'muhammadfatkur676@gmail.com',
    phone: '',
    whatsappUrl: '',
    github: {
      username: 'FatkurRizky',
      url: 'https://github.com/FatkurRizky',
    },
    linkedin: {
      username: 'fatkurrizky',
      url: 'https://www.linkedin.com/in/muhammad-fatkur-rizky-/',
    },
    location: 'Kediri, Jawa Timur, Indonesia',
  },

  // 🎓 Pendidikan Resmi & Riwayat Sekolah (Dengan Logo Resmi)
  education: {
    university: 'Universitas Nusantara PGRI Kediri',
    degree: 'S1 Teknik Informatika',
    period: '2023 – Sekarang (Ekspektasi Lulus: 2027)',
    location: 'Kediri, Jawa Timur',
    gpaStatus: 'Semester 7 • Mahasiswa Aktif',
    mainLogo: '/logos/logo-unp-kediri.png',
    relevantCourses: [
      'Basis Data',
      'Algoritma & Struktur Data',
      'Pemrograman Web & Mobile',
      'Jaringan Komputer',
      'Kecerdasan Buatan',
    ],
  },

  // Daftar Riwayat Pendidikan Lengkap dengan Logo
  educationList: [
    {
      id: 'unp-kediri',
      school: 'Universitas Nusantara PGRI Kediri',
      degree: 'S1 Teknik Informatika',
      period: '2023 – Sekarang',
      status: 'Semester 7 Aktif',
      location: 'Kediri, Jawa Timur',
      logo: '/logos/logo-unp-kediri.png',
      isCurrent: true,
    },
    {
      id: 'man-sorong',
      school: 'MAN Sorong',
      degree: 'Madrasah Aliyah Negeri',
      period: '2020 – 2023',
      status: 'Alumni',
      location: 'Sorong, Papua Barat Daya',
      logo: '/logos/logo-man-sorong.png',
      isCurrent: false,
    },
    {
      id: 'smp-muhas',
      school: 'SMP Muhammadiyah Al-Amin',
      degree: 'Sekolah Menengah Pertama',
      period: '2017 – 2020',
      status: 'Alumni',
      location: 'Kota Sorong',
      logo: '/logos/logo-smp-muhas.png',
      isCurrent: false,
    },
    {
      id: 'al-maarif',
      school: 'MI / SD Al-Ma\'arif',
      degree: 'Sekolah Dasar',
      period: '2011 – 2017',
      status: 'Alumni',
      location: 'Kota Sorong',
      logo: '/logos/logo-al-maarif.png',
      isCurrent: false,
    },
  ],

  // 🛠️ Keahlian Utama (3 Pillars matching exact presentation slide layout)
  mainSkillPillars: [
    {
      id: 'kemampuan-teknis',
      title: 'Kemampuan Teknis',
      subtitle: 'Backend & RESTful API',
      description: 'Pengembangan backend REST API tangguh & otentikasi aman menggunakan Node.js, Express.js, Laravel, serta Python.',
      techs: ['JavaScript', 'Python', 'PHP', 'Node.js', 'Express.js', 'Laravel', 'RESTful API', 'JWT', 'Laravel Sanctum', 'React.js', 'Tailwind CSS'],
    },
    {
      id: 'sistem-infrastruktur',
      title: 'Sistem & Infrastruktur',
      subtitle: 'Linux & Database Management',
      description: 'Pengelolaan Ubuntu Server, administrasi CLI, remote access aman via SSH & Tailscale, serta perancangan database MySQL/PostgreSQL.',
      techs: ['Ubuntu Server', 'Linux CLI', 'SSH', 'Tailscale', 'Troubleshooting Jaringan', 'MySQL', 'PostgreSQL', 'Relational DB'],
    },
    {
      id: 'pemecahan-masalah',
      title: 'Pemecahan Masalah',
      subtitle: 'Machine Learning Security & Support',
      description: 'Penerapan model Deep Learning 1D-CNN untuk klasifikasi serangan SQL Injection, triage teknis sistem, dan workflow Git/GitHub.',
      techs: ['1D-CNN SQLi Detection', 'TensorFlow / Keras', 'Scikit-learn', 'Technical Triage', 'Git', 'GitHub', 'Postman', 'VS Code'],
    },
  ],

  // 🚀 Proyek Unggulan dari CV (Dengan Tema Warna Manly Slate Navy & Terracotta)
  projects: [
    {
      id: 'scholar-search',
      title: 'Scholar Search — Academic Journal Search Engine',
      category: 'Full-Stack Web & API',
      tagline: 'Mesin pencari jurnal ilmiah pintar dengan caching dan filter sitasi',
      summary: 'Mengembangkan aplikasi pencarian jurnal akademik menggunakan React JS sebagai frontend dan Express.js sebagai backend yang terintegrasi dengan SerpApi.',
      tech: ['Node.js', 'Express.js', 'React.js', 'Tailwind CSS', 'SerpApi'],
      metrics: 'Mengurangi waktu request berulang hingga 70% dengan In-Memory Caching',
      features: [
        'Mengimplementasikan in-memory caching untuk efisiensi request API eksternal.',
        'Fitur pagination interaktif & pengurutan (sorting) berdasarkan jumlah sitasi.',
        'Filter pencarian khusus untuk artikel berlisensi Open Access.',
        'Error handling tangguh dan skeleton loading untuk kenyamanan pengguna.',
      ],
      githubUrl: 'https://github.com/FatkurRizky/scholar-search',
      demoUrl: '#',
      featured: true,
      imageBg: 'bg-gradient-to-br from-[#0F3040] to-[#464858]',
    },
    {
      id: 'sqli-deep-learning',
      title: 'Sistem Deteksi SQL Injection Berbasis Deep Learning',
      category: 'Machine Learning & Security',
      tagline: 'Klasifikasi serangan SQL Injection menggunakan model 1D-CNN',
      summary: 'Model Deep Learning untuk mengklasifikasikan pola query SQL berbahaya guna mencegah potensi kerentanan keamanan database.',
      tech: ['Python', 'TensorFlow / Keras', '1D-CNN', 'Scikit-Learn', 'Pandas'],
      metrics: 'Evaluasi model lengkap dengan Confusion Matrix, Precision, Recall, & F1-Score',
      features: [
        'Arsitektur Convolutional Neural Network 1-Dimensi (1D-CNN) untuk analisis teks query.',
        'Preprocessing data teks meliputi tokenization dan sequence padding secara sistematis.',
        'Evaluasi performa klasifikasi secara presisi dengan Confusion Matrix & F1-Score.',
        'Identifikasi pola serangan tersembunyi pada parameter URL dan payload HTTP.',
      ],
      githubUrl: 'https://github.com/FatkurRizky/sqli-deep-learning',
      demoUrl: '#',
      featured: true,
      imageBg: 'bg-gradient-to-br from-[#464858] to-[#A56F63]',
    },
    {
      id: 'reconcile-umkm',
      title: 'Kalkulator Rekon Kas & Ekosistem Digital UMKM',
      category: 'Internal Tool & Server Management',
      tagline: 'Aplikasi kas harian dan manajemen platform digital untuk UMKM',
      summary: 'Aplikasi pencatatan rekapitulasi kas harian toko serta pengelolaan infrastruktur digital internal untuk Konten Coklat UMKM.',
      tech: ['JavaScript', 'Tailwind CSS', 'Ubuntu Server', 'GoFood Admin'],
      metrics: 'Mempercepat proses rekonsiliasi kas harian toko hingga 2x lebih efisien',
      features: [
        'Pengembangan aplikasi Kalkulator Rekon kas harian toko.',
        'Pembuatan katalog produk digital & buku resep interaktif.',
        'Konfigurasi & maintenance server internal Ubuntu Server.',
        'Manajemen katalog produk & daftar menu toko pada platform GoFood.',
      ],
      githubUrl: 'https://github.com/FatkurRizky',
      demoUrl: '#',
      featured: false,
      imageBg: 'bg-gradient-to-br from-[#A56F63] to-[#D99B7F]',
    },
    {
      id: 'ubuntu-lenovo-server',
      title: 'Konfigurasi Ubuntu Server — Lenovo ThinkSystem',
      category: 'Infrastructure & Linux',
      tagline: 'Administrasi server fisik enterprise, SSH, & Tailscale VPN',
      summary: 'Instalasi, hardened security, dan konfigurasi jaringan remote access untuk server Lenovo ThinkSystem.',
      tech: ['Ubuntu Server', 'Linux CLI', 'Tailscale', 'SSH Access'],
      metrics: 'Menyediakan akses remote aman 24/7 antar perangkat terdistribusi',
      features: [
        'Instalasi OS Ubuntu Server pada hardware Lenovo ThinkSystem.',
        'Administrasi CLI, package management, dan permission security.',
        'Setup Tailscale mesh VPN & SSH encrypted connection.',
        'Troubleshooting jaringan dan port monitoring.',
      ],
      githubUrl: 'https://github.com/FatkurRizky',
      demoUrl: '#',
      featured: false,
      imageBg: 'bg-gradient-to-br from-[#0F3040] to-[#D99B7F]',
    },
  ],

  // 💼 Pengalaman Kerja & Magang
  experiences: [
    {
      id: 'konten-coklat',
      yearPeriod: 'Feb 2026 – Jun 2026',
      company: 'Konten Coklat UMKM',
      location: 'Kediri, Jawa Timur',
      role: 'Digital Development Intern',
      type: 'Magang / Internship',
      description: 'Merancang ekosistem digital, aplikasi kas internal, dan pemeliharaan server internal.',
      tasks: [
        'Merancang dan membuat katalog produk digital & buku resep interaktif.',
        'Mengembangkan aplikasi sederhana Kalkulator Rekon kas harian toko.',
        'Mengonfigurasi dan memelihara Ubuntu Server internal.',
        'Mengelola katalog produk dan menu toko pada platform GoFood.',
      ],
    },
    {
      id: 'mentari-digital',
      yearPeriod: 'Jan 2024 – Jan 2026',
      company: 'Mentari Digital',
      location: 'Kediri, Jawa Timur',
      role: 'Technical Support & System Operator',
      type: 'Part-Time / Contract',
      description: 'Menangani triage teknis pengguna, pemantauan transaksi real-time, dan eskalasi sistem.',
      tasks: [
        'Triage dan troubleshooting awal kendala teknis pengguna.',
        'Pemantauan status transaksi via dashboard operasional.',
        'Dokumentasi & eskalasi masalah teknis ke tim terkait.',
      ],
    },
    {
      id: 'lenovo-infra',
      yearPeriod: 'Infrastruktur Project',
      company: 'Lenovo ThinkSystem Hardware',
      location: 'Kediri, Jawa Timur',
      role: 'Linux Server & Network Administrator',
      type: 'Infrastructure Setup',
      description: 'Konfigurasi Ubuntu Server, Tailscale VPN, dan SSH Remote Access.',
      tasks: [
        'Instalasi & setup Ubuntu Server pada Lenovo ThinkSystem.',
        'Konfigurasi Tailscale VPN & SSH remote access terenkripsi.',
        'Troubleshooting konektivitas jaringan & akses server.',
      ],
    },
  ],

  // 🎛️ Daftar Slide untuk Presentation Navigation
  slides: [
    { id: 'hero', label: 'Cover Portofolio', subtitle: 'Halaman Utama' },
    { id: 'skills', label: 'Keahlian Utama', subtitle: '3 Pilar Keahlian CV' },
    { id: 'about', label: 'Riwayat Akademis', subtitle: 'Pendidikan & Logo Resmi' },
    { id: 'experience', label: 'Pengalaman Kerja', subtitle: 'Timeline Intern & Support' },
    { id: 'projects', label: 'Proyek Unggulan', subtitle: 'Scholar Search & Security' },
    { id: 'contact', label: 'Kontak & Respon', subtitle: 'Hubungi Fatkur' },
  ],
};
