import React from 'react';
import { FiX, FiCalendar, FiUsers, FiTarget, FiFileText, FiCheckCircle, FiClock, FiXCircle } from 'react-icons/fi';

export default function ViewImmunizationModal({ isOpen, onClose, jadwal }) {
  if (!isOpen || !jadwal) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Terjadwal':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Selesai':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Dibatalkan':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Terjadwal':
        return <FiClock size={16} />;
      case 'Selesai':
        return <FiCheckCircle size={16} />;
      case 'Dibatalkan':
        return <FiXCircle size={16} />;
      default:
        return <FiClock size={16} />;
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-secondary-50">Detail Jadwal Imunisasi</h2>
            <p className="text-gray-600">Informasi lengkap jadwal imunisasi</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Status Badge */}
        <div className="mb-6">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getStatusColor(jadwal.status)}`}>
            {getStatusIcon(jadwal.status)}
            <span className="font-medium">{jadwal.status}</span>
          </div>
        </div>

        {/* Main Information */}
        <div className="space-y-6">
          {/* Judul Imunisasi */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <FiFileText className="text-gray-600" />
              <h3 className="font-semibold text-gray-800">Judul Imunisasi</h3>
            </div>
            <p className="text-lg font-medium text-gray-900">{jadwal.judul}</p>
          </div>

          {/* Target Usia */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <FiTarget className="text-gray-600" />
              <h3 className="font-semibold text-gray-800">Target Usia</h3>
            </div>
            <p className="text-lg font-medium text-gray-900">{jadwal.target}</p>
          </div>

          {/* Tanggal Imunisasi */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <FiCalendar className="text-gray-600" />
              <h3 className="font-semibold text-gray-800">Tanggal Imunisasi</h3>
            </div>
            <p className="text-lg font-medium text-gray-900">{jadwal.tanggal}</p>
          </div>

          {/* Jumlah Anak Terjadwal */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <FiUsers className="text-gray-600" />
              <h3 className="font-semibold text-gray-800">Jumlah Anak Terjadwal</h3>
            </div>
            <p className="text-lg font-medium text-gray-900">{jadwal.anakTerjadwal} anak</p>
          </div>

          {/* Deskripsi */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <FiFileText className="text-gray-600" />
              <h3 className="font-semibold text-gray-800">Deskripsi</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{jadwal.deskripsi}</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">Informasi Tambahan</h3>
          <div className="space-y-2 text-sm text-blue-700">
            <p>• Pastikan semua anak yang terjadwal hadir tepat waktu</p>
            <p>• Siapkan dokumen kesehatan anak yang diperlukan</p>
            <p>• Bawa buku KIA atau kartu imunisasi</p>
            <p>• Jika ada kondisi khusus, konsultasikan dengan petugas</p>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
} 