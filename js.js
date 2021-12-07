

let gameArray = ["Rock", "Paper", "Scissors"]; // defining the options
let counter = {computer: 0, user: 0}; // counter

function computerPlay() { // computer selection function: randomly pick rock, paper, or scissors
    let computerSelection = gameArray[Math.floor(Math.random()*(gameArray.length))]; // randomize
    return computerSelection // get an answer 
}

let computerSelection = computerPlay()

let playerInput = prompt("Rock, Paper, or Scissors?");// player selection input: player puts in rock, paper, scissors
let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase(); // input gets placed all lowercase

function playRound (playerSelection, computerSelection) {  // function takes computer selection and player selection into one
    
    if (playerSelection === computerSelection) { 
        alert("You have tied this round."); // if player = scissors & computer = scissors; tie
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        alert("You have won! Scissors beats Paper."); // if player = scissors & computer = paper; player wins
        counter.player += 1; // increment the counter
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        alert("You have lost. Rock beats Scissors."); // if player = scissors & computer = rock; computer wins
        counter.computer += 1; // increment the counter
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        alert("You have won. Rock beats Scissors."); // if player = rock & computer = scissors; player wins
        counter.player += 1; // increment the counter
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        alert("You have lost. Paper beats Rock.");// if player = rock & computer = paper; computer wins
        counter.computer += 1; // increment the counter
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        alert("You have lost. Scissors beats Paper.");// if player = paper & computer = scissors; computer wins
        counter.computer += 1; // increment the counter
    } else if (playerSelection === "Paper" && computerSelection === "Rock") { 
        alert("You have won. Paper beats Rock."); // if player = paper & computer = rock; player wins
        counter.player += 1; // increment the counter
    } else {
        alert("Something has gone wrong.");
    }
}
function updateScore()
    document.getElementById("computer-points").setInnerHTML = counter.computer; // or any other value
    document.getElementById("player-points").setInnerHTML = counter.player; // or any other value
    document.getElementById("round").innerHTML = round;

for (round = 0; computerPoints < 5 && playerPoints < 5; round) {
    computerSelection = computerPlay();
    singleRound();
    updateScore();
      }