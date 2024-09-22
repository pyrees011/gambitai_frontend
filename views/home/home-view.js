import React from 'react'
import Sidebar from '../components/sidebar'

export default function HomeView() {
  return (
    <div className='flex bg-white h-screen w-screen'>
        <Sidebar />
        <div className='bg-white h-12 text-black'>
            Home
        </div>
    </div>
  )
}
