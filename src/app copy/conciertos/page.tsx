import { ConcertsComponent } from "@/components";

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

export default function ConciertosPage() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <ConcertsComponent content="Conciertos1" />
      </section>
    </>
  );
} 