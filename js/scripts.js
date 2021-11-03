//Business Logic
function Players(user, currentScore, totalScore) {
  this.user = user;
  this.currentScore = 0;
  this.totalScore = 0;
}

function PlayerTurn(){
  playerOneTurn = true
}

function switchTurn(bool) {
  let newBool = !bool;
  return newBool;
}

Players.prototype.diceRoll = function() {
  let number = Math.floor((Math.random() * 6) + 1);  
    if (number != 1) {
      this.currentScore += number;
      this.checkWinner();
    } else if (number === 1) {
      this.currentScore = 0;
      switchTurn(playerTurn.playerOneTurn);
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



//UI Logic
let playerTurn = new PlayerTurn();
let playerOne = new Players("Player 1", 0);
let playerTwo = new Players("Player 2", 0);

//function showCurrentAndTotal(playerOne, playerTwo) {
 
//}

$(document).ready(function(){

  $(".p1current").html(playerOne.currentScore);
  $(".p1total").html(playerOne.totalScore);
  $(".p2current").html(playerTwo.currentScore);
  $(".p2total").html(playerTwo.totalScore);
  //console.log(diceRoll)
  /*$("#roll").click(function () {
    playerOne.diceRoll();
  });
 
  $("#hold").click(function() {
    totalScore.hold();
  })*/
});



//playerOne.diceRoll()
//playerOne

