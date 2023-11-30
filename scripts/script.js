// Get DOM elements
const rollButton = document.getElementById("roll-button");
const resetButton = document.getElementById("reset-button");
const showMessage = document.getElementById("show-message");
const userScoreElement = document.getElementById("user-score");
const userScoreTotalElement = document.getElementById("user-total-score");
const computerScoreElement = document.getElementById("computer-score");
const computerScoreTotalElement = document.getElementById(
  "computer-total-score"
);
const userDie1Element = document.getElementById("user-die-1");
const userDie2Element = document.getElementById("user-die-2");
const computerDie1Element = document.getElementById("computer-die-1");
const computerDie2Element = document.getElementById("computer-die-2");
let totalUserScore = 0;
let totalComputerScore = 0;
let rollCounter = 0;
let userScore = 0;
let computerScore = 0;

// Add event listener to roll button
rollButton.addEventListener("click", function () {
  // Roll dice for the user and computer
  rollCounter = rollCounter + 1;

  const userDice1 = rollDice();
  const userDice2 = rollDice();
  const computerDice1 = rollDice();
  const computerDice2 = rollDice();
  
  if (userDice1 == 1 || userDice2 == 1) {
    userScore = 0;
  } else if (userDice1 === userDice2) {
    userScore = (userDice1 + userDice2) * 2;

    //pop up window
    var popup = window.open('', 'popup', 'width=300,height=200');
    popup.document.write('<p>WOW</p><p>Bounes score, your dice are the same!</p>');

    // Close the popup after 5 seconds
    setTimeout(function () {
      popup.close();
    }, 5000);



  } else {
    userScore = userDice1 + userDice2;
  }
  if (computerDice1 == 1 || computerDice2 == 1) {
    computerScore = 0;
  } else if (computerDice1 === computerDice2) {
    computerScore = (computerDice1 + computerDice2) * 2;
  } else {
    computerScore = computerDice1 + computerDice2;
  }
  // Update the dice images in the UI
  userDie1Element.src = `images/dice${userDice1}.png`;
  userDie2Element.src = `images/dice${userDice2}.png`;
  computerDie1Element.src = `images/dice${computerDice1}.png`;
  computerDie2Element.src = `images/dice${computerDice2}.png`;
  totalUserScore = totalUserScore + userScore;
  totalComputerScore = totalComputerScore + computerScore;

  // Update the scores in the UI
  userScoreElement.textContent = userScore;
  userScoreTotalElement.textContent = totalUserScore;
  computerScoreTotalElement.textContent = totalComputerScore;
  computerScoreElement.textContent = computerScore;
  if (rollCounter == 3) {
    //Determine the winner
    let winner;
    if (totalUserScore > totalComputerScore) {
      winner = "You";
    } else if (totalComputerScore > totalUserScore) {
      winner = "The computer";
    } else {
      winner = "It was a tie";
    }
    const message = ` ${winner} won with a score of ${Math.max(
      totalUserScore,
      totalComputerScore
    )}.`;
    console.log("m", message);
    showMessage.textContent = message;
  }
});
resetButton.addEventListener("click", function () {

     totalUserScore = 0;
     totalComputerScore = 0;
     rollCounter = 0;
     userScore = 0;
     computerScore = 0;
     userScoreElement.textContent = userScore;
     userScoreTotalElement.textContent = totalUserScore;
     computerScoreTotalElement.textContent = totalComputerScore;
     computerScoreElement.textContent = computerScore;
     userDie1Element.src = `images/dice1.png`;
     userDie2Element.src = `images/dice1.png`;
     computerDie1Element.src = `images/dice1.png`;
     computerDie2Element.src = `images/dice1.png`;
 
 
});

// Function to roll a single die
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
