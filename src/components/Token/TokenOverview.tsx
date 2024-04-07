import Button1 from "@/app/helpers/Button1"
import Button2 from "@/app/helpers/Button2"

interface TokenParams {
    name: string
    symbol: string
    totalSupply: string
    address: string
}

const TokenOverview = (props: TokenParams) => {
    return (
        <div className="w-[500px] flex flex-col gap-5 my-5 bg-black rounded-2xl p-8 text-neutral-100">
            {/* Header */}
            <h1 className="text-xl">
                {props.name}
            </h1>
            <div className="flex justify-between">
                <p className="text-neutral-300 text-xl">Name</p>
                <p className="font-bold my-auto">{props.name}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-neutral-300 text-xl">Symbol</p>
                <p className="font-bold my-auto">{props.symbol}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-neutral-300 text-xl">Total Supply</p>
                <p className="font-bold my-auto">{props.totalSupply}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-neutral-300 text-xl">Address</p>
                <p className="font-bold my-auto">{(props.address)?.slice(0,8)}.....{(props.address)?.slice(36,42)}</p>
            </div>
            <div className="mt-8 flex justify-center gap-10">
                <Button1>
                    View Transactions
                </Button1>
                <Button2>
                    Create Launchpad
                </Button2>
            </div>
        </div>
    );
}

export default TokenOverview;