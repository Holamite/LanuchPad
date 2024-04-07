import Image from "next/image";
import swap from "@/../public/asset/swap-card.svg"
import Button2 from "@/app/helpers/Button2";

const Seamless = () => {
    return (
        <div className="container mx-auto flex justify-between">
            <div className="flex flex-col gap-8 justify-center">
                <p className="w-[480px] text-3xl font-light leading-relaxed">
                    Seamless Gasless Swap with Pride. Tired of high gas fees slowing you down? Say goodbye to those hassles with our gasless swap feature.
                </p>
                <Button2>
                    Swap Now
                </Button2>
            </div>
            <div className="-mt-44 -z-20">
                <Image
                src={swap}
                alt="swap"
                />
            </div>
        </div>
    );
}

export default Seamless;