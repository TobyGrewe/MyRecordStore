/* =========================
 1. INITIAL SETUP & DATA
 ========================= */

// Audio setup
const vinylSound = new Audio('sounds/vinyl-scratch.mp3');
vinylSound.volume = 0.3; 

// Feature 1: YouTube API Variable
var player; 
var isPlayerReady = false; 

// Initial Album Data
const initialAlbums = [
  { id: 1, title: "Donuts", artist: "J Dilla", genre: "Hip-Hop", cover: "images/Dilladonuts.jpg", link: "https://youtu.be/crZF0YNORIY?start=0", dateAdded: "2023-10-01", year: 2006, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 2, title: "Graduation", artist: "Kanye West", genre: "Hip-Hop", cover: "images/kanyWestGraduation.jpg", link: "https://www.youtube.com/watch?v=rr3p8qy1X-g&list=PLg4d8d95_7w1d6J3r4qJ1jL8k0l2l0d2W&start=0", dateAdded: "2023-11-15", year: 2007, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 3, title: "Modal Soul", artist: "Nujabes", genre: "Hip-Hop / Jazz", cover: "images/nujabesModalSoul.jpg", link: "https://youtu.be/8iP3J8jFYdM?list=PL44C3FDE92D95F74D&start=0", dateAdded: "2023-12-05", year: 2005, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 4, title: "Nevermind", artist: "Nirvana", genre: "Alternative Rock", cover: "images/nNEVERMIND.webp", link: "https://www.youtube.com/watch?v=EwENfTvSQbQ&list=RDEwENfTvSQbQ&start_radio=1&start=0", dateAdded: "2024-01-20", year: 1991, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 5, title: "Since I Left You", artist: "The Avalanches", genre: "Electronic", cover: "images/theAvalanchesSILY.jpg", link: "https://www.youtube.com/watch?v=TyOfYE5cqNk&list=PLVxakxoWul5V3M8awBfeQnboZN_fqkEPS&index=1&start=0", dateAdded: "2023-10-01", year: 2000, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 6, title: "Merriweather Post Pavilion", artist: "Animal Collective", genre: "Psychedelic Pop", cover: "images/animalCollectiveMPP.png", link: "https://www.youtube.com/watch?v=Ebmp2YMIr9s&list=OLAK5uy_lq6ZY8GSCQhbG7Z6cr-rw5EL9CQ54CdSs&start=0", dateAdded: "2023-10-01", year: 2009, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 7, title: "Channel Orange", artist: "Frank Ocean", genre: "R&B / Soul", cover: "images/frankOceanChannelOrange.jpg", link: "https://www.youtube.com/watch?v=xEQ_946TO_g&list=OLAK5uy_mAGTQmYeosOR-Pp17OnnzkKHPeEbzSFOg&start=0", dateAdded: "2023-10-01", year: 2012, rating: 0, playCount: 7, isFavorite: false, lastPlayed: "2024-11-22T14:30:00.000Z", userNotes: {}, communityNotes: [] }, 
  { id: 8, title: "Late Registration", artist: "Kanye West", genre: "Hip-Hop", cover: "images/kanyeWestLateRegistration.jpg", link: "https://www.youtube.com/watch?v=14Ef5mb2qhc&list=PLAn-T5fEM_WC7RUX39PezdMp8Qlo-oiMh&start=0", dateAdded: "2023-10-01", year: 2005, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 9, title: "The Life of Pablo", artist: "Kanye West", genre: "Hip-Hop", cover: "images/kanyeWestTheLifeOfPablo.jpg", link: "https://www.youtube.com/watch?v=6oHdAA3AqnE&list=PLzMq4yH_FvVac_1R0DMcMkcwnJ1-hFx6b&start=0", dateAdded: "2023-10-01", year: 2016, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 10, title: "The College Dropout", artist: "Kanye West", genre: "Hip-Hop", cover: "images/kanyeWestTheCollegeDropout.jpg", link: "https://www.youtube.com/watch?v=OTZzjAU0Kg0&list=PLTfO7IRJ-B3BKFN93H4G9D9lyklswLNtX&start=0", dateAdded: "2023-10-01", year: 2004, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 11, title: "Harry's House", artist: "Harry Styles", genre: "Pop", cover: "images/harryStylesHarrysHouse.png", link: "https://www.youtube.com/playlist?list=PLo9rTk1CYUkWnkltbLGVXzBDM_k0vx_A_&start=0", dateAdded: "2023-10-01", year: 2022, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 12, title: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West", genre: "Hip-Hop", cover: "images/kanyeWestMyBeautifulDarkTwistedFantasy.jpg", link: "https://www.youtube.com/watch?v=UTH1VNHLjng&list=PLzMq4yH_FvVa5kPgtKmgdzPssfmBUtO2C&index=1&start=0", dateAdded: "2023-10-01", year: 2010, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 13, title: "Pet Sounds", artist: "The Beach Boys", genre: "Rock / Pop", cover: "images/theBeachBoysPetSounds.jpg", link: "https://www.youtube.com/playlist?list=OLAK5uy_mJN3N2XYKY6P2RpKP_-Zk20HwDSewNAYY&playnext=1&index=1&start=0", dateAdded: "2023-10-01", year: 1966, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 14, title: "Discovery", artist: "Daft Punk", genre: "Electronic", cover: "images/daftPunkDiscovery.png", link: "https://www.youtube.com/watch?v=zKSsP2084nU&list=PLZv6xnm6clDYZuo0W2a2nqH0_iygXF79C&start=0", dateAdded: "2023-10-01", year: 2001, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 15, title: "Random Access Memories", artist: "Daft Punk", genre: "Electronic", cover: "images/daftPunkRandomAccessMemories.png", link: "https://www.youtube.com/watch?v=IluRBvnYMoY&list=OLAK5uy_kL8Foly6phCoLmgSWTPjgZsbAne85xMMM&start=0", dateAdded: "2023-10-01", year: 2013, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 16, title: "Blonde", artist: "Frank Ocean", genre: "R&B / Soul", cover: "images/frankOceanBlonde.jpeg", link: "https://www.youtube.com/watch?v=fahxSXoXlsA&list=PLDCdjwiC90TGiL_tRVbJLerxjNqFz7of2&start=0", dateAdded: "2023-10-01", year: 2016, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 17, title: "Little Dark Age", artist: "MGMT", genre: "Synthpop / Indie", cover: "images/mgmtMyLittleDarkAge.png", link: "https://www.youtube.com/watch?v=e0QT4N-5PA4&list=OLAK5uy_kBFHQWSR3V3RPeRDSA1JKl_HpHDVgYYEA&start=0", dateAdded: "2023-10-01", year: 2018, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 18, title: "Skiptracing", artist: "Mild High Club", genre: "Psychedelic Pop", cover: "images/mildHighClubSkiptracing.jpg", link: "https://www.youtube.com/watch?v=iXehtTIgjrw&list=PLbJ3VMmxqdGWc9G4n3W6o_KFjoLTc76Nv&start=0", dateAdded: "2023-10-01", year: 2016, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 19, title: "The Dark Side of the Moon", artist: "Pink Floyd", genre: "Progressive Rock", cover: "images/pinkFloydTheDarkSideOfTheMoon.jpg", link: "https://youtu.be/k9ynZnEBtvw?list=PL23C32F062E10978C&start=0", dateAdded: "2023-10-01", year: 1973, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 20, title: "For You", artist: "Tatsuro Yamashita", genre: "City Pop", cover: "images/tatsuroYamashitaForYou.jpg", link: "https://www.dailymotion.com/video/x8mmgeh", dateAdded: "2023-10-01", year: 1982, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 21, title: "Floral Shoppe", artist: "Macintosh Plus", genre: "Vapor Wave", cover: "images/macintoshPlusFloralShoppe.jpg", link: "https://www.youtube.com/watch?v=cCq0P509UL4&start=0", dateAdded: "2023-10-01", year: 2011, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 22, title: "Shinbangumi", artist: "Ginger Root", genre: "City Pop", cover: "images/gingerRootShinbangumi.jpg", link: "https://www.youtube.com/watch?v=3GRXCLYibBg&list=RD3GRXCLYibBg&start_radio=1&start=0", dateAdded: "2023-10-01", year: 2021, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 23, title: "Speaking In Tongues", artist: "Talking Heads", genre: "New Wave", cover: "images/talkingHeadsSpeakingInTongues.jpg", link: "https://www.youtube.com/watch?v=4c_YkN-8WRM&start=0", dateAdded: "2023-10-01", year: 1983, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
  { id: 24, title: "You Will Never Know Why", artist: "Sweet Trip", genre: "Indie pop", cover: "images/SweetTripYouWillNeverKnowWhy.jpg", link: "https://www.youtube.com/watch?v=MSq0gOJ9AGA&start=0", dateAdded: "2023-10-01", year: 2009, rating: 0, playCount: 0, isFavorite: false, lastPlayed: null, userNotes: {}, communityNotes: [] },
];

let albums = []; 

// Chart instances
let genreChart = null;
let decadeChart = null;

/* =========================
 2. ELEMENT REFS & STATE
 ========================= */
const albumContainer = document.getElementById("albumContainer");
const searchBar = document.getElementById('searchBar');
const sortDropdown = document.getElementById('sortDropdown');
const favoritesFilterBtn = document.getElementById('favoritesFilterBtn');
const darkModeToggle = document.getElementById('darkModeToggle');
const genreFiltersContainer = document.getElementById('genreFilters');
const decadeFiltersContainer = document.getElementById('decadeFilters');
const randomPickBtn = document.getElementById("randomPickBtn");
const modal = document.getElementById('albumModal');
const queueModal = document.getElementById('queueModal'); 
const queueDisplay = document.getElementById('queueDisplay');
const queueListEl = document.getElementById('queueList'); 

// View Toggles
const gridViewBtn = document.getElementById('gridViewBtn');
const listViewBtn = document.getElementById('listViewBtn');
const shelfViewBtn = document.getElementById('shelfViewBtn');

// Modals
const submissionModal = document.getElementById('submissionModal'); 
const submissionForm = document.getElementById('submissionForm');
const openAddAlbumModalBtn = document.getElementById('openAddAlbumModalBtn');
const deleteAlbumBtn = document.getElementById('deleteAlbumBtn');
const dataModal = document.getElementById('dataModal');
const openDataModalBtn = document.getElementById('openDataModalBtn');
const exportDataBtn = document.getElementById('exportDataBtn');
const triggerImportBtn = document.getElementById('triggerImportBtn');
const importFileInput = document.getElementById('importFileInput');
const toastContainer = document.getElementById('toastContainer');

// Focus Mode Elements
const focusOverlay = document.getElementById('focusOverlay');
const openFocusModeBtn = document.getElementById('openFocusModeBtn');
const closeFocusBtn = document.getElementById('closeFocusBtn');
const focusCover = document.getElementById('focusCover');
const focusTitle = document.getElementById('focusTitle');
const focusArtist = document.getElementById('focusArtist');

let currentSort = 'title';
let currentGenreFilter = 'all';
let currentDecadeFilter = 'all';
let showFavoritesOnly = false;
let currentlyPlayingAlbumTitle = null; 
let albumQueue = [];
const userNotesData = {}; 

const communityNotesCollection = {
    "Donuts": [{ user: "Anonymous-1", text: "A legendary album! Perfect background music for coding.", timestamp: "2024-11-18T10:00:00Z" }],
    "Nevermind": [{ user: "RockFanatic", text: "Smells Like Teen Spirit is iconic, obviously.", timestamp: "2024-09-01T12:00:00Z" }]
};

/* =========================
 3. FEATURE: YOUTUBE API (Auto-DJ)
 ========================= */
window.onYouTubeIframeAPIReady = function() {
    console.log("YouTube API Ready");
    player = new YT.Player('floatingPlayerFrame', {
        height: '100%',
        width: '100%',
        playerVars: {
            'playsinline': 1,
            'origin': window.location.origin, 
            'host': 'https://www.youtube.com' 
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError 
        }
    });
};

function onPlayerReady(event) {
    console.log("Player is ready.");
    isPlayerReady = true;
}

function onPlayerError(event) {
    console.error("YouTube Player Error:", event.data);
    showToast("Player error (try disabling ad-blocker)", "error");
}

function onPlayerStateChange(event) {
    if (event.data === 0) {
        showToast("Track ended. Playing next...", "info");
        playNextInQueue();
    }
}

/* =========================
 4. TOAST NOTIFICATIONS
 ========================= */
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    let icon = 'fa-check-circle';
    if(type === 'error') icon = 'fa-exclamation-circle';
    if(type === 'info') icon = 'fa-info-circle';
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease-out forwards';
        toast.addEventListener('animationend', () => toast.remove());
    }, 3000);
}

/* =========================
 5. PERSISTENCE
 ========================= */
function saveAlbumData() {
    localStorage.setItem('albumCollection', JSON.stringify(albums)); 
    const queueTitles = albumQueue.map(a => a.title);
    localStorage.setItem('albumQueueOrder', JSON.stringify(queueTitles));
    calculateStats();
    updateQueueDisplay();
}

function saveUserNotesData() {
    const toSave = {};
    for (const title in userNotesData) {
        if (userNotesData[title].text || userNotesData[title].favoriteTrack) {
            toSave[title] = userNotesData[title];
        }
    }
    localStorage.setItem('userStructuredNotes', JSON.stringify(toSave));
}

function loadAlbumData() {
    const savedCollection = localStorage.getItem('albumCollection');
    if (savedCollection) {
        try {
            const parsed = JSON.parse(savedCollection);
            if (Array.isArray(parsed) && parsed.length > 0) {
                albums = parsed;
            } else {
                albums = initialAlbums;
            }
        } catch (err) {
            albums = initialAlbums;
        }
    } else {
        albums = initialAlbums; 
    }
    
    const savedQueueOrder = localStorage.getItem('albumQueueOrder');
    albumQueue = [];
    if (savedQueueOrder) {
        try {
            const queueTitles = JSON.parse(savedQueueOrder);
            queueTitles.forEach(title => {
                const album = albums.find(a => a.title === title);
                if (album && !albumQueue.some(a => a.title === title)) {
                    album.isQueue = true;
                    albumQueue.push(album);
                }
            });
        } catch (err) {
            console.warn('Failed loading albumQueueOrder', err);
        }
    }

    loadUserNotesData();
    albums.forEach(album => {
        album.communityNotes = communityNotesCollection[album.title] || []; 
    });
}

function loadUserNotesData() {
    const savedStructured = localStorage.getItem('userStructuredNotes');
    let loadedNotes = {};
    if (savedStructured) {
        try {
            loadedNotes = JSON.parse(savedStructured);
        } catch (err) {
            console.warn('Failed loading userStructuredNotes', err);
        }
    }

    albums.forEach(album => {
        let notes = loadedNotes[album.title] || { text: '', favoriteTrack: '' };
        album.userNotes = notes; 
        userNotesData[album.title] = notes;
    });
}

/* =========================
 6. UTILITY & HTML GENERATION
 ========================= */
function getNextAlbumId() {
    return albums.reduce((maxId, album) => Math.max(maxId, album.id), 0) + 1;
}

function getYouTubeData(url) {
    if (!url || url.includes('dailymotion')) return { id: null, type: null, embedSrc: null }; 
    const playlistMatch = url.match(/[?&]list=([^&]+)/);
    if (playlistMatch && playlistMatch[1]) {
        return { id: playlistMatch[1], type: 'playlist' };
    }
    const videoMatch = url.match(/(?:youtu\.be\/|v=|embed\/)([^#&?]*)/);
    if (videoMatch && videoMatch[1]) {
        return { id: videoMatch[1], type: 'video' };
    }
    return { id: null, type: null };
}

function renderStars(rating, albumTitle) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    const starClass = i <= rating ? 'fa-solid' : 'fa-regular';
    html += `<i class="fa-star star-icon ${starClass}" data-rating="${i}" data-album-title="${escapeHtml(albumTitle)}"></i>`;
  }
  return html;
}

function escapeHtml(s = '') {
  return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
}

function createAlbumCardHTML(album) {
  const favClass = album.isFavorite ? 'fa-solid' : 'fa-regular';
  const isPlayingClass = album.title === currentlyPlayingAlbumTitle ? ' is-playing' : ''; 
  const isQueueClass = albumQueue.some(a => a.title === album.title) ? ' in-queue' : ''; 
  const youtubeData = getYouTubeData(album.link);
  const embedIcon = youtubeData.type === 'playlist' ? 'fa-list-music' : 'fa-compact-disc';
  const embedDisabled = !youtubeData.id ? 'disabled' : '';
  const draggable = currentSort === 'custom' ? 'draggable="true"' : '';

  return `
  <div class="album-card${isPlayingClass}" ${draggable} data-title="${escapeHtml(album.title)}" data-id="${album.id}">
   <img class="album-cover" src="${album.cover}" alt="${escapeHtml(album.title)} cover" data-action="open-modal">
   <div class="album-info-group">
         <h3 class="album-title">${escapeHtml(album.title)}</h3>
         <p class="album-artist">${escapeHtml(album.artist)}</p>
         <p class="album-genre" style="font-size:0.8rem;color:var(--text-secondary)">
              Genre: <span class="interactive-genre-tag" data-genre="${escapeHtml(album.genre)}">${escapeHtml(album.genre)}</span> | ${album.year}
          </p>
   </div>
   <div class="rating-play-controls">
    <div class="rating-display-group">
     <p class="play-count"><i class="fas fa-record-vinyl"></i> ${album.playCount || 0}</p>
     <div class="rating-container" data-album-title="${escapeHtml(album.title)}">${renderStars(album.rating, album.title)}</div>
    </div>
    <i class="${favClass} fa-heart favorite-icon" data-album-title="${escapeHtml(album.title)}" style="font-size:1.75rem;"></i>
   </div>
   <div class="card-bottom-controls">
    <button class="album-embed-btn" data-action="toggle-embed" data-link="${album.link}" ${embedDisabled}><i class="fa-solid ${embedIcon}"></i> Play</button>
    <button class="queue-btn${isQueueClass}" data-action="toggle-queue" data-album-title="${escapeHtml(album.title)}"><i class="fas fa-forward"></i> ${isQueueClass ? 'In Queue' : 'Queue'}</button>
   </div>
  </div>`;
}

function updatePlayingState() {
    const indicator = document.getElementById('nowPlayingIndicator');
    const titleSpan = document.getElementById('playingAlbumTitle');
    document.querySelectorAll('.album-card').forEach(card => {
        const title = card.dataset.title;
        if (title === currentlyPlayingAlbumTitle) {
            card.classList.add('is-playing');
        } else {
            card.classList.remove('is-playing');
        }
    });
    if (currentlyPlayingAlbumTitle && indicator && titleSpan) {
        indicator.style.display = 'block';
        titleSpan.textContent = currentlyPlayingAlbumTitle;
    } else if (indicator) {
        indicator.style.display = 'none';
    }
}

function updateQueueDisplay() {
    albums.forEach(album => {
        album.isQueue = albumQueue.some(a => a.title === album.title);
    });
    if (albumQueue.length > 0) {
        queueDisplay.innerHTML = `<i class="fas fa-list-ol"></i> Queue: ${albumQueue.length} album${albumQueue.length > 1 ? 's' : ''}`;
    } else {
        queueDisplay.innerHTML = `<i class="fas fa-list-ol"></i> Queue is Empty`;
    }
    document.querySelectorAll('.queue-btn').forEach(btn => {
        const title = btn.dataset.albumTitle;
        const inQueue = albumQueue.some(a => a.title === title);
        btn.classList.toggle('in-queue', inQueue);
        btn.innerHTML = `<i class="fas fa-forward"></i> ${inQueue ? 'In Queue' : 'Queue'}`;
    });
    if (queueModal.classList.contains('active')) {
        renderQueueList();
    }
}

function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    if (isNaN(date)) return 'N/A';
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatCommunityDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) return 'Unknown Date';
    return date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

/* =========================
 7. FILTER / SORT / DISPLAY
 ========================= */
function parseAdvancedSearch(query) {
    const criteria = { general: [], artist: null, year: null, title: null, genre: null, rating: null };
    const parts = query.toLowerCase().match(/(\w+:\s*['"]?[\w\s><=-]+['"]?)|([^\s:"]+)/g) || [];
    parts.forEach(part => {
        if (part.includes(':')) {
            const [key, value] = part.split(':').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
            if (criteria.hasOwnProperty(key)) criteria[key] = value;
            else criteria.general.push(part);
        } else criteria.general.push(part);
    });
    criteria.generalText = criteria.general.join(' ').trim();
    return criteria;
}

function matchesYearCondition(albumYear, yearCriteria) {
    if (!yearCriteria) return true;
    const match = yearCriteria.match(/(<=|>=|<|>|=)(\d+)/);
    if (match) {
        const operator = match[1];
        const value = parseInt(match[2], 10);
        switch (operator) {
            case '<': return albumYear < value;
            case '>': return albumYear > value;
            case '<=': return albumYear <= value;
            case '>=': return albumYear >= value;
            case '=': return albumYear === value;
        }
    }
    const yearVal = parseInt(yearCriteria, 10);
    return !isNaN(yearVal) ? albumYear === yearVal : true;
}

function filterAndSortAlbums() {
    const searchCriteria = parseAdvancedSearch(searchBar.value);
    let filtered = albums.filter(a => {
        const generalSearch = searchCriteria.generalText;
        const albumGenreList = a.genre.toLowerCase().split(' / ').map(g => g.trim());
        const matchesGeneral = generalSearch.length === 0 || 
                               a.title.toLowerCase().includes(generalSearch) || 
                               a.artist.toLowerCase().includes(generalSearch) ||
                               a.genre.toLowerCase().includes(generalSearch) ||
                               a.userNotes.text.toLowerCase().includes(generalSearch) || 
                               a.userNotes.favoriteTrack.toLowerCase().includes(generalSearch); 
        const matchesArtist = !searchCriteria.artist || a.artist.toLowerCase().includes(searchCriteria.artist);
        const matchesTitle = !searchCriteria.title || a.title.toLowerCase().includes(searchCriteria.title);
        const matchesYear = !searchCriteria.year || matchesYearCondition(a.year, searchCriteria.year);
        const matchesSearchCriteria = matchesGeneral && matchesArtist && matchesTitle && matchesYear;
        const matchesGenre = currentGenreFilter === 'all' || albumGenreList.includes(currentGenreFilter);
        const matchesFavorite = !showFavoritesOnly || a.isFavorite;
        let matchesDecade = true;
        if (currentDecadeFilter !== 'all') {
            const decadeStart = parseInt(currentDecadeFilter, 10);
            const albumDecade = Math.floor(a.year / 10) * 10;
            matchesDecade = (albumDecade === decadeStart);
        }
        return matchesSearchCriteria && matchesGenre && matchesFavorite && matchesDecade;
    });

    if (currentSort !== 'custom') {
        filtered.sort((a, b) => {
            switch (currentSort) {
                case 'title': return a.title.localeCompare(b.title);
                case 'artist': return a.artist.localeCompare(b.artist);
                case 'year': return b.year - a.year; 
                case 'rating': return (b.rating || 0) - (a.rating || 0); 
                case 'dateAdded': return new Date(b.dateAdded) - new Date(a.dateAdded); 
                case 'playCount': return (b.playCount || 0) - (a.playCount || 0);
                case 'lastPlayed': return (new Date(b.lastPlayed || 0)) - (new Date(a.lastPlayed || 0)); 
                default: return 0;
            }
        });
    }
    displayFilteredAlbums(filtered);
}

function displayFilteredAlbums(list) {
  if (!albumContainer) return;
  if (!list.length) {
    albumContainer.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:var(--text-secondary);padding:2rem;'>No albums found matching your criteria.</p>";
    return;
  }
  albumContainer.innerHTML = list.map(createAlbumCardHTML).join('');
  if (currentSort === 'custom') {
      addMainGridDragListeners();
  }
  updatePlayingState(); 
  updateQueueDisplay();
}

/* =========================
 8. MODALS, ACTIONS & PLAYBACK
 ========================= */
function renderCommunityNotes(album) {
    const notes = album.communityNotes || [];
    const logEl = document.getElementById('communityNotesLog');
    if (notes.length === 0) {
        logEl.innerHTML = "<p style='font-style:italic;color:var(--text-secondary);'>Be the first to leave an annotation on this album!</p>";
        return;
    }
    logEl.innerHTML = notes.map(note => `
        <div class="community-note-item">
            <div class="community-note-meta">
                <span><i class="fas fa-user-circle"></i> ${escapeHtml(note.user)}</span>
                <span>${formatCommunityDate(note.timestamp)}</span>
            </div>
            <p class="community-note-text">${escapeHtml(note.text)}</p>
        </div>
    `).join('');
}

function openAlbumModal(album) {
    document.getElementById('modalCover').src = album.cover;
    document.getElementById('modalTitle').textContent = album.title;
    document.getElementById('modalArtist').textContent = album.artist;
    document.getElementById('modalYear').textContent = `Year: ${album.year}`;
    const modalGenreTag = document.getElementById('modalGenre');
    modalGenreTag.textContent = album.genre;
    modalGenreTag.dataset.genre = album.genre;
    document.getElementById('modalPlayCount').textContent = album.playCount || 0;
    document.querySelector('#modalLastPlayed span').textContent = formatDate(album.lastPlayed);
    document.getElementById('modalRating').innerHTML = renderStars(album.rating, album.title);

    const linksContainer = document.getElementById('externalLinksContainer');
    const safeArtist = encodeURIComponent(album.artist);
    const safeTitle = encodeURIComponent(album.title);
    linksContainer.innerHTML = `
        <a href="https://www.discogs.com/search/?q=${safeArtist}+${safeTitle}&type=release" target="_blank" class="external-link-btn"><i class="fas fa-compact-disc"></i> Discogs</a>
        <a href="https://en.wikipedia.org/wiki/Special:Search?search=${safeArtist}+${safeTitle}+album" target="_blank" class="external-link-btn"><i class="fab fa-wikipedia-w"></i> Wiki</a>
        <a href="https://genius.com/search?q=${safeArtist}+${safeTitle}" target="_blank" class="external-link-btn"><i class="fas fa-music"></i> Genius</a>
    `;

    const embedBtn = document.getElementById('modalEmbedBtn');
    embedBtn.dataset.link = album.link;
    embedBtn.dataset.albumTitle = album.title;
    embedBtn.innerHTML = `<i class="fa-solid fa-play"></i> Play Album`;

    const queueBtn = document.getElementById('modalQueueBtn');
    queueBtn.dataset.albumTitle = album.title;
    const inQueue = albumQueue.some(a => a.title === album.title);
    queueBtn.innerHTML = inQueue ? '<i class="fas fa-forward"></i> Remove from Queue' : '<i class="fas fa-forward"></i> Add to Queue';
    queueBtn.classList.toggle('control-btn', !inQueue);
    queueBtn.classList.toggle('primary-btn', inQueue);
    
    document.getElementById('modalEditBtn').dataset.albumId = album.id;
    const userNotes = userNotesData[album.title];
    document.getElementById('modalFavTrack').value = userNotes.favoriteTrack;
    document.getElementById('modalNotesText').value = userNotes.text;
    
    renderCommunityNotes(album);
    document.getElementById('newCommunityNote').value = ''; 
    document.getElementById('modalSaveBtn').dataset.albumTitle = album.title;
    document.getElementById('addCommunityNoteBtn').dataset.albumTitle = album.title;
    modal.classList.add('active');
}

function closeAlbumModal() {
    modal.classList.remove('active');
    document.getElementById('modalConfirmation').classList.remove('visible');
}

modal.addEventListener('click', (e) => {
    const target = e.target;
    const albumTitle = target.closest('.modal-content')?.querySelector('#modalSaveBtn')?.dataset.albumTitle;
    const album = albums.find(a => a.title === albumTitle);
    const action = target.dataset.action || target.closest('button')?.dataset.action;

    if (action === 'close-modal') { closeAlbumModal(); return; }
    if (!album) return;
    if (action === 'embed') { toggleAlbumEmbed(null, album.link, album); closeAlbumModal(); return; }
    if (action === 'queue') { toggleQueue(album); openAlbumModal(album); return; }
    if (target.id === 'modalEditBtn') { closeAlbumModal(); openEditAlbumModal(albums.find(a => a.id === parseInt(target.dataset.albumId))); return; }
    if (target.classList.contains('star-icon')) {
        const newRating = parseInt(target.dataset.rating, 10);
        album.rating = album.rating === newRating ? 0 : newRating;
        saveAlbumData(); filterAndSortAlbums(); 
        document.getElementById('modalRating').innerHTML = renderStars(album.rating, album.title); 
        return;
    }
    if (target.id === 'modalSaveBtn') {
        userNotesData[albumTitle].favoriteTrack = document.getElementById('modalFavTrack').value.trim();
        userNotesData[albumTitle].text = document.getElementById('modalNotesText').value;
        saveUserNotesData(); showToast("Private notes saved!");
        return;
    }
    if (target.id === 'addCommunityNoteBtn') {
        const noteText = document.getElementById('newCommunityNote').value.trim();
        if (noteText.length > 5) {
            album.communityNotes.push({ user: "Current User", text: noteText, timestamp: new Date().toISOString() });
            document.getElementById('newCommunityNote').value = ''; renderCommunityNotes(album); showToast("Annotation posted!");
        } else { alert("Please enter a longer note."); }
        return;
    }
});

document.getElementById('modalNotesText')?.addEventListener('input', (e) => {
    document.getElementById('modalCharCounter').textContent = `Characters: ${e.target.value.length}`;
});

function toggleQueue(album) {
    const existingIndex = albumQueue.findIndex(a => a.title === album.title);
    if (existingIndex !== -1) {
        albumQueue.splice(existingIndex, 1);
        album.isQueue = false; 
        showToast(`${album.title} removed from queue`, 'info');
    } else {
        albumQueue.push(album);
        album.isQueue = true; 
        showToast(`${album.title} added to queue`, 'success');
    }
    saveAlbumData(); filterAndSortAlbums(); 
}

function playNextInQueue() {
    if (albumQueue.length > 0) {
        const nextAlbum = albumQueue.shift(); 
        nextAlbum.isQueue = false;
        toggleAlbumEmbed(null, nextAlbum.link, nextAlbum);
        saveAlbumData(); filterAndSortAlbums(); 
    } else {
        const randomAlbum = albums[Math.floor(Math.random() * albums.length)];
        showToast(`Queue empty! Auto-DJ picking: ${randomAlbum.title}`, 'info');
        toggleAlbumEmbed(null, randomAlbum.link, randomAlbum);
    }
}

function closeFloatingPlayer() {
    const playerDiv = document.getElementById('floatingPlayer');
    if (playerDiv) {
        playerDiv.classList.remove('active', 'expanded'); 
        if (player && typeof player.stopVideo === 'function') {
            player.stopVideo();
        }
    }
    currentlyPlayingAlbumTitle = null;
    updatePlayingState(); 
}

function toggleAlbumEmbed(card, link, album) {
    const youtubeData = getYouTubeData(link);
    const playerDiv = document.getElementById('floatingPlayer');
    
    // RETRY SYSTEM
    if (!youtubeData.id || !player || typeof player.loadVideoById !== 'function') {
        if(!isPlayerReady) {
            console.log("Player not ready, retrying in 1s...");
            showToast("Player loading... starting shortly.", "info");
            setTimeout(() => toggleAlbumEmbed(card, link, album), 1000);
            return;
        }
        console.warn("YouTube API invalid ID or error.");
        return; 
    }

    const isCurrentAlbumPlaying = currentlyPlayingAlbumTitle === album.title;

    if (isCurrentAlbumPlaying) {
        closeFloatingPlayer();
    } else {
        currentlyPlayingAlbumTitle = album.title;
        album.playCount = (album.playCount || 0) + 1;
        album.lastPlayed = new Date().toISOString(); 
        saveAlbumData();
        
        // Use API methods only
        if (youtubeData.type === 'playlist') {
            player.loadPlaylist({list: youtubeData.id});
        } else {
            player.loadVideoById(youtubeData.id);
        }
        
        playerDiv.classList.add('active', 'expanded'); 
        window.scrollTo({ top: 0, behavior: 'smooth' });

        updatePlayingState();
        vinylSound.currentTime = 0;
        vinylSound.play();
        showToast(`Now Playing: ${album.title}`);
        
        if(focusOverlay.classList.contains('active')) {
            updateFocusMode(album);
        }
    }
    filterAndSortAlbums(); 
}


/* =========================
 9. QUEUE & MAIN GRID DRAG DROP
 ========================= */

function openQueueModal() {
    renderQueueList();
    queueModal.classList.add('active');
}

function closeQueueModal() {
    queueModal.classList.remove('active');
}

function renderQueueList() {
    if (!queueListEl) return;
    const isEmpty = albumQueue.length === 0;
    document.getElementById('queueEmptyMessage').style.display = isEmpty ? 'block' : 'none';
    queueListEl.style.display = isEmpty ? 'none' : 'block';
    document.getElementById('queuePlayNextBtn').disabled = isEmpty;

    if (isEmpty) { queueListEl.innerHTML = ''; return; }

    queueListEl.innerHTML = albumQueue.map((album, index) => `
        <li class="queue-item" draggable="true" data-title="${escapeHtml(album.title)}" data-index="${index}">
            <i class="fas fa-grip-vertical" style="color:var(--text-secondary); margin-right: 10px;"></i>
            <img class="queue-cover" src="${album.cover}" alt="${escapeHtml(album.title)} cover">
            <div class="queue-info">
                <p class="queue-title">${index + 1}. ${escapeHtml(album.title)}</p>
                <p class="queue-artist">${escapeHtml(album.artist)}</p>
            </div>
            <button class="queue-remove-btn" data-action="remove-from-queue" data-title="${escapeHtml(album.title)}"><i class="fas fa-times"></i></button>
        </li>
    `).join('');
    
    addDragDropListeners(queueListEl, 'queue');
}

queueModal.addEventListener('click', (e) => {
    const target = e.target;
    const action = target.dataset.action || target.closest('button')?.dataset.action;
    const albumTitle = target.dataset.title || target.closest('button')?.dataset.title;

    if (action === 'close-queue-modal') { closeQueueModal(); return; }
    if (action === 'remove-from-queue' && albumTitle) { toggleQueue(albums.find(a => a.title === albumTitle)); renderQueueList(); return; }
    if (target.id === 'queuePlayNextBtn') { playNextInQueue(); closeQueueModal(); return; }
    if (target.id === 'queueClearAllBtn' && confirm("Are you sure?")) { albumQueue.forEach(a => a.isQueue = false); albumQueue = []; saveAlbumData(); filterAndSortAlbums(); renderQueueList(); return; }
});

let draggedItem = null;

function addDragDropListeners(container, type) {
    const items = container.querySelectorAll(type === 'queue' ? '.queue-item' : '.album-card');
    items.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('drop', (e) => handleDrop(e, type));
        item.addEventListener('dragend', handleDragEnd);
    });
}

function handleDragStart(e) {
    draggedItem = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML); 
    this.classList.add(this.classList.contains('album-card') ? 'dragging-card' : 'dragging');
}

function handleDragEnd(e) {
    this.classList.remove('dragging', 'dragging-card');
    document.querySelectorAll('.drag-over-top, .drag-over-bottom').forEach(el => {
        el.classList.remove('drag-over-top', 'drag-over-bottom');
    });
    draggedItem = null;
}

function handleDragOver(e) {
    e.preventDefault(); 
    if (this === draggedItem) return;
    const rect = this.getBoundingClientRect();
    const isAfter = (this.classList.contains('album-card')) 
        ? e.clientX > rect.left + rect.width / 2 
        : e.clientY > rect.top + rect.height / 2;

    this.classList.remove('drag-over-top', 'drag-over-bottom');
    if (isAfter) {
        this.classList.add('drag-over-bottom');
    } else {
        this.classList.add('drag-over-top');
    }
    e.dataTransfer.dropEffect = 'move';
}

function handleDragLeave(e) {
    this.classList.remove('drag-over-top', 'drag-over-bottom');
}

function handleDrop(e, type) {
    e.stopPropagation(); 
    if (draggedItem && draggedItem !== this) {
        if (type === 'queue') {
            const fromIdx = parseInt(draggedItem.dataset.index);
            const toIdx = parseInt(this.dataset.index);
            const rect = this.getBoundingClientRect();
            const isAfter = e.clientY > rect.top + rect.height / 2;
            const finalToIdx = isAfter ? toIdx + 1 : toIdx;
            
            const [movedItem] = albumQueue.splice(fromIdx, 1);
            let insertIdx = finalToIdx;
            if (fromIdx < finalToIdx) insertIdx--;
            
            albumQueue.splice(insertIdx, 0, movedItem);
            saveAlbumData(); renderQueueList();
            
        } else if (type === 'grid') {
            const fromTitle = draggedItem.dataset.title;
            const toTitle = this.dataset.title;
            const fromIdx = albums.findIndex(a => a.title === fromTitle);
            const toIdx = albums.findIndex(a => a.title === toTitle);
            
            const rect = this.getBoundingClientRect();
            const isAfter = e.clientX > rect.left + rect.width / 2;
            let finalToIdx = isAfter ? toIdx + 1 : toIdx;
            
            const [movedAlbum] = albums.splice(fromIdx, 1);
            if (fromIdx < finalToIdx) finalToIdx--;
            
            albums.splice(finalToIdx, 0, movedAlbum);
            saveAlbumData(); filterAndSortAlbums(); 
        }
    }
    return false;
}

function addMainGridDragListeners() {
    addDragDropListeners(albumContainer, 'grid');
}


/* =========================
 10. CRUD & FORM
 ========================= */

function openEditAlbumModal(album) {
    document.getElementById('submissionModalTitle').innerHTML = `<i class="fas fa-edit"></i> Edit **${escapeHtml(album.title)}**`;
    document.getElementById('submissionButton').textContent = 'Save Changes';
    document.getElementById('submissionMessage').style.display = 'none';
    document.getElementById('submissionAlbumId').value = album.id;
    document.getElementById('submissionAlbumTitle').value = album.title;
    document.getElementById('submissionAlbumArtist').value = album.artist;
    document.getElementById('submissionAlbumYear').value = album.year;
    document.getElementById('submissionAlbumGenre').value = album.genre;
    document.getElementById('submissionAlbumCover').value = album.cover;
    document.getElementById('submissionAlbumLink').value = album.link;

    deleteAlbumBtn.style.display = 'block';
    
    deleteAlbumBtn.onclick = function() {
        if(confirm(`Are you sure you want to delete "${album.title}"? This cannot be undone.`)) {
            albums = albums.filter(a => a.id !== album.id);
            albumQueue = albumQueue.filter(a => a.title !== album.title);
            delete userNotesData[album.title];
            saveAlbumData(); saveUserNotesData(); filterAndSortAlbums();
            submissionModal.classList.remove('active');
            showToast("Album deleted successfully", "error");
        }
    };
    submissionModal.classList.add('active');
}

function updateExistingAlbum(albumId, newAlbumData) {
    let originalTitle = '';
    albums = albums.map(album => {
        if (album.id === albumId) {
            originalTitle = album.title;
            const updatedAlbum = { ...album, ...newAlbumData, id: albumId };
            if (originalTitle !== updatedAlbum.title) {
                userNotesData[updatedAlbum.title] = userNotesData[originalTitle];
                delete userNotesData[originalTitle];
            }
            return updatedAlbum;
        }
        return album;
    });
    saveAlbumData(); saveUserNotesData();
}

function addNewAlbum(data) {
    const newAlbum = {
        id: getNextAlbumId(),
        title: data.title,
        artist: data.artist,
        genre: data.genre,
        cover: data.cover,
        link: data.link,
        dateAdded: new Date().toISOString().split('T')[0],
        year: data.year,
        rating: 0,
        playCount: 0,
        isFavorite: false,
        lastPlayed: null,
        userNotes: { text: '', favoriteTrack: '' },
        communityNotes: [] 
    };
    albums.push(newAlbum);
    saveAlbumData();
    userNotesData[newAlbum.title] = newAlbum.userNotes;
    saveUserNotesData();
}

function handleNewAlbumSubmission(e) {
    e.preventDefault();
    const form = e.target;
    const albumId = parseInt(document.getElementById('submissionAlbumId').value, 10);
    const data = {
        title: form.submissionAlbumTitle.value.trim(),
        artist: form.submissionAlbumArtist.value.trim(),
        year: parseInt(form.submissionAlbumYear.value, 10),
        genre: form.submissionAlbumGenre.value.trim(),
        cover: form.submissionAlbumCover.value.trim(),
        link: form.submissionAlbumLink.value.trim()
    };
    if (!getYouTubeData(data.link).id) { alert("Invalid YouTube Link."); return; }

    if (albumId) {
        updateExistingAlbum(albumId, data);
        showToast(`${data.title} updated successfully!`);
    } else {
        if (albums.some(a => a.title === data.title)) { alert("Exists!"); return; }
        addNewAlbum(data);
        showToast(`${data.title} added successfully!`);
        form.reset();
    }
    
    renderGenreFilterButtons(); calculateStats(); filterAndSortAlbums(); 
    document.getElementById('submissionMessage').style.display = 'block';
    setTimeout(() => {
        document.getElementById('submissionMessage').style.display = 'none';
        submissionModal.classList.remove('active');
    }, 2000);
}


/* =========================
 11. EVENTS & INITIALIZATION
 ========================= */

window.onscroll = function() {
    const playerDiv = document.getElementById('floatingPlayer');
    if (playerDiv && playerDiv.classList.contains('active')) {
        if (window.scrollY > 200) {
            playerDiv.classList.remove('expanded');
        } else {
            playerDiv.classList.add('expanded');
        }
    }
};


document.addEventListener('DOMContentLoaded', () => {
  loadAlbumData(); 
  renderGenreFilterButtons(); 
  
  // Initialize View Mode
  const savedView = localStorage.getItem('viewMode');
  if(savedView === 'list') {
      albumContainer.classList.add('list-view');
      listViewBtn.classList.add('active');
      gridViewBtn.classList.remove('active');
      shelfViewBtn.classList.remove('active');
  } else if (savedView === 'shelf') {
      albumContainer.classList.add('shelf-view');
      shelfViewBtn.classList.add('active');
      gridViewBtn.classList.remove('active');
      listViewBtn.classList.remove('active');
  }
  
  filterAndSortAlbums(); 
  initializeDarkMode();
  pickRandomAlbum();
  
  try { calculateStats(); } catch (err) { console.warn("Charts failed", err); }
  
  // Load Youtube API
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  updateQueueDisplay();

  // --- ALBUM CARD ACTIONS ---
  albumContainer?.addEventListener('click', (e) => {
    const card = e.target.closest('.album-card');
    if (!card) return;
    const albumTitle = card.dataset.title;
    const album = albums.find(a => a.title === albumTitle);
    if (!album) return;

    if (e.target.classList.contains('star-icon')) {
      const newRating = parseInt(e.target.dataset.rating, 10);
      album.rating = album.rating === newRating ? 0 : newRating;
      saveAlbumData(); filterAndSortAlbums(); return;
    }

    if (e.target.classList.contains('favorite-icon')) {
      album.isFavorite = !album.isFavorite;
      saveAlbumData(); filterAndSortAlbums(); return;
    }
        
    if (e.target.closest('.album-embed-btn')) {
        toggleAlbumEmbed(card, album.link, album);
        return;
    }

    if (e.target.closest('.queue-btn')) {
        toggleQueue(album);
        filterAndSortAlbums(); 
        return;
    }

    if (e.target.classList.contains('album-cover')) {
        openAlbumModal(album);
        return;
    }

    if (e.target.classList.contains('interactive-genre-tag')) {
        const genreToFilter = e.target.dataset.genre.toLowerCase().split(' / ')[0].trim();
        currentGenreFilter = (currentGenreFilter === genreToFilter) ? 'all' : genreToFilter;
        updateFilterButtons(genreFiltersContainer, currentGenreFilter);
        updateFilterButtons(document.querySelector('.genre-tag-breakdown'), currentGenreFilter);
        filterAndSortAlbums();
        return;
    }
  });
    
    // --- GENRE TAG INTERACTION FROM MODAL ---
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('interactive-genre-tag')) {
            const genreToFilter = e.target.dataset.genre.toLowerCase().split(' / ')[0].trim();
            currentGenreFilter = (currentGenreFilter === genreToFilter) ? 'all' : genreToFilter;
            closeAlbumModal(); 
            updateFilterButtons(genreFiltersContainer, currentGenreFilter);
            updateFilterButtons(document.querySelector('.genre-tag-breakdown'), currentGenreFilter);
            filterAndSortAlbums();
            return;
        }
    });

    // --- MODAL TRIGGERS ---
    queueDisplay.addEventListener('click', () => openQueueModal());

    openAddAlbumModalBtn?.addEventListener('click', () => {
        document.getElementById('submissionModalTitle').innerHTML = `<i class="fas fa-plus-circle"></i> Add New Album`;
        document.getElementById('submissionButton').textContent = 'Submit Album to Collection';
        document.getElementById('submissionForm').reset();
        document.getElementById('submissionAlbumId').value = ''; 
        document.getElementById('submissionMessage').style.display = 'none';
        deleteAlbumBtn.style.display = 'none';
        submissionModal.classList.add('active');
    });

    submissionModal.querySelector('.modal-close-btn')?.addEventListener('click', () => submissionModal.classList.remove('active'));
    submissionForm?.addEventListener('submit', handleNewAlbumSubmission);
    
    openDataModalBtn?.addEventListener('click', () => dataModal.classList.add('active'));
    dataModal?.addEventListener('click', (e) => {
        if (e.target.dataset.action === 'close-data-modal' || e.target === dataModal) {
            dataModal.classList.remove('active');
        }
    });

    exportDataBtn?.addEventListener('click', () => {
        const dataStr = JSON.stringify(albums, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `soul_repo_backup_${new Date().toISOString().slice(0,10)}.json`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast("Backup downloaded successfully!");
    });

    triggerImportBtn?.addEventListener('click', () => importFileInput.click());

    importFileInput?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const importedAlbums = JSON.parse(event.target.result);
                if (Array.isArray(importedAlbums)) {
                    if(confirm(`Found ${importedAlbums.length} albums. This will REPLACE your current collection. Continue?`)) {
                        albums = importedAlbums;
                        saveAlbumData(); 
                        renderGenreFilterButtons(); calculateStats(); filterAndSortAlbums();
                        dataModal.classList.remove('active');
                        showToast("Collection restored successfully!", "success");
                    }
                } else { alert("Invalid backup file format."); }
            } catch (err) { console.error(err); alert("Error reading file."); }
        };
        reader.readAsText(file);
        e.target.value = ''; 
    });


  // --- EXTERNAL CONTROLS ---
  searchBar?.addEventListener('input', filterAndSortAlbums);

  sortDropdown?.addEventListener('change', (ev) => {
    currentSort = ev.target.value;
    filterAndSortAlbums();
  });

  randomPickBtn?.addEventListener('click', pickRandomAlbum);

  favoritesFilterBtn?.addEventListener('click', function () {
    showFavoritesOnly = !showFavoritesOnly;
    this.classList.toggle('active', showFavoritesOnly);
    this.innerHTML = showFavoritesOnly ? '<i class="fas fa-times-circle"></i> Hide Favorites' : '<i class="fas fa-heart"></i> Show Favorites';
    filterAndSortAlbums();
  });

  darkModeToggle?.addEventListener('click', toggleDarkMode);
    
    genreFiltersContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('genre-filter-btn')) {
            const filterKey = e.target.dataset.filterKey;
            currentGenreFilter = (currentGenreFilter === filterKey) ? 'all' : filterKey;
            updateFilterButtons(genreFiltersContainer, currentGenreFilter);
            updateFilterButtons(document.querySelector('.genre-tag-breakdown'), currentGenreFilter);
            filterAndSortAlbums();
        }
    });
    
    decadeFiltersContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('decade-filter-btn')) {
            const decade = e.target.dataset.decade;
            currentDecadeFilter = (currentDecadeFilter === decade) ? 'all' : decade;
            document.querySelectorAll('.decade-filter-btn').forEach(btn => btn.classList.remove('active'));
            if (currentDecadeFilter !== 'all') { e.target.classList.add('active'); } 
            else { document.querySelector('.decade-filter-btn[data-decade="all"]').classList.add('active'); }
            filterAndSortAlbums();
        }
    });

    document.querySelector('.sidebar')?.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('genre-breakdown-chip')) {
            const filterKey = target.dataset.genreKey;
            currentGenreFilter = (currentGenreFilter === filterKey) ? 'all' : filterKey;
            updateFilterButtons(document.querySelector('.genre-tag-breakdown'), currentGenreFilter);
            updateFilterButtons(genreFiltersContainer, currentGenreFilter);
            filterAndSortAlbums();
        }
        if (target.dataset.action === 'open-modal-from-sidebar' && target.dataset.title) {
            const albumTitle = target.dataset.title;
            const album = albums.find(a => a.title === albumTitle);
            if (album) openAlbumModal(album);
        }
    });
    
    gridViewBtn.addEventListener('click', () => {
        albumContainer.classList.remove('list-view', 'shelf-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        shelfViewBtn.classList.remove('active');
        localStorage.setItem('viewMode', 'grid');
        filterAndSortAlbums();
    });

    listViewBtn.addEventListener('click', () => {
        albumContainer.classList.remove('shelf-view');
        albumContainer.classList.add('list-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        shelfViewBtn.classList.remove('active');
        localStorage.setItem('viewMode', 'list');
        filterAndSortAlbums();
    });
    
    shelfViewBtn.addEventListener('click', () => {
        albumContainer.classList.remove('list-view');
        albumContainer.classList.add('shelf-view');
        shelfViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        listViewBtn.classList.remove('active');
        localStorage.setItem('viewMode', 'shelf');
        filterAndSortAlbums();
    });
    
    openFocusModeBtn.addEventListener('click', () => {
        const playingAlbum = albums.find(a => a.title === currentlyPlayingAlbumTitle);
        updateFocusMode(playingAlbum);
        focusOverlay.classList.add('active');
    });
    
    closeFocusBtn.addEventListener('click', () => {
        focusOverlay.classList.remove('active');
    });
});

/* =========================
 11. STATS & UTILS
 ========================= */

function updateFocusMode(album) {
    if (!album) {
        focusTitle.textContent = "No Music Playing";
        focusArtist.textContent = "Select an album to start";
        focusCover.src = "images/placeholder.jpg";
        focusCover.style.animation = "none";
    } else {
        focusTitle.textContent = album.title;
        focusArtist.textContent = album.artist;
        focusCover.src = album.cover;
        focusCover.style.animation = "spin 4s linear infinite";
    }
}

function calculateStats() {
  const albumCount = albums.length;
  const genreCounts = {};
  const decadeCounts = {};

  albums.forEach(a => {
    a.genre.split(' / ').forEach(g => {
      const k = g.trim();
      genreCounts[k] = (genreCounts[k] || 0) + 1;
    });
    const decade = Math.floor(a.year / 10) * 10;
    decadeCounts[decade] = (decadeCounts[decade] || 0) + 1;
  });
  
  const sortedGenres = Object.entries(genreCounts).sort((a, b) => b[1] - a[1]);

  document.getElementById('albumCount').textContent = albumCount;
  
  const topAlbum = albums.slice().sort((a, b) => (b.playCount || 0) - (a.playCount || 0))[0];
  document.getElementById('topAlbum').textContent = topAlbum ? `${topAlbum.title} (${topAlbum.playCount})` : 'N/A';
  
  const recEl = document.getElementById('recentAlbums'); 
  if (recEl) {
      recEl.innerHTML = "";
      albums.slice().sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 3).forEach(a => {
        recEl.insertAdjacentHTML('beforeend', `<li data-action="open-modal-from-sidebar" data-title="${escapeHtml(a.title)}">${a.title}</li>`);
      });
  }

  // --- RENDER CHART.JS CHARTS ---
  try {
      if (typeof Chart !== 'undefined') {
          renderGenreChart(sortedGenres);
          renderDecadeChart(decadeCounts);
      }
  } catch (e) { console.warn("Chart rendering skipped", e); }
}

function renderGenreChart(sortedGenres) {
    const ctx = document.getElementById('genreChart');
    if (!ctx) return;
    if (genreChart) genreChart.destroy();
    
    const labels = sortedGenres.slice(0, 5).map(i => i[0]);
    const data = sortedGenres.slice(0, 5).map(i => i[1]);
    
    genreChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: ['#007bff', '#6610f2', '#6f42c1', '#e83e8c', '#fd7e14'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'right', labels: { boxWidth: 10 } } }
        }
    });
}

function renderDecadeChart(decadeCounts) {
    const ctx = document.getElementById('decadeChart');
    if (!ctx) return;
    if (decadeChart) decadeChart.destroy();
    
    const labels = Object.keys(decadeCounts).sort();
    const data = labels.map(label => decadeCounts[label]);
    
    decadeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels.map(y => y + "s"),
            datasets: [{
                label: 'Albums',
                data: data,
                backgroundColor: '#20c997',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, ticks: { precision:0 } } },
            plugins: { legend: { display: false } }
        }
    });
}

function pickRandomAlbum() {
  if (!albums.length) return;
  const rand = albums[Math.floor(Math.random() * albums.length)];
  const cover = document.getElementById("randomAlbumCover");
  const text = document.getElementById("randomAlbumText");
  
  if (cover && text) {
    cover.src = rand.cover;
    cover.alt = rand.title;
    cover.onclick = function() { openAlbumModal(rand); };
    text.innerHTML = `<span style="display:block;font-weight:bold;font-size:1.05rem;margin-bottom:4px;color:var(--text-primary);">${escapeHtml(rand.title)}</span><span style="color:var(--text-secondary);font-size:0.9rem;">${escapeHtml(rand.artist)}</span><p style="font-size:0.75rem;color:var(--accent-color);margin-top:8px;cursor:pointer;"><i class="fas fa-expand-arrows-alt"></i> Click cover to view</p>`;
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  if (darkModeToggle) {
    darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
  }
  calculateStats(); 
}

function initializeDarkMode() {
  let isDark = document.body.classList.contains('dark-mode');
  const stored = localStorage.getItem('darkMode');
  if (stored !== null) isDark = stored === 'true';
  document.body.classList.toggle('dark-mode', isDark);
  if (darkModeToggle) darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
}

function renderGenreFilterButtons() {
  if (!genreFiltersContainer) return;
    const allGenres = new Set(albums.flatMap(a => a.genre.split(' / ').map(g => g.trim())));
  genreFiltersContainer.innerHTML = '';
  const genres = ['All', ...Array.from(allGenres).sort()];

  genres.forEach(genre => {
    const btn = document.createElement('button');
    btn.textContent = genre;
    btn.className = 'genre-filter-btn';
    const filterKey = (genre === 'All' ? 'all' : genre.toLowerCase());
        btn.dataset.filterKey = filterKey; 

    if (filterKey === currentGenreFilter) btn.classList.add('active');
    genreFiltersContainer.appendChild(btn);
  });
}

function updateFilterButtons(container, activeFilter) {
    if (!container) return;
    const keyAttribute = container.classList.contains('genre-tag-breakdown') ? 'genreKey' : 'filterKey';
    
    container.querySelectorAll(`[data-${keyAttribute}]`).forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset[keyAttribute] === activeFilter) {
            btn.classList.add('active');
        }
    });
}