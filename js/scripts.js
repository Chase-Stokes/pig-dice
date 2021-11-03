function Players(user, currentScore, totalScore) {
  this.user = user;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}



Players.prototype.diceRoll = function() {
  let number = Math.floor((Math.random() * 6) + 1);
    if (number != 1) {
      this.currentScore += number;
    }   
    return number;
}

let playerOne = new Players("player1", 0)

//playerOne.diceRoll()
//playerOne
