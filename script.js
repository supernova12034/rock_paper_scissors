function computerPlay() {
    let randomNum1 = Math.random() * (7 - 0) + 0;
  
    if (randomNum1 <= 2) {
      return "rock";
    }
    else if (randomNum1 > 2 && randomNum1 <= 4) {
      return "paper";
    }
    else {
      return "scissors";
    }
  }
  
  function playerSelection() {
    let playerInput = prompt("Please enter rock, paper, scissors: ");
  
    if (playerInput == "rock") {
      return "rock";
    }
    else if (playerInput == "paper") {
      return "paper";
    }
  
    else if (playerInput == "scissors") {
      return "scissors";
    }
  }
  
  
  let playerScore = 0;
  let computerScore = 0;
  
  function round(a, b) {
    let player = playerSelection();
    let computer = computerPlay();
    let playerWon = "the player has won";
    let tie = "its a tie";
    let computerWon = "the computer has won";
  
  
    if (player == "rock" && computer == "scissors") {
      playerScore++;
      return console.log(playerWon);
    }
  
    else if (player == "scissors" && computer == "paper") {
      playerScore++;
      return console.log(playerWon);
    }
  
    else if (player == "paper" && computer == "rock") {
      playerScore++;
      return console.log(playerWon);
    }
    // Player winning section
  
  
  
    if (player == "rock" && computer == "rock") {
  
      return console.log(tie);
    }
    else if (player == "scissors" && computer == "scissors") {
  
      return console.log(tie);
    }
  
    else if (player == "paper" && computer == "paper") {
  
      return console.log(tie);
    }
    // Tie section.
  
  
  
    if (computer == "rock" && player == "scissors") {
      computerScore++;
      console.log(computer);
      return console.log(computerWon);
    }
    else if (computer == "scissors" && player == "paper") {
      computerScore++;
      console.log(computer);
      return console.log(computerWon);
    }
    else if (computer == "paper" && player == "rock") {
      computerScore++;
      console.log(computer);
      return console.log(computerWon);
    }
    //Computer winning section 
  }
  
  
  
  
  function game(){
  for (let i = 0; i < 6; i++) {
  round(playerSelection,computerPlay);
  
  }
  
  
  if (playerScore> computerScore){
  return `Player is the final winner, with the score of ${playerScore}`;
  }
  else if (computerScore >playerScore){
  return `Computer is the final winner, with the score of ${computerScore}`;
  }
  
  else if (playerScore == computerScore){
  return `The final score is a tie`;
  }
  
  }
  
  
  game();
  
  /*
  1)
  for incrementing stuff over loops, 
  its best to create the variable in global scope so it 
  doesnt get set to zero every time.
  
  2)
  also for some reason with functions
  if you return them multiple times, they'll only
  work once for some reason, but if you console.log
  it will work fine and return the result as many times as the function is called.
  
  This is something I have encountered many times and elsewhere as well.
   */