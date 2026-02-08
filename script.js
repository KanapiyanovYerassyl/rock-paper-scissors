const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const buttons = document.querySelector(".buttons")
const playerCounter = document.querySelector("#playerCount")
const computerCounter = document.querySelector("#computerCounter")




buttons.addEventListener("click",getHumanChoice);

function getHumanChoice(event){
    let target = event.target;
    switch (target.id){
        case "rockButton":
            return "ROCK";
        case "paperButton":
            return "PAPER";
        case "scissorsButton":
            return "SCISSORS";
    }
};

function getComputerChoice(){

    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];

}

function determineWinner(getComputerChoice, getHumanChoice){
   
}


function playRound(humanChoice,computerChoice){
    

}

 function playGame(){
        let humanScore = 0;
        let computerScore = 0;
        
        

        if (humanScore == computerScore){
            alert("DRAW");
        }else if (humanScore > computerScore){
            alert("HUMAN WINS");
        }else {
            alert("COMPUTER WINS");
        }
}






