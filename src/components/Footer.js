import { ReactComponent as Wave } from '../assets/wave.svg';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';

function Footer() {
    return (
        <footer>
            <Wave></Wave>
            <div className="bg-black text-white text-center">
          <div className="container mx-auto md:text-start md:grid md:grid-cols-2 p-5">
            <div className='py-10'>
              <p className='mb-7'>This website was created by Franklin Ramirez 
                using <a href="https://react.dev/">React</a> & <a href="https://tailwindcss.com/">Tailwind CSS.</a></p>
              <p className='mb-7'>Credits to <a href="https://www.freecodecamp.org/">freeCodeCamp</a>,
                <a href="https://getwaves.io/"> GetWaves.io</a> &
                <a href="https://react-icons.github.io/react-icons"> React-Icons.</a></p>
            </div>
            <div className='md:text-end'>
              <div className='grid justify-items-center md:justify-items-end'>
              <img
                className='w-48 mb-7'
                src={require('../assets/logo-black.png')}
                alt='logo' />
              </div>
              <div className='mb-7'>
                <a href="https://github.com/frankramirezsoto" className='inline-block'><AiFillGithub  className='p-2' size='4.5rem'/></a>
                <a href="https://www.linkedin.com/in/franklinramirezsoto/" className='inline-block'><AiFillLinkedin  className='p-2' size='4.5rem'/></a>
                <a href="https://github.com/frankramirezsoto" className='inline-block'><BsGlobe className='p-2' size='4.5rem'/></a>
              </div>
              <p className='mb-7'>2023</p>
            </div>
          </div>
        </div>
        </footer>
    )
}

export default Footer;