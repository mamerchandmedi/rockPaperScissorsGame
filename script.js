console.log("Hello world")

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice(){
    let humanChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(humanChoice)) {
        humanChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return humanChoice;
}




function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win this round!");
            humanScore++;
        } else {
            console.log("Computer wins this round!");
            computerScore++;
        }
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    
    }
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
    const playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
    if (playAgain === "yes") {
        playGame();
    } else {
        console.log("Thanks for playing!");
    }

}

playGame()