import HomeAsset from "@/assets/HomeAsset";
import useStore from "@/SpidexStore/useStore";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ProjectOverview = () => {
    const projectInfo = useStore(state => state.projectInfo)

    return (
        <>
        <div className="flex flex-col gap-5">
            <label className="text-xl">
                Project Description
            </label>
            <Markdown
            rehypePlugins={[remarkGfm]}
            className="prose-lg prose-invert w-full rounded-3xl bg-black-2 py-4 px-5 text-neutral-200 text-wrap break-words"
            >
                {projectInfo.description}
            </Markdown>
        </div>
        <h2 className="text-xl font-bold">
            Social Media links
        </h2>
        <div className="flex justify-between gap-20">
            <div className="flex flex-col gap-5 basis-1/2">
                <label className="text-xl">
                    X (Twitter)
                </label>
                <div className="bg-hero flex gap-10 w-full py-4 px-5 rounded-3xl text-neutral-300">
                    {HomeAsset().twitter()}
                    <p>{projectInfo.twitter}</p>
                </div>
            </div>
            <div className="flex flex-col gap-5 basis-1/2">
                <label className="text-xl">
                    Telegram
                </label>
                <div className="bg-hero flex gap-10 w-full py-4 px-5 rounded-3xl text-neutral-300">
                    {HomeAsset().telegram()}
                    <p>{projectInfo.telegram}</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between gap-20">
            {projectInfo.discord !== "" || undefined && (
                <div className="flex flex-col gap-5 w-full">
                    <label className="text-xl">
                        Discord
                    </label>
                    <div className="bg-hero flex gap-10 w-full py-4 px-5 rounded-3xl text-neutral-300">
                        {HomeAsset().twitter()}
                        <p>shdjhjd</p>
                    </div>
                </div>
            )}
            {projectInfo.github !== "" || undefined && (
                <div className="flex flex-col gap-5 w-full">
                    <label className="text-xl">
                        Telegram
                    </label>
                    <div className="bg-hero flex gap-10 w-full py-4 px-5 rounded-3xl text-neutral-300">
                        {HomeAsset().telegram()}
                        <p>{projectInfo.telegram}</p>
                    </div>
                </div>
            )}
        </div>
        <div className="flex flex-col gap-5">
            <label className="text-xl">
                Website url
            </label>
            <div className="bg-hero flex gap-10 w-full py-4 px-5 rounded-3xl text-neutral-300">
                {HomeAsset().website()}
                <p>{projectInfo.website}</p>
            </div>
        </div>
        </>
    );
}

export default ProjectOverview;