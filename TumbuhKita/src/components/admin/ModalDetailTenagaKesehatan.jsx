import React from 'react';

export default function ModalDetailTenagaKesehatan({ open, onClose, tenagaKesehatan, onEdit }) {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEditClick = () => {
    if (onEdit && tenagaKesehatan) {
      onEdit(tenagaKesehatan);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center transition-all duration-300 bg-grey-200/40 backdrop-blur-sm pt-16" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-xl relative" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-[#2B2350]">Detail Tenaga Kesehatan</h2>
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
              <svg className="w-8 h-8 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21h13a2 2 0 002-2v-2a7 7 0 00-14 0v2a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2B2350]">{tenagaKesehatan.nama}</h3>
              <p className="text-[#A09CB3]">{tenagaKesehatan.spesialisasi}</p>
            </div>
          </div>

          {/* Informasi Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#2B2350] mb-2">Informasi Kontak</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16v16H4z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                    <span className="text-[#A09CB3]">Email:</span>
                    <span className="font-medium">{tenagaKesehatan.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92V19a2 2 0 01-2 2A18 18 0 013 5a2 2 0 012-2h2.09a2 2 0 012 1.72c.13.81.36 1.6.7 2.34a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0120 17.91z" />
                    </svg>
                    <span className="text-[#A09CB3]">Telepon:</span>
                    <span className="font-medium">{tenagaKesehatan.telp}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#2B2350] mb-2">Lokasi Tugas</h4>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <circle cx="12" cy="11" r="3" />
                  </svg>
                  <span className="font-medium">{tenagaKesehatan.lokasiTugas}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#2B2350] mb-2">Status</h4>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-semibold">
                  {tenagaKesehatan.status}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#2B2350] mb-2">Informasi Profesional</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#A09CB3]">Pengalaman:</span>
                    <span className="font-medium">{tenagaKesehatan.pengalaman}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A09CB3]">Pendidikan:</span>
                    <span className="font-medium text-xs">{tenagaKesehatan.pendidikan}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#2B2350] mb-2">Sertifikasi</h4>
                <div className="space-y-1">
                  {tenagaKesehatan.sertifikasi && tenagaKesehatan.sertifikasi.map((sertif, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-[#F8F6FF] rounded-lg">
                      <svg className="w-4 h-4 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium">{sertif}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button 
              onClick={handleEditClick}
              className="flex-1 bg-[#5F41B2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4A3590] transition-colors"
            >
              Edit Profil
            </button>
            <button className="flex-1 bg-white border border-[#5F41B2] text-[#5F41B2] px-6 py-3 rounded-lg font-semibold hover:bg-[#F4EEFF] transition-colors">
              Lihat Jadwal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 