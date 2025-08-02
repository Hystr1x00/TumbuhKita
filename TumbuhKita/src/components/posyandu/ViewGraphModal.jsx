import React, { useState } from 'react';
import { FiX, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ViewGraphModal({ isOpen, onClose, anak }) {
  const [activeTab, setActiveTab] = useState('berat');

  if (!isOpen || !anak) return null;

  // Mock data for the graph - formatted for recharts
  const chartData = [
    { name: 'Jan', berat: 10.5, tinggi: 60, lingkar: 45, gizi: 85 },
    { name: 'Feb', berat: 11.2, tinggi: 65, lingkar: 46, gizi: 87 },
    { name: 'Mar', berat: 11.8, tinggi: 70, lingkar: 47, gizi: 89 },
    { name: 'Apr', berat: 12.3, tinggi: 75, lingkar: 48, gizi: 91 },
    { name: 'May', berat: 12.8, tinggi: 80, lingkar: 49, gizi: 93 },
    { name: 'Jun', berat: 13.2, tinggi: 85, lingkar: 50, gizi: 95 },
  ];

  const areaColors = {
    berat: '#3B82F6',
    tinggi: '#10B981',
    lingkar: '#8B5CF6',
    gizi: '#F59E0B'
  };

  const getGrowthStatus = (current, previous) => {
    if (current > previous) return { status: 'up', color: 'text-green-500' };
    if (current < previous) return { status: 'down', color: 'text-red-500' };
    return { status: 'stable', color: 'text-gray-500' };
  };

  const latestData = chartData[chartData.length - 1];
  const previousData = chartData[chartData.length - 2];

  const beratStatus = getGrowthStatus(latestData.berat, previousData.berat);
  const tinggiStatus = getGrowthStatus(latestData.tinggi, previousData.tinggi);
  const lingkarStatus = getGrowthStatus(latestData.lingkar, previousData.lingkar);

  const getYAxisLabel = () => {
    switch (activeTab) {
      case 'berat': return 'Berat (kg)';
      case 'tinggi': return 'Tinggi (cm)';
      case 'lingkar': return 'Lingkar (cm)';
      case 'gizi': return 'Skor Gizi';
      default: return '';
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-5xl mx-4 max-h-[90vh] overflow-y-auto border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-secondary-50">Grafik Pertumbuhan</h2>
            <p className="text-gray-600">{anak.nama} - {anak.usia}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Growth Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium">Berat Badan</p>
                <p className="text-2xl font-bold text-blue-800">{latestData.berat} kg</p>
                <div className={`flex items-center text-sm ${beratStatus.color}`}>
                  {beratStatus.status === 'up' ? <FiTrendingUp size={16} /> : <FiTrendingDown size={16} />}
                  <span className="ml-1">
                    {beratStatus.status === 'up' ? '+' : ''}{(latestData.berat - previousData.berat).toFixed(1)} kg
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Tinggi Badan</p>
                <p className="text-2xl font-bold text-green-800">{latestData.tinggi} cm</p>
                <div className={`flex items-center text-sm ${tinggiStatus.color}`}>
                  {tinggiStatus.status === 'up' ? <FiTrendingUp size={16} /> : <FiTrendingDown size={16} />}
                  <span className="ml-1">
                    {tinggiStatus.status === 'up' ? '+' : ''}{(latestData.tinggi - previousData.tinggi).toFixed(1)} cm
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-medium">Lingkar Kepala</p>
                <p className="text-2xl font-bold text-purple-800">{latestData.lingkar} cm</p>
                <div className={`flex items-center text-sm ${lingkarStatus.color}`}>
                  {lingkarStatus.status === 'up' ? <FiTrendingUp size={16} /> : <FiTrendingDown size={16} />}
                  <span className="ml-1">
                    {lingkarStatus.status === 'up' ? '+' : ''}{(latestData.lingkar - previousData.lingkar).toFixed(1)} cm
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-600 font-medium">Status Gizi</p>
                <p className="text-2xl font-bold text-yellow-800">{anak.statusGizi}</p>
                <div className="text-sm text-yellow-600">
                  Skor: {latestData.gizi}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Grafik Pertumbuhan 6 Bulan Terakhir</h3>
          
          {/* Tab Buttons */}
          <div className="grid grid-cols-4 gap-2 mb-4 bg-[#F7F7F7] rounded-xl p-1 w-full max-w-md">
            <button
              onClick={() => setActiveTab('berat')}
              className={`py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full
            ${activeTab === 'berat' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}
            >
              Berat Badan
            </button>
            <button
              onClick={() => setActiveTab('tinggi')}
              className={`py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full
            ${activeTab === 'tinggi' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}
            >
              Tinggi Badan
            </button>
            <button
              onClick={() => setActiveTab('lingkar')}
              className={`py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full
            ${activeTab === 'lingkar' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}
            >
              Lingkar Kepala
            </button>
            <button
              onClick={() => setActiveTab('gizi')}
              className={`py-2 rounded-xl text-xs font-semibold transition-all duration-200 w-full
            ${activeTab === 'gizi' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}
            >
              Gizi
            </button>
          </div>

          {/* Chart */}
          <div className="w-full h-64 flex items-end">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={areaColors[activeTab]} stopOpacity={0.3} />
                    <stop offset="100%" stopColor={areaColors[activeTab]} stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: getYAxisLabel(), angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  formatter={(value, name) => {
                    const labels = {
                      berat: 'Berat Badan',
                      tinggi: 'Tinggi Badan', 
                      lingkar: 'Lingkar Kepala',
                      gizi: 'Skor Gizi'
                    };
                    return [value, labels[name]];
                  }}
                />
                <Area
                  type="monotone"
                  dataKey={activeTab}
                  stroke={areaColors[activeTab]}
                  fill="url(#colorArea)"
                  strokeWidth={2.5}
                  dot={{ r: 4, stroke: areaColors[activeTab], strokeWidth: 2, fill: '#fff' }}
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Growth Analysis */}
        <div className="bg-yellow-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2 text-yellow-800">Analisis Pertumbuhan</h3>
          <div className="space-y-2 text-sm text-yellow-700">
            <p>• Pertumbuhan berat badan: {beratStatus.status === 'up' ? 'Normal' : 'Perlu perhatian'}</p>
            <p>• Pertumbuhan tinggi badan: {tinggiStatus.status === 'up' ? 'Normal' : 'Perlu perhatian'}</p>
            <p>• Pertumbuhan lingkar kepala: {lingkarStatus.status === 'up' ? 'Normal' : 'Perlu perhatian'}</p>
            <p>• Status gizi: {anak.statusGizi}</p>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
} 