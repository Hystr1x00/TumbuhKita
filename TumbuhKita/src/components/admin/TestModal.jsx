import React, { useState } from 'react';
import ModalEditBalita from './ModalEditBalita';

export default function TestModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [testData, setTestData] = useState({
    id: 1,
    nama: 'Test Balita',
    tglLahir: '15 Januari 2023',
    orangTua: 'Test Orang Tua',
    usia: '2 tahun 4 bulan',
    gender: 'Laki-laki',
    berat: '12.5 kg',
    tinggi: '89 cm',
    posyandu: 'Posyandu Test',
    status: 'Sehat'
  });

  const handleSave = (data) => {
    console.log('Test modal save:', data);
    setIsOpen(false);
  };

  return (
    <div className="p-4">
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Test Modal
      </button>
      
      <ModalEditBalita
        open={isOpen}
        onClose={() => setIsOpen(false)}
        balita={testData}
        onSave={handleSave}
      />
    </div>
  );
} 