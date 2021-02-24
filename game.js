function playGame() {
  console.log("welcome!")
  
  let rounds = prompt("How many rounds to play?");

  let regex = /^[0-9]*$/;
  let checkRounds = regex.exec(rounds); //checks if user input is numbers

  // Begin Condition
  if (typeof(rounds)=="string" && checkRounds){
    console.log(rounds);
  } else if (!checkRounds){
    alert("Please enter a number")
    playGame();
  }
}

// playGame()
// To do
// begin condition
//  take user input for rounds

// playing condition
//  generate computer selection
//  take user selection
//    case insensitive
//    have default value of rock
//  compare answers for winner

// win condition
//  scissor beats paper
//  paper beats rock
//  rock beats scissor
//  show winner
//  show current total score

// end condition
//  show final score


// extra
// validate user inputs
// taunt user if loser
// cheer user if winner