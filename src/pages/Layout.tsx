import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import Button from '../components/Button';

type NavigationBarProps = {
    isShown: boolean
}

function NavigationBar({ isShown }: NavigationBarProps) {
    return (
        <nav className={
            'text-2xl ml-4' + (isShown ? '' : ' hidden')
        }>
            <Button>
                <Link to='/' className='text-primary-neutral mx-2 pr-3 pl-3 transition-all'>
                    Home
                </Link>
            </Button>
            <Button>
                <Link to='projects' className='text-primary-neutral mx-2 transition-all'>
                    Projects
                </Link>
            </Button>
        </nav>
    )
}

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className='bg-primary-dark p-4 flex items-center flex-row justify-between font-primary shadow-2xl'>
                <h1 className='text-primary-neutral font-bold text-3xl tracking-widest shadow-lg'>
                    ANDERO LAVRINENKO
                </h1>

                <div className='flex flex-row'>
                    <Button onClick={
                        () => setIsMenuOpen(!isMenuOpen)
                    }>
                        <IoMenu className={'text-primary-neutral text-4xl transition duration-200 ' + (isMenuOpen ? 'rotate-180' : '')} />
                    </Button>

                    <NavigationBar isShown={isMenuOpen} />
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Layout