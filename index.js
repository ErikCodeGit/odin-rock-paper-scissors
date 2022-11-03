const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];

function playRound(computerChoice, playerChoice) {
    let playerLost = false;
    if (computerChoice === playerChoice) {
        return;
    } else if (
        computerChoice === 'ROCK' && playerChoice === 'SCISSORS' ||
        computerChoice === 'PAPER' && playerChoice === 'ROCK' ||
        computerChoice === 'SCISSORS' && playerChoice === 'PAPER') {
        playerLost = true;
    } else {
        playerLost = false;
    }
    return playerLost ?
        `You Lost! ${computerChoice} beats ${playerChoice}` :
        `You Won! ${playerChoice} beats ${computerChoice}`
}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    return CHOICES[choice];
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = validateChoice(prompt("Enter your choice")).toUpperCase();
        const computerChoice = getComputerChoice();
        console.log(`Your choice: ${playerChoice}`);
        console.log(`Computer's choice: ${computerChoice}`);
        console.log(playRound(computerChoice, playerChoice) || 'Draw!');
    }
}

function validateChoice(choice) {
    choice = choice || "";
    while(!CHOICES.includes(choice.toUpperCase())){
        choice = prompt("Please enter a valid choice") || "";
    }
    return choice;
}