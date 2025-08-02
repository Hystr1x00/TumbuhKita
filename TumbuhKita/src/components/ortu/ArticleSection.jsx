import React, { useState, useMemo } from 'react';

export default function ArticleSection({ 
  mounted, 
  artikelList, 
  selectedArtikel, 
  setSelectedArtikel 
}) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter artikel berdasarkan search term
  const filteredArticles = useMemo(() => {
    if (!searchTerm) return artikelList;
    
    return artikelList.filter(artikel => 
      artikel.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artikel.isi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artikel.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artikel.kategori.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [artikelList, searchTerm]);

  if (selectedArtikel) {
    return (
      <div className={`w-full transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '80ms' }}>
        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary-50 mb-6">Artikel Kesehatan</h1>
        <button className="mb-6 px-4 py-2 rounded-xl border border-neutral-200 text-neutral-700 font-semibold bg-white hover:bg-neutral-100 transition-colors flex items-center gap-2" onClick={() => setSelectedArtikel(null)}>
          <span>&larr;</span> Kembali ke Daftar Artikel
        </button>
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={selectedArtikel.img} 
              alt={selectedArtikel.judul} 
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <div className="font-semibold text-sm text-gray-600">{selectedArtikel.author}</div>
              <div className="text-xs text-gray-400">{selectedArtikel.tanggal}</div>
            </div>
          </div>
          <div className="font-bold text-2xl mb-2">{selectedArtikel.judul}</div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
              {selectedArtikel.kategori}
            </span>
            <span className="text-xs text-gray-400">
              {selectedArtikel.dilihat} dilihat
            </span>
          </div>
          <img src={selectedArtikel.img} alt={selectedArtikel.judul} className="w-full max-h-96 object-cover rounded-xl mb-4" />
          <div className="text-base text-black leading-relaxed whitespace-pre-line">
            {selectedArtikel.isi}
          </div>
          <div className="flex items-center gap-2 mt-6 pt-6 border-t border-gray-200">
            <span className="text-sm text-gray-600">Tags:</span>
            {selectedArtikel.tags.map((tag, idx) => (
              <span key={idx} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '80ms' }}>
      <h1 className="text-3xl md:text-4xl font-extrabold text-secondary-50 mb-6">Artikel Kesehatan</h1>
      <div className="mb-6 flex items-center">
        <div className="relative w-full max-w-md">
          <input 
            type="text" 
            placeholder="Cari artikel..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white rounded-xl px-4 py-2 pl-10 text-base outline-none border border-gray-200 focus:border-primary-50 focus:ring-2 focus:ring-primary-10" 
          />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            className="ml-2 px-3 py-2 text-gray-500 hover:text-gray-700"
          >
            Clear
          </button>
        )}
      </div>
      
      {filteredArticles.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <p className="text-gray-500 text-lg">Tidak ada artikel yang ditemukan</p>
          <p className="text-gray-400 text-sm">Coba kata kunci lain</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredArticles.map((artikel, idx) => (
            <div
              key={artikel.id}
              className={`bg-white rounded-2xl shadow p-0 overflow-hidden flex flex-col cursor-pointer transition-all duration-[1200ms]
                ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                hover:shadow-2xl hover:-translate-y-1`}
              style={{ transitionDelay: `${idx * 120}ms` }}
              onClick={() => setSelectedArtikel(artikel)}
            >
              <img
                src={artikel.img}
                alt={artikel.judul}
                className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                    {artikel.kategori}
                  </span>
                  <span className="text-xs text-gray-400">
                    {artikel.dilihat} dilihat
                  </span>
                </div>
                <div className="font-bold text-lg mb-2 line-clamp-2">{artikel.judul}</div>
                <div className="text-sm text-neutral-500 mb-4 flex-1 line-clamp-3">{artikel.isi}</div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mt-auto">
                  <span>{artikel.tanggal} • {artikel.author}</span>
                  <span className="text-primary-50 font-semibold">Baca Selengkapnya →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 