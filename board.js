class Board {
  constructor() {
    this.board = [-1, -1, -1,
                  -1, -1, -1,
                  -1, -1, -1,
                ];
    this.winnerState = [];
  }
  checkForWin(){

    var posibilityOne  = this.board[0] + this.board[1] + this.board[2];
    var posibilityTwo  = this.board[3] + this.board[4] + this.board[5];
    var posibilityThree  = this.board[6] + this.board[7] + this.board[8];
    var posibilityFour  = this.board[0] + this.board[3] + this.board[6];
    var posibilityFive  = this.board[1] + this.board[4] + this.board[7];
    var posibilitySix  = this.board[2] + this.board[5] + this.board[8];
    var posibilitySeven  = this.board[0] + this.board[4] + this.board[8];
    var posibilityEight  = this.board[2] + this.board[4] + this.board[6];
    if (
      posibilityOne === 3 || posibilityTwo === 3 ||
      posibilityThree === 3 || posibilityFour === 3 ||
      posibilityFive === 3 || posibilitySix === 3 ||
      posibilitySeven === 3 || posibilityEight === 3){
        console.log("in if");
        return true;

      }
      else if (
        posibilityOne === 9 || posibilityTwo === 9 ||
        posibilityThree === 9 || posibilityFour === 9 ||
        posibilityFive === 9 || posibilitySix === 9 ||
        posibilitySeven === 9 || posibilityEight === 9) {
          console.log("In Else");
          return true

      }
    }
    // updateBoard(position, value) {
    //   this.board.shift()
    //   this.board.push(position)
    // }

}
