import React from 'react';
import Logo from '../assets/Logo.svg';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaInstagram, FaTiktok, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white pt-10 pb-4 px-4 md:px-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
        {/* Kolom 1: Logo & Deskripsi */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="bg-[#A58AFF] p-2 rounded-xl flex items-center justify-center">
              <img src={Logo} alt="Logo" className="w-8 h-8" />
            </span>
            <span className="font-bold text-2xl text-[#5F41B2]">TumbuhKita.</span>
          </div>
          <div className="text-neutral-400 text-base leading-relaxed">Aplikasi untuk memantau tumbuh kembang anak dengan mudah dan menyenangkan.</div>
          <div className="text-neutral-400 text-base leading-relaxed">
            Alamat: Jl. Raya Bojongsoang No. 123,<br />Bojongsoang, Bandung, Jawa Barat 40287
          </div>
          <div className="flex items-center gap-2 text-neutral-400 text-base mt-1">
            <FiMail className="text-[#5F41B2] text-xl" />
            <span>supporttumbuhkita@tumbuh.co.id</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400 text-base">
            <FiPhone className="text-[#5F41B2] text-xl" />
            <span>(022) 12345678</span>
          </div>
        </div>
        {/* Kolom 2: Tautan Cepat */}
        <div>
          <div className="font-bold text-xl mb-3 text-black">Tautan Cepat</div>
          <ul className="flex flex-col gap-2 text-base text-black font-normal">
            <li>Beranda</li>
            <li>Fitur Utama</li>
            <li>Cara Kerja</li>
            <li>Testimoni Pengguna</li>
            <li>FAQ</li>
          </ul>
        </div>
        {/* Kolom 3: Dukungan */}
        <div>
          <div className="font-bold text-xl mb-3 text-black">Dukungan</div>
          <ul className="flex flex-col gap-2 text-base text-black font-normal">
            <li>Pusat Bantuan</li>
            <li>Hubungi Kami</li>
            <li>Syarat & Ketentuan</li>
            <li>Kebijakan Privasi</li>
          </ul>
        </div>
        {/* Kolom 4: Ikuti Kami */}
        <div>
          <div className="font-bold text-xl mb-3 text-black">Ikuti Kami</div>
          <div className="flex flex-col gap-4 mt-2">
            <a href="#" className="text-[#A58AFF] text-2xl"><FaInstagram /></a>
            <a href="#" className="text-[#A58AFF] text-2xl"><FaTiktok /></a>
            <a href="#" className="text-[#A58AFF] text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-[#A58AFF] text-2xl"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <hr className="my-8 border-neutral-200" />
      <div className="text-center text-black text-lg font-medium flex items-center justify-center gap-2">
        <span className="text-2xl">©</span> 2025 TumbuhKita. All right reserved
      </div>
    </footer>
  );
} 