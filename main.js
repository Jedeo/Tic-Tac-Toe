//game instantiation
var game = new Game();
// query selectors
var gameSection = document.getElementById('table');
var mainContainer = document.getElementById('mainContainer')

//event listeners
window.addEventListener('load', displayGame)
mainContainer.addEventListener('click', getBox)


function displayGame() {
  mainContainer.innerHTML += `
  <h1 class="player"> It's <span class="toPlayNext"></span>'s Turn </h1>
  <table id='mainContainer' class="game-bord" id="table">
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
  </table>`

}

function getBox(){
  if(event.target.classList.contains("box")){
    
  }
}
