// Function to filter the games by "filter" and "genre", and return the filtered games.
// Assigning event listeners to the filter buttons to filter the games by "filter" and "genre" will be added once the side bar is implemented in the index.html file.

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

    // This is used to iterate through each game that matches the selected filters and genres, and then creates the timerDiv for each game.
    games.filter(game => selectedFilters.includes(game.filter) && selectedGenres.includes(game.genre)).forEach(game => {
        let timerDiv = document.createElement("div");
        timerDiv.className = "bg-white shadow-md rounded-lg p-6 text-center";
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
            <img src="${game.imageUrl}" alt="A promotional image of ${game.name}" class="w-full h-48 object-cover rounded-t-lg mb-4">     
        `;
        // Append the timerDiv to the timersDiv.
        timersDiv.appendChild(timerDiv);
    });
}

// Example usage for calling the function inside of button event listeners:
// filterGames("PC", "Action");
