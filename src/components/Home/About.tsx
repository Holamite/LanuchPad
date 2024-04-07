import Image from "next/image";
import access from "@/../public/asset/access.svg"
import Button1 from "@/app/helpers/Button1";
import Button2 from "@/app/helpers/Button2";

const About = () => {
    return (
        <div className="flex flex-col gap-28">
            <div className="container mx-auto">
                <h1 className="text-5xl font-semibold font-hanken w-80 py-5 bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
                    About Spidex
                </h1>
                <p className="lg:text-xl">
                    Spidex is building towards becoming the first decentralized one-stop-shop for everything DeFi
                    utilizing account abstraction to abstract gas fee and enhance one click interaction for all.
                    With Spidex, User&apos;s will enjoy DeFi with the experience of a centralized finance
                    and still have full custody of their asset.
                </p>
            </div>
            <div className="container mx-auto flex justify-between">
                <div className="w-[550px] flex flex-col gap-8">
                    <h1 className="text-5xl font-hanken leading-tight">
                    Your ticket to <span className="bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
                        explore and invest
                    </span>
                    </h1>
                    <p className="lg:text-lg">
                    Explore DeFi with CeFi experience.
                    From getting early access to project to DeFi interactions, we&apos;ve got you covered. The future of finance and innovation awaits!
                    </p>
                    <div className="flex gap-8">
                        <div className="w-3/4 bg-hero p-5 flex flex-col gap-2 rounded-md text-center">
                            <p className="text-3xl font-semibold w-32 mx-auto bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
                                23,894
                            </p>
                            <p>Total Projects</p>
                        </div>
                        <div className="w-3/4 bg-hero p-5 flex flex-col gap-2 rounded-md text-center">
                            <p className="text-3xl font-semibold w-32 mx-auto bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9]">
                                10,894
                            </p>
                            <p>Total Successful Projects</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-5">
                        <Button1>
                            Launch Spidex pad
                        </Button1>
                        <Button2>
                            Create token
                        </Button2>
                    </div>
                </div>
                <div className="-mt-24">
                    <Image
                    src={access}
                    alt="access"
                    height={750}
                    />
                </div>
            </div>
        </div>
    );
}

export default About;