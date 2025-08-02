import React, { useState, useEffect } from "react";

export default function ModalEditPosyandu({ open, onClose, posyandu, onSave }) {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    kelurahan: "",
    kecamatan: "",
    kabupaten: "",
    koordinat: "",
    jumlahBalita: "",
    status: "",
    tanggal: "",
    kader: []
  });

  useEffect(() => {
    if (posyandu) {
      setFormData({
        nama: posyandu.nama || "",
        alamat: posyandu.alamat || "",
        kelurahan: posyandu.kelurahan || "",
        kecamatan: posyandu.kecamatan || "",
        kabupaten: posyandu.kabupaten || "",
        koordinat: posyandu.koordinat || "",
        jumlahBalita: posyandu.jumlahBalita || "",
        status: posyandu.status || "",
        tanggal: posyandu.tanggal || "",
        kader: posyandu.kader || []
      });
    }
  }, [posyandu]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleKaderChange = (e) => {
    const kader = e.target.value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({
      ...prev,
      kader: kader
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
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
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm transition-all duration-300 pt-16"
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
        <h2 className="text-2xl font-extrabold mb-1">Edit Posyandu</h2>
        <p className="mb-6 text-neutral-600">
          Edit informasi posyandu yang terdaftar dalam sistem.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informasi Dasar */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Nama Posyandu</label>
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
              <label className="text-neutral-400 font-bold mb-1 block">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              >
                <option value="">Pilih Status</option>
                <option value="Aktif">Aktif</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
                <option value="Dalam Perbaikan">Dalam Perbaikan</option>
              </select>
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Kelurahan</label>
              <input
                type="text"
                name="kelurahan"
                value={formData.kelurahan}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Kecamatan</label>
              <input
                type="text"
                name="kecamatan"
                value={formData.kecamatan}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Kabupaten</label>
              <input
                type="text"
                name="kabupaten"
                value={formData.kabupaten}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Jumlah Balita</label>
              <input
                type="number"
                name="jumlahBalita"
                value={formData.jumlahBalita}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                min="0"
              />
            </div>
          </div>

          {/* Alamat */}
          <div>
            <label className="text-neutral-400 font-bold mb-1 block">Alamat Lengkap</label>
            <textarea
              name="alamat"
              value={formData.alamat}
              onChange={handleInputChange}
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              required
            />
          </div>

          {/* Koordinat */}
          <div>
            <label className="text-neutral-400 font-bold mb-1 block">Koordinat</label>
            <input
              type="text"
              name="koordinat"
              value={formData.koordinat}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              placeholder="Contoh: -6.2088, 106.8456"
            />
          </div>

          {/* Tanggal Input */}
          <div>
            <label className="text-neutral-400 font-bold mb-1 block">Tanggal Input</label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
            />
          </div>

          {/* Kader Posyandu */}
          <div>
            <label className="text-neutral-400 font-bold mb-1 block">Kader Posyandu (pisahkan dengan koma)</label>
            <input
              type="text"
              value={formData.kader.join(', ')}
              onChange={handleKaderChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              placeholder="Nama Kader 1, Nama Kader 2, Nama Kader 3"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button 
              type="submit"
              className="flex-1 bg-[#5F41B2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4A3590] transition-colors"
            >
              Simpan Perubahan
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