import React from 'react'
import profile from '../assets/profile.png';
import Button from '../components/Button';

import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

import { DefaultAnimatedPage } from '../components/DefaultAnimatedPage';


const Avatar = () => {
    return (
        <div className='w-64 h-64 rounded-full shadow-2xl mb-8'>
            <img className='w-64 h-64 rounded-full' src={profile} alt='avatar' />
        </div>
    );
}

const Home = () => {
    return (
        <DefaultAnimatedPage key="home" className='min-h-screen text-white font-primary flex flex-col items-center justify-center ml-4'>
            <Avatar />
            <div className='p-4 shadow-xl bg-opacity-5 bg-white flex flex-col items-center justify-center'>
                <h1 className='font-light text-center tracking-wide mb-4 text-6xl'>
                    Hi, I am <span className='bg-gradient-to-r from-accent to-accent-pastel inline-block text-transparent bg-clip-text font-black'>Andero</span>.
                </h1>
                <h2 className='font-light tracking-widest text-xl'>Game developer, software engineer.</h2>
            </div>
            {/* <Button>
                <Link to='/' className='p-2 bg-accent shadow-md m-4 flex flex-row items-center justify-center gap-3'>
                    <IoChatboxEllipses className='text-2xl ml-1' />
                    <h2 className='text-2xl tracking-wider font-bold mr-1'>GET IN TOUCH</h2>
                </Link>
            </Button> */}
            <div className='flex flex-row gap-4 mt-4'>
                <Button className='p-3 shadow-lg bg-primary-dark transition ease-in-out hover:bg-accent'>
                    <a href='mailto:andero2003@gmail.com' target='_blank'>
                        <IoMail className='text-4xl' />
                    </a>
                </Button>
                <Button className='p-3 shadow-lg bg-primary-dark transition ease-in-out hover:bg-accent'>
                    <a href='https://github.com/andero2003' target='_blank'>
                        <FaGithub className='text-4xl' />
                    </a>
                </Button>
                <Button className='p-3 shadow-lg bg-primary-dark transition ease-in-out hover:bg-accent'>
                    <a href='https://x.com/devandero' target='_blank'>
                        <FaXTwitter className='text-4xl' />
                    </a>
                </Button>
            </div>
        </DefaultAnimatedPage>
    );
}

export default Home