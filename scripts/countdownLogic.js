// Array of game objects with their names, filters, genres, release dates, and image URLs.
let games = [
    { name: "Game 1", filter: "upcoming", genre: "RPG", releaseDate: new Date("December 31, 2024 23:59:59"), imageUrl: "path/to/img1.jpg" },
    { name: "Game 2", filter: "popular", genre: "Action", releaseDate: new Date("December 31, 2025 23:59:59"), imageUrl: "path/to/img2.jpg" },
    { name: "Game 3", filter: "new", genre: "Adventure", releaseDate: new Date("December 31, 2026 23:59:59"), imageUrl: "path/to/img3.jpg" },
    { name: "Game 4", filter: "upcoming", genre: "RPG", releaseDate: new Date("December 31, 2027 23:59:59"), imageUrl: "path/to/img4.jpg" },
    { name: "Game 5", filter: "popular", genre: "Action", releaseDate: new Date("December 31, 2028 23:59:59"), imageUrl: "path/to/img5.jpg" },
    { name: "Game 6", filter: "new", genre: "Adventure", releaseDate: new Date("December 31, 2029 23:59:59"), imageUrl: "path/to/img6.jpg" },
    { name: "Game 7", filter: "upcoming", genre: "RPG", releaseDate: new Date("December 31, 2030 23:59:59"), imageUrl: "path/to/img7.jpg" },
    { name: "Game 8", filter: "popular", genre: "Action", releaseDate: new Date("December 31, 2031 23:59:59"), imageUrl: "path/to/img8.jpg" },
];

function createTimerElements() {
    // Selects div that will hold all the timers.
    let timersDiv = document.getElementById("timers");

    // Loops through the games array and creates a timer element for each game.
    games.forEach(game => {
        // Creates a div element for each timer.
        let timerDiv = document.createElement("div");
        // Sets the class of the timer div to "timer".
        timerDiv.classList.add("bg-white", "shadow-md", "rounded-lg", "p-6", "text-center");

        timerDiv.innerHTML = 
        // First line creates a header with the name of the game, along with some Tailwind styling as a placeholder. 
        // Second line creates a paragraph element with the ID of the game name, which will be used to display the countdown timer, along with some placeholder Tailwind styling.
        // Third and fourth lines create paragraph elements displaying the filter and genre of the game, along with some placeholder Tailwind styling.
        // Fifth line creates an image element with the game's image URL, alt text, and some placeholder Tailwind styling.
        // (/\s+/g, '') is a regular expression that removes all whitespace from the game name. If the game name is Game 1, then the ID would be Game1.
        `
            <h2 class="text-2xl font-bold mb-4">${game.name}</h2>
            <p id="${game.name.replace(/\s+/g, '')}" class="text-2xl font-bold"></p>
            <p class="text-sm text-gray-600">Filter: ${game.filter}</p>
            <p class="text-sm text-gray-600">Genre: ${game.genre}</p>
            <img src="${game.imageUrl}" alt="A promotional image of ${game.name}" class="w-full h-48 object-cover rounded-t-lg mb-4">
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
