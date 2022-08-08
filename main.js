//game instantiation
var game = new Game();
console.log(game);

//globel variables
var currentLocation;
var currentWinner;
// query selectors
var gameSection = document.getElementById('table');
var tableContainer = document.getElementById('tableContainer')
var whoPlays = document.getElementById('playNow')
var playerOneScore = document.getElementById('scoreOne');
var playerTwoScore = document.getElementById('scoreTwo');


//event listeners
window.addEventListener('load', displayGame)
tableContainer.addEventListener('click', getBox)


function renderNewGame() {
  tableContainer.innerHTML = ""
  console.log("new Game");
  var whoPlays = (game.whoseTurn === game.playerOne.token ||
                  game.whoseTurn === game.playerTwo.token) ? game.playerOne.token : game.playerTwo.token;
  tableContainer.innerHTML += `
  <tr>
    <td class="border-right box box0" >  </td>
    <td class="border-bottom box box1" >  </td>
    <td class="border-left box box2" >  </td>
  </tr>
  <tr>
    <td class="border-right box box3" >  </td>
    <td class="border-bottom box box4" >  </td>
    <td class="border-left box box5" i>  </td>
  </tr>
  <tr>
    <td class="border-right-only box box6" >  </td>
    <td class="box box7" id=""> </td>
    <td class="border-left-only box box8" >  </td>
  </tr>
  `

}


function displayGame() {
  //tableContainer.innerHTML='';
  displayPlayer()
  renderNewGame()
}

function getBox(){
  ////updateding clicked box
  if(event.target.classList.contains("box0")){
     tableContainer = event.target.closest(".box0")
     tableContainer.innerHTML = whoPlays.innerHTML
     displayPlayer()
     game.gameBord.board[0] = updateBoard()
     currentWinner = game.checkForWin();
     playerOneScore.innerHTML = game.playerOne.wins
     playerTwoScore.innerHTML = game.playerTwo.wins
     diplayWinner()
  }else if(event.target.classList.contains("box1")){
     tableContainer = event.target.closest(".box1")
     tableContainer.innerHTML = whoPlays.innerHTML
     displayPlayer()
     game.gameBord.board[1] = updateBoard()
     currentWinner = game.checkForWin();
     playerOneScore.innerHTML = game.playerOne.wins
     playerTwoScore.innerHTML = game.playerTwo.wins
     //game.gameBord.updateBoard(tableContainer.innerHTML)
  }
  else if(event.target.classList.contains("box2")){
     tableContainer = event.target.closest(".box2")
     tableContainer.innerHTML = whoPlays.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
      game.gameBord.board[2] = updateBoard()
      currentWinner = game.checkForWin();
      playerOneScore.innerHTML = game.playerOne.wins
      playerTwoScore.innerHTML = game.playerTwo.wins
      diplayWinner()
  }
  else if(event.target.classList.contains("box3")){
     tableContainer = event.target.closest(".box3")
     tableContainer.innerHTML = whoPlays.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
     game.gameBord.board[3] = updateBoard()
     currentWinner = game.checkForWin();
     playerOneScore.innerHTML = game.playerOne.wins
     diplayWinner()
  }
  else if(event.target.classList.contains("box4")){
     tableContainer = event.target.closest(".box4")
     tableContainer.innerHTML = whoPlays.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
      game.gameBord.board[4] = updateBoard()
      currentWinner = game.checkForWin();
      playerOneScore.innerHTML = game.playerOne.wins
      playerTwoScore.innerHTML = game.playerTwo.wins
  }
  else if(event.target.classList.contains("box5")){
     tableContainer = event.target.closest(".box5")
     tableContainer.innerHTML = whoPlays.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
     game.gameBord.board[5] = updateBoard()
     currentWinner = game.checkForWin();
     playerOneScore.innerHTML = game.playerOne.wins
     playerTwoScore.innerHTML = game.playerTwo.wins
     diplayWinner()
  }
  else if(event.target.classList.contains("box6")){
     tableContainer = event.target.closest(".box6")
     tableContainer.innerHTML = whoPlays.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
      game.gameBord.board[6] = updateBoard()
      currentWinner = game.checkForWin();
      playerOneScore.innerHTML = game.playerOne.wins
      playerTwoScore.innerHTML = game.playerTwo.wins
      diplayWinner()
  }
  else if(event.target.classList.contains("box7")){
     tableContainer = event.target.closest(".box7")
     tableContainer.innerHTML = whoPlays.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
      game.gameBord.board[7] = updateBoard()
      currentWinner = game.checkForWin();
      playerOneScore.innerHTML = game.playerOne.wins
      playerTwoScore.innerHTML = game.playerTwo.wins
      diplayWinner()
  }
  else if(event.target.classList.contains("box8")){
     tableContainer = event.target.closest(".box8")
     tableContainer.innerHTML = whoPlays.innerHTML
     displayPlayer()
     //game.gameBord.updateBoard(tableContainer.innerHTML)
      game.gameBord.board[8] = updateBoard()
      currentWinner = game.checkForWin();
      playerOneScore.innerHTML = game.playerOne.wins
      playerTwoScore.innerHTML = game.playerTwo.wins
      diplayWinner()
  }
}


function displayPlayer(){
  whoPlays.innerHTML = game.updateTurn();
}

//updateding gameBord
function updateBoard(){
  if(whoPlays.innerHTML === game.playerOne.token){
    //console.log(game.playerOne.id);
    return game.playerTwo.id;
  }else if (whoPlays.innerHTML === game.playerTwo.token) {
    //console.log(game.playerTwo.id);
    return game.playerOne.id
  }
}

function diplayWinner() {
  var winnerToken = game.checkForWin();
  var showWinner = document.getElementById("showWinner")

  if(winnerToken === game.playerOne.token){
    showWinner.innerHTML = `${winnerToken} Won!`
    game.playerOne.increaseWins();
    game.resetGame();
  } else if (winnerToken === game.playerTwo.token) {
    showWinner.innerHTML = `${winnerToken} Won!`
    game.playerTwo.increaseWins();
    game.resetGame()

  } else if(!game.gameBord.board.includes(-1)){
    showWinner.innerHTML = winnerToken;
    game.resetGame()

  }
}

function newGame(){
  var allBoxs = document.querySelectorAll('.box')
  console.log(allBoxs);
  if (game.endOfgame === true){
      //setTimeout(displayPlayer(), 1000)
    for (var i = 0; i < allBoxs.length; i++) {
      allBoxs[i].innerHTML = "";
    }


  }
}
