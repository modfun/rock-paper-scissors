main();
function main() {
    //main procedural of the progaram
    const userSelection = 'rock';
    const opponentSelection = computerPlay();

    // game();
    playUI();
}

function playUI() {
    let loses = 0;
    let wins = 0;
    let draws = 0;
    window.addEventListener( 'click', (e) => {
        // console.log(e.target.getAttribute('class'));
        let className = e.target.getAttribute('class');
        if (!(className === 'rock' || className === 'scissors' || className === 'paper')) return;
        let result = playSingle( e.target.getAttribute('class'), computerPlay());
        // console.log(result);

        if (result.charAt(0) === '0' ) {
            ++loses;
        } else if (result.charAt(0) === '1') {
            ++wins;
        } else {
            ++draws;
        }
        printScore(result.substring(1), 'brown');

        //output using dom mani
        if (wins >= 5 || loses >= 5) {
            printResult( calcResult( wins, loses, draws), 'blue');
            wins = loses = draws = 0;
        }
    });
}

function printScore( message, messageColor) {
    const outputBox = document.querySelector('.score');
    const scorePara = document.querySelector('.score p');

    scorePara.textContent = message;
    scorePara.style.color = messageColor;
}

function printResult(message, messageColor) {
    const outputBox = document.querySelector('.output');
    const resultPara = document.createElement('p');

    outputBox.style['background-color'] = 'grey';
    outputBox.style['border'] = '2px solid black';
    outputBox.appendChild(resultPara);
    resultPara.textContent = message;
    resultPara.style.color = messageColor;
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
    // console.log('invocked');
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

function calcResult( wins, loses, draws) {
    let message = ''
    if (wins === loses) {
        message = ("You have Drawn with " + wins + " wins, " + loses + " loses and " + draws + " draws");
    } else if (wins > loses) {
        message = ("You are The Winner!" + " You win " + wins + " rounds, lost " + loses + " rounds and drawn " + draws + " rounds.");
    }
    else {
        message = ("You Lose!! stat: " + wins + " wins, " + loses + " loses and " + draws + " draws.");
    }
    console.log( message);

    return message;
}

function game() {
    //use playSingle function to play a multi-round game that keeps score
    //and report a winner or a loser at the end.
    // let rounds = prompt("How Many Rounds to play");
    let rounds = 0;
    let userSelection = '';
    let opponentSelection = '';
    let result = '';
    let wins = 0;
    let loses = 0;
    let draws = 0;

    while (rounds > 0) {
        // userSelection = prompt("Choose a play 'rock', 'paper' or 'scissors'.");
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

    // let massage = ''
    // if (wins === loses) {
        // console.log(message = ("You have Drawn with " + wins + " wins, " + loses + " loses and " + draws + " draws"));
    // } else if (wins > loses) {
        // console.log(message = ("You are The Winner!" + " You win " + wins + " rounds, lost " + loses + " rounds and drawn " + draws + " rounds."));
    // }
    // else {
        // console.log(message = ("You Lose!! stat: " + wins + " wins, " + loses + " loses and " + draws + " draws."));
    // }
    alert(printResult( wins, loses, draws));
}