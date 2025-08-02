import React, { useState } from 'react';
import { FiCalendar, FiArrowUp, FiActivity } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EditChildForm from './EditChildForm';

export default function ChildDetailView({ 
  selectedDetailAnak, 
  setSelectedDetailAnak, 
  data, 
  tabGrafikDetail, 
  setTabGrafikDetail, 
  areaColor,
  onUpdateChild
}) {
  const [showEditForm, setShowEditForm] = useState(false);
  
  const golonganDarahList = ['A', 'B', 'AB', 'O'];
  const posyanduList = ['Posyandu Dayeuhkolot', 'Posyandu Sukabirus', 'Posyandu Sukapura', 'Posyandu Bojongsoang'];

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleCloseEdit = () => {
    setShowEditForm(false);
  };

  const handleSaveEdit = (updatedChild) => {
    if (onUpdateChild) {
      onUpdateChild(updatedChild);
    }
    setShowEditForm(false);
  };

  if (showEditForm) {
    return (
      <EditChildForm
        child={selectedDetailAnak}
        onClose={handleCloseEdit}
        onSave={handleSaveEdit}
        golonganDarahList={golonganDarahList}
        posyanduList={posyanduList}
      />
    );
  }
  return (
    <div className="w-full">
      <h1 className="text-3xl md:text-4xl font-extrabold text-secondary-50 mb-4">Detail Anak - {selectedDetailAnak.nama}</h1>
      <div className="flex items-center justify-between mb-6">
        <button className="px-4 py-2 rounded-xl border border-neutral-300 text-neutral-700 font-semibold bg-white hover:bg-neutral-100 transition-colors" onClick={() => setSelectedDetailAnak(null)}>Kembali</button>
        <button 
          className="bg-primary-50 text-white px-6 py-2 rounded-xl font-semibold shadow-sm hover:bg-primary-90 transition-colors"
          onClick={handleEditClick}
        >
          Edit Data
        </button>
      </div>
      {/* Cards Detail Anak & Pemeriksaan Terakhir Sejajar Tinggi */}
      <div className="flex flex-col md:flex-row gap-6 mb-8 items-stretch">
        {/* Card Kiri */}
        <div className="bg-white rounded-2xl shadow p-6 flex-1 flex flex-col gap-6 h-full">
          <div className="flex items-center gap-4">
            <img src={selectedDetailAnak.foto} alt={selectedDetailAnak.nama} className="w-16 h-16 rounded-full object-cover border-4 border-primary-10" />
            <div>
              <div className="font-bold text-lg md:text-xl">{selectedDetailAnak.nama}</div>
              <div className="text-neutral-500 text-sm mb-1">{selectedDetailAnak.gender}, {selectedDetailAnak.umur}</div>
            </div>
          </div>
          {/* Info Anak di Card Kiri Detail Anak */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'rgba(180,152,255,0.35)' }}>
                <FiCalendar className="w-5 h-5 text-primary-90" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-black mb-1">Tanggal Lahir</span>
                <span className="text-sm font-medium text-black leading-tight">{selectedDetailAnak.tglLahir}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'rgba(180,152,255,0.35)' }}>
                <FiArrowUp className="w-5 h-5 text-primary-90" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-black mb-1">Tinggi Badan</span>
                <span className="text-sm font-medium text-black leading-tight">{selectedDetailAnak.tinggi}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'rgba(180,152,255,0.35)' }}>
                <FiCalendar className="w-5 h-5 text-primary-90" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-black mb-1">Pemeriksaan Terakhir</span>
                <span className="text-sm font-medium text-black leading-tight">{selectedDetailAnak.tglPeriksa}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: 'rgba(180,152,255,0.35)' }}>
                <FiActivity className="w-5 h-5 text-primary-90" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs text-black mb-1">Berat Badan</span>
                <span className="text-sm font-medium text-black leading-tight">{selectedDetailAnak.berat}</span>
              </div>
            </div>
          </div>
          <div className="bg-yellow-100 rounded-lg p-3 text-yellow-800 text-sm font-medium mt-2">
            <span className="block mb-1">Catatan Khusus</span>
            <span className="text-sm font-medium text-black">Alergi susu sapi</span>
          </div>
        </div>
        {/* Card Kanan Pemeriksaan Terakhir */}
        <div className="flex-1 h-full flex flex-col">
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col h-full">
            <div className="text-xl md:text-2xl font-bold mb-2">Pemeriksaan Terakhir</div>
            <div className="border-b border-neutral-200 mb-6"></div>
            <div className="bg-[#F7F7F7] rounded-2xl px-8 py-6 flex flex-col flex-1 justify-between h-full">
              <div>
                <div className="text-2xl md:text-3xl font-semibold mb-6">{selectedDetailAnak.tglPeriksa}</div>
                <div className="grid grid-cols-3 gap-8 mb-4">
                  <div className="flex flex-col items-start">
                    <span className="text-base text-neutral-400 mb-1">Berat Badan</span>
                    <span className="text-2xl font-medium text-black">{selectedDetailAnak.berat}</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-base text-neutral-400 mb-1">Tinggi Badan</span>
                    <span className="text-2xl font-medium text-black">{selectedDetailAnak.tinggi}</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-base text-neutral-400 mb-1">Lingkar Kepala</span>
                    <span className="text-2xl font-medium text-black">50 cm</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <span className="text-base text-neutral-400 mb-1 block">Catatan</span>
                <span className="text-base text-black">Pertumbuhan normal, aktivitas baik</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section Grafik Pertumbuhan */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="font-bold text-lg md:text-xl mb-4">Grafik Pertumbuhan</h3>
        <div className="grid grid-cols-4 gap-2 mb-4 bg-[#F7F7F7] rounded-xl p-1 w-full max-w-md">
          <button
            onClick={() => setTabGrafikDetail('berat')}
            className={`py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full ${tabGrafikDetail === 'berat' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}
          >
            Berat Badan
          </button>
          <button
            onClick={() => setTabGrafikDetail('tinggi')}
            className={`py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full ${tabGrafikDetail === 'tinggi' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}
          >
            Tinggi Badan
          </button>
          <button
            onClick={() => setTabGrafikDetail('lingkar')}
            className={`py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full ${tabGrafikDetail === 'lingkar' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}
          >
            Lingkar Kepala
          </button>
          <button
            onClick={() => setTabGrafikDetail('gizi')}
            className={`py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full ${tabGrafikDetail === 'gizi' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}
          >
            Gizi
          </button>
        </div>
        <div className="w-full h-56 md:h-64 flex items-end">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorAreaDetail" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={areaColor[tabGrafikDetail]} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={areaColor[tabGrafikDetail]} stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey={tabGrafikDetail}
                stroke={areaColor[tabGrafikDetail]}
                fill="url(#colorAreaDetail)"
                strokeWidth={2.5}
                dot={{ r: 4, stroke: areaColor[tabGrafikDetail], strokeWidth: 2, fill: '#fff' }}
                activeDot={{ r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 