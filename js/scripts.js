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
      this.checkWinner();
    } else if (number === 1) {
      this.currentScore = 0;
      this.newTotal();
    }
       return number;
}

Players.prototype.newTotal = function() {
  this.totalScore += this.currentScore;
  this.currentScore = 0;
  this.checkWinner();
} 

Players.prototype.checkWinner = function() {
  if (this.currentScore >=100 || this.totalScore >= 100){
    alert("You are the Winner!!!")
  }
}

let playerOne = new Players("Player 1", 0)
let playerTwo = new Players("Player 2", 0)

//playerOne.diceRoll()
//playerOne

