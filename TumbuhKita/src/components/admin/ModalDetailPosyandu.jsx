import React from 'react';

export default function ModalDetailPosyandu({ open, onClose, posyandu, onEdit }) {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEditClick = () => {
    if (onEdit && posyandu) {
      onEdit(posyandu);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center transition-all duration-300 bg-grey-200/40 backdrop-blur-sm pt-16" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-xl relative" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-[#2B2350]">Detail Posyandu</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {/* Header dengan icon */}
          <div className="flex items-center gap-4 p-4 bg-[#F8F6FF] rounded-xl">
            <div className="w-16 h-16 rounded-full bg-[#E6DEFA] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#5AC8FA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <circle cx="12" cy="11" r="3" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2B2350]">{posyandu.nama}</h3>
              <p className="text-[#A09CB3]">{posyandu.alamat}</p>
            </div>
          </div>

          {/* Informasi Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#2B2350] mb-2">Informasi Lokasi</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#A09CB3]">Kelurahan:</span>
                    <span className="font-medium">{posyandu.kelurahan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A09CB3]">Kecamatan:</span>
                    <span className="font-medium">{posyandu.kecamatan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A09CB3]">Kabupaten:</span>
                    <span className="font-medium">{posyandu.kabupaten}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A09CB3]">Koordinat:</span>
                    <span className="font-medium">{posyandu.koordinat}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#2B2350] mb-2">Statistik</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#A09CB3]">Jumlah Balita:</span>
                    <span className="font-medium">{posyandu.jumlahBalita} balita</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A09CB3]">Status:</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                      {posyandu.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A09CB3]">Tanggal Input:</span>
                    <span className="font-medium">{posyandu.tanggal}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#2B2350] mb-2">Kader Posyandu</h4>
              <div className="space-y-2">
                {posyandu.kader && posyandu.kader.map((kader, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-[#F8F6FF] rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[#E6DEFA] flex items-center justify-center text-[#5AC8FA] font-bold text-sm">
                      {kader.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium text-sm">{kader}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button 
              onClick={handleEditClick}
              className="flex-1 bg-[#5F41B2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4A3590] transition-colors"
            >
              Edit Posyandu
            </button>
            <button className="flex-1 bg-white border border-[#5F41B2] text-[#5F41B2] px-6 py-3 rounded-lg font-semibold hover:bg-[#F4EEFF] transition-colors">
              Lihat Data Balita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 