const rollTheDice = ()=> {
    return Math.floor(Math.random()*6)+1;
}

const gameWinner = (roll1, roll2) => {
    if(roll1 === roll2){
        return "Draw Game"
    }else if (roll1 > roll2){
        return "Winner is Player 1"
    }else 
    return "Winner is Player 2"
}

let randomNumber1 = rollTheDice();
let randomNumber2 = rollTheDice();
let winner = gameWinner(randomNumber1, randomNumber2);
let headDisplay = document.querySelector("h1");
const drawGame = "Draw Game";
let btn = document.querySelector("button");
document.querySelector(".img1").setAttribute("src", `/images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `/images/dice${randomNumber2}.png`);

const resetGame = ()=>{
    location.reload();
}

document.querySelector('#playGame').addEventListener("click",()=>{
    resetGame();
 });


if(winner === drawGame){
    headDisplay.innerText = drawGame;
}else{
    headDisplay.innerText = `${winner}`;
}