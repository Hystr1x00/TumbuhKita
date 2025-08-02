import React, { useState, useEffect } from 'react';
import { fetchData } from '../../data/dummyData';

export default function StatCardAdmin({ color, icon, title, value, growth, growthColor }) {
  const [stats, setStats] = useState({
    totalArtikel: 0,
    totalBalita: 0,
    totalPosyandu: 0,
    totalTenagaKesehatan: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true);
        const [artikel, balita, posyandu, tenagaKesehatan] = await Promise.all([
          fetchData.getArtikel(),
          fetchData.getBalita(),
          fetchData.getPosyandu(),
          fetchData.getTenagaKesehatan()
        ]);

        setStats({
          totalArtikel: artikel.length,
          totalBalita: balita.length,
          totalPosyandu: posyandu.length,
          totalTenagaKesehatan: tenagaKesehatan.length
        });
      } catch (error) {
        console.error('Error loading stats:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) {
    return (
      <div className={`${color} rounded-xl p-6 flex flex-col gap-2 shadow-sm`}>
        <div className="flex items-center gap-2 text-base font-semibold mb-1">
          {icon}
          <span>{title}</span>
        </div>
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#2D2357]"></div>
        </div>
      </div>
    );
  }

  // Determine value based on title
  const getValue = () => {
    switch (title) {
      case 'Total Artikel':
        return stats.totalArtikel;
      case 'Total Balita':
        return stats.totalBalita;
      case 'Total Posyandu':
        return stats.totalPosyandu;
      case 'Total Tenaga Kesehatan':
        return stats.totalTenagaKesehatan;
      default:
        return value || 0;
    }
  };

  return (
    <div className={`${color} rounded-xl p-6 flex flex-col gap-2 shadow-sm`}>
      <div className="flex items-center gap-2 text-base font-semibold mb-1">
        {icon}
        <span>{title}</span>
      </div>
      <div className="font-bold text-2xl text-[#2D2357]">{getValue()}</div>
      <div className={`text-xs font-medium ${growthColor}`}>{growth}</div>
    </div>
  );
} 