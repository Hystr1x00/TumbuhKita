import React from 'react';

export default function TableDesaAdmin({ desaTableList, onDetail, onEdit }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full overflow-x-auto">
      <h2 className="font-bold text-xl text-[#5F41B2] mb-4">Daftar Desa</h2>
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="bg-[#F4EEFF] text-[#5F41B2]">
            <th className="py-3 px-4 font-semibold">Nama Desa</th>
            <th className="py-3 px-4 font-semibold">Kecamatan</th>
            <th className="py-3 px-4 font-semibold">Kabupaten</th>
            <th className="py-3 px-4 font-semibold">Jumlah Posyandu</th>
            <th className="py-3 px-4 font-semibold">Status</th>
            <th className="py-3 px-4 font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {desaTableList.map((desa, idx) => (
            <tr key={desa.id} className="border-b border-neutral-200 last:border-b-0 hover:bg-[#F4EEFF40]">
              <td className="py-3 px-4">{desa.nama}</td>
              <td className="py-3 px-4">{desa.kecamatan}</td>
              <td className="py-3 px-4">{desa.kabupaten}</td>
              <td className="py-3 px-4">{desa.jumlahPosyandu}</td>
              <td className="py-3 px-4"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-semibold">{desa.status}</span></td>
              <td className="py-3 px-4 flex gap-2 items-center">
                <button
                  className="bg-[#F4EEFF] text-[#5F41B2] px-3 py-1 rounded-lg text-xs font-semibold hover:bg-[#E6DEFA]"
                  onClick={() => onDetail(desa)}
                >
                  Detail
                </button>
                <button 
                  onClick={() => onEdit && onEdit(desa)}
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