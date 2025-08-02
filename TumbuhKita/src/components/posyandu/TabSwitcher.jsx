import React from 'react';

export default function TabSwitcher({ tabList, selectedTab, setSelectedTab }) {
  return (
    <div className="flex bg-[#F5F2FF] rounded-lg overflow-hidden mb-6 border border-[#E5E1F7]">
      {tabList.map(tab => (
        <button
          key={tab.key}
          className={`flex-1 py-3 font-semibold transition-all ${selectedTab === tab.key ? 'bg-white text-[#6C2BD7]' : 'text-[#A09CB3] hover:bg-gray-100'}`}
          onClick={() => setSelectedTab(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
} 