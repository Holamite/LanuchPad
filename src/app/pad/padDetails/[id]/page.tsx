"use client";

import { useRouter } from "next/navigation";
export interface PadType {
  name: string;
}

const PadDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  return (
    <div className="w-[370px] flex flex-col gap-6 my-5 bg-black rounded-2xl p-5 text-neutral-100">
      {/* header */}
      <div className="flex gap-8">
        <div className="w-16 h-16 rounded-full bg-neutral-500"></div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl">Holamite {params.id}</h1>
          <div className="flex gap-2 text-gray-400 p-2 border-[0.5px] border-neutral-700 rounded-3xl">
            <p className={`w-2 h-2 mt-2 bg-green-500 rounded-full`}></p>
            <p>Sales live</p>
          </div>
        </div>
      </div>
      {/* soft and hard cap */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-5 font-space">
          <p className="text-neutral-400 text-sm">Soft/Hard cap</p>
          <h2 className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-spi-blue via-spi-blue to-spi-purple">
            20/50 ETH
          </h2>
        </div>
        <div>
          <p>Fair launch</p>
        </div>
      </div>
      {/* Amount raised */}
      <div className="flex flex-col gap-2">
        <h4 className="text-neutral-300">Raised</h4>
        <div className="w-full h-3 bg-hero rounded-3xl">
          <p className="w-[30%] h-3 bg-spi-blue rounded-3xl"></p>
        </div>
        <div className="flex justify-between text-neutral-400 text-sm">
          <p>30%</p>
          <p>15 ETH of 50 ETH</p>
        </div>
      </div>
      {/* Amount */}
      <div className="flex justify-between">
        <p className="text-neutral-300">Amount Contributed</p>
        <p>1 ETH</p>
      </div>
      {/* Liquidity */}
      <div className="flex justify-between">
        <p className="text-neutral-300">Liquidity %</p>
        <p>70%</p>
      </div>
      {/* Lock time */}
      <div className="flex justify-between">
        <p className="text-neutral-300">Lockup time</p>
        <p>90 days</p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-neutral-300">Sales start</p>
          <div className="flex flex-col gap-1">
            <p>{`00:22:12:14`}</p>
            <div className="text-neutral-300 text-[8px] flex justify-between px-1">
              <p>DD</p>
              <p>:</p>
              <p>HH</p>
              <p>:</p>
              <p>MM</p>
              <p>:</p>
              <p>S</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button
            className="px-8 py-2 rounded-xl bg-gradient-to-r from-spi-pink-2 hover:from-spi-pink-1 via-spi-blue-2 hover:via-spi-blue-1 to-spi-purple-2 hover:to-spi-purple-1 text-neutral-200"
            onClick={() => router.push("/")}
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default PadDetails;
