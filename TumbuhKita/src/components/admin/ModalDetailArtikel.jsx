import React from 'react';

export default function ModalDetailArtikel({ open, onClose, artikel, onEdit }) {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEditClick = () => {
    if (onEdit && artikel) {
      onEdit(artikel);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center transition-all duration-300 bg-grey-200/40 backdrop-blur-sm pt-16" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-4xl w-full shadow-xl relative max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-[#2B2350]">Detail Artikel</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {/* Header dengan gambar */}
          <div className="relative">
            {artikel.img && (
              <img 
                src={artikel.img} 
                alt={artikel.judul}
                className="w-full h-48 object-cover rounded-xl"
              />
            )}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                artikel.status === 'Dipublikasikan' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {artikel.status}
              </span>
            </div>
          </div>

          {/* Informasi Artikel */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-[#2B2350] mb-2">{artikel.judul}</h3>
              <div className="flex items-center gap-4 text-sm text-[#A09CB3]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5.5 21h13a2 2 0 002-2v-2a7 7 0 00-14 0v2a2 2 0 002 2z" />
                  </svg>
                  <span>{artikel.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  <span>{artikel.tanggal}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{artikel.dilihat} dilihat</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#2B2350] mb-2">Kategori</h4>
              <span className="bg-[#F4EEFF] text-[#5F41B2] px-3 py-1 rounded-lg text-sm font-semibold">
                {artikel.kategori}
              </span>
            </div>

            {artikel.tags && artikel.tags.length > 0 && (
              <div>
                <h4 className="font-semibold text-[#2B2350] mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {artikel.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="font-semibold text-[#2B2350] mb-2">Konten Artikel</h4>
              <div className="bg-[#F8F6FF] p-4 rounded-xl">
                <p className="text-[#2B2350] leading-relaxed whitespace-pre-wrap">
                  {artikel.isi}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button 
              onClick={handleEditClick}
              className="flex-1 bg-[#5F41B2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4A3590] transition-colors"
            >
              Edit Artikel
            </button>
            <button className="flex-1 bg-white border border-[#5F41B2] text-[#5F41B2] px-6 py-3 rounded-lg font-semibold hover:bg-[#F4EEFF] transition-colors">
              Preview
            </button>
            {artikel.status === 'Draft' && (
              <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Publikasikan
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 