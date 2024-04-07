import PadAsset from "@/assets/PadAsset";

const Params = () => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-5 basis-1/2 relative">
                <input
                type="text"
                className="rounded-[40px] pl-12 pr-6 py-2 w-full text-xl placeholder:text-neutral-200 placeholder:font-space bg-hero outline-none border border-neutral-700"
                placeholder="Search launchpads, token or symbols"
                />
                <button className="px-14 py-2 text-xl font-normal rounded-2xl bg-gradient-to-r from-[#E32882] hover:from-[#e32882a8] via-[#2C8BC0] hover:via-[#2c8cc0ab] to-[#BB0CE7] hover:to-[#bb0ce7a2] text-neutral-100">
                    Search
                </button>
                {/* Icon */}
                <div className="absolute left-4 top-3">
                    {PadAsset().search()}
                </div>
            </div>
            <div className="flex gap-5">
                <button className="px-8 py-2 border border-neutral-700 rounded-[40px] text-neutral-200 text-xl flex gap-4 hover:bg-neutral-900">
                    <div className="pt-1">
                        {PadAsset().filters()}
                    </div>
                    <p>
                        Apply filters
                    </p>
                </button>
                <button className="px-8 py-2 border border-neutral-700 rounded-[40px] text-neutral-200 text-xl flex gap-4 hover:bg-neutral-900">
                    <div className="pt-1">
                        {PadAsset().sort()}
                    </div>
                    <p>
                        Sort by
                    </p>
                    <div className="py-[10px]">
                        {PadAsset().arrowdown()}
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Params;