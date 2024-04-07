'use client'
import TokenOverview from "./TokenOverview";
import PadOverview from "./PadOverview";
import ProjectOverview from "./ProjectOverview";
import useStore from "@/SpidexStore/useStore";
import { useRouter } from "next/navigation";
import Button2 from "@/app/helpers/Button2";

const OverviewForm = () => {
    const router = useRouter()
    const updateStep = useStore(state => state.updateStep)

    const handlePrevious = () => {
        updateStep(3)
        router.push("/create/pad-info?pad=true")
    }

    return (
        <div className="flex flex-col gap-8 text-white">
            {/* Token information overview */}
            <TokenOverview />
            {/* Launchpad info overview */}
            <PadOverview />
            {/* Project info overview */}
            <ProjectOverview />

            <div className="flex gap-8 justify-center mt-8 text-neutral-200">
                <button className="py-[2px] px-[1px] rounded-3xl bg-gradient-to-r from-spi-pink-2 via-spi-blue-2 to-spi-purple-2 font-semibold" onClick={handlePrevious}>
                    <p className="bg-black rounded-3xl w-full h-full px-24 py-3 hover:bg-neutral-800">
                        Go back
                    </p>
                </button>
                <input
                type="button"
                className="px-24 py-3 text-xl rounded-3xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1"
                value="Complete"
                />
            </div>
        </div>
    )
}

export default OverviewForm;