import { albums, artistInfo } from "./albums";


const DataService = {
  getAlbums: async () => {
    return albums;
  },

}

export default DataService;