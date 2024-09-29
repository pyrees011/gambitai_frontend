import React, { useState } from 'react'

// component
import Sidebar from '../components/sidebar'
import ChessBoard from './components/chessBoard'

// third-party
import { Chess } from 'chess.js'
import SidePanel from './components/sidePanel'

export default function PlayView() {
    const [chess, setChess] = useState(new Chess())
    const [board, setBoard] = useState(chess.board())
  return (
    <div className='flex bg-white h-screen w-full'>
        <div className='bg-white h-full'>
          <Sidebar />
        </div>
        <div className='bg-white h-full w-full text-black p-12 overflow-y-auto grid grid-cols-6 gap-4'>
            <div className='col-span-4 flex justify-center items-center'>
                <ChessBoard board={board} chess={chess} setBoard={setBoard}/>
            </div>
            <div className='col-span-2 bg-gray-500 flex justify-center rounded-lg h-full'>
                <SidePanel />
            </div> 
        </div>
    </div>
  )
}
