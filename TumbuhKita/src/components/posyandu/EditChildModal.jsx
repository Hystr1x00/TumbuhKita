import React, { useState } from 'react';
import { FiX, FiUser, FiCalendar, FiUsers, FiMapPin } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { fetchData } from '../../data/dummyData';

export default function EditChildModal({ isOpen, onClose, onSuccess, anak }) {
  const [formData, setFormData] = useState({
    nama: anak?.nama || '',
    orangTua: anak?.orangTua || '',
    gender: anak?.gender || '',
    usia: anak?.usia || '',
    statusGizi: anak?.statusGizi || '',
    bbTb: anak?.bbTb || '',
    lingkarKepala: anak?.lingkarKepala || '',
    cekTerakhir: anak?.cekTerakhir || '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['nama', 'orangTua', 'gender', 'usia', 'statusGizi', 'bbTb', 'lingkarKepala', 'cekTerakhir'];
    const emptyFields = requiredFields.filter(field => !formData[field].trim());
    
    if (emptyFields.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Data Tidak Lengkap',
        text: 'Mohon lengkapi semua field yang wajib diisi',
        confirmButtonColor: '#6C2BD7'
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Show confirmation
    const result = await Swal.fire({
      title: 'Update Data Anak?',
      text: 'Data anak akan diperbarui di sistem Posyandu',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#6C2BD7',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Update',
      cancelButtonText: 'Batal'
    });

    if (result.isConfirmed) {
      setLoading(true);
      
      try {
        // Update child data
        const updatedChildData = {
          ...anak,
          ...formData
        };

        // In a real app, you would call an API here
        // For now, we'll just simulate the update
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data anak berhasil diperbarui',
          confirmButtonColor: '#6C2BD7'
        });

        onSuccess();
        onClose();
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text: 'Terjadi kesalahan saat memperbarui data anak',
          confirmButtonColor: '#6C2BD7'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  if (!isOpen || !anak) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-secondary-50">Edit Data Anak</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nama Anak */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiUser className="inline mr-2" />
                Nama Anak *
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                placeholder="Masukkan nama anak"
              />
            </div>

            {/* Nama Orang Tua */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiUsers className="inline mr-2" />
                Nama Orang Tua *
              </label>
              <input
                type="text"
                name="orangTua"
                value={formData.orangTua}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                placeholder="Masukkan nama orang tua"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender *
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
              >
                <option value="">Pilih Gender</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            {/* Usia */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiCalendar className="inline mr-2" />
                Usia *
              </label>
              <input
                type="text"
                name="usia"
                value={formData.usia}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                placeholder="Contoh: 24 Bulan"
              />
            </div>

            {/* Status Gizi */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status Gizi *
              </label>
              <select
                name="statusGizi"
                value={formData.statusGizi}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
              >
                <option value="">Pilih Status Gizi</option>
                <option value="Gizi Baik">Gizi Baik</option>
                <option value="Gizi Kurang">Gizi Kurang</option>
                <option value="Gizi Lebih">Gizi Lebih</option>
                <option value="Gizi Buruk">Gizi Buruk</option>
              </select>
            </div>

            {/* Berat Badan / Tinggi Badan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Berat Badan / Tinggi Badan *
              </label>
              <input
                type="text"
                name="bbTb"
                value={formData.bbTb}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                placeholder="Contoh: 12.5kg / 85cm"
              />
            </div>

            {/* Lingkar Kepala */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lingkar Kepala *
              </label>
              <input
                type="text"
                name="lingkarKepala"
                value={formData.lingkarKepala}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                placeholder="Contoh: 46cm"
              />
            </div>

            {/* Cek Terakhir */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiCalendar className="inline mr-2" />
                Tanggal Cek Terakhir *
              </label>
              <input
                type="text"
                name="cekTerakhir"
                value={formData.cekTerakhir}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                placeholder="Contoh: 10/1/2024"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-[#6C2BD7] text-white rounded-lg hover:bg-[#5A1BC7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Menyimpan...
                </>
              ) : (
                'Update Data'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 