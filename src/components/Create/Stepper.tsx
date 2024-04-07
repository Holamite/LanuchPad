'use client'
import useStore from "@/SpidexStore/useStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export interface StepperType {
    steps: number
}


const Stepper = (param: StepperType) => {
    const pathname = usePathname()

    const steps = useStore((state) => state.steps)
    const updateStep = useStore(state => state.updateStep)


    useEffect(() => {
        if(pathname == '/create') {
            updateStep(1)
        }
    }, [pathname, updateStep])

    return (
        <>
        <div className="bg-black-1 w-full h-5 rounded-[80px]">
            <div
                className="h-5 bg-gradient-to-r rounded-[80px] from-spi-pink-1 via-spi-blue-1 to-spi-purple-1"
                style={{"width": `${(steps/param.steps) * 100}%`}}
            ></div>
        </div>
        </>
    );
}

export default Stepper;