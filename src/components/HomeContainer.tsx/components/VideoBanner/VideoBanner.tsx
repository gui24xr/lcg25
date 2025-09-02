import Link from 'next/link';
import React from 'react';
import { Bebas_Neue , Ysabeau_SC   } from 'next/font/google';
const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],  
  display: 'swap',
  
}); 

const   ysabeau_sc = Ysabeau_SC({
  subsets: ['latin'],
  type: 'regular',
  weight: ['400'],  
  display: 'swap',
  
}); 

const VideoBanner = () => {
  return (
    <div className="flex items-center justify-center bg-slate-800 min-h-screen ">
      {/* Container principal - AÑADIR relative aquí */}
      <div className="relative w-full h-[80vh] lg:h-[80vh] overflow-hidden">
        {/* Imagen de fondo */}
        <iframe
          className='
        
          w-[150%] h-[150%] translate-x-[-17.5%] translate-y-[-17.5%] object-cover'
           
          src={`https://www.youtube-nocookie.com/embed/vRcbywAlQhM?autoplay=1&mute=1&loop=1&playlist=vRcbywAlQhM&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1`}
          title="YouTube video background"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{

          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-white/30 backdrop-saturate-200 z-10"></div>

        {/* NavBar */}
        <div className="absolute top-0 left-0 w-full z-30">
          {/* aca podria ir super titulo con logo y nombre /> */}
        </div>

        {/* Título */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className='flex flex-col items-center justify-center gap-12'>
              <span className={`${ysabeau_sc.className} tracking-widest text-white text-4xl md:text-6xl font-bold uppercase`}>
              Bienvenido
            </span>
            
            <Link
              className={`${bebas_neue.className} tracking-widest text-white font-bold text-2xl md:text-md px-16 py-2 font-bold uppercase border-1 border-white p-4`}
              href="/#welcome-section">Ingresar</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VideoBanner;

/*
 <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"} type="video/mp4" />
        </video>
*/

/* <Link
              className={`${bebas_neue.className} tracking-widest text-white font-bold text-2xl md:text-md px-16 py-2 font-bold uppercase border-1 border-white p-4`}
              href={"https://www.youtube.com/watch?v=vRcbywAlQhM"}>Ver video</Link>*/