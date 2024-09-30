import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

// component
import Sidebar from '../components/sidebar'
import TopBar from './components/topBar'
import StartSection from './components/startSection'
import History from './components/history'

// firebase
import { auth } from '@/config/firebase_config'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function HomeView() {
  const router = useRouter()
  const [user] = useAuthState(auth)

  useEffect(() => {
    // This code runs only on the client side
    if (!user) {
      router.push('/')
    }
  }, [user])

  if (!user) {
    return null
  }

  return (
    <div className='flex bg-white h-screen w-full'>
        <div className='bg-white h-full'>
          <Sidebar />
        </div>
        <div className='bg-white h-full w-full text-black p-12 px-24 overflow-y-auto'>
            <TopBar fill="gray"/>
            <StartSection />
            <History />
        </div>
    </div>
  )
}
