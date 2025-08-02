import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import CardDataAnak from './CardDataAnak';
import AddChildModal from './AddChildModal';

export default function DataAnakSection({ anakList, onDataUpdate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccess = () => {
    if (onDataUpdate) {
      onDataUpdate();
    }
  };

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-1">Data Anak Terdaftar</h2>
          <p className="text-sm text-gray-400">Kelola data anak yang terdaftar di posyandu</p>
        </div>
        <button 
          onClick={handleOpenModal}
          className="flex items-center gap-2 bg-[#A084E8] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#6C2BD7] transition-all"
        >
          <FiPlus /> Tambah Anak
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {anakList.map((anak, idx) => (
          <CardDataAnak key={idx} anak={anak} onDataUpdate={handleSuccess} />
        ))}
      </div>

      <AddChildModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSuccess={handleSuccess}
      />
    </div>
  );
} 