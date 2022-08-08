class Game {
  constructor() {
    this.playerOne = new Player(0, "❤️")
    this.playerTwo = new Player(3, "👻")
    this.gameBord = new Board();
    this.whoseTurn = this.playerOne.token;
    this.currentId;
  }
  //chaning who plays next
  updateTurn() {
    var currentPlayer;
    console.log("in the method");
    if (this.whoseTurn !== this.playerTwo.token) {
      //console.log("in if statment");
      currentPlayer = this.playerOne.token;
      this.currentId = this.playerOne.id
      this.whoseTurn = this.playerTwo.token;
      console.log(currentPlayer);
      return currentPlayer;
    } else if (this.whoseTurn !== this.playerOne.token) {
      //console.log("IN elseif");
      currentPlayer = this.playerTwo.token
      this.currentId = this.playerTwo.id
      this.whoseTurn = this.playerOne.token;
      console.log(currentPlayer);
      return currentPlayer;
    }
  }
  checkForWin(){
    var posibilityOne  = this.gameBord.board[0] + this.gameBord.board[1] + this.gameBord.board[2];
    var posibilityTwo  = this.gameBord.board[3] + this.gameBord.board[4] + this.gameBord.board[5];
    var posibilityThree  = this.gameBord.board[6] + this.gameBord.board[7] + this.gameBord.board[8];
    var posibilityFour  = this.gameBord.board[0] + this.gameBord.board[3] + this.gameBord.board[6];
    var posibilityFive  = this.gameBord.board[1] + this.gameBord.board[4] + this.gameBord.board[7];
    var posibilitySix  = this.gameBord.board[2] + this.gameBord.board[5] + this.gameBord.board[8];
    var posibilitySeven  = this.gameBord.board[0] + this.gameBord.board[4] + this.gameBord.board[8];
    var posibilityEight  = this.gameBord.board[2] + this.gameBord.board[4] + this.gameBord.board[6];
    //checking for winner
    if (
      posibilityOne === 0 || posibilityTwo === 0 ||
      posibilityThree === 0 || posibilityFour === 0 ||
      posibilityFive === 0 || posibilitySix === 0 ||
      posibilitySeven === 0 || posibilityEight === 0) {
      return this.playerOne.increaseWins();
    } else if (
      posibilityOne === 9 || posibilityTwo === 9 ||
      posibilityThree === 9 || posibilityFour === 9 ||
      posibilityFive === 9 || posibilitySix === 9 ||
      posibilitySeven === 9 || posibilityEight === 9) {
      return this.playerTwo.increaseWins();
      }
    }

}
