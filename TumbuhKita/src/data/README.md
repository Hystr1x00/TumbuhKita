# Data Dummy TumbuhKita

Dokumentasi lengkap untuk data dummy statis yang digunakan dalam aplikasi TumbuhKita.

## 📁 Struktur File

```
src/data/
├── dummyData.js          # Data dummy utama
├── exampleUsage.js       # Contoh penggunaan
└── README.md            # Dokumentasi ini
```

## 🚀 Cara Penggunaan

### 1. Import Data Dummy

```javascript
import { fetchData } from './data/dummyData';
```

### 2. Menggunakan Fungsi Fetch

```javascript
// Fetch semua artikel
const artikel = await fetchData.getArtikel();

// Fetch artikel berdasarkan ID
const artikelById = await fetchData.getArtikelById(1);

// Fetch semua balita
const balita = await fetchData.getBalita();

// Fetch data untuk dashboard admin
const adminData = await Promise.all([
  fetchData.getArtikel(),
  fetchData.getBalita(),
  fetchData.getPosyandu(),
  fetchData.getTenagaKesehatan()
]);
```

## 📊 Jenis Data yang Tersedia

### 1. Data Artikel
- **Fungsi**: `getArtikel()`, `getArtikelById(id)`
- **Struktur**: 
  ```javascript
  {
    id: 1,
    judul: 'Pentingnya Imunisasi Untuk Balita',
    tanggal: '10 Mei 2025',
    isi: '...',
    author: 'Dr. Anita Wijaya',
    img: 'https://...',
    kategori: 'Kesehatan & Penyakit',
    status: 'Dipublikasikan',
    dilihat: 1245,
    tags: ['imunisasi', 'balita', 'kesehatan']
  }
  ```

### 2. Data Balita
- **Fungsi**: `getBalita()`, `getBalitaById(id)`
- **Struktur**:
  ```javascript
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
  }
  ```

### 3. Data Posyandu
- **Fungsi**: `getPosyandu()`, `getPosyanduById(id)`
- **Struktur**:
  ```javascript
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
  }
  ```

### 4. Data Tenaga Kesehatan
- **Fungsi**: `getTenagaKesehatan()`, `getTenagaKesehatanById(id)`
- **Struktur**:
  ```javascript
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
  }
  ```

### 5. Data Desa
- **Fungsi**: `getDesa()`, `getDesaById(id)`
- **Struktur**:
  ```javascript
  {
    id: 1,
    nama: 'Desa Sukamaju',
    kecamatan: 'Dayeuhkolot',
    kabupaten: 'Bandung',
    jumlahPosyandu: 5,
    jumlahBalita: 125,
    status: 'Aktif'
  }
  ```

### 6. Data Forum Diskusi
- **Fungsi**: `getPertanyaanForum()`, `getPertanyaanById(id)`
- **Struktur**:
  ```javascript
  {
    id: 1,
    nama: "Ibu Sarah",
    waktu: "2 hari yang lalu",
    title: "Anak saya sering menolak makan sayur...",
    isi: "Anak saya usia 2 tahun sering menolak makan sayur...",
    jawaban: 2,
    suka: 5,
    status: "Terjawab",
    kategori: "Nutrisi",
    kategoriPertanyaan: "Nutrisi & Makanan",
    isAnswered: true,
    tags: ['sayur', 'nutrisi', 'balita']
  }
  ```

### 7. Data Jadwal Imunisasi
- **Fungsi**: `getJadwalImunisasi()`, `getJadwalById(id)`
- **Struktur**:
  ```javascript
  {
    id: 1,
    judul: 'Imunisasi DPT 3',
    status: 'Terjadwal',
    target: '6 Bulan',
    tanggal: '15 Januari 2024',
    anakTerjadwal: 1,
    deskripsi: 'Imunisasi DPT dosis ketiga untuk mencegah difteri, pertusis, dan tetanus',
    posyandu: 'Posyandu Dayeuhkolot'
  }
  ```

### 8. Data Tumbuh Kembang
- **Fungsi**: `getTumbuhKembang()`, `getTumbuhKembangById(id)`
- **Struktur**:
  ```javascript
  {
    id: 1,
    nama: 'Ghani Junior',
    usia: '38 Bulan',
    berat: '12.5',
    tinggi: '85',
    lingkar: '46',
    statusGizi: 'Gizi Baik',
    tanggal: '10 Januari 2024'
  }
  ```

## 🎯 Contoh Penggunaan untuk Setiap Dashboard

### Dashboard Admin
```javascript
import { contohDashboardAdmin } from './data/exampleUsage';

const adminData = await contohDashboardAdmin();
// Returns: { artikel, balita, posyandu, tenagaKesehatan, desa, statistik }
```

### Dashboard Orang Tua
```javascript
import { contohDashboardOrtu } from './data/exampleUsage';

const ortuData = await contohDashboardOrtu();
// Returns: { artikel, dataChart, golonganDarah, posyanduOptions, kategoriPertanyaan }
```

### Dashboard Posyandu
```javascript
import { contohDashboardPosyandu } from './data/exampleUsage';

const posyanduData = await contohDashboardPosyandu();
// Returns: { anakList, jadwalImunisasi, tumbuhKembang, statistik }
```

### Dashboard Tenaga Kesehatan
```javascript
import { contohDashboardKesehatan } from './data/exampleUsage';

const kesehatanData = await contohDashboardKesehatan();
// Returns: { pertanyaanTerbaru, statistik }
```

### Forum Diskusi
```javascript
import { contohForumDiskusi } from './data/exampleUsage';

const forumData = await contohForumDiskusi();
// Returns: { pertanyaan, statistik, kategoriPopuler }
```

## 🔧 Fungsi Tambahan

### Filtering dan Searching
```javascript
import { contohFilterDanSearch } from './data/exampleUsage';

const filteredData = await contohFilterDanSearch('Kesehatan & Penyakit', 'imunisasi');
// Returns: { artikelFiltered, artikelSearched }
```

### Statistik
```javascript
import { contohStatistik } from './data/exampleUsage';

const statistik = await contohStatistik();
// Returns: {
//   totalArtikel: 7,
//   artikelDipublikasikan: 6,
//   artikelDraft: 1,
//   totalBalita: 5,
//   balitaSehat: 4,
//   balitaPerluPerhatian: 1,
//   // ... dan seterusnya
// }
```

### Chart Data
```javascript
import { contohChartData } from './data/exampleUsage';

const chartData = await contohChartData();
// Returns: transformed data untuk chart
```

### Form Options
```javascript
import { contohFormOptions } from './data/exampleUsage';

const options = await contohFormOptions();
// Returns: { golonganDarah, posyanduOptions, kategoriPertanyaan, statusGizi }
```

### Pagination
```javascript
import { contohPagination } from './data/exampleUsage';

const paginatedData = await contohPagination(1, 5);
// Returns: { data: [...], pagination: { currentPage, totalPages, ... } }
```

## 📝 Data Options yang Tersedia

### Golongan Darah
```javascript
const golonganDarah = await fetchData.getGolonganDarah();
// Returns: ['A', 'B', 'AB', 'O']
```

### Posyandu Options
```javascript
const posyanduOptions = await fetchData.getPosyanduOptions();
// Returns: ['Posyandu Melati', 'Posyandu Mawar', 'Posyandu Anggrek', 'Posyandu Dahlia']
```

### Kategori Pertanyaan
```javascript
const kategoriPertanyaan = await fetchData.getKategoriPertanyaan();
// Returns: ['Gizi', 'Tumbuh Kembang', 'Imunisasi', 'Kesehatan Umum']
```

### Status Gizi Options
```javascript
const statusGiziOptions = await fetchData.getStatusGiziOptions();
// Returns: ['Gizi Baik', 'Gizi Kurang', 'Gizi Lebih', 'Gizi Buruk']
```

## 📊 Data Statistik

### Statistik Forum
```javascript
const statistikForum = await fetchData.getStatistikForum();
// Returns: { total: 8, belum: 3, sudah: 5 }
```

### Kategori Populer
```javascript
const kategoriPopuler = await fetchData.getKategoriPopuler();
// Returns: [
//   { nama: "Nutrisi & Makanan", jumlah: 2 },
//   { nama: "Pertumbuhan & Perkembangan", jumlah: 2 },
//   { nama: "Kesehatan & Penyakit", jumlah: 2 }
// ]
```

## 🎨 Data Analytic Cards

### Admin Cards
```javascript
const adminCards = await fetchData.getAnalyticCardsAdmin();
// Returns: [
//   { title: 'Total Artikel', value: 7, desc: 'Artikel dipublikasikan', icon: 'FiFileText' },
//   { title: 'Total Balita', value: 5, desc: 'Balita terdaftar', icon: 'FiUsers' },
//   // ... dan seterusnya
// ]
```

### Posyandu Cards
```javascript
const posyanduCards = await fetchData.getAnalyticCardsPosyandu();
// Returns: [
//   { title: 'Total Anak', value: 2, desc: '2 aktif', icon: 'FiUser' },
//   { title: 'Jadwal Imunisasi', value: 2, desc: 'Terjadwal bulan ini', icon: 'FiCalendar' },
//   // ... dan seterusnya
// ]
```

### Kesehatan Cards
```javascript
const kesehatanCards = await fetchData.getAnalyticCardsKesehatan();
// Returns: [
//   { title: 'Total Anak', value: 24, desc: 'Anak terdaftar', icon: 'FiUsers' },
//   { title: 'Pertanyaan Forum', value: 24, desc: 'Pertanyaan terjawab', icon: 'FiMessageSquare' },
//   // ... dan seterusnya
// ]
```

## 🔄 Migrasi ke API Real

Ketika siap untuk menggunakan API real, Anda hanya perlu mengganti fungsi `fetchData` dengan panggilan API yang sebenarnya:

```javascript
// Sebelum (dummy data)
const artikel = await fetchData.getArtikel();

// Sesudah (real API)
const artikel = await fetch('/api/artikel');
```

## 📋 Catatan Penting

1. **Semua fungsi mengembalikan Promise** - Gunakan `async/await` atau `.then()`
2. **Data konsisten** - Semua data dummy saling terkait dan konsisten
3. **ID unik** - Setiap item memiliki ID unik untuk referensi
4. **Struktur lengkap** - Data mencakup semua field yang dibutuhkan UI
5. **Realistik** - Data dibuat menyerupai data real untuk testing yang akurat

## 🚀 Quick Start

```javascript
// Import data dummy
import { fetchData } from './data/dummyData';

// Gunakan dalam komponen React
function MyComponent() {
  const [artikel, setArtikel] = useState([]);
  
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData.getArtikel();
      setArtikel(data);
    };
    
    loadData();
  }, []);
  
  return (
    <div>
      {artikel.map(item => (
        <div key={item.id}>{item.judul}</div>
      ))}
    </div>
  );
}
```

Dengan data dummy ini, Anda dapat mengembangkan dan menguji semua fitur aplikasi TumbuhKita tanpa bergantung pada backend yang belum siap. 