// Array of game objects with their names, filters, genres, release dates, and image URLs. ALL OF THIS INFORMATION IS PULLED FROM IGN.COM AND THIS IS A PROOF OF CONCEPT FOR CLASS.
let games = [
    { name: "Assassin's Creed Shadows", filter: ["Console", "Pc", "Single Player"], genre: ["Action", "RPG"], releaseDate: new Date("November 11, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2024/05/15/acshadows-1715789601294.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2", blurb: "In Assassin's Creed Shadows, choose between a Shinobi or Samurai and explore the open world of Feudal Japan, from spectacular castle towns and bustling ports to peaceful shrines and pastoral landscapes. Approach your enemies with either your grappling hook and parkour skills, or charge in with brutal precision and power to free Japan from its oppressors." },

    { name: "Dragon Age: The Veilguard", filter: ["Console", "Pc", "Single Player"], genre: ["RPG"], releaseDate: new Date("October 30, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2024/06/06/da-veilguard-1717691587829.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2", blurb: "Dragon Age: The Veilguard (formerly known as Dragon Age: Dreadwolf) is the fourth major entry in Electronic Arts' blockbuster RPG franchise Dragon Age. The Veil is a barrier between the physical world and Fade, which is Dragon Age’s spirit realm. Solas, who helped create the Veil, now wants to destroy it. You and your companions – that make up The Veilguard – are central to taking down a new evil threat unleashed upon Thedas." },

    { name: "Drova - Forsaken Kin", filter: ["Console", "Pc", "Single Player"], genre: ["RPG"], releaseDate: new Date("October 14, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2023/05/31/library-600x900-1685557954159.jpeg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2", blurb: "Drova is an Action-RPG that marries the dark grim tones of its genre with the mysticism of Celtic mythology. Encounter a society where ancient restless spirits and divided factions battle for dominance. Uncover forgotten abilities and unravel the secrets of a past shrouded in mystery." },

    { name: "Europa", filter: ["Console", "Pc", "Single Player"], genre: ["Adventure"], releaseDate: new Date("October 10, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2022/12/07/europa-button-02-1670376231449.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2", blurb: "On the moon Europa, a lush terraformed paradise in Jupiter’s shadow, an android named Zee sets out in search of answers. Run, glide and fly across the landscape, solve mysteries in the ruins of a fallen utopia, and discover the story of the last human alive." },

    { name: "Indiana Jones and the Great Circle", filter: ["Console", "Pc", "Single Player"], genre: ["Action", "Adventure"], releaseDate: new Date("December 8, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2024/01/18/indianajonesgreatcircle-1705613822118.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2", blurb: "Uncover one of history’s greatest mysteries in Indiana Jones and the Great Circle, a first-person, single-player adventure set between the events of Raiders of the Lost Ark and The Last Crusade. The year is 1937, sinister forces are scouring the globe for the secret to an ancient power connected to the Great Circle, and only one person can stop them - Indiana Jones. Become the legendary archaeologist in this cinematic action-adventure game from MachineGames, the studio behind the recent Wolfenstein series, and executive produced by Todd Howard." },

    { name: "NHL 25", filter: ["Console", "Multi Player"], genre: ["Sports"], releaseDate: new Date("September 26, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2024/08/22/nhl-25-button-1724331930889.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2", blurb: "NHL 25 is powered by ICE-Q, a new gameplay intelligence system that lets you control every inch of the ice. From the modernized skating of Next-Gen Vision Control and an overhaul of Chel's AI player movement to authentic Reactive Action animations - experience true hockey intelligence." },   

    { name: "Phoenix Springs", filter: ["Pc", "Single Player"], genre: ["Adventure"], releaseDate: new Date("December 31, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2024/06/08/untitled-1-1717866642448.png?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2", blurb: "Lose yourself in the mystery of Phoenix Springs, a modern point-and-click set in a striking neo-noir world. It begins with an investigation: find your brother Leo. You already know where it ends." },

    { name: "Undisputed", filter: ["Console", "Pc", "Multi Player"], genre: ["Sports"], releaseDate: new Date("October 10, 2024 23:59:59"), imageUrl: "https://assets-prd.ignimgs.com/2022/10/11/undisputed-button-2-1665519933271.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2", blurb: "Undisputed is a realistic boxing game made from the ground-up with the professional boxing community." },
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
    let modal = document.getElementById("myModal");
    let modalContent = document.getElementById("modal-content");
    // Loops through the games array and creates a timer element for each game.
    games.forEach(game => {
        // Creates a div element for each timer.
        let timerDiv = document.createElement("div");
        // Sets the class of the timer div to "timer".
        timerDiv.classList.add(`bg-[url(${game.imageUrl})]`, "shadow-md", "rounded-lg", "p-6", "text-center", "clickable");
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
        // this will add the eventlistener to each of the created elements and populate the modal element with relevant info and make it viewable

        timerDiv.addEventListener('click', () => {
            modalContent.style.backgroundImage = `url("${game.imageUrl}")`;
            modalContent.classList.add( "shadow-md", "rounded-lg", "p-6", "text-center");

            modalContent.innerHTML = 
            // this creates the same layout and styling as the game cards and populates it as in the modal
            `
                <h2 class="text-2xl font-bold mb-4">${game.name}</h2>
                <p class=">${game.blurb}</p>
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
};

function updateTimers(filteredGames = games) {
    // Loops through the games array and updates the countdown timer for each game.
    filteredGames.forEach(game => {
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

        if (timerElement) {
                if (timeRemaining > 0) {
                timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            } else {
                timerElement.innerHTML = "Released!<br> Happy gaming.";
            }
        }       
    });
}

// Calls the createTimerElements function when the page loads.
createTimerElements();
// Calls the updateTimers function every second.
setInterval(updateTimers, 1000);