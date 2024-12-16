// import React from "react";
import Carousel from "./Carousel";
// import Category from "./Category";
// import Search from "./Search";
// import { PhoneCall } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <>
//       {/* <div className="  px-5 flex  gap-5 ">
//         {/* <Category /> */}
//         <div className="flex flex-col w-full gap-5">
//           {" "}
//           <div className="flex justify-between  ">
//             {/* <Search /> */}

//             <div className="flex gap-6">
//               <div className="bg-gray-light rounded-full size-12 flex items-center justify-center">
//                 <PhoneCall className="text-purple " />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <h2 className="font-bold">+92 000 000 000</h2>
//                 <p className="text-[#dfdfdf] text-sm">Support 24/7 time</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// }

import React from "react";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-12 gap-5 items-center px-5">
      <Carousel className="" />

      <div className="md:flex-col flex-row flex gap-5 col-span-4">
        <div className=" w-full h-[210px]  border-gray-light bg-[rgba(242, 245, 250, 0.6)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[6.7px] border-[3px]">
         
        </div>
        <div className=" w-full h-[210px]  border-gray-light bg-[rgba(242, 245, 250, 0.6)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[6.7px] border-[3px]">
          
        </div>
      </div>
    </div>
  );
}
