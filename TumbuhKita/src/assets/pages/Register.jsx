import React, { useState } from 'react';
import '../../App.css';
import balita from '../../assets/balita.svg';
import Logo from '../../assets/Logo.svg';
import { FaRegHeart} from 'react-icons/fa';
import { PiUsersThreeLight } from 'react-icons/pi';
import { LuUserCog } from 'react-icons/lu';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Listbox } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const roles = [
  { label: 'Orang Tua', icon: <FaRegHeart size={24} /> },
  { label: 'Posyandu', icon: <PiUsersThreeLight size={24} /> },
  { label: 'Kesehatan', icon: <LuUserCog size={24} /> },
];

export default function Register() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(roles[0].label);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    nama: '',
    email: '',
    telepon: '',
    jumlahAnak: '1',
    password: '',
    konfirmasi: '',
  });

  const jumlahAnakOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen min-w-full bg-[#F4EEFF80] flex items-stretch justify-center font-roboto">
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
           <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-[520px] flex flex-col items-center">
                         <h2 className="font-bold text-xl mb-1 text-center">Buat Akun Baru</h2>
             <div className="text-neutral-500 text-[13px] mb-4 text-center">
               Pilih peran dan masukkan kredensial Anda untuk melanjutkan
             </div>
                         {/* Pilih Peran */}
             <div className="w-full mb-3">
               <div className="font-medium mb-1">Pilih Peran</div>
              <div className="role-grid grid grid-cols-3 gap-0 bg-[#fafafa] rounded-2xl p-0">
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
                         {/* Nama Lengkap */}
             <div className="w-full mb-3">
               <div className="font-medium mb-1">Nama Lengkap</div>
                             <input
                 type="text"
                 name="nama"
                 placeholder="Nama Lengkap"
                 value={form.nama}
                 onChange={handleChange}
                 className="w-full py-2.5 px-4 rounded-lg border border-neutral-200 text-[16px] mb-2 focus:outline-none focus:ring-2 focus:ring-primary-50"
               />
            </div>
                         {/* Email */}
             <div className="w-full mb-3">
               <div className="font-medium mb-1">Email</div>
                             <input
                 type="email"
                 name="email"
                 placeholder="nama@contoh"
                 value={form.email}
                 onChange={handleChange}
                 className="w-full py-2.5 px-4 rounded-lg border border-neutral-200 text-[16px] mb-2 focus:outline-none focus:ring-2 focus:ring-primary-50"
               />
            </div>
                         {/* No. Telepon */}
             <div className="w-full mb-3">
               <div className="font-medium mb-1">No. Telepon</div>
                             <input
                 type="tel"
                 name="telepon"
                 placeholder="08xxx"
                 value={form.telepon}
                 onChange={handleChange}
                 className="w-full py-2.5 px-4 rounded-lg border border-neutral-200 text-[16px] mb-2 focus:outline-none focus:ring-2 focus:ring-primary-50"
               />
            </div>
                         {/* Jumlah Anak - Only show for Orang Tua */}
             {selectedRole === 'Orang Tua' && (
               <div className="w-full mb-3">
                <div className="font-medium mb-1">Jumlah Anak</div>
                <Listbox value={form.jumlahAnak} onChange={val => setForm(f => ({ ...f, jumlahAnak: val }))}>
                  <div className="relative">
                    <Listbox.Button className="w-full py-2.5 px-4 pr-12 rounded-xl border border-neutral-200 text-[16px] mb-2 focus:outline-none focus:ring-2 focus:ring-primary-50 bg-white flex justify-between items-center">
                      <span>{form.jumlahAnak}</span>
                      <FiChevronDown className="text-primary-50 text-lg absolute right-4 pointer-events-none" />
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-20 mt-1 w-full bg-white border border-neutral-200 rounded-xl shadow-lg max-h-60 overflow-auto">
                      {jumlahAnakOptions.map((opt) => (
                        <Listbox.Option
                          key={opt}
                          value={opt}
                          className={({ active }) =>
                            `cursor-pointer select-none py-2 px-4 ${active ? 'bg-primary-10 text-primary-90' : 'text-black'}`
                          }
                        >
                          {opt}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
            )}
                         {/* Password */}
             <div className="w-full mb-3">
               <div className="font-medium mb-1">Password</div>
              <div className="relative">
                                 <input
                   type={showPassword ? 'text' : 'password'}
                   name="password"
                   placeholder="Password"
                   value={form.password}
                   onChange={handleChange}
                   className="w-full py-2.5 px-4 pr-12 rounded-lg border border-neutral-200 text-[16px] focus:outline-none focus:ring-2 focus:ring-primary-50"
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
                         {/* Konfirmasi Password */}
             <div className="w-full mb-4">
               <div className="font-medium mb-1">Konfirmasi Password</div>
              <div className="relative">
                                 <input
                   type={showConfirmPassword ? 'text' : 'password'}
                   name="konfirmasi"
                   placeholder="Konfirmasi Password"
                   value={form.konfirmasi}
                   onChange={handleChange}
                   className="w-full py-2.5 px-4 pr-12 rounded-lg border border-neutral-200 text-[16px] focus:outline-none focus:ring-2 focus:ring-primary-50"
                 />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-[22px] text-primary-50"
                  tabIndex={-1}
                  aria-label={showConfirmPassword ? 'Sembunyikan password' : 'Perlihatkan password'}
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
                         {/* Button Register */}
             <button
               className="w-full bg-primary-50 text-white border-none rounded-xl py-3 font-medium text-[16px] mb-3 cursor-pointer hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600"
             >
              Register Sebagai {selectedRole}
            </button>
            {/* Link Login */}
            <div className="text-[15px] text-center">
              <span className="text-black">Sudah memiliki akun? </span>
              <a
                href="#"
                className="text-primary-50 font-medium hover:underline cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  navigate('/login');
                }}
              >
                Masuk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 