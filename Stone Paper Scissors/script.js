let userChoice = 0;
let compChoice = 0;
let userCount = document.querySelector("#user-score");
let compCount = document.querySelector("#comp-score");
let finalMsg = document.querySelector("#msg");
 
const choices = document.querySelectorAll(".circle");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You win! ");
        finalMsg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        userCount.innerText++;
        finalMsg.style.backgroundColor = "green";
    }else{
        console.log("You lose!");
        finalMsg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        compCount.innerText++;
        finalMsg.style.backgroundColor = "red";
    }
}
const gameDraw = () => {
    console.log("Game was Draw!");
    finalMsg.innerText = "Game was Draw. Play again";
    finalMsg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        //game draw
        gameDraw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})


