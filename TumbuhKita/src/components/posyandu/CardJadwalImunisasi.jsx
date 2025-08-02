import React, { useState } from 'react';
import { FiEye, FiEdit2, FiTrash } from 'react-icons/fi';
import ViewImmunizationModal from './ViewImmunizationModal';
import EditImmunizationModal from './EditImmunizationModal';

export default function CardJadwalImunisasi({ jadwal, onDataUpdate }) {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleViewClick = () => {
    setIsViewModalOpen(true);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleViewClose = () => {
    setIsViewModalOpen(false);
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
          <div className="font-bold text-lg text-[#2B2350] flex items-center gap-2">
            {jadwal.judul}
            <span className="text-xs bg-[#E6E9F5] text-[#6C2BD7] rounded px-2 py-0.5 font-normal">{jadwal.status}</span>
            <span className="text-xs bg-[#F5F2FF] text-[#2B2350] rounded px-2 py-0.5 font-normal border border-[#E6E9F5]">Target: {jadwal.target}</span>
          </div>
          <div className="flex flex-row flex-wrap gap-6 text-xs mt-1">
            <span>Tanggal: {jadwal.tanggal}</span>
            <span>Anak Terjadwal: {jadwal.anakTerjadwal} anak</span>
            <span className="font-semibold">Deskripsi: <span className="font-normal">{jadwal.deskripsi}</span></span>
          </div>
        </div>
        {/* Action buttons */}
        <div className="flex gap-2 mt-2 md:mt-0">
          <button 
            onClick={handleViewClick}
            className="p-2 rounded-lg bg-white border border-gray-200 text-[#6C2BD7] hover:bg-gray-50 transition" 
            title="Lihat Detail"
          >
            <FiEye size={20} />
          </button>
          <button 
            onClick={handleEditClick}
            className="p-2 rounded-lg bg-white border border-gray-200 text-[#6C2BD7] hover:bg-gray-50 transition" 
            title="Edit Jadwal"
          >
            <FiEdit2 size={20} />
          </button>
          <button className="p-2 rounded-lg bg-white border border-gray-200 text-red-500 hover:bg-gray-50 transition" title="Hapus Jadwal">
            <FiTrash size={20} />
          </button>
        </div>
      </div>

      {/* Modals */}
      <ViewImmunizationModal 
        isOpen={isViewModalOpen}
        onClose={handleViewClose}
        jadwal={jadwal}
      />
      
      <EditImmunizationModal 
        isOpen={isEditModalOpen}
        onClose={handleEditClose}
        onSuccess={handleEditSuccess}
        jadwal={jadwal}
      />
    </>
  );
} 