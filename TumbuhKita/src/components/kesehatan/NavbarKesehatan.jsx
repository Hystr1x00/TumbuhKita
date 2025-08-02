import React from "react";

const NavbarKesehatan = () => {
  return (
    <div className="flex items-center justify-between w-full px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img src="/Logo.svg" alt="Logo" className="h-8" />
        <span className="font-bold text-lg text-[#6C2BD7]">TumbuhKita.</span>
      </div>
      <button className="border px-4 py-2 rounded-lg font-medium hover:bg-gray-100">Logout</button>
    </div>
  );
};

export default NavbarKesehatan; 