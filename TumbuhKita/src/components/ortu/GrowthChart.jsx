import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function GrowthChart({ data, tab, setTab, areaColor, tabLabel }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-2">
      <h3 className="font-bold text-lg md:text-xl mb-2">Grafik Pertumbuhan</h3>
      <div className="grid grid-cols-4 gap-2 mb-4 bg-[#F7F7F7] rounded-xl p-1 w-full max-w-md">
        <button
          onClick={() => setTab('berat')}
          className={`py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full
        ${tab === 'berat' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}
        >
          Berat Badan
        </button>
        <button
          onClick={() => setTab('tinggi')}
          className={`py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full
        ${tab === 'tinggi' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}
        >
          Tinggi Badan
        </button>
        <button
          onClick={() => setTab('lingkar')}
          className={`py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full
        ${tab === 'lingkar' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}
        >
          Lingkar Kepala
        </button>
        <button
          onClick={() => setTab('gizi')}
          className={`py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full
        ${tab === 'gizi' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}
        >
          Gizi
        </button>
      </div>
      <div className="w-full h-56 md:h-64 flex items-end">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={areaColor[tab]} stopOpacity={0.3} />
                <stop offset="100%" stopColor={areaColor[tab]} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={tab}
              stroke={areaColor[tab]}
              fill="url(#colorArea)"
              strokeWidth={2.5}
              dot={{ r: 4, stroke: areaColor[tab], strokeWidth: 2, fill: '#fff' }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 