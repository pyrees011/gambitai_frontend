import React from 'react'
import Image from 'next/image'

// icon
import { Ellipsis } from 'lucide-react'
import { Settings } from 'lucide-react'
import { SunMoon } from 'lucide-react';
import { FileQuestion } from 'lucide-react';

// component
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const SidebarButton = (props) => {
    return (
        <div className="w-full h-14 flex items-center justify-left bg-transparent border-none px-6 mb-2 hover:bg-gray-900">
            <Image src={props.icon} alt='image' width={32} height={32} className='mr-4'/>
            <p className='text-xl text-white font-semibold'>{props.title}</p>
        </div>
    )
}

const sidebarFooter = (props) => {
    return (
        <Button className="w-full bg-transparent flex justify-start	items-center px-6 hover:bg-transparent">
                {props.icon}
                <p className='text-white text-md font-semibold'>{ props.title }</p>
            </Button>
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
        icon: <SunMoon size={20} color='white' className='mr-2'/>
    },
    {
        title: 'Settings',
        icon: <Settings size={20} color='white' className='mr-2'/>
    },
    {
        title: 'Support',
        icon: <FileQuestion size={20} color='white' className='mr-2'/>
    },
]

export default function Sidebar() {
  return (
    <div className='bg-gray-800 w-[200px] h-full flex flex-col'>
        <div className='w-full h-12 flex items-center justify-left bg-transparent border-none p-4 mt-4 mb-2'>
            <Image src={'/chess.png'} alt='image' width={32} height={32} className='relative z-10'/>
            <p className='text-3xl text-white font-bold absolute left-8 top-3 text-emerald-400'>GAMBITAI</p>
        </div>

        {sidebarInfo.map((item, index) => (
            <SidebarButton key={index} title={item.title} icon={item.icon}/>
        ))}

        <div className="w-full h-14 flex items-center justify-left bg-transparent border-none px-6 mb-2 hover:bg-gray-900">
            <Ellipsis size={32} color='white' className='mr-4'/>
            <p className='text-xl text-white font-normal'>more</p>
        </div>

        <div className='px-4 mb-4'>
            <Input type="text" placeholder="Search" className="h-10"/>
        </div>

        <div className='mt-auto mb-4'>
            {sidebarFooterInfo.map((item, index) => (
                <Button key={index} className="w-full bg-transparent flex justify-start	items-center px-6 hover:bg-transparent">
                    {item.icon}
                    <p className='text-white text-md font-semibold'>{item.title}</p>
                </Button>
            ))}
            {/* <p className='text-white text-xs text-center'>© 2021 GambitAi</p> */}
        </div>
    </div>
  )
}
