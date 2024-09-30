import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

// component
import Sidebar from '../components/sidebar'
import ThreeDButton from '../components/threeDButton'
import { Button } from '@/components/ui/button'
import Footer from '../components/footer'

// firebase
import { auth } from '@/config/firebase_config'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function landingView() {
  const router = useRouter()
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      router.push('/home')
    }
  }, [user])

  if (user) {
    return null
  }
  
  return (
    <div className='h-screen bg-gray-200 flex'>
      <div className='h-full'>
        <Sidebar />
      </div>
        <div className='h-full w-full overflow-y-auto p-20'>
          <div className='flex space-x-20'>
            <Image src='/board.png' alt='image' width={500} height={500} className='w-[49%]'/> 
            <div className='flex flex-col justify-center items-center w-[51%]'>
              <p className="text-black font-heading text-heading-clamp font-black leading-tight mb-6 text-center">Learn Chess With Friends And AI!!</p>
              <ThreeDButton image='/play.png' title='Play Now' text='Play with someone at your level' route='/home'/>
              <ThreeDButton image='/puzzles.png' title='Puzzles' text='Solve puzzles and improve your game'/>
            </div>
          </div>
          <div className='flex space-x-20 mt-20 bg-gray-400 rounded-lg p-10'>
            <div className='flex flex-col items-center w-[51%] space-y-16'>
              <p className="text-black font-heading text-4xl font-black leading-tight text-center">Solve Chess puzzles</p>
              <Button className='w-fit bg-slate-500 hover:bg-slate-700 p-8 px-12 text-lg font-bold'>Solve Puzzles</Button>
              <div className='flex space-x-4 justify-center items-center'>
                <Image src='/puzzle2.png' alt='image' width={200} height={200} className='rounded-lg bg-none'/>
                <div className='flex flex-col justify-center'>
                  <p className='font-semibold mb-3'>"Puzzles are the best way to improve pattern recognition, and no site does it better."</p>
                  <p className='font-bold'><span className='bg-[#7c2929] p-1 rounded-md font-semibold text-sm'>GM</span> Hikaru Nakamura</p>
                </div>
              </div>
            </div>
            <div className='w-[49%] h-full'>
              <Image src='/puzzle.png' alt='image' width={500} height={500} className='rounded-lg bg-none'/>
            </div>
          </div>
          <div className='flex space-x-20 mt-20 bg-gray-400 rounded-lg p-10'>
          <div className='w-[49%] h-full'>
              <Image src='/puzzle.png' alt='image' width={500} height={500} className='rounded-lg bg-none'/>
            </div>
            <div className='flex flex-col items-center w-[51%] space-y-16'>
              <p className="text-black font-heading text-4xl font-black leading-tight text-center">Take chess lessons</p>
              <Button className='w-fit bg-slate-500 hover:bg-slate-700 p-8 px-12 text-lg font-bold'>Start lessons</Button>
              <div className='flex space-x-4 justify-center items-center'>
                <Image src='/puzzle2.png' alt='image' width={200} height={200} className='rounded-lg bg-none'/>
                <div className='flex flex-col justify-center'>
                  <p className='font-semibold mb-3'>"GambitAI lessons make it easy to learn to play, then challenge you to continue growing."</p>
                  <p className='font-bold'><span className='bg-[#7c2929] p-1 rounded-md font-semibold text-sm'>IM</span> Anna Rudolf</p>
                </div>
              </div>
            </div>
          </div>
          { /* footer */ }
          <Footer />
        </div>
    </div>
  )
}
