import React from "react";

export default function ModalDetailDesa({ open, onClose, data, onEdit }) {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEditClick = () => {
    if (onEdit && data) {
      onEdit(data);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm transition-all duration-300 pt-16"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-4xl relative shadow-lg
        transition-all duration-300 transform animate-modal-pop max-h-[90vh] overflow-y-auto">
        {/* Tombol Close */}
        <button
          className="absolute top-4 right-4 text-2xl text-neutral-600 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-extrabold mb-1">Detail Desa</h2>
        <p className="mb-6 text-neutral-600">
          Informasi lengkap tentang desa yang terdaftar dalam sistem.
        </p>
        
        {/* Informasi Dasar */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
          <div>
            <div className="text-neutral-400 font-bold mb-1">Nama Desa</div>
            <div className="font-semibold">{data.nama}</div>
          </div>
          <div>
            <div className="text-neutral-400 font-bold mb-1">Kecamatan</div>
            <div>{data.kecamatan}</div>
          </div>
          <div>
            <div className="text-neutral-400 font-bold mb-1">Kabupaten</div>
            <div>{data.kabupaten}</div>
          </div>
          <div>
            <div className="text-neutral-400 font-bold mb-1">Provinsi</div>
            <div>{data.provinsi}</div>
          </div>
          <div>
            <div className="text-neutral-400 font-bold mb-1">Kode Pos</div>
            <div>{data.kodePos}</div>
          </div>
          <div>
            <div className="text-neutral-400 font-bold mb-1">Jumlah Penduduk</div>
            <div>{data.jumlahPenduduk?.toLocaleString()} jiwa</div>
          </div>
          <div>
            <div className="text-neutral-400 font-bold mb-1">Nama Kepala Desa</div>
            <div>{data.namaKepalaDesa}</div>
          </div>
          <div>
            <div className="text-neutral-400 font-bold mb-1">Telepon Kepala Desa</div>
            <div>{data.teleponKepalaDesa}</div>
          </div>
          <div className="col-span-2">
            <div className="text-neutral-400 font-bold mb-1">Alamat Lengkap</div>
            <div>{data.alamatLengkap}</div>
          </div>
          <div>
            <div className="text-neutral-400 font-bold mb-1">Jumlah Posyandu</div>
            <div>{data.jumlahPosyandu} posyandu</div>
          </div>
          <div>
            <div className="text-neutral-400 font-bold mb-1">Status</div>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-semibold">
              {data.status}
            </span>
          </div>
        </div>

        {/* Informasi Tambahan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#2B2350] mb-2">Informasi Geografis</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#A09CB3]">Koordinat:</span>
                  <span className="font-medium">{data.koordinat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A09CB3]">Luas Wilayah:</span>
                  <span className="font-medium">{data.luasWilayah}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A09CB3]">Jumlah KK:</span>
                  <span className="font-medium">{data.jumlahKK?.toLocaleString()} KK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A09CB3]">Jumlah Balita:</span>
                  <span className="font-medium">{data.jumlahBalita} balita</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#2B2350] mb-2">Informasi Sistem</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#A09CB3]">Tanggal Input:</span>
                  <span className="font-medium">{data.tanggalInput}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#2B2350] mb-2">Fasilitas Kesehatan</h4>
              <div className="space-y-1">
                {data.fasilitasKesehatan && data.fasilitasKesehatan.map((fasilitas, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-[#F8F6FF] rounded-lg">
                    <svg className="w-4 h-4 text-[#A58AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">{fasilitas}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#2B2350] mb-2">Program Unggulan</h4>
              <div className="space-y-1">
                {data.programUnggulan && data.programUnggulan.map((program, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-[#F4EEFF] rounded-lg">
                    <svg className="w-4 h-4 text-[#5F41B2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm font-medium">{program}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Deskripsi */}
        {data.deskripsi && (
          <div className="mb-6">
            <h4 className="font-semibold text-[#2B2350] mb-2">Deskripsi Desa</h4>
            <div className="bg-[#F8F6FF] p-4 rounded-xl">
              <p className="text-[#2B2350] leading-relaxed">
                {data.deskripsi}
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button 
            onClick={handleEditClick}
            className="flex-1 bg-[#5F41B2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4A3590] transition-colors"
          >
            Edit Desa
          </button>
          <button className="flex-1 bg-white border border-[#5F41B2] text-[#5F41B2] px-6 py-3 rounded-lg font-semibold hover:bg-[#F4EEFF] transition-colors">
            Lihat Posyandu
          </button>
        </div>

        <button
          className="mt-4 px-6 py-2 rounded-xl border border-neutral-300 text-black font-semibold bg-white hover:bg-neutral-100 transition"
          onClick={onClose}
        >
          Tutup
        </button>
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