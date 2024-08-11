import React, { useState } from 'react'
import { Outlet, Link, useLocation, useOutlet } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import Button from '../components/Button';
import { AnimatePresence, motion } from 'framer-motion';

import './Layout.css';

type NavigationBarButtonProps = {
    to: string
    text: string
}

const NavigationBarButton = ({ to, text }: NavigationBarButtonProps) => {
    const location = useLocation();
    const pathname = location.pathname;

    const isSelected = pathname === to;

    return (
        <Button>
            <Link to={to} className={'text-primary-neutral mx-2 pr-3 pl-3 transition-all'}>
                <span className='underline-effect'>{text}</span>
            </Link>
        </Button>
    )
}

type NavigationBarProps = {
    isShown: boolean
}

const NavigationBar = ({ isShown }: NavigationBarProps) => {
    return (
        <nav className={
            'text-2xl ml-4' + (isShown ? '' : ' hidden')
        }>
            <NavigationBarButton to='/' text='Home' />
            <NavigationBarButton to='/projects' text='Projects' />
        </nav>
    )
}

const AnimatedOutlet = () => {
    const location = useLocation();
    const element = useOutlet();

    return (
        <AnimatePresence mode="wait" initial={true}>
            {element && React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
    );
};

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <>
            <div className='p-4 mt-1 flex items-center flex-row justify-between font-primary'>
                <h1 className='text-primary-neutral font-bold ml-2 text-3xl tracking-widest shadow-lg'>
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

            <AnimatedOutlet />
        </>
    );
}

export default Layout