let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winningmsg = document.querySelector(".winningmsg");
let msg = document.querySelector(".msg")
let turnO = true

const win = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color="white"
            turnO = false;

        } else {
            box.innerText = "X";
            box.style.color ="black"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        checkDraw();
    })
})
const resetGame = () => {
    turnO = true;
    enableBoxes();
    winningmsg.classList.add("hide");
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congrats the Winner is ${winner}`;
    winningmsg.classList.remove("hide");
    disableBoxes();
}
const showDraw = () => {
    msg.innerText = `Match Draw!!`;
    winningmsg.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of win) {
        let pos1 = boxes[pattern[0]].innerText
        console.log([pattern[0]])
        console.log([pattern[1]])
        console.log([pattern[2]])
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner");
                showWinner(pos1);

            }
        }

    }

}
const checkDraw =()=>{
    for (let pattern of win) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;


    if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
        if(pos1 !==pos2 && pos2 !== pos3){
            showDraw();
        }
    }
}
}
reset.addEventListener("click", resetGame);