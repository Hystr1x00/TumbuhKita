import React from 'react';
import gerry from '../assets/gerry.svg';

const Testimoni = () => {
  return (
    <section id='dukungan' className='py-16 bg-white relative pt-15'>
      <div className='container mx-auto pt-15'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-bold mb-2 text-secondary-50'>Testimoni Pengguna</h2>
          <p className='text-lg text-gray-600'>Apa kata orang tua yang telah menggunakan aplikasi kami</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16 text-center mb-10 pt-15'>
          {/* Card 1 */}
          <div className='bg-white rounded-xl shadow p-8 flex flex-col items-center'>
            <div className='w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden flex items-center justify-center'>
              {/* Foto bisa diganti, sementara lingkaran abu-abu */}
              <img src='https://randomuser.me/api/portraits/women/68.jpg' alt='Ibu Siti' className='w-full h-full object-cover'/>
            </div>
            <h3 className='font-bold text-xl mb-2'>Ibu Siti</h3>
            <p className='text-gray-600'>"Aplikasi ini sangat membantu saya memantau pertumbuhan anak saya. Saya bisa melihat grafik pertumbuhan dan mendapatkan pengingat imunisasi tepat waktu."</p>
          </div>
          {/* Card 2 */}
          <div className='bg-white rounded-xl shadow p-8 flex flex-col items-center'>
            <div className='w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden flex items-center justify-center'>
              <img src='https://randomuser.me/api/portraits/men/32.jpg' alt='Bapak Andi' className='w-full h-full object-cover'/>
            </div>
            <h3 className='font-bold text-xl mb-2'>Bapak Andi</h3>
            <p className='text-gray-600'>"Sebagai ayah baru, aplikasi ini sangat membantu saya memahami tahapan perkembangan anak. Tips stimulasi yang diberikan juga sangat bermanfaat."</p>
          </div>
          {/* Card 3 */}
          <div className='bg-white rounded-xl shadow p-8 flex flex-col items-center'>
            <div className='w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden flex items-center justify-center'>
              <img src='https://randomuser.me/api/portraits/women/65.jpg' alt='Ibu Maya' className='w-full h-full object-cover'/>
            </div>
            <h3 className='font-bold text-xl mb-2'>Ibu Maya</h3>
            <p className='text-gray-600'>"Berkat aplikasi ini, saya bisa mendeteksi keterlambatan perkembangan anak saya lebih awal dan segera berkonsultasi dengan dokter."</p>
          </div>
        </div>
        {/* Gambar di kanan bawah */}
        <img src={gerry} alt='Mail' className='absolute right-0 bottom-0 w-40 md:w-44 lg:w-60 ' style={{zIndex:0}} />
      </div>
    </section>
  );
};

export default Testimoni;
