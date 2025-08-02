import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import Swal from 'sweetalert2';

export default function AddChildForm({ 
  form, 
  setForm, 
  setShowForm, 
  golonganDarahList, 
  posyanduList 
}) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.nama.trim()) {
      newErrors.nama = 'Nama anak harus diisi';
    }
    
    if (!form.tglLahir) {
      newErrors.tglLahir = 'Tanggal lahir harus diisi';
    }
    
    if (!form.gender) {
      newErrors.gender = 'Jenis kelamin harus dipilih';
    }
    
    if (!form.berat) {
      newErrors.berat = 'Berat badan harus diisi';
    } else if (isNaN(form.berat) || parseFloat(form.berat) <= 0) {
      newErrors.berat = 'Berat badan harus berupa angka positif';
    }
    
    if (!form.tinggi) {
      newErrors.tinggi = 'Tinggi badan harus diisi';
    } else if (isNaN(form.tinggi) || parseFloat(form.tinggi) <= 0) {
      newErrors.tinggi = 'Tinggi badan harus berupa angka positif';
    }
    
    if (!form.golonganDarah) {
      newErrors.golonganDarah = 'Golongan darah harus dipilih';
    }
    
    if (!form.posyandu) {
      newErrors.posyandu = 'Posyandu harus dipilih';
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
      title: 'Konfirmasi Tambah Anak',
      text: `Apakah Anda yakin ingin menambahkan data anak "${form.nama}"?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#A58AFF',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Tambahkan',
      cancelButtonText: 'Batal'
    });

    if (result.isConfirmed) {
      setLoading(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        await Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: `Data anak "${form.nama}" berhasil ditambahkan`,
          confirmButtonColor: '#A58AFF',
          confirmButtonText: 'OK'
        });
        
        // Reset form and close
        setForm({
          nama: '',
          tglLahir: '',
          gender: '',
          berat: '',
          tinggi: '',
          golonganDarah: '',
          posyandu: '',
          catatan: '',
        });
        setShowForm(false);
        
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Gagal Menambah Data',
          text: 'Terjadi kesalahan saat menambah data anak',
          confirmButtonColor: '#A58AFF',
          confirmButtonText: 'OK'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCancel = async () => {
    // Check if form has any data
    const hasData = Object.values(form).some(value => value !== '');
    
    if (hasData) {
      const result = await Swal.fire({
        title: 'Batalkan Penambahan?',
        text: 'Data yang sudah diisi akan hilang. Apakah Anda yakin?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#A58AFF',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Batalkan',
        cancelButtonText: 'Lanjutkan'
      });

      if (result.isConfirmed) {
        setShowForm(false);
      }
    } else {
      setShowForm(false);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl md:text-4xl font-extrabold text-secondary-50 mb-6">Tambah Data Anak</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-8 w-full max-w-2xl flex flex-col gap-6">
        <div className="text-xl font-bold mb-2">Informasi Anak</div>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama Lengkap <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                errors.nama ? 'border-red-500' : 'border-neutral-200'
              }`}
              value={form.nama} 
              onChange={e => {
                setForm(f => ({...f, nama: e.target.value}));
                if (errors.nama) setErrors(prev => ({...prev, nama: ''}));
              }} 
              placeholder="Nama Lengkap" 
            />
            {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tanggal Lahir <span className="text-red-500">*</span></label>
              <input 
                type="date" 
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                  errors.tglLahir ? 'border-red-500' : 'border-neutral-200'
                }`}
                value={form.tglLahir} 
                onChange={e => {
                  setForm(f => ({...f, tglLahir: e.target.value}));
                  if (errors.tglLahir) setErrors(prev => ({...prev, tglLahir: ''}));
                }} 
              />
              {errors.tglLahir && <p className="text-red-500 text-sm mt-1">{errors.tglLahir}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Jenis Kelamin <span className="text-red-500">*</span></label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Laki-laki" 
                    checked={form.gender === 'Laki-laki'} 
                    onChange={e => {
                      setForm(f => ({...f, gender: e.target.value}));
                      if (errors.gender) setErrors(prev => ({...prev, gender: ''}));
                    }} 
                    className="accent-primary-50" 
                  />
                  <span className="text-sm">Laki laki</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Perempuan" 
                    checked={form.gender === 'Perempuan'} 
                    onChange={e => {
                      setForm(f => ({...f, gender: e.target.value}));
                      if (errors.gender) setErrors(prev => ({...prev, gender: ''}));
                    }} 
                    className="accent-primary-50" 
                  />
                  <span className="text-sm">Perempuan</span>
                </label>
              </div>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Berat Badan (kg) <span className="text-red-500">*</span></label>
              <input 
                type="number" 
                step="0.1"
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                  errors.berat ? 'border-red-500' : 'border-neutral-200'
                }`}
                value={form.berat} 
                onChange={e => {
                  setForm(f => ({...f, berat: e.target.value}));
                  if (errors.berat) setErrors(prev => ({...prev, berat: ''}));
                }} 
                placeholder="Contoh: 10.5" 
              />
              {errors.berat && <p className="text-red-500 text-sm mt-1">{errors.berat}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tinggi Badan (cm) <span className="text-red-500">*</span></label>
              <input 
                type="number" 
                step="0.1"
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                  errors.tinggi ? 'border-red-500' : 'border-neutral-200'
                }`}
                value={form.tinggi} 
                onChange={e => {
                  setForm(f => ({...f, tinggi: e.target.value}));
                  if (errors.tinggi) setErrors(prev => ({...prev, tinggi: ''}));
                }} 
                placeholder="Contoh: 85.5" 
              />
              {errors.tinggi && <p className="text-red-500 text-sm mt-1">{errors.tinggi}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Golongan Darah <span className="text-red-500">*</span></label>
              <Listbox value={form.golonganDarah} onChange={val => {
                setForm(f => ({...f, golonganDarah: val}));
                if (errors.golonganDarah) setErrors(prev => ({...prev, golonganDarah: ''}));
              }}>
                <div className="relative">
                  <Listbox.Button className={`w-full border rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-primary-50 cursor-pointer ${
                    errors.golonganDarah ? 'border-red-500' : 'border-neutral-200'
                  }`}>
                    {form.golonganDarah || 'Pilih Golongan Darah'}
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-neutral-200 rounded-lg shadow-lg">
                    {golonganDarahList.map((g, i) => (
                      <Listbox.Option key={i} value={g} className={({active}) => `px-4 py-2 cursor-pointer ${active ? 'bg-primary-10 text-primary-90' : ''}`}>{g}</Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
              {errors.golonganDarah && <p className="text-red-500 text-sm mt-1">{errors.golonganDarah}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Posyandu <span className="text-red-500">*</span></label>
              <Listbox value={form.posyandu} onChange={val => {
                setForm(f => ({...f, posyandu: val}));
                if (errors.posyandu) setErrors(prev => ({...prev, posyandu: ''}));
              }}>
                <div className="relative">
                  <Listbox.Button className={`w-full border rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-primary-50 cursor-pointer ${
                    errors.posyandu ? 'border-red-500' : 'border-neutral-200'
                  }`}>
                    {form.posyandu || 'Pilih Posyandu'}
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-neutral-200 rounded-lg shadow-lg">
                    {posyanduList.map((p, i) => (
                      <Listbox.Option key={i} value={p} className={({active}) => `px-4 py-2 cursor-pointer ${active ? 'bg-primary-10 text-primary-90' : ''}`}>{p}</Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
              {errors.posyandu && <p className="text-red-500 text-sm mt-1">{errors.posyandu}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Catatan Kesehatan (Opsional)</label>
            <input 
              type="text" 
              className="w-full border border-neutral-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50" 
              value={form.catatan} 
              onChange={e => setForm(f => ({...f, catatan: e.target.value}))} 
              placeholder="Contoh: Alergi susu, asma, dll" 
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-6 gap-4">
          <button 
            type="button"
            className="px-6 py-2 rounded-xl border border-neutral-300 text-neutral-700 font-semibold bg-white hover:bg-neutral-100 transition-colors" 
            onClick={handleCancel}
            disabled={loading}
          >
            Batal
          </button>
          <button 
            type="submit"
            className={`px-6 py-2 rounded-xl font-semibold transition-colors ${
              loading 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-primary-50 text-white hover:bg-primary-90'
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Menyimpan...
              </div>
            ) : (
              'Simpan'
            )}
          </button>
        </div>
      </form>
    </div>
  );
} 