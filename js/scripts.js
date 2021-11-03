//Business Logic
function Players(user, currentScore, totalScore) {
  this.user = user;
  this.currentScore = 0;
  this.totalScore = 0;
}

Players.prototype.diceRoll = function() {
  let number = Math.floor((Math.random() * 6) + 1);
    if (number != 1) {
      this.currentScore += number;
    } else if (number === 1) {
      this.currentScore = 0;
      this.switchTurn();
    }
       return number;
}

Players.prototype.switchTurn = function() {
  this.totalScore += this.currentScore;
  this.currentScore = 0;
}

let playerOne = new Players("Player 1", 0)
let playerTwo = new Players("Player 2", 0)

//playerOne.diceRoll()
//playerOne

