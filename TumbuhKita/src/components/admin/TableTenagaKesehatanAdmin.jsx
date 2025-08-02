import React, { useState } from 'react';
import ModalDetailTenagaKesehatan from './ModalDetailTenagaKesehatan';

export default function TableTenagaKesehatanAdmin({ tenagaKesehatanTableList, onEdit }) {
  const [modalDetailOpen, setModalDetailOpen] = useState(false);
  const [selectedTenagaKesehatan, setSelectedTenagaKesehatan] = useState(null);

  const handleDetailClick = (tenagaKesehatan) => {
    setSelectedTenagaKesehatan(tenagaKesehatan);
    setModalDetailOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow p-6 w-full overflow-x-auto">
        <h2 className="font-bold text-xl text-[#5F41B2] mb-4">Daftar Tenaga Kesehatan</h2>
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-[#F4EEFF] text-[#5F41B2]">
              <th className="py-3 px-4 font-semibold">Nama</th>
              <th className="py-3 px-4 font-semibold">Spesialisasi</th>
              <th className="py-3 px-4 font-semibold">Kontak</th>
              <th className="py-3 px-4 font-semibold">Lokasi Tugas</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tenagaKesehatanTableList.map((item, idx) => (
              <tr key={item.id} className="border-b border-neutral-200 last:border-b-0 hover:bg-[#F4EEFF40]">
                <td className="py-3 px-4 flex items-center gap-2">
                  <span className="inline-flex w-7 h-7 rounded-full bg-[#E6DEFA] items-center justify-center text-[#A58AFF] font-bold align-middle">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path d="M5.5 21h13a2 2 0 002-2v-2a7 7 0 00-14 0v2a2 2 0 002 2z" /></svg>
                  </span>
                  {item.nama}
                </td>
                <td className="py-3 px-4">{item.spesialisasi}</td>
                <td className="py-3 px-4">
                  <div className="flex flex-col gap-1">
                    <span className="flex items-center gap-1 text-xs"><svg className="w-4 h-4 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><path d="M22 6l-10 7L2 6" /></svg>{item.email}</span>
                    <span className="flex items-center gap-1 text-xs"><svg className="w-4 h-4 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 01-2 2A18 18 0 013 5a2 2 0 012-2h2.09a2 2 0 012 1.72c.13.81.36 1.6.7 2.34a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0120 17.91z" /></svg>{item.telp}</span>
                  </div>
                </td>
                <td className="py-3 px-4 flex items-center gap-2"><svg className="w-4 h-4 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>{item.lokasiTugas}</td>
                <td className="py-3 px-4"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-semibold">{item.status}</span></td>
                <td className="py-3 px-4 flex gap-2 items-center">
                  <button 
                    className="bg-white border border-neutral-300 text-[#5F41B2] px-3 py-1 rounded-lg text-xs font-semibold hover:bg-[#F4EEFF]"
                    onClick={() => handleDetailClick(item)}
                  >
                    Detail
                  </button>
                  <button 
                    onClick={() => onEdit && onEdit(item)}
                    className="p-1 hover:bg-[#E6DEFA] rounded"
                  >
                    <svg className="w-4 h-4 text-[#5F41B2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z" /></svg>
                  </button>
                  <button className="p-1 hover:bg-red-100 rounded"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18" /><path d="M8 6v12a2 2 0 002 2h4a2 2 0 002-2V6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M5 6V4a2 2 0 012-2h10a2 2 0 012 2v2" /></svg></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalDetailTenagaKesehatan
        open={modalDetailOpen}
        onClose={() => setModalDetailOpen(false)}
        tenagaKesehatan={selectedTenagaKesehatan}
        onEdit={onEdit}
      />
    </>
  );
} 