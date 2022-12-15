'use strict'

const body = document.querySelector('body')
const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const btnResult = document.querySelector('.btn-result');
const btnRestart = document.querySelector('.btn-restart');
const playerChooseImg = document.querySelector('.player-choose-img');
const computerChooseImg = document.querySelector('.computer-choose-img');
const playerScoreNumber = document.getElementById('player-score');
const computerScoreNumber = document.getElementById('computer-score');
const situation = document.querySelector('.situation');


function win() {
    playerScore++;
    situation.textContent = 'YOU WIN 😀'
    computerChooseImg.src = `${computerChoise}.png`;
    playerScoreNumber.textContent = playerScore;
    computerScoreNumber.textContent = computerScore;
}

function lose() {
    computerScore++;
    situation.textContent = 'YOU LOSE 😥'
    computerChooseImg.src = `${computerChoise}.png`;
    playerScoreNumber.textContent = playerScore;
    computerScoreNumber.textContent = computerScore;
}

function draw() {
    situation.textContent = 'DRAW';
    computerChooseImg.src = `${computerChoise}.png`;
}

function final() {
    body.classList.remove('main-background');
    body.classList.add('win');
    continuePlaying = false;
}

let computerChoise, playerChoise, playerScore, computerScore, continuePlaying;

restart();

function restart() {
    computerChoise = '';
    playerChoise = '';
    playerScore = 0;
    computerScore = 0;
    continuePlaying = true;

    playerScoreNumber.textContent = 0;
    computerScoreNumber.textContent = 0;
    situation.textContent = '';

    computerChooseImg.src = 'question.png';
    playerChooseImg.src = 'question.png';

    body.classList.remove('lose');
    body.classList.add('main-background');
}

btnRestart.addEventListener('click', restart);

btnRock.addEventListener('click', function() {
    if (continuePlaying) {
        playerChoise = 'rock';
        playerChooseImg.src = `${playerChoise}.png`;
    }
});

btnPaper.addEventListener('click', function() {
    if (continuePlaying) {
        playerChoise = 'paper';
        playerChooseImg.src = `${playerChoise}.png`;
    }
});

btnScissors.addEventListener('click', function() {
    if (continuePlaying) {
        playerChoise = 'scissors';
        playerChooseImg.src = `${playerChoise}.png`;
    }
});

btnResult.addEventListener('click', function() {
    const options = {
        1: 'rock',
        2: 'paper',
        3: 'scissors'
    };
    computerChoise = options[Math.ceil(Math.random() * 3)];

    if (continuePlaying) {
        if (playerChoise === '') {
            situation.textContent = 'CHOOSE ONE! 🙄'
        }
        if (playerChoise === 'rock') {
            computerChoise === 'rock' ? draw() :
                computerChoise === 'paper' ? lose() :
                win();

        } else if (playerChoise === 'paper') {
            computerChoise === 'rock' ? win() :
                computerChoise === 'paper' ? draw() :
                lose();

        } else if (playerChoise === 'scissors') {
            computerChoise === 'rock' ? lose() :
                computerChoise === 'paper' ? win() :
                draw();
        }
        if (playerScore === 3) {
            final();
        } else if (computerScore === 3) {
            final();
            body.classList.add('lose');
        }
    }
});