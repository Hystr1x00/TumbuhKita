# Panduan Implementasi Data Dummy TumbuhKita

## 🎯 Tujuan

Panduan ini menjelaskan bagaimana mengimplementasikan data dummy yang telah dibuat ke dalam komponen-komponen React di aplikasi TumbuhKita.

## 📋 Komponen yang Telah Diupdate

### ✅ Komponen Admin yang Sudah Diimplementasi

1. **TableArtikelAdmin.jsx**
   - ✅ Menggunakan `fetchData.getArtikel()`
   - ✅ Loading state dengan spinner
   - ✅ Error handling
   - ✅ Data real-time dari dummy

2. **TableBalitaAdmin.jsx**
   - ✅ Menggunakan `fetchData.getBalita()`
   - ✅ Loading state dengan spinner
   - ✅ Error handling
   - ✅ Data real-time dari dummy

3. **TableTenagaKesehatanAdmin.jsx**
   - ✅ Menggunakan `fetchData.getTenagaKesehatan()`
   - ✅ Loading state dengan spinner
   - ✅ Error handling
   - ✅ Data real-time dari dummy

4. **TableDesaAdmin.jsx**
   - ✅ Menggunakan `fetchData.getDesa()`
   - ✅ Loading state dengan spinner
   - ✅ Error handling
   - ✅ Data real-time dari dummy

5. **StatCardAdmin.jsx**
   - ✅ Menggunakan multiple `fetchData` calls
   - ✅ Dynamic statistik berdasarkan data real
   - ✅ Loading state dengan spinner
   - ✅ Error handling

6. **ArtikelTerbaruAdmin.jsx**
   - ✅ Menggunakan `fetchData.getArtikel()`
   - ✅ Loading state dengan spinner
   - ✅ Error handling
   - ✅ Menampilkan 4 artikel terbaru

7. **DesaTerbaruAdmin.jsx**
   - ✅ Menggunakan `fetchData.getDesa()`
   - ✅ Loading state dengan spinner
   - ✅ Error handling
   - ✅ Menampilkan 4 desa terbaru

8. **DashboardAdmin.jsx**
   - ✅ Menggunakan `fetchData.getPertanyaanForum()`
   - ✅ Loading state
   - ✅ Error handling
   - ✅ Data real-time untuk pertanyaan forum

9. **ForumDiskusi.jsx**
   - ✅ Menggunakan multiple `fetchData` calls
   - ✅ Loading state dengan spinner
   - ✅ Error handling
   - ✅ Data real-time untuk pertanyaan, statistik, dan kategori

## 🔧 Pola Implementasi yang Digunakan

### 1. Import Data Dummy
```javascript
import { fetchData } from '../../data/dummyData';
```

### 2. State Management
```javascript
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
```

### 3. useEffect untuk Load Data
```javascript
useEffect(() => {
  const loadData = async () => {
    try {
      setLoading(true);
      const data = await fetchData.getArtikel(); // atau fungsi fetch lainnya
      setData(data);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  loadData();
}, []);
```

### 4. Loading State
```javascript
if (loading) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full">
      <h2 className="font-bold text-xl text-[#5F41B2] mb-4">Judul Komponen</h2>
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5F41B2]"></div>
      </div>
    </div>
  );
}
```

### 5. Render Data
```javascript
return (
  <div className="bg-white rounded-2xl shadow p-6 w-full overflow-x-auto">
    <h2 className="font-bold text-xl text-[#5F41B2] mb-4">Judul Komponen</h2>
    <table className="min-w-full text-sm text-left">
      {/* Table header */}
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-b border-neutral-200 last:border-b-0 hover:bg-[#F4EEFF40]">
            {/* Table cells menggunakan data dari item */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
```

## 🚀 Cara Menggunakan di Komponen Baru

### Langkah 1: Import Data Dummy
```javascript
import { fetchData } from '../../data/dummyData';
```

### Langkah 2: Setup State
```javascript
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
```

### Langkah 3: Load Data dengan useEffect
```javascript
useEffect(() => {
  const loadData = async () => {
    try {
      setLoading(true);
      const data = await fetchData.getArtikel(); // sesuaikan dengan fungsi yang dibutuhkan
      setData(data);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  loadData();
}, []);
```

### Langkah 4: Handle Loading State
```javascript
if (loading) {
  return <div>Loading...</div>;
}
```

### Langkah 5: Render Data
```javascript
return (
  <div>
    {data.map(item => (
      <div key={item.id}>
        {/* Render item data */}
      </div>
    ))}
  </div>
);
```

## 📊 Fungsi Fetch yang Tersedia

### Data Utama
- `fetchData.getArtikel()` - Data artikel
- `fetchData.getBalita()` - Data balita
- `fetchData.getPosyandu()` - Data posyandu
- `fetchData.getTenagaKesehatan()` - Data tenaga kesehatan
- `fetchData.getDesa()` - Data desa
- `fetchData.getPertanyaanForum()` - Data pertanyaan forum
- `fetchData.getJadwalImunisasi()` - Data jadwal imunisasi
- `fetchData.getTumbuhKembang()` - Data tumbuh kembang

### Data Berdasarkan ID
- `fetchData.getArtikelById(id)`
- `fetchData.getBalitaById(id)`
- `fetchData.getPosyanduById(id)`
- `fetchData.getTenagaKesehatanById(id)`
- `fetchData.getDesaById(id)`
- `fetchData.getPertanyaanById(id)`

### Data Options untuk Form
- `fetchData.getGolonganDarah()`
- `fetchData.getPosyanduOptions()`
- `fetchData.getKategoriPertanyaan()`
- `fetchData.getStatusGiziOptions()`

### Data Statistik
- `fetchData.getStatistikForum()`
- `fetchData.getKategoriPopuler()`

### Data Chart
- `fetchData.getChartTumbuhKembang()`

### Data Analytic Cards
- `fetchData.getAnalyticCardsAdmin()`
- `fetchData.getAnalyticCardsPosyandu()`
- `fetchData.getAnalyticCardsKesehatan()`

## 🔄 Contoh Implementasi Lengkap

```javascript
import React, { useState, useEffect } from 'react';
import { fetchData } from '../../data/dummyData';

export default function MyComponent() {
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArtikel = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchData.getArtikel();
        setArtikel(data);
      } catch (err) {
        setError(err.message);
        console.error('Error loading artikel:', err);
      } finally {
        setLoading(false);
      }
    };

    loadArtikel();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5F41B2]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-8">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="font-bold text-xl text-[#5F41B2] mb-4">Artikel</h2>
      <div className="space-y-4">
        {artikel.map(item => (
          <div key={item.id} className="border-b pb-4">
            <h3 className="font-semibold">{item.judul}</h3>
            <p className="text-sm text-gray-600">Oleh: {item.author}</p>
            <p className="text-sm text-gray-500">{item.tanggal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## ⚠️ Best Practices

1. **Selalu gunakan loading state** untuk memberikan feedback ke user
2. **Handle error dengan baik** untuk debugging yang mudah
3. **Gunakan key yang unik** saat mapping data (biasanya `item.id`)
4. **Gunakan async/await** untuk handling Promise
5. **Cleanup useEffect** jika diperlukan untuk mencegah memory leak
6. **Gunakan try-catch** untuk error handling yang robust

## 🔄 Migrasi ke API Real

Ketika backend siap, Anda hanya perlu mengganti fungsi fetch:

```javascript
// Sebelum (dummy data)
const data = await fetchData.getArtikel();

// Sesudah (real API)
const response = await fetch('/api/artikel');
const data = await response.json();
```

## 📝 Checklist Implementasi

- [ ] Import `fetchData` dari `../../data/dummyData`
- [ ] Setup state untuk data dan loading
- [ ] Implementasi `useEffect` untuk load data
- [ ] Handle loading state dengan spinner
- [ ] Handle error state
- [ ] Render data dengan key yang unik
- [ ] Test komponen dengan data dummy
- [ ] Dokumentasi perubahan

Dengan mengikuti panduan ini, Anda dapat dengan mudah mengimplementasikan data dummy ke dalam komponen-komponen React di aplikasi TumbuhKita. 