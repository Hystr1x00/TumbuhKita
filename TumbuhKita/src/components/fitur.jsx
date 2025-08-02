import React from 'react'

export const Feature = () => {
  return (
    <div id="fitur" className='py-16 bg-secondary-50 pb-30 pt-25'>
        <div className='container mx-auto'>
            <div className='text-center mb-10'>
                <h2 className='text-3xl font-bold mb-2 text-white'>Fitur Utama</h2>
                <p className='text-lg text-gray-200'>Mudah digunakan untuk memantau tumbuh kembang balita Anda</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Fitur 1 */}
                <div className='bg-white rounded-xl shadow p-6 flex flex-col gap-3 relative'>
                <div className='w-10 h-10 mb-2 text-indigo-600'>
                    {/* Icon statistik */}
                    <svg fill='none' viewBox='0 0 24 24' stroke='currentColor'><rect x='3' y='13' width='3' height='8' rx='1'/><rect x='8' y='9' width='3' height='12' rx='1'/><rect x='13' y='5' width='3' height='16' rx='1'/><rect x='18' y='2' width='3' height='19' rx='1'/></svg>
                </div>
                <h3 className='font-bold text-xl'>Pemantauan Pertumbuhan</h3>
                <p className='text-gray-600'>Catat dan pantau pertumbuhan anak secara berkala dengan grafik yang mudah dipahami.</p>
                </div>
                {/* Fitur 2 */}
                <div className='bg-white rounded-xl shadow p-6 flex flex-col gap-3 relative'>
                <div className='w-10 h-10 mb-2 text-indigo-600'>
                    {/* Icon shield */}
                    <svg fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z' /></svg>
                </div>
                <h3 className='font-bold text-xl'>Jadwal & Riwayat Imunisasi</h3>
                <p className='text-gray-600'>Pantau jadwal imunisasi anak lebih mudah dengan TumbuhKita — pengingat otomatis dan pencatatan riwayat digital untuk orang tua dan tenaga kesehatan.</p>
                </div>
                {/* Fitur 3 */}
                <div className='bg-white rounded-xl shadow p-6 flex flex-col gap-3 relative'>
                <div className='w-10 h-10 mb-2 text-indigo-600'>
                    {/* Icon www */}
                    <svg fill='none' viewBox='0 0 24 24' stroke='currentColor'><circle cx='12' cy='12' r='10' strokeWidth='2'/><path d='M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20' strokeWidth='2'/></svg>
                </div>
                <h3 className='font-bold text-xl'>Akses Web & Mobile</h3>
                <p className='text-gray-600'>Gunakan TumbuhKita dengan mudah melalui smartphone maupun komputer. Tidak perlu instalasi rumit—cukup buka aplikasi atau akses melalui browser untuk memantau tumbuh kembang anak kapan saja dan di mana saja.</p>
                </div>
                {/* Fitur 4 */}
                <div className='bg-white rounded-xl shadow p-6 flex flex-col gap-3 relative'>
                <div className='w-10 h-10 mb-2 text-indigo-600'>
                    {/* Icon chat */}
                    <svg fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 21l1.8-4A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' /></svg>
                </div>
                <h3 className='font-bold text-xl'>Konsultasi Online</h3>
                <p className='text-gray-600'>Ajukan pertanyaan seputar tumbuh kembang anak dan dapatkan jawaban dari tenaga kesehatan profesional.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
