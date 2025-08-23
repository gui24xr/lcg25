import React from 'react';
import Image from 'next/image';
import { NavBar } from '../../../components';





const BiographyBanner = () => {
  return (
    <div className="w-full min-h-screen relative"> {/* Agregué relative aquí */}
        {/* Imagen de fondo optimizada */}
        <Image
            src="/images/3.jpg"
            alt="Background description"
            fill
            className="object-cover"
            quality={75}
            priority={true}
        />
         
        {/* Overlay opcional */}
        <div className="absolute inset-0 backdrop-saturate-100 z-10"></div>
         
        {/* Contenido */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-12 min-h-screen flex flex-col justify-between">
            {/* NavBar en la parte superior */}
            <div className="flex justify-center"> {/* O justify-start si quieres a la izquierda */}
                <NavBar />
            </div>
            
            {/* Biografía en la parte inferior */}
            <div className="w-full flex justify-center p-8 bg-black/70"> {/* Mantiene el texto alineado a la derecha */}
                <div className="max-w-5xl"> {/* Limita el ancho del párrafo */}
                    <p className="text-white text-lg font-lightleading-relaxed">
                        Nacido en Hermosillo, Sonora, Carin León creció rodeado de música, un amor que lo llevó a iniciar su viaje musical a los 15 años, aprendiendo guitarra y desarrollando su talento en canto y composición. En 2018, su álbum debut, Desvelada con Banda y Mariachi, lo catapultó como una de las figuras más prominentes en la música regional mexicana.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}



const BiographyBanner2 = () => {
  return (
    <div className="bg-black">
      {/* Container principal - AÑADIR relative aquí */}
      <div className="relative w-full h-48 min-h-screen overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src={"/images/12.jpg"}
          alt={"Fondo biografía"}
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
          <h1 className="text-white text-4xl md:text-6xl font-serif font-bold tracking-wider uppercase">
            {'Sobre mi'}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BiographyBanner;


/*

*/