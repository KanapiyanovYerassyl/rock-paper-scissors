const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const buttons = document.querySelector("#buttons");
const playerCounter = document.querySelector("#playerCount");
const computerCounter = document.querySelector("#computerCount");
const roundCounterP = document.querySelector("#roundCount");
const messageWindow = document.querySelector(".messages");
const messageWin = document.createElement("p");
messageWin.textContent = "";
messageWin.style.fontSize = "32px";
messageWindow.appendChild(messageWin);


let humanChoice = "";
let playerCount = 0;
let computerCount = 0;
let roundCounter = 1;


buttons.addEventListener("click",getHumanChoice);

function getHumanChoice(event){
    let target = event.target;
    switch (target.id){
        case "rockButton":
            humanChoice = "ROCK";
            break;
        case "paperButton":
            humanChoice = "PAPER";
            break;
        case "scissorsButton":
            humanChoice = "SCISSORS";
            break;
    }

    playRound(humanChoice, getComputerChoice());

};

function getComputerChoice(){
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
}



function playRound(humanChoice,computerChoice){
    
    if (computerChoice === humanChoice){
        messageWin.textContent = "Its a tie"
        
    }else if(((humanChoice == "ROCK") && (computerChoice == "SCISSORS")) || ((humanChoice == "SCISSORS") && (computerChoice == "PAPER")) || ((humanChoice == "PAPER") && computerChoice == "ROCK")){
        console.log("You win");
        playerCount+=1;
        playerCounter.textContent = playerCount;
        messageWin.textContent = `Computer chose ${computerChoice}. Player wins round ${roundCounter}`;
        roundCounter+=1;
    }else{
        console.log("You lost");
        computerCount+=1;
        computerCounter.textContent = computerCount;
        messageWin.textContent  = `Computer chose ${computerChoice}. Player loses round ${roundCounter}`;
        roundCounter+=1;
    }
    roundCounterP.textContent = roundCounter;
    decideWinnerAfterFiveRound();
    
    
}



 function decideWinnerAfterFiveRound(){
        if (roundCounter > 5){
            if (playerCount > computerCount){
                messageWin.textContent = "Game ends: Player wins the game"
            }else if (playerCount < computerCount){
                messageWin.textContent = "Game ends: Computer wins the game"
            }else {
                messageWin.textContent = "Game ends: It's a tie"
            }

        
            playerCount = 0;
            computerCount = 0;
            roundCounter = 1;

            playerCounter.textContent = playerCount;
            computerCounter.textContent = computerCount;
            roundCounterP.textContent = roundCounter;

        }

    
        
}






