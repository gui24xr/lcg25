import React from 'react';

const DiscografiaBanner = () => {
  return (
    <div className="bg-black">
      {/* Banner Principal */}
      <div 
        className="relative w-full h-48 md:h-80 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-serif font-bold tracking-wider uppercase">
            DISCOGRAFÍA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DiscografiaBanner;