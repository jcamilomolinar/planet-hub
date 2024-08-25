import React from 'react';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/Logo.png'

function NavBar() {
  return (
    <nav className='bg-palleteBlue flex justify-between'>
      <Link href='/'>
        <div className='flex items-center p-2 space-x-4'>
          <Image src={Logo} width={75} height={75} alt='PlanetHub App Logo' />
          <span className='text-white text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>PlanetHub</span>
        </div>
      </Link>
      <ul className='flex items-center space-x-20 text-black p-4 bg-opacity-10'>
        <li>
          <Button asChild className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-lg' variant='ghost'>
            <Link href='/planets'>Planets</Link>
          </Button>
        </li>
        <li>
          <Button asChild className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-lg' variant='ghost'>
            <Link href='/flights'>Flights</Link>
          </Button>
        </li>
        <li>
          <Button asChild className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-lg' variant='ghost'>
            <Link href='/accommodations'>Accommodations</Link>
          </Button>
        </li>
        <li>
          <Button asChild className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-lg' variant='ghost'>
            <Link href='/signin'>Sign In</Link>
          </Button>
        </li>
        <li>
          <Button asChild className='text-textTitle drop-shadow-[0_1.2px_1.2px_rgba(155,155,155,0.8)] text-lg' variant='outline'>
            <Link href='/signup'>Sign Up</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;