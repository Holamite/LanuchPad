'use client'
import InputDecorator from "@/app/helpers/Input";
import PadAsset from "@/assets/PadAsset";
import useStore from "@/SpidexStore/useStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { State } from "@/SpidexStore/types";

const paymentOptions = [
    "Native Token",
    "ERC20 Token"
]

const whitelistOptions = [
    "Disable",
    "Enable"
]

const TokenForm = () => {
    const router = useRouter()
    const updateStep = useStore(state => state.updateStep)

    const [payment, setPayment] = useState<number>(0);
    const [whitelist, setWhitelist] = useState<number>(0)
    const [open, setOpen] = useState<boolean>(false)
    const [openWhitelist, setOpenWhitelist] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<State['tokenInfo']>()


    const handlePrevious = () => {
        updateStep(1);
        router.push("/create?pad=true")
    }

    const updateTokenInfo = useStore(state => state.updateTokenInfo)
    const tokenInfo = useStore(state => state.tokenInfo)

    const onSubmit: SubmitHandler<State['tokenInfo']> = (data) => {
        updateTokenInfo(data);
        updateStep(3);
        router.push("/create/pad-info?pad=true")
    }

    return (
        <form className="flex flex-col gap-8 text-white" onSubmit={handleSubmit(onSubmit)}>
            {/* Token Input */}
            <div className="flex flex-col gap-5">
                <div>
                    <label className="text-xl">
                        Token address <span className="text-red-400">*</span>
                    </label>
                    <div className="flex gap-2">
                        <p className="text-gray-400">
                            Input your project token contract address or
                        </p>
                        <Link href={"/token"} className="font-semibold text-pink-3 hover:underline">
                            Create here
                        </Link>
                    </div>
                </div>
                <InputDecorator>
                    <input
                    type="text"
                    {...register("token", {
                        required: true,
                        pattern: /^(0x)?[0-9a-fA-F]{40}$/
                    })}
                    className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                    placeholder="Enter your token address"
                    defaultValue={tokenInfo.token}
                    />
                </InputDecorator>
                <div>
                    {errors.token?.type == "required" && (
                        <p className="text-sm text-pink-3">This field is required</p>
                    )}
                    {errors.token?.type == "pattern" && (
                        <p className="text-sm text-pink-3">Input a valid EVM based contract address</p>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div>
                    <h3 className="text-xl">
                        Payment Token <span className="text-red-400">*</span>
                    </h3>
                    <p className="text-gray-400">
                        Choose between native token or erc20 token as payment for your pad
                    </p>
                </div>
                <div className="p-[1px] cursor-pointer rounded-3xl hover:bg-gradient-to-r from-spi-pink via-spi-blue to-spi-purple">
                    <div
                    className="relative bg-hero rounded-3xl pl-5 pr-4 py-4"
                    onClick={() => setOpen(!open)}
                    >
                        <div className="flex justify-between">
                            <div className="flex gap-5">
                                <p className="w-2 h-2 my-auto bg-gradient-to-r rounded-full from-spi-pink via-spi-blue to-spi-purple"></p>
                                <div className="font-medium text-neutral-300">
                                    {paymentOptions[payment]}
                                </div>
                            </div>
                            <div className="my-auto">
                                {PadAsset().arrowdown()}
                            </div>
                        </div>
                        {open && (
                            <div className="font-medium text-neutral-300 pt-2">
                                {paymentOptions.map((item, index) => {
                                    if(payment !== index) {
                                        return (
                                        <p
                                        key={index}
                                        className="py-2 px-7 hover:bg-black rounded-3xl cursor-pointer"
                                        onClick={() => setPayment(index)}
                                        >
                                            {item}
                                        </p>
                                    )}
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Currency Input */}
            {payment === 1 && (
                <div className="flex flex-col gap-5">
                    <div>
                        <label className="text-xl">
                            Currency address <span className="text-red-400">*</span>
                        </label>
                        <p className="text-gray-400">
                            The token contract address specified will be the users payment currency
                        </p>
                    </div>
                    <InputDecorator>
                        <input
                        type="text"
                        {...register("currency", {
                            required: true,
                            pattern: /^(0x)?[0-9a-fA-F]{40}$/
                        })}
                        defaultValue={tokenInfo.currency}
                        className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                        placeholder="Enter your payment token address"
                        />
                    </InputDecorator>
                    <div>
                        {errors.currency?.type == "required" && (
                            <p className="text-sm text-pink-3">This field is required</p>
                        )}
                        {errors.currency?.type == "pattern" && (
                            <p className="text-sm text-pink-3">Input a valid EVM based contract address</p>
                        )}
                    </div>
                </div>
            )}

            {/* Whitelist */}
            <div className="flex flex-col gap-5">
                <div>
                    <h3 className="text-xl">
                        Whitelist <span className="text-red-400">*</span>
                    </h3>
                    <p className="text-gray-400">
                        Select to enable and disable whitelist access anytime
                    </p>
                </div>
                <div className="p-[1px] cursor-pointer rounded-3xl hover:bg-gradient-to-r from-spi-pink via-spi-blue to-spi-purple">
                    <div
                    className="relative bg-hero rounded-3xl pl-5 pr-4 py-4"
                    onClick={() => setOpenWhitelist(!openWhitelist)}
                    >
                        <div className="flex justify-between">
                            <div className="flex gap-5">
                                <p className="w-2 h-2 my-auto bg-gradient-to-r rounded-full from-spi-pink via-spi-blue to-spi-purple"></p>
                                <div className="font-medium text-neutral-300">
                                    {whitelistOptions[whitelist]}
                                </div>
                            </div>
                            <div className="my-auto">
                                {PadAsset().arrowdown()}
                            </div>
                        </div>
                        {openWhitelist && (
                            <div className="font-medium text-neutral-300 pt-2">
                                {whitelistOptions.map((item, index) => {
                                    if(whitelist !== index) {
                                        return (
                                        <p
                                        key={index}
                                        className="py-2 px-7 hover:bg-black rounded-3xl cursor-pointer"
                                        onClick={() => setWhitelist(index)}
                                        >
                                            {item}
                                        </p>
                                    )}
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>


            {/* Upload csv */}
            {whitelist === 1 && (
            <div className="flex flex-col gap-5">
                <div>
                    <label className="text-xl">
                        Upload Whitelisted Address <span className="text-red-400">*</span>
                    </label>
                    <div className="flex gap-2 text-gray-400">
                        <p>Only Support csv file,{" "}</p>
                        <Link href={"/"} className="font-semibold text-pink-3 hover:underline">
                            Check format
                        </Link>
                    </div>
                </div>
                <InputDecorator>
                    <Controller
                    control={control}
                    name="whitelist"
                    rules={{
                        required: true
                    }}
                    render={({ field: { value, onChange, ...field}}) => {
                        return (
                            <input
                            {...field}
                            type="file"
                            value={value?.fileName}
                            accept="text/csv, .csv"
                            onChange={(e) => onChange(e.target.files?.[0])}
                            className="w-full my-3 cursor-pointer file:mr-6 file:border-0 file:outline-none file:rounded-3xl file:py-1 file:px-4 file:text-neutral-200 file:font-semibold file:bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1"
                            />
                        )
                    }}
                    />
                </InputDecorator>
                <div>
                    {errors.whitelist?.type == "required" && (
                        <p className="text-sm text-pink-3">This field is required</p>
                    )}
                </div>
            </div>
            )}

            {/* Buttons */}
            <div className="flex gap-8 justify-center">
                <input
                type="button"
                className="px-24 py-3 mt-8 text-xl rounded-3xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1"
                value="Previous"
                onClick={handlePrevious}
                />
                <input
                type="submit"
                className="px-24 py-3 mt-8 text-xl rounded-3xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1"
                value="Continue"
                />
            </div>
        </form>
    );
}

export default TokenForm;