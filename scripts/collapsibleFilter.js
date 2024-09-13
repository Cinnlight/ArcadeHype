const collapsibleButton = document.getElementById('collapsibleButton');
const collapsibleContent = document.getElementById('collapsibleContent');

collapsibleButton.addEventListener('click', () => {
    collapsibleButton.classList.toggle('active');
    collapsibleContent.classList.toggle('expanded');
});