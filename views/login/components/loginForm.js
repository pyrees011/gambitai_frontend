import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-col justify-center px-8 py-12 w-full max-w-md mx-auto">
        <div className="mb-8">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-900"
          >
            <rect width="38" height="38" rx="8" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 11L19 16L24 11H14ZM25 12L20 17L25 22V12ZM19 18L14 23H24L19 18ZM13 12V22L18 17L13 12Z"
              fill="white"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-2 text-black">Sign in</h2>
        <p className="text-gray-800 mb-6">Enter your email to receive a one-time passcode.</p>
        <form className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="amelie@untitledui.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="remember-me"
              checked={rememberMe}
              onCheckedChange={setRememberMe}
            />
            <Label className="text-gray-800" htmlFor="remember-me">Remember me for 30 days</Label>
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Send 4-digit code
          </Button>
          <div className="text-center">
            <span className="text-gray-500">or</span>
          </div>
          <Button variant="outline" className="w-full text-gray-800">
            Sign in with password
          </Button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Need an account?{' '}
          <Link href="/register" className="font-medium text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  )
}