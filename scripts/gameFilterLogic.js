// Adds event listeners to the checkboxes.
document.querySelectorAll('.filter-checkbox, .genre-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', filterGames);
});

// Function to filter the games by "filter" and "genre", and return the filtered games.
function filterGames() {
    let timersDiv = document.getElementById("timers");
    // Clear the timersDiv before re-rendering the filtered games, so only games matching the filter are displayed.
    timersDiv.innerHTML = "";

    // These will select all input elements with the name "filter" and "genre" that are checked.
    // Array.from() is used to convert the NodeList returned by querySelectorAll() into an array. (NodeList is an array-like object that is returned by querySelectorAll() and other DOM methods.)
    // .map(cb => cb.value) is used to create a new array with the values of the checked checkboxes.
    // cb => cb.value is an arrow function that returns the value of the checked checkbox (e.g., "PC" or "Action"). cb stands for checkbox. and cb.value is the value of the checkbox.
    let selectedFilters = Array.from(document.querySelectorAll('input[name="filter"]:checked')).map(cb => cb.value);
    let selectedGenres = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(cb => cb.value);

    // Check if no filters or genres are selected
    if (selectedFilters.length === 0 && selectedGenres.length === 0) {
        // If no filters or genres are selected, display all games
        games.forEach(game => {
            let timerDiv = document.createElement("div");
            timerDiv.className = `bg-[url(${game.imageUrl})] shadow-md rounded-lg p-6 text-center`;
            timerDiv.innerHTML = `
                <h2 class="text-2xl font-bold mb-4">${game.name}</h2>
                <p id="${game.name.replace(/\s+/g, '')}" class="text-2xl font-bold"></p>
                <p class="text-sm text-gray-600">Filter: ${game.filter}</p>
                <p class="text-sm text-gray-600">Genre: ${game.genre}</p>
                    
            `;
            timersDiv.appendChild(timerDiv);
        });
    } else {
        // This is used to iterate through each game that matches the selected filters and genres, and then creates the timerDiv for each game.
        // Initial portion is used to ensure that if no filters are selected (the selectedFilters array is empty), all games are displayed.
        games.filter(game => {
            const filterMatch = selectedFilters.length === 0 || selectedFilters.some(filter => game.filter.includes(filter));
            const genreMatch = selectedGenres.length === 0 || selectedGenres.some(genre => game.genre.includes(genre));
            return filterMatch && genreMatch;
            
        }).forEach(game => {
            let timerDiv = document.createElement("div");
            timerDiv.className = `bg-[url(${game.imageUrl})] shadow-md rounded-lg p-6 text-center`;
            timerDiv.innerHTML = 
            // First line creates a header with the name of the game, along with some Tailwind styling as a placeholder. 

            // Second line creates a paragraph element with the ID of the game name, which will be used to display the countdown timer, along with some placeholder Tailwind styling.

            // Third and fourth lines create paragraph elements displaying the filter and genre of the game, along with some placeholder Tailwind styling.

            // Fourth line creates an image element with the game's image URL, alt text, and some placeholder Tailwind styling.

            // (/\s+/g, '') is a regular expression that removes all whitespace from the game name. If the game name is Game 1, then the ID would be Game1.
            `
                <h2 class="text-2xl font-bold mb-4">${game.name}</h2>
                <p id="${game.name.replace(/\s+/g, '')}" class="text-2xl font-bold"></p>
                <p class="text-sm text-gray-600">Filter: ${game.filter}</p>
                <p class="text-sm text-gray-600">Genre: ${game.genre}</p>
                     
            `;
            timersDiv.appendChild(timerDiv);
        });
    }
}

filterGames();