import React from 'react'
import { DefaultAnimatedPage } from '../components/DefaultAnimatedPage';

const Missing = () => {
    return (
        <DefaultAnimatedPage className='flex items-center' key='missing'>
            <h1 className='text-6xl'>
                404 Page Not Found!
            </h1>
        </DefaultAnimatedPage>
    );
}

export default Missing