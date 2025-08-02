import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import ViewGraphModal from './ViewGraphModal';
import EditChildModal from './EditChildModal';

export default function CardDataAnak({ anak, onDataUpdate }) {
  const [isGraphModalOpen, setIsGraphModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleGraphClick = () => {
    setIsGraphModalOpen(true);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleGraphClose = () => {
    setIsGraphModalOpen(false);
  };

  const handleEditClose = () => {
    setIsEditModalOpen(false);
  };

  const handleEditSuccess = () => {
    if (onDataUpdate) {
      onDataUpdate();
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="flex flex-col gap-1 flex-1 min-w-[180px]">
          <div className="flex flex-row items-center gap-2">
            <div className="font-bold text-lg text-[#2B2350]">{anak.nama}</div>
            <span className="text-xs bg-[#E6E9F5] text-[#6C2BD7] rounded px-2 py-0.5 font-normal">{anak.gender}</span>
            <span className="text-xs bg-[#E6E9F5] text-[#6C2BD7] rounded px-2 py-0.5 font-normal">{anak.usia}</span>
            <span className="text-xs bg-[#E6F9ED] text-green-600 rounded px-2 py-0.5 font-normal">{anak.statusGizi}</span>
          </div>
          <div className="text-sm text-gray-600 mb-1">Orang Tua: <span className="font-medium">{anak.orangTua}</span></div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1">
          <span className="text-xs">BB/TB: <span className="font-normal">{anak.bbTb}</span></span>
          <span className="text-xs">Lingkar Kepala: <span className="font-normal">{anak.lingkarKepala}</span></span>
          <span className="text-xs">Cek Terakhir: <span className="font-normal">{anak.cekTerakhir}</span></span>
        </div>
        {/* Action buttons */}
        <div className="flex gap-2 mt-2 md:mt-0">
          <button 
            onClick={handleGraphClick}
            className="p-2 rounded-lg bg-white border border-gray-200 text-[#6C2BD7] hover:bg-gray-50 transition" 
            title="Lihat Grafik"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 16l3-3 4 4 5-5"/></svg>
          </button>
          <button 
            onClick={handleEditClick}
            className="p-2 rounded-lg bg-white border border-gray-200 text-[#6C2BD7] hover:bg-gray-50 transition" 
            title="Edit Data"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
          </button>
          <button className="p-2 rounded-lg bg-white border border-gray-200 text-red-500 hover:bg-gray-50 transition" title="Hapus Data">
            <FiTrash size={20} />
          </button>
        </div>
      </div>

      {/* Modals */}
      <ViewGraphModal 
        isOpen={isGraphModalOpen}
        onClose={handleGraphClose}
        anak={anak}
      />
      
      <EditChildModal 
        isOpen={isEditModalOpen}
        onClose={handleEditClose}
        onSuccess={handleEditSuccess}
        anak={anak}
      />
    </>
  );
} 