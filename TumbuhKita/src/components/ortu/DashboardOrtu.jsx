import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { fetchData } from '../../data/dummyData';
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import DetailCard from './DetailCard';
import GrowthChart from './GrowthChart';
import ChildProfileCard from './ChildProfileCard';
import RecentArticles from './RecentArticles';
import ChildList from './ChildList';
import ChildDetailView from './ChildDetailView';
import AddChildForm from './AddChildForm';
import ImmunizationSection from './ImmunizationSection';
import ConsultationSection from './ConsultationSection';
import ConsultationForm from './ConsultationForm';
import ArticleSection from './ArticleSection';

// Data chart untuk grafik tumbuh kembang
const data = [
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

const golonganDarahList = ['A', 'B', 'AB', 'O'];
const posyanduList = ['Posyandu Melati', 'Posyandu Mawar', 'Posyandu Anggrek'];
const kategoriPertanyaanList = ['Gizi', 'Tumbuh Kembang', 'Imunisasi', 'Kesehatan Umum'];

export default function DashboardOrtu() {
  const { user } = useAuth();
  const [selectedAnak, setSelectedAnak] = useState(null);
  const [anakList, setAnakList] = useState([]);
  const [artikelList, setArtikelList] = useState([]);
  const [konsultasiList, setKonsultasiList] = useState([]);
  const [tab, setTab] = useState('berat');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [tabMenu, setTabMenu] = useState('Dashboard');
  const [showForm, setShowForm] = useState(false);
  const [selectedDetailAnak, setSelectedDetailAnak] = useState(null);
  const [form, setForm] = useState({
    nama: '',
    tglLahir: '',
    gender: '',
    berat: '',
    tinggi: '',
    golonganDarah: '',
    posyandu: '',
    catatan: '',
  });
  const [showFormKonsultasi, setShowFormKonsultasi] = useState(false);
  const [formKonsultasi, setFormKonsultasi] = useState({
    anak: '',
    kategori: '',
    judul: '',
    detail: '',
  });
  const [selectedArtikel, setSelectedArtikel] = useState(null);
  const [kategoriAktif, setKategoriAktif] = useState('Semua');
  const [loading, setLoading] = useState(true);

  // Function to handle child data update
  const handleUpdateChild = (updatedChild) => {
    // Update the child in the anakList
    setAnakList(prevList => 
      prevList.map(child => 
        child.id === updatedChild.id ? updatedChild : child
      )
    );
    
    // Update selectedAnak if it's the same child
    if (selectedAnak && selectedAnak.id === updatedChild.id) {
      setSelectedAnak(updatedChild);
    }
    
    // Update selectedDetailAnak if it's the same child
    if (selectedDetailAnak && selectedDetailAnak.id === updatedChild.id) {
      setSelectedDetailAnak(updatedChild);
    }
  };

  // Function to handle edit profile click from ChildProfileCard
  const handleEditProfileClick = () => {
    setSelectedDetailAnak(selectedAnak);
    setTabMenu('Anak Saya');
  };

  // Load data berdasarkan user yang login
  useEffect(() => {
    const loadData = async () => {
      if (user) {
        try {
          // Load data anak berdasarkan orang tua yang login
          const anakData = await fetchData.getAnakOrangTua(user.id);
          setAnakList(anakData);
          
          // Set selected anak ke anak pertama jika ada
          if (anakData.length > 0) {
            setSelectedAnak(anakData[0]);
          }
          
          // Load data artikel
          const artikelData = await fetchData.getArtikel();
          setArtikelList(artikelData);
          
          // Load data konsultasi berdasarkan orang tua yang login
          const konsultasiData = await fetchData.getKonsultasiOrangTua(user.id);
          setKonsultasiList(konsultasiData);
          
        } catch (error) {
          console.error('Error loading data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadData();
  }, [user]);

  // Filter konsultasi berdasarkan kategori
  const filteredKonsultasi = kategoriAktif === 'Semua' 
    ? konsultasiList 
    : konsultasiList.filter(q => q.status === kategoriAktif);

  // Untuk warna area
  const areaColor = {
    berat: '#A58AFF',
    tinggi: '#7158B3',
    lingkar: '#5F41B2',
    gizi: '#B498FF',
  };

  const [tabGrafikDetail, setTabGrafikDetail] = useState('berat');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(false);
    const timeout = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timeout);
  }, [tabMenu]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F4EEFF80] font-roboto flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5F41B2] mx-auto mb-4"></div>
          <p className="text-[#5F41B2] font-medium">Memuat data...</p>
        </div>
      </div>
    );
  }

  // Jika tidak ada anak, tampilkan pesan
  if (anakList.length === 0 && tabMenu === 'Dashboard') {
    return (
      <div className="min-h-screen bg-[#F4EEFF80] font-roboto">
        <DashboardHeader selectedAnak={null} />
        <div className="flex pt-24">
          <Sidebar 
            sidebarOpen={sidebarOpen}
            anakList={anakList}
            selectedAnak={selectedAnak}
            setSelectedAnak={setSelectedAnak}
            tabMenu={tabMenu}
            setTabMenu={setTabMenu}
          />
          <div className="flex-1 flex flex-col" style={{ marginLeft: sidebarOpen ? '16rem' : '5rem' }}>
            <main className="flex-1 flex flex-col gap-6 p-4 md:p-8 md:ml-0 mt-0">
              <div className="text-center py-20">
                <h1 className="text-2xl md:text-4xl font-extrabold text-secondary-50 mb-4">
                  Selamat datang, {user?.nama}!
                </h1>
                <p className="text-neutral-500 text-lg mb-8">
                  Anda belum memiliki data anak. Silakan tambahkan data anak Anda terlebih dahulu.
                </p>
                <button 
                  className="bg-primary-50 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-90 transition-colors"
                  onClick={() => setTabMenu('Anak Saya')}
                >
                  Tambah Anak Pertama
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blurry font-roboto">
      {/* Header */}
      <DashboardHeader selectedAnak={selectedAnak} />
      
      {/* Layout bawah navbar */}
      <div className="flex pt-24">
        {/* Sidebar */}
        <Sidebar 
          sidebarOpen={sidebarOpen}
          anakList={anakList}
          selectedAnak={selectedAnak}
          setSelectedAnak={setSelectedAnak}
          tabMenu={tabMenu}
          setTabMenu={setTabMenu}
        />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col" style={{ marginLeft: sidebarOpen ? '16rem' : '5rem' }}>
          <main className={`flex-1 flex flex-col gap-6 p-4 md:p-8 md:ml-0 mt-0 transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Sidebar Toggle Button */}
            <button 
              className="self-start p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 mb-2" 
              onClick={() => setSidebarOpen(s => !s)}
            >
              <svg className="w-6 h-6 text-primary-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {sidebarOpen ? (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            {/* Dashboard Content */}
            {tabMenu === 'Dashboard' && selectedAnak && (
              <>
                <div className="mb-2">
                  <h1 className="text-2xl md:text-4xl font-extrabold text-secondary-50 mb-1">
                    Hallo, {user?.nama}
                  </h1>
                  <div className="text-neutral-500 text-sm md:text-base">
                    Informasi tumbuh kembang {selectedAnak.nama}
                  </div>
                </div>
                
                <ChildProfileCard selectedAnak={selectedAnak} mounted={mounted} onEditClick={handleEditProfileClick} />
                
                {/* Cards Detail */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-2 transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '160ms' }}>
                  <DetailCard title="Berat Badan" value={selectedAnak.berat} growth="+0.5 kg dari bulan lalu" />
                  <DetailCard title="Tinggi Badan" value={selectedAnak.tinggi} growth="+1.2 cm dari bulan lalu" />
                  <DetailCard title="Lingkar Kepala" value={selectedAnak.lingkarKepala} growth="+0.3 cm dari bulan lalu" />
                </div>
                
                <GrowthChart data={data} tab={tab} setTab={setTab} areaColor={areaColor} />
                
                <RecentArticles 
                  artikelList={artikelList} 
                  mounted={mounted} 
                  onArticleClick={setSelectedArtikel}
                  setTabMenu={setTabMenu}
                />
              </>
            )}
            
            {/* Anak Saya Content */}
            {tabMenu === 'Anak Saya' && !showForm && !selectedDetailAnak && (
              <div className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-secondary-50 mb-1">Anak Saya</h1>
                    <div className="text-neutral-400 text-base md:text-lg">Informasi tumbuh kembang Anak</div>
                  </div>
                  <button className="bg-primary-50 text-white px-6 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-primary-90 transition-colors" onClick={() => setShowForm(true)}>
                    <span className="text-xl">+</span> Tambah Anak
                  </button>
                </div>
                <ChildList anakList={anakList} mounted={mounted} setSelectedDetailAnak={setSelectedDetailAnak} />
              </div>
            )}
            
            {tabMenu === 'Anak Saya' && selectedDetailAnak && (
              <ChildDetailView 
                selectedDetailAnak={selectedDetailAnak}
                setSelectedDetailAnak={setSelectedDetailAnak}
                data={data}
                tabGrafikDetail={tabGrafikDetail}
                setTabGrafikDetail={setTabGrafikDetail}
                areaColor={areaColor}
                onUpdateChild={handleUpdateChild}
              />
            )}
            
            {tabMenu === 'Anak Saya' && showForm && (
              <AddChildForm 
                form={form}
                setForm={setForm}
                setShowForm={setShowForm}
                golonganDarahList={golonganDarahList}
                posyanduList={posyanduList}
              />
            )}
            
            {/* Imunisasi Content */}
            {tabMenu === 'Imunisasi' && (
              <ImmunizationSection anakList={anakList} mounted={mounted} setTabMenu={setTabMenu} />
            )}
            
            {/* Konsultasi Content */}
            {tabMenu === 'Konsultasi' && !showFormKonsultasi && (
              <ConsultationSection 
                mounted={mounted}
                setShowFormKonsultasi={setShowFormKonsultasi}
                kategoriAktif={kategoriAktif}
                setKategoriAktif={setKategoriAktif}
                filteredPertanyaan={filteredKonsultasi}
              />
            )}
            
            {tabMenu === 'Konsultasi' && showFormKonsultasi && (
              <ConsultationForm 
                formKonsultasi={formKonsultasi}
                setFormKonsultasi={setFormKonsultasi}
                setShowFormKonsultasi={setShowFormKonsultasi}
                anakList={anakList}
                kategoriPertanyaanList={kategoriPertanyaanList}
              />
            )}
            
            {/* Artikel Content */}
            {tabMenu === 'Artikel' && (
              <ArticleSection 
                mounted={mounted}
                artikelList={artikelList}
                selectedArtikel={selectedArtikel}
                setSelectedArtikel={setSelectedArtikel}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
} 