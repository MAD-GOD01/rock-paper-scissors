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
function singleRound(playerSelection, computerSelection){
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

// console.log(getComputerChoice());