import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../data/dummyData";

const ForumDiskusi = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [jawaban, setJawaban] = useState("");
  const [pertanyaan, setPertanyaan] = useState([]);
  const [statistik, setStatistik] = useState({});
  const [kategoriPopuler, setKategoriPopuler] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [pertanyaanData, statistikData, kategoriData] = await Promise.all([
          fetchData.getPertanyaanForum(),
          fetchData.getStatistikForum(),
          fetchData.getKategoriPopuler()
        ]);

        setPertanyaan(pertanyaanData);
        setStatistik(statistikData);
        setKategoriPopuler(kategoriData);
      } catch (error) {
        console.error('Error loading forum data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleJawabClick = (item) => {
    setSelectedQuestion(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedQuestion(null);
    setJawaban("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit jawaban
    console.log("Jawaban submitted:", jawaban);
    handleCloseModal();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F2FF] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5F41B2]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2FF]">
      {/* Modal Jawab Pertanyaan */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 bg-grey-200/40 backdrop-blur-sm" onClick={handleCloseModal}>
          <div className="bg-white rounded-2xl p-8 max-w-xl w-full shadow-xl relative" onClick={e => e.stopPropagation()}>
            <h2 className="text-3xl font-bold mb-6 text-[#2B2350]">Jawab Pertanyaan</h2>
            <div className="bg-[#F7F7FA] rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#E5E1F7] flex items-center justify-center font-bold text-[#4B1D96]">
                  {selectedQuestion?.nama?.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-[#2B2350]">{selectedQuestion?.nama}</div>
                  <div className="text-xs text-[#A09CB3]">{selectedQuestion?.waktu}</div>
                </div>
              </div>
              <div className="font-bold text-[#2B2350] text-lg mb-1">{selectedQuestion?.title}</div>
              <div className="text-[#A09CB3] text-base">{selectedQuestion?.isi}</div>
            </div>
            <div className="font-semibold mb-2">Jawaban Anda sebagai Dr. Dokter</div>
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full min-h-[120px] border border-gray-300 rounded-lg p-3 mb-6 text-base focus:outline-none focus:border-[#4B1D96]"
                placeholder="Tulis jawaban yang membantu dan informatif"
                value={jawaban}
                onChange={e => setJawaban(e.target.value)}
                required
              />
              <div className="flex gap-4">
                <button type="submit" className="flex items-center gap-2 bg-[#4B1D96] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6C2BD7] transition-all w-3/4 justify-center">
                  {/* Icon paper plane */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5l19-7-7 19-2.5-7.5L3 10.5z" />
                  </svg>
                  Kirim Jawaban
                </button>
                <button type="button" className="border border-black text-black px-8 py-3 rounded-lg font-semibold bg-white w-1/4" onClick={handleCloseModal}>Batal</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Navbar */}
      <div className="flex items-center gap-4 px-8 py-4 bg-white shadow-sm">
        <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => navigate('/dashboard-kesehatan')}>
          {/* Back icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div>
          <div className="font-bold text-xl text-[#4B1D96]">Forum Diskusi</div>
          <div className="text-sm text-[#A09CB3]">Melihat dan menjawab pertanyaan dari orang tua</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* Kiri: Daftar Pertanyaan */}
        <div className="md:col-span-2 bg-white p-5 rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <div>
              <h2 className="text-2xl font-bold text-[#2B2350]">Daftar Pertanyaan</h2>
              <span className="text-sm text-[#A09CB3]">{pertanyaan.length} pertanyaan ditemukan</span>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <div className="inline-flex rounded-lg overflow-hidden bg-[#F3F3F3]">
                <button className="px-4 py-2 font-medium text-[#4B1D96] bg-white focus:outline-none" style={{borderTopLeftRadius:'0.5rem',borderBottomLeftRadius:'0.5rem'}}>Semua</button>
                <button className="px-4 py-2 font-medium  text-[#4B1D96] bg-[#F3F3F3] focus:outline-none">Belum Dijawab</button>
                <button className="px-4 py-2 font-medium  text-[#4B1D96] bg-[#F3F3F3] focus:outline-none" style={{borderTopRightRadius:'0.5rem',borderBottomRightRadius:'0.5rem'}}>Sudah Dijawab</button>
              </div>
            </div>
          </div>
          {/* Scrollable daftar pertanyaan, max 3 card terlihat */}
          <div className="flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: '600px' }}>
            {pertanyaan.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-6 shadow flex flex-col gap-2">
                <div className="flex items-center gap-3 mb-2">
                  {/* Profile Circle */}
                  <div className="w-10 h-10 rounded-full bg-[#E5E1F7] flex items-center justify-center font-bold text-[#4B1D96]">{item.nama.split(" ").map(n => n[0]).join("")}</div>
                  <div>
                    <div className="font-semibold text-[#2B2350]">{item.nama}</div>
                    <div className="text-xs text-[#A09CB3]">{item.waktu}</div>
                  </div>
                  {item.isAnswered ? (
                    <span className="ml-auto px-3 py-1 rounded bg-green-100 text-green-600 text-xs font-semibold">Terjawab</span>
                  ) : (
                    <span className="ml-auto px-3 py-1 rounded bg-red-100 text-red-600 text-xs font-semibold">Belum Dijawab</span>
                  )}
                  <span className="ml-2 px-3 py-1 rounded bg-gray-100 text-[#4B1D96] text-xs font-semibold">{item.kategoriPertanyaan}</span>
                </div>
                <div className="font-bold text-[#2B2350] text-lg mb-1">{item.title}</div>
                <div className="text-[#2B2350] text-sm mb-2">{item.isi}</div>
                <div className="flex items-center gap-4 text-xs text-[#A09CB3] mb-2">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25v-.375A2.625 2.625 0 0110.125 5.25h3.75A2.625 2.625 0 0116.5 7.875v.375m-9 0A2.625 2.625 0 005.25 10.875v5.25A2.625 2.625 0 007.875 18.75h8.25a2.625 2.625 0 002.625-2.625v-5.25A2.625 2.625 0 0016.125 8.25m-9 0h9" />
                    </svg>
                    {item.jawaban} Jawaban
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10.5V6.75A2.25 2.25 0 0011.75 4.5h-1.5A2.25 2.25 0 008 6.75v3.75m6 0v3.75a2.25 2.25 0 01-2.25 2.25h-1.5A2.25 2.25 0 018 14.25v-3.75m6 0h-6" />
                    </svg>
                    {item.suka} Suka
                  </div>
                </div>
                <button className="self-end bg-[#4B1D96] text-white px-6 py-2 rounded-lg font-normal text-xs shadow hover:bg-[#6C2BD7] transition-all" onClick={() => handleJawabClick(item)}>Jawab</button>
              </div>
            ))}
          </div>
        </div>
        {/* Kanan: Statistik & Kategori Populer */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-bold text-2xl mb-4 text-[#4B1D96]">Statistik Forum</h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Total Pertanyaan</span>
                <span className="bg-gray-100 px-3 py-1 rounded font-bold">{statistik.total}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Belum Dijawab</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded font-bold">{statistik.belum}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sudah Dijawab</span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded font-bold">{statistik.sudah}</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-bold text-2xl mb-4 text-[#4B1D96]">Kategori Populer</h3>
            <div className="flex flex-col gap-2 text-sm">
              {kategoriPopuler.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span>{item.nama}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded font-bold">{item.jumlah}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumDiskusi; 