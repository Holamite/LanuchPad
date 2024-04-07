import Button1 from "@/app/helpers/Button1";
import Image from "next/image";
import Link from "next/link";

const NoToken = () => {
    return (
        <div className="flex justify-center py-12">
            <div className="">
                <Image
                src={'/asset/pct.svg'}
                alt="pct"
                height={600}
                width={600}
                />
            </div>
            <div className="flex flex-col justify-center gap-5 w-[400px]">
                <h1 className="text-4xl text-pink-3 leading-normal">
                    You have not created any token yet
                </h1>
                <Link href={'/token?token=true&create=true'}>
                    <Button1
                    className="w-2/3"
                    >
                        Get Started
                    </Button1>
                </Link>
            </div>
        </div>
    );
}

export default NoToken;