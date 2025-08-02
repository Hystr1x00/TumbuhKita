// Contoh Komponen React yang menggunakan Data Dummy
// File ini menunjukkan implementasi praktis penggunaan data dummy

import React, { useState, useEffect } from 'react';
import { fetchData } from './dummyData';

// ========================================
// CONTOH KOMPONEN DASHBOARD ADMIN
// ========================================

export const DashboardAdminExample = () => {
  const [data, setData] = useState({
    artikel: [],
    balita: [],
    posyandu: [],
    tenagaKesehatan: [],
    statistik: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [artikel, balita, posyandu, tenagaKesehatan, statistik] = await Promise.all([
          fetchData.getArtikel(),
          fetchData.getBalita(),
          fetchData.getPosyandu(),
          fetchData.getTenagaKesehatan(),
          fetchData.getAnalyticCardsAdmin()
        ]);

        setData({
          artikel,
          balita,
          posyandu,
          tenagaKesehatan,
          statistik
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>
      
      {/* Statistik Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {data.statistik.map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold">{card.title}</h3>
            <p className="text-2xl font-bold text-blue-600">{card.value}</p>
            <p className="text-sm text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Tabel Artikel */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Artikel Terbaru</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Judul</th>
                <th className="text-left p-2">Penulis</th>
                <th className="text-left p-2">Kategori</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Dilihat</th>
              </tr>
            </thead>
            <tbody>
              {data.artikel.slice(0, 5).map((artikel) => (
                <tr key={artikel.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{artikel.judul}</td>
                  <td className="p-2">{artikel.author}</td>
                  <td className="p-2">{artikel.kategori}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      artikel.status === 'Dipublikasikan' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {artikel.status}
                    </span>
                  </td>
                  <td className="p-2">{artikel.dilihat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabel Balita */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Data Balita</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Nama</th>
                <th className="text-left p-2">Orang Tua</th>
                <th className="text-left p-2">Usia</th>
                <th className="text-left p-2">Posyandu</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.balita.map((balita) => (
                <tr key={balita.id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{balita.nama}</td>
                  <td className="p-2">{balita.orangTua}</td>
                  <td className="p-2">{balita.usia}</td>
                  <td className="p-2">{balita.posyandu}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      balita.status === 'Sehat' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {balita.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ========================================
// CONTOH KOMPONEN FORUM DISKUSI
// ========================================

export const ForumDiskusiExample = () => {
  const [pertanyaan, setPertanyaan] = useState([]);
  const [statistik, setStatistik] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [pertanyaanData, statistikData] = await Promise.all([
          fetchData.getPertanyaanForum(),
          fetchData.getStatistikForum()
        ]);

        setPertanyaan(pertanyaanData);
        setStatistik(statistikData);
      } catch (err) {
        console.error('Error loading forum data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading forum...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Forum Diskusi</h1>
      
      {/* Statistik */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold">Total Pertanyaan</h3>
          <p className="text-2xl font-bold text-blue-600">{statistik.total}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold">Terjawab</h3>
          <p className="text-2xl font-bold text-green-600">{statistik.sudah}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <h3 className="text-lg font-semibold">Belum Dijawab</h3>
          <p className="text-2xl font-bold text-red-600">{statistik.belum}</p>
        </div>
      </div>

      {/* Daftar Pertanyaan */}
      <div className="space-y-4">
        {pertanyaan.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <span className={`px-2 py-1 rounded text-xs ${
                item.isAnswered 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {item.status}
              </span>
            </div>
            <p className="text-gray-600 mb-3">{item.isi}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span>Oleh: {item.nama}</span>
                <span>{item.waktu}</span>
                <span>Kategori: {item.kategoriPertanyaan}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>💬 {item.jawaban} jawaban</span>
                <span>👍 {item.suka} suka</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ========================================
// CONTOH KOMPONEN ARTIKEL LIST
// ========================================

export const ArtikelListExample = () => {
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKategori, setSelectedKategori] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchData.getArtikel();
        setArtikel(data);
      } catch (err) {
        console.error('Error loading artikel:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter artikel berdasarkan search dan kategori
  const filteredArtikel = artikel.filter(item => {
    const matchesSearch = item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.isi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesKategori = !selectedKategori || item.kategori === selectedKategori;
    return matchesSearch && matchesKategori;
  });

  // Get unique kategori
  const kategoriList = [...new Set(artikel.map(item => item.kategori))];

  if (loading) return <div>Loading artikel...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Artikel Kesehatan</h1>
      
      {/* Filter dan Search */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Cari artikel..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-lg"
        />
        <select
          value={selectedKategori}
          onChange={(e) => setSelectedKategori(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Semua Kategori</option>
          {kategoriList.map(kategori => (
            <option key={kategori} value={kategori}>{kategori}</option>
          ))}
        </select>
      </div>

      {/* Artikel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtikel.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img 
              src={item.img} 
              alt={item.judul}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-blue-600 font-semibold">{item.kategori}</span>
                <span className="text-xs text-gray-500">{item.tanggal}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.judul}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.isi}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Oleh: {item.author}</span>
                <span className="text-sm text-gray-500">👁 {item.dilihat}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredArtikel.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Tidak ada artikel yang ditemukan.
        </div>
      )}
    </div>
  );
};

// ========================================
// CONTOH KOMPONEN FORM TAMBAH DATA
// ========================================

export const FormTambahDataExample = () => {
  const [formData, setFormData] = useState({
    nama: '',
    tglLahir: '',
    orangTua: '',
    gender: '',
    golonganDarah: '',
    posyandu: '',
    alamat: ''
  });
  const [options, setOptions] = useState({
    golonganDarah: [],
    posyandu: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOptions = async () => {
      try {
        setLoading(true);
        const [golonganDarah, posyandu] = await Promise.all([
          fetchData.getGolonganDarah(),
          fetchData.getPosyanduOptions()
        ]);

        setOptions({
          golonganDarah,
          posyandu
        });
      } catch (err) {
        console.error('Error loading options:', err);
      } finally {
        setLoading(false);
      }
    };

    loadOptions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulasi submit data
      console.log('Data yang akan disimpan:', formData);
      alert('Data berhasil disimpan!');
      
      // Reset form
      setFormData({
        nama: '',
        tglLahir: '',
        orangTua: '',
        gender: '',
        golonganDarah: '',
        posyandu: '',
        alamat: ''
      });
    } catch (err) {
      console.error('Error saving data:', err);
      alert('Gagal menyimpan data!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) return <div>Loading form...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tambah Data Balita</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tanggal Lahir</label>
            <input
              type="date"
              name="tglLahir"
              value={formData.tglLahir}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Nama Orang Tua</label>
            <input
              type="text"
              name="orangTua"
              value={formData.orangTua}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Jenis Kelamin</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Golongan Darah</label>
            <select
              name="golonganDarah"
              value={formData.golonganDarah}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Pilih Golongan Darah</option>
              {options.golonganDarah.map(gol => (
                <option key={gol} value={gol}>{gol}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Posyandu</label>
            <select
              name="posyandu"
              value={formData.posyandu}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Pilih Posyandu</option>
              {options.posyandu.map(pos => (
                <option key={pos} value={pos}>{pos}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Alamat</label>
          <textarea
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Simpan Data
          </button>
        </div>
      </form>
    </div>
  );
};

// Export semua komponen
export default {
  DashboardAdminExample,
  ForumDiskusiExample,
  ArtikelListExample,
  FormTambahDataExample
}; 