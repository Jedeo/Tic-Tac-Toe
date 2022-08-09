//game instantiation
var game = new Game();
// query selectors
var gameSection = document.getElementById('table');
var tableContainer = document.getElementById('tableContainer');
var whoPlays = document.getElementById('playNow');
var playerOneScore = document.getElementById('scoreOne');
var playerTwoScore = document.getElementById('scoreTwo');
var showWinner = document.getElementById("showWinner");

//event listeners
window.addEventListener('load', displayGame);
tableContainer.addEventListener('click', getBox);

//innerHTML for creating game for user
function renderNewGame() {
  tableContainer.innerHTML = "";
  tableContainer.innerHTML += `
  <tr>
    <td class="border-right box box0" disabled>  </td>
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
  </tr>`;
}
//changing current player on DOM
function displayPlayer() {
  showWinner.innerHTML = '';
  showWinner.innerHTML += `
   It's <span class="toPlayNext" id="playNow">${game.updateTurn()}</span>'s Turn`;
  whoPlays = showWinner.innerHTML;
}

//diplay when first opening window
function displayGame() {
  displayPlayer();
  renderNewGame();
}

//Check if DOM is the same as Data so we can get Id for our gameBoard
function updateBoard() {
  if (playNow.innerHTML === game.playerOne.token) {
    return game.playerTwo.id;
  } else if (playNow.innerHTML === game.playerTwo.token) {
    return game.playerOne.id;
  }
}

//display winner onto DOM
function diplayWinner() {
  const winnerToken = game.checkForWin();
  if (winnerToken === game.playerOne.token) {
    playerOneScore.innerHTML = game.playerOne.wins
    showWinner.innerHTML = `${winnerToken} Won!`
    setTimeout(displayPlayer, 2000)
    game.resetGame();
    setTimeout(restartGame, 2000)
    return;
  } else if (winnerToken === game.playerTwo.token) {
    playerTwoScore.innerHTML = game.playerTwo.wins
    showWinner.innerHTML = `${winnerToken} Won!`
    setTimeout(displayPlayer, 2000)
    game.resetGame()
    setTimeout(restartGame, 2000)
    return;
  } else if (!game.gameBoard.board.includes(-1)) {
    showWinner.innerHTML = winnerToken;
    setTimeout(displayPlayer, 2000)
    game.resetGame()
    setTimeout(restartGame, 2000)
  }
}

//reseting game
function restartGame() {
  const allBoxs = document.querySelectorAll('.box')
  if (game.endOfgame === true) {
    for (let i = 0; i < allBoxs.length; i++) {
      allBoxs[i].innerHTML = "";
    }
  }
}
//checking where player is and matching it with the gameBoard
function getBox() {
  if (event.target.classList.contains("box0") && game.gameBoard.board[0] === -1) {
    tableContainer = event.target.closest(".box0")
    tableContainer.innerHTML = playNow.innerHTML
    currentBox = tableContainer.innerHTML
    displayPlayer()
    game.gameBoard.board[0] = updateBoard()
    diplayWinner()
  } else if (event.target.classList.contains("box1") && game.gameBoard.board[1] === -1) {
    tableContainer = event.target.closest(".box1")
    tableContainer.innerHTML = playNow.innerHTML
    displayPlayer()
    game.gameBoard.board[1] = updateBoard()
    diplayWinner()
  } else if (event.target.classList.contains("box2") && game.gameBoard.board[2] === -1) {
    tableContainer = event.target.closest(".box2")
    tableContainer.innerHTML = playNow.innerHTML
    displayPlayer()
    game.gameBoard.board[2] = updateBoard()
    diplayWinner()
  } else if (event.target.classList.contains("box3") && game.gameBoard.board[3] === -1) {
    tableContainer = event.target.closest(".box3")
    tableContainer.innerHTML = playNow.innerHTML
    displayPlayer();
    game.gameBoard.board[3] = updateBoard()
    playerOneScore.innerHTML = game.playerOne.wins
    diplayWinner()
  } else if (event.target.classList.contains("box4") && game.gameBoard.board[4] === -1) {
    tableContainer = event.target.closest(".box4")
    tableContainer.innerHTML = playNow.innerHTML
    displayPlayer()
    game.gameBoard.board[4] = updateBoard()
    diplayWinner()
  } else if (event.target.classList.contains("box5") && game.gameBoard.board[5] === -1) {
    tableContainer = event.target.closest(".box5")
    tableContainer.innerHTML = playNow.innerHTML
    displayPlayer()
    game.gameBoard.board[5] = updateBoard()
    diplayWinner()
  } else if (event.target.classList.contains("box6") && game.gameBoard.board[6] === -1) {
    tableContainer = event.target.closest(".box6")
    tableContainer.innerHTML = playNow.innerHTML
    displayPlayer()
    game.gameBoard.board[6] = updateBoard()
    diplayWinner()
  } else if (event.target.classList.contains("box7") && game.gameBoard.board[7] === -1) {
    tableContainer = event.target.closest(".box7")
    tableContainer.innerHTML = playNow.innerHTML
    displayPlayer()
    game.gameBoard.board[7] = updateBoard()
    diplayWinner()
  } else if (event.target.classList.contains("box8") && game.gameBoard.board[8] === -1) {
    tableContainer = event.target.closest(".box8")
    tableContainer.innerHTML = playNow.innerHTML
    displayPlayer()
    game.gameBoard.board[8] = updateBoard()
    diplayWinner()
  }
}
