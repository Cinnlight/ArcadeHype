// Assuming you have a reference to the modal and close button
const modal = document.getElementById("gameModal");
const modalGameName = document.getElementById("modalGameName");
const modalGameImage = document.getElementById("modalGameImage");
const modalGameAvailability = document.getElementById("modalGameAvailability");
const modalGameGenre = document.getElementById("modalGameGenre");
const closeModal = document.getElementsByClassName("close")[0];

// Event listener for each timerDiv
timerDiv.addEventListener('click', () => {
    modalGameName.textContent = game.name;
    modalGameImage.src = game.imageUrl;
    modalGameAvailability.textContent = `Availability: ${game.filter.join(', ')}`;
    modalGameGenre.textContent = `Genre: ${game.genre.join(', ')}`;
    
    // Show the modal
    modal.style.display = "block";
});

// Close the modal when the user clicks on <span> (x)
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}