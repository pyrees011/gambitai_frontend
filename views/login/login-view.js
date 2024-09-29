import React from 'react'
import Image from 'next/image'

// component
import LoginForm from './components/loginForm'
import { FormCarousel } from './components/formCarousel'

export default function LoginView() {
  return (
    <div className='flex justify-center items-center bg-white'>
        <div className='w-2/5'>
            <LoginForm />
        </div>
        <div className='w-3/5 bg-white p-8 h-screen'>
            <div className='h-full w-full flex items-center justify-center'>
                <FormCarousel />
                {/* <Image src='https://images.unsplash.com/photo-1698439043824-a4a4defaccd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNoZXNzfGVufDB8fDB8fHwy' alt='image' width={500} height={1600} className='w-full h-full object-cover border-black border-2 rounded-lg top-10'/> */}
            </div>
        </div>
    </div>
  )
}
