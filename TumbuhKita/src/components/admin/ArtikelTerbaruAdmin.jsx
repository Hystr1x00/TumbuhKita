import React, { useState, useEffect } from 'react';
import { fetchData } from '../../data/dummyData';

export default function ArtikelTerbaruAdmin({ artikelList }) {
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArtikel = async () => {
      try {
        setLoading(true);
        const data = await fetchData.getArtikel();
        setArtikel(data);
      } catch (error) {
        console.error('Error loading artikel:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArtikel();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-xl text-[#5F41B2]">Artikel Terbaru</h2>
          <button className="bg-[#A58AFF] text-white px-4 py-1.5 rounded-lg font-semibold text-sm hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600">Lihat Semua</button>
        </div>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#5F41B2]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-xl text-[#5F41B2]">Artikel Terbaru</h2>
        <button className="bg-[#A58AFF] text-white px-4 py-1.5 rounded-lg font-semibold text-sm hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600">Lihat Semua</button>
      </div>
      <div className="flex flex-col gap-3">
        {artikel.slice(0, 4).map((artikel, idx) => (
          <div key={artikel.id} className="bg-[#F8F6FF] rounded-lg p-4 flex items-center justify-between mb-1">
            <div>
              <div className="font-semibold text-base text-[#2D2357] mb-1">{artikel.judul}</div>
              <div className="text-xs text-neutral-500">Oleh: {artikel.author}</div>
            </div>
            <div className="text-sm text-neutral-400 whitespace-nowrap">{artikel.tanggal}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 