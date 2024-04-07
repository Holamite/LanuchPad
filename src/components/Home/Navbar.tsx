"use client";

import Link from "next/link";
import { LaunchpadUtil, NavUtil, NavUtilType } from "./NavUtil";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Button1 from "@/app/helpers/Button1";

const Navbar = () => {
  const search = useSearchParams();
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  const openNav = (url: string) => {
    router.push(url);
    setOpen(!open);
  };

  return (
    <section className="container mx-auto flex justify-between">
      {/* logo */}
      <p className="py-3 text-2xl tracking-widest font-semibold font-hanken text-neutral-200">
        SPIDEX
      </p>
      {/* navs */}
      <div className="rounded-3xl bg-black py-2 px-4 flex gap-5 lg:text-lg text-neutral-200">
        {NavUtil.map((item: NavUtilType, index) =>
          item.name === "Swap" ? (
            // <Popover key={index} className="relative">
            //   <Popover.Button
            //     className="relative hover:bg-hero rounded-3xl py-1 px-5 outline-none border-0"
            //     onClick={() => router.push(item.url)}
            //   >
            //     {item.name}
            //     <span
            //       className={`absolute left-2 top-[16px] h-1 w-1 rounded-full ${
            //         search.get("swap") === "true" && "bg-gradient-to-r"
            //       } from-spi-pink-2 via-spi-blue-2 to-spi-purple-2`}
            //     ></span>
            //   </Popover.Button>

            //   <Transition
            //     as={Fragment}
            //     enter="transition ease-out duration-200"
            //     enterFrom="opacity-0 translate-y-1"
            //     enterTo="opacity-100 translate-y-0"
            //     leave="transition ease-in duration-150"
            //     leaveFrom="opacity-100 translate-y-0"
            //     leaveTo="opacity-0 translate-y-1"
            //   >
            //     <Popover.Panel className="absolute -left-12 top-full z-30 mt-3 w-screen popover-grad max-w-52 px-5 py-8 leading-snug overflow-hidden rounded-3xl shadow-lg">
            //       <div className="text-2xl">Spidex Swap is Coming Soon</div>
            //     </Popover.Panel>
            //   </Transition>
            // </Popover>
            <Link
              href={item.url}
              key={index}
              className="relative hover:bg-hero rounded-3xl py-1 px-5"
              onClick={() => setOpen(false)}
            >
              {item.name}
              <span
                className={`absolute left-2 top-[16px] h-1 w-1 rounded-full ${
                  search.get("swap") === "true" && "bg-gradient-to-r"
                } from-spi-pink-2 via-spi-blue-2 to-spi-purple-2`}
              ></span>
            </Link>
          ) : item.name === "Launchpad" ? (
            <div key={index} className="relative">
              <button
                className="relative hover:bg-hero rounded-3xl py-1 px-5 outline-none border-0 flex gap-2"
                onClick={() => openNav(item.url)}
              >
                {item.name}
                <ChevronDownIcon className="w-5 h-5 my-1" />
                <span
                  className={`absolute left-2 top-4 h-1 w-1 rounded-full ${
                    search.get("pad") === "true" && "bg-gradient-to-r"
                  } from-spi-pink-2 via-spi-blue-2 to-spi-purple-2`}
                ></span>
              </button>

              {open && (
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                  show={true}
                >
                  <div
                    className={`absolute -left-2 top-10 z-30 mt-3 w-screen max-w-48 px-6 py-4 leading-snug overflow-hidden bg-black rounded-3xl shadow-lg`}
                    onMouseLeave={() => setOpen(false)}
                  >
                    <div className="flex flex-col divide-y divide-neutral-500 text-neutral-300">
                      {LaunchpadUtil.map((padItem, index) => (
                        <Link href={padItem.url} key={index} className="py-4">
                          {padItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Transition>
              )}
            </div>
          ) : (
            <Link
              href={item.url}
              key={index}
              className="relative hover:bg-hero rounded-3xl py-1 px-5"
              onClick={() => setOpen(false)}
            >
              {item.name}
              <span
                className={`absolute left-2 top-[16px] h-1 w-1 rounded-full ${
                  search.get(item.name.toLowerCase()) === "true" &&
                  "bg-gradient-to-r"
                } from-spi-pink-2 via-spi-blue-2 to-spi-purple-2`}
              ></span>
            </Link>
          )
        )}
      </div>
      {/* entry */}
      <div>
        <Button1 className="flex gap-3">
          <span>Explore Spidex</span>
          <ArrowRightIcon className="w-6 h-6 my-auto" />
        </Button1>
      </div>
    </section>
  );
};

export default Navbar;
