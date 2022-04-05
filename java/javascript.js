// Initializing
console.log("Hello");

// Computer randomly picks R, P or S
function computerPlay() {
    const randomGen = Math.ceil(Math.random() * 3);     console.log(randomGen);
    if (randomGen === 1) {
        return "Rock";
    } else if (randomGen === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Compares the option of the two players and declares the winner.
// Or declares a draw if they have similar choices.
function playRound(playerSelection, computerSelection) {
    // If the human player wins
    if ((computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") || (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") || (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock")) {
        alert(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
    } 
    // If the computer wins
    else if ((computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") || (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") || (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper")) {
        alert(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
    }
    // If draw
    else if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        alert(`Draw! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} and ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
    } else {
        alert('Please enter either one of "Rock", "Paper" or "Scissors" only.')
    }
}

// Receiver of the Player's input
let playerInput = prompt("Rock, Paper or Scissors? (Please enter your choice)", "");

// Calling the gameDecider function
playRound(playerInput, computerPlay());