class Game {
  constructor() {
    this.playerOne = new Player(0, "❤️");
    this.playerTwo = new Player(3, "👻");
    this.gameBoard = new Board();
    this.whoseTurn = this.playerOne.token;
    this.endOfgame = false;

  }
  //chaning who plays next
  updateTurn() {
    let currentPlayer;
    if (this.whoseTurn !== this.playerTwo.token) {
      currentPlayer = this.playerOne.token;
      this.whoseTurn = this.playerTwo.token;
      return currentPlayer;
    } else if (this.whoseTurn !== this.playerOne.token) {
      currentPlayer = this.playerTwo.token;
      this.whoseTurn = this.playerOne.token;
      return currentPlayer;
    }
  }
  //checking all for winner
  checkForWin() {
    let posibilityOne = this.gameBoard.board[0] + this.gameBoard.board[1] + this.gameBoard.board[2]
    let posibilityTwo = this.gameBoard.board[3] + this.gameBoard.board[4] + this.gameBoard.board[5];
    let posibilityThree = this.gameBoard.board[6] + this.gameBoard.board[7] + this.gameBoard.board[8];
    let posibilityFour = this.gameBoard.board[0] + this.gameBoard.board[3] + this.gameBoard.board[6];
    let posibilityFive = this.gameBoard.board[1] + this.gameBoard.board[4] + this.gameBoard.board[7];
    let posibilitySix = this.gameBoard.board[2] + this.gameBoard.board[5] + this.gameBoard.board[8];
    let posibilitySeven = this.gameBoard.board[0] + this.gameBoard.board[4] + this.gameBoard.board[8];
    let posibilityEight = this.gameBoard.board[2] + this.gameBoard.board[4] + this.gameBoard.board[6];
    //checking for winner // updating players scores
    if (
      posibilityOne === 0 || posibilityTwo === 0 ||
      posibilityThree === 0 || posibilityFour === 0 ||
      posibilityFive === 0 || posibilitySix === 0 ||
      posibilitySeven === 0 || posibilityEight === 0) {
      this.playerOne.increaseWins();
      this.endOfgame = true;
      return this.playerOne.token;
    }
    if (
      posibilityOne === 9 || posibilityTwo === 9 ||
      posibilityThree === 9 || posibilityFour === 9 ||
      posibilityFive === 9 || posibilitySix === 9 ||
      posibilitySeven === 9 || posibilityEight === 9) {
      this.playerTwo.increaseWins();
      this.endOfgame = true;
      return this.playerTwo.token;
    } else {
      this.endOfgame = true;
      return "It's A Draw";
    }
  }
  //reset gameBoard when game ends
  resetGame() {
    if (this.endOfgame === true) {
      this.gameBoard.board = [
        -1, -1, -1,
        -1, -1, -1,
        -1, -1, -1,
      ];
    }
  }
}
