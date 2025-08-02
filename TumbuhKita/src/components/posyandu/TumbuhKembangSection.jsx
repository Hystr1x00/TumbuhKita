import React, { useState } from 'react';
import { fetchData } from '../../data/dummyData';
import Swal from 'sweetalert2';

export default function TumbuhKembangSection({ anakTumbuhKembang, selectedAnakIdx, setSelectedAnakIdx, formTumbuh, setFormTumbuh, statusGiziOptions }) {
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!formTumbuh.berat || !formTumbuh.tinggi || !formTumbuh.lingkar) {
      return false;
    }
    return true;
  };

  const handleUpdate = async () => {
    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Data Tidak Lengkap',
        text: 'Mohon lengkapi semua data yang diperlukan',
        confirmButtonColor: '#A58AFF',
        confirmButtonText: 'OK'
      });
      return;
    }

    const selectedAnak = anakTumbuhKembang[selectedAnakIdx];
    
    // Show confirmation dialog
    const result = await Swal.fire({
      title: 'Konfirmasi Update Data',
      text: `Apakah Anda yakin ingin mengupdate data tumbuh kembang ${selectedAnak.nama}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#A58AFF',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Update',
      cancelButtonText: 'Batal'
    });

    if (result.isConfirmed) {
      setLoading(true);
      
      try {
        // Prepare updated data
        const updatedData = {
          ...selectedAnak,
          berat: formTumbuh.berat,
          tinggi: formTumbuh.tinggi,
          lingkar: formTumbuh.lingkar,
          statusGizi: formTumbuh.statusGizi,
          tanggalPemeriksaan: new Date().toLocaleDateString('id-ID')
        };

        // Update data using fetchData
        await fetchData.updateTumbuhKembangPosyandu(updatedData);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show success message
        await Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: `Data tumbuh kembang ${selectedAnak.nama} berhasil diperbarui`,
          confirmButtonColor: '#A58AFF',
          confirmButtonText: 'OK'
        });
        
      } catch (error) {
        console.error('Error updating data:', error);
        Swal.fire({
          icon: 'error',
          title: 'Gagal Update Data',
          text: 'Terjadi kesalahan saat memperbarui data',
          confirmButtonColor: '#A58AFF',
          confirmButtonText: 'OK'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-xl font-bold mb-1">Pemeriksaan Tumbuh Kembang</h2>
      <p className="text-gray-500 mb-6">Update data pertumbuhan dan perkembangan anak</p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Anak List */}
        <div className="flex-1">
          <div className="font-semibold mb-2 text-lg">Pilih Anak untuk Diperiksa</div>
          <div className="flex flex-col gap-3">
            {anakTumbuhKembang.map((anak, idx) => (
              <button
                key={anak.nama}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-left transition font-medium ${selectedAnakIdx === idx ? 'bg-[#2B0A5D] text-white border-transparent' : 'bg-white border-black/30 text-black'}`}
                onClick={() => setSelectedAnakIdx(idx)}
              >
                <span className="text-xl">👶</span> {anak.nama} ({anak.usia})
              </button>
            ))}
          </div>
        </div>
        {/* Form Update */}
        <div className="flex-1">
          <div className="font-semibold mb-4 text-lg">Update Data: {anakTumbuhKembang[selectedAnakIdx]?.nama}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium mb-1">Berat Badan (kg) <span className="text-red-500">*</span></label>
              <input
                type="number"
                step="0.1"
                className="w-full border rounded-lg px-4 py-2"
                value={formTumbuh.berat}
                onChange={e => setFormTumbuh(f => ({ ...f, berat: e.target.value }))}
                placeholder="Berat Badan"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Tinggi Badan (cm) <span className="text-red-500">*</span></label>
              <input
                type="number"
                step="0.1"
                className="w-full border rounded-lg px-4 py-2"
                value={formTumbuh.tinggi}
                onChange={e => setFormTumbuh(f => ({ ...f, tinggi: e.target.value }))}
                placeholder="Tinggi Badan"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Lingkar Kepala (cm) <span className="text-red-500">*</span></label>
            <input
              type="number"
              step="0.1"
              className="w-full border rounded-lg px-4 py-2"
              value={formTumbuh.lingkar}
              onChange={e => setFormTumbuh(f => ({ ...f, lingkar: e.target.value }))}
              placeholder="Lingkar Kepala"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Status Gizi</label>
            <select
              className="w-full border rounded-lg px-4 py-2"
              value={formTumbuh.statusGizi}
              onChange={e => setFormTumbuh(f => ({ ...f, statusGizi: e.target.value }))}
            >
              <option value="">Pilih Status Gizi</option>
              {statusGiziOptions.map((status, idx) => (
                <option key={idx} value={status}>{status}</option>
              ))}
            </select>
          </div>
          <button 
            onClick={handleUpdate}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 text-base mt-2 transition-colors ${
              loading 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-[#2176AE] text-white hover:bg-[#1a5f8a]'
            }`}
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Updating...
              </>
            ) : (
              <>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="inline">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/>
                </svg>
                Update Data Tumbuh Kembang
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
} 