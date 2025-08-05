import DataService from "@/lib/data";
import { AlbumsList, Banner, DiscografiaBanner } from "./components";

export default async function DiscographyContainer() {
    
    const albums = await DataService.getAlbums();

    return (
      <div className="bg-white min-h-screen px-32 mx-auto flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Discografia
        </h2>
        <div className="w-full">    
            <DiscografiaBanner />
        </div>
        <section className="w-full">
            <AlbumsList albums={albums} />
        </section>
      </div>
    )
  }