import React, { useState, useEffect } from 'react';
import { FiUser, FiCalendar, FiActivity, FiHeart } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { fetchData } from '../../data/dummyData';
import NavbarPosyandu from '../../components/posyandu/NavbarPosyandu';
import AnalyticCards from '../../components/posyandu/AnalyticCards';
import TabSwitcher from '../../components/posyandu/TabSwitcher';
import DataAnakSection from '../../components/posyandu/DataAnakSection';
import TumbuhKembangSection from '../../components/posyandu/TumbuhKembangSection';
import ImunisasiSection from '../../components/posyandu/ImunisasiSection';

const tabList = [
  { key: 'dataAnak', label: 'Data Anak' },
  { key: 'tumbuhKembang', label: 'Tumbuh Kembang' },
  { key: 'imunisasi', label: 'Imunisasi' },
  { key: 'pengaturan', label: 'Pengaturan' },
];

export default function DashboardPosyandu() {
  const { user } = useAuth();
  const [selectedTab, setSelectedTab] = useState('dataAnak');
  const [selectedAnakIdx, setSelectedAnakIdx] = useState(0);
  const [formTumbuh, setFormTumbuh] = useState({ berat: '', tinggi: '', lingkar: '', statusGizi: '' });
  
  // State for data
  const [anakList, setAnakList] = useState([]);
  const [anakTumbuhKembang, setAnakTumbuhKembang] = useState([]);
  const [jadwalImunisasiList, setJadwalImunisasiList] = useState([]);
  const [analyticCards, setAnalyticCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posyanduInfo, setPosyanduInfo] = useState(null);

  // Load data based on logged-in user
  const loadData = async () => {
    if (user) {
      try {
        // Map user ID to posyanduId
        // User ID 4 and 5 are Posyandu users, map to posyanduId 1 for now
        const posyanduId = user.id === 4 || user.id === 5 ? 1 : 1; // Map to posyandu 1
        
        // Load anak data for this posyandu
        const anakData = await fetchData.getAnakPosyandu(posyanduId);
        setAnakList(anakData);
        
        // Load tumbuh kembang data
        const tumbuhKembangData = await fetchData.getTumbuhKembangPosyandu(posyanduId);
        setAnakTumbuhKembang(tumbuhKembangData);
        
        // Load jadwal imunisasi
        const jadwalData = await fetchData.getJadwalImunisasiPosyandu(posyanduId);
        setJadwalImunisasiList(jadwalData);
        
        // Get posyandu info
        const posyanduData = await fetchData.getPosyanduById(posyanduId);
        setPosyanduInfo(posyanduData);
        
        // Calculate analytic cards
        const totalAnak = anakData.length;
        const jadwalTerjadwal = jadwalData.filter(j => j.status === 'Terjadwal').length;
        const pemeriksaanMingguIni = 0; // This would be calculated based on date
        const giziBaik = anakData.filter(a => a.statusGizi === 'Gizi Baik').length;
        
        setAnalyticCards([
          { title: 'Total Anak', value: totalAnak, desc: `${totalAnak} aktif`, icon: <FiUser className="text-primary-50" size={24} /> },
          { title: 'Jadwal Imunisasi', value: jadwalTerjadwal, desc: 'Terjadwal bulan ini', icon: <FiCalendar className="text-primary-50" size={24} /> },
          { title: 'Pemeriksaan Minggu Ini', value: pemeriksaanMingguIni, desc: 'Anak diperiksa', icon: <FiActivity className="text-yellow-500" size={24} /> },
          { title: 'Status Gizi', value: giziBaik, desc: 'Gizi baik', icon: <FiHeart className="text-green-500" size={24} /> },
        ]);
        
      } catch (error) {
        console.error('Error loading posyandu data:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadData();
  }, [user]);

  // Function to handle data updates from modals
  const handleDataUpdate = () => {
    loadData();
  };

  // Update form when selected anak changes
  useEffect(() => {
    if (anakTumbuhKembang.length > 0 && selectedAnakIdx < anakTumbuhKembang.length) {
      const selectedAnak = anakTumbuhKembang[selectedAnakIdx];
      setFormTumbuh({
        berat: selectedAnak.berat || '',
        tinggi: selectedAnak.tinggi || '',
        lingkar: selectedAnak.lingkar || '',
        statusGizi: selectedAnak.statusGizi || '',
      });
    }
  }, [selectedAnakIdx, anakTumbuhKembang]);

  const statusGiziOptions = [
    'Gizi Baik',
    'Gizi Kurang',
    'Gizi Lebih',
    'Gizi Buruk',
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-blurry flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary-50 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blurry">
      <NavbarPosyandu />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-secondary-50 mb-1">
          {posyanduInfo?.nama || 'POSYANDU DAHLIA'}
        </h1>
        <p className="text-lg text-[#6C2BD7] mb-6">
          {posyanduInfo?.alamat || 'Bojongsoang, Sukapura'}
        </p>
        <AnalyticCards cards={analyticCards} />
        <TabSwitcher tabList={tabList} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === 'dataAnak' && <DataAnakSection anakList={anakList} onDataUpdate={handleDataUpdate} />}
        {selectedTab === 'tumbuhKembang' && anakTumbuhKembang.length > 0 && (
          <TumbuhKembangSection
            anakTumbuhKembang={anakTumbuhKembang}
            selectedAnakIdx={selectedAnakIdx}
            setSelectedAnakIdx={setSelectedAnakIdx}
            formTumbuh={formTumbuh}
            setFormTumbuh={setFormTumbuh}
            statusGiziOptions={statusGiziOptions}
          />
        )}
        {selectedTab === 'imunisasi' && <ImunisasiSection jadwalImunisasiList={jadwalImunisasiList} onDataUpdate={handleDataUpdate} />}
        {selectedTab === 'pengaturan' && (
          <div className="bg-white rounded-xl p-6 shadow text-center text-[#6C2BD7] font-semibold text-lg">Pengaturan (Coming Soon)</div>
        )}
      </div>
    </div>
  );
} 