import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardHeader = ({ namaDokter }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row md:justify-between mb-6 gap-4">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-[#2B2350] mb-1">Dashboard</h1>
        <p className="text-lg text-[#6C2BD7]">Selamat datang, {namaDokter}</p>
      </div>
      <div className="flex flex-col justify-end md:items-end md:justify-end w-full md:w-auto mt-10">
        <button
          className="mt-4 md:mt-8 flex items-center gap-2 bg-[#4B1D96] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#6C2BD7] transition-all min-w-[200px]"
          onClick={() => navigate('/forum-diskusi')}
        >
          <span className="text-xl flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v6a2.25 2.25 0 01-2.25 2.25H6.25L3 21V5.25A2.25 2.25 0 015.25 3h14.25A2.25 2.25 0 0121.75 5.25v1.5z" />
            </svg>
          </span>
          Forum Pertanyaan
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader; 