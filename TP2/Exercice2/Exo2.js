
let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;


function computerPlay() {
    const actions = ['Pierre', 'Feuille', 'Ciseaux'];
    return actions[Math.floor(Math.random() * actions.length)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Égalité !";
    } else if (
        (playerSelection === 'Pierre' && computerSelection === 'Ciseaux') ||
        (playerSelection === 'Feuille' && computerSelection === 'Pierre') ||
        (playerSelection === 'Ciseaux' && computerSelection === 'Feuille')
     ) {
        playerWins++;
        return "Vous avez gagné cette manche !";
    } else {
        computerWins++;
        return "L'ordinateur a gagné cette manche.";
    }
}


function updateResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}


function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Manches jouées : ${roundsPlayed} | Victoires : ${playerWins} | Défaites : ${computerWins}`;
}


function game(playerSelection) {
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    updateResult(roundResult);
    roundsPlayed++;
    updateScore();
    console.log(computerSelection)
}


const gameDiv = document.getElementById('game');
const choices = ['Pierre', 'Feuille', 'Ciseaux'];
choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', function() {
        game(choice.toLowerCase())
    } );
    gameDiv.appendChild(button);
});