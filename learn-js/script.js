
const blocks = document.getElementsByClassName("block");
const turn = document.getElementById("turn");
const result = document.getElementById("result");

let tMatrix = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];

const winCombinations = ["00,01,02","00,10,20","00,11,22","10,11,12","20,21,22","02,12,22","01,11,21","02,12,22","20,11,02"]


// 3 -> X; 4 -> O;
let currentPlayer = 3;
turn.innerHTML = "X";
let winnerDeclared = false;
let sum =0;

function detectWinner(){
  let won = winCombinations.some((combination) =>{
    sum = 0;
    // ["10","11","12"]
    combination.split(',').forEach((item)=>{
      sum = sum + tMatrix[item[0]][item[1]]
    });

    return (sum === 9 || sum ===12)
  });

  if(won){
    result.innerHTML = "Player "+ (sum === 9?'X':'O') + " wins"
    winnerDeclared = true;
  }

}


function updatePlayer(){
  currentPlayer = currentPlayer===3 ? 4 : 3;
  turn.innerHTML = currentPlayer===3 ? "X" : "O";
  // if(currentPlayer===0){
  //   currentPlayer = 1
  // }else{
  //   currentPlayer = 0
  // }
}

function updateBlocks(){
  [...blocks].forEach((block, index)=>{
    if(tMatrix[parseInt(index/3)][index%3]===3){
      block.innerHTML = "X"
    }else if(tMatrix[parseInt(index/3)][index%3]===4){
      block.innerHTML = "O"
    }
  })
}

function onBlockClick(id){
  if(tMatrix[parseInt(id/3)][id%3]>=0 || winnerDeclared)
    return;

  tMatrix[parseInt(id/3)][id%3] = currentPlayer;
  //     id = 0      0     0 
  //     id = 1      0     1
  //     id = 2      0     2
  //     id = 3      1     0
  //     id = 4      1     1
  //     id = 5      1     2
  //     id = 6      2     0
  //     id = 7      2     1
  //     id = 8      2     2 
  updatePlayer();
  updateBlocks();
  detectWinner();
}

function reset() {
  location.reload();
}