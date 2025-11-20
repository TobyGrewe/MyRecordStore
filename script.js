// ===== Album Data =====
// You can manually add albums here for now.
// Later we can switch to Spotify/Apple Music APIs.

const albums = [
  {
    title: "In Rainbows",
    artist: "Radiohead",
    genre: "Alternative",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/6/6e/In_Rainbows_Official_Cover.png",
    link: "https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK",
  },
  {
    title: "Flower Boy",
    artist: "Tyler, The Creator",
    genre: "Hip-Hop",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/Tyler%2C_the_Creator_-_Flower_Boy.png",
    link: "https://open.spotify.com/album/2nkto6YNI4rUYTLqEwWJ3o",
  },
];

// ===== Populate Albums on Page =====
const albumContainer = document.getElementById("albumContainer");

function displayAlbums() {
  albumContainer.innerHTML = "";

  albums.forEach((album) => {
    const card = document.createElement("a");
    card.classList.add("album-card");
    card.href = album.link;
    card.target = "_blank";

    card.innerHTML = `
      <img src="${album.cover}" alt="${album.title}" class="album-cover" />
      <div class="album-info">
        <p class="album-title">${album.title}</p>
        <p class="album-artist">${album.artist}</p>
      </div>
    `;

    albumContainer.appendChild(card);
  });
}

// ===== Stats =====
function calculateStats() {
  const albumCount = albums.length;
  document.getElementById("albumCount").textContent = albumCount;

  if (albumCount === 0) return;

  // Top Genre
  const genreCounts = {};
  albums.forEach((a) => {
    genreCounts[a.genre] = (genreCounts[a.genre] || 0) + 1;
  });

  const topGenre = Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0][0];
  document.getElementById("topGenre").textContent = topGenre;

  // Most Played Album (basic version: just the first for now)
  const topAlbum = albums[0].title;
  document.getElementById("topAlbum").textContent = topAlbum;
}

// Run on page load
displayAlbums();
calculateStats();