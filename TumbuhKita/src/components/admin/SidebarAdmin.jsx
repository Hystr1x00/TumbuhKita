import React from 'react';
import { FiUser, FiBarChart2, FiBookOpen, FiMessageCircle, FiActivity } from 'react-icons/fi';

function SidebarMenu({ icon, label, active, sidebarOpen, onClick }) {
  return (
    <button
      className={`w-full flex items-center ${sidebarOpen ? 'justify-start' : 'justify-center'} gap-3 px-4 py-2 rounded-xl text-base font-medium transition-colors duration-200 bg-transparent hover:bg-primary-10 group ${active ? 'sidebar-active-bg' : ''}`}
      style={active ? { background: 'rgba(180, 152, 255, 0.35)' } : {}}
      onClick={onClick}
    >
      <span className={`text-xl transition-all duration-200 group-hover:scale-110 group-hover:text-primary-90 ${active ? 'text-primary-90' : 'text-neutral-700'}`}>{icon}</span>
      {sidebarOpen && <span className={`whitespace-nowrap transition-colors duration-200 ${active ? 'text-primary-90' : 'text-neutral-700'}`}>{label}</span>}
    </button>
  );
}

export default function SidebarAdmin({ tabMenu, setTabMenu, sidebarOpen, setSidebarOpen }) {
  return (
    <aside className={`transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg p-6 h-screen border-r border-neutral-100 flex flex-col rounded-none overflow-hidden fixed top-0 left-0 z-30 pt-24`}
      style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, marginTop: 0 }}>
      <nav className="flex flex-col gap-2 mt-4 justify-center items-stretch">
        <SidebarMenu icon={<FiBarChart2 />} label="Dashboard" active={tabMenu === 'Dashboard'} sidebarOpen={sidebarOpen} onClick={() => setTabMenu('Dashboard')} />
        <SidebarMenu icon={<FiUser />} label="Desa" active={tabMenu === 'Desa'} sidebarOpen={sidebarOpen} onClick={() => setTabMenu('Desa')} />
        <SidebarMenu icon={<FiActivity />} label="Posyandu" active={tabMenu === 'Posyandu'} sidebarOpen={sidebarOpen} onClick={() => setTabMenu('Posyandu')} />
        <SidebarMenu icon={<FiBookOpen />} label="Tenaga Kesehatan" active={tabMenu === 'Tenaga Kesehatan'} sidebarOpen={sidebarOpen} onClick={() => setTabMenu('Tenaga Kesehatan')} />
        <SidebarMenu icon={<FiUser />} label="Data Balita" active={tabMenu === 'Data Balita'} sidebarOpen={sidebarOpen} onClick={() => setTabMenu('Data Balita')} />
        <SidebarMenu icon={<FiBookOpen />} label="Artikel" active={tabMenu === 'Artikel'} sidebarOpen={sidebarOpen} onClick={() => setTabMenu('Artikel')} />
      </nav>
    </aside>
  );
} 