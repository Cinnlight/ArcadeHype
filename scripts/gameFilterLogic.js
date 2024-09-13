// Adds event listeners to the checkboxes and subsequently calls filterGames() and saveCheckboxState().
document.querySelectorAll('.filter-checkbox, .genre-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        filterGames();
        saveCheckboxState();
    });
});



function filterGames() {
    let timersDiv = document.getElementById("timers");
    timersDiv.innerHTML = "";

    // Get the selected filters and genres based on what checkboxes are checked.
    let selectedFilters = Array.from(document.querySelectorAll('input[name="filter"]:checked')).map(cb => cb.value);
    let selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(cb => cb.value);

    // filteredGames becomes a new array by checking initially if any filters are selected, if not then all games will be matched to filteredGames. Otherwise it will check if the selected filters match the game's filter and if the selected genres match the game's genre, and then assign that to filteredGames. Additionally normalizes the names of the filters and genres to lowercase and removes whitespace.
    let filteredGames = games.filter(game => {
        const filterMatch = selectedFilters.length === 0 || selectedFilters.some(filter => 
            game.filter.map(f => f.toLowerCase().replace(/\s+/g, '')).includes(filter.toLowerCase().replace(/\s+/g, ''))
        );
        const genreMatch = selectedGenres.length === 0 || selectedGenres.some(genre => 
            game.genre.map(g => g.toLowerCase()).includes(genre.toLowerCase())
        );
        return filterMatch && genreMatch;
    });
    

    // Render the filtered games
    filteredGames.forEach(game => {
        let timerDiv = document.createElement("div");
        let modal = document.getElementById("myModal");
        let modalContent = document.getElementById("modal-content");
        timerDiv.className = `bg-[url(${game.imageUrl})] shadow-md rounded-lg p-6 text-center`;
        timerDiv.innerHTML = `
            <h2 class="text-2xl font-bold mb-4">${game.name}</h2>
            <p id="${game.name.replace(/\s+/g, '')}" class="text-2xl font-bold"></p>
            <p class="text-sm text-gray-400">Availability: ${game.filter.join(',&nbsp')}</p>
            <p class="text-sm text-gray-400">Genre: ${game.genre.join(',&nbsp')}</p>
        `;
        timerDiv.addEventListener('click', () => {
            console.log(`${game.name}`);
            modalContent.style.backgroundImage = `url("${game.imageUrl}")`;
            modalContent.classList.add( "shadow-md", "rounded-lg", "p-6", "text-center");
            modalContent.innerHTML = 
            // this creates the same layout and styling as the game cards and populates it as in the modal
            `
                <h2 class="text-2xl font-bold mb-4">${game.name}</h2>
                <p class="text-lg font-medium mb-4">${game.blurb}</p>
            `;
            modal.style.display = "block";
        });
        window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                };
        };
        timersDiv.appendChild(timerDiv);
    });

    // Update timers for the filtered games only, and then starts them back up.
    updateTimers(filteredGames);
    startTimers();
}

// Function to select all checkboxes, iterate through them, and save their state to localStorage.
function saveCheckboxState() {
    document.querySelectorAll('.filter-checkbox, .genre-checkbox').forEach(checkbox => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });

}

// Function to select all checkboxes, iterate through them, and load their state from localStorage.
function loadCheckboxState() {
    document.querySelectorAll('.filter-checkbox, .genre-checkbox').forEach(checkbox => {
        const checked = localStorage.getItem(checkbox.id) === 'true';
        checkbox.checked = checked;
    });
}

let timerInterval;

// Function to start the timers for the filtered games.
// clearInterval is called to stop that timerInterval that starts on page launch, this is followed by a setInterval that calls the updateTimers function every second, now only for the filtered games.
function startTimers(filteredGames = games) {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    timerInterval = setInterval(() => updateTimers(filteredGames), 1000);
}

// Call the loadCheckboxState() function to load the checkbox state from localStorage when the page loads.
loadCheckboxState();

// Call the filterGames() function to filter the games based on the selected filters and genres when the page loads.
filterGames();