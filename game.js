class Game {
  constructor() {
    this.playerOne = new Player(0, "❤️")
    this.playerTwo = new Player(3, "👻")
    this.gameBoard = new Board();
    this.whoseTurn = this.playerOne.token;
    this.endOfgame = false
    this.currentId;
  }
  //chaning who plays next
  updateTurn() {
    var currentPlayer;
    console.log("in the method");
    if (this.whoseTurn !== this.playerTwo.token) {
      console.log(this.endOfgame);
      //console.log("in if statment");
      currentPlayer = this.playerOne.token;
      this.currentId = this.playerOne.id
      this.whoseTurn = this.playerTwo.token;
      console.log(currentPlayer);
      return currentPlayer;
    } else if (this.whoseTurn !== this.playerOne.token) {
      console.log(this.endOfgame);
      currentPlayer = this.playerTwo.token
      this.currentId = this.playerTwo.id
      this.whoseTurn = this.playerOne.token;
      console.log(currentPlayer);
      return currentPlayer;
    }
  }
  checkForWin() {
    var posibilityOne = this.gameBoard.board[0] + this.gameBoard.board[1] + this.gameBoard.board[2];
    console.log(posibilityOne);
    var posibilityTwo = this.gameBoard.board[3] + this.gameBoard.board[4] + this.gameBoard.board[5];
    console.log(posibilityTwo);
    var posibilityThree = this.gameBoard.board[6] + this.gameBoard.board[7] + this.gameBoard.board[8];
console.log(posibilityThree);
    var posibilityFour = this.gameBoard.board[0] + this.gameBoard.board[3] + this.gameBoard.board[6];
console.log(posibilityFour);
    var posibilityFive = this.gameBoard.board[1] + this.gameBoard.board[4] + this.gameBoard.board[7];
console.log(posibilityFive);
    var posibilitySix = this.gameBoard.board[2] + this.gameBoard.board[5] + this.gameBoard.board[8];
console.log(posibilitySix);
    var posibilitySeven = this.gameBoard.board[0] + this.gameBoard.board[4] + this.gameBoard.board[8];
console.log(posibilitySeven);
    var posibilityEight = this.gameBoard.board[2] + this.gameBoard.board[4] + this.gameBoard.board[6];
console.log(posibilityEight);
    //checking for winner // updating players scores
    if (
      posibilityOne === 0 || posibilityTwo === 0 ||
      posibilityThree === 0 || posibilityFour === 0 ||
      posibilityFive === 0 || posibilitySix === 0 ||
      posibilitySeven === 0 || posibilityEight === 0) {

      console.log("playerOne wins");
      this.playerOne.increaseWins()
      this.endOfgame = true;
      console.log(this.endOfgame);
      this.whoseTurn = this.playerTwo.token
      return this.playerOne.token
    } if (
      posibilityOne === 9 || posibilityTwo === 9 ||
      posibilityThree === 9 || posibilityFour === 9 ||
      posibilityFive === 9 || posibilitySix === 9 ||
      posibilitySeven === 9 || posibilityEight === 9) {
      this.playerTwo.increaseWins()
      this.endOfgame = true;
      this.whoseTurn = this.playerOne.token
      return this.playerTwo.token;
    } else {
      this.endOfgame = true;
      return "It's A Draw"
    }
  }
  //reset gameBor
  resetGame() {
    if (this.endOfgame === true) {
      this.gameBoard.board = [-1, -1, -1,
        -1, -1, -1,
        -1, -1, -1,
      ];
    }


  }

}
