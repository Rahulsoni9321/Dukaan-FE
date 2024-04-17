import React from 'react'
import { CiCircleQuestion } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

 const FirstCard = ({ label }) => {
    return (
      <div className="rounded-lg  bg-[#146eb4] text-white flex flex-col justify-between col-span-1  pt-4   gap-4  drop-shadow-md shadow-[#f4f4f4]">
        <div className="text-xs text-white flex gap-2 items-center px-4">
          <div className="text-sm text-white "> {label}</div>
          <CiCircleQuestion className='text-white text-lg'></CiCircleQuestion>{" "}
        </div>
        <div className="text-md flex justify-between items-center px-4">
          <div className="text-3xl font-semibold">&#x20B9; 2,312.23</div>
          <div className="flex gap-1 items-center underline underline-offset-1 ">
            <div className="text-sm font-medium text-white">23 Orders</div>
            <RiArrowDropDownLine className="transform -rotate-90"></RiArrowDropDownLine>
          </div>
        </div>
        <div className="bg-[#0e4f82]  text-xs py-2 text-white/90 w-full  rounded-md flex justify-between px-5">
          <div>Next payout date</div>
          <div className='text-white'>Today, 4:00 pm</div>
        </div>
      </div>
    );
  };
  

export default FirstCard
