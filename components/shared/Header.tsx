import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Naviteam from '../shared/Naviteam'
import MobileNav from '../shared/MobileNav'
function Header() {
    return (
        <header className="w-full border-b  shadow-md">
          <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-36">
              <Image 
                src="/assets/image/logo1.png" width={90} height={38}
                alt="Evently logo" 
                className='rounded-xl shadow-lg shadow-blue-400'
              />
            </Link>
           

            <SignedIn>
              <nav className=" md:flex-between hidden w-full max-w-xs">
                <Naviteam />
              </nav>
            </SignedIn>
    
            <div className="flex w-32 justify-end gap-3">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
                <MobileNav />
              </SignedIn>
              <SignedOut>
                <Button asChild className="rounded-full shadow-blue-200 shadow-md" size="lg">
                  <Link href="/sign-in">
                    Login
                  </Link>
                </Button>
              </SignedOut>
            </div>
          </div>
        </header>
      )
    }


export default Header