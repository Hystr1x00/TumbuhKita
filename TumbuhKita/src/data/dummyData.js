// Data Dummy untuk Aplikasi TumbuhKita
// File ini berisi semua data dummy statis yang dibutuhkan untuk testing dan development

// ========================================
// DATA POSYANDU DASHBOARD
// ========================================
export const posyanduDashboardList = [
  {
    id: 1,
    nama: 'Posyandu Dahlia',
    alamat: 'Bojongsoang, Sukapura',
    kode: 'PSY001',
    petugas: 'Suster Ratna',
    totalAnak: 45,
    status: 'Aktif'
  },
  {
    id: 2,
    nama: 'Posyandu Melati',
    alamat: 'Dayeuhkolot, Bandung',
    kode: 'PSY002',
    petugas: 'Suster Sari',
    totalAnak: 38,
    status: 'Aktif'
  },
  {
    id: 3,
    nama: 'Posyandu Mawar',
    alamat: 'Sukabirus, Bandung',
    kode: 'PSY003',
    petugas: 'Suster Dewi',
    totalAnak: 52,
    status: 'Aktif'
  }
];

// Data anak yang terdaftar di posyandu
export const anakPosyanduList = [
  {
    id: 1,
    nama: 'Ghani Junior',
    orangTua: 'Siti Rahmah',
    gender: 'Laki-laki',
    usia: '37 Bulan',
    statusGizi: 'Gizi Baik',
    bbTb: '12.5kg / 85cm',
    lingkarKepala: '46cm',
    cekTerakhir: '10/1/2024',
    posyanduId: 1,
    foto: 'https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    nama: 'Nadhira Putri',
    orangTua: 'Ahmad Hidayat',
    gender: 'Perempuan',
    usia: '24 Bulan',
    statusGizi: 'Gizi Baik',
    bbTb: '11.2kg / 78cm',
    lingkarKepala: '44cm',
    cekTerakhir: '15/1/2024',
    posyanduId: 1,
    foto: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    nama: 'Rafi Akbar',
    orangTua: 'Dewi Sartika',
    gender: 'Laki-laki',
    usia: '18 Bulan',
    statusGizi: 'Gizi Kurang',
    bbTb: '9.8kg / 72cm',
    lingkarKepala: '42cm',
    cekTerakhir: '12/1/2024',
    posyanduId: 1,
    foto: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 4,
    nama: 'Zara Aulia',
    orangTua: 'Budi Santoso',
    gender: 'Perempuan',
    usia: '30 Bulan',
    statusGizi: 'Gizi Baik',
    bbTb: '13.1kg / 82cm',
    lingkarKepala: '45cm',
    cekTerakhir: '8/1/2024',
    posyanduId: 1,
    foto: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=150&q=80'
  }
];

// Data tumbuh kembang anak untuk posyandu
export const tumbuhKembangPosyanduList = [
  {
    id: 1,
    anakId: 1,
    nama: 'Ghani Junior',
    usia: '37 Bulan',
    berat: '12.5',
    tinggi: '85',
    lingkar: '46',
    statusGizi: 'Gizi Baik',
    tanggalPemeriksaan: '10/1/2024',
    posyanduId: 1
  },
  {
    id: 2,
    anakId: 2,
    nama: 'Nadhira Putri',
    usia: '24 Bulan',
    berat: '11.2',
    tinggi: '78',
    lingkar: '44',
    statusGizi: 'Gizi Baik',
    tanggalPemeriksaan: '15/1/2024',
    posyanduId: 1
  },
  {
    id: 3,
    anakId: 3,
    nama: 'Rafi Akbar',
    usia: '18 Bulan',
    berat: '9.8',
    tinggi: '72',
    lingkar: '42',
    statusGizi: 'Gizi Kurang',
    tanggalPemeriksaan: '12/1/2024',
    posyanduId: 1
  },
  {
    id: 4,
    anakId: 4,
    nama: 'Zara Aulia',
    usia: '30 Bulan',
    berat: '13.1',
    tinggi: '82',
    lingkar: '45',
    statusGizi: 'Gizi Baik',
    tanggalPemeriksaan: '8/1/2024',
    posyanduId: 1
  }
];

// Data jadwal imunisasi posyandu
export const jadwalImunisasiPosyanduList = [
  {
    id: 1,
    judul: 'Imunisasi DPT 3',
    status: 'Terjadwal',
    target: '6 Bulan',
    tanggal: '25 Januari 2024',
    anakTerjadwal: 3,
    deskripsi: 'Imunisasi DPT dosis ketiga untuk anak usia 6 bulan',
    posyanduId: 1
  },
  {
    id: 2,
    judul: 'Imunisasi Campak',
    status: 'Selesai',
    target: '9 Bulan',
    tanggal: '20 Januari 2024',
    anakTerjadwal: 2,
    deskripsi: 'Imunisasi Campak untuk anak usia 9 bulan',
    posyanduId: 1
  },
  {
    id: 3,
    judul: 'Imunisasi Hepatitis B',
    status: 'Terjadwal',
    target: '2 Bulan',
    tanggal: '30 Januari 2024',
    anakTerjadwal: 1,
    deskripsi: 'Imunisasi Hepatitis B dosis kedua',
    posyanduId: 1
  },
  {
    id: 4,
    judul: 'Imunisasi BCG',
    status: 'Terjadwal',
    target: '0 Bulan',
    tanggal: '5 Februari 2024',
    anakTerjadwal: 1,
    deskripsi: 'Imunisasi BCG untuk bayi baru lahir',
    posyanduId: 1
  }
];

// ========================================
// DATA ARTIKEL
// ========================================
export const artikelList = [
  {
    id: 1,
    judul: 'Pentingnya Imunisasi Untuk Balita',
    tanggal: '10 Mei 2025',
    isi: 'Imunisasi adalah cara terbaik untuk melindungi anak dari berbagai penyakit berbahaya. Artikel ini membahas jadwal imunisasi yang wajib diberikan pada balita sesuai rekomendasi WHO dan IDAI.',
    link: '#',
    author: 'Dr. Anita Wijaya',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    kategori: 'Kesehatan & Penyakit',
    status: 'Dipublikasikan',
    dilihat: 1245,
    tags: ['imunisasi', 'balita', 'kesehatan']
  },
  {
    id: 2,
    judul: 'Tips Pola Makan Sehat untuk Anak',
    tanggal: '12 Mei 2025',
    isi: 'Pola makan sehat penting untuk tumbuh kembang optimal. Simak tips dan menu sehat harian untuk anak Anda di artikel ini.',
    link: '#',
    author: 'Dr. Budi Santoso',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    kategori: 'Nutrisi & Makanan',
    status: 'Dipublikasikan',
    dilihat: 892,
    tags: ['nutrisi', 'makanan', 'gizi']
  },
  {
    id: 3,
    judul: 'Mengenal Vaksinasi Dasar Anak',
    tanggal: '15 Mei 2025',
    isi: 'Vaksinasi dasar wajib diberikan pada anak sejak bayi. Ketahui jenis dan jadwal vaksinasi dasar di Indonesia.',
    link: '#',
    author: 'Dr. Anita Wijaya',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    kategori: 'Kesehatan & Penyakit',
    status: 'Dipublikasikan',
    dilihat: 1567,
    tags: ['vaksinasi', 'dasar', 'anak']
  },
  {
    id: 4,
    judul: 'Cara Menjaga Imunitas Anak',
    tanggal: '18 Mei 2025',
    isi: 'Imunitas tubuh anak bisa dijaga dengan pola makan, tidur cukup, dan imunisasi. Baca tips menjaga daya tahan tubuh anak.',
    link: '#',
    author: 'Dr. Budi Santoso',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    kategori: 'Kesehatan & Penyakit',
    status: 'Dipublikasikan',
    dilihat: 734,
    tags: ['imunitas', 'kesehatan', 'anak']
  },
  {
    id: 5,
    judul: 'Stimulasi Tumbuh Kembang Balita',
    tanggal: '20 Mei 2025',
    isi: 'Stimulasi sejak dini penting untuk perkembangan otak dan fisik balita. Temukan aktivitas stimulasi yang mudah dilakukan di rumah.',
    link: '#',
    author: 'Dr. Anita Wijaya',
    img: 'https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=crop&w=600&q=80',
    kategori: 'Pertumbuhan & Perkembangan',
    status: 'Dipublikasikan',
    dilihat: 1023,
    tags: ['stimulasi', 'tumbuh kembang', 'balita']
  },
  {
    id: 6,
    judul: 'Mengenal Alergi pada Anak',
    tanggal: '22 Mei 2025',
    isi: 'Alergi pada anak bisa muncul sejak dini. Kenali gejala, penyebab, dan cara penanganan alergi pada anak.',
    link: '#',
    author: 'Dr. Budi Santoso',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    kategori: 'Kesehatan & Penyakit',
    status: 'Dipublikasikan',
    dilihat: 567,
    tags: ['alergi', 'kesehatan', 'anak']
  },
  {
    id: 7,
    judul: 'Panduan Lengkap Vaksinasi COVID-19 untuk Anak',
    tanggal: '25 Mei 2025',
    isi: 'Panduan lengkap mengenai vaksinasi COVID-19 untuk anak usia 6-11 tahun dan 12-17 tahun.',
    link: '#',
    author: 'Dr. Anita Wijaya',
    img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=600&q=80',
    kategori: 'Kesehatan & Penyakit',
    status: 'Draft',
    dilihat: 0,
    tags: ['covid-19', 'vaksinasi', 'anak']
  }
];

// ========================================
// DATA BALITA
// ========================================
export const balitaList = [
  {
    id: 1,
    nama: 'Ghani Junior',
    tglLahir: '15 Januari 2023',
    orangTua: 'Budi Pratama',
    usia: '2 tahun 4 bulan',
    gender: 'Laki-laki',
    berat: '12.5 kg',
    tinggi: '89 cm',
    lingkarKepala: '46 cm',
    posyandu: 'Posyandu Dayeuhkolot',
    status: 'Sehat',
    golonganDarah: 'A',
    alamat: 'Jl. Sukapura No. 123, Bojongsoang',
    catatan: 'Anak aktif dan sehat'
  },
  {
    id: 2,
    nama: 'Nadhira Putri',
    tglLahir: '20 Mei 2024',
    orangTua: 'Siti Rahma',
    usia: '8 bulan',
    gender: 'Perempuan',
    berat: '8.5 kg',
    tinggi: '69 cm',
    lingkarKepala: '42 cm',
    posyandu: 'Posyandu Sukabirus',
    status: 'Sehat',
    golonganDarah: 'B',
    alamat: 'Jl. Sukabirus No. 45, Bojongsoang',
    catatan: 'Perlu perhatian khusus untuk MPASI'
  },
  {
    id: 3,
    nama: 'Rafi Ahmad',
    tglLahir: '10 Maret 2023',
    orangTua: 'Ahmad Hidayat',
    usia: '2 tahun 1 bulan',
    gender: 'Laki-laki',
    berat: '12.5 kg',
    tinggi: '89 cm',
    lingkarKepala: '45 cm',
    posyandu: 'Posyandu Sukapura',
    status: 'Sehat',
    golonganDarah: 'O',
    alamat: 'Jl. Lengkong No. 67, Bojongsoang',
    catatan: 'Suka bermain dan belajar'
  },
  {
    id: 4,
    nama: 'Siti Nuhaliza',
    tglLahir: '5 Februari 2023',
    orangTua: 'Muhammad Rizki',
    usia: '2 tahun 4 bulan',
    gender: 'Perempuan',
    berat: '12.5 kg',
    tinggi: '89 cm',
    lingkarKepala: '44 cm',
    posyandu: 'Posyandu Boelenda',
    status: 'Sehat',
    golonganDarah: 'AB',
    alamat: 'Jl. Boelenda No. 89, Bojongsoang',
    catatan: 'Anak cerdas dan aktif'
  },
  {
    id: 5,
    nama: 'Dimas Anggara',
    tglLahir: '12 Desember 2022',
    orangTua: 'Dedi Kurniawan',
    usia: '2 tahun 4 bulan',
    gender: 'Laki-laki',
    berat: '12.5 kg',
    tinggi: '86 cm',
    lingkarKepala: '47 cm',
    posyandu: 'Posyandu Bojongsoang',
    status: 'Perlu Perhatian',
    golonganDarah: 'A',
    alamat: 'Jl. Bojongsoang No. 12, Bojongsoang',
    catatan: 'Perlu monitoring tumbuh kembang'
  }
];

// ========================================
// DATA POSYANDU
// ========================================
export const posyanduList = [
  {
    id: 1,
    nama: 'Posyandu Dayeuhkolot',
    alamat: 'Jl. Raya Dayeuhkolot No. 1',
    kelurahan: 'Dayeuhkolot',
    kecamatan: 'Dayeuhkolot',
    kabupaten: 'Bandung',
    koordinat: '-6.978, 107.615',
    tanggal: '12 Jan 2023',
    jumlahBalita: 25,
    status: 'Aktif',
    kader: ['Siti Aminah', 'Rina Marlina', 'Dewi Sartika']
  },
  {
    id: 2,
    nama: 'Posyandu Bojongsoang',
    alamat: 'Jl. Bojongsoang No. 2',
    kelurahan: 'Bojongsoang',
    kecamatan: 'Bojongsoang',
    kabupaten: 'Bandung',
    koordinat: '-6.970, 107.620',
    tanggal: '12 Jan 2023',
    jumlahBalita: 30,
    status: 'Aktif',
    kader: ['Nurul Huda', 'Siti Fatimah', 'Aisyah']
  },
  {
    id: 3,
    nama: 'Posyandu Sukabirus',
    alamat: 'Jl. Sukabirus No. 3',
    kelurahan: 'Sukabirus',
    kecamatan: 'Bojongsoang',
    kabupaten: 'Bandung',
    koordinat: '-6.971, 107.621',
    tanggal: '12 Jan 2023',
    jumlahBalita: 28,
    status: 'Aktif',
    kader: ['Maya Sari', 'Dina Fitri', 'Rina Wati']
  },
  {
    id: 4,
    nama: 'Posyandu Sukapura',
    alamat: 'Jl. Sukapura No. 4',
    kelurahan: 'Sukapura',
    kecamatan: 'Bojongsoang',
    kabupaten: 'Bandung',
    koordinat: '-6.972, 107.622',
    tanggal: '12 Jan 2023',
    jumlahBalita: 22,
    status: 'Aktif',
    kader: ['Siti Nurhaliza', 'Rina Marlina', 'Dewi Sartika']
  },
  {
    id: 5,
    nama: 'Posyandu Lengkong',
    alamat: 'Jl. Lengkong No. 5',
    kelurahan: 'Lengkong',
    kecamatan: 'Bojongsoang',
    kabupaten: 'Bandung',
    koordinat: '-6.973, 107.623',
    tanggal: '12 Jan 2023',
    jumlahBalita: 20,
    status: 'Aktif',
    kader: ['Nurul Huda', 'Siti Fatimah', 'Aisyah']
  }
];

// ========================================
// DATA TENAGA KESEHATAN
// ========================================
export const tenagaKesehatanList = [
  {
    id: 1,
    nama: 'dr. Anita Wijaya',
    spesialisasi: 'Dokter Anak',
    email: 'anita.wijaya@tumbuhkita.id',
    telp: '081234567890',
    lokasiTugas: 'Puskesmas Sukabirus, Buahbatu',
    status: 'Aktif',
    pengalaman: '8 tahun',
    pendidikan: 'S1 Kedokteran Universitas Indonesia',
    sertifikasi: ['Sp.A', 'IDAI']
  },
  {
    id: 2,
    nama: 'dr. Budi Santoso',
    spesialisasi: 'Dokter Umum',
    email: 'budi.santoso@tumbuhkita.id',
    telp: '081234567891',
    lokasiTugas: 'Puskesmas Dayeuhkolot, Dayeuhkolot',
    status: 'Aktif',
    pengalaman: '5 tahun',
    pendidikan: 'S1 Kedokteran Universitas Padjadjaran',
    sertifikasi: ['Dokter Umum', 'Kedokteran Keluarga']
  },
  {
    id: 3,
    nama: 'Siti Rahmah, A.Md.Keb',
    spesialisasi: 'Bidan',
    email: 'siti.rahmah@tumbuhkita.id',
    telp: '081234567892',
    lokasiTugas: 'Puskesmas Bojongsoang, Bojongsoang',
    status: 'Aktif',
    pengalaman: '10 tahun',
    pendidikan: 'D3 Kebidanan',
    sertifikasi: ['Bidan', 'KIA']
  },
  {
    id: 4,
    nama: 'Dian Sastro, S.Kep',
    spesialisasi: 'Perawat',
    email: 'dian.sastro@tumbuhkita.id',
    telp: '081234567893',
    lokasiTugas: 'Puskesmas Sukapura, Bojongsoang',
    status: 'Aktif',
    pengalaman: '7 tahun',
    pendidikan: 'S1 Keperawatan',
    sertifikasi: ['Perawat', 'Keperawatan Anak']
  },
  {
    id: 5,
    nama: 'dr. Rina Wijaya',
    spesialisasi: 'Dokter Anak',
    email: 'rina.wijaya@tumbuhkita.id',
    telp: '081234567894',
    lokasiTugas: 'Puskesmas Lengkong, Bojongsoang',
    status: 'Aktif',
    pengalaman: '12 tahun',
    pendidikan: 'S1 Kedokteran Universitas Gadjah Mada',
    sertifikasi: ['Sp.A', 'IDAI']
  }
];

// ========================================
// DATA DESA
// ========================================
export const desaList = [
  {
    id: 1,
    nama: 'Desa Sukamaju',
    kecamatan: 'Dayeuhkolot',
    kabupaten: 'Bandung',
    provinsi: 'Jawa Barat',
    kodePos: '40267',
    jumlahPenduduk: 2500,
    namaKepalaDesa: 'H. Ahmad Supriadi',
    teleponKepalaDesa: '0812-3456-7890',
    alamatLengkap: 'Jl. Raya Sukamaju No. 45, Desa Sukamaju, Kecamatan Dayeuhkolot, Kabupaten Bandung, Jawa Barat',
    jumlahPosyandu: 5,
    jumlahBalita: 125,
    status: 'Aktif',
    tanggalInput: '15 Januari 2024',
    deskripsi: 'Desa Sukamaju merupakan desa yang terletak di Kecamatan Dayeuhkolot dengan fokus pada pengembangan kesehatan ibu dan anak melalui program posyandu yang aktif.',
    koordinat: '-6.9175, 107.6191',
    luasWilayah: '2.5 km²',
    jumlahKK: 650,
    fasilitasKesehatan: ['Posyandu Melati', 'Posyandu Mawar', 'Posyandu Anggrek', 'Posyandu Dahlia', 'Posyandu Kenanga'],
    programUnggulan: ['Posyandu Terpadu', 'Pemantauan Tumbuh Kembang Balita', 'Penyuluhan Gizi Seimbang']
  },
  {
    id: 2,
    nama: 'Desa Sukapura',
    kecamatan: 'Dayeuhkolot',
    kabupaten: 'Bandung',
    provinsi: 'Jawa Barat',
    kodePos: '40268',
    jumlahPenduduk: 1800,
    namaKepalaDesa: 'H. Maman Suparman',
    teleponKepalaDesa: '0813-4567-8901',
    alamatLengkap: 'Jl. Raya Sukapura No. 23, Desa Sukapura, Kecamatan Dayeuhkolot, Kabupaten Bandung, Jawa Barat',
    jumlahPosyandu: 4,
    jumlahBalita: 98,
    status: 'Aktif',
    tanggalInput: '20 Januari 2024',
    deskripsi: 'Desa Sukapura memiliki program kesehatan yang fokus pada peningkatan kualitas hidup balita dan ibu hamil melalui posyandu yang tersebar di berbagai dusun.',
    koordinat: '-6.9180, 107.6200',
    luasWilayah: '1.8 km²',
    jumlahKK: 450,
    fasilitasKesehatan: ['Posyandu Cempaka', 'Posyandu Teratai', 'Posyandu Kamboja', 'Posyandu Bougenville'],
    programUnggulan: ['Pemantauan Status Gizi', 'Imunisasi Rutin', 'Penyuluhan Kesehatan']
  },
  {
    id: 3,
    nama: 'Desa Sukabirus',
    kecamatan: 'Dayeuhkolot',
    kabupaten: 'Bandung',
    provinsi: 'Jawa Barat',
    kodePos: '40269',
    jumlahPenduduk: 3200,
    namaKepalaDesa: 'H. Udin Supardi',
    teleponKepalaDesa: '0814-5678-9012',
    alamatLengkap: 'Jl. Raya Sukabirus No. 67, Desa Sukabirus, Kecamatan Dayeuhkolot, Kabupaten Bandung, Jawa Barat',
    jumlahPosyandu: 5,
    jumlahBalita: 145,
    status: 'Aktif',
    tanggalInput: '25 Januari 2024',
    deskripsi: 'Desa Sukabirus merupakan desa dengan jumlah penduduk terbesar di Kecamatan Dayeuhkolot dengan program posyandu yang sangat aktif dan terintegrasi.',
    koordinat: '-6.9190, 107.6210',
    luasWilayah: '3.2 km²',
    jumlahKK: 800,
    fasilitasKesehatan: ['Posyandu Flamboyan', 'Posyandu Kembang Sepatu', 'Posyandu Alamanda', 'Posyandu Puring', 'Posyandu Bunga Matahari'],
    programUnggulan: ['Posyandu Terpadu', 'Pemantauan Tumbuh Kembang', 'Penyuluhan Kesehatan Reproduksi']
  },
  {
    id: 4,
    nama: 'Desa Lengkong',
    kecamatan: 'Dayeuhkolot',
    kabupaten: 'Bandung',
    provinsi: 'Jawa Barat',
    kodePos: '40270',
    jumlahPenduduk: 2100,
    namaKepalaDesa: 'H. Endang Suparman',
    teleponKepalaDesa: '0815-6789-0123',
    alamatLengkap: 'Jl. Raya Lengkong No. 89, Desa Lengkong, Kecamatan Dayeuhkolot, Kabupaten Bandung, Jawa Barat',
    jumlahPosyandu: 5,
    jumlahBalita: 112,
    status: 'Aktif',
    tanggalInput: '30 Januari 2024',
    deskripsi: 'Desa Lengkong memiliki program kesehatan yang komprehensif dengan fokus pada peningkatan kualitas hidup masyarakat melalui posyandu yang tersebar merata.',
    koordinat: '-6.9200, 107.6220',
    luasWilayah: '2.1 km²',
    jumlahKK: 525,
    fasilitasKesehatan: ['Posyandu Tulip', 'Posyandu Lily', 'Posyandu Krisan', 'Posyandu Anyelir', 'Posyandu Anggrek'],
    programUnggulan: ['Pemantauan Status Gizi', 'Imunisasi Rutin', 'Penyuluhan Gizi Seimbang']
  },
  {
    id: 5,
    nama: 'Desa Banjaran',
    kecamatan: 'Dayeuhkolot',
    kabupaten: 'Bandung',
    provinsi: 'Jawa Barat',
    kodePos: '40271',
    jumlahPenduduk: 2800,
    namaKepalaDesa: 'H. Tedi Supriatna',
    teleponKepalaDesa: '0816-7890-1234',
    alamatLengkap: 'Jl. Raya Banjaran No. 12, Desa Banjaran, Kecamatan Dayeuhkolot, Kabupaten Bandung, Jawa Barat',
    jumlahPosyandu: 5,
    jumlahBalita: 134,
    status: 'Aktif',
    tanggalInput: '5 Februari 2024',
    deskripsi: 'Desa Banjaran merupakan desa yang aktif dalam program kesehatan masyarakat dengan posyandu yang tersebar di berbagai lokasi strategis.',
    koordinat: '-6.9210, 107.6230',
    luasWilayah: '2.8 km²',
    jumlahKK: 700,
    fasilitasKesehatan: ['Posyandu Sakura', 'Posyandu Cherry Blossom', 'Posyandu Magnolia', 'Posyandu Azalea', 'Posyandu Rhododendron'],
    programUnggulan: ['Posyandu Terpadu', 'Pemantauan Tumbuh Kembang', 'Penyuluhan Kesehatan Lingkungan']
  }
];

// ========================================
// DATA FORUM DISKUSI
// ========================================
export const pertanyaanForumList = [
  {
    id: 1,
    nama: "Ibu Sarah",
    waktu: "2 hari yang lalu",
    title: "Anak saya sering menolak makan sayur, apa yang harus saya lakukan?",
    isi: "Anak saya usia 2 tahun sering menolak makan sayur. Saya sudah mencoba berbagai cara tapi tetap tidak mau. Apakah ada tips khusus untuk mengatasi hal ini?",
    jawaban: 2,
    suka: 5,
    status: "Terjawab",
    kategori: "Nutrisi",
    kategoriPertanyaan: "Nutrisi & Makanan",
    isAnswered: true,
    tags: ['sayur', 'nutrisi', 'balita']
  },
  {
    id: 2,
    nama: "Pak Budi",
    waktu: "3 hari yang lalu",
    title: "Bagaimana cara mengatasi anak susah tidur malam?",
    isi: "Anak saya usia 3 tahun sering terbangun di malam hari dan susah tidur kembali. Apa solusinya?",
    jawaban: 1,
    suka: 2,
    status: "Belum Dijawab",
    kategori: "Perkembangan",
    kategoriPertanyaan: "Pertumbuhan & Perkembangan",
    isAnswered: false,
    tags: ['tidur', 'perkembangan', 'balita']
  },
  {
    id: 3,
    nama: "Ibu Lina",
    waktu: "5 jam yang lalu",
    title: "Apakah imunisasi campak wajib?",
    isi: "Saya ragu untuk imunisasi campak, apakah ada efek sampingnya? Dan apakah benar-benar wajib?",
    jawaban: 3,
    suka: 7,
    status: "Terjawab",
    kategori: "Kesehatan",
    kategoriPertanyaan: "Kesehatan & Penyakit",
    isAnswered: true,
    tags: ['imunisasi', 'campak', 'kesehatan']
  },
  {
    id: 4,
    nama: "Pak Andi",
    waktu: "6 jam yang lalu",
    title: "Berapa kali anak harus makan dalam sehari?",
    isi: "Anak saya usia 1 tahun, apakah 3 kali makan cukup? Atau perlu lebih sering?",
    jawaban: 0,
    suka: 1,
    status: "Belum Dijawab",
    kategori: "Nutrisi",
    kategoriPertanyaan: "Nutrisi & Makanan",
    isAnswered: false,
    tags: ['makan', 'nutrisi', 'balita']
  },
  {
    id: 5,
    nama: "Ibu Rina",
    waktu: "10 menit yang lalu",
    title: "Bagaimana cara mengatasi anak yang alergi susu sapi?",
    isi: "Anak saya alergi susu sapi, alternatif apa yang baik untuk menggantikan nutrisi susu?",
    jawaban: 2,
    suka: 4,
    status: "Terjawab",
    kategori: "Kesehatan",
    kategoriPertanyaan: "Kesehatan & Penyakit",
    isAnswered: true,
    tags: ['alergi', 'susu', 'kesehatan']
  },
  {
    id: 6,
    nama: "Ibu Siti",
    waktu: "Baru saja",
    title: "Anak saya sering batuk, apa penyebabnya?",
    isi: "Sudah 1 minggu batuk tidak sembuh, apa yang harus dilakukan? Apakah perlu ke dokter?",
    jawaban: 1,
    suka: 0,
    status: "Belum Dijawab",
    kategori: "Kesehatan",
    kategoriPertanyaan: "Kesehatan & Penyakit",
    isAnswered: false,
    tags: ['batuk', 'kesehatan', 'balita']
  }
];

// ========================================
// DATA JADWAL IMUNISASI
// ========================================
export const jadwalImunisasiList = [
  {
    id: 1,
    judul: 'Imunisasi DPT 3',
    status: 'Terjadwal',
    target: '6 Bulan',
    tanggal: '15 Januari 2024',
    anakTerjadwal: 1,
    deskripsi: 'Imunisasi DPT dosis ketiga untuk mencegah difteri, pertusis, dan tetanus',
    posyandu: 'Posyandu Dayeuhkolot'
  },
  {
    id: 2,
    judul: 'Imunisasi Campak',
    status: 'Terjadwal',
    target: '9 Bulan',
    tanggal: '20 Januari 2024',
    anakTerjadwal: 2,
    deskripsi: 'Imunisasi campak untuk mencegah penyakit campak',
    posyandu: 'Posyandu Sukabirus'
  },
  {
    id: 3,
    judul: 'Imunisasi Hepatitis B',
    status: 'Selesai',
    target: '0-24 Jam',
    tanggal: '10 Januari 2024',
    anakTerjadwal: 3,
    deskripsi: 'Imunisasi Hepatitis B dosis pertama',
    posyandu: 'Posyandu Bojongsoang'
  },
  {
    id: 4,
    judul: 'Imunisasi BCG',
    status: 'Selesai',
    target: '0-2 Bulan',
    tanggal: '5 Januari 2024',
    anakTerjadwal: 2,
    deskripsi: 'Imunisasi BCG untuk mencegah tuberkulosis',
    posyandu: 'Posyandu Sukapura'
  }
];

// ========================================
// DATA TUMBUH KEMBANG
// ========================================
export const dataTumbuhKembang = [
  { 
    id: 1,
    nama: 'Ghani Junior',
    usia: '38 Bulan',
    berat: '12.5',
    tinggi: '85',
    lingkar: '46',
    statusGizi: 'Gizi Baik',
    tanggal: '10 Januari 2024'
  },
  { 
    id: 2,
    nama: 'Nadhira Putri',
    usia: '8 Bulan',
    berat: '8.5',
    tinggi: '69',
    lingkar: '42',
    statusGizi: 'Gizi Baik',
    tanggal: '12 Januari 2024'
  },
  { 
    id: 3,
    nama: 'Rafi Ahmad',
    usia: '25 Bulan',
    berat: '11.2',
    tinggi: '82',
    lingkar: '45',
    statusGizi: 'Gizi Baik',
    tanggal: '8 Januari 2024'
  }
];

// ========================================
// DATA STATISTIK
// ========================================
export const statistikForum = {
  total: 8,
  belum: 3,
  sudah: 5,
};

export const kategoriPopuler = [
  { nama: "Nutrisi & Makanan", jumlah: 2 },
  { nama: "Pertumbuhan & Perkembangan", jumlah: 2 },
  { nama: "Kesehatan & Penyakit", jumlah: 2 },
];

// ========================================
// DATA OPTIONS
// ========================================
export const golonganDarahList = ['A', 'B', 'AB', 'O'];
export const posyanduOptions = ['Posyandu Melati', 'Posyandu Mawar', 'Posyandu Anggrek', 'Posyandu Dahlia'];
export const kategoriPertanyaanList = ['Gizi', 'Tumbuh Kembang', 'Imunisasi', 'Kesehatan Umum'];
export const statusGiziOptions = ['Gizi Baik', 'Gizi Kurang', 'Gizi Lebih', 'Gizi Buruk'];

// ========================================
// DATA CHART TUMBUH KEMBANG
// ========================================
export const dataChartTumbuhKembang = [
  { name: '1', berat: 10.5, tinggi: 60, lingkar: 45, gizi: 80 },
  { name: '2', berat: 12, tinggi: 80, lingkar: 46, gizi: 60 },
  { name: '3', berat: 11, tinggi: 65, lingkar: 44, gizi: 90 },
  { name: '4', berat: 13, tinggi: 90, lingkar: 48, gizi: 50 },
  { name: '5', berat: 10, tinggi: 70, lingkar: 47, gizi: 100 },
  { name: '6', berat: 14, tinggi: 100, lingkar: 49, gizi: 40 },
  { name: '7', berat: 12, tinggi: 85, lingkar: 46, gizi: 80 },
  { name: '8', berat: 15, tinggi: 110, lingkar: 50, gizi: 60 },
  { name: '9', berat: 11, tinggi: 75, lingkar: 45, gizi: 90 },
  { name: '10', berat: 16, tinggi: 120, lingkar: 51, gizi: 70 },
  { name: '11', berat: 13, tinggi: 95, lingkar: 48, gizi: 100 },
  { name: '12', berat: 17, tinggi: 130, lingkar: 52, gizi: 50 },
  { name: '13', berat: 12, tinggi: 80, lingkar: 46, gizi: 80 },
  { name: '14', berat: 18, tinggi: 140, lingkar: 53, gizi: 60 },
  { name: '15', berat: 14, tinggi: 100, lingkar: 49, gizi: 90 },
  { name: '16', berat: 19, tinggi: 150, lingkar: 54, gizi: 100 },
];

// ========================================
// DATA ANALYTIC CARDS
// ========================================
export const analyticCardsAdmin = [
  { title: 'Total Artikel', value: 7, desc: 'Artikel dipublikasikan', icon: 'FiFileText' },
  { title: 'Total Balita', value: 5, desc: 'Balita terdaftar', icon: 'FiUsers' },
  { title: 'Total Posyandu', value: 5, desc: 'Posyandu aktif', icon: 'FiHome' },
  { title: 'Total Tenaga Kesehatan', value: 5, desc: 'Tenaga kesehatan aktif', icon: 'FiUserCheck' },
];

export const analyticCardsPosyandu = [
  { title: 'Total Anak', value: 2, desc: '2 aktif', icon: 'FiUser' },
  { title: 'Jadwal Imunisasi', value: 2, desc: 'Terjadwal bulan ini', icon: 'FiCalendar' },
  { title: 'Pemeriksaan Minggu Ini', value: 0, desc: 'Anak diperiksa', icon: 'FiActivity' },
  { title: 'Status Gizi', value: 1, desc: 'Gizi baik', icon: 'FiHeart' },
];

export const analyticCardsKesehatan = [
  { title: 'Total Anak', value: 24, desc: 'Anak terdaftar', icon: 'FiUsers' },
  { title: 'Pertanyaan Forum', value: 24, desc: 'Pertanyaan terjawab', icon: 'FiMessageSquare' },
  { title: 'Status Aktif', value: true, desc: 'Online', icon: 'FiCheckCircle' },
];

// ========================================
// DATA PERTANYAAN TERBARU
// ========================================
export const pertanyaanTerbaru = [
  {
    id: 1,
    penanya: "Bu Sarah",
    pertanyaan: "Anak saya sering menolak makan sayur, apa yang harus saya lakukan?",
    kategori: "Nutrisi & Makanan",
    waktu: "2 jam yang lalu"
  },
  {
    id: 2,
    penanya: "Pak Budi",
    pertanyaan: "Bagaimana cara mengatasi anak susah tidur malam?",
    kategori: "Pertumbuhan & Perkembangan",
    waktu: "4 jam yang lalu"
  },
  {
    id: 3,
    penanya: "Ibu Lina",
    pertanyaan: "Apakah imunisasi campak wajib?",
    kategori: "Kesehatan & Penyakit",
    waktu: "6 jam yang lalu"
  },
];

// ========================================
// FUNGSI FETCH DATA
// ========================================
export const fetchData = {
  // Fetch artikel
  getArtikel: () => Promise.resolve(artikelList),
  getArtikelById: (id) => Promise.resolve(artikelList.find(artikel => artikel.id === id)),
  
  // Fetch balita
  getBalita: () => Promise.resolve(balitaList),
  getBalitaById: (id) => Promise.resolve(balitaList.find(balita => balita.id === id)),
  
  // Fetch posyandu
  getPosyandu: () => Promise.resolve(posyanduList),
  getPosyanduById: (id) => Promise.resolve(posyanduDashboardList.find(posyandu => posyandu.id === id)),
  
  // Fetch tenaga kesehatan
  getTenagaKesehatan: () => Promise.resolve(tenagaKesehatanList),
  getTenagaKesehatanById: (id) => Promise.resolve(tenagaKesehatanList.find(tk => tk.id === id)),
  
  // Fetch desa
  getDesa: () => Promise.resolve(desaList),
  getDesaById: (id) => Promise.resolve(desaList.find(desa => desa.id === id)),
  
  // Fetch forum
  getPertanyaanForum: () => Promise.resolve(pertanyaanForumList),
  getPertanyaanById: (id) => Promise.resolve(pertanyaanForumList.find(pertanyaan => pertanyaan.id === id)),
  
  // Fetch jadwal imunisasi
  getJadwalImunisasi: () => Promise.resolve(jadwalImunisasiList),
  getJadwalById: (id) => Promise.resolve(jadwalImunisasiList.find(jadwal => jadwal.id === id)),
  
  // Fetch tumbuh kembang
  getTumbuhKembang: () => Promise.resolve(dataTumbuhKembang),
  getTumbuhKembangById: (id) => Promise.resolve(dataTumbuhKembang.find(tk => tk.id === id)),
  
  // Fetch statistik
  getStatistikForum: () => Promise.resolve(statistikForum),
  getKategoriPopuler: () => Promise.resolve(kategoriPopuler),
  
  // Fetch options
  getGolonganDarah: () => Promise.resolve(golonganDarahList),
  getPosyanduOptions: () => Promise.resolve(posyanduOptions),
  getKategoriPertanyaan: () => Promise.resolve(kategoriPertanyaanList),
  getStatusGiziOptions: () => Promise.resolve(statusGiziOptions),
  
  // Fetch chart data
  getChartTumbuhKembang: () => Promise.resolve(dataChartTumbuhKembang),
  
  // Fetch analytic cards
  getAnalyticCardsAdmin: () => Promise.resolve(analyticCardsAdmin),
  getAnalyticCardsPosyandu: () => Promise.resolve(analyticCardsPosyandu),
  getAnalyticCardsKesehatan: () => Promise.resolve(analyticCardsKesehatan),
  
  // Fetch pertanyaan terbaru
  getPertanyaanTerbaru: () => Promise.resolve(pertanyaanTerbaru),
  
  // Fetch data anak orang tua
  getAnakOrangTua: (orangTuaId) => Promise.resolve(anakOrangTuaList.filter(anak => anak.orangTuaId === orangTuaId)),
  getAnakOrangTuaById: (id) => Promise.resolve(anakOrangTuaList.find(anak => anak.id === id)),
  
  // Fetch data konsultasi orang tua
  getKonsultasiOrangTua: (orangTuaId) => Promise.resolve(konsultasiOrangTuaList.filter(konsultasi => konsultasi.orangTuaId === orangTuaId)),
  getKonsultasiById: (id) => Promise.resolve(konsultasiOrangTuaList.find(konsultasi => konsultasi.id === id)),
  
  // Fetch data jadwal imunisasi anak
  getJadwalImunisasiAnak: (anakId) => Promise.resolve(jadwalImunisasiAnakList.filter(jadwal => jadwal.anakId === anakId)),
  getJadwalImunisasiAnakById: (id) => Promise.resolve(jadwalImunisasiAnakList.find(jadwal => jadwal.id === id)),
  
  // Fetch data tumbuh kembang anak
  getTumbuhKembangAnak: (anakId) => Promise.resolve(dataTumbuhKembangAnak.filter(tk => tk.anakId === anakId)),
  getTumbuhKembangAnakById: (id) => Promise.resolve(dataTumbuhKembangAnak.find(tk => tk.id === id)),
  
  // Update child data
  updateAnakOrangTua: (updatedChild) => {
    const index = anakOrangTuaList.findIndex(anak => anak.id === updatedChild.id);
    if (index !== -1) {
      anakOrangTuaList[index] = { ...anakOrangTuaList[index], ...updatedChild };
    }
    return Promise.resolve(updatedChild);
  },

  // ========================================
  // POSYANDU DASHBOARD FUNCTIONS
  // ========================================
  
  // Fetch data anak posyandu
  getAnakPosyandu: (posyanduId) => Promise.resolve(anakPosyanduList.filter(anak => anak.posyanduId === posyanduId)),
  getAnakPosyanduById: (id) => Promise.resolve(anakPosyanduList.find(anak => anak.id === id)),
  
  // Fetch data tumbuh kembang posyandu
  getTumbuhKembangPosyandu: (posyanduId) => Promise.resolve(tumbuhKembangPosyanduList.filter(tk => tk.posyanduId === posyanduId)),
  getTumbuhKembangPosyanduById: (id) => Promise.resolve(tumbuhKembangPosyanduList.find(tk => tk.id === id)),
  
  // Fetch jadwal imunisasi posyandu
  getJadwalImunisasiPosyandu: (posyanduId) => Promise.resolve(jadwalImunisasiPosyanduList.filter(jadwal => jadwal.posyanduId === posyanduId)),
  getJadwalImunisasiPosyanduById: (id) => Promise.resolve(jadwalImunisasiPosyanduList.find(jadwal => jadwal.id === id)),
  
  // Update tumbuh kembang data
  updateTumbuhKembangPosyandu: (updatedData) => {
    const index = tumbuhKembangPosyanduList.findIndex(tk => tk.id === updatedData.id);
    if (index !== -1) {
      tumbuhKembangPosyanduList[index] = { ...tumbuhKembangPosyanduList[index], ...updatedData };
    }
    return Promise.resolve(updatedData);
  },
  
  // Add new anak to posyandu
  addAnakPosyandu: (newAnak) => {
    const newId = Math.max(...anakPosyanduList.map(anak => anak.id)) + 1;
    const anakWithId = { ...newAnak, id: newId };
    anakPosyanduList.push(anakWithId);
    return Promise.resolve(anakWithId);
  },
  
  // Delete anak from posyandu
  deleteAnakPosyandu: (id) => {
    const index = anakPosyanduList.findIndex(anak => anak.id === id);
    if (index !== -1) {
      anakPosyanduList.splice(index, 1);
    }
    return Promise.resolve({ success: true });
  },

  // Add new immunization schedule to posyandu
  addJadwalImunisasiPosyandu: (newJadwal) => {
    const newId = Math.max(...jadwalImunisasiPosyanduList.map(jadwal => jadwal.id)) + 1;
    const jadwalWithId = { ...newJadwal, id: newId };
    jadwalImunisasiPosyanduList.push(jadwalWithId);
    return Promise.resolve(jadwalWithId);
  },
}; 

// ========================================
// DATA ANAK ORANG TUA
// ========================================
export const anakOrangTuaList = [
  {
    id: 1,
    nama: 'Ghani Junior',
    tglLahir: '15 Januari 2023',
    orangTuaId: 2, // Siti Rahmah
    usia: '2 tahun 4 bulan',
    gender: 'Laki-laki',
    berat: '12.5 kg',
    tinggi: '89 cm',
    lingkarKepala: '46 cm',
    posyandu: 'Posyandu Dayeuhkolot',
    status: 'Sehat',
    golonganDarah: 'A',
    alamat: 'Jl. Sukapura No. 123, Bojongsoang',
    catatan: 'Anak aktif dan sehat',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
    tglPeriksa: '10 April 2025'
  },
  {
    id: 2,
    nama: 'Nadhira Putri',
    tglLahir: '20 Mei 2024',
    orangTuaId: 2, // Siti Rahmah
    usia: '8 bulan',
    gender: 'Perempuan',
    berat: '8.5 kg',
    tinggi: '69 cm',
    lingkarKepala: '42 cm',
    posyandu: 'Posyandu Sukabirus',
    status: 'Sehat',
    golonganDarah: 'B',
    alamat: 'Jl. Sukabirus No. 45, Bojongsoang',
    catatan: 'Perlu perhatian khusus untuk MPASI',
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
    tglPeriksa: '10 April 2025'
  },
  {
    id: 3,
    nama: 'Rafi Ahmad',
    tglLahir: '10 Maret 2023',
    orangTuaId: 3, // Budi Santoso
    usia: '2 tahun 1 bulan',
    gender: 'Laki-laki',
    berat: '12.5 kg',
    tinggi: '89 cm',
    lingkarKepala: '45 cm',
    posyandu: 'Posyandu Sukapura',
    status: 'Sehat',
    golonganDarah: 'O',
    alamat: 'Jl. Lengkong No. 67, Bojongsoang',
    catatan: 'Suka bermain dan belajar',
    foto: 'https://randomuser.me/api/portraits/men/45.jpg',
    tglPeriksa: '10 April 2025'
  }
];

// ========================================
// DATA KONSULTASI ORANG TUA
// ========================================
export const konsultasiOrangTuaList = [
  {
    id: 1,
    orangTuaId: 2, // Siti Rahmah
    anakId: 1, // Ghani Junior
    judul: 'Anak saya sering menolak makan sayur, apa yang harus saya lakukan?',
    tanggal: '2 Mei 2025',
    status: 'Terjawab',
    kategori: 'Nutrisi & Makanan',
    detail: 'Anak saya usia 2 tahun sering menolak makan sayur. Saya sudah mencoba berbagai cara tapi tetap tidak mau. Apakah ada tips khusus untuk mengatasi hal ini?',
    jawaban: 'Mencoba menyajikan sayuran dengan cara yang menarik bisa membantu. Misalnya, potong sayuran dalam bentuk yang lucu, tambahkan saus yang disukai anak, atau libatkan anak dalam proses memasak. Anda juga bisa mencoba menyembunyikan sayuran dalam makanan lain seperti smoothie atau pasta. Yang terpenting, tetap bersabar dan konsisten menawarkan sayuran tanpa memaksa.',
    penjawab: 'dr. Anita Wijaya',
    tglJawab: '3 Mei 2025',
  },
  {
    id: 2,
    orangTuaId: 2, // Siti Rahmah
    anakId: 1, // Ghani Junior
    judul: 'Berapa kali sebaiknya anak usia 2 tahun makan dalam sehari?',
    tanggal: '28 Apr 2025',
    status: 'Terjawab',
    kategori: 'Nutrisi & Makanan',
    detail: 'Saya ingin tahu berapa kali sebaiknya anak usia 2 tahun makan dalam sehari dan porsi yang tepat.',
    jawaban: 'Anak usia 2 tahun sebaiknya makan 3 kali sehari (sarapan, makan siang, makan malam) ditambah dengan 2-3 kali camilan sehat di antara waktu makan utama. Porsinya tidak perlu besar, yang penting nutrisinya lengkap mencakup karbohidrat, protein, lemak sehat, serta buah dan sayuran. Perhatikan juga tanda-tanda kenyang dari anak dan jangan memaksa jika sudah tidak mau makan lagi.',
    penjawab: 'dr. Budi Santoso',
    tglJawab: '29 Apr 2025',
  },
  {
    id: 3,
    orangTuaId: 3, // Budi Santoso
    anakId: 3, // Rafi Ahmad
    judul: 'Bagaimana cara mengatasi anak susah tidur malam?',
    tanggal: '25 Apr 2025',
    status: 'Belum Terjawab',
    kategori: 'Pertumbuhan & Perkembangan',
    detail: 'Anak saya usia 2 tahun sering terbangun di malam hari dan susah tidur kembali. Apa solusinya?',
    jawaban: '-',
    penjawab: '-',
    tglJawab: '-',
  }
];

// ========================================
// DATA JADWAL IMUNISASI ANAK
// ========================================
export const jadwalImunisasiAnakList = [
  {
    id: 1,
    anakId: 1, // Ghani Junior
    judul: 'Imunisasi DPT 3',
    status: 'Terjadwal',
    target: '6 Bulan',
    tanggal: '15 Januari 2024',
    deskripsi: 'Imunisasi DPT dosis ketiga untuk mencegah difteri, pertusis, dan tetanus',
    posyandu: 'Posyandu Dayeuhkolot'
  },
  {
    id: 2,
    anakId: 1, // Ghani Junior
    judul: 'Imunisasi Campak',
    status: 'Selesai',
    target: '9 Bulan',
    tanggal: '20 Januari 2024',
    deskripsi: 'Imunisasi campak untuk mencegah penyakit campak',
    posyandu: 'Posyandu Dayeuhkolot'
  },
  {
    id: 3,
    anakId: 2, // Nadhira Putri
    judul: 'Imunisasi Hepatitis B',
    status: 'Selesai',
    target: '0-24 Jam',
    tanggal: '10 Januari 2024',
    deskripsi: 'Imunisasi Hepatitis B dosis pertama',
    posyandu: 'Posyandu Sukabirus'
  },
  {
    id: 4,
    anakId: 2, // Nadhira Putri
    judul: 'Imunisasi BCG',
    status: 'Selesai',
    target: '0-2 Bulan',
    tanggal: '5 Januari 2024',
    deskripsi: 'Imunisasi BCG untuk mencegah tuberkulosis',
    posyandu: 'Posyandu Sukabirus'
  },
  {
    id: 5,
    anakId: 3, // Rafi Ahmad
    judul: 'Imunisasi DPT 2',
    status: 'Terjadwal',
    target: '4 Bulan',
    tanggal: '25 Januari 2024',
    deskripsi: 'Imunisasi DPT dosis kedua',
    posyandu: 'Posyandu Sukapura'
  }
];

// ========================================
// DATA TUMBUH KEMBANG ANAK
// ========================================
export const dataTumbuhKembangAnak = [
  { 
    id: 1,
    anakId: 1, // Ghani Junior
    nama: 'Ghani Junior',
    usia: '38 Bulan',
    berat: '12.5',
    tinggi: '85',
    lingkar: '46',
    statusGizi: 'Gizi Baik',
    tanggal: '10 Januari 2024'
  },
  { 
    id: 2,
    anakId: 2, // Nadhira Putri
    nama: 'Nadhira Putri',
    usia: '8 Bulan',
    berat: '8.5',
    tinggi: '69',
    lingkar: '42',
    statusGizi: 'Gizi Baik',
    tanggal: '12 Januari 2024'
  },
  { 
    id: 3,
    anakId: 3, // Rafi Ahmad
    nama: 'Rafi Ahmad',
    usia: '25 Bulan',
    berat: '11.2',
    tinggi: '82',
    lingkar: '45',
    statusGizi: 'Gizi Baik',
    tanggal: '8 Januari 2024'
  }
]; 