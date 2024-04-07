import { ReactNode } from "react";

export interface FormType {
    children: ReactNode,
    className?: string
}

const FormTemplate = ({children, ...props}: FormType) => {
    return (
        <div className={`p-[2px] mb-24 rounded-2xl bg-gradient-to-r from-spi-pink via-spi-blue to-spi-purple ${props.className}`}>
            <div className="bg-black rounded-2xl w-full h-full p-20">
                {children}
            </div>
        </div>
    )
}

export default FormTemplate