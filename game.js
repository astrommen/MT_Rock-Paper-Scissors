function playGame() {
  console.log("welcome!")
  
  let rounds = prompt("How many rounds to play?");
 
  let regex = /^[0-9]*$/;
  let checkRounds = regex.exec(rounds); //checks if user input is numbers

  // Begin Condition
  if (typeof(rounds)=="string" && checkRounds){

    let cpu;

    let userScore = 0;
    let cpuScore = 0;
    let tie = 0;

    // Playing Condition
    for (let i = 0; i < rounds; i++){
      
      console.log("round:", i+1);

      // generate computer selection where 0 = rock, 1 = paper, 2 = scissors
      let computerChoice = Math.floor(Math.random() * 3);
      let userChoice = prompt("Type rock, paper, or scissor");

      // let regexUser = /^[a-zA-Z]+$/;
      // new regexUser looks for whole words: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch05s02.html
      let regexUser = /\b(?:rock|paper|scissors)\b/gi;
      let checkChoice = regexUser.exec(userChoice);

      if (checkChoice) {
        switch(computerChoice) {
          case 0:
            cpu = "rock";
            if (userChoice === "rock") {
              tie++;
            } else if (userChoice === "paper") {
              userScore++;
            } else {
              cpuScore++;
            }
            break;
            
          case 1:
            cpu = "paper";
            if (userChoice === "paper") {
              tie++;
            } else if (userChoice === "scissors") {
              userScore++;
            } else {
              cpuScore++;
            }
            break;

          case 2:
            cpu = "scissors";
            if (userChoice === "scissors") {
              tie++;
            } else if (userChoice === "rock") {
              userScore++;
            } else {
              cpuScore++;
            }
            break;

        }

        console.log("player chose", userChoice, "and cpu chose", cpu);
        console.log("score: player-", userScore, "cpu-", cpuScore, "ties-", tie);

      } else {
        alert("Invalid selection");
        console.clear();
        playGame();
      }

    }
  // } else if (!checkRounds){
  } else {
    alert("Please enter a number");
    console.clear();
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