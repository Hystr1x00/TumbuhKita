// Index file untuk data dummy TumbuhKita
// File ini memudahkan import data dummy dari satu tempat

// Export semua data dari dummyData.js
export {
  // Data utama
  artikelList,
  balitaList,
  posyanduList,
  tenagaKesehatanList,
  desaList,
  pertanyaanForumList,
  jadwalImunisasiList,
  dataTumbuhKembang,
  
  // Data statistik
  statistikForum,
  kategoriPopuler,
  
  // Data options
  golonganDarahList,
  posyanduOptions,
  kategoriPertanyaanList,
  statusGiziOptions,
  
  // Data chart
  dataChartTumbuhKembang,
  
  // Data analytic cards
  analyticCardsAdmin,
  analyticCardsPosyandu,
  analyticCardsKesehatan,
  
  // Data pertanyaan terbaru
  pertanyaanTerbaru,
  
  // Fungsi fetch
  fetchData
} from './dummyData';

// Export contoh penggunaan dari exampleUsage.js
export {
  contohDashboardAdmin,
  contohDashboardOrtu,
  contohDashboardPosyandu,
  contohDashboardKesehatan,
  contohForumDiskusi,
  contohDetailData,
  contohFilterDanSearch,
  contohStatistik,
  contohChartData,
  contohFormOptions,
  contohPagination
} from './exampleUsage';

// Export contoh komponen dari exampleComponent.jsx
export {
  DashboardAdminExample,
  ForumDiskusiExample,
  ArtikelListExample,
  FormTambahDataExample
} from './exampleComponent';

// Export default untuk kemudahan import
export { default as DataDummy } from './dummyData';
export { default as ExampleUsage } from './exampleUsage';
export { default as ExampleComponent } from './exampleComponent'; 