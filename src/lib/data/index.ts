import { getSongs, getBlogPosts, getGalleryImages } from "../sanity";
import { getAllArtistTracks } from "../spotify";
import { albums, artistInfo } from "./albums";
import concerts from "./concerts";


const DataService = {
  getAlbums: async () => {
    return albums;
  },
  getConcerts: async () => {
    return concerts;
  },
  getPicturesGallery: async () => {
    return [
      "https://images.unsplash.com/photo-1591216105236-5ba45970702a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHwxfHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHwyfHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1659465493788-046d031bcd35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHwzfHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1721785744251-1ab6da8f0f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHw0fHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1565701964127-a3f37fdbb46b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHw1fHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1568900311962-66498d9e9daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHw2fHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1671834214096-6aa88bd6470d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHw3fHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1612560257094-364751a2a50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHw4fHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1612560257335-740c4b773081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHw5fHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1676246811449-186a3f77f248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHwxMHx8bW90b3JiaWtlc3xlbnwwfHx8fDE3NTU4MDE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1591216105236-5ba45970702a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHwxfHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHwyfHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1659465493788-046d031bcd35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHwzfHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1721785744251-1ab6da8f0f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHw0fHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1565701964127-a3f37fdbb46b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHw1fHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1568900311962-66498d9e9daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHw2fHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1671834214096-6aa88bd6470d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHw3fHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1612560257094-364751a2a50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHw4fHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1612560257335-740c4b773081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHw5fHxtb3RvcmJpa2VzfGVufDB8fHx8MTc1NTgwMTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1676246811449-186a3f77f248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDM4ODV8MHwxfHNlYXJjaHwxMHx8bW90b3JiaWtlc3xlbnwwfHx8fDE3NTU4MDE0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ];
  },
  getSpotifyData: async () => {
    return await getAllArtistTracks();
  },
  getVideosGallery: async () => {
    return [
      "vRcbywAlQhM",
      "vRcbywAlQhM",
      "vRcbywAlQhM",
      "vRcbywAlQhM",
      "vRcbywAlQhM",
      "vRcbywAlQhM",
      "vRcbywAlQhM",
    ];
  },
  getSanityData: async () => {
      return {
        songs: await getSongs(),
        blogPosts: await getBlogPosts(),
        galleryImages: await getGalleryImages()
      }
    }
}

export default DataService;