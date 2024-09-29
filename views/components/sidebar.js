import React, { useState, useEffect} from 'react'
import Image from 'next/image'

import { useRouter } from 'next/router'

// icon
import { Ellipsis } from 'lucide-react'
import { Settings } from 'lucide-react'
import { SunMoon } from 'lucide-react';
import { FileQuestion } from 'lucide-react';

// shadecn
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



export default function Sidebar() {
    const router = useRouter()
    const [ isAuth, setIsAuth ] = useState(true)

  return (
    <div className='bg-gray-100 w-[200px] h-full flex flex-col text-gray-800 sticky top-0'>
      <div className='w-full h-12 flex items-center justify-left bg-transparent border-none p-4 mt-4 mb-2 hover:cursor-pointer' onClick={() => router.push('/')}>
            <Image src={'/chess.png'} alt='image' width={32} height={32} className='relative z-10'/>
            <p className='text-3xl font-bold absolute left-9 top-5'>GAMBITAI</p>
        </div>

        {sidebarInfo.map((item, index) => (
            <SidebarButton key={index} title={item.title} icon={item.icon}/>
        ))}

      <div className="w-full h-14 flex items-center justify-left bg-transparent border-none px-6 mb-2 hover:bg-slate-200">
        <Ellipsis size={32} color='black' className='mr-4'/>
        <p className='text-xl font-normal'>more</p>
      </div>

        <div className='px-4 mb-4'>
            <Input type="text" placeholder="Search" className="h-10 border-black placeholder:text-black"/>
        </div>

      { !isAuth ? (
        <div className='px-4 mb-4'>
          <Button className="w-full bg-slate-500 h-12 text-md font-bold mb-4 hover:bg-gray-700" onClick={() => router.push('/register')}>Register</Button>
          <Button className="w-full bg-gray-400 h-12 text-md font-bold hover:bg-gray-700" onClick={() => router.push('/login')}>Login</Button>
        </div>
      ) : null}

      <div className='mt-auto mb-4'>
        {sidebarFooterInfo.map((item, index) => (
          <Button key={index} className="w-full bg-transparent flex justify-start items-center px-6 shadow-none hover:bg-transparent">
            {item.icon}
            <p className='text-md font-semibold text-gray-700'>{item.title}</p>
          </Button>
        ))}
      </div>
    </div>
  )
}

const SidebarButton = (props) => {
    return (
        <div className="w-full h-14 flex items-center justify-left bg-transparent border-none px-6 mb-2 hover:bg-slate-200">
            <Image src={props.icon} alt='image' width={32} height={32} className='mr-4'/>
            <p className='text-xl text-black font-semibold'>{props.title}</p>
        </div>
    )
}

const sidebarInfo = [
    {
        title: 'Play',
        icon: '/play.png'
    },
    {
        title: 'Puzzles',
        icon: '/puzzles.png'
    },
    {
        title: 'Learn',
        icon: '/learn.png'
    },
    {
        title: 'Watch',
        icon: '/watch.png'
    },
    {
        title: 'News',
        icon: '/news.png'
    },
]

const sidebarFooterInfo = [
    {
        title: 'Light UI',
        icon: <SunMoon size={20} color='black' className='mr-2'/>
    },
    {
        title: 'Settings',
        icon: <Settings size={20} color='black' className='mr-2'/>
    },
    {
        title: 'Support',
        icon: <FileQuestion size={20} color='black' className='mr-2'/>
    },
]
