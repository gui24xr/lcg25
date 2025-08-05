import { DefaultComponent } from "@/components";

export const metadata = {
  title: "Juan Pérez - Artista Oficial",
  description: "Sitio oficial de Juan Pérez. Últimas canciones, conciertos y noticias.",
  openGraph: {
    title: "Juan Pérez - Artista Oficial",
    description: "Sitio oficial de Juan Pérez. Últimas canciones, conciertos y noticias.",
    image: "/images/hero-image.jpg",
    url: "https://juanperez.com",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function TiendaPage() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <DefaultComponent content="Tienda1" />
      </section>
      
      <section className="min-h-screen flex items-center justify-center">
        <DefaultComponent content="Tienda2" />
      </section>
      
      <section className="min-h-screen flex items-center justify-center">
        <DefaultComponent content="Tienda3" />
      </section>
      
      <section className="min-h-screen flex items-center justify-center">
        <DefaultComponent content="Tienda4" />
      </section>
    </>
  );
} 