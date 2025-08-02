import React, { useState, useEffect } from "react";

export default function ModalEditDesa({ open, onClose, data, onSave }) {
  const [formData, setFormData] = useState({
    nama: "",
    kecamatan: "",
    kabupaten: "",
    provinsi: "",
    kodePos: "",
    jumlahPenduduk: "",
    namaKepalaDesa: "",
    teleponKepalaDesa: "",
    alamatLengkap: "",
    jumlahPosyandu: "",
    status: "",
    koordinat: "",
    luasWilayah: "",
    jumlahKK: "",
    jumlahBalita: "",
    tanggalInput: "",
    fasilitasKesehatan: [],
    programUnggulan: [],
    deskripsi: ""
  });

  useEffect(() => {
    if (data) {
      // Convert date string to YYYY-MM-DD format for input
      const convertDateToInputFormat = (dateString) => {
        if (!dateString) return "";
        // Handle Indonesian date format like "15 Januari 2024"
        const months = {
          'Januari': '01', 'Februari': '02', 'Maret': '03', 'April': '04',
          'Mei': '05', 'Juni': '06', 'Juli': '07', 'Agustus': '08',
          'September': '09', 'Oktober': '10', 'November': '11', 'Desember': '12'
        };
        
        const parts = dateString.split(' ');
        if (parts.length === 3) {
          const day = parts[0].padStart(2, '0');
          const month = months[parts[1]];
          const year = parts[2];
          return `${year}-${month}-${day}`;
        }
        return dateString;
      };

      setFormData({
        nama: data.nama || "",
        kecamatan: data.kecamatan || "",
        kabupaten: data.kabupaten || "",
        provinsi: data.provinsi || "",
        kodePos: data.kodePos || "",
        jumlahPenduduk: data.jumlahPenduduk?.toString() || "",
        namaKepalaDesa: data.namaKepalaDesa || "",
        teleponKepalaDesa: data.teleponKepalaDesa || "",
        alamatLengkap: data.alamatLengkap || "",
        jumlahPosyandu: data.jumlahPosyandu?.toString() || "",
        status: data.status || "",
        koordinat: data.koordinat || "",
        luasWilayah: data.luasWilayah || "",
        jumlahKK: data.jumlahKK?.toString() || "",
        jumlahBalita: data.jumlahBalita?.toString() || "",
        tanggalInput: convertDateToInputFormat(data.tanggalInput),
        fasilitasKesehatan: data.fasilitasKesehatan || [],
        programUnggulan: data.programUnggulan || [],
        deskripsi: data.deskripsi || ""
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayInputChange = (field, value) => {
    const items = value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({
      ...prev,
      [field]: items
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert date back to Indonesian format
    const convertDateToIndonesianFormat = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];
      return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    };

    const dataToSave = {
      ...formData,
      jumlahPenduduk: parseInt(formData.jumlahPenduduk) || 0,
      jumlahPosyandu: parseInt(formData.jumlahPosyandu) || 0,
      jumlahKK: parseInt(formData.jumlahKK) || 0,
      jumlahBalita: parseInt(formData.jumlahBalita) || 0,
      tanggalInput: convertDateToIndonesianFormat(formData.tanggalInput)
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
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm transition-all duration-300 pt-16"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-4xl relative shadow-lg
        transition-all duration-300 transform animate-modal-pop max-h-[90vh] overflow-y-auto">
        {/* Tombol Close */}
        <button
          className="absolute top-4 right-4 text-2xl text-neutral-600 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-extrabold mb-1">Edit Desa</h2>
        <p className="mb-6 text-neutral-600">
          Edit informasi desa yang terdaftar dalam sistem.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informasi Dasar */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Nama Desa</label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
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
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Provinsi</label>
              <input
                type="text"
                name="provinsi"
                value={formData.provinsi}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Kode Pos</label>
              <input
                type="text"
                name="kodePos"
                value={formData.kodePos}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Jumlah Penduduk</label>
              <input
                type="number"
                name="jumlahPenduduk"
                value={formData.jumlahPenduduk}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Nama Kepala Desa</label>
              <input
                type="text"
                name="namaKepalaDesa"
                value={formData.namaKepalaDesa}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Telepon Kepala Desa</label>
              <input
                type="text"
                name="teleponKepalaDesa"
                value={formData.teleponKepalaDesa}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              />
            </div>
            <div className="col-span-2">
              <label className="text-neutral-400 font-bold mb-1 block">Alamat Lengkap</label>
              <textarea
                name="alamatLengkap"
                value={formData.alamatLengkap}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Jumlah Posyandu</label>
              <input
                type="number"
                name="jumlahPosyandu"
                value={formData.jumlahPosyandu}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              >
                <option value="">Pilih Status</option>
                <option value="Aktif">Aktif</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
              </select>
            </div>
          </div>

          {/* Informasi Geografis */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Koordinat</label>
              <input
                type="text"
                name="koordinat"
                value={formData.koordinat}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Luas Wilayah</label>
              <input
                type="text"
                name="luasWilayah"
                value={formData.luasWilayah}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Jumlah KK</label>
              <input
                type="number"
                name="jumlahKK"
                value={formData.jumlahKK}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
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
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Tanggal Input</label>
              <input
                type="date"
                name="tanggalInput"
                value={formData.tanggalInput}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              />
            </div>
          </div>

          {/* Fasilitas Kesehatan */}
          <div>
            <label className="text-neutral-400 font-bold mb-1 block">Fasilitas Kesehatan (pisahkan dengan koma)</label>
            <input
              type="text"
              value={formData.fasilitasKesehatan.join(', ')}
              onChange={(e) => handleArrayInputChange('fasilitasKesehatan', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              placeholder="Puskesmas, Posyandu, Klinik"
            />
          </div>

          {/* Program Unggulan */}
          <div>
            <label className="text-neutral-400 font-bold mb-1 block">Program Unggulan (pisahkan dengan koma)</label>
            <input
              type="text"
              value={formData.programUnggulan.join(', ')}
              onChange={(e) => handleArrayInputChange('programUnggulan', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              placeholder="Program A, Program B, Program C"
            />
          </div>

          {/* Deskripsi */}
          <div>
            <label className="text-neutral-400 font-bold mb-1 block">Deskripsi Desa</label>
            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              placeholder="Masukkan deskripsi desa..."
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