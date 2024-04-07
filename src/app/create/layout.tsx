import Stepper from "@/components/Create/Stepper";
import Image from "next/image";
import { ReactNode } from "react";
import corner1 from "../../../public/asset/corner1.svg"
import corner2 from "../../../public/asset/corner2.png"



const CreateLayout = ({
    children
}: Readonly<{
    children: ReactNode
}>) => {

    return (
        <div className="relative bg-hero px-20 flex flex-col gap-16">
            <div className="container mx-auto flex flex-col gap-10">
                <div className="bg-create-hero bg-cover bg-center rounded-3xl px-16 py-24 mb-8 flex flex-col justify-center">
                    <div className="flex justify-between">
                        <h1 className="text-4xl font-semibold font-space bg-clip-text text-transparent bg-gradient-to-r from-spi-pink via-spi-blue to-spi-purple">
                            Create Pad
                        </h1>
                        <p className="basis-1/2 font-normal text-2xl">
                            Are you ready to introduce your blockchain project to the world? Our Web3 Launchpad makes it effortless to turn your ideas into reality
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col gap-8 z-20">
                <Stepper
                steps={4}
                />
                {children}
            </div>

            {/* designs */}
            <div className="absolute right-0 top-80">
                <Image
                src={corner1}
                alt="corner1"
                priority={true}
                />
            </div>
            <div className="absolute left-0 bottom-32">
                <Image
                src={corner2}
                alt="corner2"
                priority={true}
                />
            </div>

            <div className="absolute right-0 top-[640px] h-80 w-40 rounded-full bg-[#2fb6ff34] blur-[120px]">
            </div>
            <div className="absolute left-0 bottom-[500px] h-80 w-40 rounded-full bg-[#2fb6ff34] blur-[120px]">
            </div>
        </div>
    );
}

export default CreateLayout;