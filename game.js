class Game {
  constructor() {
    this.playerOne = new Player(1, "❤️")
    this.playerTwo = new Player(3, "👻")
    this.gameBord = new Board();
    this.whoseTurn = this.playerOne.token;
  }
  updateTurn() {
    var currentPlayer;
    console.log("in the method");
    if (this.whoseTurn !== this.playerTwo.token) {
      console.log("in if statment");
      currentPlayer = this.playerOne.token;
      this.whoseTurn = this.playerTwo.token;
      console.log(currentPlayer);
      return currentPlayer;
;
    } else if (this.whoseTurn !== this.playerOne.token) {
      console.log("IN elseif");
      currentPlayer = this.playerTwo.token
      this.whoseTurn = this.playerOne.token;
      console.log(currentPlayer);
      return currentPlayer;
    }
  }
}
