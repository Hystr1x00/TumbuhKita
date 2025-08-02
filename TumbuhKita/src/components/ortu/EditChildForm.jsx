import React, { useState, useEffect } from 'react';
import { Listbox } from '@headlessui/react';
import { fetchData } from '../../data/dummyData';
import Swal from 'sweetalert2';

export default function EditChildForm({ 
  child, 
  onClose, 
  onSave,
  golonganDarahList, 
  posyanduList 
}) {
  const [form, setForm] = useState({
    nama: '',
    tglLahir: '',
    gender: '',
    berat: '',
    tinggi: '',
    golonganDarah: '',
    posyandu: '',
    catatan: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (child) {
      // Convert date string to YYYY-MM-DD format for input
      const convertDateToInputFormat = (dateString) => {
        if (!dateString) return "";
        // Handle Indonesian date format like "15 Januari 2023"
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

      setForm({
        nama: child.nama || '',
        tglLahir: convertDateToInputFormat(child.tglLahir),
        gender: child.gender || '',
        berat: child.berat?.replace(' kg', '') || '',
        tinggi: child.tinggi?.replace(' cm', '') || '',
        golonganDarah: child.golonganDarah || '',
        posyandu: child.posyandu || '',
        catatan: child.catatan || ''
      });
    }
  }, [child]);

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
      title: 'Konfirmasi Update Data',
      text: `Apakah Anda yakin ingin mengubah data anak "${form.nama}"?`,
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

        const updatedChild = {
          ...child,
          nama: form.nama,
          tglLahir: convertDateToIndonesianFormat(form.tglLahir),
          gender: form.gender,
          berat: `${form.berat} kg`,
          tinggi: `${form.tinggi} cm`,
          golonganDarah: form.golonganDarah,
          posyandu: form.posyandu,
          catatan: form.catatan
        };
        
        // Update data using fetchData
        await fetchData.updateAnakOrangTua(updatedChild);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show success message
        await Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: `Data anak "${form.nama}" berhasil diperbarui`,
          confirmButtonColor: '#A58AFF',
          confirmButtonText: 'OK'
        });
        
        onSave(updatedChild);
        onClose();
      } catch (error) {
        console.error('Error updating child:', error);
        Swal.fire({
          icon: 'error',
          title: 'Gagal Update Data',
          text: 'Terjadi kesalahan saat memperbarui data anak',
          confirmButtonColor: '#A58AFF',
          confirmButtonText: 'OK'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  if (!child) return null;

  return (
    <div className="w-full">
      <h1 className="text-3xl md:text-4xl font-extrabold text-secondary-50 mb-6">Edit Data Anak</h1>
      <div className="bg-white rounded-2xl shadow p-8 w-full max-w-2xl flex flex-col gap-6">
        <div className="text-xl font-bold mb-2">Informasi Anak</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
            <input 
              type="text" 
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                errors.nama ? 'border-red-500' : 'border-neutral-200'
              }`}
              value={form.nama} 
              onChange={e => setForm(f => ({...f, nama: e.target.value}))} 
              placeholder="Nama Lengkap" 
            />
            {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tanggal Lahir</label>
              <input 
                type="date" 
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                  errors.tglLahir ? 'border-red-500' : 'border-neutral-200'
                }`}
                value={form.tglLahir} 
                onChange={e => setForm(f => ({...f, tglLahir: e.target.value}))} 
              />
              {errors.tglLahir && <p className="text-red-500 text-sm mt-1">{errors.tglLahir}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Jenis Kelamin</label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="Laki-laki" 
                    checked={form.gender === 'Laki-laki'} 
                    onChange={e => setForm(f => ({...f, gender: e.target.value}))} 
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
                    onChange={e => setForm(f => ({...f, gender: e.target.value}))} 
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
              <label className="block text-sm font-medium mb-1">Berat Badan (kg)</label>
              <input 
                type="number" 
                step="0.1"
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                  errors.berat ? 'border-red-500' : 'border-neutral-200'
                }`}
                value={form.berat} 
                onChange={e => setForm(f => ({...f, berat: e.target.value}))} 
                placeholder="Contoh: 10.5" 
              />
              {errors.berat && <p className="text-red-500 text-sm mt-1">{errors.berat}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tinggi Badan (cm)</label>
              <input 
                type="number" 
                step="0.1"
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                  errors.tinggi ? 'border-red-500' : 'border-neutral-200'
                }`}
                value={form.tinggi} 
                onChange={e => setForm(f => ({...f, tinggi: e.target.value}))} 
                placeholder="Contoh: 85.5" 
              />
              {errors.tinggi && <p className="text-red-500 text-sm mt-1">{errors.tinggi}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Golongan Darah</label>
              <Listbox value={form.golonganDarah} onChange={val => setForm(f => ({...f, golonganDarah: val}))}>
                <div className="relative">
                  <Listbox.Button className={`w-full border rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-primary-50 cursor-pointer ${
                    errors.golonganDarah ? 'border-red-500' : 'border-neutral-200'
                  }`}>
                    {form.golonganDarah || 'Pilih Golongan Darah'}
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-neutral-200 rounded-lg shadow-lg">
                    {golonganDarahList.map((g, i) => (
                      <Listbox.Option key={i} value={g} className={({active}) => `px-4 py-2 cursor-pointer ${active ? 'bg-primary-10 text-primary-90' : ''}`}>
                        {g}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
              {errors.golonganDarah && <p className="text-red-500 text-sm mt-1">{errors.golonganDarah}</p>}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Posyandu</label>
            <Listbox value={form.posyandu} onChange={val => setForm(f => ({...f, posyandu: val}))}>
              <div className="relative">
                <Listbox.Button className={`w-full border rounded-lg px-4 py-2 text-left focus:outline-none focus:ring-2 focus:ring-primary-50 cursor-pointer ${
                  errors.posyandu ? 'border-red-500' : 'border-neutral-200'
                }`}>
                  {form.posyandu || 'Pilih Posyandu'}
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-neutral-200 rounded-lg shadow-lg">
                  {posyanduList.map((p, i) => (
                    <Listbox.Option key={i} value={p} className={({active}) => `px-4 py-2 cursor-pointer ${active ? 'bg-primary-10 text-primary-90' : ''}`}>
                      {p}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
            {errors.posyandu && <p className="text-red-500 text-sm mt-1">{errors.posyandu}</p>}
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
          
          <div className="flex items-center justify-between mt-6 gap-4">
            <button 
              type="button"
              className="px-6 py-2 rounded-xl border border-neutral-300 text-neutral-700 font-semibold bg-white hover:bg-neutral-100 transition-colors" 
              onClick={onClose}
              disabled={loading}
            >
              Batal
            </button>
            <button 
              type="submit"
              className="px-6 py-2 rounded-xl bg-primary-50 text-white font-semibold hover:bg-primary-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Menyimpan...
                </>
              ) : (
                'Simpan Perubahan'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 