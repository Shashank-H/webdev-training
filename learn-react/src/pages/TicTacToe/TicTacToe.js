import { useState, useEffect } from 'react'
import { Block } from '../../components/Block';
import { Button } from '../../components/Button';
import { Counter } from '../../components/Counter';
import './TicTacToe.css';

export function TicTacToe(){

  const [tMatrix, setTMatrix] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);

  const [currentPlayer, setCurrentPlayer] = useState(3);
  const [winnerName,setWinnerName] = useState('');
  const winCombinations = ["00,01,02","00,10,20","00,11,22","10,11,12","20,21,22","02,12,22","01,11,21","02,12,22","20,11,02"];

  function reset(){
    setTMatrix([
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ]);
    setCurrentPlayer(3);
    setWinnerName('');
  }

  useEffect(()=>{
    detectWinner();
  },[tMatrix])

  // useEffect(()=>{
  //   console.log("entered");

  //   return ()=>{
  //     console.log("exit");
  //   }
  // },[])


  function detectWinner(){
    let sum;

    let won = winCombinations.some((combination) =>{
      sum = 0;
      
      
      // ["10","11","12"]
      combination.split(',').forEach((item)=>{
        sum = sum + tMatrix[item[0]][item[1]]
      });
  
      return (sum === 9 || sum ===12)
    });
  
    if(won){
      setWinnerName(sum === 9?'X':sum===12?'O':'');
    }
    
  }
  

  function onBlockClick(id){
    if(winnerName||tMatrix[parseInt(id/3)][id%3]>-1){
      return;
    }
    setTMatrix((m)=>{
      let temp = [...m];
      temp[parseInt(id/3)][id%3] = currentPlayer;
      return temp;
    });
    setCurrentPlayer((v)=>v===3?4:3);
  }

  return (
    <div className="t3-container">
      <h1>Tic Tac Toe</h1>
      <div className="game-info">
        <h2>Turn for Player <span ></span></h2>
        <Button text="Reset" onClick={reset} />
      </div>
      <h2>
        {
          winnerName && ("Player "+ winnerName+ " Wins") 
        }
      </h2>
      <div className="game-container">
        <Block value={tMatrix[0][0]} id={0} onBlockClick={onBlockClick} />
        <Block value={tMatrix[0][1]} id={1} onBlockClick={onBlockClick} />
        <Block value={tMatrix[0][2]} id={2} onBlockClick={onBlockClick} />
        <Block value={tMatrix[1][0]} id={3} onBlockClick={onBlockClick} />
        <Block value={tMatrix[1][1]} id={4} onBlockClick={onBlockClick} />
        <Block value={tMatrix[1][2]} id={5} onBlockClick={onBlockClick} />
        <Block value={tMatrix[2][0]} id={6} onBlockClick={onBlockClick} />
        <Block value={tMatrix[2][1]} id={7} onBlockClick={onBlockClick} />
        <Block value={tMatrix[2][2]} id={8} onBlockClick={onBlockClick} />
      </div>
      
    </div>
  )
}