const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("scissorsButton");
const buttons = document.querySelector(".buttons")


buttons.addEventListener("click", (e) = > {
    let target = e.target;
    switch (target.id){
        case "rockButton":
            return "ROCK";
        case "paperButton":
            return "PAPER";
        case "scissorsButton":
            return "SCISSORS";
    }
});

function getComputerChoice(){
    let value = Math.round(Math.random() * 1000)/10;
    let choice;
    

    if (value <= 33){
        choice = "Rock";
    }else if(value <=66 && value > 33){
        choice = "Paper"
    }else{
        choice = "Scissors"
    }
    
    return choice;

}



function playRound(humanChoice,computerChoice){
    humanChoice = String(humanChoice).toUpperCase();
    computerChoice = String(computerChoice).toUpperCase();

    if (humanChoice == "ROCK" || humanChoice == "PAPER" || humanChoice == "SCISSORS"){
        //do nothing
    }else{
        alert("No such choice");
        return;
    }

    if (humanChoice == "ROCK" && computerChoice == "PAPER"){
        console.log("You win! Rock beats paper");
        return "human";
    }else if (humanChoice == "ROCK" && computerChoice == "SCISSORS"){
        console.log("You lose! Scissors beat rock");
        return "computer";
    }else {
        // if computer choice is ROCK too
        console.log("A DRAW!")
    }

    if (humanChoice == "PAPER" && computerChoice == "ROCK"){
        console.log("You win! Paper beats rock");
        return "human";
    }else if (humanChoice == "PAPER" && computerChoice == "Scissors"){
        console.log("You lose! Scissors beat paper");
        return "computer";
    }else {
        // if computer choice is PAPER too
        console.log("A DRAW!")
    }

    if (humanChoice == "SCISSORS" && computerChoice == "PAPER"){
        console.log("You win! Scissors beats paper");
        return "human";
    }else if (humanChoice == "SCISSORS" && computerChoice == "ROCK"){
        console.log("You lose! Rock beat scissors");
        return "computer";
    }else {
        // if computer choice is SCISSORS too
        console.log("A DRAW!")
    }


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






