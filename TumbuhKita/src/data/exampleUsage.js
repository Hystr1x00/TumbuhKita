// Contoh Penggunaan Data Dummy
// File ini menunjukkan bagaimana menggunakan data dummy yang telah dibuat

import { fetchData } from './dummyData';

// ========================================
// CONTOH PENGGUNAAN UNTUK DASHBOARD ADMIN
// ========================================

// Contoh penggunaan untuk Dashboard Admin
export const contohDashboardAdmin = async () => {
  try {
    // Fetch semua data yang dibutuhkan dashboard admin
    const [artikel, balita, posyandu, tenagaKesehatan, desa, statistik] = await Promise.all([
      fetchData.getArtikel(),
      fetchData.getBalita(),
      fetchData.getPosyandu(),
      fetchData.getTenagaKesehatan(),
      fetchData.getDesa(),
      fetchData.getAnalyticCardsAdmin()
    ]);

    return {
      artikel,
      balita,
      posyandu,
      tenagaKesehatan,
      desa,
      statistik
    };
  } catch (error) {
    console.error('Error fetching admin data:', error);
    throw error;
  }
};

// ========================================
// CONTOH PENGGUNAAN UNTUK DASHBOARD ORANG TUA
// ========================================

export const contohDashboardOrtu = async () => {
  try {
    // Fetch data untuk dashboard orang tua
    const [artikel, dataChart, options] = await Promise.all([
      fetchData.getArtikel(),
      fetchData.getChartTumbuhKembang(),
      Promise.all([
        fetchData.getGolonganDarah(),
        fetchData.getPosyanduOptions(),
        fetchData.getKategoriPertanyaan()
      ])
    ]);

    return {
      artikel,
      dataChart,
      golonganDarah: options[0],
      posyanduOptions: options[1],
      kategoriPertanyaan: options[2]
    };
  } catch (error) {
    console.error('Error fetching ortu data:', error);
    throw error;
  }
};

// ========================================
// CONTOH PENGGUNAAN UNTUK DASHBOARD POSYANDU
// ========================================

export const contohDashboardPosyandu = async () => {
  try {
    // Fetch data untuk dashboard posyandu
    const [anakList, jadwalImunisasi, tumbuhKembang, statistik] = await Promise.all([
      fetchData.getBalita(),
      fetchData.getJadwalImunisasi(),
      fetchData.getTumbuhKembang(),
      fetchData.getAnalyticCardsPosyandu()
    ]);

    return {
      anakList,
      jadwalImunisasi,
      tumbuhKembang,
      statistik
    };
  } catch (error) {
    console.error('Error fetching posyandu data:', error);
    throw error;
  }
};

// ========================================
// CONTOH PENGGUNAAN UNTUK DASHBOARD TENAGA KESEHATAN
// ========================================

export const contohDashboardKesehatan = async () => {
  try {
    // Fetch data untuk dashboard tenaga kesehatan
    const [pertanyaanTerbaru, statistik] = await Promise.all([
      fetchData.getPertanyaanTerbaru(),
      fetchData.getAnalyticCardsKesehatan()
    ]);

    return {
      pertanyaanTerbaru,
      statistik
    };
  } catch (error) {
    console.error('Error fetching kesehatan data:', error);
    throw error;
  }
};

// ========================================
// CONTOH PENGGUNAAN UNTUK FORUM DISKUSI
// ========================================

export const contohForumDiskusi = async () => {
  try {
    // Fetch data untuk forum diskusi
    const [pertanyaan, statistik, kategoriPopuler] = await Promise.all([
      fetchData.getPertanyaanForum(),
      fetchData.getStatistikForum(),
      fetchData.getKategoriPopuler()
    ]);

    return {
      pertanyaan,
      statistik,
      kategoriPopuler
    };
  } catch (error) {
    console.error('Error fetching forum data:', error);
    throw error;
  }
};

// ========================================
// CONTOH PENGGUNAAN UNTUK DETAIL DATA
// ========================================

export const contohDetailData = async (id) => {
  try {
    // Fetch detail data berdasarkan ID
    const [artikel, balita, posyandu, tenagaKesehatan] = await Promise.all([
      fetchData.getArtikelById(id),
      fetchData.getBalitaById(id),
      fetchData.getPosyanduById(id),
      fetchData.getTenagaKesehatanById(id)
    ]);

    return {
      artikel,
      balita,
      posyandu,
      tenagaKesehatan
    };
  } catch (error) {
    console.error('Error fetching detail data:', error);
    throw error;
  }
};

// ========================================
// CONTOH PENGGUNAAN UNTUK FILTERING DAN SEARCHING
// ========================================

export const contohFilterDanSearch = async (kategori, keyword) => {
  try {
    // Fetch semua artikel
    const artikel = await fetchData.getArtikel();
    
    // Filter berdasarkan kategori
    const artikelFiltered = artikel.filter(item => 
      item.kategori === kategori
    );
    
    // Search berdasarkan keyword
    const artikelSearched = artikel.filter(item =>
      item.judul.toLowerCase().includes(keyword.toLowerCase()) ||
      item.isi.toLowerCase().includes(keyword.toLowerCase())
    );

    return {
      artikelFiltered,
      artikelSearched
    };
  } catch (error) {
    console.error('Error filtering/searching data:', error);
    throw error;
  }
};

// ========================================
// CONTOH PENGGUNAAN UNTUK STATISTIK
// ========================================

export const contohStatistik = async () => {
  try {
    // Fetch semua data untuk statistik
    const [artikel, balita, posyandu, tenagaKesehatan, pertanyaan] = await Promise.all([
      fetchData.getArtikel(),
      fetchData.getBalita(),
      fetchData.getPosyandu(),
      fetchData.getTenagaKesehatan(),
      fetchData.getPertanyaanForum()
    ]);

    // Hitung statistik
    const statistik = {
      totalArtikel: artikel.length,
      artikelDipublikasikan: artikel.filter(a => a.status === 'Dipublikasikan').length,
      artikelDraft: artikel.filter(a => a.status === 'Draft').length,
      totalBalita: balita.length,
      balitaSehat: balita.filter(b => b.status === 'Sehat').length,
      balitaPerluPerhatian: balita.filter(b => b.status === 'Perlu Perhatian').length,
      totalPosyandu: posyandu.length,
      totalTenagaKesehatan: tenagaKesehatan.length,
      totalPertanyaan: pertanyaan.length,
      pertanyaanTerjawab: pertanyaan.filter(p => p.isAnswered).length,
      pertanyaanBelumDijawab: pertanyaan.filter(p => !p.isAnswered).length
    };

    return statistik;
  } catch (error) {
    console.error('Error calculating statistics:', error);
    throw error;
  }
};

// ========================================
// CONTOH PENGGUNAAN UNTUK CHART DATA
// ========================================

export const contohChartData = async () => {
  try {
    // Fetch data untuk chart
    const chartData = await fetchData.getChartTumbuhKembang();
    
    // Transform data untuk chart
    const transformedData = chartData.map(item => ({
      bulan: item.name,
      beratBadan: item.berat,
      tinggiBadan: item.tinggi,
      lingkarKepala: item.lingkar,
      statusGizi: item.gizi
    }));

    return transformedData;
  } catch (error) {
    console.error('Error fetching chart data:', error);
    throw error;
  }
};

// ========================================
// CONTOH PENGGUNAAN UNTUK FORM OPTIONS
// ========================================

export const contohFormOptions = async () => {
  try {
    // Fetch semua options untuk form
    const [golonganDarah, posyanduOptions, kategoriPertanyaan, statusGizi] = await Promise.all([
      fetchData.getGolonganDarah(),
      fetchData.getPosyanduOptions(),
      fetchData.getKategoriPertanyaan(),
      fetchData.getStatusGiziOptions()
    ]);

    return {
      golonganDarah,
      posyanduOptions,
      kategoriPertanyaan,
      statusGizi
    };
  } catch (error) {
    console.error('Error fetching form options:', error);
    throw error;
  }
};

// ========================================
// CONTOH PENGGUNAAN UNTUK PAGINATION
// ========================================

export const contohPagination = async (page = 1, limit = 10) => {
  try {
    // Fetch semua artikel
    const artikel = await fetchData.getArtikel();
    
    // Hitung pagination
    const totalItems = artikel.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    // Slice data sesuai pagination
    const paginatedData = artikel.slice(startIndex, endIndex);
    
    return {
      data: paginatedData,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    };
  } catch (error) {
    console.error('Error paginating data:', error);
    throw error;
  }
}; 