import React from 'react'

// icons
import { User } from 'lucide-react';
import { Codesandbox } from 'lucide-react';
import { Mail } from 'lucide-react';
import { UserPen } from 'lucide-react';
import { Rocket } from 'lucide-react';

// utils
import { cn } from '@/lib/utils';

export default function FormSteps({ step }) {
  return (
    <div className='p-6 h-full'>
        <div className='flex flex-col p-8 bg-gray-200 h-full rounded-xl'>
        <div className='flex justify-start items-center mb-20'>
            <Codesandbox size='28' className='text-black mr-2' />
            <h1 className='text-2xl font-black text-black'>GAMBITAI</h1>
        </div>
        <div className='flex flex-col space-y-10 ml-4 relative'>
            {stepsInfo.map((stepinfo, index) => (
            <Steps key={index} {...stepinfo} step={index+1 === step}/>
            ))}
        </div>
        </div>
    </div>
  )
}

const Steps = ({ icon, title, description, step, lastStep = false }) => {
  return (
    <div className='flex items-start relative'>
      {/* Icon container */}
      <div className={cn('flex items-center justify-center p-2 rounded-md bg-white mr-4 relative z-10 font-bold', {
            'font-normal': !step,
      })}>
        { icon }
      </div>

      {/* Line between steps (only show it if it's not the last step) */}
      {!lastStep && (
        <div className='absolute top-8 left-4 h-full w-[1px] bg-gray-300'></div>
      )}

      {/* Step details */}
      <div className='flex flex-col justify-center items-start'>
        <p className={cn('text-sm font-bold text-gray-500', {
            'text-black': step
        })}>{ title }</p>
        <p className={cn('text-gray-400 text-xs font-semi', {
            'text-gray-600': step
        })}>{ description }</p>
      </div>
    </div>
  )
}

const stepsInfo = [
    {
        icon: <User size='16' className='text-black' />,
        title: 'Your details',
        description: 'Provide an email and password'
    },
    {
        icon: <Mail size='16' className='text-black' />,
        title: 'Verify your email',
        description: 'Enter your verifaication code'
    },
    {
        icon: <UserPen size='16' className='text-black' />,
        title: 'complete your profile',
        description: 'fill in your required details'
    },
    {
        icon: <Rocket size='16' className='text-black' />,
        title: 'welcome to gambitai',
        description: 'Get up and running in no time',
        lastStep: true
    }
]
