main();
function main() {
    //main procedural of the progaram
    const userSelection = 'rock';
    const opponentSelection = computerPlay();

    playSingle(userSelection, opponentSelection);
}

function computerPlay() {
    //randomlly return either 'rock', 'paper', 'scissors'
    switch (getRandomInteger(1, 4) ) {
        case 1: return 'rock'; //return removes the need of break;
        case 2: return 'paper';
        case 3: return 'scissors';
        default:    console.log("somthing wrong in computerPlay()");
    }
}

function playSingle(playerSelection, computerSelection) {
    //plays a single round of rock, paper, scissors
    //takes two parameters and the function is case-sensitive
    playerSelection = playerSelection.toLowerCase();
    let loseMassage = "You Lose! ";
    let winMassage = "You Win! ";
    //return a string that declares the winner of the round "You Lose! 'infotext'"
    if (playerSelection === computerSelection ) {
        console.log("drawing");
        return "You Draw! " + playerSelection + " draws " + computerSelection;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return loseMassage + computerSelection + " beats " + playerSelection;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return winMassage + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return winMassage + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return loseMassage + computerSelection + " beats " + playerSelection;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return loseMassage + computerSelection + " beats " + playerSelection;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return winMassage + playerSelection + " beats " + computerSelection;
    }
    else {
        console.log("problem at playSingle");
    }
}

function getRandomInteger(min, max) {
    let x = Math.floor(Math.random() * (max -min) ) + min;
    // console.log("random:" + x);
    return x;
}