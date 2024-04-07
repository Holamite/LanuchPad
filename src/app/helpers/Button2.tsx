'use client'
import { ButtonProps } from "./Button1";

const Button2 = ({children, ...props}: ButtonProps) => {
    const handleClick = () => {
        props.onClick?.()
    }

    return (
        <button className="p-[2px] rounded-xl bg-gradient-to-r from-spi-pink-2 via-spi-blue-2 to-spi-purple-2 text-neutral-100 font-semibold" onClick={handleClick}>
            <p className={`bg-black rounded-xl w-full h-full px-8 py-2 hover:bg-neutral-800 ${props.className}`}>
                {children}
            </p>
        </button>
    );
}

export default Button2;