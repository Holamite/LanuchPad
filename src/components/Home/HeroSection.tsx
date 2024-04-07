import Image from "next/image";
import hero from "@/../public/asset/hero.svg";
import Button1 from "@/app/helpers/Button1";
import Button2 from "@/app/helpers/Button2";

const HeroSection = () => {
    return (
        <section className="container mx-auto py-24 pl-8 hero-gradient rounded-3xl">
            <div className="flex gap-10 2xl:w-[1280px] mx-auto">
                <div className="w-[580px] flex flex-col gap-4">
                    <h1 className="font-hanken text-4xl font-light leading-snug">
                    Explore and interact in the most {" "}
                    <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-spi-pink via-spi-blue to-spi-purple">
                        promising blockchain projects
                    </span> {" "}
                    and say {" "}
                    <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-spi-pink via-spi-blue to-spi-purple">
                        goodbye to gas fees
                    </span>{" "}
                    slowing you down
                    </h1>
                    <div className="text-neutral-100 text-lg">
                        Spidex is a one-stop-shop that covers every web3 defi explorations such as instant creation of custom tokens, IDO participation and gasless swap of tokens without any hassle!
                    </div>
                    <div className="flex gap-5 mt-5">
                        <Button1> 
                            Explore Spidex
                        </Button1>
                        <Button2>
                            Instant Swap
                        </Button2>
                    </div>
                </div>
                <div className="relative w-1/2 2xl:h-[500px]">
                    <Image
                    src={hero}
                    alt="hero"
                    className="absolute inset-0"
                    />
                </div>
            </div>

        </section>
    );
}

export default HeroSection;