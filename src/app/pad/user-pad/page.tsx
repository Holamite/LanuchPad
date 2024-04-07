'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const UserPad = () => {
    const router = useRouter();
    return (
        <div className="flex justify-center my-24 relative">
            <div>
                <Image
                src={'/asset/contribution-null.svg'}
                alt="contribution svg"
                width={450}
                height={450}
                />
            </div>
            <div className="flex flex-col justify-center gap-5 w-[310px]">
                <h1 className="text-pink-3 text-4xl leading-normal">
                    Snap! You have not Participated in Pad
                </h1>
                <button
                    className="px-8 py-2 rounded-3xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1 text-neutral-200"
                    onClick={() => router.push("/pad?pad=true&pads=true")}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default UserPad;