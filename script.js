// Play vinyl scratch sound
const vinylSound = new Audio('sounds/vinyl-scratch.mp3');
vinylSound.volume = 0.3;

/* =========================
   1. DATA SETUP (your full album array)
   ========================= */
const albums = [
    { id: 1, title: "Donuts", artist: "J Dilla", genre: "Hip-Hop", cover: "images/Dilladonuts.jpg", link: "https://youtu.be/crZF0YNORIY?si=Kt6BCv0LbAPtBRg2", dateAdded: "2023-10-01", year: 2006, rating: 0, playCount: 0, isFavorite: false },
    { id: 2, title: "Graduation", artist: "Kanye West", genre: "Hip-Hop", cover: "images/kanyWestGraduation.jpg", link: "https://www.youtube.com/watch?v=rr3p8qy1X-g", dateAdded: "2023-11-15", year: 2007, rating: 0, playCount: 0, isFavorite: false },
    { id: 3, title: "Modal Soul", artist: "Nujabes", genre: "Hip-Hop / Jazz", cover: "images/nujabesModalSoul.jpg", link: "https://youtu.be/8iP3J8jFYdM?si=snDMWgrDUltNpgHm", dateAdded: "2023-12-05", year: 2005, rating: 0, playCount: 0, isFavorite: false },
    { id: 4, title: "Nevermind", artist: "Nirvana", genre: "Alternative Rock", cover: "images/nNEVERMIND.webp", link: "https://www.youtube.com/watch?v=EwENfTvSQbQ&list=RDEwENfTvSQbQ&start_radio=1", dateAdded: "2024-01-20", year: 1991, rating: 0, playCount: 0, isFavorite: false },
    { id: 5, title: "Since I Left You", artist: "The Avalanches", genre: "Electronic", cover: "images/theAvalanchesSILY.jpg", link: "https://www.youtube.com/watch?v=TyOfYE5cqNk&list=PLVxakxoWul5V3M8awBfeQnboZN_fqkEPS&index=1", dateAdded: "2023-10-01", year: 2000, rating: 0, playCount: 0, isFavorite: false },
    { id: 6, title: "Merriweather Post Pavilion", artist: "Animal Collective", genre: "Psychedelic Pop", cover: "images/animalCollectiveMPP.png", link: "https://www.youtube.com/watch?v=Ebmp2YMIr9s&list=OLAK5uy_lq6ZY8GSCQhbG7Z6cr-rw5EL9CQ54CdSs", dateAdded: "2023-10-01", year: 2009, rating: 0, playCount: 0, isFavorite: false },
    { id: 7, title: "Channel Orange", artist: "Frank Ocean", genre: "R&B / Soul", cover: "images/frankOceanChannelOrange.jpg", link: "https://www.youtube.com/watch?v=xEQ_946TO_g&list=OLAK5uy_mAGTQmYeosOR-Pp17OnnzkKHPeEbzSFOg", dateAdded: "2023-10-01", year: 2012, rating: 0, playCount: 0, isFavorite: false },
    { id: 8, title: "Late Registration", artist: "Kanye West", genre: "Hip-Hop", cover: "images/kanyeWestLateRegistration.jpg", link: "https://www.youtube.com/watch?v=14Ef5mb2qhc&list=PLAn-T5fEM_WC7RUX39PezdMp8Qlo-oiMh", dateAdded: "2023-10-01", year: 2005, rating: 0, playCount: 0, isFavorite: false },
    { id: 9, title: "The Life of Pablo", artist: "Kanye West", genre: "Hip-Hop", cover: "images/kanyeWestTheLifeOfPablo.jpg", link: "https://www.youtube.com/watch?v=6oHdAA3AqnE&list=PLzMq4yH_FvVac_1R0DMcMkcwnJ1-hFx6b", dateAdded: "2023-10-01", year: 2016, rating: 0, playCount: 0, isFavorite: false },
    { id: 10, title: "The College Dropout", artist: "Kanye West", genre: "Hip-Hop", cover: "images/kanyeWestTheCollegeDropout.jpg", link: "https://www.youtube.com/watch?v=OTZzjAU0Kg0&list=PLTfO7IRJ-B3BKFN93H4G9D9lyklswLNtX", dateAdded: "2023-10-01", year: 2004, rating: 0, playCount: 0, isFavorite: false },
    { id: 11, title: "Harry's House", artist: "Harry Styles", genre: "Pop", cover: "images/harryStylesHarrysHouse.png", link: "https://www.youtube.com/playlist?list=PLo9rTk1CYUkWnkltbLGVXzBDM_k0vx_A_", dateAdded: "2023-10-01", year: 2022, rating: 0, playCount: 0, isFavorite: false },
    { id: 12, title: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West", genre: "Hip-Hop", cover: "images/kanyeWestMyBeautifulDarkTwistedFantasy.jpg", link: "https://www.youtube.com/watch?v=UTH1VNHLjng&list=PLzMq4yH_FvVa5kPgtKmgdzPssfmBUtO2C&index=1", dateAdded: "2023-10-01", year: 2010, rating: 0, playCount: 0, isFavorite: false },
    { id: 13, title: "Pet Sounds", artist: "The Beach Boys", genre: "Rock / Pop", cover: "images/theBeachBoysPetSounds.jpg", link: "https://www.youtube.com/playlist?list=OLAK5uy_mJN3N2XYKY6P2RpKP_-Zk20HwDSewNAYY&playnext=1&index=1", dateAdded: "2023-10-01", year: 1966, rating: 0, playCount: 0, isFavorite: false },
    { id: 14, title: "Discovery", artist: "Daft Punk", genre: "Electronic", cover: "images/daftPunkDiscovery.png", link: "https://www.youtube.com/watch?v=zKSsP2084nU&list=PLZv6xnm6clDYZuo0W2a2nqH0_iygXF79C", dateAdded: "2023-10-01", year: 2001, rating: 0, playCount: 0, isFavorite: false },
    { id: 15, title: "Random Access Memories", artist: "Daft Punk", genre: "Electronic", cover: "images/daftPunkRandomAccessMemories.png", link: "https://www.youtube.com/watch?v=IluRBvnYMoY&list=OLAK5uy_kL8Foly6phCoLmgSWTPjgZsbAne85xMMM", dateAdded: "2023-10-01", year: 2013, rating: 0, playCount: 0, isFavorite: false },
    { id: 16, title: "Blonde", artist: "Frank Ocean", genre: "R&B / Soul", cover: "images/frankOceanBlonde.jpeg", link: "https://www.youtube.com/watch?v=fahxSXoXlsA&list=PLDCdjwiC90TGiL_tRVbJLerxjNqFz7of2", dateAdded: "2023-10-01", year: 2016, rating: 0, playCount: 0, isFavorite: false },
    { id: 17, title: "Little Dark Age", artist: "MGMT", genre: "Synthpop / Indie", cover: "images/mgmtMyLittleDarkAge.png", link: "https://www.youtube.com/watch?v=e0QT4N-5PA4&list=OLAK5uy_kBFHQWSR3V3RPeRDSA1JKl_HpHDVgYYEA", dateAdded: "2023-10-01", year: 2018, rating: 0, playCount: 0, isFavorite: false },
    { id: 18, title: "Skiptracing", artist: "Mild High Club", genre: "Psychedelic Pop", cover: "images/mildHighClubSkiptracing.jpg", link: "https://www.youtube.com/watch?v=iXehtTIgjrw&list=PLbJ3VMmxqdGWc9G4n3W6o_KFjoLTc76Nv", dateAdded: "2023-10-01", year: 2016, rating: 0, playCount: 0, isFavorite: false },
    { id: 19, title: "The Dark Side of the Moon", artist: "Pink Floyd", genre: "Progressive Rock", cover: "images/pinkFloydTheDarkSideOfTheMoon.jpg", link: "https://youtu.be/k9ynZnEBtvw?si=N5mxdypHxa-g6zeC", dateAdded: "2023-10-01", year: 1973, rating: 0, playCount: 0, isFavorite: false },
    { id: 20, title: "For You", artist: "Tatsuro Yamashita", genre: "City Pop", cover: "images/tatsuroYamashitaForYou.jpg", link: "https://www.dailymotion.com/video/x8mmgeh", dateAdded: "2023-10-01", year: 1982, rating: 0, playCount: 0, isFavorite: false },
    { id: 21, title: "Floral Shoppe", artist: "Macintosh Plus", genre: "Vapor Wave", cover: "images/macintoshPlusFloralShoppe.jpg", link: "https://www.youtube.com/watch?si=gDjl1JOb0qDrdq30&t=1&v=cCq0P509UL4&feature=youtu.be", dateAdded: "2023-10-01", year: 2011, rating: 0, playCount: 0, isFavorite: false },
    { id: 22, title: "Shinbangumi", artist: "Ginger Root", genre: "City Pop", cover: "images/gingerRootShinbangumi.jpg", link: "https://www.youtube.com/watch?v=3GRXCLYibBg&list=RD3GRXCLYibBg&start_radio=1&t=1s", dateAdded: "2023-10-01", year: 2021, rating: 0, playCount: 0, isFavorite: false },
    { id: 23, title: "Speaking In Tongues", artist: "Talking Heads", genre: "New Wave", cover: "images/talkingHeadsSpeakingInTongues.jpg", link: "https://www.youtube.com/watch?v=4c_YkN-8WRM", dateAdded: "2023-10-01", year: 1983, rating: 0, playCount: 0, isFavorite: false },
    { id: 24, title: "You Will Never Know Why", artist: "Sweet Trip", genre: "Indie pop", cover: "images/SweetTripYouWillNeverKnowWhy.jpg", link: "https://www.youtube.com/watch?v=MSq0gOJ9AGA", dateAdded: "2023-10-01", year: 2009, rating: 0, playCount: 0, isFavorite: false },
];

/* =========================
   2. ELEMENT REFS & STATE
   ========================= */
const albumContainer = document.getElementById("albumContainer");
const searchBar = document.getElementById('searchBar');
const sortDropdown = document.getElementById('sortDropdown');
const favoritesFilterBtn = document.getElementById('favoritesFilterBtn');
const darkModeToggle = document.getElementById('darkModeToggle');
const genreFiltersContainer = document.getElementById('genreFilters');
const randomPickBtn = document.getElementById("randomPickBtn");

let currentSort = 'title';
let currentGenreFilter = 'all';
let showFavoritesOnly = false;

/* maps for per-panel outside click handlers and auto-close timers */
const panelOutsideHandlerMap = new WeakMap();
const panelAutoCloseTimerMap = new WeakMap();

/* =========================
   3. PERSISTENCE
   ========================= */
function saveAlbumData() {
    const mutable = albums.map(a => ({
        title: a.title,
        rating: a.rating ?? 0,
        playCount: a.playCount ?? 0,
        isFavorite: a.isFavorite ?? false
    }));
    localStorage.setItem('albumMutableData', JSON.stringify(mutable));
    calculateStats();
}

function loadAlbumData() {
    const saved = localStorage.getItem('albumMutableData');
    if (!saved) return;
    try {
        const parsed = JSON.parse(saved);
        parsed.forEach(savedAlbum => {
            const idx = albums.findIndex(a => a.title === savedAlbum.title);
            if (idx !== -1) {
                albums[idx].rating = parseInt(savedAlbum.rating || 0, 10);
                albums[idx].playCount = parseInt(savedAlbum.playCount || 0, 10);
                albums[idx].isFavorite = savedAlbum.isFavorite === true;
            }
        });
    } catch (err) {
        console.warn('Failed loading albumMutableData', err);
    }
}

/* =========================
   4. RENDER HELPERS
   ========================= */
function renderStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        const starClass = i <= rating ? 'fa-solid' : 'fa-regular';
        html += `<i class="fa-star star-icon ${starClass}" data-rating="${i}"></i>`;
    }
    return html;
}

/* escape minimal HTML for content coming from dataset */
function escapeHtml(s = '') {
    return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
}

function createAlbumCardHTML(album) {
    const favClass = album.isFavorite ? 'fa-solid' : 'fa-regular';
    const savedNotes = localStorage.getItem(`notes-${album.title}`) || '';
    return `
    <div class="album-card" data-title="${escapeHtml(album.title)}">
      <img class="album-cover" src="${album.cover}" alt="${escapeHtml(album.title)} cover">
      <h3 class="album-title">${escapeHtml(album.title)}</h3>
      <p class="album-artist">${escapeHtml(album.artist)}</p>
      <p class="album-genre" style="font-size:0.8rem;color:var(--text-secondary)">${escapeHtml(album.genre)}</p>

      <div class="rating-play-controls">
        <div class="rating-display-group">
          <p class="play-count"><i class="fas fa-headphones"></i> ${album.playCount || 0}</p>
          <div class="rating-container" data-album-title="${escapeHtml(album.title)}">${renderStars(album.rating)}</div>
        </div>
        <!-- heart increased 33% (1.75rem) -->
        <i class="${favClass} fa-heart favorite-icon" data-album-title="${escapeHtml(album.title)}" style="font-size:1.75rem;"></i>
      </div>

      <div class="card-bottom-controls">
        <a class="album-link vinyl" href="${album.link}" target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-record-vinyl"></i> Listen
        </a>
        <button class="notes-btn" data-album-title="${escapeHtml(album.title)}">Notes</button>
      </div>

      <div class="notes-section" aria-hidden="true">
        <textarea class="notes-textarea" data-album-title="${escapeHtml(album.title)}" placeholder="Add your notes...">${escapeHtml(savedNotes)}</textarea>
        <button class="notes-save-btn">Save</button>
        <p class="notes-confirmation">Notes saved!</p>
        <div class="char-counter" style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">Characters: ${savedNotes.length}</div>
      </div>
    </div>
    `;
}

/* =========================
   5. FILTER / SORT / DISPLAY
   ========================= */
function filterAndSortAlbums() {
    let list = [...albums];

    if (currentGenreFilter !== 'all') {
        list = list.filter(a => a.genre.toLowerCase().includes(currentGenreFilter.toLowerCase()));
    }
    if (showFavoritesOnly) {
        list = list.filter(a => a.isFavorite);
    }
    const searchTerm = searchBar?.value?.toLowerCase() || '';
    if (searchTerm) {
        list = list.filter(a =>
            a.title.toLowerCase().includes(searchTerm) ||
            a.artist.toLowerCase().includes(searchTerm) ||
            a.genre.toLowerCase().includes(searchTerm)
        );
    }

    if (currentSort && currentSort !== 'none') {
        list.sort((a, b) => {
            if (currentSort === 'title' || currentSort === 'artist') {
                return a[currentSort].localeCompare(b[currentSort]);
            }
            if (currentSort === 'year' || currentSort === 'rating' || currentSort === 'plays') {
                return (b[currentSort] || 0) - (a[currentSort] || 0);
            }
            return 0;
        });
    }

    displayFilteredAlbums(list);
}

function displayFilteredAlbums(list) {
    if (!albumContainer) return;
    if (!list.length) {
        albumContainer.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:var(--text-secondary);padding:2rem;'>No albums found matching your criteria.</p>";
        return;
    }
    albumContainer.innerHTML = list.map(createAlbumCardHTML).join('');
}

/* =========================
   6. NOTES PANEL (Option B)
   - Clicking Notes ALWAYS opens panel
   - Auto-close saved panel after 2.5s
   - Close panel if clicking outside it
   ========================= */

function openNotesPanel(panel) {
    if (!panel) return;
    // clear any previous timer for this panel
    clearPanelAutoClose(panel);

    panel.classList.add('active');
    panel.setAttribute('aria-hidden', 'false');

    // register outside-click handler for this panel (only once)
    if (!panelOutsideHandlerMap.has(panel)) {
        const handler = (e) => {
            if (!panel.contains(e.target)) {
                closeNotesPanel(panel);
                document.removeEventListener('mousedown', handler);
                panelOutsideHandlerMap.delete(panel);
            }
        };
        panelOutsideHandlerMap.set(panel, handler);
        document.addEventListener('mousedown', handler);
    }
}

function closeNotesPanel(panel) {
    if (!panel) return;
    panel.classList.remove('active');
    panel.setAttribute('aria-hidden', 'true');

    const confirm = panel.querySelector('.notes-confirmation');
    if (confirm) confirm.classList.remove('visible');

    const handler = panelOutsideHandlerMap.get(panel);
    if (handler) {
        document.removeEventListener('mousedown', handler);
        panelOutsideHandlerMap.delete(panel);
    }

    clearPanelAutoClose(panel);
}

function schedulePanelAutoClose(panel, ms = 2500) {
    clearPanelAutoClose(panel);
    const t = setTimeout(() => {
        closeNotesPanel(panel);
        panelAutoCloseTimerMap.delete(panel);
    }, ms);
    panelAutoCloseTimerMap.set(panel, t);
}

function clearPanelAutoClose(panel) {
    const t = panelAutoCloseTimerMap.get(panel);
    if (t) {
        clearTimeout(t);
        panelAutoCloseTimerMap.delete(panel);
    }
}

/* =========================
   7. DELEGATED EVENT HANDLING
   ========================= */
document.addEventListener('DOMContentLoaded', () => {
    // initialize state
    loadAlbumData();
    initializeDarkMode();
    renderGenreFilters();
    calculateStats();
    pickRandomAlbum();
    filterAndSortAlbums();

    // album actions (delegated)
    albumContainer?.addEventListener('click', (e) => {
        const card = e.target.closest('.album-card');
        if (!card) return;
        const albumTitle = card.dataset.title;
        const album = albums.find(a => a.title === albumTitle);
        if (!album) return;

        // rating star
        if (e.target.classList.contains('star-icon')) {
            const newRating = parseInt(e.target.dataset.rating, 10);
            album.rating = album.rating === newRating ? 0 : newRating;
            saveAlbumData();
            filterAndSortAlbums();
            return;
        }

        // favorite heart
        if (e.target.classList.contains('favorite-icon')) {
            album.isFavorite = !album.isFavorite;
            saveAlbumData();
            filterAndSortAlbums();
            return;
        }

        // vinyl listen link
        if (e.target.closest('.album-link.vinyl')) {
            album.playCount = (album.playCount || 0) + 1;
            saveAlbumData();
            vinylSound.currentTime = 0;
            vinylSound.play();
            setTimeout(filterAndSortAlbums, 100);
            return;
        }

        // NOTES: clicking 'Notes' always opens (Option B)
        if (e.target.classList.contains('notes-btn')) {
            const panel = card.querySelector('.notes-section');
            openNotesPanel(panel);
            return;
        }

        // NOTES SAVE: save for this album and schedule auto-close (2.5s)
        if (e.target.classList.contains('notes-save-btn')) {
            const panel = e.target.closest('.notes-section');
            const textarea = panel.querySelector('.notes-textarea');
            const confirmation = panel.querySelector('.notes-confirmation');
            const charCounter = panel.querySelector('.char-counter');

            // persist by title (keeps compatibility with prior code)
            localStorage.setItem(`notes-${albumTitle}`, textarea.value);

            // show confirmation and update counter
            confirmation?.classList.add('visible');
            if (charCounter) charCounter.textContent = `Characters: ${textarea.value.length}`;

            // auto-close this panel after 2.5s
            schedulePanelAutoClose(panel, 2500);
            return;
        }
    });

    // live char counter for notes
    albumContainer?.addEventListener('input', (e) => {
        if (!e.target.classList.contains('notes-textarea')) return;
        const panel = e.target.closest('.notes-section');
        const counter = panel.querySelector('.char-counter');
        if (counter) counter.textContent = `Characters: ${e.target.value.length}`;
    });

    // external controls
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
});

/* =========================
   8. STATS / RANDOM / DARK MODE
   (kept your logic; cleaned slightly)
   ========================= */
function calculateStats() {
    const albumCount = albums.length;
    document.querySelectorAll('#albumCount').forEach(el => el.textContent = albumCount);
    if (albumCount === 0) return;

    const genreCounts = {};
    albums.forEach(a => {
        a.genre.split(' / ').forEach(g => {
            const genre = g.trim();
            genreCounts[genre] = (genreCounts[genre] || 0) + 1;
        });
    });

    const topGenre = Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';
    document.querySelectorAll('#topGenre').forEach(el => el.textContent = topGenre);

    const topAlbum = albums.slice().sort((a, b) => (b.playCount || 0) - (a.playCount || 0))[0];
    document.querySelectorAll('#topAlbum').forEach(el => el.textContent = topAlbum ? `${topAlbum.title} (${topAlbum.playCount} plays)` : 'N/A');

    const recentAlbumsEl = document.getElementById("recentAlbums");
    if (recentAlbumsEl) {
        recentAlbumsEl.innerHTML = "";
        const recent = albums.slice().sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 3);
        recent.forEach(album => {
            const li = document.createElement("li");
            li.textContent = `${album.title} — ${album.artist}`;
            recentAlbumsEl.appendChild(li);
        });
    }

    const genreDistEl = document.getElementById("genreDistribution");
    if (genreDistEl) {
        genreDistEl.innerHTML = "";
        Object.entries(genreCounts).forEach(([genre, count]) => {
            const li = document.createElement("li");
            li.textContent = `${genre}: ${count}`;
            genreDistEl.appendChild(li);
        });
    }
}

function pickRandomAlbum() {
    if (!albums.length) return;
    const rand = albums[Math.floor(Math.random() * albums.length)];
    const cover = document.getElementById("randomAlbumCover");
    const text = document.getElementById("randomAlbumText");
    if (cover && text) {
        cover.src = rand.cover;
        cover.alt = rand.title;
        text.textContent = `${rand.title} — ${rand.artist}`;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    if (darkModeToggle) {
        darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
    }
}

function initializeDarkMode() {
    let isDark = document.body.classList.contains('dark-mode');
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) isDark = stored === 'true';
    document.body.classList.toggle('dark-mode', isDark);
    if (darkModeToggle) darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
}

/* =========================
   9. GENRE FILTERS
   ========================= */
function renderGenreFilters() {
    if (!genreFiltersContainer) return;
    const allGenres = new Set(albums.flatMap(a => a.genre.split(' / ').map(g => g.trim())));
    genreFiltersContainer.innerHTML = '';
    const genres = ['All', ...Array.from(allGenres).sort()];
    genres.forEach(genre => {
        const btn = document.createElement('button');
        btn.textContent = genre;
        btn.className = 'genre-filter-btn';
        if ((genre === 'All' ? 'all' : genre.toLowerCase()) === currentGenreFilter) btn.classList.add('active');
        btn.addEventListener('click', () => {
            currentGenreFilter = (genre === 'All' ? 'all' : genre.toLowerCase());
            genreFiltersContainer.querySelectorAll('.genre-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterAndSortAlbums();
        });
        genreFiltersContainer.appendChild(btn);
    });
}

/* =========================
   INITIAL LOAD
   ========================= */
function initialLoad() {
    loadAlbumData();
    initializeDarkMode();
    renderGenreFilters();
    calculateStats();
    pickRandomAlbum();
    filterAndSortAlbums();
}

document.addEventListener('DOMContentLoaded', initialLoad);

document.querySelectorAll('.volume-knob').forEach(slider => {
  const volumeValue = slider.nextElementSibling; // assumes <span> is right after <input>
  slider.addEventListener('input', () => {
    volumeValue.textContent = slider.value;
    // You can also save the volume setting here if needed
  });
});
