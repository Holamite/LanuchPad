import { ReactNode } from "react"


export interface InputType {
    children: ReactNode

}


const InputDecorator = ({children}: InputType) => {
    return (
        <div className="p-[2px] rounded-3xl focus-within:bg-gradient-to-r from-b-pink via-b-blue to-b-purple">
            <div className="bg-hero rounded-3xl flex gap-5 pl-5 pr-4">
                {children}
            </div>
        </div>
    )
}

export default InputDecorator;