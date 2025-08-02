import React from 'react';
import jim from '../assets/jimm.svg';

const EndSection = () => {
  return (
    <section className='relative py-16 bg-secondary-50'>
      <div className='container mx-auto flex flex-col items-center justify-center min-h-[300px]'>
        <h2 className='text-2xl md:text-3xl font-bold text-white text-center mb-8'>
          Mulai Pantau Tumbuh Kembang Balita Anda Sekarang
        </h2>
        <button className='bg-primary-50 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600 mb-4'>
          Daftar Sekarang
        </button>
      </div>
      {/* Gambar di kiri bawah */}
      <img 
        src={jim} 
        alt='Order Character' 
        className='absolute left-0 bottom-0 w-40 md:w-56 lg:w-64 z-20 pointer-events-none' 
      />
    </section>
  );
};

export default EndSection;
