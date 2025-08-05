const albums = [
  {
    id: 1,
    title: "No me quieras",
    coverArt: "https://i.scdn.co/image/ab67616d00001e027ff101a0641452cd06a95ef6",
    releaseDate: "2024-02-14",
    platforms: {
      spotify: "https://open.spotify.com/search/luis%20carlos%20gago",
      appleMusic: "https://music.apple.com/search?term=luis%20carlos%20gago", 
      amazonMusic: "https://music.amazon.com/search/luis%20carlos%20gago",
      youtubeMusic: "https://music.youtube.com/search?q=luis%20carlos%20gago%20no%20me%20quieras"
    }
  },
  {
    id: 2,
    title: "El corrido de Luffy",
    coverArt: "https://i.scdn.co/image/ab67616d00001e02d709d38f6739c06c3c72b552",
    releaseDate: "2023-12-05",
    platforms: {
      spotify: "https://open.spotify.com/search/luis%20carlos%20gago",
      appleMusic: "https://music.apple.com/search?term=luis%20carlos%20gago%20luffy",
      amazonMusic: "https://music.amazon.com/search/luis%20carlos%20gago%20luffy", 
      youtubeMusic: "https://music.youtube.com/search?q=luis%20carlos%20gago%20corrido%20luffy"
    }
  },
  {
    id: 3,
    title: "El corrido de Ace",
    coverArt: "https://i.scdn.co/image/ab67616d00001e026034c06b79dda2b235c22fb6",
    releaseDate: "2023-11-18",
    platforms: {
      spotify: "https://open.spotify.com/search/luis%20carlos%20gago",
      appleMusic: "https://music.apple.com/search?term=luis%20carlos%20gago%20ace",
      amazonMusic: "https://music.amazon.com/search/luis%20carlos%20gago%20ace",
      youtubeMusic: "https://music.youtube.com/search?q=luis%20carlos%20gago%20corrido%20ace"
    }
  },
  {
    id: 4,
    title: "Ala derecha",
    coverArt: "https://i.scdn.co/image/ab67616d00001e02956f349f3831c014cc5ca634",
    releaseDate: "2023-09-22",
    platforms: {
      spotify: "https://open.spotify.com/search/luis%20carlos%20gago",
      appleMusic: "https://music.apple.com/search?term=luis%20carlos%20gago%20ala%20derecha",
      amazonMusic: "https://music.amazon.com/search/luis%20carlos%20gago%20ala%20derecha",
      youtubeMusic: "https://music.youtube.com/search?q=luis%20carlos%20gago%20ala%20derecha"
    }
  },
  {
    id: 5,
    title: "Contra la suerte",
    coverArt: "https://i.scdn.co/image/ab67616d00001e02baff4124fe658dc2dfb42eac",
    releaseDate: "2023-08-10",
    platforms: {
      spotify: "https://open.spotify.com/search/luis%20carlos%20gago",
      appleMusic: "https://music.apple.com/search?term=luis%20carlos%20gago%20contra%20suerte",
      amazonMusic: "https://music.amazon.com/search/luis%20carlos%20gago%20contra%20suerte",
      youtubeMusic: "https://music.youtube.com/search?q=luis%20carlos%20gago%20contra%20la%20suerte"
    }
  },
  {
    id: 6,
    title: "Margarita",
    coverArt: "https://i.scdn.co/image/ab67616d00001e0274e0853b1b69b24cae5bf965",
    releaseDate: "2023-06-15",
    platforms: {
      spotify: "https://open.spotify.com/search/luis%20carlos%20gago",
      appleMusic: "https://music.apple.com/search?term=luis%20carlos%20gago%20margarita",
      amazonMusic: "https://music.amazon.com/search/luis%20carlos%20gago%20margarita",
      youtubeMusic: "https://music.youtube.com/search?q=luis%20carlos%20gago%20margarita"
    }
  },
  {
    id: 7,
    title: "Azul",
    coverArt: "https://i.scdn.co/image/ab67616d00001e02f90b27b9a06df377ba34dbfd",
    releaseDate: "2023-04-28",
    platforms: {
      spotify: "https://open.spotify.com/search/luis%20carlos%20gago",
      appleMusic: "https://music.apple.com/search?term=luis%20carlos%20gago%20azul",
      amazonMusic: "https://music.amazon.com/search/luis%20carlos%20gago%20azul",
      youtubeMusic: "https://music.youtube.com/search?q=luis%20carlos%20gago%20azul"
    }
  },
  {
    id: 8,
    title: "Poquito basta",
    coverArt: "https://i.scdn.co/image/ab67616d00001e02c2b0833772097ca0c378023b",
    releaseDate: "2023-02-12",
    platforms: {
      spotify: "https://open.spotify.com/search/luis%20carlos%20gago",
      appleMusic: "https://music.apple.com/search?term=luis%20carlos%20gago%20poquito%20basta",
      amazonMusic: "https://music.amazon.com/search/luis%20carlos%20gago%20poquito%20basta",
      youtubeMusic: "https://music.youtube.com/search?q=luis%20carlos%20gago%20poquito%20basta"
    }
  },
  {
    id: 9,
    title: "Volar",
    coverArt: "https://i.scdn.co/image/ab67616d00001e02c83142331e9ff18ed35aa876",
    releaseDate: "2022-12-20",
    platforms: {
      spotify: "https://open.spotify.com/search/luis%20carlos%20gago",
      appleMusic: "https://music.apple.com/search?term=luis%20carlos%20gago%20volar",
      amazonMusic: "https://music.amazon.com/search/luis%20carlos%20gago%20volar",
      youtubeMusic: "https://music.youtube.com/search?q=luis%20carlos%20gago%20volar"
    }
  }
  ];
  
  // Información adicional del artista
  const artistInfo = {
    name: "Luna Vega",
    genre: "Electronic/Synthwave",
    country: "Argentina",
    yearsActive: "2019-presente",
    totalAlbums: 8,
    totalSales: 1205000,
    verified: true,
    bio: "Luna Vega es una productora y cantante electrónica argentina conocida por fusionar elementos nostálgicos del synthwave con sonidos futuristas. Ha sido pionera en la escena electrónica latinoamericana."
  };
  
  export { albums, artistInfo };