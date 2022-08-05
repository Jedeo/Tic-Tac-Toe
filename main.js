//game instantiation
var game = new Game();
// query selectors
var gameSection = document.getElementById('table');
var mainContainer = document.getElementById('mainContainer')

//event listeners
window.addEventListener('load', displayGame)
mainContainer.addEventListener('click', getBox)
