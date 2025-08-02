import React, { useState, useEffect } from 'react';

export default function ModalTambahDesa({ open, onClose, onSubmit }) {
  const [form, setForm] = useState({
    namaDesa: '',
    kecamatan: '',
    kabupaten: '',
    provinsi: '',
    kodePos: '',
    jumlahPenduduk: '',
    namaKepalaDesa: '',
    telpKepalaDesa: '',
    alamat: '',
    status: 'Aktif',
  });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center backdrop-blur-sm bg-white/30 transition-all duration-300 pt-20">
      <div
        className={`bg-white rounded-2xl shadow-lg w-full max-w-2xl p-8 relative transform transition-all duration-300 ease-out animate-modal-pop
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
        style={{ minHeight: 0 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-2xl text-neutral-700 hover:text-primary-90"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-extrabold mb-1">Tambah Desa Baru</h2>
        <p className="mb-6 text-neutral-600">Masukkan informasi lengkap desa yang akan didaftarkan dalam sistem.</p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-semibold mb-1">Nama Desa</label>
              <input name="namaDesa" value={form.namaDesa} onChange={handleChange} type="text" placeholder="Masukkan nama desa" className="w-full border rounded-lg px-4 py-2 outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Kecamatan</label>
              <input name="kecamatan" value={form.kecamatan} onChange={handleChange} type="text" placeholder="Masukkan kecamatan" className="w-full border rounded-lg px-4 py-2 outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Kabupaten</label>
              <input name="kabupaten" value={form.kabupaten} onChange={handleChange} type="text" placeholder="Masukkan nama kabupaten" className="w-full border rounded-lg px-4 py-2 outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Provinsi</label>
              <input name="provinsi" value={form.provinsi} onChange={handleChange} type="text" placeholder="Masukkan provinsi" className="w-full border rounded-lg px-4 py-2 outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Kode Pos</label>
              <input name="kodePos" value={form.kodePos} onChange={handleChange} type="text" placeholder="Masukkan kode pos" className="w-full border rounded-lg px-4 py-2 outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Jumlah Penduduk</label>
              <input name="jumlahPenduduk" value={form.jumlahPenduduk} onChange={handleChange} type="number" placeholder="Masukkan jumlah penduduk" className="w-full border rounded-lg px-4 py-2 outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Nama Kepala Desa</label>
              <input name="namaKepalaDesa" value={form.namaKepalaDesa} onChange={handleChange} type="text" placeholder="Masukkan nama kepala desa" className="w-full border rounded-lg px-4 py-2 outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Telepon Kepala Desa</label>
              <input name="telpKepalaDesa" value={form.telpKepalaDesa} onChange={handleChange} type="text" placeholder="Masukkan nomor telepon" className="w-full border rounded-lg px-4 py-2 outline-none" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Alamat Lengkap</label>
            <textarea name="alamat" value={form.alamat} onChange={handleChange} placeholder="Masukkan alamat lengkap" className="w-full border rounded-lg px-4 py-2 outline-none min-h-[70px]" />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-1">Status</label>
            <select name="status" value={form.status} onChange={handleChange} className="w-full border rounded-lg px-4 py-2 outline-none">
              <option value="Aktif">Aktif</option>
              <option value="Tidak Aktif">Tidak Aktif</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button type="button" onClick={onClose} className="px-6 py-2 rounded-lg border border-neutral-300 bg-white text-neutral-800 font-semibold hover:bg-neutral-100">Batal</button>
            <button type="submit" className="px-6 py-2 rounded-lg bg-[#A58AFF] text-white font-semibold hover:bg-primary-90">Tambah</button>
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