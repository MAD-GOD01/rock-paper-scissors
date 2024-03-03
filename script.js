function getComputerChoice(){

    // Array containing choices
    const choices = ["Rock", "Paper", "Scissors"];

    // Select random index
    let randomIndex = Math.floor(Math.random()* choices.length);

    // Return a random value from Array(choices) using randomIndex
    return choices[randomIndex];
}

// console.log(getComputerChoice());