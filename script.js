// Play vinyl scratch sound
const vinylSound = new Audio('sounds/vinyl-scratch.mp3');
vinylSound.volume = 0.3;

const albums = [
  {
    title: "Donuts",
    artist: "J Dilla",
    genre: "Hip-Hop",
    cover: "images/Dilladonuts.jpg",
    link: "https://youtu.be/crZF0YNORIY?si=Kt6BCv0LbAPtBRg2"
  },
  {
    title: "Graduation",
    artist: "Kanye West",
    genre: "Hip-Hop",
    cover: "images/kanyWestGraduation.jpg",
    link: "https://www.youtube.com/watch?v=rr3p8qy1X-g"
  },
  {
    title: "Modal Soul",
    artist: "Nujabes",
    genre: "Hip-Hop / Jazz",
    cover: "images/nujabesModalSoul.jpg",
    link: "https://youtu.be/8iP3J8jFYdM?si=snDMWgrDUltNpgHm"
  },
  {
    title: "Nevermind",
    artist: "Nirvana",
    genre: "Alternative Rock",
    cover: "images/nNEVERMIND.webp",
    link: "https://www.youtube.com/watch?v=EwENfTvSQbQ&list=RDEwENfTvSQbQ&start_radio=1"
  },
  {
    title: "Since I Left You",
    artist: "The Avalanches",
    genre: "Electronic",
    cover: "images/theAvalanchesSILY.jpg",
    link: "https://www.youtube.com/watch?v=TyOfYE5cqNk&list=PLVxakxoWul5V3M8awBfeQnboZN_fqkEPS&index=1"
  },
  {
    title: "Merriweather Post Pavilion",
    artist: "Animal Collective",
    genre: "Psychedelic Pop",
    cover: "images/animalCollectiveMPP.png",
    link: "https://www.youtube.com/watch?v=Ebmp2YMIr9s&list=OLAK5uy_lq6ZY8GSCQhbG7Z6cr-rw5EL9CQ54CdSs"
  },
  {
    title: "Channel Orange",
    artist: "Frank Ocean",
    genre: "R&B / Soul",
    cover: "images/frankOceanChannelOrange.jpg",
    link: "https://www.youtube.com/watch?v=xEQ_946TO_g&list=OLAK5uy_mAGTQmYeosOR-Pp17OnnzkKHPeEbzSFOg"
  },
  {
    title: "Late Registration",
    artist: "Kanye West",
    genre: "Hip-Hop",
    cover: "images/kanyeWestLateRegistration.jpg",
    link: "https://www.youtube.com/watch?v=14Ef5mb2qhc&list=PLAn-T5fEM_WC7RUX39PezdMp8Qlo-oiMh"
  },
  {
    title: "The Life of Pablo",
    artist: "Kanye West",
    genre: "Hip-Hop",
    cover: "images/kanyeWestTheLifeOfPablo.jpg",
    link: "https://www.youtube.com/watch?v=6oHdAA3AqnE&list=PLzMq4yH_FvVac_1R0DMcMkcwnJ1-hFx6b"
  },
  {
    title: "The College Dropout",
    artist: "Kanye West",
    genre: "Hip-Hop",
    cover: "images/kanyeWestTheCollegeDropout.jpg",
    link: "https://www.youtube.com/watch?v=OTZzjAU0Kg0&list=PLTfO7IRJ-B3BKFN93H4G9D9lyklswLNtX"
  },
  {
    title: "Harry's House",
    artist: "Harry Styles",
    genre: "Pop",
    cover: "images/harryStylesHarrysHouse.png",
    link: "https://www.youtube.com/watch?v=8ybQKl8HMFY&list=PLxA687tYuMWgWbfUsntXDsn5HgOz90ka-"
  },
  {
    title: "My Beautiful Dark Twisted Fantasy",
    artist: "Kanye West",
    genre: "Hip-Hop",
    cover: "images/kanyeWestMyBeautifulDarkTwistedFantasy.jpg",
    link: "https://www.youtube.com/watch?v=0o9HzQ3zAcE&list=PLzMq4yH_FvVa5kPgtKmgdzPssfmBUtO2C"
  },
  {
    title: "Pet Sounds",
    artist: "The Beach Boys",
    genre: "Rock / Pop",
    cover: "images/theBeachBoysPetSounds.jpg",
    link: "https://www.youtube.com/playlist?list=OLAK5uy_mJN3N2XYKY6P2RpKP_-Zk20HwDSewNAYY&playnext=1&index=1"
  },
  {
    title: "Discovery",
    artist: "Daft Punk",
    genre: "Electronic",
    cover: "images/daftPunkDiscovery.png",
    link: "https://www.youtube.com/watch?v=A2VpR8HahKc&list=PLSdoVPM5WnndSQEXRz704yQkKwx76GvPV"
  },
  {
    title: "Random Access Memories",
    artist: "Daft Punk",
    genre: "Electronic",
    cover: "images/daftPunkRandomAccessMemories.png",
    link: "https://www.youtube.com/watch?v=3rpQTqpFTF4&list=PLZ60rAdTLVNuCAWD8W3dZTLBXbSPda-DX"
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    genre: "R&B / Soul",
    cover: "images/frankOceanBlonde.jpeg",
    link: "https://www.youtube.com/watch?v=fahxSXoXlsA&list=PLDCdjwiC90TGiL_tRVbJLerxjNqFz7of2"
  },
  {
    title: "Little Dark Age",
    artist: "MGMT",
    genre: "Synthpop / Indie",
    cover: "images/mgmtMyLittleDarkAge.png",
    link: "https://www.youtube.com/watch?v=e0QT4N-5PA4&list=OLAK5uy_kBFHQWSR3V3RPeRDSA1JKl_HpHDVgYYEA"
  },
  {
    title: "Skiptracing",
    artist: "Mild High Club",
    genre: "Psychedelic Pop",
    cover: "images/mildHighClubSkiptracing.jpg",
    link: "https://www.youtube.com/watch?v=iXehtTIgjrw&list=PLbJ3VMmxqdGWc9G4n3W6o_KFjoLTc76Nv"
  },
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    genre: "Progressive Rock",
    cover: "images/pinkFloydTheDarkSideOfTheMoon.jpg",
    link: "https://www.youtube.com/watch?v=k9ynZnEBtvw&list=RDk9ynZnEBtvw&start_radio=1"
  },
  {
    title: "For You",
    artist: "Tatsuro Yamashita",
    genre: "City Pop",
    cover: "images/tatsuroYamashitaForYou.jpg",
    link: "https://www.dailymotion.com/video/x8mmgeh"
  }
];

const albumContainer = document.getElementById("albumContainer");

function displayAlbums() {
  albumContainer.innerHTML = ""; // Clear container

  albums.forEach(album => {
    const card = document.createElement('div');
    card.className = 'album-card';

    card.innerHTML = `
      <img class="album-cover" src="${album.cover}" alt="${album.title}">
      <h3 class="album-title">${album.title}</h3>
      <p class="album-artist">${album.artist}</p>
      <a class="album-link vinyl" href="${album.link}" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-record-vinyl"></i> Listen
      </a>
    `;

    // Add Notes button
    const notesBtn = document.createElement('button');
    notesBtn.textContent = "Notes";
    notesBtn.className = 'notes-btn';
    card.appendChild(notesBtn);

    // Create Notes section
    const notesSection = document.createElement('div');
    notesSection.className = 'notes-section';

    const textarea = document.createElement('textarea');
    textarea.className = 'notes-textarea';

    // Load saved notes from localStorage (key based on album title)
    const savedNotes = localStorage.getItem(`notes-${album.title}`);
    if (savedNotes) {
      textarea.value = savedNotes;
    }

    const saveBtn = document.createElement('button');
    saveBtn.className = 'notes-save-btn';
    saveBtn.textContent = 'Save';

    notesSection.appendChild(textarea);
    notesSection.appendChild(saveBtn);
    card.appendChild(notesSection);

    // Toggle notes section on button click
    notesBtn.addEventListener('click', () => {
      notesSection.classList.toggle('active');
    });

    // Confirmation message
    const confirmationMsg = document.createElement('div');
    confirmationMsg.className = 'notes-confirmation';
    confirmationMsg.textContent = 'Notes saved!';
    notesSection.appendChild(confirmationMsg);

    // Save notes to localStorage with confirmation
    saveBtn.addEventListener('click', () => {
      localStorage.setItem(`notes-${album.title}`, textarea.value);
      confirmationMsg.classList.add('visible');
      setTimeout(() => {
        confirmationMsg.classList.remove('visible');
      }, 2000);
    });

    // Character counter
    const charCounter = document.createElement('div');
    charCounter.style.fontSize = '0.8rem';
    charCounter.style.color = '#666';
    charCounter.style.marginTop = '4px';
    charCounter.textContent = `Characters: ${textarea.value.length}`;
    notesSection.appendChild(charCounter);

    textarea.addEventListener('input', () => {
      charCounter.textContent = `Characters: ${textarea.value.length}`;
    });

    // Play vinyl sound on link click
    const link = card.querySelector('.album-link');
    link.addEventListener('click', () => {
      vinylSound.currentTime = 0;
      vinylSound.play();
    });

    albumContainer.appendChild(card);
  });
}

function calculateStats() {
  const albumCount = albums.length;

  // Update all relevant count elements
  document.querySelectorAll('#albumCount').forEach(el => el.textContent = albumCount);

  if (albumCount === 0) return;

  // Count genres
  const genreCounts = {};
  albums.forEach(a => {
    genreCounts[a.genre] = (genreCounts[a.genre] || 0) + 1;
  });

  // Top genre by count
  const topGenre = Object.entries(genreCounts)
    .sort((a, b) => b[1] - a[1])[0][0];

  document.querySelectorAll('#topGenre').forEach(el => el.textContent = topGenre);

  // Most played album — for now first album
  const mostPlayed = albums[0].title;
  document.querySelectorAll('#topAlbum').forEach(el => el.textContent = mostPlayed);

  // Recently Added (last 3)
  const recentAlbumsEl = document.getElementById("recentAlbums");
  recentAlbumsEl.innerHTML = "";
  const recent = albums.slice(-3).reverse(); // newest first
  recent.forEach(album => {
    const li = document.createElement("li");
    li.textContent = `${album.title} — ${album.artist}`;
    recentAlbumsEl.appendChild(li);
  });

  // Genre Distribution (list all genres with counts)
  const genreDistEl = document.getElementById("genreDistribution");
  genreDistEl.innerHTML = "";
  Object.entries(genreCounts).forEach(([genre, count]) => {
    const li = document.createElement("li");
    li.textContent = `${genre}: ${count}`;
    genreDistEl.appendChild(li);
  });

  // Random Album Choice - update text and image together
  updateRandomAlbumDisplay();
}

function updateRandomAlbumDisplay() {
  const randomIndex = Math.floor(Math.random() * albums.length);
  const randomAlbum = albums[randomIndex];

  const randomAlbumEl = document.getElementById("randomAlbum");
  const randomAlbumCover = document.getElementById("randomAlbumCover");

  const randomAlbumElStats = document.getElementById("randomAlbumStats");
  const randomAlbumCoverStats = document.getElementById("randomAlbumCoverStats");

  if (randomAlbumEl && randomAlbumCover) {
    randomAlbumEl.textContent = `${randomAlbum.title} — ${randomAlbum.artist}`;
    randomAlbumCover.src = randomAlbum.cover;
    randomAlbumCover.alt = `${randomAlbum.title} album cover`;
  }

  if (randomAlbumElStats && randomAlbumCoverStats) {
    randomAlbumElStats.textContent = `${randomAlbum.title} — ${randomAlbum.artist}`;
    randomAlbumCoverStats.src = randomAlbum.cover;
    randomAlbumCoverStats.alt = `${randomAlbum.title} album cover`;
  }
}


// Initial page load
displayAlbums();
calculateStats();

const randomPickBtn = document.getElementById('randomPickBtn');
randomPickBtn.addEventListener('click', () => {
  updateRandomAlbumDisplay();
});
