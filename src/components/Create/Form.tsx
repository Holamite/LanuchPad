'use client'
import InputDecorator from "@/app/helpers/Input";
import HomeAsset from "@/assets/HomeAsset";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import useStore from "@/SpidexStore/useStore";
import FileDecorator from "@/app/helpers/FileDecorator";
import { useRef } from "react";
import Description from "./Description";
import { State } from "@/SpidexStore/types";
import { ErrorHandler } from "../PadInfo/util";

const InfoForm = () => {
    const router = useRouter()
    const textRef = useRef(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<State['projectInfo']>()

    const updateProject = useStore(state => state.updateProject)
    const updateStep = useStore(state => state.updateStep)
    const info = useStore(state => state.projectInfo)

    const onSubmit: SubmitHandler<State['projectInfo']> = (data) => {
        updateProject(data);
        updateStep(2);
        router.push("/create/token-info?pad=true")
    }

    return (
        <form className="flex flex-col gap-6 text-white" onSubmit={handleSubmit(onSubmit)}>
            {/* Row 1 */}
            <div className="flex justify-between gap-20">
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Logo <span className="text-red-400">*</span>
                    </label>
                    <FileDecorator>
                        <p className="py-4">
                            {HomeAsset().logo()}
                        </p>
                        <Controller
                        control={control}
                        name="logo"
                        rules={{
                            required: true
                        }}
                        render={({ field: { value, onChange, ...field}}) => {
                            return (
                                <input
                                {...field}
                                type="file"
                                value={value?.fileName}
                                accept="image/*"
                                onChange={(e) => onChange(e.target.files?.[0])}
                                className="w-full py-3 cursor-pointer file:mr-6 file:border-0 file:outline-none file:rounded-3xl file:py-1 file:px-4 file:text-neutral-200 file:font-semibold file:bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1"
                                />
                            )
                        }}
                        />
                    </FileDecorator>
                    <ErrorHandler
                    error={errors.logo?.type}
                    />
                </div>
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Website URL <span className="text-red-400">*</span>
                    </label>
                    <InputDecorator>
                        <p className="py-4">
                            {HomeAsset().website()}
                        </p>
                        <input
                        type="text"
                        {...register("website", {required: true})}
                        className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                        placeholder="Enter the url to your project website"
                        defaultValue={info.website}
                        />
                    </InputDecorator>
                    <ErrorHandler
                    error={errors.website?.type}
                    />
                </div>
            </div>
            {/* Row 2 */}
            <>
            <label className="text-xl">
                Project Description <span className="text-red-400">*</span>
            </label>
            <Controller
            control={control}
            name="description"
            rules={{
                required: (info.description === '')
            }}
            render={({ field: { value, onChange }}) => {
                return (
                    <Description
                    value={value}
                    onChange={onChange}
                    textRef={textRef}
                    description={info.description}
                    />
                )
            }}
            />
            <ErrorHandler
            error={errors.description?.type}
            />
            </>
            {/* social header */}
            <h1 className="text-xl">Social Media links</h1>
            <div className="flex justify-between gap-20">
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        X <span className="text-sm text-neutral-400">(Twitter)</span> <span className="text-red-400">*</span>
                    </label>
                    <InputDecorator>
                        <p className="py-4">
                            {HomeAsset().twitter()}
                        </p>
                        <input
                        type="text"
                        {...register("twitter", {required: true})}
                        className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                        placeholder="Paste your twitter url"
                        defaultValue={info.twitter}
                        />
                    </InputDecorator>
                    <ErrorHandler
                    error={errors.twitter?.type}
                    />
                </div>
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Telegram <span className="text-red-400">*</span>
                    </label>
                    <InputDecorator>
                        <p className="py-4">
                            {HomeAsset().telegram()}
                        </p>
                        <input
                        type="text"
                        {...register("telegram", {required: true})}
                        className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                        placeholder="Paste your telegram url"
                        defaultValue={info.telegram}
                        />
                    </InputDecorator>
                    <ErrorHandler
                    error={errors.telegram?.type}
                    />
                </div>
            </div>
            <div className="flex justify-between gap-20">
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Discord
                    </label>
                    <InputDecorator>
                        <p className="py-4">
                            {HomeAsset().discord()}
                        </p>
                        <input
                        type="text"
                        {...register("discord")}
                        className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                        placeholder="Paste your discord url"
                        defaultValue={info.discord}
                        />
                    </InputDecorator>
                </div>
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Github
                    </label>
                    <InputDecorator>
                        <p className="py-4">
                            {HomeAsset().github()}
                        </p>
                        <input
                        type="text"
                        {...register("github")}
                        className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                        placeholder="Paste your github url"
                        defaultValue={info.github}
                        />
                    </InputDecorator>
                </div>
            </div>
            <>
            <label className="text-xl">
                YouTube Video <span className="text-red-400">*</span>
            </label>
            <InputDecorator>
                <p className="py-4">
                    {HomeAsset().youtube()}
                </p>
                <Controller
                control={control}
                name="youtube"
                rules={{
                    required: true
                }}
                render={({ field: { value, onChange, ...field}}) => {
                    return (
                        <input
                        {...field}
                        type="file"
                        value={value?.fileName}
                        accept="video/*"
                        onChange={(e) => onChange(e.target.files?.[0])}
                        className="w-full my-auto cursor-pointer file:mr-6 file:border-0 file:outline-none file:rounded-3xl file:py-1 file:px-4 file:text-neutral-200 file:font-semibold file:bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1"
                        />
                    )
                }}
                />
            </InputDecorator>
            <ErrorHandler
            error={errors.youtube?.type}
            />
            </>

            <input
            type="submit"
            className="px-8 py-3 mt-8 text-xl w-72 mx-auto rounded-3xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1"
            value="Continue"
            />
        </form>
    );
}

export default InfoForm;