//business logic
// var diceRoll = 0;
// var roundTotal = 0;
// var totalScore = 0;
//
// function PlayerInfo (name, diceRoll, roundTotal, totalScore) {
//   this.playerName = name;
//   this.playerDiceRoll = diceRoll;
//   this.playerRoundTotal = roundTotal;
//   this.playerTotalScore = totalScore;
// }

// PlayerInfo.prototype.roundScore = function () {
//   roundTotal += this.player1DiceRoll
// }
//
// PlayerInfo.prototype.totalScore = function () {
//   totalScore += this.playerRoundTotal
// }
//user Logic
//
// var dieRoll = function () {
//   var dieCount = Math.floor( Math.random() * 6) + 1;
//   return dieCount;
// }

// debugger;
var tempScore = 0;
var totalScore = 0;
var roll = 0;

var throwdice = function () {
  roll = Math.floor(6*Math.random()) + 1;
  if (roll === 1) {
    tempScore = 0;
  } else {
    tempScore += roll;
  }
  return roll;
}

var runningScore = function () {
  totalScore += tempScore;
  return totalScore;
}





$(document).ready(function() {
  $("button#player1-roll").click(function(event){
    event.preventDefault();

    var result = throwdice();

    $("#die-roll-1").text(result);
    $("#round-total-1").text(tempScore);
  });

  $("button#player1-hold").click(function(event){
    $("#total-score-1").text(runningScore);
    tempScore = 0;
    $("#round-total-1").empty();
    $("#die-roll-1").empty();

});

});
