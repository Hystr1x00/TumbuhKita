import React, { useState, useEffect } from "react";

export default function ModalTambahBalita({ open, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nama: "",
    tglLahir: "",
    orangTua: "",
    usia: "",
    gender: "",
    berat: "",
    tinggi: "",
    posyandu: "",
    status: ""
  });

  useEffect(() => {
    if (open) {
      setFormData({
        nama: "",
        tglLahir: "",
        orangTua: "",
        usia: "",
        gender: "",
        berat: "",
        tinggi: "",
        posyandu: "",
        status: ""
      });
    }
  }, [open]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format berat dan tinggi
    const dataToSave = {
      ...formData,
      berat: `${formData.berat} kg`,
      tinggi: `${formData.tinggi} cm`,
    };
    onSave(dataToSave);
    onClose();
  };

  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/30 backdrop-blur-sm transition-all duration-300 pt-16"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-2xl relative shadow-lg
        transition-all duration-300 transform animate-modal-pop max-h-[90vh] overflow-y-auto">
        {/* Tombol Close */}
        <button
          className="absolute top-4 right-4 text-2xl text-neutral-600 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-extrabold mb-1">Tambah Data Balita</h2>
        <p className="mb-6 text-neutral-600">
          Masukkan informasi balita yang ingin ditambahkan ke sistem.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informasi Dasar */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Nama Balita</label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Tanggal Lahir</label>
              <input
                type="date"
                name="tglLahir"
                value={formData.tglLahir}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Nama Orang Tua</label>
              <input
                type="text"
                name="orangTua"
                value={formData.orangTua}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Usia</label>
              <input
                type="text"
                name="usia"
                value={formData.usia}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                placeholder="Contoh: 2 tahun 3 bulan"
                required
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Jenis Kelamin</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              >
                <option value="">Pilih Jenis Kelamin</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              >
                <option value="">Pilih Status</option>
                <option value="Sehat">Sehat</option>
                <option value="Perlu Perhatian">Perlu Perhatian</option>
              </select>
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Berat Badan (kg)</label>
              <input
                type="number"
                name="berat"
                value={formData.berat}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                step="0.1"
                min="0"
                placeholder="Contoh: 12.5"
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Tinggi Badan (cm)</label>
              <input
                type="number"
                name="tinggi"
                value={formData.tinggi}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                step="0.1"
                min="0"
                placeholder="Contoh: 85.2"
              />
            </div>
            <div className="col-span-2">
              <label className="text-neutral-400 font-bold mb-1 block">Posyandu</label>
              <input
                type="text"
                name="posyandu"
                value={formData.posyandu}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                placeholder="Nama Posyandu"
                required
              />
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button 
              type="submit"
              className="flex-1 bg-[#5F41B2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4A3590] transition-colors"
            >
              Simpan Data
            </button>
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 bg-white border border-[#5F41B2] text-[#5F41B2] px-6 py-3 rounded-lg font-semibold hover:bg-[#F4EEFF] transition-colors"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
      <style>{`
        .animate-modal-pop {
          animation: modalPop 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes modalPop {
          0% { opacity: 0; transform: scale(0.95) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}