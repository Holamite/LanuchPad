"use client";
import React from "react";
import ToggleSwitch from "./Toogle/ToggleSwitch";

interface PriceChartProps {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const PriceChart: React.FC<PriceChartProps> = ({ toggle, setToggle }) => {
  return (
    <div>
      <div className="pt-[1rem] flex items-center gap-[1.25rem]">
        <p className="text-[1.25rem] leading-[165%]">Price Chart</p>
        <ToggleSwitch
          toggle={toggle}
          onChange={(e: any) => setToggle(e.target.checked)}
        />
      </div>
      <div className="flex justify-between items-center self-center">
        <p className="bg-gradient-to-br from-pink-300 via-lightBlue-300 to-purple-400 text-center font-semibold bg-clip-text text-transparent text-[2rem]">
          Swap
        </p>
        <div className="flex items-flex-start gap-[1rem] ">
          <svg
            className="cursor-pointer"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.55 22.17C18.84 21.04 22 17.14 22 12.5C22 6.98 17.56 2.5 12 2.5C5.33 2.5 2 8.06 2 8.06M2 8.06V3.5M2 8.06H4.01H6.44"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12.5C2 18.02 6.48 22.5 12 22.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3 3"
            />
          </svg>

          <svg
            className="cursor-pointer"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 13.3799V11.6199C2 10.5799 2.85 9.71994 3.9 9.71994C5.71 9.71994 6.45 8.43994 5.54 6.86994C5.02 5.96994 5.33 4.79994 6.24 4.27994L7.97 3.28994C8.76 2.81994 9.78 3.09994 10.25 3.88994L10.36 4.07994C11.26 5.64994 12.74 5.64994 13.65 4.07994L13.76 3.88994C14.23 3.09994 15.25 2.81994 16.04 3.28994L17.77 4.27994C18.68 4.79994 18.99 5.96994 18.47 6.86994C17.56 8.43994 18.3 9.71994 20.11 9.71994C21.15 9.71994 22.01 10.5699 22.01 11.6199V13.3799C22.01 14.4199 21.16 15.2799 20.11 15.2799C18.3 15.2799 17.56 16.5599 18.47 18.1299C18.99 19.0399 18.68 20.1999 17.77 20.7199L16.04 21.7099C15.25 22.1799 14.23 21.8999 13.76 21.1099L13.65 20.9199C12.75 19.3499 11.27 19.3499 10.36 20.9199L10.25 21.1099C9.78 21.8999 8.76 22.1799 7.97 21.7099L6.24 20.7199C5.33 20.1999 5.02 19.0299 5.54 18.1299C6.45 16.5599 5.71 15.2799 3.9 15.2799C2.85 15.2799 2 14.4199 2 13.3799Z"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="px-[0.8rem] py-[0.9rem] flex flex-col rounded-[1.2rem] bg-[#060606] relative">
        <div className="mb-4 p-3 p-4 pb-5 rounded-[0.7rem] bg-[#0f0f0f]">
          <div className="flex justify-between items-center self-stretch">
            <p className="text-[#e6e1e5] text-base text-[1rem]">You sell</p>
            <p className="text-[#e6e1e5] text-base text-[1rem]">
              Balance: $5,236.89
            </p>
          </div>
          <div className="flex justify-between items-center gap-[6rem]">
            <div>
              <h5 className="text-[2.6rem] leading-[165%] text-[#b0b0b0] text-center">
                0.00
              </h5>
              <p className="text-[#f2f2f2] text-left text-sm leading-tight">
                $0.00
              </p>
            </div>
            <div className="inline-flex px-[0.3rem] py-[0.4rem] items-center gap-2 rounded-[4rem] bg-[#3a3a3a]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_51_8690)">
                  <path
                    d="M16 -0.5C24.8362 -0.5 32 6.66384 32 15.5C32 24.3362 24.8358 31.5 16 31.5C7.16416 31.5 0 24.3381 0 15.5C0 6.66192 7.16288 -0.5 16 -0.5Z"
                    fill="#53AE94"
                  />
                  <path
                    d="M17.9747 13.3682V10.988H23.4176V7.36145H8.59643V10.988H14.04V13.3663C9.61595 13.5695 6.28955 14.4456 6.28955 15.4952C6.28955 16.5448 9.61755 17.421 14.04 17.6255V25.2495H17.976V17.6248C22.392 17.421 25.7116 16.5455 25.7116 15.4968C25.7116 14.4482 22.392 13.5727 17.976 13.3688M17.976 16.9791V16.9771C17.8649 16.9842 17.2944 17.0184 16.024 17.0184C15.0083 17.0184 14.2937 16.9896 14.0419 16.9765V16.9797C10.1334 16.8066 7.21595 16.1259 7.21595 15.3115C7.21595 14.4971 10.1337 13.8175 14.0419 13.644V16.3016C14.2979 16.3192 15.03 16.3624 16.0406 16.3624C17.2544 16.3624 17.8646 16.3119 17.9766 16.3016V13.644C21.8774 13.8178 24.7881 14.4991 24.7881 15.3106C24.7881 16.1221 21.8761 16.8037 17.9766 16.9775"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_51_8690">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0 -0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-[1.3rem] leading-[165%]">USDc</p>
              <svg
                className="cursor-pointer"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                width="1.5rem"
                height="1.5rem"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect x="0" fill="none" width="20" height="20"></rect>
                  <g>
                    <path d="M15 8l-4.03 6L7 8h8z"></path>{" "}
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <svg
          className="cursor-pointer absolute rounded-full bg-[#1c1b1f]"
          style={{ left: "45%", top: "34%" }}
          xmlns="http://www.w3.org/2000/svg"
          width="3rem"
          height="3rem"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.01023 20.5002L3.99023 15.4902"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.00977 3.5V20.5"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9902 3.5L20.0102 8.51"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9902 20.5V3.5"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="mb-[1rem] pt-[0.9rem] pr-[1.3rem] pb-[1.7rem] pl-[1.3rem] bg-[#0f0f0f] rounded-[0.6rem]">
          <div className="flex justify-between items-center self-stretch">
            <p className="font-medium text-[1rem] text-[#e6e1e5]">You buy</p>
            <p className="font-medium text-[1rem] text-[#e6e1e5]">
              Balance: --
            </p>
          </div>
          <div className="flex justify-between items-center gap-[6rem]">
            <div className="trade-sell-unit">
              <h5 className="text-[#b0b0b0] items-center text-[2.7rem] leading-[165%]">
                0.00
              </h5>
              <p className="text-[#f2f2f2] text-[0.8rem] text-left">$0.00</p>
            </div>
            <div className="inline-flex px-1 py-2 items-center gap-2 rounded-[4rem] bg-[#3a3a3a]">
              <svg
                className="rounded-[1.25rem] bg-[#fffbfe] w-8 h-8 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="25"
                viewBox="0 0 15 25"
                fill="none"
              >
                <g clipPath="url(#clip0_51_8681)">
                  <path
                    d="M7.36594 0.5L7.20508 1.04676V16.9126L7.36594 17.0731L14.7307 12.7199L7.36594 0.5Z"
                    fill="#343434"
                  />
                  <path
                    d="M7.36618 0.5L0.00146484 12.7199L7.36618 17.0732V9.3724V0.5Z"
                    fill="#8C8C8C"
                  />
                  <path
                    d="M7.36555 18.4677L7.2749 18.5782V24.2299L7.36555 24.4946L14.7347 14.1166L7.36555 18.4677Z"
                    fill="#3C3C3B"
                  />
                  <path
                    d="M7.36569 24.4946V18.4675L0.000976562 14.1165L7.36569 24.4946Z"
                    fill="#8C8C8C"
                  />
                  <path
                    d="M7.36572 17.0731L14.7303 12.7199L7.36572 9.37244V17.0731Z"
                    fill="#141414"
                  />
                  <path
                    d="M0.000976562 12.7199L7.36558 17.0732V9.37244L0.000976562 12.7199Z"
                    fill="#393939"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_51_8681">
                    <rect
                      width="14.736"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-[1.3rem] leading-[165%] font-medium">ETH</p>
              <svg
                className="cursor-pointer"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                width="1.5rem"
                height="1.5rem"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect x="0" fill="none" width="20" height="20"></rect>
                  <g>
                    <path d="M15 8l-4.03 6L7 8h8z"></path>{" "}
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex px-2 py-3 justify-between items-center gap-2 rounded-[0.63rem] bg-[#0f0f0f] mb-4">
          <p className="text-[1rem] text-[#fff] font-medium leading[165%]">
            1 WETH = 1621.1548 USDT
          </p>
          <svg
            className="cursor-pointer"
            width="1rem"
            height="1rem"
            viewBox="0 -4.5 20 20"
            version="1.1"
            fill="#000000"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#FFFFFFCCCCCC"
              strokeWidth="0.16"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>arrow_down [#FFFFFF338]</title>
              <desc>Created with Sketch.</desc> <defs> </defs>
              <g
                id="Page-1"
                strokeWidth="0.0002"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-220.000000, -6684.000000)"
                  fill="#FFFFFF"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"
                      id="arrow_down-[#FFFFFF338]"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PriceChart;
