import React from 'react'
import { DefaultAnimatedPage } from '../components/DefaultAnimatedPage';
import { GrContact } from "react-icons/gr";

const Contact = () => {
    return (
        <DefaultAnimatedPage key='contact'>
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <h2 className='text-white font-primary text-4xl mt-6 p-2 pl-6 pr-6 text-center'>Contact Me.</h2>
                <GrContact className='text-white text-5xl mt-4 shadow-md' />


            </div>
        </DefaultAnimatedPage>
    );
}

export default Contact;