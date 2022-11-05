const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];

const playerButtons = document.querySelectorAll('.container.player > button');
const computerButtons = document.querySelectorAll('.container.computer > button');
const output = document.querySelector('.output');
const playerScoreText = document.querySelector('#playerScorePara > span');
const computerScoreText = document.querySelector('#computerScorePara > span');

playerButtons.forEach((button) => {
    button.addEventListener('click', (e) => buttonClicked(e));
});

function playRound(computerChoice, playerChoice) {
    let playerLost = false;
    if (computerChoice === playerChoice) {
        output.textContent = "Draw!";
        output.style.color = 'black';
        return;
    } else if (
        computerChoice === 'ROCK' && playerChoice === 'SCISSORS' ||
        computerChoice === 'PAPER' && playerChoice === 'ROCK' ||
        computerChoice === 'SCISSORS' && playerChoice === 'PAPER') {
        playerLost = true;
    } else {
        playerLost = false;
    }
    computerButtons.forEach((button) => {
        if (button.textContent.toUpperCase() === computerChoice) {
            button.style.borderColor = 'rgb(255, 0, 0, 0.25)';
        } else {
            button.style.borderColor = 'white';
        }
    })

    if (playerLost) {
        output.textContent = `You Lost! ${capitalizeFirst(computerChoice)} beats ${capitalizeFirst(playerChoice)}!`
        output.style.color = 'red';
        computerScoreText.textContent++;
    } else {
        output.textContent = `You Won! ${capitalizeFirst(playerChoice)} beats ${capitalizeFirst(computerChoice)}!`
        output.style.color = 'blue';
        playerScoreText.textContent++;
    }

    if (+playerScoreText.textContent >= 5) {
        output.textContent = 'You have 5 Points, You Win!';
        disableButtons();
    } else if (+computerScoreText.textContent >= 5) {
        output.textContent = 'Computer has 5 Points, You Lose!';
        disableButtons();
    }
}

function disableButtons() {
    playerButtons.forEach((button) => {
        button.disabled = true;
        button.classList.remove('active');
        console.log(button);
    });
    computerButtons.forEach((button) => button.disabled = true);
}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    return CHOICES[choice];
}

function validateChoice(choice) {
    choice = choice || "";
    while (!CHOICES.includes(choice.toUpperCase())) {
        choice = prompt("Please enter a valid choice") || "";
    }
    return choice;
}

function capitalizeFirst(string) {
    array = string.toLowerCase().split('');
    array[0] = array[0].toUpperCase();
    return array.join('');
}

function buttonClicked(e) {
    playerButtons.forEach((button) => button.style.borderColor = 'white')
    button = e.target;
    playRound(getComputerChoice(), button.textContent.toUpperCase());
    button.style.borderColor = 'rgb(0,0,255,0.25)';
}