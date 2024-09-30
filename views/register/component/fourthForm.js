import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

// shadecn
import { Button } from '@/components/ui/button'

// icons
import CompanySvg from '@/views/components/companySvg';

// toastify
import { ToastContainer, toast } from 'react-toastify';

export default function FourthForm() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('user registered successfully');
        setTimeout(() => {
          router.push('/home');
        }, 2000);
        console.log('submitting form');
    }
  return (
    <div className="mx-auto max-w-sm mt-16">
            <div className='flex flex-col justify-center items-center text-center'>
          <div className="mb-4">
            <CompanySvg />
          </div>
          <h1 className="text-3xl font-bold">Welcome to gambitAI</h1>
          <p className="mb-6 text-gray-500">Get up and running in few minutes</p>
          </div>
          <div className='w-full flex justify-center items-center'>
            <Image src={'https://images.unsplash.com/photo-1698439043824-a4a4defaccd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGNoZXNzJTIwdmlkZW98ZW58MHx8MHx8fDI%3D'} alt='image' width={400} height={64} className='rounded-md z-10 mb-6'/>
        </div>
            <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleSubmit}>Continue</Button>
            <ToastContainer />
        </div>
  )
}
