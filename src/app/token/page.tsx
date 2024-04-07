"use client";
import FormTemplate from "../helpers/FormTemplate";
import { useForm } from "react-hook-form";
import InputDecorator from "../helpers/Input";
import { ErrorHandler } from "@/components/PadInfo/util";
import { useState } from "react";
import PadAsset from "@/assets/PadAsset";

type TokenInput = {
  name: string;
  symbol: string;
  totalSupply: string;
  buyTax: string;
  sellTax: string;
};

const tokenType = [
  "Standard Token",
  "Unruggable Token",
  "Reflective Token",
  "Tax Token",
];

const Token = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [token, setToken] = useState<number>(0);

  console.log(token, "token");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TokenInput>();
  return (
    <FormTemplate>
      <form className="flex flex-col gap-6 text-white">
        <label className="text-xl">
          Token type <span className="text-red-400">*</span>
        </label>
        <div className="p-[1px] cursor-pointer rounded-3xl hover:bg-gradient-to-r from-spi-pink via-spi-blue to-spi-purple">
          <div
            className="relative bg-hero rounded-3xl pl-5 pr-4 py-4"
            onClick={() => setOpen(!open)}
          >
            <div className="flex justify-between">
              <div className="flex gap-5">
                <p className="w-2 h-2 my-auto bg-gradient-to-r rounded-full from-spi-pink via-spi-blue to-spi-purple"></p>
                <div className="font-medium text-neutral-300">
                  {tokenType[token]}
                </div>
              </div>
              <div className="my-auto">{PadAsset().arrowdown()}</div>
            </div>
            {open && (
              <div className="font-medium text-neutral-300 pt-2">
                {tokenType.map((item, index) => {
                  if (token !== index) {
                    return (
                      <p
                        key={index}
                        className="py-2 px-7 hover:bg-black rounded-3xl cursor-pointer"
                        onClick={() => setToken(index)}
                      >
                        {item}
                      </p>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
        {token !== 3 ? (
          <>
            <div className="flex flex-col gap-5">
              <label className="text-xl">
                Name <span className="text-red-400">*</span>
              </label>
              <InputDecorator>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                  placeholder="Token name. e.g Ethereum"
                />
              </InputDecorator>
              <ErrorHandler error={errors.name?.type} />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-xl">
                Symbol <span className="text-red-400">*</span>
              </label>
              <InputDecorator>
                <input
                  type="text"
                  {...register("symbol", { required: true })}
                  className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                  placeholder="Token symbol. e.g ETH"
                />
              </InputDecorator>
              <ErrorHandler error={errors.name?.type} />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-xl">
                Total supply <span className="text-red-400">*</span>
              </label>
              <InputDecorator>
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                    pattern: /^[0-9]+$/,
                  })}
                  className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                  placeholder="Token total supply. e.g 1,000,000"
                />
              </InputDecorator>
              <ErrorHandler error={errors.name?.type} />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-5">
              <label className="text-xl">
                Name <span className="text-red-400">*</span>
              </label>
              <InputDecorator>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                  placeholder="Token name. e.g Ethereum"
                />
              </InputDecorator>
              <ErrorHandler error={errors.name?.type} />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-xl">
                Symbol <span className="text-red-400">*</span>
              </label>
              <InputDecorator>
                <input
                  type="text"
                  {...register("symbol", { required: true })}
                  className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                  placeholder="Token symbol. e.g ETH"
                />
              </InputDecorator>
              <ErrorHandler error={errors.name?.type} />
            </div>
            <div className="flex flex-col gap-5">
              <label className="text-xl">
                Total supply <span className="text-red-400">*</span>
              </label>
              <InputDecorator>
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                    pattern: /^[0-9]+$/,
                  })}
                  className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                  placeholder="Token total supply. e.g 1,000,000"
                />
              </InputDecorator>
              <ErrorHandler
                error={errors.name?.type}
                patternMessage="Number input is required, decimal number is not allowed"
              />
            </div>
            <div className="flex justify-between gap-20">
              <div className="flex flex-col gap-5 basis-1/2">
                <label className="text-xl">
                  Buy Tax <span className="text-red-400">*</span>
                </label>
                <InputDecorator>
                  <input
                    {...register("buyTax", {
                      required: true,
                      pattern: /^\d+(\.\d+)?$/,
                    })}
                    className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                    placeholder="Token Buy Tax in percent. e.g 5 for 5%"
                  />
                </InputDecorator>
                <ErrorHandler
                  error={errors.buyTax?.type}
                  patternMessage="Number input is required"
                />
              </div>
              <div className="flex flex-col gap-5 basis-1/2">
                <label className="text-xl">
                  Sell Tax <span className="text-red-400">*</span>
                </label>
                <InputDecorator>
                  <input
                    {...register("sellTax", {
                      required: true,
                      pattern: /^\d+(\.\d+)?$/,
                    })}
                    className="border-0 outline-none bg-hero w-full placeholder:text-neutral-500 py-4 rounded-3xl"
                    placeholder="Token Sell Tax in percent. e.g 5 for 5%"
                  />
                </InputDecorator>
                <ErrorHandler
                  error={errors.sellTax?.type}
                  patternMessage="Number input is reqired"
                />
              </div>
            </div>
          </>
        )}
        <div className="flex justify-center">
          <input
            type="submit"
            className="py-3 px-24 mt-8 text-xl mx-auto rounded-3xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1"
            value="Create Token"
          />
        </div>
      </form>
    </FormTemplate>
  );
};

export default Token;
