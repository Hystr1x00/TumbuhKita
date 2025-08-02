import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function ConsultationForm({ 
  formKonsultasi, 
  setFormKonsultasi, 
  setShowFormKonsultasi, 
  anakList, 
  kategoriPertanyaanList 
}) {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formKonsultasi.anak) {
      newErrors.anak = 'Pilih anak terlebih dahulu';
    }
    if (!formKonsultasi.kategori) {
      newErrors.kategori = 'Pilih kategori pertanyaan';
    }
    if (!formKonsultasi.judul.trim()) {
      newErrors.judul = 'Judul pertanyaan harus diisi';
    }
    if (!formKonsultasi.detail.trim()) {
      newErrors.detail = 'Detail pertanyaan harus diisi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
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

    // Show confirmation dialog
    const result = await Swal.fire({
      title: 'Konfirmasi Kirim Pertanyaan',
      text: 'Apakah Anda yakin ingin mengirim pertanyaan ini?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#A58AFF',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Kirim',
      cancelButtonText: 'Batal'
    });

    if (result.isConfirmed) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        await Swal.fire({
          icon: 'success',
          title: 'Pertanyaan Berhasil Dikirim!',
          text: 'Pertanyaan Anda akan segera ditangani oleh tenaga kesehatan.',
          confirmButtonColor: '#A58AFF',
          confirmButtonText: 'OK'
        });
        
        // Reset form
        setFormKonsultasi({
          anak: '',
          kategori: '',
          judul: '',
          detail: '',
        });
        
        setShowFormKonsultasi(false);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Gagal Mengirim Pertanyaan',
          text: 'Terjadi kesalahan saat mengirim pertanyaan',
          confirmButtonColor: '#A58AFF',
          confirmButtonText: 'OK'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full flex items-center justify-center py-20">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pertanyaan Berhasil Dikirim!</h2>
          <p className="text-gray-600">Pertanyaan Anda akan segera ditangani oleh tenaga kesehatan.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full transition-all duration-[1200ms] opacity-100 translate-y-0`} style={{ transitionDelay: '80ms' }}>
      <h1 className="text-3xl md:text-4xl font-extrabold text-secondary-50 mb-6">Ajukan Pertanyaan</h1>
      <div className="bg-white rounded-2xl shadow p-8 w-full max-w-2xl flex flex-col gap-6">
        <div className="text-xl font-bold mb-2">Form Pertanyaan</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Anak <span className="text-red-500">*</span></label>
            <select 
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                errors.anak ? 'border-red-300' : 'border-neutral-200'
              }`} 
              value={formKonsultasi.anak} 
              onChange={e => {
                setFormKonsultasi(f => ({...f, anak: e.target.value}));
                if (errors.anak) setErrors(prev => ({...prev, anak: ''}));
              }}
            >
              <option value="">Pilih Anak</option>
              {anakList.map((anak) => (
                <option key={anak.id} value={anak.nama}>{anak.nama} ({anak.usia})</option>
              ))}
            </select>
            {errors.anak && <p className="text-red-500 text-xs mt-1">{errors.anak}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Kategori <span className="text-red-500">*</span></label>
            <select 
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                errors.kategori ? 'border-red-300' : 'border-neutral-200'
              }`} 
              value={formKonsultasi.kategori} 
              onChange={e => {
                setFormKonsultasi(f => ({...f, kategori: e.target.value}));
                if (errors.kategori) setErrors(prev => ({...prev, kategori: ''}));
              }}
            >
              <option value="">Pilih Kategori</option>
              {kategoriPertanyaanList.map((k, i) => (
                <option key={i} value={k}>{k}</option>
              ))}
            </select>
            {errors.kategori && <p className="text-red-500 text-xs mt-1">{errors.kategori}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Judul Pertanyaan <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                errors.judul ? 'border-red-300' : 'border-neutral-200'
              }`} 
              value={formKonsultasi.judul} 
              onChange={e => {
                setFormKonsultasi(f => ({...f, judul: e.target.value}));
                if (errors.judul) setErrors(prev => ({...prev, judul: ''}));
              }} 
              placeholder="Contoh: Anak saya susah makan sayur, apa yang harus saya lakukan?" 
            />
            {errors.judul && <p className="text-red-500 text-xs mt-1">{errors.judul}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Detail Pertanyaan <span className="text-red-500">*</span></label>
            <textarea 
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                errors.detail ? 'border-red-300' : 'border-neutral-200'
              }`} 
              rows={5} 
              value={formKonsultasi.detail} 
              onChange={e => {
                setFormKonsultasi(f => ({...f, detail: e.target.value}));
                if (errors.detail) setErrors(prev => ({...prev, detail: ''}));
              }} 
              placeholder="Jelaskan pertanyaan Anda secara detail untuk mendapatkan jawaban yang lebih akurat" 
            />
            {errors.detail && <p className="text-red-500 text-xs mt-1">{errors.detail}</p>}
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm text-blue-800 font-medium mb-1">Tips mengajukan pertanyaan:</p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Jelaskan kondisi anak secara detail</li>
                  <li>• Sertakan usia dan gejala yang dialami</li>
                  <li>• Tanyakan hal yang spesifik untuk jawaban yang lebih akurat</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-6 gap-4">
            <button 
              type="button"
              className="px-6 py-2 rounded-xl border border-red-300 text-red-500 font-semibold bg-white hover:bg-red-50 transition-colors" 
              onClick={() => setShowFormKonsultasi(false)}
              disabled={isSubmitting}
            >
              Batal
            </button>
            <button 
              type="submit"
              className={`px-6 py-2 rounded-xl font-semibold transition-colors ${
                isSubmitting 
                  ? 'bg-gray-400 text-white cursor-not-allowed' 
                  : 'bg-primary-50 text-white hover:bg-primary-90'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Mengirim...
                </div>
              ) : (
                'Kirim Pertanyaan'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 