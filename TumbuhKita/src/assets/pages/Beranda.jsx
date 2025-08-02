import Navbar from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { Feature } from '../../components/fitur';
import CaraKerja from '../../components/kerja';
import Testimoni from '../../components/testimoni';
import QnA from '../../components/qna';
import EndSection from '../../components/end';
import Footer from '../../components/Footer';

export default function Beranda() {
  return (
    <div className="font-roboto bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Feature />
      <CaraKerja />
      <Testimoni />
      <QnA />
      <EndSection />
      <Footer />
    </div>
  );
} 