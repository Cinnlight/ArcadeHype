const categories = [
    'PC',
    'Console',
    'Mobile',
    'Single Player',
    'Multiplayer',
    'Action',
    'Adventure',
    'MMO',
    'RPG'
]; //How will we assign a category to each game?

//Function that allows results to display dynamically
function displaySearchResults(filteredResults) {
    const results = document.getElementById('results');
    results.innerHTML = ''; //This will clear the results

    filteredResults.forEach(products => {
        const li = document.createElement('li');
        li.textContent = `${}` //filtered result
        results.appendChild(li);
    });
}

//Function to apply filters

function applyFilters() {
    //Retrieve filter values
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const genreFilter = document.getElementById('genreFilter').value;


}

//Display filtered results