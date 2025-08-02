import React from 'react';
import { FiUser, FiBarChart2, FiBookOpen, FiMessageCircle, FiActivity } from 'react-icons/fi';

export default function Sidebar({ 
  sidebarOpen, 
  anakList, 
  selectedAnak, 
  setSelectedAnak, 
  tabMenu, 
  setTabMenu 
}) {
  return (
    <aside className={`transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg p-6 h-screen border-r border-neutral-100 flex flex-col rounded-none overflow-hidden fixed top-0 left-0 z-30 pt-24`}
      style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, marginTop: 0 }}>
      {sidebarOpen && (
        <div className="mb-6">
          <div className="font-semibold text-sm mb-2 text-neutral-70">Pilih Anak</div>
          <div className="flex gap-2 bg-neutral-100 rounded-xl p-2">
            {anakList.map((anak, idx) => (
              <button
                key={anak.id}
                onClick={() => setSelectedAnak(anak)}
                className={`flex-1 px-0 py-1.5 rounded-lg font-medium transition-colors duration-200 text-sm focus:outline-none active:outline-none border-0
                  ${selectedAnak.id === anak.id
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-transparent text-neutral-700'}
                `}
                style={{ minWidth: 0 }}
              >
                {anak.nama}
              </button>
            ))}
          </div>
        </div>
      )}
      <nav className="flex flex-col gap-2 mt-4 justify-center items-stretch">
        <SidebarMenu icon={<FiBarChart2 />} label="Dashboard" active={tabMenu === 'Dashboard'} sidebarOpen={sidebarOpen} onClick={() => setTabMenu('Dashboard')} />
        <SidebarMenu icon={<FiUser />} label="Anak Saya" active={tabMenu === 'Anak Saya'} sidebarOpen={sidebarOpen} onClick={() => setTabMenu('Anak Saya')} />
        <SidebarMenu icon={<FiActivity />} label="Imunisasi" active={tabMenu === 'Imunisasi'} sidebarOpen={sidebarOpen} onClick={() => setTabMenu('Imunisasi')} />
        <SidebarMenu icon={<FiMessageCircle />} label="Konsultasi" active={tabMenu === 'Konsultasi'} sidebarOpen={sidebarOpen} onClick={() => setTabMenu('Konsultasi')} />
        <SidebarMenu icon={<FiBookOpen />} label="Artikel" active={tabMenu === 'Artikel'} sidebarOpen={sidebarOpen} onClick={() => setTabMenu('Artikel')} />
      </nav>
    </aside>
  );
}

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