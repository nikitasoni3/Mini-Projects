let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turn = true;

const winning_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetButton = () =>{
    turn=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn){
            box.innerText = "X";
            box.style.color = "red";
            turn = false;
        }else{
            box.innerText = "O";
            box.style.color = "blue";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showMsg = (winner) => {
    msg.innerText = `Congratualations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const gameDraw = () =>{

}

const checkWinner = () => {
    for(let pattern of winning_pattern){
        let box1Val = boxes[pattern[0]].innerText;
        let box2Val = boxes[pattern[1]].innerText;
        let box3Val = boxes[pattern[2]].innerText;

        if(box1Val !="" && box2Val !="" && box3Val !=""){
            if(box1Val===box2Val && box2Val===box3Val){
                showMsg(box1Val);
                return true;
            }else{
                gameDraw();
            }
        }
    }
}

resetBtn.addEventListener("click", resetButton);
newGameBtn.addEventListener("click", resetButton);