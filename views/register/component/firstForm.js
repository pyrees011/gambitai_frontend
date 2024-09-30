import React, { useState } from 'react'

// shadecn
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// icons
import { Apple } from 'lucide-react';
import CompanySvg from '@/views/components/companySvg';

// firebase
import { auth } from '@/config/firebase_config';
import { createUserWithEmailAndPassword ,sendEmailVerification } from 'firebase/auth';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FirstForm({ setStep }) {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      return toast.error('Please fill in all the fields')
    }
    try {
      console.log('register', form)
      const res = await createUserWithEmailAndPassword(auth, form.email, form.password)
      console.log('register', res)

      await sendEmailVerification(res.user)
      setStep(2)
    } catch (error) {
      console.log(error)
      throw error
    }
  }


  return (
    <div className="mx-auto max-w-sm mt-16">
            <div className='flex flex-col justify-center items-center text-center'>
          <div className="mb-4">
            <CompanySvg />
          </div>
          <h1 className="text-3xl font-bold">Create a free account</h1>
          <p className="mb-6 text-gray-500">Provide your email and choose a password.</p>
          </div>
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="email">
                Email*
              </label>
              <Input id="email" placeholder="Enter your email" type="email" className="py-6" value={form.email} onChange={handleChange} required/>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="password">
                Password*
              </label>
              <Input id="password" placeholder="Choose a password" type="password" className="py-6" value={form.password} onChange={handleChange} required/>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>
            <Button className="w-full justify-start space-x-2 py-6" variant="outline">
                <GoogleIcon />
              <span>Sign up with Google</span>
            </Button>
            <Button className="w-full justify-start space-x-2 py-6" variant="outline">
              <Apple className="h-5 w-5" />
              <span>Sign up with Apple ID</span>
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleSubmit}>Continue</Button>
          </form>
          <ToastContainer />
        </div>
  )
}

const GoogleIcon = () => {
    return (
        <svg
                className=" h-5 w-5"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" x2="12" y1="8" y2="8" />
                <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
              </svg>
    )
}