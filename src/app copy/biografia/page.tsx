import { BiographyComponent } from "@/components";

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

export default function BiografiaPage() {
  return (
    <>
      <section className="bg-white min-h-screen flex items-center justify-center">
        <BiographyComponent content="Biografía1" />
      </section>
    </>
  );
} 