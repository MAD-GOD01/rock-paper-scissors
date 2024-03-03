// Declaring Global constant variables
const choices = ["rock", "paper", "scissors"]; 

// Winning Scenarios
const tie = "It's a tie! Both chose same.";
const rockWins = " Rock beats Scissors";
const paperWins = " Paper beats Rock.";
const scissorsWins = " Scissors beat Paper";

// Player Win or Lose Scenario
const playerWins = "You Win!,";
const playerLoses = "You Lose!,";


// Function to get a random choice from rock, paper, scissors from the Computer
function getComputerChoice(){
    // Select random index
    let randomIndex = Math.floor(Math.random()* choices.length);

    // Return a random value from Array(choices) using randomIndex
    return choices[randomIndex];
}


// Plays a single round 
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Case: Tie, Both play same choice
    if(playerSelection == computerSelection)
        return tie;

    // Player plays rock
    else if(playerSelection ==choices[0]){
        //  Against Paper 
        if(computerSelection ==choices[1])
            return (playerLoses+paperWins);
        // Against Scissors
        else if(computerSelection ==choices[2])
            return (playerWins+rockWins);
    }

    // Player plays paper
    else if(playerSelection ==choices[1]){
        //  Against rock 
        if(computerSelection ==choices[0])
            return (playerWins+paperWins);
        // Against Scissors
        else if(computerSelection ==choices[2])
            return (playerLoses+scissorsWins);
    }

    // Player plays Scissor
    else if(playerSelection ==choices[2]){
        //  Against rock 
        if(computerSelection ==choices[0])
            return (playerLoses+scissorsWins);
        // Against paper
        else if(computerSelection ==choices[1])
            return (playerWins+scissorsWins);
    }
}

function playGame(){
    let counter = 0;
    let playerWinCount = 0;
    let computerWinCount = 0;
    console.log("[Rock, Paper, Scissors]");
    while(counter !== 5){
        counter++;
        let choice = prompt("Enter Your Choice: ");
        let result = playRound(choice,getComputerChoice());
        console.log(result);
        if(result.includes(playerWins))
            playerWinCount++;
        else if(result.includes(playerLoses))
            computerWinCount++;
    }
    if(playerWinCount > computerWinCount)
        console.log("YAY!!!    You Won the Game.");
    else if(computerWinCount > playerWinCount)
        console.log("Bad Luck! You Lost the Game Try again next time.");
    else
    console.log("Oops! It is a Tie.");
}

playGame();

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));