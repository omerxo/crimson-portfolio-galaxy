
import React from 'react';
import { Crosshair } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Crosshair 
        className="text-theme-red mr-2" 
        size={32} 
        strokeWidth={2.5} 
      />
      <span className="text-2xl font-bold text-theme-light-gray">Portfolio</span>
    </div>
  );
};

export default Logo;
