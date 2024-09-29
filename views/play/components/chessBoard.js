import React, { useState } from 'react'

// chess piece json
import chessPieces from '@/utils/pieces.json'

// utils
import { cn } from '@/lib/utils'

export default function ChessBoard({ board, chess, setBoard }) {
    const [selectedFrom, setSelectedFrom] = useState(null)

    const handleSquareClick = (square, sqareRepresentation) => {
        if (square === null && !selectedFrom) {
            return
        }
        if (!selectedFrom) {
            setSelectedFrom(sqareRepresentation)
        } else {

            console.log({
                from: selectedFrom,
                to: sqareRepresentation
            })
            setSelectedFrom(null)

            try {
                const move = chess.move({
                    from: selectedFrom,
                    to: sqareRepresentation
                })
                setBoard(chess.board())
            } catch (error) {
                console.error(error)
                setSelectedFrom(null)
            }
        }
    }
  return (
      <div>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className='flex'>
            {row.map((square, squareIndex) => {
                const sqareRepresentation = String.fromCharCode(97 + (squareIndex % 8)) + "" + (8 - rowIndex)
                return (
              <div
                onClick={() => handleSquareClick(square, sqareRepresentation)}
                key={squareIndex}
                className={cn(`h-24 w-24 flex items-center justify-center ${
                  (rowIndex + squareIndex) % 2 === 0 ? 'bg-gray-300' : 'bg-gray-500'
                }`, { 'bg-slate-700': selectedFrom === sqareRepresentation })}
              >
                { square ? <img src={chessPieces[`${square.color + square.type}`]} alt='piece' className='w-12 h-12'/> : ""} 
              </div>
            )})}
          </div>
        ))}
      </div>
  )
}
