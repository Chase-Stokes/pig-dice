Rolls dice if not 1 then keep playing or press stop
function - dice
function - switching turns
- (player1, player2) current points
- (player1, player2) total points = total + sum of current points

dice constructor = current roll
scoreboard constructor = total , current score

currentPoint = 0;

Math.floor((Math.random()*6) +1);

Descibe diceRoll()
Test: It will return a value of 1-6
Code: diceRoll() {
  Math.floor((Math.random()*6) +1);
}
Expected Output: ("1-6") ~ completed

Test: It will add to currentScore if the roll is not 1
Code: playerOne.diceRoll()
playerOne 
Expected Output: sum of currentScore ~ completed

Test: It will return currentScore = 0 if 1 is rolled
code: playerOne.diceRoll(1)
playerOne 
Expected Output: (0) ~ completed