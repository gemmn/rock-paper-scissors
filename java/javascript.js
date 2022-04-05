// Initializing
console.log("Hello");

let wins = 0; // Tallies wins per round

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
        wins++;
        alert(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
    } 
    // If the computer wins
    else if ((computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") || (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") || (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper")) {
        alert(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}`);
    }
    // If draw
    else if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        alert(`Draw! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} and ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
    } 
    // If the input does correspond to the given and undefined
    else if (playerSelection.toLowerCase() != "rock", "paper", "scissors"){
        alert('Please only enter either one of "Rock", "Paper" or "Scissors".');
    }
    else {
        alert("Something wrong happened.");
    }
}

function game() {
    for (let i=0; i < 5; i++) {
        // Calling the playRound function and asking the user of their input
        playRound(prompt("Rock, Paper or Scissors? (Please enter your choice)", ""), computerPlay());

    }
    alert(`You won ${wins} time/s. Thanks for playing.`)
    if (confirm("Do you want to play again?")) {
        wins = 0;
        game();
    }
}

// Calling the game function to play RPS
game();

// Add some type of message when the player chooses to cancel playing & conditional messages for scores