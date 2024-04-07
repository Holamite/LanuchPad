'use client'
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import corner1 from "../../../public/asset/corner1.svg"
import corner2 from "../../../public/asset/corner2.png"


const CreateToken = [
    {
        name: "Create token",
        url: "/token?token=true&create=true",
        param: "create"
    },
    {
        name: "Previously Created Tokens",
        url: "/token/prev?token=true&prev=true",
        param: "prev"
    }
]

const TokenLayout = ({
    children
}: Readonly<{
    children: ReactNode
}>) => {
    const search = useSearchParams()

    return (
        <div className="relative bg-hero px-20">
            <div className="container mx-auto flex flex-col gap-12">
                <div className="bg-create-hero bg-cover bg-center rounded-3xl px-16 py-24 mb-8 flex flex-col justify-center z-20">
                    <div className="flex justify-between">
                        {CreateToken.map((item, index) => (
                            <Link
                                href={item.url}
                                key={index}
                                className={`text-4xl pb-2 text-gray-400 ${search.get(item.param) == "true" && "text-white border-b-4 border-white"}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="z-20">
                    {children}
                </div>
            </div>

            {/* designs */}
            <div className="absolute right-0 top-40">
                <Image
                src={corner1}
                alt="corner1"
                priority={true}
                />
            </div>
            <div className="absolute left-0 bottom-0">
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

export default TokenLayout;