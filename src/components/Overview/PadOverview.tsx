import useStore from "@/SpidexStore/useStore";


const PadOverview = () => {
    const padInfo = useStore(state => state.padinfo)

    return (
        <>
        <div className="flex justify-between gap-20">
            <div className="flex flex-col gap-5 basis-1/2">
                <label className="text-xl">
                    Softcap
                </label>
                <p className="bg-hero w-full py-4 px-5 rounded-3xl text-neutral-300">
                    {padInfo.softcap}
                </p>
            </div>
            <div className="flex flex-col gap-5 basis-1/2">
                <label className="text-xl">
                    Hardcap
                </label>
                <p className="bg-hero w-full py-4 px-5 rounded-3xl text-neutral-300">
                    {padInfo.hardcap}
                </p>
            </div>
        </div>
        <div className="flex justify-between gap-20">
            <div className="flex flex-col gap-5 basis-1/2">
                <label className="text-xl">
                    Minimum Buy
                </label>
                <p className="bg-hero w-full py-4 px-5 rounded-3xl text-neutral-300">
                    {padInfo.minBuy}
                </p>
            </div>
            <div className="flex flex-col gap-5 basis-1/2">
                <label className="text-xl">
                    Maximum Buy
                </label>
                <p className="bg-hero w-full py-4 px-5 rounded-3xl text-neutral-300">
                    {padInfo.maxBuy}
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <label className="text-xl">
                Presale rate
            </label>
            <p className="bg-hero w-full py-4 px-5 rounded-3xl text-neutral-300">
                {padInfo.presaleRate}
            </p>
        </div>
        {padInfo.tge !== "" || undefined && (
            <>
            <div className="flex justify-between gap-20">
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Token at TGE (%) (month)
                    </label>
                    <p className="bg-hero w-full py-4 px-5 rounded-3xl text-neutral-300">
                        {padInfo.tge}
                    </p>
                </div>
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Cliff (Month)
                    </label>
                    <p className="bg-hero w-full py-4 px-5 rounded-3xl text-neutral-300">
                        {padInfo.cliff}
                    </p>
                </div>
            </div>
            <div className="flex justify-between gap-20">
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Vesting Duration (Month)
                    </label>
                    <p className="bg-hero w-full py-4 px-5 rounded-3xl text-neutral-300">
                        {padInfo.vestingDuration}
                    </p>
                </div>
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                    Frequency (Month)
                    </label>
                    <p className="bg-hero w-full py-4 px-5 rounded-3xl text-neutral-300">
                        {padInfo.frequency}
                    </p>
                </div>
            </div>
            </>
        )}
        </>
    );
}

export default PadOverview;