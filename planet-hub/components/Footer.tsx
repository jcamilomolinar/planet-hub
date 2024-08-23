import Image from 'next/image'
import LogoFacebook from '@/public/facebook_icon.svg'
import LogoInstagram from '@/public/instagram_icon.svg'
import LogoTwitter from '@/public/twitter_icon.svg'
import LogoYoutube from '@/public/youtube_icon.svg'
import { Separator } from "@/components/ui/separator"

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-palleteBlueVariant text-primary-content text-white text-center">
        <div className="flex justify-center space-x-6 mt-4 p-6">
            <a href="" target="_blank" rel="noopener noreferrer">
            <Image src={LogoFacebook} width={40} height={40} alt='Github Logo' />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <Image src={LogoTwitter} width={40} height={40} alt='Linkedin Logo' />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <Image src={LogoInstagram} width={40} height={40} alt='Github Logo' />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <Image src={LogoYoutube} width={40} height={40} alt='Github Logo' />
            </a>
        </div>
        <Separator className="my-4" />
        <p><span className='font-bold'>2024 © PlanetHub.</span> All Rights Reserved.</p>
        <p>Made by PlanetHub Team with ❤️</p>
    </footer>
  );
}

export default Footer;