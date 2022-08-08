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
  //updateBoard()
  tableContainer.innerHTML += `
  <tr>
    <td class="border-right box0" id="">  </td>
    <td class="border-bottom box1" id="">  </td>
    <td class="border-left box2" id="">  </td>
  </tr>
  <tr>
    <td class="border-right box3" id="">  </td>
    <td class="border-bottom box4" id="">  </td>
    <td class="border-left box5" id="">  </td>
  </tr>
  <tr>
    <td class="border-right-only box6" id="">  </td>
    <td class="box7" id=""> </td>
    <td class="border-left-only box8" id="">  </td>
  </tr>
  `

}


function getBox(){
  ////updateding clicked box
  if(event.target.classList.contains("box0")){
     tableContainer = event.target.closest(".box0")
     tableContainer.innerHTML = nextToPlay.innerHTML
     displayPlayer()
     game.gameBord.board[0] = updateBoard()
  }else if(event.target.classList.contains("box1")){
     tableContainer = event.target.closest(".box1")
     tableContainer.innerHTML = nextToPlay.innerHTML
     displayPlayer()
     game.gameBord.board[1] = updateBoard()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
  }
  else if(event.target.classList.contains("box2")){
     tableContainer = event.target.closest(".box2")
     tableContainer.innerHTML = nextToPlay.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
      game.gameBord.board[2] = updateBoard()
  }
  else if(event.target.classList.contains("box3")){
     tableContainer = event.target.closest(".box3")
     tableContainer.innerHTML = nextToPlay.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
     game.gameBord.board[3] = updateBoard()
  }
  else if(event.target.classList.contains("box4")){
     tableContainer = event.target.closest(".box4")
     tableContainer.innerHTML = nextToPlay.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
      game.gameBord.board[4] = updateBoard()
  }
  else if(event.target.classList.contains("box5")){
     tableContainer = event.target.closest(".box5")
     tableContainer.innerHTML = nextToPlay.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
     game.gameBord.board[5] = updateBoard()
  }
  else if(event.target.classList.contains("box6")){
     tableContainer = event.target.closest(".box6")
     tableContainer.innerHTML = nextToPlay.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
      game.gameBord.board[6] = updateBoard()
  }
  else if(event.target.classList.contains("box7")){
     tableContainer = event.target.closest(".box7")
     tableContainer.innerHTML = nextToPlay.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
      game.gameBord.board[7] = updateBoard()
  }
  else if(event.target.classList.contains("box8")){
     tableContainer = event.target.closest(".box8")
     tableContainer.innerHTML = nextToPlay.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
      game.gameBord.board[8] = updateBoard()
  }
}


function displayPlayer(){
  nextToPlay.innerHTML = game.updateTurn();
}

//updateding gameBord
function updateBoard(){
  if(nextToPlay.innerHTML === game.playerOne.token){
    console.log(game.playerOne.id);
    return game.playerOne.id;
  }else if (nextToPlay.innerHTML === game.playerTwo.token) {
    console.log(game.playerTwo.id);
    return game.playerTwo.id
  }
}
