import { ReactNode } from "react";
import { InputType } from "./Input";


const FileDecorator = ({children}: InputType) => {
    return (
        <div className="p-[1px] rounded-3xl hover:bg-gradient-to-r focus-within:bg-gradient-to-r from-spi-pink via-spi-blue to-spi-purple">
            <div className="bg-hero rounded-3xl flex gap-5 pl-5 pr-4">
                {children}
            </div>
        </div>
    )
}

export default FileDecorator;