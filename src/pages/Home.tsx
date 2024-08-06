import React from 'react'
import profile from '../assets/profile.png';

const Avatar = () => {
    return (
        <div className='w-64 h-64 rounded-full shadow-2xl mb-8'>
            <img className='w-64 h-64 rounded-full' src={profile} alt='avatar' />
        </div>
    );
}

const Home = () => {
    return (
        <div className='min-h-screen text-white font-primary flex flex-col items-center justify-center ml-4'>
            <Avatar />
            <div className='p-4 shadow-xl rounded-md bg-opacity-5 bg-white flex flex-col items-center justify-center'>
                <h1 className='font-light text-center tracking-wide mb-4 text-4xl'>
                    I am <span className='font-black'>Andero</span>, a <span className='font-bold'>game developer</span> and <span className='font-bold'>software engineer</span>!
                </h1>
                <h2 className='font-light tracking-wide text-3xl'>Welcome to my portfolio!</h2>
            </div>
        </div>
    );
}

export default Home