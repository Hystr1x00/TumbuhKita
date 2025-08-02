import React from 'react';

export default function ConsultationSection({ 
  mounted, 
  setShowFormKonsultasi, 
  kategoriAktif, 
  setKategoriAktif, 
  filteredPertanyaan 
}) {
  return (
    <div className={`w-full transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '80ms' }}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary-50">Pertanyaan Saya</h1>
        <button className="bg-primary-50 text-white px-6 py-2 rounded-xl font-semibold flex items-center gap-2 shadow-sm hover:bg-primary-90 transition-colors" onClick={() => setShowFormKonsultasi(true)}>Ajukan Pertanyaan</button>
      </div>
      <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-6">
        {/* Kategori pertanyaan */}
        <div className="grid grid-cols-3 gap-2 mb-4 bg-neutral-100 rounded-xl p-1 w-full max-w-md">
          <button onClick={() => setKategoriAktif('Semua')} className={`py-2 rounded-xl text-base font-semibold transition-all duration-200 w-full ${kategoriAktif === 'Semua' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}>Semua</button>
          <button onClick={() => setKategoriAktif('Terjawab')} className={`py-2 rounded-xl text-base font-semibold transition-all duration-200 w-full ${kategoriAktif === 'Terjawab' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}>Terjawab</button>
          <button onClick={() => setKategoriAktif('Belum Terjawab')} className={`py-2 rounded-xl text-base font-semibold transition-all duration-200 w-full ${kategoriAktif === 'Belum Terjawab' ? 'bg-white text-primary-90 shadow' : 'bg-transparent text-neutral-400'}`}>Belum Terjawab</button>
        </div>
        
        {/* Render cards pertanyaan sesuai filter */}
        {filteredPertanyaan.length > 0 ? (
          filteredPertanyaan.map((q, idx) => (
            <div
              key={q.id}
              className={`bg-white rounded-xl border border-neutral-100 p-6 mb-4 transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 120 + 200}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-lg">{q.judul}</div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-lg">
                    {q.kategori}
                  </span>
                  {q.status === 'Terjawab' ? (
                    <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-lg">Terjawab</span>
                  ) : (
                    <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-lg">Belum Terjawab</span>
                  )}
                </div>
              </div>
              <div className="text-sm text-neutral-400 mb-3">Ditanyakan pada: {q.tanggal}</div>
              
              {/* Detail pertanyaan */}
              <div className="bg-[#F7F7F7] rounded-lg p-4 mb-3">
                <div className="font-medium text-sm mb-2 text-gray-700">Detail Pertanyaan:</div>
                <div className="text-sm text-black">{q.detail}</div>
              </div>
              
              {/* Jawaban */}
              <div className="bg-[#F7F7F7] rounded-lg p-4">
                <div className="font-medium text-sm mb-1 text-gray-700">Jawaban:</div>
                {q.status === 'Terjawab' ? (
                  <>
                    <div className="text-sm text-black mb-2">{q.jawaban}</div>
                    <div className="text-xs text-neutral-400">
                      Dijawab oleh {q.penjawab} pada {q.tglJawab}
                    </div>
                  </>
                ) : (
                  <div className="text-sm text-gray-500 italic">
                    Pertanyaan Anda sedang dalam proses penanganan oleh tenaga kesehatan.
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg mb-2">
              {kategoriAktif === 'Semua' 
                ? 'Belum ada pertanyaan yang diajukan'
                : `Tidak ada pertanyaan yang ${kategoriAktif.toLowerCase()}`
              }
            </p>
            {kategoriAktif === 'Semua' && (
              <button 
                className="bg-primary-50 text-white px-6 py-2 rounded-xl font-semibold hover:bg-primary-90 transition-colors"
                onClick={() => setShowFormKonsultasi(true)}
              >
                Ajukan Pertanyaan Pertama
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 