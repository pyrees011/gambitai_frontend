import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

// shadecn
import { Button } from '@/components/ui/button'

// utils
import { cn } from '@/lib/utils'

export default function ThreeDButton(props) {
    const router = useRouter()

    const handleClick = () => {
        router.push(props.route)
    }

  return (
    <Button
        className={cn(
            'relative bg-slate-500 text-primary-foreground rounded-lg shadow-lg hover:bg-customGreen hover:translate-y-1 hover:shadow-md transition-all duration-200 flex justify-start border-black border-2 overflow-hidden group',
            props.smallButton ? 'w-full py-8 mb-4' : 'w-[90%] py-14 mb-6',
            props.className
        )}
        onClick={handleClick}
        >
        <div className="absolute inset-0 bg-slate-300 -translate-y-1.5 rounded-lg transition-transform duration-200 group-hover:translate-y-0"></div>
        <div className="relative flex items-center z-10">
            {props.image && (
            <Image
                src={props.image}
                alt="Play icon"
                width={props.smallButton ? 35 : 50}
                height={props.smallButton ? 35 : 50}
                className="mr-6"
            />
            )}
            <div className="text-black text-left">
            <p className={props.smallButton ? 'text-xl font-bold' : 'text-2xl font-bold'}>
                {props.title}
            </p>
            {props.text && <p className="text-sm font-normal">{props.text}</p>}
            </div>
        </div>
    </Button>

  )
}