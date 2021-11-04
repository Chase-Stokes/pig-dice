//Business Logic
function Players(currentScore, totalScore) {
  this.currentScore = 0;
  this.totalScore = 0;
}

// function PlayerTurn(){
//   let playerOneTurn = true;
//   // let playerTwoTurn = false;
// }

// Players.prototype.switchTurn = function() {
//   // let playerOne = true;
//   // let playerTwo = false;
//   if (playerTurn === true) {
//     playerOne.diceRoll();
//   }else {
//     playerTwo.diceRoll();
  
//   }
   //return newBool;
//}


Players.prototype.diceRoll = function() {
  let number = Math.floor((Math.random() * 6) + 1);  
    if (number != 1) {
      this.currentScore += number;
      this.checkWinner();
    } else if (number === 1) {
      //toggle();
      this.currentScore = 0;
      
      // this.switchTurn();
      // playerTurn === !playerTurn;
      // switchTurn(/*playerTurn.playerOneTurn*/);
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
// let playerTurn = new PlayerTurn();
// // let playerTurn = true;

/*function toggle() {
  $("#roll", "#hold").toggle();
  $("#roll1", "#hold1").toggle();
}*/
let playerOne = new Players();
let playerTwo = new Players();

//function showCurrentAndTotal(playerOne, playerTwo) {
 
//}

$(document).ready(function(){
  $(".p1current").text(playerOne.currentScore);
  $(".p1total").text(playerOne.totalScore);
  $(".p2current").text(playerTwo.currentScore);
  $(".p2total").text(playerTwo.totalScore);

  $("#roll").on("click", function () {
    playerOne.diceRoll();
      $(".p1current").text(playerOne.currentScore);
  });
  $("#roll1").on("click", function(){
    playerTwo.diceRoll();
    $(".p2current").text(playerTwo.currentScore);
  })
 
  $("#hold").on("click", function() {
    playerOne.newTotal();
    $(".p1total").text(playerOne.totalScore);
    //toggle();
  });
  $("#hold1").on("click", function() {
    playerTwo.newTotal();
    $(".p2total").text(playerTwo.totalScore);
   // toggle();
  });
});



//playerOne.diceRoll()
//playerOne

