import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import CardJadwalImunisasi from './CardJadwalImunisasi';
import AddImmunizationModal from './AddImmunizationModal';

export default function ImunisasiSection({ jadwalImunisasiList, onDataUpdate }) {
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
          <h2 className="text-xl font-bold mb-1">Jadwal Imunisasi</h2>
          <p className="text-sm text-gray-400">Kelola jadwal imunisasi dan agenda anak</p>
        </div>
        <button 
          onClick={handleOpenModal}
          className="flex items-center gap-2 bg-[#A084E8] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#6C2BD7] transition-all"
        >
          <FiPlus /> Buat Jadwal Imunisasi
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {jadwalImunisasiList.map((jadwal, idx) => (
          <CardJadwalImunisasi key={idx} jadwal={jadwal} onDataUpdate={handleSuccess} />
        ))}
      </div>

      <AddImmunizationModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSuccess={handleSuccess}
      />
    </div>
  );
} 