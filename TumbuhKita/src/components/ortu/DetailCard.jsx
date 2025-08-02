import React from 'react';

export default function DetailCard({ title, value, growth }) {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col items-start">
      <div className="text-neutral-500 text-sm mb-1">{title}</div>
      <div className="font-bold text-2xl mb-1 text-primary-90">{value}</div>
      <div className="text-green-500 text-xs font-medium">{growth}</div>
    </div>
  );
} 