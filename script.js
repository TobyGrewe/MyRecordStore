const albums = [
  {
    title: "Donuts",
    artist: "J Dilla",
    genre: "Hip-Hop",
    cover: "images/Dilladonuts.jpg",
    link: "https://open.spotify.com/album/5fPglEDz9YEwRgbLRvhCZy"
  },
  {
    title: "Graduation",
    artist: "Kanye West",
    genre: "Hip-Hop",
    cover: "images/kanyWestGraduation.jpg",
    link: "https://open.spotify.com/album/2UP1w6hKZ8cX1UMmRtP2TL"
  },
  {
    title: "Modal Soul",
    artist: "Nujabes",
    genre: "Hip-Hop / Jazz",
    cover: "images/nujabesModalSoul.jpg",
    link: "https://www.youtube.com/watch?v=3jvQB-qE3ZM"
  },
  {
    title: "Nevermind",
    artist: "Nirvana",
    genre: "Alternative Rock",
    cover: "images/nNEVERMIND.webp",
    link: "https://open.spotify.com/album/2guirT87VLN4A2qhRIzBtg"
  },
  {
    title: "Since I Left You",
    artist: "The Avalanches",
    genre: "Electronic",
    cover: "images/theAvalanchesSILY.jpg",
    link: "https://open.spotify.com/album/0YF8P6d8hX6EdDfcvLJ20D"
  },
  {
    title: "Merriweather Post Pavilion",
    artist: "Animal Collective",
    genre: "Psychedelic Pop",
    cover: "images/animalCollectiveMPP.png",
    link: "https://open.spotify.com/album/3kYkJ4oeXvSfsWcQlFYtO0"
  }
];



// ===== Render Albums =====
const albumContainer = document.getElementById("albumContainer");

function displayAlbums() {
  albumContainer.innerHTML = ""; // clear

  albums.forEach(album => {
    const card = document.createElement("div");
    card.className = "album-card";

    card.innerHTML = `
      <img class="album-cover" src="${album.cover}" alt="${album.title}">
      <h3 class="album-title">${album.title}</h3>
      <p class="album-artist">${album.artist}</p>
      <a class="album-link" href="${album.link}" target="_blank">Listen</a>
    `;

    albumContainer.appendChild(card);
  });
}

displayAlbums();

// ===== Basic Stats =====
document.getElementById("albumCount").textContent = albums.length;
document.getElementById("topGenre").textContent = "Hip-Hop / Electronic";
document.getElementById("topAlbum").textContent = albums[0].title;
