const toggleButton = document.getElementById('dark-mode-toggle');
const aside = document.getElementById('asideBody');
const header = document.getElementById('header');
const filter = document.getElementById('darkModeFilter');
const filterButton = document.getElementById('filterButton');
const availability = document.getElementById('darkModeAvailability');
const players = document.getElementById('darkModePlayers');
const genre = document.getElementById('darkModeGenres');
const body = document.body;

function getMode() {
    localStorage.getItem("mode");
    if (localStorage.getItem("mode") === "dark-mode") {
        localStorage.setItem("mode", "dark-mode");
        body.classList.add("dark-mode");
        aside.classList.add('dark-mode');
        header.classList.add('dark-mode');
        filter.classList.add('dark-mode');
        filterButton.classList.add('dark-mode');
        availability.classList.add('dark-mode');
        players.classList.add('dark-mode');
        genre.classList.add('dark-mode');
        toggleButton.classList.add('dark-mode');
    } else {
        localStorage.setItem("mode", "light-mode");
    }
}

getMode();

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
    localStorage.getItem("mode");
    if (document.body.className === "body dark-mode") {
        localStorage.setItem("mode", "dark-mode");
    } else {
        localStorage.setItem("mode", "light-mode");
    }
});