import React, { useState } from 'react';
import ModalDetailArtikel from './ModalDetailArtikel';

export default function TableArtikelAdmin({ artikelManajemenList, onEdit }) {
  const [modalDetailOpen, setModalDetailOpen] = useState(false);
  const [selectedArtikel, setSelectedArtikel] = useState(null);

  const handleDetailClick = (artikel) => {
    setSelectedArtikel(artikel);
    setModalDetailOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow p-6 w-full overflow-x-auto">
        <h2 className="font-bold text-xl text-[#5F41B2] mb-4">Daftar Artikel</h2>
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-[#F4EEFF] text-[#5F41B2]">
              <th className="py-3 px-4 font-semibold">Judul</th>
              <th className="py-3 px-4 font-semibold">Kategori</th>
              <th className="py-3 px-4 font-semibold">Penulis</th>
              <th className="py-3 px-4 font-semibold">Tanggal</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Dilihat</th>
              <th className="py-3 px-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {artikelManajemenList.map((item, idx) => (
              <tr key={item.id} className="border-b border-neutral-200 last:border-b-0 hover:bg-[#F4EEFF40]">
                <td className="py-3 px-4">{item.judul}</td>
                <td className="py-3 px-4">{item.kategori}</td>
                <td className="py-3 px-4 flex items-center gap-2">
                  <span className="inline-flex w-7 h-7 rounded-full bg-[#E6DEFA] items-center justify-center text-[#A58AFF] font-bold align-middle">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path d="M5.5 21h13a2 2 0 002-2v-2a7 7 0 00-14 0v2a2 2 0 002 2z" /></svg>
                  </span>
                  {item.author}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                    {item.tanggal}
                  </div>
                </td>
                <td className="py-3 px-4">
                  {item.status === 'Dipublikasikan' ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-semibold">Dipublikasikan</span>
                  ) : (
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg text-xs font-semibold">Draft</span>
                  )}
                </td>
                <td className="py-3 px-4 flex items-center gap-1">
                  <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {item.dilihat}
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2 items-center">
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
                      <svg className="w-4 h-4 text-[#5F41B2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z" />
                      </svg>
                    </button>
                    <button className="p-1 hover:bg-red-100 rounded">
                      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 6h18" />
                        <path d="M8 6v12a2 2 0 002 2h4a2 2 0 002-2V6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M5 6V4a2 2 0 012-2h10a2 2 0 012 2v2" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalDetailArtikel
        open={modalDetailOpen}
        onClose={() => setModalDetailOpen(false)}
        artikel={selectedArtikel}
        onEdit={onEdit}
      />
    </>
  );
} 