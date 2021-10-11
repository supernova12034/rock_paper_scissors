let button1 = document.querySelector(".b1");
let button2 = document.querySelector(".b2");
let button3 = document.querySelector(".b3");

let result = document.querySelector(".output");

let playerInput;

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
      return document.querySelector(".output").textContent = playerWon;
    }
  
    else if (player == "scissors" && computer == "paper") {
      playerScore++;
      return document.querySelector(".output").textContent = playerWon;
    }
  
    else if (player == "paper" && computer == "rock") {
      playerScore++;
      return document.querySelector(".output").textContent = playerWon;
    }
    // Player winning section
  
  
  
    if (player == "rock" && computer == "rock") {
  
        return document.querySelector(".output").textContent = tie;
    }
    else if (player == "scissors" && computer == "scissors") {
  
        return document.querySelector(".output").textContent = tie;
    }
  
    else if (player == "paper" && computer == "paper") {
  
        return document.querySelector(".output").textContent = tie;
    }
    // Tie section.
  
  
  
    if (computer == "rock" && player == "scissors") {
      computerScore++;
      return document.querySelector(".output").textContent = computerWon;
    }
    else if (computer == "scissors" && player == "paper") {
      computerScore++;
      return document.querySelector(".output").textContent = computerWon;
    }
    else if (computer == "paper" && player == "rock") {
      computerScore++;
      return document.querySelector(".output").textContent = computerWon;
    }
    //Computer winning section 
  }
  
  
  
  
  function game(){
  for (let i = 0; i < 6; i++) {
  round(playerSelection,computerPlay);
  
  }
  
  
  if (playerScore> computerScore){
    return document.querySelector(".output2").textContent =
   `Player is the final winner, with the score of ${playerScore}`;
  }
  else if (computerScore >playerScore){
    return document.querySelector(".output2").textContent =
   `Computer is the final winner, with the score of ${computerScore}`;
  }
  
  else if (playerScore == computerScore){
    return document.querySelector(".output2").textContent = `The final score is a tie`;
  }
  
  }
  
  button1.addEventListener('click',function(e){
    playerInput = "rock";
    game();
    resetScore();
  });

  button2.addEventListener('click',function(e){
    playerInput = "paper";
    game();
    resetScore();
  });

  button3.addEventListener('click',function(e){
    playerInput = "scissors";
    game();
    resetScore();
  });



  function resetScore(){
      playerScore = 0;
      computerScore = 0;
  }

//   game();
  
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