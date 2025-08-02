import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { fetchData } from '../../data/dummyData';

export default function ImmunizationSection({ anakList, mounted, setTabMenu }) {
  const { user } = useAuth();
  const [jadwalImunisasi, setJadwalImunisasi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJadwalImunisasi = async () => {
      if (user && anakList.length > 0) {
        try {
          // Load jadwal imunisasi untuk semua anak dari orang tua ini
          const allJadwal = [];
          for (const anak of anakList) {
            const jadwalAnak = await fetchData.getJadwalImunisasiAnak(anak.id);
            allJadwal.push(...jadwalAnak);
          }
          setJadwalImunisasi(allJadwal);
        } catch (error) {
          console.error('Error loading jadwal imunisasi:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    loadJadwalImunisasi();
  }, [user, anakList]);

  // Filter jadwal mendatang dan selesai
  const jadwalMendatang = jadwalImunisasi.filter(jadwal => jadwal.status === 'Terjadwal');
  const jadwalSelesai = jadwalImunisasi.filter(jadwal => jadwal.status === 'Selesai');

  // Group jadwal by anak
  const groupJadwalByAnak = (jadwalList) => {
    const grouped = {};
    jadwalList.forEach(jadwal => {
      const anak = anakList.find(a => a.id === jadwal.anakId);
      if (anak) {
        if (!grouped[anak.id]) {
          grouped[anak.id] = {
            anak,
            jadwal: []
          };
        }
        grouped[anak.id].jadwal.push(jadwal);
      }
    });
    return Object.values(grouped);
  };

  const jadwalMendatangGrouped = groupJadwalByAnak(jadwalMendatang);
  const jadwalSelesaiGrouped = groupJadwalByAnak(jadwalSelesai);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5F41B2] mx-auto mb-4"></div>
          <p className="text-[#5F41B2] font-medium">Memuat jadwal imunisasi...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '80ms' }}>
      <h1 className="text-3xl md:text-4xl font-extrabold text-secondary-50 mb-6">Imunisasi</h1>
      {/* Card Pentingnya Imunisasi */}
      <div className="bg-red-100 rounded-xl p-6 mb-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-red-500 font-bold text-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
          Pentingnya Imunisasi
        </div>
        <div className="text-red-500 text-base ml-8">Imunisasi adalah cara terbaik untuk melindungi anak dari berbagai penyakit berbahaya. Pastikan anak Anda mendapatkan semua vaksin yang direkomendasikan sesuai jadwal.</div>
        <a
          href="/artikel"
          className="text-red-500 underline font-medium text-sm mt-1 w-fit ml-8"
          onClick={e => {
            e.preventDefault();
            setTabMenu('Artikel');
          }}
        >
          Baca artikel tentang imunisasi
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card Kiri: Jadwal Imunisasi Mendatang */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-black text-lg font-bold mb-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
            Jadwal Imunisasi Mendatang
          </div>
          {jadwalMendatangGrouped.length > 0 ? (
            jadwalMendatangGrouped.map((group, idx) => (
              <div
                key={group.anak.id}
                className={`mb-4 transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 120 + 200}ms` }}
              >
                <div className="text-base mb-2">{group.anak.nama} <span className="text-neutral-400">({group.anak.usia})</span></div>
                <div className="flex flex-col gap-2">
                  {group.jadwal.map((jadwal, jadwalIdx) => (
                    <div key={jadwal.id} className="bg-neutral-100 rounded-lg px-4 py-3 flex items-center justify-between">
                      <div>
                        <div className="text-black">{jadwal.judul}</div>
                        <div className="text-xs text-neutral-400">Jadwal: {jadwal.tanggal}</div>
                        <div className="text-xs text-neutral-500">{jadwal.deskripsi}</div>
                      </div>
                      <span className="text-xs text-yellow-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg> 
                        Mendatang
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>Tidak ada jadwal imunisasi mendatang</p>
            </div>
          )}
        </div>
        {/* Card Kanan: Imunisasi Terbaru */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-black text-lg font-bold mb-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
            Imunisasi Terbaru
          </div>
          {jadwalSelesaiGrouped.length > 0 ? (
            jadwalSelesaiGrouped.map((group, idx) => (
              <div
                key={group.anak.id}
                className={`mb-4 transition-all duration-[1200ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 120 + 200}ms` }}
              >
                <div className="text-base mb-2">{group.anak.nama} <span className="text-neutral-400">({group.anak.usia})</span></div>
                <div className="flex flex-col gap-2">
                  {group.jadwal.map((jadwal, jadwalIdx) => (
                    <div key={jadwal.id} className="bg-neutral-100 rounded-lg px-4 py-3 flex items-center justify-between">
                      <div>
                        <div className="text-black">{jadwal.judul}</div>
                        <div className="text-xs text-neutral-400">Selesai: {jadwal.tanggal}</div>
                        <div className="text-xs text-neutral-500">{jadwal.deskripsi}</div>
                      </div>
                      <span className="text-xs text-green-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" />
                        </svg> 
                        Selesai
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>Belum ada imunisasi yang selesai</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 