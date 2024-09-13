const toggleButton = document.getElementById('dark-mode-toggle');
const aside = document.getElementById('asideBody');
const header = document.getElementById('header');
const filter = document.getElementById('darkModeFilter');
const filterButton = document.getElementById('filterButton');
const availability = document.getElementById('darkModeAvailability');
const players = document.getElementById('darkModePlayers');
const genre = document.getElementById('darkModeGenres');
const body = document.body;

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    aside.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    filter.classList.toggle('dark-mode');
    filterButton.classList.toggle('dark-mode');
    availability.classList.toggle('dark-mode');
    players.classList.toggle('dark-mode');
    genre.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');
});