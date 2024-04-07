import React from "react";

const OrderHistory = () => {
  const iterations = Array.from({ length: 4 });

  return (
    <div className="rounded-md bg-[#0c0c0c] flex flex-col p-5 md:p-7 gap-6 mt-10">
      <h4 className="text-2xl font-semibold leading-165 bg-clip-text text-transparent bg-gradient-to-r  from-[#ffadd5c5] via-[#ade2ffc7] to-[#e16affb9] text-left">
        Order history
      </h4>
      <div className="grid grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-5 py-4 md:px-8 md:py-6 bg-hero rounded-lg">
        <div>
          <div className="flex justify-center items-center">
            <h6 className="text-xs font-medium leading-normal">All chains</h6>
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
          {iterations.map((_, index) => (
            <div key={index}>
              {
                <div className="inline-flex justify-center items-center gap-2 mt-4">
                  <svg
                    className="rounded-full bg-gray-100 w-8 h-8 flex-shrink-0"
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
                  <p>Ethereum</p>
                </div>
              }
            </div>
          ))}
        </div>
        <div>
          <h6 className="text-xs font-medium leading-normal">Pay</h6>
          {iterations.map((_, index) => (
            <div className="mt-7" key={index}>
              {<p>0.05WETH</p>}
            </div>
          ))}
        </div>
        <div>
          <h6 className="text-xs font-medium leading-normal">Receive</h6>
          {iterations.map((_, index) => (
            <div className="mt-7" key={index}>
              {<p>89.756 USDT</p>}
            </div>
          ))}
        </div>
        <div>
          <h6 className="text-xs font-medium leading-normal">Creation date</h6>
          {iterations.map((_, index) => (
            <div className="mt-7" key={index}>
              {<p>23-02-2023</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
