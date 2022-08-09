//game instantiation
var game = new Game();
console.log(game);

//globel variables
var currentLocation;
//var currentWinner;

// query selectors
var gameSection = document.getElementById('table');
var tableContainer = document.getElementById('tableContainer')
var whoPlays = document.getElementById('playNow')
var playerOneScore = document.getElementById('scoreOne');
var playerTwoScore = document.getElementById('scoreTwo');
var showWinner = document.getElementById("showWinner")


//event listeners
window.addEventListener('load', displayGame)
tableContainer.addEventListener('click', getBox)


function renderNewGame() {
  console.log("// DEBUG: repeater");
  tableContainer.innerHTML = ""
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
//changing current player on DOM
function displayPlayer(){
   showWinner.innerHTML = ''
   showWinner.innerHTML += `
   It's <span class="toPlayNext" id="playNow">${game.updateTurn()}</span>'s Turn`
   whoPlays = showWinner.innerHTML
}



function displayGame() {
  //tableContainer.innerHTML='';
  displayPlayer()
  renderNewGame()

}

function getBox(){
  //var currentBox;
  //updateding clicked box on DOM
  if(event.target.classList.contains("box0")){

    //console.log(currentBox);
     tableContainer = event.target.closest(".box0")
     tableContainer.innerHTML = playNow.innerHTML
     currentBox = tableContainer.innerHTML
     displayPlayer()
     game.gameBoard.board[0] = updateBoard()
    // currentWinner = game.checkForWin();
     //playerOneScore.innerHTML = game.playerOne.wins
     //playerTwoScore.innerHTML = game.playerTwo.wins
     diplayWinner()
  }else if(event.target.classList.contains("box1")){
     tableContainer = event.target.closest(".box1")
     tableContainer.innerHTML = playNow.innerHTML
     displayPlayer()
     game.gameBoard.board[1] = updateBoard()
    // currentWinner = game.checkForWin();
     // playerOneScore.innerHTML = game.playerOne.wins
     // playerTwoScore.innerHTML = game.playerTwo.wins
     //game.gameBoard.updateBoard(tableContainer.innerHTML)
  }
  else if(event.target.classList.contains("box2")){
     tableContainer = event.target.closest(".box2")
     tableContainer.innerHTML = playNow.innerHTML
     displayPlayer()
     //game.gameBoard.updateBoard(tableContainer.innerHTML)
      game.gameBoard.board[2] = updateBoard()
      //currentWinner = game.checkForWin();
      // playerOneScore.innerHTML = game.playerOne.wins
      // playerTwoScore.innerHTML = game.playerTwo.wins
      diplayWinner()
  }
  else if(event.target.classList.contains("box3")){
     tableContainer = event.target.closest(".box3")
     tableContainer.innerHTML = playNow.innerHTML
     displayPlayer()
     //game.gameBoard.updateBoard(tableContainer.innerHTML)
     game.gameBoard.board[3] = updateBoard()
    /// currentWinner = game.checkForWin();
     playerOneScore.innerHTML = game.playerOne.wins
     diplayWinner()
  }
  else if(event.target.classList.contains("box4")){
     tableContainer = event.target.closest(".box4")
     tableContainer.innerHTML = playNow.innerHTML
     displayPlayer()
     //game.gameBoard.updateBoard(tableContainer.innerHTML)
      game.gameBoard.board[4] = updateBoard()
      //currentWinner = game.checkForWin();
      // playerOneScore.innerHTML = game.playerOne.wins
      // playerTwoScore.innerHTML = game.playerTwo.wins
  }
  else if(event.target.classList.contains("box5")){
     tableContainer = event.target.closest(".box5")
     tableContainer.innerHTML = playNow.innerHTML
     displayPlayer()
     //game.gameBoard.updateBoard(tableContainer.innerHTML)
     game.gameBoard.board[5] = updateBoard()
     //currentWinner = game.checkForWin();
     // playerOneScore.innerHTML = game.playerOne.wins
     // playerTwoScore.innerHTML = game.playerTwo.wins
     diplayWinner()
  }
  else if(event.target.classList.contains("box6")){
     tableContainer = event.target.closest(".box6")
     tableContainer.innerHTML = playNow.innerHTML
     displayPlayer()
     //game.gameBoard.updateBoard(tableContainer.innerHTML)
      game.gameBoard.board[6] = updateBoard()
      //currentWinner = game.checkForWin();
      // playerOneScore.innerHTML = game.playerOne.wins
      // playerTwoScore.innerHTML = game.playerTwo.wins
      diplayWinner()
  }
  else if(event.target.classList.contains("box7")){
     tableContainer = event.target.closest(".box7")
     tableContainer.innerHTML = playNow.innerHTML
     displayPlayer()
     //game.gameBoard.updateBoard(tableContainer.innerHTML)
      game.gameBoard.board[7] = updateBoard()
      //currentWinner = game.checkForWin();
      // playerOneScore.innerHTML = game.playerOne.wins
      // playerTwoScore.innerHTML = game.playerTwo.wins
      diplayWinner()
  }
  else if(event.target.classList.contains("box8")){
     tableContainer = event.target.closest(".box8")
     tableContainer.innerHTML = playNow.innerHTML
     displayPlayer()
     //game.gameBoard.updateBoard(tableContainer.innerHTML)
      game.gameBoard.board[8] = updateBoard()
      //currentWinner = game.checkForWin();
      // playerOneScore.innerHTML = game.playerOne.wins
      // playerTwoScore.innerHTML = game.playerTwo.wins
      diplayWinner()
  }
}


//Check if DOM is the same as Data
function updateBoard(){
  if(playNow.innerHTML === game.playerOne.token){
    //console.log(game.playerOne.id);
    return game.playerTwo.id;
  }else if (playNow.innerHTML === game.playerTwo.token) {
    //console.log(game.playerTwo.id);
    return game.playerOne.id
  }
}

//display winner on DOM
function diplayWinner() {
  var winnerToken = game.checkForWin();
  if(winnerToken === game.playerOne.token){
    playerOneScore.innerHTML = game.playerOne.wins
    //game.playerOne.increaseWins();
    showWinner.innerHTML = `${winnerToken} Won!`
    setTimeout(displayPlayer, 2000)
    game.resetGame();
    setTimeout(restartGame, 2000)
  } else if (winnerToken === game.playerTwo.token) {
    playerTwoScore.innerHTML = game.playerTwo.wins
    //game.playerTwo.increaseWins();
    showWinner.innerHTML = `${winnerToken} Won!`
    setTimeout(displayPlayer, 2000)
    game.resetGame()
    setTimeout(restartGame, 2000)

  } else if(!game.gameBoard.board.includes(-1)){
    showWinner.innerHTML = winnerToken;
    setTimeout(displayPlayer, 2000)
    game.resetGame()
    setTimeout(restartGame, 2000)

  }
}
//restting game
function restartGame(){
  //updateScore()
  var allBoxs = document.querySelectorAll('.box')
  console.log(allBoxs);
  if (game.endOfgame === true){
    for (var i = 0; i < allBoxs.length; i++) {
      allBoxs[i].innerHTML = "";
    }
  }
}

// function updateScore(){
//   if(currentWinner === game.playerOne.token){
//     game.playerOne.increaseWins()
//   } else if(currentWinner === game.playerTwo.token){
//     game.playerTwo.increaseWins()
//   }
// }
