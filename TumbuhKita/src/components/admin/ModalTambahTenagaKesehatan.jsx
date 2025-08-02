import React, { useState } from "react";

export default function ModalTambahTenagaKesehatan({ open, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nama: "",
    spesialisasi: "",
    email: "",
    telp: "",
    lokasiTugas: "",
    status: "",
    pengalaman: "",
    pendidikan: "",
    sertifikasi: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSertifikasiChange = (e) => {
    const sertifikasi = e.target.value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({
      ...prev,
      sertifikasi: sertifikasi
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
        <h2 className="text-2xl font-extrabold mb-1">Tambah Tenaga Kesehatan</h2>
        <p className="mb-6 text-neutral-600">
          Tambahkan informasi tenaga kesehatan baru ke dalam sistem.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informasi Dasar */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Nama Lengkap</label>
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
              <label className="text-neutral-400 font-bold mb-1 block">Spesialisasi</label>
              <select
                name="spesialisasi"
                value={formData.spesialisasi}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              >
                <option value="">Pilih Spesialisasi</option>
                <option value="Dokter Umum">Dokter Umum</option>
                <option value="Dokter Anak">Dokter Anak</option>
                <option value="Bidan">Bidan</option>
                <option value="Perawat">Perawat</option>
                <option value="Ahli Gizi">Ahli Gizi</option>
                <option value="Psikolog">Psikolog</option>
              </select>
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Telepon</label>
              <input
                type="tel"
                name="telp"
                value={formData.telp}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="text-neutral-400 font-bold mb-1 block">Lokasi Tugas</label>
              <input
                type="text"
                name="lokasiTugas"
                value={formData.lokasiTugas}
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
                <option value="Cuti">Cuti</option>
              </select>
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Pengalaman</label>
              <input
                type="text"
                name="pengalaman"
                value={formData.pengalaman}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                placeholder="Contoh: 5 tahun"
              />
            </div>
          </div>

          {/* Pendidikan */}
          <div>
            <label className="text-neutral-400 font-bold mb-1 block">Pendidikan</label>
            <textarea
              name="pendidikan"
              value={formData.pendidikan}
              onChange={handleInputChange}
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              placeholder="Masukkan riwayat pendidikan..."
            />
          </div>

          {/* Sertifikasi */}
          <div>
            <label className="text-neutral-400 font-bold mb-1 block">Sertifikasi (pisahkan dengan koma)</label>
            <input
              type="text"
              value={formData.sertifikasi.join(', ')}
              onChange={handleSertifikasiChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              placeholder="Sertifikasi A, Sertifikasi B, Sertifikasi C"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button 
              type="submit"
              className="flex-1 bg-[#5F41B2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4A3590] transition-colors"
            >
              Tambah Tenaga Kesehatan
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