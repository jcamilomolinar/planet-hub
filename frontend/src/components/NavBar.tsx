import React from 'react';
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo.svg'

function NavBar() {
  return (
    <nav className='bg-[#18D9D9] flex justify-between'>
      <Link href='/'>
        <div className='flex items-center'>
          <Image src={Logo} width={65} height={65} alt='BabySearch App Logo' />
          <span className='text-white text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>BabySearch</span>
        </div>
      </Link>
      <ul className='flex items-center space-x-4 text-black p-4 bg-opacity-10'>
        <li>
          <Button asChild className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-lg' variant='ghost'>
            <Link href='/querybuilder'>Query Builder</Link>
          </Button>
        </li>
        <li>
          <Button asChild className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-lg' variant='ghost'>
            <Link href='/queries'>Queries</Link>
          </Button>
        </li>
        <li>
          <Button asChild className='text-black drop-shadow-[0_1.2px_1.2px_rgba(155,155,155,0.8)] text-lg' variant='outline'>
            <Link href='/about'>About this project</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
