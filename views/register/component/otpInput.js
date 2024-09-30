import React, { useState } from 'react'
import { OTPInput } from 'input-otp'

// utils
import { cn } from '@/lib/utils'

export default function OtpInput({ setOtp }) {
  return (
    <OTPInput
        maxLength={4}
        containerClassName="group flex items-center justify-center has-[:disabled]:opacity-30"
        onChange={setOtp}
        render={({ slots }) => (
            <>
            <div className="flex space-x-4">
                {slots.slice(0, 4).map((slot, idx) => (
                <Slot key={idx} {...slot} />
                ))}
            </div>
            </>
        )}
    />
  )
}

function Slot(props) {
    return (
      <div
        className={cn(
          'relative w-14 h-16 text-[2rem]',
          'flex items-center justify-center',
          'transition-all duration-300',
          'border-border border rounded-md',
          'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
          'outline outline-0 outline-accent-foreground/20',
          { 'outline-4 outline-accent-foreground': props.isActive },
        )}
      >
        {props.char !== null && <div>{props.char}</div>}
        {props.hasFakeCaret && <FakeCaret />}
      </div>
    )
  }

  function FakeCaret() {
    return (
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
        <div className="w-px h-8 bg-white" />
      </div>
    )
  }