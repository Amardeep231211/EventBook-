'use client'

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Naviteamv = () => {

    const pathname=usePathname();
  return (
   <ul className='md:flex-between flex w-full flex-row items-start space-x-5 md:flex-col '>
    {
    headerLinks.map((link)=>{
        const isActive=pathname===link.route;
        return(
            <li
                key={link.route}
                className={`${isActive && 'bg-primary-500'}
                flex-center p-medium-16 whitespace-nowrap`}
                >
                    <Link href={link.route}>{link.label}</Link>

            </li>
        )
    })}
   </ul>
  )
}

export default Naviteamv

