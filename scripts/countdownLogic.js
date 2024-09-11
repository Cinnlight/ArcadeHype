// Array of game objects with their names, filters, genres, release dates, and image URLs.
let games = [
    { name: "Assassin's Creed Shadows", filter: ["Console", "Pc", "Single Player"], genre: ["Action", "RPG"], releaseDate: new Date("November 11, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2024/05/15/acshadows-1715789601294.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2"},

    { name: "Indiana Jones and the Great Circle", filter: ["Console", "Pc", "Single Player"], genre: ["Action", "Adventure"], releaseDate: new Date("December 8, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2024/01/18/indianajonesgreatcircle-1705613822118.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2" },

    { name: "Europa", filter: "PC", genre: "Adventure", releaseDate: new Date("October 10, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2022/12/07/europa-button-02-1670376231449.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2" },

    { name: "Phoenix Springs", filter: ["Pc", "Single Player"], genre: ["Adventure"], releaseDate: new Date("December 31, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2024/06/08/untitled-1-1717866642448.png?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2" },

    { name: "Undisputed", filter: "Multiplayer", genre: "Sports", releaseDate: new Date("October 10, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2022/10/11/undisputed-button-2-1665519933271.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2" },

    { name: "NHL 25", filter: ["Console", "Multi Player"], genre: ["Sports"], releaseDate: new Date("September 26, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2024/08/22/nhl-25-button-1724331930889.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2" },

    { name: "Dragon Age: The Veilguard", filter: ["Console", "Pc", "Single Player"], genre: ["RPG"], releaseDate: new Date("October 30, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2024/06/06/da-veilguard-1717691587829.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2" },

    { name: "Drova - Forsaken Kin", filter: ["Console", "Pc", "Single Player"], genre: ["RPG"], releaseDate: new Date("October 14, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2023/05/31/library-600x900-1685557954159.jpeg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2" },
];

// List of integrated filters and genres
// Action
// Adventure
// Sports
// RPG

// Pc
// Console
// Mobile
// Single player
// Multi player


function createTimerElements() {
    // Selects div that will hold all the timers.
    let timersDiv = document.getElementById("timers");

    // Loops through the games array and creates a timer element for each game.
    games.forEach(game => {
        // Creates a div element for each timer.
        let timerDiv = document.createElement("div");
        // Sets the class of the timer div to "timer".
        timerDiv.classList.add(`bg-[url(${game.imageUrl})]`, "shadow-md", "rounded-lg", "p-6", "text-center");
        timerDiv.id = game.name.replace(/[\s']/g, '').toLowerCase();

        timerDiv.innerHTML = 
        // First line creates a header with the name of the game, along with some Tailwind styling as a placeholder. 
        // Second line creates a paragraph element with the ID of the game name, which will be used to display the countdown timer, along with some placeholder Tailwind styling.
        // Third and fourth lines create paragraph elements displaying the filter and genre of the game, along with some placeholder Tailwind styling.
        // Fifth line creates an image element with the game's image URL, alt text, and some placeholder Tailwind styling.
        // (/\s+/g, '') is a regular expression that removes all whitespace from the game name. If the game name is Game 1, then the ID would be Game1.
        `
            <h2 class="text-2xl font-bold mb-4">${game.name}</h2>
            <p id="${game.name.replace(/\s+/g, '')}" class="text-2xl font-bold"></p>
            <p class="text-sm text-gray-400">Availability: ${game.filter.join(',&nbsp')}</p>
            <p class="text-sm text-gray-400">Genre: ${game.genre.join(',&nbsp')}</p>
            
        `;
        timersDiv.appendChild(timerDiv);
    });
}

function updateTimers() {
    // Loops through the games array and updates the countdown timer for each game.
    games.forEach(game => {
        // Gets the current date and time.
        let now = new Date().getTime();
        // Calculates the time remaining until the game's release date.
        let timeRemaining = game.releaseDate - now;

        // timeRemaining is initially calculated in milliseconds. The following code converts timeRemaining into days, with the remainder being hours, minutes, and seconds.
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Selects the timer element for the game.
        let timerElement = document.getElementById(game.name.replace(/\s+/g, ''));
        // If the time remaining is greater than 0, display the countdown timer. Otherwise, display the "Released!" message.
        if (timeRemaining > 0) {
            timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            timerElement.innerHTML = "Released!<br> Click the link to view the game on its native platform.";
        }
    });
}

// Calls the createTimerElements function when the page loads.
createTimerElements();
// Calls the updateTimers function every second.
setInterval(updateTimers, 1000);
