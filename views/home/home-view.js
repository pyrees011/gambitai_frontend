import React from 'react'

// component
import Sidebar from '../components/sidebar'
import TopBar from './components/topBar'
import StartSection from './components/startSection'
import History from './components/history'

export default function HomeView() {
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
