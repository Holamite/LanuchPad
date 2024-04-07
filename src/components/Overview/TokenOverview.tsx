import useStore from "@/SpidexStore/useStore";


const TokenOverview = () => {
    const tokenInfo = useStore(state => state.tokenInfo)

    return (
        <>
        <div className="flex flex-col gap-5">
            <label className="text-xl">
                Token address
            </label>
            <p className="bg-hero w-full py-4 px-5 rounded-3xl text-neutral-300">
                {tokenInfo.token}
            </p>
        </div>
        {tokenInfo.currency !== "" || undefined && (
            <div className="flex flex-col gap-5">
                <label className="text-xl">
                    Currency address
                </label>
                <p className="bg-hero w-full py-4 px-5 rounded-3xl text-neutral-300">
                    {tokenInfo.currency}
                </p>
            </div>
        )}
        {tokenInfo.whitelist !== "" || undefined && (
            <div className="flex flex-col gap-5">
                <label className="text-xl">
                    Whitelist
                </label>
                <p className="bg-hero w-full py-4 px-5 rounded-3xl text-neutral-300">
                    Enabled
                </p>
            </div>
        )}
        </>
    );
}

export default TokenOverview;