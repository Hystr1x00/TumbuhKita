import React from 'react';

export default function RecentArticles({ artikelList, mounted, onArticleClick, setTabMenu }) {
  // Ambil 4 artikel terbaru
  const recentArticles = artikelList.slice(0, 4);

  const handleArticleClick = (artikel) => {
    if (onArticleClick) {
      onArticleClick(artikel);
    }
    if (setTabMenu) {
      setTabMenu('Artikel');
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow p-6 transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '320ms' }}>
      <h3 className="font-bold text-lg md:text-xl mb-4">Artikel Terbaru</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recentArticles.map((artikel, idx) => (
          <div key={artikel.id} className="bg-[#FAF8FF] rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={artikel.img} 
                  alt={artikel.judul} 
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <div className="font-semibold text-sm text-gray-600">{artikel.author}</div>
                  <div className="text-xs text-gray-400">{artikel.tanggal}</div>
                </div>
              </div>
              <div className="font-semibold text-base mb-2 line-clamp-2">{artikel.judul}</div>
              <div className="text-neutral-500 text-sm mb-3 line-clamp-3">{artikel.isi}</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  {artikel.kategori}
                </span>
                <span className="text-xs text-gray-400">
                  {artikel.dilihat} dilihat
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex gap-1">
                {artikel.tags.slice(0, 2).map((tag, tagIdx) => (
                  <span key={tagIdx} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => handleArticleClick(artikel)}
                className="text-primary-50 text-sm font-medium hover:underline cursor-pointer"
              >
                Baca Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 