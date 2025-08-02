import React from 'react';

export default function TableBalitaAdmin({ balitaTableList, onEdit }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full overflow-x-auto">
      <h2 className="font-bold text-xl text-[#5F41B2] mb-4">Daftar Balita</h2>
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="bg-[#F4EEFF] text-[#5F41B2]">
            <th className="py-3 px-4 font-semibold">Nama</th>
            <th className="py-3 px-4 font-semibold">Tanggal Lahir</th>
            <th className="py-3 px-4 font-semibold">Orang Tua</th>
            <th className="py-3 px-4 font-semibold">Usia</th>
            <th className="py-3 px-4 font-semibold">Jenis Kelamin</th>
            <th className="py-3 px-4 font-semibold">Berat Tinggi</th>
            <th className="py-3 px-4 font-semibold">Posyandu</th>
            <th className="py-3 px-4 font-semibold">Status</th>
            <th className="py-3 px-4 font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {balitaTableList.map((item, idx) => (
            <tr key={item.id} className="border-b border-neutral-200 last:border-b-0 hover:bg-[#F4EEFF40]">
              <td className="py-3 px-4 flex items-center gap-2">
                <span className="inline-flex w-7 h-7 rounded-full bg-[#E6DEFA] items-center justify-center text-[#5AC8FA] font-bold align-middle">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                </span>
                {item.nama}
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                  {item.tglLahir}
                </div>
              </td>
              <td className="py-3 px-4">{item.orangTua}</td>
              <td className="py-3 px-4">{item.usia}</td>
              <td className="py-3 px-4">{item.gender}</td>
              <td className="py-3 px-4">
                <span className="flex items-center gap-1 text-xs">
                  <svg className="w-4 h-4 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18V6a2 2 0 012-2h8a2 2 0 012 2v12" /><circle cx="9" cy="18" r="2" /><circle cx="15" cy="18" r="2" /></svg>
                  {item.berat} / {item.tinggi}
                </span>
              </td>
              <td className="py-3 px-4">{item.posyandu}</td>
              <td className="py-3 px-4">
                {item.status === 'Sehat' ? (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-semibold">Sehat</span>
                ) : (
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg text-xs font-semibold">Perlu Perhatian</span>
                )}
              </td>
              <td className="py-3 px-4 flex gap-2 items-center">
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
  );
} 