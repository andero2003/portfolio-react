import React from 'react'
import profile from '../assets/profile.png';
import Button from '../components/Button';

import { GrContact } from "react-icons/gr";
import { Link } from 'react-router-dom';

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
                <h1 className='font-light text-center tracking-wide mb-4 text-4xl'>
                    I am <span className='font-black'>Andero</span>, a <span className='font-bold'>game developer</span> and <span className='font-bold'>software engineer</span>!
                </h1>
                <h2 className='font-light tracking-wide text-3xl'>Welcome to my portfolio!</h2>
            </div>
            <Button>
                <Link to='/contact' className='p-2 bg-accent shadow-md m-4 flex flex-row items-center justify-center gap-3'>
                    <GrContact className='text-2xl ml-1' />
                    <h2 className='text-2xl tracking-wider font-bold mr-1'>GET IN TOUCH</h2>
                </Link>
            </Button>
        </DefaultAnimatedPage>
    );
}

export default Home