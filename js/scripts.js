function Players(player, totalScore) {
  this.user = player;
  this.currentScore = 0;
  this.totalScore = totalScore;
}



Players.prototype.diceRoll = function() {
  return Math.floor((Math.random()*6) +1);
}

