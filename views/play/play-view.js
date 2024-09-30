import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// component
import Sidebar from '../components/sidebar'
import ChessBoard from './components/chessBoard'

// third-party
import { Chess } from 'chess.js'
import SidePanel from './components/sidePanel'

// firebase
import { auth } from '@/config/firebase_config'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function PlayView() {
  const router = useRouter()
    const [chess, setChess] = useState(new Chess())
    const [board, setBoard] = useState(chess.board())
    const [user] = useAuthState(auth)

    // const chatName = `${user.accessToken.slice(0, 10)} - ${uuidv4().slice(0, 10)}`
    // const gameID = uuidv4().slice(0, 10)
    const gameID = '867f7a46-e'
    const chatName = 'eyJhbGciOi - 7116969d-5'

    useEffect(() => {
      if (!user) {
        router.push('/')
      }
    })

  return (
    <div className='flex bg-white h-screen w-full'>
        <div className='bg-white h-full'>
          <Sidebar />
        </div>
        <div className='bg-white h-full w-full text-black p-12 overflow-y-auto grid grid-cols-6 gap-4'>
            <div className='col-span-4 flex justify-center items-center'>
                <ChessBoard board={board} chess={chess} setBoard={setBoard} gameID={gameID}/>
            </div>
            <div className='col-span-2 bg-gray-500 flex justify-center rounded-lg h-full'>
                <SidePanel chatName={chatName} gameID={gameID}/>
            </div> 
        </div>
    </div>
  )
}
