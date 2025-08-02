import React from 'react';
import { FiActivity, FiCalendar, FiArrowUp, FiUser } from 'react-icons/fi';

export default function ChildList({ anakList, mounted, setSelectedDetailAnak }) {
  if (anakList.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-gray-400 mb-4">
          <FiUser className="w-16 h-16 mx-auto" />
        </div>
        <p className="text-gray-500 text-lg mb-2">Belum ada data anak</p>
        <p className="text-gray-400 text-sm">Silakan tambahkan data anak Anda terlebih dahulu</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {anakList.map((anak, idx) => (
        <div
          key={anak.id}
          className={`bg-white rounded-2xl shadow p-6 flex flex-col gap-4 cursor-pointer transition-all duration-[1200ms]
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            hover:shadow-2xl hover:scale-[1.025] hover:-translate-y-1`}
          style={{ transitionDelay: `${idx * 120}ms` }}
          onClick={() => setSelectedDetailAnak(anak)}
        >
          {/* Section Atas */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={anak.foto} alt={anak.nama} className="w-16 h-16 rounded-full object-cover border-4 border-primary-10 transition-transform duration-300 hover:scale-105" />
              <div>
                <div className="font-bold text-lg md:text-xl">{anak.nama}</div>
                <div className="text-neutral-500 text-sm mb-1">{anak.gender}, {anak.usia}</div>
                <div className="text-xs text-neutral-400">{anak.posyandu}</div>
              </div>
            </div>
            <button className="bg-primary-50 text-white px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary-90 hover:-translate-y-0.5 hover:shadow-lg active:scale-95">Detail</button>
          </div>
          {/* Section Bawah */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-14 h-14 flex items-center justify-center rounded-full" style={{ background: 'rgba(180,152,255,0.35)' }}>
                  <FiActivity className="w-6 h-6 text-primary-90" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm text-black mb-1">Tanggal Lahir</span>
                  <span className="text-sm font-medium text-black leading-tight">{anak.tglLahir}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-14 h-14 flex items-center justify-center rounded-full" style={{ background: 'rgba(180,152,255,0.35)' }}>
                  <FiCalendar className="w-6 h-6 text-primary-90" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm text-black mb-1">Berat Badan</span>
                  <span className="text-sm font-medium text-black leading-tight">{anak.berat}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-14 h-14 flex items-center justify-center rounded-full" style={{ background: 'rgba(180,152,255,0.35)' }}>
                  <FiCalendar className="w-6 h-6 text-primary-90" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm text-black mb-1">Pemeriksaan Terakhir</span>
                  <span className="text-sm font-medium text-black leading-tight">{anak.tglPeriksa}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-14 h-14 flex items-center justify-center rounded-full" style={{ background: 'rgba(180,152,255,0.35)' }}>
                  <FiArrowUp className="w-6 h-6 text-primary-90" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm text-black mb-1">Tinggi Badan</span>
                  <span className="text-sm font-medium text-black leading-tight">{anak.tinggi}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${anak.status === 'Sehat' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
              <span className="text-xs font-medium text-gray-600">{anak.status}</span>
            </div>
            <span className="text-xs text-gray-500">Gol. Darah: {anak.golonganDarah}</span>
          </div>
        </div>
      ))}
    </div>
  );
} 