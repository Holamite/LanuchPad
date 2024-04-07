// "use client";

// import Link from "next/link";
// import { useSearchParams } from "next/navigation";

// const SwapNav = [
//   {
//     name: "Swap",
//     url: "/swap?swap=true&swap=true",
//     param: "swap",
//   },
// ];

// const SwapLayout = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   const search = useSearchParams();

//   return (
//     // <div className="bg-hero px-20">
//     //   <div className="container mx-auto flex flex-col gap-10">
//     //     {/* <div className="flex justify-between">
//     //       <h1 className="text-4xl font-semibold font-space py-3">
//     //         Spidex <span className="text-[#ade2ffc7]">Pads</span>
//     //       </h1>
//     //       <div className="bg-black rounded-[40px] px-4 py-3 flex gap-5">
//     //         {SwapNav.map((item, index) => (
//     //           <Link
//     //             href={item.url}
//     //             key={index}
//     //             className={`px-6 py-2 text-lg outline-none border-0 rounded-[40px] hover:bg-hero hover:text-pink-3 ${
//     //               search.get(item.param) == "true" && "text-pink-3 bg-hero"
//     //             }`}
//     //           >
//     //             {item.name}
//     //           </Link>
//     //         ))}
//     //       </div>
//     //     </div> */}
//     //     {/* {children} */}
//     //   </div>
//     // </div>
//   );
// };

// export default SwapLayout;
