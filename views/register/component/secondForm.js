import React, { useEffect, useState } from 'react'

// components
import OtpInput from './otpInput';

// shadecn
import { Button } from '@/components/ui/button'

// svgs
import CompanySvg from '@/views/components/companySvg'

// firebase
import { auth } from '@/config/firebase_config';

export default function SecondForm({ setStep }) {
  const [disabled, setDisabled] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(3)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      console.log('runs')
      if (user) {
        await user.reload();
        console.log(user)
        if (user.emailVerified) {
          setDisabled(false)
        }
      }
    })

    return () => unsubscribe();
  }, [auth])

  return (
    <div className="mx-auto max-w-sm mt-16">
      <div className='flex flex-col justify-center items-center text-center'>
        <div className="mb-4">
          <CompanySvg />
        </div>
        <h1 className="text-3xl font-bold">Verify your email</h1>
        <p className="mb-6 text-gray-500">We sent you an email at wmail@emacnj.com</p>
      </div>
      <form className="space-y-8">
        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white disabled:cursor-not-allowed"
          variant="outline"
          onClick={handleSubmit}
          disabled={disabled}
        >
          Continue
        </Button>
      </form>
    </div>
  )
}
