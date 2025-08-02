<img width="1898" height="957" alt="Screenshot 2025-08-02 115453" src="https://github.com/user-attachments/assets/dbc4f5eb-c3b5-4c95-b42a-b344ee67cf8c" />

# TUMBUH KITA


TumbuhKita adalah aplikasi web berbasis React + Vite untuk monitoring tumbuh kembang balita, posyandu, tenaga kesehatan, desa, dan forum diskusi. Proyek ini dilengkapi data dummy yang siap migrasi ke API real, serta fitur dashboard admin dan user yang lengkap.

---

## 🚀 Fitur Utama

- **Dashboard Admin**: Kelola data artikel, balita, posyandu, tenaga kesehatan, desa, dan forum diskusi.
- **Dashboard User (Orang Tua, Posyandu, Tenaga Kesehatan)**: Akses data sesuai peran.
- **Forum Diskusi**: Tanya jawab seputar kesehatan anak.
- **Manajemen Data**: Tambah, edit, hapus, dan detail data melalui modal popup.
- **Statistik & Chart**: Visualisasi data pertumbuhan, status gizi, dan aktivitas forum.
- **Data Dummy**: Semua fitur dapat diuji tanpa backend, siap migrasi ke API real.

---

## 📁 Struktur Folder

```
TumbuhKita/
├── public/                 # File statis (logo, favicon, dll)
├── src/
│   ├── assets/             # Gambar & aset SVG
│   ├── components/         # Komponen React (admin, ortu, posyandu, dll)
│   ├── config/             # Konfigurasi aplikasi
│   ├── context/            # Context API React
│   ├── data/               # Data dummy, contoh penggunaan, dokumentasi data
│   ├── App.jsx             # Root komponen aplikasi
│   └── main.jsx            # Entry point aplikasi
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 📝 Data Dummy

Semua data dummy dan fungsi fetch tersedia di [`src/data/`](TumbuhKita/src/data/README.md):

- Artikel, Balita, Posyandu, Tenaga Kesehatan, Desa, Forum Diskusi, Jadwal Imunisasi, Tumbuh Kembang
- Fungsi fetch: `fetchData.getArtikel()`, `fetchData.getBalita()`, dst.
- Data statistik, chart, analytic cards, dan form options juga tersedia.

Lihat dokumentasi lengkap di [src/data/README.md](TumbuhKita/src/data/README.md) dan ringkasan di [src/data/SUMMARY.md](TumbuhKita/src/data/SUMMARY.md).

---

## 💻 Cara Menjalankan

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Jalankan aplikasi**
   ```sh
   npm run dev
   ```

3. **Build untuk produksi**
   ```sh
   npm run build
   ```

---

## 🔧 Cara Penggunaan Data Dummy di Komponen

```js
import { fetchData } from './src/data/dummyData';

useEffect(() => {
  const loadData = async () => {
    const artikel = await fetchData.getArtikel();
    setArtikel(artikel);
  };
  loadData();
}, []);
```
Lihat panduan lengkap di [src/data/IMPLEMENTATION_GUIDE.md](TumbuhKita/src/data/IMPLEMENTATION_GUIDE.md).

---

## 🛠️ Fitur Edit & Modal

- Semua entitas (Desa, Artikel, Tenaga Kesehatan, Posyandu, Balita) dapat diedit melalui modal.
- Validasi form, array input (tags, sertifikasi, kader), dan UX konsisten.
- Lihat detail di [src/components/admin/README_EDIT_FEATURES.md](TumbuhKita/src/components/admin/README_EDIT_FEATURES.md).

---

## 📊 Statistik & Chart

- Statistik forum, kategori populer, analytic cards, dan chart tumbuh kembang tersedia via fungsi fetch.
- Contoh penggunaan di [src/data/exampleUsage.js](TumbuhKita/src/data/exampleUsage.js).

---

## 🔄 Migrasi ke API Real

Ganti fungsi `fetchData` dengan API fetch asli saat backend siap:
```js
// Sebelum (dummy)
const artikel = await fetchData.getArtikel();
// Sesudah (real API)
const artikel = await fetch('/api/artikel').then(res => res.json());
```

---

## 📋 Catatan

- Semua data dummy konsisten, realistik, dan siap untuk development/testing.
- Struktur data lengkap, ID unik, dan siap migrasi ke backend.
- Dokumentasi dan contoh penggunaan tersedia di folder [`src/data/`](TumbuhKita/src/data/).

---

## 📄 Lisensi

MIT

---

**Dokumentasi lebih detail:**
- [src/data/README.md](TumbuhKita/src/data/README.md)
-