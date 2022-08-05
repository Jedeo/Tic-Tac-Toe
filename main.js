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
      <td class="border-right box" id="">  </td>
      <td class="border-bottom box" id="">  </td>
      <td class="border-left box" id="">  </td>
    </tr>
    <tr>
      <td class="border-right box" id="">  </td>
      <td class="border-bottom box" id="">  </td>
      <td class="border-left box" id="">  </td>
    </tr>
    <tr>
      <td class="border-right-only box" id="">  </td>
      <td class="box" id="">  </td>
      <td class="border-left-only box" id="">  </td>
    </tr>
  </table>`

}
