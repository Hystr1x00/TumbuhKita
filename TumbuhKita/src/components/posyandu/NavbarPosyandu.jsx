import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { fetchData } from '../../data/dummyData';
import Swal from 'sweetalert2';
import Logo from '../../../public/Logo.svg';

export default function NavbarPosyandu() {
  const { user, logout } = useAuth();
  const [posyanduInfo, setPosyanduInfo] = useState(null);

  // Load posyandu info based on user
  React.useEffect(() => {
    const loadPosyanduInfo = async () => {
      if (user) {
        try {
          // Map user ID to posyanduId (same mapping as DashboardPosyandu)
          const posyanduId = user.id === 4 || user.id === 5 ? 1 : 1;
          const posyanduData = await fetchData.getPosyanduById(posyanduId);
          setPosyanduInfo(posyanduData);
        } catch (error) {
          console.error('Error loading posyandu info:', error);
        }
      }
    };

    loadPosyanduInfo();
  }, [user]);

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
            <div className="flex items-center justify-between w-full px-8 py-4 bg-white">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8" />
        <span className="font-bold text-lg text-[#6C2BD7]">TumbuhKita.</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-gray-700">{user?.nama || 'Petugas Posyandu'}</p>
          <p className="text-xs text-gray-500">{posyanduInfo?.nama || 'Posyandu'}</p>
        </div>
        <button 
          onClick={handleLogout}
          className="border px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
} 