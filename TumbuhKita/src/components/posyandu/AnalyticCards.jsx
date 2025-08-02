import React from 'react';

export default function AnalyticCards({ cards }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {cards.map((card, idx) => (
        <div key={idx} className="rounded-2xl p-6 flex flex-row justify-between items-center bg-white">
          <div className="flex flex-col gap-1">
            <span className="font-normal text-xs text-[#2B2350]">{card.title}</span>
            <span className="text-3xl font-bold text-[#2B2350]">{card.value}</span>
            <span className="text-xs text-gray-500">{card.desc}</span>
          </div>
          <div className="flex items-center justify-center">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
} 