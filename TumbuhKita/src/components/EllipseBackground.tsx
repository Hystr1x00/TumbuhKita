import React from 'react';

const EllipseBackground: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] overflow-visible">
      <div className="absolute w-[846px] h-[1107px] bg-[#F4EEFF] rounded-[45%_55%_60%_40%/60%_40%_60%_40%] z-0 translate-x-1/4" />
    </div>
  );
};

export default EllipseBackground; 