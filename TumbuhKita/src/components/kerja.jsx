import React from 'react';
import buddy from '../assets/buddy.svg';

const CaraKerja = () => {
  return (
    <section id='carakerja' className='py-16 bg-white relative pb-60'>
      <div className='container mx-auto'>
        <div className='text-center mb-10 pt-15'>
          <h2 className='text-3xl font-bold mb-2 text-primary-900'>Cara Kerja</h2>
          <p className='text-lg text-gray-600'>Mudah digunakan untuk memantau tumbuh kembang balita Anda</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10 pt-15'>
          {/* Step 1 */}
          <div className='flex flex-col items-center'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full mb-4' style={{backgroundColor: '#DFCEFF'}}>
              <span className='text-3xl font-bold text-primary-50'>1</span>
            </div>
            <h3 className='font-bold text-xl mb-2'>Daftar Akun</h3>
            <p className='text-gray-500'>Buat akun dan tambahkan profil balita Anda dengan mudah</p>
          </div>
          {/* Step 2 */}
          <div className='flex flex-col items-center'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full mb-4' style={{backgroundColor: '#DFCEFF'}}>
              <span className='text-3xl font-bold text-primary-50'>2</span>
            </div>
            <h3 className='font-bold text-xl mb-2'>Input Data</h3>
            <p className='text-gray-500'>Masukkan data pertumbuhan, perkembangan dan imunisasi balita</p>
          </div>
          {/* Step 3 */}
          <div className='flex flex-col items-center'>
            <div className='w-16 h-16 flex items-center justify-center rounded-full mb-4' style={{backgroundColor: '#DFCEFF'}}>
              <span className='text-3xl font-bold text-primary-50'>3</span>
            </div>
            <h3 className='font-bold text-xl mb-2'>Pantau Perkembangan</h3>
            <p className='text-gray-500'>Lihat grafik pertumbuhan dan dapatkan rekomendasi sesuai kondisi balita</p>
          </div>
        </div>
      </div>
      {/* Gambar di kiri bawah, di luar container agar tidak terpotong */}
      <img 
        src={buddy} 
        alt='Jumbo Up' 
        className='absolute left-0 bottom-0 w-80 md:w-[340px] lg:w-[440px] z-30 pointer-events-none' 
        style={{marginTop: '50px'}} 
      />
    </section>
  );
};

export default CaraKerja;
