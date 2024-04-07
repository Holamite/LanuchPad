'use client'
import useStore from "@/SpidexStore/useStore";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { State } from "@/SpidexStore/types";
import InputDecorator from "@/app/helpers/Input";
import DatePicker from "react-datepicker"
import { CalendarIcon } from "@heroicons/react/20/solid";
import { forwardRef, useState } from "react";
import PadAsset from "@/assets/PadAsset";
import { ErrorHandler } from "./util";

const padOption = [
    "Simple",
    "Custom"
]

const PadForm = () => {
    const router = useRouter()
    const updateStep = useStore(state => state.updateStep)
    const updatePadInfo = useStore(state => state.updatePadInfo)
    const padinfo = useStore(state => state.padinfo)
    const [option, setOption] = useState<number>(0)
    const [open, setOpen] = useState<boolean>(false)

    const handlePrevious = () => {
        updateStep(2);
        router.push("/create/token-info?pad=true")
    }

    const DateInput = forwardRef((props: any, ref) => (
        <InputDecorator>
            <CalendarIcon
            className="text-neutral-400 w-8 h-8 my-auto"
            />
            <input
            {...props}
            value={props.value}
            ref={ref}
            className="bg-hero w-full py-4 border-0 outline-none rounded-3xl placeholder:text-neutral-400 placeholder:text-lg font-space"
            />
        </InputDecorator>
    ))
    DateInput.displayName = "DateInput"


    const filterPassedTime = (time: any) => {
        const currentDate = new Date()
        const selectedDate = new Date(time)

        return currentDate.getTime() < selectedDate.getTime()
    }


    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        control
    } = useForm<State['padinfo']>()

    const onSubmit: SubmitHandler<State['padinfo']> = (data) => {
        updatePadInfo(data)
        updateStep(4)
        router.push("/create/overview?pad=true")
    }

    return (
        <form className="flex flex-col gap-8 text-white" onSubmit={handleSubmit(onSubmit)}>
            {/* Row 1 */}
            <div className="flex justify-between gap-20">
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Softcap <span className="text-red-400">*</span>
                    </label>
                    <InputDecorator>
                        <input
                        {...register("softcap", {
                            required: true,
                            pattern: /^\d+(\.\d+)?$/,
                            validate: value => {
                                let hardcapValue = getValues("hardcap")
                                let minInput = 25/100 * parseInt(hardcapValue)

                                return (parseInt(value) >= minInput) || 'Softcap must be equal or greater than 25% of hardcap'
                            }
                        })}
                        className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                        placeholder="Enter your softcap in currency token e.g 1000 BNB, 200 ETH"
                        defaultValue={padinfo.softcap}
                        />
                    </InputDecorator>
                    <ErrorHandler
                    error={errors.softcap?.type}
                    patternMessage="Number input is required"
                    message={errors.softcap?.message}
                    />
                </div>
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Hardcap <span className="text-red-400">*</span>
                    </label>
                    <InputDecorator>
                        <input
                        {...register("hardcap", {
                            required: true,
                            pattern: /^\d+(\.\d+)?$/,
                        })}
                        className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                        placeholder="Enter your hardcap in currency token e.g 5000 BNB, 800 ETH"
                        defaultValue={padinfo.hardcap}
                        />
                    </InputDecorator>
                    <ErrorHandler
                    error={errors.hardcap?.type}
                    patternMessage="Number input is required"
                    />
                </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-5 basis-1/2">
                <label className="text-xl">
                    Presale rate <span className="text-red-400">*</span>
                </label>
                <InputDecorator>
                    <input
                    {...register("presaleRate", {
                        required: true,
                        pattern: /^\d+(\.\d+)?$/,
                    })}
                    className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                    placeholder="Amount of presale token per currency token e.g 100 SPID = 1ETH"
                    defaultValue={padinfo.presaleRate}
                    />
                </InputDecorator>
                <ErrorHandler
                error={errors.presaleRate?.type}
                patternMessage="Number input is required"
                />
            </div>

            {/* Row 3 */}
            <div className="flex justify-between gap-20">
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Minimum Buy <span className="text-red-400">*</span>
                    </label>
                    <InputDecorator>
                        <input
                        {...register("minBuy", {
                            required: true,
                            pattern: /^\d+(\.\d+)?$/,
                            validate: value => {
                                let maxBuyValue = getValues("maxBuy")

                                return (parseFloat(maxBuyValue) > parseFloat(value)) || "Maximum buy should be greater than minimum buy"
                            }
                        })}
                        className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                        placeholder="Enter minimum buy in currency token e.g 0.5 BNB, 0.2 ETH"
                        defaultValue={padinfo.minBuy}
                        />
                    </InputDecorator>
                    <ErrorHandler
                    error={errors.minBuy?.type}
                    patternMessage="Number input is required"
                    message={errors.minBuy?.message}
                    />
                </div>
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Maximum Buy <span className="text-red-400">*</span>
                    </label>
                    <InputDecorator>
                        <input
                        {...register("maxBuy", {
                            required: true,
                            pattern: /^\d+(\.\d+)?$/,
                        })}
                        className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                        placeholder="Enter maximum buy in currency token e.g 50 BNB, 8 ETH"
                        defaultValue={padinfo.maxBuy}
                        />
                    </InputDecorator>
                    <ErrorHandler
                    error={errors.maxBuy?.type}
                    patternMessage="Number input is required"
                    />
                </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col gap-5 basis-1/2">
                <label className="text-xl">
                    Liquidity Percent (%) <span className="text-red-400">*</span>
                </label>
                <InputDecorator>
                    <input
                    {...register("liquidityPercent", {
                        required: true,
                        pattern: /^\d+(\.\d+)?$/,
                        min: 70
                    })}
                    className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                    placeholder="Amount of tokens for presale, must not be grater than 100 and less than 70"
                    defaultValue={padinfo.liquidityPercent}
                    />
                </InputDecorator>
                <div>
                    <ErrorHandler
                    error = {errors.liquidityPercent?.type}
                    patternMessage="Number input is required"
                    minMessage="Must not be less than minimum requirement, should be greater than 70"
                    />
                </div>
            </div>

            {/* Row 5 */}
            <div className="flex justify-between gap-20">
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Presale Token <span className="text-red-400">*</span>
                    </label>
                    <InputDecorator>
                        <input
                        {...register("presaleToken", {
                            required: true,
                            pattern: /^\d+(\.\d+)?$/,
                            validate: value => {
                                let hardcap = getValues("hardcap")
                                let rate = getValues("presaleRate")
                                let minToken = parseInt(hardcap) * parseInt(rate)

                                return (parseInt(value) >= minToken) || `Value should be greater than ${minToken}`
                            }
                        })}
                        className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                        placeholder="Amount of token for presale"
                        defaultValue={padinfo.presaleToken}
                        />
                    </InputDecorator>
                    <ErrorHandler
                    error={errors.presaleToken?.type}
                    patternMessage="Number input is required"
                    message={errors.presaleToken?.message}
                    />
                </div>
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                            Liquidity Token <span className="text-red-400">*</span>
                    </label>
                    <InputDecorator>
                        <input
                        {...register("liquidityToken", {
                            required: true,
                            pattern: /^\d+(\.\d+)?$/,
                            validate: value => {
                                let price = 1 / parseFloat(getValues("presaleRate"))
                                let softcap = getValues("softcap")
                                let liquidityPercent = getValues("liquidityPercent")

                                let maxLiquidity = ((parseFloat(liquidityPercent) / 100) * parseInt(softcap)) / price

                                return (parseFloat(value) <= maxLiquidity) || `Liquidity token should not exceed ${maxLiquidity}`
                            }
                        })}
                        className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                        placeholder="Amount of token to be used in creating liquidity"
                        defaultValue={padinfo.liquidityToken}
                        />
                    </InputDecorator>
                    <ErrorHandler
                    error={errors.liquidityToken?.type}
                    patternMessage="Number input is required"
                    message={errors.liquidityToken?.message}
                    />
                </div>
            </div>

            {/* Row 6 */}
            <h1 className="text-xl">
                Start and end time of IDO
            </h1>
            <div className="flex justify-between gap-20">
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        Start time <span className="text-red-400">*</span>
                    </label>
                    <Controller
                    name="startTime"
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { value, onChange }}) => {
                        return (
                            <DatePicker
                            selected={value}
                            onChange={onChange}
                            customInput={<DateInput />}
                            placeholderText="XX - XX - XXXX - 00:00"
                            clearButtonClassName="w-10 h-8"
                            isClearable
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            filterTime={filterPassedTime}
                            />
                        )
                    }}
                    />
                    <ErrorHandler
                    error={errors.startTime?.type}
                    />
                </div>
                <div className="flex flex-col gap-5 basis-1/2">
                    <label className="text-xl">
                        End time <span className="text-red-400">*</span>
                    </label>
                    <Controller
                    name="endTime"
                    control={control}
                    rules={{
                        required: true,
                        validate: value => {
                            let startTimeEpoch = Math.floor(getValues("startTime").getTime() / 1000)
                            let _value = Math.floor(value.getTime() / 1000)
                            return (_value > startTimeEpoch) || "Presale selected time should be greater than the start time"
                        }
                    }}
                    render={({ field: { value, onChange }}) => {
                        return (
                            <DatePicker
                            selected={value}
                            onChange={onChange}
                            customInput={<DateInput />}
                            placeholderText="XX - XX - XXXX - 00:00"
                            clearButtonClassName="w-10 h-8"
                            isClearable
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            filterTime={filterPassedTime}
                            />
                        )
                    }}
                    />
                    <ErrorHandler
                    error={errors.endTime?.type}
                    message={errors.endTime?.message}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div>
                    <h3 className="text-xl">
                        Pad Type <span className="text-red-400">*</span>
                    </h3>
                    <p className="text-gray-400">
                        Choose between a simple (100% token release at TGE) or a custom (launchpad with vesting option) pad type
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
                                    {padOption[option]}
                                </div>
                            </div>
                            <div className="my-auto">
                                {PadAsset().arrowdown()}
                            </div>
                        </div>
                        {open && (
                            <div className="font-medium text-neutral-300 pt-2">
                                {padOption.map((item, index) => {
                                    if(option !== index) {
                                        return (
                                            <p
                                            key={index}
                                            className="py-2 px-7 hover:bg-black rounded-3xl cursor-pointer"
                                            onClick={() => setOption(index)}
                                            >
                                                {item}
                                            </p>
                                        )
                                    }
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Pad type */}
            {option === 1 && (
                <>
                <div className="flex justify-between gap-20">
                    <div className="flex flex-col gap-5 basis-1/2">
                        <label className="text-xl">
                            Token at TGE (%) (month) <span className="text-red-400">*</span>
                        </label>
                        <InputDecorator>
                            <input
                            {...register("tge", {
                                required: true,
                                pattern: /^[0-9]+$/,
                            })}
                            className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                            placeholder="Percentage of token release at TGE"
                            defaultValue={padinfo.tge}
                            />
                        </InputDecorator>
                        <ErrorHandler
                        error={errors.tge?.type}
                        patternMessage="Number input is required"
                        />
                    </div>
                    <div className="flex flex-col gap-5 basis-1/2">
                        <label className="text-xl">
                            Cliff (Month) <span className="text-red-400">*</span>
                        </label>
                        <InputDecorator>
                            <input
                            {...register("cliff", {
                                required: true,
                                pattern: /^[0-9]+$/,
                            })}
                            className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                            placeholder="Enter Cliff period in month"
                            defaultValue={padinfo.cliff}
                            />
                        </InputDecorator>
                        <ErrorHandler
                        error={errors.cliff?.type}
                        patternMessage="Number input is reqired"
                        />
                    </div>
                </div>
                <div className="flex justify-between gap-20">
                    <div className="flex flex-col gap-5 basis-1/2">
                        <label className="text-xl">
                            Vesting Duration (Month) <span className="text-red-400">*</span>
                        </label>
                        <InputDecorator>
                            <input
                            {...register("vestingDuration", {
                                required: true,
                                pattern: /^[0-9]+$/,
                            })}
                            className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                            placeholder="Vesting duration in month, e.g 36 for 3 years"
                            defaultValue={padinfo.vestingDuration}
                            />
                        </InputDecorator>
                        <ErrorHandler
                        error={errors.vestingDuration?.type}
                        patternMessage="Number input is required"
                        />
                    </div>
                    <div className="flex flex-col gap-5 basis-1/2">
                        <label className="text-xl">
                            Frequency (Month) <span className="text-red-400">*</span>
                        </label>
                        <InputDecorator>
                            <input
                            {...register("frequency", {
                                required: true,
                                pattern: /^[0-9]+$/,
                            })}
                            className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                            placeholder="Interval the token vested can be claimed, e,g 1 for every month"
                            defaultValue={padinfo.frequency}
                            />
                        </InputDecorator>
                        <ErrorHandler
                        error={errors.frequency?.type}
                        patternMessage="Number input is required"
                        />
                    </div>
                </div>
                </>
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

export default PadForm;