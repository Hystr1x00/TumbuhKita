import React, { useState } from 'react';
import ModalDetailPosyandu from './ModalDetailPosyandu';

export default function TablePosyanduAdmin({ posyanduTableList, onEdit }) {
  const [modalDetailOpen, setModalDetailOpen] = useState(false);
  const [selectedPosyandu, setSelectedPosyandu] = useState(null);

  const handleDetailClick = (posyandu) => {
    setSelectedPosyandu(posyandu);
    setModalDetailOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow p-6 w-full overflow-x-auto">
        <h2 className="font-bold text-xl text-[#5F41B2] mb-4">Daftar Posyandu</h2>
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="bg-[#F4EEFF] text-[#5F41B2]">
              <th className="py-3 px-4 font-semibold">Nama Posyandu</th>
              <th className="py-3 px-4 font-semibold">Alamat</th>
              <th className="py-3 px-4 font-semibold">Kelurahan</th>
              <th className="py-3 px-4 font-semibold">Koordinat</th>
              <th className="py-3 px-4 font-semibold">Jumlah Balita</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {posyanduTableList.map((item, idx) => (
              <tr key={item.id} className="border-b border-neutral-200 last:border-b-0 hover:bg-[#F4EEFF40]">
                <td className="py-3 px-4 flex items-center gap-2">
                  <span className="inline-flex w-7 h-7 rounded-full bg-[#E6DEFA] items-center justify-center text-[#5AC8FA] font-bold align-middle">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>
                  </span>
                  {item.nama}
                </td>
                <td className="py-3 px-4">{item.alamat}</td>
                <td className="py-3 px-4">{item.kelurahan}</td>
                <td className="py-3 px-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>
                  {item.koordinat}
                </td>
                <td className="py-3 px-4">{item.jumlahBalita}</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-semibold">{item.status}</span>
                </td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalDetailPosyandu
        open={modalDetailOpen}
        onClose={() => setModalDetailOpen(false)}
        posyandu={selectedPosyandu}
        onEdit={onEdit}
      />
    </>
  );
} 