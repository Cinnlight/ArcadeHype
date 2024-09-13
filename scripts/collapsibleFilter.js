//Create variables with elements as their values by using the getElementById() method.

const collapsibleButton = document.getElementById('collapsibleButton');
const collapsibleContent = document.getElementById('collapsibleContent');


//Add an event listener to implement a collapsible function to the filter section when viewing website on small or mobile screens.
collapsibleButton.addEventListener('click', () => {
    collapsibleButton.classList.toggle('active');
    collapsibleContent.classList.toggle('expanded');
});