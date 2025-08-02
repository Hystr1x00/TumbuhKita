import React from "react";

const AnalyticCards = ({ dataAnak, pertanyaanForum, statusAktif }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2">
        <span className="text-sm text-gray-500">Data Anak Terpantau</span>
        <span className="text-3xl font-bold text-[#6C2BD7]">{dataAnak}</span>
        <span className="text-xs text-gray-400">Dari posyandu</span>
      </div>
      <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2">
        <span className="text-sm text-gray-500">Pertanyaan Forum</span>
        <span className="text-3xl font-bold text-[#F7B500]">{pertanyaanForum}</span>
        <span className="text-xs text-gray-400">Menunggu jawaban</span>
      </div>
      <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2">
        <span className="text-sm text-gray-500">Status Aktif</span>
        <span className="text-2xl font-bold text-green-600">{statusAktif ? "Online" : "Offline"}</span>
        <span className="text-xs text-gray-400">Siap membantu</span>
      </div>
    </div>
  );
};

export default AnalyticCards; 