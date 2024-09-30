import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className=" border-t border-gray-200 py-8 mt-8">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Subscribe Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Stay in the loop</h2>
            <p className="text-gray-600">Get the latest updates and news.</p>
            <div className="flex mt-4 space-x-2">
              <Input type="email" placeholder="Enter your email" className="max-w-xs" />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
            </div>
          </div>
          {/* Links Section */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-12">
            <FooterLinkSection title="Company">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Press</Link>
            </FooterLinkSection>
            <FooterLinkSection title="Support">
              <Link href="/">Help Center</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
            </FooterLinkSection>
            <FooterLinkSection title="Contact">
              <Link href="/">Contact Us</Link>
              <Link href="/">Locations</Link>
              <Link href="/">Sponsorships</Link>
            </FooterLinkSection>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; 2024 GAMBITAI. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/" aria-label="Facebook" className="text-gray-500 hover:text-gray-700">
              Facebook
            </Link>
            <Link href="/" aria-label="Twitter" className="text-gray-500 hover:text-gray-700">
              Twitter
            </Link>
            <Link href="/" aria-label="Instagram" className="text-gray-500 hover:text-gray-700">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLinkSection({ title, children }) {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-2">
        {React.Children.map(children, (child) => (
          <li className="text-gray-600 hover:text-gray-800">{child}</li>
        ))}
      </ul>
    </div>
  )
}
