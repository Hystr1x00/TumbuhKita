import React from 'react';

const QnA = () => {
  return (
    <section id='faq' className='py-16 bg-white'>
      <div className='container mx-auto'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-bold mb-2 text-secondary-50'>Pertanyaan Umum</h2>
          <p className='text-lg text-gray-600'>Jawaban untuk pertanyaan yang sering ditanyakan</p>
        </div>
        <div className='flex flex-col gap-6 max-w-5xl mx-auto pb-15'>
          {/* Q1 */}
          <div className='bg-white rounded-xl shadow p-6 md:p-8'>
            <h3 className='font-bold text-lg mb-1'>Apakah data anak saya aman?</h3>
            <p className='text-gray-600'>Ya, kami mengutamakan keamanan data. Semua data disimpan dengan enkripsi dan kami tidak akan membagikan data pribadi Anda kepada pihak ketiga tanpa izin.</p>
          </div>
          {/* Q2 */}
          <div className='bg-white rounded-xl shadow p-6 md:p-8'>
            <h3 className='font-bold text-lg mb-1'>Apakah aplikasi ini dapat digunakan oleh dokter anak?</h3>
            <p className='text-gray-600'>Ya, kami memiliki versi khusus untuk tenaga medis. Silakan hubungi tim kami untuk informasi lebih lanjut tentang fitur dan harga untuk tenaga medis.</p>
          </div>
          {/* Q3 */}
          <div className='bg-white rounded-xl shadow p-6 md:p-8'>
            <h3 className='font-bold text-lg mb-1'>Apakah data anak saya aman?</h3>
            <p className='text-gray-600'>Ya, kami mengutamakan keamanan data. Semua data disimpan dengan enkripsi dan kami tidak akan membagikan data pribadi Anda kepada pihak ketiga tanpa izin.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QnA;
