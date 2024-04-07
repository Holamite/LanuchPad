"use client";
import { useState } from "react";
import PriceChart from "@/components/Swap/PriceChart";
import CoinChart from "@/components/Swap/coinChart";
import OrderHistory from "@/components/Swap/OrderHistory";
import background from "@/../public/asset/background-section.svg";

const Swap: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <section
        className="bg-hero w-[80rem] h-[78.8125rem] rounded-3xl bg-cover bg-center max-w-screen-lg mx-auto px-4 text-center overflow-x-hidden"
        // style={{ backgroundImage: `url('${background}')` }}
      >
        <div
          className={
            toggle
              ? "grid grid-cols-2 gap-x-10 mt-[2rem]"
              : "flex justify-center"
          }
        >
          <CoinChart toggle={toggle} />
          <PriceChart toggle={toggle} setToggle={setToggle} />
        </div>
        <OrderHistory />
      </section>
    </>
  );
};

export default Swap;
