//game instantiation
var game = new Game();
console.log(game);

//globel variables
var currentLocation;
// query selectors
var gameSection = document.getElementById('table');
var tableContainer = document.getElementById('tableContainer')
var nextToPlay = document.getElementById('playNow')

//event listeners
window.addEventListener('load', displayGame)
tableContainer.addEventListener('click', getBox)


function displayGame() {
  tableContainer.innerHTML='';
  displayPlayer()
  tableContainer.innerHTML += `
  <tr>
    <td class="border-right box" id=""> 1 </td>
    <td class="border-bottom box" id=""> 2 </td>
    <td class="border-left box" id=""> 3 </td>
  </tr>
  <tr>
    <td class="border-right box" id=""> 4 </td>
    <td class="border-bottom box" id=""> 5 </td>
    <td class="border-left box" id=""> 6 </td>
  </tr>
  <tr>
    <td class="border-right-only box" id=""> 7 </td>
    <td class="box" id=""> 8 </td>
    <td class="border-left-only box" id=""> 9 </td>
  </tr>
  `

}


function getBox(){
  console.log('got clicked');
  if(event.target.classList.contains("box")){
     tableContainer = event.target.closest(".box")
     tableContainer.innerHTML = nextToPlay.innerHTML
     displayPlayer()
  }
}

function displayPlayer(){
  nextToPlay.innerHTML = game.updateTurn();
}
