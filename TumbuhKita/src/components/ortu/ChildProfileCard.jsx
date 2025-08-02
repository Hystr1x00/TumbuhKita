import React from 'react';

export default function ChildProfileCard({ selectedAnak, mounted, onEditClick }) {
  if (!selectedAnak) {
    return null;
  }

  return (
    <div
      className={`bg-white rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 mb-2 relative overflow-hidden transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: '80ms' }}
    >
      <div className="flex items-center gap-4">
        <img src={selectedAnak.foto} alt="Profile Anak" className="w-20 h-20 rounded-full object-cover border-4 border-primary-10" />
        <div>
          <div className="font-bold text-lg md:text-xl">{selectedAnak.nama}</div>
          <div className="text-neutral-500 text-sm mb-1">{selectedAnak.gender}, {selectedAnak.usia}</div>
          <div className="text-xs text-neutral-400 mb-2">{selectedAnak.posyandu}</div>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${selectedAnak.status === 'Sehat' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
            <span className="text-xs font-medium text-gray-600">{selectedAnak.status}</span>
            <span className="text-xs text-gray-500">• Gol. Darah: {selectedAnak.golonganDarah}</span>
          </div>
          <button 
            className="bg-primary-50 text-white px-4 py-1 rounded-lg text-xs font-medium mt-2 hover:bg-primary-90 transition-colors"
            onClick={onEditClick}
          >
            Edit Profil
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center h-full min-h-[80px] md:min-h-[120px]">
        <span className="text-xs text-neutral-400">Pemeriksaan Terakhir</span>
        <span className="text-black font-bold text-base">{selectedAnak.tglPeriksa}</span>
        <div className="text-xs text-neutral-500 mt-1">
          {selectedAnak.alamat}
        </div>
      </div>
    </div>
  );
} 