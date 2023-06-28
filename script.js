const infoPlayer = document.querySelector(".player");
const grids = document.querySelectorAll(".grid");
const turnInfo = document.querySelector(".turn_info");

let players = ["X", "O"];
let clicked = 0;
let activePlayer = players[Math.floor(Math.random() * players.length)];
play()

function play(){
    infoPlayer.textContent = activePlayer;
    for(const grid of grids){
        grid.addEventListener("click", gridclick)
    }
}

function gridclick(e){
    e.target.textContent = activePlayer;
    activePlayer = players.filter(elem => elem !== activePlayer)[0];
    infoPlayer.textContent = activePlayer;
    e.target.removeEventListener("click", gridclick);
    clicked++
    if(clicked == grids.length){
        turnInfo.textContent = "Partie terminée";
    }
}



