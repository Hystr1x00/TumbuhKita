import React from "react";

const TabSwitcher = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'data-anak', label: 'Data Anak' },
    { id: 'forum-pertanyaan', label: 'Forum Pertanyaan' }
  ];

  return (
    <div className="flex bg-[#F5F2FF] rounded-lg overflow-hidden mb-6 border border-[#E5E1F7]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`flex-1 py-3 font-semibold ${
            activeTab === tab.id
              ? 'bg-white text-[#6C2BD7] shadow'
              : 'text-[#A09CB3] hover:bg-gray-100'
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher; 