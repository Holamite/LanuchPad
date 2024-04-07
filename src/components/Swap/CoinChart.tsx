"use client";
import React from "react";

interface CoinChartProps {
  toggle: boolean;
}

const CoinChart: React.FC<CoinChartProps> = ({ toggle }) => {
  return (
    <div
      className={
        toggle
          ? "flex flex-col items-center self-stretch bg-[#0c0c0c] py-[1.25rem] px-[1.25rem] pb-[30rem] pl-[1.25rem] "
          : "hidden"
      }
    >
      <div className="flex justify-between items-end self-stretch">
        <div>
          <div className="flex gap-0.5 justify-center items-center">
            <svg
              className="rounded-full bg-[#fffbfe] w-[2rem] h-[2rem] flex-shrink-0"
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
            <svg
              className="-ml-4"
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
            <p>USDC/WETH</p>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5002 15.49L15.4902 20.51"
                stroke="#D0D0D0"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 15.49H20.5"
                stroke="#D0D0D0"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 9.50999L8.51 4.48999"
                stroke="#D0D0D0"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 9.51001H3.5"
                stroke="#D0D0D0"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center gap-3">
            <p>0.006 WETH</p>
            <p className="flex py-1 px-4 items-start gap-2 rounded-xl bg-[#e1a0c8]">
              -0.21%
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="flex py-1 px-2 items-start gap-2 bg-[#ccdfed] text-[#090909]">
            24H
          </p>
          <p>1W</p>
          <p>1M</p>
          <p>1Y</p>
        </div>
      </div>
    </div>
  );
};

export default CoinChart;
