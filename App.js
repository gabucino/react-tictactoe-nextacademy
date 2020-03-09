
import React, { useState, Fragment } from 'react'
import './App.css'

const WINNING = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const App = () => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
  const [turn, setTurn] = useState(0)


  const reset = () => {
    setBoard(['', '', '', '', '', '', '', '', ''])
    setTurn(0)
  }

  const handleClick = e => {
    const newBoard = [...board]
    newBoard[e.target.id] = turn % 2 ? 'O' : 'X'

    setBoard(newBoard)
    setTurn(turn + 1)
  }

  const checkForWinner = () => {
    for (let i = 0; i < WINNING.length; i++) {
      const joinedStr = WINNING[i].map(i => board[i]).join('')
      if (joinedStr === 'XXX' || joinedStr === 'OOO') {
        return true
      }
    }
    return false
  }
  const hasWinner = checkForWinner()

  return (
    <Fragment>
      <h4 id="title">
        {hasWinner
          ? 'Game over!' 
          : turn === 9
            ? 'Draw!'
            : `React Tic Tac Toe (Turn ${turn})`}
      </h4>
      {(hasWinner || turn === 9) && (
        <button
          className="btn btn-default border"
          id="reset-btn"
          onClick={reset}
        >
          Reset
          </button>
      )}
      <div id="board">
        {board.map((box, index) => (
          <div
            style={{
              pointerEvents: box || hasWinner ? 'none' : 'auto',
              background: box && '#D8BFD8'
            }}
            key={index}
            onClick={handleClick}
            className="box"
            id={index}
          >
            {box}
          </div>
        ))}
      </div>
    </Fragment>
  )
}




export default App;