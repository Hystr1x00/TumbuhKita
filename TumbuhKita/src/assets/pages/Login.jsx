import React, { useState } from 'react';
import '../../App.css';
import balita from '../../assets/balita.svg';
import Logo from '../../assets/Logo.svg';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { FaRegHeart, FaRegBuilding } from 'react-icons/fa';
import { PiUsersThreeLight } from 'react-icons/pi';
import { LuUserCog } from 'react-icons/lu';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';

const roles = [
  { label: 'Admin', icon: <MdOutlineAdminPanelSettings size={24} /> },
  { label: 'Orang Tua', icon: <FaRegHeart size={24} /> },
  { label: 'Posyandu', icon: <PiUsersThreeLight size={24} /> },
  { label: 'Kesehatan', icon: <LuUserCog size={24} /> },
];

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState(roles[0].label);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen min-w-full bg-[#ffffff] flex items-stretch justify-center font-roboto">
      <div className="flex flex-1 w-full max-w-[1600px] min-h-screen">
        {/* Kiri */}
        <div className="flex-1 bg-[#F4EEFF] flex flex-col items-center justify-between relative min-h-full p-0 rounded-4xl py-8 md:py-16 overflow-hidden">
          <div className="flex items-center ml-6 self-start z-10">
            <img src={Logo} alt="Logo" className="w-10 h-10 mr-3" />
            <span className="font-bold text-2xl text-[#5F41B2]">TumbuhKita.</span>
          </div>
          <img src={balita} alt="balita" className="absolute left-10 bottom-0 w-[90%] max-w-[700px] md:max-w-[1000px] lg:max-w-[1300px] xl:max-w-[1600px] z-0" />
        </div>
        {/* Kanan */}
        <div className="flex-1 flex items-center justify-center min-h-screen bg-transparent">
          <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-[520px] min-h-[500px] flex flex-col items-center">
            <h2 className="font-bold text-xl mb-2 text-center">Masuk ke Akun Anda</h2>
            <div className="text-neutral-500 text-[13px] mb-6 text-center">
              Pilih peran dan masukkan kredensial Anda untuk melanjutkan
            </div>
            {/* Pilih Peran */}
            <div className="w-full mb-4">
              <div className="font-medium mb-2">Pilih Peran</div>
              <div className="role-grid grid grid-cols-4 gap-0 bg-[#fafafa] rounded-2xl p-0">
                {roles.map((role) => (
                  <button
                    key={role.label}
                    onClick={() => setSelectedRole(role.label)}
                    className={`w-full flex flex-col items-center justify-center min-h-[70px] rounded-2xl py-2 px-0 text-[10px] font-medium transition-colors duration-500
                      ${selectedRole === role.label ? 'bg-primary-90 text-white' : 'bg-transparent text-black'}
                    `}
                    type="button"
                  >
                    <span className={`mb-1 flex items-center justify-center ${selectedRole === role.label ? 'text-white' : 'text-primary-50'}`}>{role.icon}</span>
                    {role.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Email */}
            <div className="w-full mb-4">
              <div className="font-medium mb-1">Email</div>
              <input
                type="email"
                placeholder="nama@contoh"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-neutral-200 text-[16px] mb-2 focus:outline-none focus:ring-2 focus:ring-primary-50"
              />
            </div>
            {/* Password */}
            <div className="w-full mb-6">
              <div className="font-medium mb-1">Password</div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="nama@contoh"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full py-3 px-4 pr-12 rounded-lg border border-neutral-200 text-[16px] focus:outline-none focus:ring-2 focus:ring-primary-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-[22px] text-primary-50"
                  tabIndex={-1}
                  aria-label={showPassword ? 'Sembunyikan password' : 'Perlihatkan password'}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            {/* Button Login */}
            <button
              className="w-full bg-primary-50 text-white border-none rounded-xl py-3 font-medium text-[16px] mb-4 cursor-pointer hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={async () => {
                if (!email || !password) {
                  Swal.fire({
                    icon: 'warning',
                    title: 'Peringatan',
                    text: 'Mohon isi email dan password',
                    confirmButtonColor: '#5F41B2',
                    confirmButtonText: 'OK'
                  });
                  return;
                }

                setLoading(true);
                const result = login(email, password);
                
                if (result.success) {
                  // Check if user role matches selected role
                  if (result.user.role !== selectedRole) {
                    Swal.fire({
                      icon: 'error',
                      title: 'Peran Tidak Sesuai',
                      text: `Akun ini adalah ${result.user.role}, bukan ${selectedRole}`,
                      confirmButtonColor: '#5F41B2',
                      confirmButtonText: 'OK'
                    });
                    setLoading(false);
                    return;
                  }

                  // Navigate based on role
                  switch (result.user.role) {
                    case 'Admin':
                      navigate('/dashboard-Admin');
                      break;
                    case 'Orang Tua':
                      navigate('/dashboard-ortu');
                      break;
                    case 'Posyandu':
                      navigate('/dashboard-posyandu');
                      break;
                    case 'Kesehatan':
                      navigate('/dashboard-kesehatan');
                      break;
                    default:
                      navigate('/');
                  }

                  Swal.fire({
                    icon: 'success',
                    title: 'Login Berhasil',
                    text: `Selamat datang, ${result.user.nama}!`,
                    confirmButtonColor: '#5F41B2',
                    confirmButtonText: 'OK'
                  });
                } else {
                  Swal.fire({
                    icon: 'error',
                    title: 'Login Gagal',
                    text: result.message,
                    confirmButtonColor: '#5F41B2',
                    confirmButtonText: 'OK'
                  });
                }
                setLoading(false);
              }}
              disabled={loading}
            >
              {loading ? 'Memproses...' : `Masuk Sebagai ${selectedRole}`}
            </button>
            {/* Link Daftar */}
            <div className="text-[15px] text-center">
              <span className="text-black">Belum memiliki akun? </span>
              <a
                href="#"
                className="text-primary-50 font-medium hover:underline cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  navigate('/register');
                }}
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 