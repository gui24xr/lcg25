import React from 'react';
import Image from 'next/image';
import NavBar from '../NavBar/NavBar';
import { Bebas_Neue } from 'next/font/google';
const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],  
  display: 'swap',
  
}); 


const SectionBanner = ({title, imageUrl, imgAlt,}: {title: string, imageUrl: string, imgAlt: string}) => {
  return (
    <div className="bg-black">
      {/* Container principal - AÑADIR relative aquí */}
      <div className="relative w-full h-48 md:h-80 xl:min-h-[50vh] overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src={imageUrl}
          alt={imgAlt}
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10"></div>
        
        {/* NavBar */}
        <div className="absolute top-0 left-0 w-full z-30">
          <NavBar />
        </div>
        
        {/* Título */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className={`${bebas_neue.className} tracking-widest text-white text-4xl md:text-6xl font-bold uppercase`}>
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;