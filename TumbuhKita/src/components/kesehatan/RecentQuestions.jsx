import React from "react";

const RecentQuestions = ({ pertanyaanTerbaru }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h2 className="text-xl font-bold mb-2">Pertanyaan Terbaru</h2>
      <p className="text-sm text-gray-400 mb-4">Pertanyaan yang perlu perhatian segera</p>
      <div className="flex flex-col gap-4">
        {pertanyaanTerbaru.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row md:items-center md:justify-between last:border-b-0 pb-4 last:pb-0">
            <div>
              <p className="font-medium text-[#2B2350]">{item.pertanyaan}</p>
              <span className="text-xs text-gray-400">{item.penanya}</span>
            </div>
            <span className="mt-2 md:mt-0 px-4 py-1 rounded-lg text-xs font-normal border border-black">{item.kategori}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentQuestions; 