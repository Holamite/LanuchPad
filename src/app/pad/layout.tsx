'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PadNav = [
    {
        name: "All Pads",
        url: "/pad?pad=true&pads=true",
        param: "pads"
    },
    {
        name: "My Pads",
        url: "/pad/user-pad?pad=true&user=true",
        param: "user"
    }
]

const PadLayout = ({
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    const search = useSearchParams();

    return (
        <div className="bg-hero px-20">
            <div className="container mx-auto flex flex-col gap-10">
                <div className="bg-pad-hero bg-cover bg-center rounded-3xl px-16 py-24 mb-8 flex flex-col justify-center">
                    <div className="flex">
                        <h1 className="text-4xl font-space flex flex-col font-bold leading-snug basis-1/2">
                            Your ticket to
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
                                explore and invest
                            </span>
                        </h1>
                        <h1 className="basis-1/2 lg:text-lg xl:text-xl">
                            We meticulously select projects through a rigorous vetting process that encompasses everything from the project team&apos;s background to their credibility and execution capabilities
                        </h1>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-4xl font-semibold font-space py-3">
                        Spidex <span className="text-[#ade2ffc7]">Pads</span>
                    </h1>
                    <div className="bg-black rounded-[40px] px-4 py-3 flex gap-5">
                        {PadNav.map((item, index) => (
                            <Link
                                href={item.url}
                                key={index}
                                className={`px-6 py-2 text-lg outline-none border-0 rounded-[40px] hover:bg-hero hover:text-pink-3 ${search.get(item.param) == "true" && "text-pink-3 bg-hero"}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

export default PadLayout;