import React from 'react'
import Image from 'next/image'

export default function SectionHeader({ image, title, description }) {
  return (
    <div className='flex items-center justify-center space-x-2'>
        <Image src={ image } alt="icon" width={80} height={80}/>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-xl font-bold text-black'>{ title }</p>
            { typeof description !== "string" ? (
                <p className='text-4xl font-semibold text-black'>{ description }</p>
                ) : (
                <p className='text-sm font-normal text-black text-center'>{ description }</p>
            )}
        </div>
    </div>
  )
}
