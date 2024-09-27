import React, { useState } from 'react'

// component
import FormSteps from './component/formSteps'
import FirstForm from './component/firstForm'

// utils
import { cn } from '@/lib/utils'
import SecondForm from './component/secondForm'
import ThirdForm from './component/thirdForm'
import FourthForm from './component/fourthForm'

// icons
import { ChevronLeft } from 'lucide-react';

export default function RegisterView() {
    const [step, setStep] = useState(1)

    const handleGoBack = () => {
        if(step === 1) return
        setStep(step-1)
    }

  return (
    <div className='flex justify-center items-center bg-white'>
        <div className='w-1/3 h-screen'>
            <FormSteps step={step}/>
        </div>
        <div className='w-2/3 p-8 h-screen'>
            { step !== 1 &&
                <div className='flex items-center mt-4 hover:cursor-pointer hover:-translate-y-0.5 w-fit' onClick={handleGoBack}>
                    <ChevronLeft size='20' className='text-black'/>
                    <h1 className='text-sm font-semibold text-black'>back</h1>
                </div>
            }
            <div className='h-full w-full flex items-center justify-center text-black'>
                <div className="flex flex-col h-full p-8">
                    { step === 1 && 
                        <FirstForm setStep={setStep}/>
                    }
                    { step === 2 &&
                        <SecondForm setStep={setStep}/>
                    }
                    { step === 3 &&
                        <ThirdForm setStep={setStep}/>
                    }
                    { step === 4 &&
                        <FourthForm />
                    }
                    <div className="flex items-center space-x-4 mt-auto transition-colors">
                        { Array.from({ length: 4 }).map((_, index) => (
                                <FooterButton key={index} active={index === step-1}/>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const FooterButton = (props) => {
    return (
        <div className={cn('h-1 flex-1 rounded-full bg-gray-200', {
            'bg-black': props.active
        })} />
    )
}