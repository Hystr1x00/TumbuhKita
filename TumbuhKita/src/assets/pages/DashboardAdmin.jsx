import React, { useState, useEffect, useCallback } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../assets/Logo.svg';
import { FiUser, FiBarChart2, FiBookOpen, FiMessageCircle, FiActivity, FiChevronDown, FiCalendar, FiArrowUp } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, Legend } from 'recharts';
import { Listbox } from '@headlessui/react';
import ModalDetailDesa from '../../components/admin/ModalDetailDesa';
import ModalEditDesa from '../../components/admin/ModalEditDesa';
import ModalTambahDesa from '../../components/admin/ModalTambahDesa';
import ModalTambahPosyandu from '../../components/admin/ModalTambahPosyandu';
import ModalDetailPosyandu from '../../components/admin/ModalDetailPosyandu';
import ModalEditPosyandu from '../../components/admin/ModalEditPosyandu';
import ModalDetailTenagaKesehatan from '../../components/admin/ModalDetailTenagaKesehatan';
import ModalEditTenagaKesehatan from '../../components/admin/ModalEditTenagaKesehatan';
import ModalTambahTenagaKesehatan from '../../components/admin/ModalTambahTenagaKesehatan';
import ModalDetailArtikel from '../../components/admin/ModalDetailArtikel';
import ModalEditArtikel from '../../components/admin/ModalEditArtikel';
import ModalTambahArtikel from '../../components/admin/ModalTambahArtikel';
import ModalEditBalita from '../../components/admin/ModalEditBalita';
import ModalTambahBalita from '../../components/admin/ModalTambahBalita';
import SidebarAdmin from '../../components/admin/SidebarAdmin';
import StatCardAdmin from '../../components/admin/StatCardAdmin';
import ArtikelTerbaruAdmin from '../../components/admin/ArtikelTerbaruAdmin';
import DesaTerbaruAdmin from '../../components/admin/DesaTerbaruAdmin';
import TableDesaAdmin from '../../components/admin/TableDesaAdmin';
import TableTenagaKesehatanAdmin from '../../components/admin/TableTenagaKesehatanAdmin';
import TableBalitaAdmin from '../../components/admin/TableBalitaAdmin';
import TableArtikelAdmin from '../../components/admin/TableArtikelAdmin';
import TablePosyanduAdmin from '../../components/admin/TablePosyanduAdmin';
import { desaList, posyanduList, tenagaKesehatanList, artikelList, balitaList, pertanyaanForumList } from '../../data/dummyData';

const anakList = [
  { nama: 'Ghani Junior', id: 1, gender: 'Laki-laki', umur: '2 tahun 3 bulan', foto: 'https://randomuser.me/api/portraits/men/32.jpg', tglLahir: '12 Januari 2023', berat: '12.5 kg', tglPeriksa: '10 April 2025', tinggi: '89 cm' },
  { nama: 'Nadhira', id: 2, gender: 'Perempuan', umur: '2 tahun 3 bulan', foto: 'https://randomuser.me/api/portraits/women/44.jpg', tglLahir: '12 Januari 2023', berat: '12.5 kg', tglPeriksa: '10 April 2025', tinggi: '89 cm' },
];

const golonganDarahList = ['A', 'B', 'AB', 'O'];
const kategoriPertanyaanList = ['Gizi', 'Tumbuh Kembang', 'Imunisasi', 'Kesehatan Umum'];

export default function DashboardAdmin() {
  const { user, logout } = useAuth();
  const [selectedAnak, setSelectedAnak] = useState(anakList[0]);
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
  const [pertanyaanList, setPertanyaanList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load pertanyaan data from dummy
  useEffect(() => {
    const loadPertanyaan = () => {
      try {
        setLoading(true);
        setPertanyaanList(pertanyaanForumList);
      } catch (error) {
        console.error('Error loading pertanyaan:', error);
        handleError('Gagal memuat data pertanyaan. Silakan coba lagi.');
      } finally {
        setLoading(false);
      }
    };

    loadPertanyaan();
  }, []);

  const filteredPertanyaan = kategoriAktif === 'Semua' ? pertanyaanList : pertanyaanList.filter(q => q.status === kategoriAktif);

  // Untuk label legend
  const tabLabel = {
    berat: 'Berat Badan',
    tinggi: 'Tinggi Badan',
    lingkar: 'Lingkar Kepala',
    gizi: 'Gizi',
  };

  // Untuk warna area
  const areaColor = {
    berat: '#A58AFF',
    tinggi: '#7158B3',
    lingkar: '#5F41B2',
    gizi: '#B498FF',
  };

  const [tabGrafikDetail, setTabGrafikDetail] = useState('berat');
  const [mounted, setMounted] = useState(false);
  const [modalDesaOpen, setModalDesaOpen] = useState(false);
  const [detailDesa, setDetailDesa] = useState(null);
  const [modalTambahDesaOpen, setModalTambahDesaOpen] = useState(false);
  const [modalTambahPosyanduOpen, setModalTambahPosyanduOpen] = useState(false);
  
  // State untuk modal edit
  const [modalEditDesaOpen, setModalEditDesaOpen] = useState(false);
  const [modalEditPosyanduOpen, setModalEditPosyanduOpen] = useState(false);
  const [modalEditTenagaKesehatanOpen, setModalEditTenagaKesehatanOpen] = useState(false);
  const [modalEditArtikelOpen, setModalEditArtikelOpen] = useState(false);
  const [modalEditBalitaOpen, setModalEditBalitaOpen] = useState(false);
  const [modalTambahBalitaOpen, setModalTambahBalitaOpen] = useState(false);
  const [modalTambahTenagaKesehatanOpen, setModalTambahTenagaKesehatanOpen] = useState(false);
  const [modalTambahArtikelOpen, setModalTambahArtikelOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  

  const [dataToEdit, setDataToEdit] = useState(null);

  const desaDetailDummy = {
    nama: "Desa Sukamaju",
    kecamatan: "Bojongsoang",
    kabupaten: "Bandung",
    provinsi: "Jawa Barat",
    kodePos: "11607",
    jumlahPenduduk: "1,432",
    kepalaDesa: "Bapak Suharto",
    telpKepalaDesa: "081234567890",
    alamat: "Jl. Raya Sukamaju No. 1",
    jumlahPosyandu: 5,
    status: "Aktif"
  };

  useEffect(() => {
    setMounted(false);
    const timeout = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timeout);
  }, [tabMenu]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownOpen && !event.target.closest('.profile-dropdown')) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileDropdownOpen]);

  // Handler untuk edit
  const handleEditDesa = (data) => {
    setDataToEdit(data);
    setModalEditDesaOpen(true);
    setModalDesaOpen(false);
  };

  const handleEditPosyandu = (data) => {
    setDataToEdit(data);
    setModalEditPosyanduOpen(true);
  };

  const handleEditTenagaKesehatan = (data) => {
    setDataToEdit(data);
    setModalEditTenagaKesehatanOpen(true);
  };

  const handleEditArtikel = (data) => {
    setDataToEdit(data);
    setModalEditArtikelOpen(true);
  };

  const handleEditBalita = useCallback((data) => {
    setDataToEdit(data);
    setModalEditBalitaOpen(true);
  }, []);

  // Handler untuk save edit
  const handleSaveEdit = (updatedData) => {
    // TODO: Implementasi save ke database
    setDataToEdit(null);
    
    // SweetAlert success
    Swal.fire({
      icon: 'success',
      title: 'Berhasil!',
      text: 'Data berhasil diperbarui',
      confirmButtonColor: '#5F41B2',
      confirmButtonText: 'OK'
    });
  };

  // Handler untuk save tambah data
  const handleSaveTambah = (newData) => {
    // TODO: Implementasi save ke database
    console.log('Data baru yang ditambahkan:', newData);
    
    // SweetAlert success
    Swal.fire({
      icon: 'success',
      title: 'Berhasil!',
      text: 'Data balita berhasil ditambahkan',
      confirmButtonColor: '#5F41B2',
      confirmButtonText: 'OK'
    });
  };

  // Handler untuk delete data
  const handleDelete = (data, type) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: `Data ${type} akan dihapus secara permanen!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        // TODO: Implementasi delete ke database
        console.log(`Data ${type} yang dihapus:`, data);
        
        Swal.fire(
          'Terhapus!',
          `Data ${type} berhasil dihapus.`,
          'success'
        );
      }
    });
  };

  // Handler untuk error
  const handleError = (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      confirmButtonColor: '#5F41B2',
      confirmButtonText: 'OK'
    });
  };

  // Handler untuk konfirmasi tutup modal
  const handleCloseModal = (modalSetter, hasChanges = false) => {
    if (hasChanges) {
      Swal.fire({
        title: 'Apakah Anda yakin?',
        text: 'Perubahan yang belum disimpan akan hilang',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#5F41B2',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Ya, tutup',
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          modalSetter(false);
        }
      });
    } else {
      modalSetter(false);
    }
  };

  // Handler untuk loading
  const showLoading = () => {
    Swal.fire({
      title: 'Memproses...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  };

  const hideLoading = () => {
    Swal.close();
  };

  // Handler untuk konfirmasi aksi
  const handleConfirmAction = (title, message, onConfirm) => {
    Swal.fire({
      title: title,
      text: message,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#5F41B2',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak'
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      }
    });
  };

  // Handler untuk informasi
  const handleInfo = (title, message) => {
    Swal.fire({
      icon: 'info',
      title: title,
      text: message,
      confirmButtonColor: '#5F41B2',
      confirmButtonText: 'OK'
    });
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Konfirmasi Logout',
      text: 'Apakah Anda yakin ingin keluar dari sistem?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#5F41B2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Logout',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Logout',
          text: 'Anda telah berhasil keluar dari sistem',
          confirmButtonColor: '#5F41B2',
          confirmButtonText: 'OK'
        }).then(() => {
          // Redirect to login page
          window.location.href = '/login';
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#F4EEFF80] font-roboto">
      {/* Navbar Atas Full Width */}
      <header className="fixed top-0 left-0 w-full bg-white flex items-center px-8 py-4 gap-6 z-40 border-b border-neutral-100">
        {/* Logo */}
        <div className="flex items-center gap-3 min-w-[180px]">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <span className="font-bold text-2xl text-[#5F41B2]">TumbuhKita.</span>
        </div>
        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md bg-[#F7F7F7] rounded-xl flex items-center px-4 py-2">
            <svg className="w-5 h-5 text-neutral-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <input type="text" placeholder="Cari..." className="bg-transparent outline-none border-none w-full text-sm" />
          </div>
        </div>
        {/* Notifikasi & Profile */}
        <div className="flex items-center gap-6">
          {/* Notifikasi */}
          <div className="relative">
            <div className="bg-primary-10 rounded-full p-3 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 16v-5a6 6 0 10-12 0v5a2 2 0 002 2h8a2 2 0 002-2z" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>
            </div>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
          {/* Profile */}
          <div className="relative profile-dropdown">
            <button 
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-2 border rounded-xl px-3 py-1.5 hover:bg-gray-50 transition-colors"
            >
              <img src={selectedAnak.foto} alt="profile" className="w-7 h-7 rounded-full object-cover" />
              <svg className={`w-4 h-4 text-neutral-400 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            {/* Dropdown Menu */}
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">{user?.nama || 'Admin'}</p>
                  <p className="text-xs text-gray-500">{user?.email || 'admin@tumbuhkita.id'}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                    <polyline points="16,17 21,12 16,7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      {/* Layout bawah navbar */}
      <div className="flex pt-24">
        {/* Sidebar */}
        <SidebarAdmin tabMenu={tabMenu} setTabMenu={setTabMenu} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Main Content */}
        <div className="flex-1 flex flex-col" style={{ marginLeft: sidebarOpen ? '16rem' : '5rem' }}>
          <main className={`flex-1 flex flex-col gap-6 p-4 md:p-8 md:ml-0 mt-0 transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Sidebar Toggle Button */}
            <button 
              className="self-start p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 mb-2" 
              onClick={() => setSidebarOpen(s => !s)}
            >
              <svg className="w-6 h-6 text-primary-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Greeting */}
            {tabMenu === 'Dashboard' && (
              <>
                {/* Judul Dashboard */}
                <div className="mb-4">
                  <h1 className="text-2xl md:text-3xl font-extrabold text-[#5F41B2] mb-1">Dashboard Admin</h1>
                </div>
                {/* Cards Statistik */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <StatCardAdmin color="bg-[#E6DEFA]" icon={<FiUser className="text-[#A58AFF] w-6 h-6" />} title="Total Desa" value="24" growth="+2 bulan ini" growthColor="text-green-500" />
                  <StatCardAdmin color="bg-[#D6F0FF]" icon={<FiActivity className="text-[#5AC8FA] w-6 h-6" />} title="Total Posyandu" value="86" growth="+5 bulan ini" growthColor="text-blue-500" />
                  <StatCardAdmin color="bg-[#FFF6D6]" icon={<FiBookOpen className="text-[#FFD600] w-6 h-6" />} title="Total Tenaga Kesehatan" value="24" growth="+2 bulan ini" growthColor="text-green-500" />
                  <StatCardAdmin color="bg-[#D6FFE6]" icon={<FiUser className="text-[#00C853] w-6 h-6" />} title="Total Balita" value="1,290" growth="+2 bulan ini" growthColor="text-green-500" />
                </div>
                {/* Cards Artikel & Desa Terbaru */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ArtikelTerbaruAdmin artikelList={[]} />
                  <DesaTerbaruAdmin desaList={[]} />
                </div>
              </>
            )}
            {tabMenu === 'Artikel' && !selectedArtikel && (
              <div className="w-full bg-[#F4EEFF80] min-h-screen p-0">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-[#5F41B2] mb-6">Manajemen Artikel</h1>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <input type="text" placeholder="Cari..." className="w-full max-w-xs bg-white rounded-xl px-4 py-2 text-base outline-none border-none shadow-sm" />
                    </div>
                    <button 
                      onClick={() => setModalTambahArtikelOpen(true)}
                      className="flex items-center gap-2 bg-[#A58AFF] text-white px-6 py-2 rounded-xl font-semibold shadow-sm hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
                      Tambah Artikel
                    </button>
                  </div>
                  <TableArtikelAdmin artikelManajemenList={artikelList} onEdit={handleEditArtikel} />
                  <ModalTambahArtikel
                    open={modalTambahArtikelOpen}
                    onClose={() => setModalTambahArtikelOpen(false)}
                    onSave={(data) => {
                      // TODO: handle submit data artikel baru
                      setModalTambahArtikelOpen(false);
                      
                      // SweetAlert success
                      Swal.fire({
                        icon: 'success',
                        title: 'Berhasil!',
                        text: 'Data artikel berhasil ditambahkan',
                        confirmButtonColor: '#5F41B2',
                        confirmButtonText: 'OK'
                      });
                    }}
                  />
                  <ModalEditArtikel
                    open={modalEditArtikelOpen}
                    onClose={() => setModalEditArtikelOpen(false)}
                    artikel={dataToEdit}
                    onSave={handleSaveEdit}
                  />
                </div>
              </div>
            )}
            {tabMenu === 'Desa' && (
              <div className="w-full bg-[#F4EEFF80] min-h-screen p-0">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-[#5F41B2] mb-6">Manajemen Desa</h1>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <input type="text" placeholder="Cari..." className="w-full max-w-xs bg-white rounded-xl px-4 py-2 text-base outline-none border-none shadow-sm" />
                    </div>
                    <button className="flex items-center gap-2 bg-[#A58AFF] text-white px-6 py-2 rounded-xl font-semibold shadow-sm hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600" onClick={() => setModalTambahDesaOpen(true)}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
                      Tambah Desa
                    </button>
                  </div>
                  <TableDesaAdmin desaTableList={desaList} onDetail={(desa) => { setDetailDesa(desa); setModalDesaOpen(true); }} onEdit={handleEditDesa} />
                  <ModalDetailDesa
                    open={modalDesaOpen}
                    onClose={() => setModalDesaOpen(false)}
                    data={detailDesa || {}}
                    onEdit={handleEditDesa}
                  />
                  <ModalTambahDesa
                    open={modalTambahDesaOpen}
                    onClose={() => setModalTambahDesaOpen(false)}
                    onSubmit={(data) => {
                      setModalTambahDesaOpen(false);
                      
                      // SweetAlert success
                      Swal.fire({
                        icon: 'success',
                        title: 'Berhasil!',
                        text: 'Data desa berhasil ditambahkan',
                        confirmButtonColor: '#5F41B2',
                        confirmButtonText: 'OK'
                      });
                    }}
                  />
                  <ModalEditDesa
                    open={modalEditDesaOpen}
                    onClose={() => setModalEditDesaOpen(false)}
                    data={dataToEdit}
                    onSave={handleSaveEdit}
                  />
                </div>
              </div>
            )}
            {tabMenu === 'Tenaga Kesehatan' && (
              <div className="w-full bg-[#F4EEFF80] min-h-screen p-0">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-[#5F41B2] mb-6">Manajemen Tenaga Kesehatan</h1>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <input type="text" placeholder="Cari..." className="w-full max-w-xs bg-white rounded-xl px-4 py-2 text-base outline-none border-none shadow-sm" />
                    </div>
                    <button 
                      onClick={() => setModalTambahTenagaKesehatanOpen(true)}
                      className="flex items-center gap-2 bg-[#A58AFF] text-white px-6 py-2 rounded-xl font-semibold shadow-sm hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
                      Tambah Tenaga Kesehatan
                    </button>
                  </div>
                  <TableTenagaKesehatanAdmin tenagaKesehatanTableList={tenagaKesehatanList} onEdit={handleEditTenagaKesehatan} />
                  <ModalTambahTenagaKesehatan
                    open={modalTambahTenagaKesehatanOpen}
                    onClose={() => setModalTambahTenagaKesehatanOpen(false)}
                    onSave={(data) => {
                      // TODO: handle submit data tenaga kesehatan baru
                      setModalTambahTenagaKesehatanOpen(false);
                      
                      // SweetAlert success
                      Swal.fire({
                        icon: 'success',
                        title: 'Berhasil!',
                        text: 'Data tenaga kesehatan berhasil ditambahkan',
                        confirmButtonColor: '#5F41B2',
                        confirmButtonText: 'OK'
                      });
                    }}
                  />
                  <ModalEditTenagaKesehatan
                    open={modalEditTenagaKesehatanOpen}
                    onClose={() => setModalEditTenagaKesehatanOpen(false)}
                    tenagaKesehatan={dataToEdit}
                    onSave={handleSaveEdit}
                  />
                </div>
              </div>
            )}
            {tabMenu === 'Posyandu' && (
              <div className="w-full bg-[#F4EEFF80] min-h-screen p-0">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-[#5F41B2] mb-6">Kelola Posyandu</h1>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <input type="text" placeholder="Cari..." className="w-full max-w-xs bg-white rounded-xl px-4 py-2 text-base outline-none border-none shadow-sm" />
                    </div>
                    <button className="flex items-center gap-2 bg-[#A58AFF] text-white px-6 py-2 rounded-xl font-semibold shadow-sm hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600" onClick={() => setModalTambahPosyanduOpen(true)}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
                      Tambah Posyandu
                    </button>
                  </div>
                  <TablePosyanduAdmin posyanduTableList={posyanduList} onEdit={handleEditPosyandu} />
                  <ModalTambahPosyandu
                    open={modalTambahPosyanduOpen}
                    onClose={() => setModalTambahPosyanduOpen(false)}
                    onSubmit={(data) => {
                      // TODO: handle submit data posyandu baru
                      setModalTambahPosyanduOpen(false);
                      
                      // SweetAlert success
                      Swal.fire({
                        icon: 'success',
                        title: 'Berhasil!',
                        text: 'Data posyandu berhasil ditambahkan',
                        confirmButtonColor: '#5F41B2',
                        confirmButtonText: 'OK'
                      });
                    }}
                  />
                  <ModalEditPosyandu
                    open={modalEditPosyanduOpen}
                    onClose={() => setModalEditPosyanduOpen(false)}
                    posyandu={dataToEdit}
                    onSave={handleSaveEdit}
                  />
                </div>
              </div>
            )}
            {tabMenu === 'Data Balita' && (
              <div className="w-full bg-[#F4EEFF80] min-h-screen p-0">
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-[#5F41B2] mb-6">Manajemen Balita</h1>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <input type="text" placeholder="Cari..." className="w-full max-w-xs bg-white rounded-xl px-4 py-2 text-base outline-none border-none shadow-sm" />
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setModalTambahBalitaOpen(true)}
                        className="flex items-center gap-2 bg-[#A58AFF] text-white px-6 py-2 rounded-xl font-semibold shadow-sm hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
                        Tambah Data Balita
                      </button>
                                          <button 
                      onClick={() => {
                        showLoading();
                        // Simulasi proses ekspor
                        setTimeout(() => {
                          hideLoading();
                          Swal.fire({
                            icon: 'success',
                            title: 'Berhasil!',
                            text: 'Data artikel berhasil diekspor',
                            confirmButtonColor: '#5F41B2',
                            confirmButtonText: 'OK'
                          });
                        }, 2000);
                      }}
                      className="flex items-center gap-2 bg-[#5F41B2] text-white px-6 py-2 rounded-xl font-semibold shadow-sm hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 12l5 5 5-5M12 17V3" /></svg>
                      Ekspor Data
                    </button>
                    </div>
                  </div>
                  <TableBalitaAdmin balitaTableList={balitaList} onEdit={handleEditBalita} />
                  <ModalEditBalita
                    open={modalEditBalitaOpen}
                    onClose={() => setModalEditBalitaOpen(false)}
                    balita={dataToEdit}
                    onSave={handleSaveEdit}
                  />
                  <ModalTambahBalita
                    open={modalTambahBalitaOpen}
                    onClose={() => setModalTambahBalitaOpen(false)}
                    onSave={handleSaveTambah}
                  />
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
} 