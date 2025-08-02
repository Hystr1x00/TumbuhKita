import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../assets/Logo.svg';
import Swal from 'sweetalert2';

export default function DashboardHeader({ selectedAnak }) {
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = async () => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: 'Konfirmasi Logout',
      text: 'Apakah Anda yakin ingin keluar dari aplikasi?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#A58AFF',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Logout',
      cancelButtonText: 'Batal'
    });

    if (result.isConfirmed) {
      // Show loading state
      Swal.fire({
        title: 'Logging out...',
        text: 'Mohon tunggu sebentar',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      // Simulate logout delay
      setTimeout(() => {
        logout();
        
        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Logout',
          text: 'Anda telah berhasil keluar dari aplikasi',
          confirmButtonColor: '#A58AFF',
          confirmButtonText: 'OK'
        });
      }, 1000);
    }
  };

  return (
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
        <div className="relative">
          <button 
            className="flex items-center gap-2 border rounded-xl px-3 py-1.5 hover:bg-gray-50 transition-colors"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <img 
              src={selectedAnak?.foto || 'https://randomuser.me/api/portraits/women/44.jpg'} 
              alt="profile" 
              className="w-7 h-7 rounded-full object-cover" 
            />
            <span className="text-sm font-medium text-gray-700 hidden md:block">
              {user?.nama || 'User'}
            </span>
            <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Profile Dropdown Menu */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">{user?.nama}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Keluar
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay untuk menutup dropdown */}
      {showProfileMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowProfileMenu(false)}
        />
      )}
    </header>
  );
} 