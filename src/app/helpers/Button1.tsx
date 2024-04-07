'use client'
import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode,
    className?: string,
    onClick?: () => void
}

const Button1 = ({children, ...props}: ButtonProps) => {
    const handleClick = () => {
        props.onClick?.()
    }

    return (
        <button
            className={`px-8 py-2 rounded-xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1 text-neutral-100 font-semibold ${props.className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button1;