"use client";

import { 
  useState,
  useEffect
} from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/Logo.png'
import { LoginForm } from '@/components/LoginSheet'
import { SignUpForm } from '@/components/SignUpSheet'
import { UserMenu } from '@/components/UserMenu'

function NavBar() {
  const [isLogged, setIsLogged] = useState<boolean>();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLogged(true)
    }
  }, []);

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
            <Link href='/accomodation'>Accomodations</Link>
          </Button>
        </li>
        <li>
          <Button asChild className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-lg' variant='ghost'>
            <Link href='/flights'>Flights</Link>
          </Button>
        </li>
        <div>
          {isLogged && (
              <div>
                <UserMenu setIsLogged={setIsLogged} />
              </div>
          )}
          {!isLogged && (
            <div className='flex gap-5 mx-3'>
              <li>
                <LoginForm setIsLogged={setIsLogged} />
              </li>
              <li>
                <SignUpForm />
              </li>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;