import React, { useState } from 'react'

// components
import OtpInput from './otpInput';

// shadecn
import { Button } from '@/components/ui/button'

// svgs
import CompanySvg from '@/views/components/companySvg';

export default function SecondForm({ setStep}) {
    const [code, setCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setStep(3)
        console.log(code)
    }
  return (
    <div className="mx-auto max-w-sm mt-16">
            <div className='flex flex-col justify-center items-center text-center'>
          <div className="mb-4">
            <CompanySvg />
          </div>
          <h1 className="text-3xl font-bold">Verify your email</h1>
          <p className="mb-6 text-gray-500">We sent a code to example@gmail.com</p>
          </div>
          <form className="space-y-8">
            <div>
                <OtpInput setOtp={setCode}/>
                <p className="text-gray-500 text-xs text-center mt-2">didn't get the code? <span className='text-black font-semibold underline hover:text-blue-700 hover:cursor-pointer'>Click to resend</span></p>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white" variant="outline" onClick={handleSubmit}>Continue</Button>
          </form>
        </div>
  )
}

