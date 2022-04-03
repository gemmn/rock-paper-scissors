// Initializing
console.log("Hello World");

// Computer randomly picks R, P or S
function computerPLay() {
    const randomGen = Math.ceil(Math.random() * 3); console.log(randomGen);
    if (randomGen === 1) {
        return "Rock";
    } else if (randomGen === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
} console.log(computerPLay());