import DataService from "@/lib/data";
import { AlbumCard, AlbumsList, LastReleasesCarousel, SectionBanner } from "./components";

export default async function DiscographyContainer() {

  const spotifyData = await DataService.getSpotifyData();

  console.log('spotifyData', spotifyData);
  const albums = await DataService.getAlbums();

  return (
    <div>
      <section>
        <div className="w-full">
          <SectionBanner
            title="DISCOGRAFÍA"
            imageUrl="/images/11.jpg"
            imgAlt="Fondo discografía"
          />
        </div>
      </section>

      <section>
        <div className="w-full bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8">
              <div className="flex flex-col gap-4 text-black">
                <div>
                  <h1>Discografia</h1>
                </div>
                <div className="grid grid-cols-1  lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                  {albums.map((album) => {
                    return <AlbumCard album={album} />
                  })}
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

