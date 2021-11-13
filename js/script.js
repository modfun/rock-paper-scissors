main();
function main() {
    //main procedural of the progaram
    const userSelection = 'rock';
    const opponentSelection = computerPlay();

    // playSingle(userSelection, opponentSelection);
    game();
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
    let loseMassage = "0You Lose! ";
    let winMassage = "1You Win! ";
    //return a string that declares the winner of the round "You Lose! 'infotext'"
    if (playerSelection === computerSelection ) {
        // console.log("drawing");
        return "2You Draw! " + playerSelection + " draws " + computerSelection;
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
        return '3';
    }
}

function getRandomInteger(min, max) {
    let x = Math.floor(Math.random() * (max -min) ) + min;
    // console.log("random:" + x);
    return x;
}

function game() {
    //use playSingle function to play a multi-round game that keeps score
    //and report a winner or a loser at the end.
    let rounds = prompt("How Many Rounds to play");
    let userSelection = '';
    let opponentSelection = '';
    let result = '';
    let wins = 0;
    let loses = 0;
    let draws = 0;

    while (rounds > 0) {
        userSelection = prompt("Choose a play 'rock', 'paper' or 'scissors'.");
        userSelection = userSelection.toLowerCase();
        opponentSelection = computerPlay();

        result = playSingle(userSelection, opponentSelection);
        if (result.charAt(0) === '0' ) {
            ++loses;
        } else if (result.charAt(0) === '1') {
            ++wins;
        } else {
            ++draws;
        }
        console.log(result.substring(1));

        --rounds;
    }

    if (wins === loses) {
        console.log("You have Drawn with " + wins + " wins, " + loses + " loses and " + draws + " draws");
    } else if (wins > loses) {
        console.log("You are The Winner!")
        console.log(" You win " + wins + " rounds, lost " + loses + " rounds and drawn " + draws + " rounds.");
    }
    else {
        console.log("You Lose!! stat: " + wins + " wins, " + loses + " loses and " + draws + " draws.");
    }
}