import React from 'react'
import './Button.css';

type ButtonProps = {
    children: React.ReactNode,
} & React.ComponentProps<'button'>;

function Button({ children, ...rest }: ButtonProps) {
    return (
        <button {...rest}>
            {children}
        </button>
    )
}

export default Button