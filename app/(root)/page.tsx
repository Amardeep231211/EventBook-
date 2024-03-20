import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'


const page = () => {
  return (
    <>
      <section className='bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col gap-8 justify-center'>
            <h1 className='h1-bold'>Host,Connnect,celebrate:Your event,Our plateform!</h1>
            <h1 className='p-regular-20 md:p-regular-24'>Book and learn helpful tips from 210+ mentors in world-class company with our global community.</h1>
             <Button size="lg" asChild className='button w-full sm:w-fit'>
              <Link href="#events">Explore Now</Link>
             </Button>
          </div>
          <Image src="/assets/image/hero.jpg"
          alt="Hero Image"
           width={600}
           height={1000}
           className='max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]'>
          </Image>
        </div>
      </section>
      <section id='events' className='wrapper my-8 flex flex-col gap:8 md:gap-12 '>
        <h2 className='h2-bold'>Trust by <br/>Thousand of Events</h2>
        <div className='flex flex-col w-full gap-5 md:flex-row'>
          search 
          catergery list

        </div>
      </section>

    </>
  )
}

export default page