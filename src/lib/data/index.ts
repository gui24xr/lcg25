import { getSongs, getBlogPosts, getGalleryImages } from "../sanity";
import { getAllArtistTracks } from "../spotify";
import { albums, artistInfo } from "./albums";
import concerts from "./concerts";

// Tipos simples locales
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  soldOut?: boolean;
  badge?: string;
}

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
  },
  // ✅ AGREGAR ESTO SOLAMENTE
  getProducts: async (): Promise<Product[]> => {
    return [
  {
    id: 1,
    name: "Another One 10th Anniversary Vinyl",
    price: 43.98,
    category: "MAC DEMARCO",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800&q=80", // Vinyl record on turntable
    soldOut: true,
    badge: "SOLD OUT",
  },
  {
    id: 2,
    name: 'Guitar 12" Yellow LP',
    price: 26.98,
    category: "MAC DEMARCO",
    image: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&q=80", // Yellow vinyl record
  },
  {
    id: 3,
    name: 'Guitar 12" Black LP',
    price: 26.98,
    category: "MAC DEMARCO",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80", // Black vinyl record
  },
  {
    id: 4,
    name: "Guitar White T-Shirt",
    price: 30.0,
    category: "MAC DEMARCO",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80", // White t-shirt mockup
  },
  {
    id: 5,
    name: "Guitar White Dad Hat",
    price: 30.0,
    category: "MAC DEMARCO",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80", // White baseball cap
  },
  {
    id: 6,
    name: "MRL Hockey Jersey",
    price: 200.0,
    category: "MAC DEMARCO",
    image: "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?w=800&q=80", // Hockey/sports jersey
  },
  {
    id: 7,
    name: "Black Hoodie",
    price: 55.0,
    category: "MAC DEMARCO",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80", // Black hoodie
  },
  {
    id: 8,
    name: "Blue Hoodie",
    price: 55.0,
    category: "MAC DEMARCO",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80", // Blue hoodie
  },
  {
    id: 9,
    name: "Gray Hoodie",
    price: 55.0,
    category: "MAC DEMARCO",
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&q=80", // Gray hoodie
  },
] as const
   }
}

export default DataService;