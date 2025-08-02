import React, { useState } from "react";
import {
  DashboardHeader,
  AnalyticCards,
  TabSwitcher,
  RecentQuestions,
  NavbarKesehatan
} from "../../components/kesehatan";

const DashboardTenagaKesehatan = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Dummy data
  const namaDokter = "Dr. dokter";
  const dataAnak = 24;
  const pertanyaanForum = 24;
  const statusAktif = true;
  const pertanyaanTerbaru = [
    {
      id: 1,
      penanya: "Bu Sarah",
      pertanyaan: "Anak saya sering menolak makan sayur, apa yang harus saya lakukan?",
      kategori: "Nutrisi & Makanan",
    },
    {
      id: 2,
      penanya: "Bu Sarah",
      pertanyaan: "Anak saya sering menolak makan sayur, apa yang harus saya lakukan?",
      kategori: "Nutrisi & Makanan",
    },
    {
      id: 3,
      penanya: "Bu Sarah",
      pertanyaan: "Anak saya sering menolak makan sayur, apa yang harus saya lakukan?",
      kategori: "Nutrisi & Makanan",
    },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-[#F5F2FF]">
      {/* Navbar */}
      <NavbarKesehatan />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 mt-5">
        {/* Title & Welcome */}
        <DashboardHeader namaDokter={namaDokter} />

        {/* Cards Analitik */}
        <AnalyticCards 
          dataAnak={dataAnak}
          pertanyaanForum={pertanyaanForum}
          statusAktif={statusAktif}
        />

        {/* Tabs */}
        <TabSwitcher activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Card: Pertanyaan Terbaru */}
        <RecentQuestions pertanyaanTerbaru={pertanyaanTerbaru} />
      </div>
    </div>
  );
};

export default DashboardTenagaKesehatan; 