class Game {
  constructor() {
    this.playerOne = new Player(1,"❤️")
    this.playerTwo = new Player(3,"👻")
    this.gameBord = new Board();
    this.turn = "x";
  }

}
