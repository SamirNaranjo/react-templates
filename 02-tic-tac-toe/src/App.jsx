import { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css'

import { Square } from './components/Square';
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';
import { saveGameToStorage, resetGameToStorage } from './logic/storage/index.js';



function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    if ( boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });
 
  const [turn, setTurn] = useState(() =>{
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X
  });

  // Null es que no hay ganador, false es que hay un empate
  const [ winner, setWinner ] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameToStorage();
  }

  const updateBoard = (index) => {
    /* No actualizamos la posicion 
       si ya tiene un valor  
    */

    if (board[index]) return;
    
    //actualizamos  el tablero
    const newBoard  = [...board]
    newBoard[index] = turn
    setBoard(newBoard) 

    // Cambiamos el turno 
    const newTurn   = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    
    //Guardamos la partida
    saveGameToStorage({
      board : newBoard,
      turn: newTurn
    });

    // Revisamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)){
      setWinner(false) // empate
    }
  }

  return (
    <main className='board'>
      <h1> Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Juego</button>
      <section className='game'>
        {
          board.map((square, index) =>{
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      
      <section className='turn'>
        <Square isSelected={ turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={ turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>

  )
}

export default App
