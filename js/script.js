main();
function main() {
    //main procedural of the progaram
    const userSelection = 'rock';
    const opponentSelection = computerPlay();

    playSingle(userSelection, opponentSelection);
}

function computerPlay() {
    //randomlly return either 'rock', 'paper', 'scissors'
    switch (getRandomInteger(1, 3) ) {
        case 1: return 'rock'; //return removes the need of break;
        case 2: return 'paper';
        case 3: return 'scissors';
        default:    console.log("somthing wrong in computerPlay()");
    }
}

function playSingle(playerSelection, computerSelection) {
    //plays a single round of rock, paper, scissors
    //takes two parameters and the function is case-sensitive
    //return a string that declares the winner of the round "You Lose! 'infotext'"
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max -min) ) + min;
}