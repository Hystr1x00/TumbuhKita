import React, { useState } from 'react';
import { FiX, FiCalendar, FiTarget, FiUsers, FiFileText } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { fetchData } from '../../data/dummyData';

export default function AddImmunizationModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    judul: '',
    status: 'Terjadwal',
    target: '',
    tanggal: '',
    anakTerjadwal: '',
    deskripsi: ''
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
    const requiredFields = ['judul', 'target', 'tanggal', 'anakTerjadwal', 'deskripsi'];
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

    // Validate anakTerjadwal is a number
    if (isNaN(formData.anakTerjadwal) || parseInt(formData.anakTerjadwal) < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Data Tidak Valid',
        text: 'Jumlah anak terjadwal harus berupa angka positif',
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
      title: 'Buat Jadwal Imunisasi?',
      text: 'Jadwal imunisasi akan ditambahkan ke sistem Posyandu',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#6C2BD7',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Buat Jadwal',
      cancelButtonText: 'Batal'
    });

    if (result.isConfirmed) {
      setLoading(true);
      
      try {
        // Add posyanduId to form data (assuming posyanduId 1 for now)
        const newScheduleData = {
          ...formData,
          posyanduId: 1,
          anakTerjadwal: parseInt(formData.anakTerjadwal)
        };

        // Add the new immunization schedule
        await fetchData.addJadwalImunisasiPosyandu(newScheduleData);
        
        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Jadwal imunisasi berhasil dibuat',
          confirmButtonColor: '#6C2BD7'
        });

        // Reset form
        setFormData({
          judul: '',
          status: 'Terjadwal',
          target: '',
          tanggal: '',
          anakTerjadwal: '',
          deskripsi: ''
        });

        onSuccess();
        onClose();
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text: 'Terjadi kesalahan saat membuat jadwal imunisasi',
          confirmButtonColor: '#6C2BD7'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-secondary-50">Buat Jadwal Imunisasi</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Judul Imunisasi */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiFileText className="inline mr-2" />
                Judul Imunisasi *
              </label>
              <input
                type="text"
                name="judul"
                value={formData.judul}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                placeholder="Contoh: Imunisasi DPT 3"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
              >
                <option value="Terjadwal">Terjadwal</option>
                <option value="Selesai">Selesai</option>
                <option value="Dibatalkan">Dibatalkan</option>
              </select>
            </div>

            {/* Target Usia */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiTarget className="inline mr-2" />
                Target Usia *
              </label>
              <input
                type="text"
                name="target"
                value={formData.target}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                placeholder="Contoh: 6 Bulan"
              />
            </div>

            {/* Tanggal */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiCalendar className="inline mr-2" />
                Tanggal Imunisasi *
              </label>
              <input
                type="text"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                placeholder="Contoh: 25 Januari 2024"
              />
            </div>

            {/* Jumlah Anak Terjadwal */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiUsers className="inline mr-2" />
                Jumlah Anak Terjadwal *
              </label>
              <input
                type="number"
                name="anakTerjadwal"
                value={formData.anakTerjadwal}
                onChange={handleInputChange}
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                placeholder="Contoh: 3"
              />
            </div>

            {/* Deskripsi */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FiFileText className="inline mr-2" />
                Deskripsi *
              </label>
              <textarea
                name="deskripsi"
                value={formData.deskripsi}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent"
                placeholder="Deskripsi detail tentang imunisasi ini..."
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
                'Buat Jadwal'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 