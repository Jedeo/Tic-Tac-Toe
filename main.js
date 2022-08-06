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
  ////updateding clicked box
  if(event.target.classList.contains("box")){
     tableContainer = event.target.closest(".box")
     tableContainer.innerHTML = nextToPlay.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
     updateBoard()
  }
}


function displayPlayer(){
  nextToPlay.innerHTML = game.updateTurn();
}

//updateding gameBord
function updateBoard(){
  var position = event.target.closest(".box")
  console.log("// DEBUG: closest box", position, game.playerOne.id );

  game.gameBord.board[0]=1
  game.gameBord.board[1]=3
  game.gameBord.board[2]=3
  game.gameBord.board[3]=3
  game.gameBord.board[4]=1
  game.gameBord.board[5]=3
  game.gameBord.board[6]=1
  game.gameBord.board[7]=1
  game.gameBord.board[8]=1

console.log(game.gameBord.checkForWin())
  //game.gameBord.board[position] = 1;

}
