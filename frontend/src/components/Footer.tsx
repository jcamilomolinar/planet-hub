import LogoGH from '../../public/gh_icon.svg'
import Image from 'next/image'
import LogoLI from '../../public/li_icon.svg'

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-[#082359] text-primary-content text-white text-center">
      <p><span className='font-bold'>2023 © BabySearch™.</span> All Rights Reserved.</p>
      <p>Made by jcamilomolinar with ❤️</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com/jcamilomolinar" target="_blank" rel="noopener noreferrer">
          <Image src={LogoGH} width={25} height={60} alt='Github Logo' />
        </a>
        <a href="https://www.linkedin.com/in/jcamilomolinar/" target="_blank" rel="noopener noreferrer">
          <Image src={LogoLI} width={30} height={60} alt='Linkedin Logo' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;