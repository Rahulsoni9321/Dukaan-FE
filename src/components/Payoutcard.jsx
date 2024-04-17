import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

 const Payoutcard = ({ label }) => {
  return (
    <div className="rounded-lg  bg-white h-fit flex flex-col justify-around col-span-1 p-4 gap-4  drop-shadow-sm shadow-[#f4f4f4]">
      <div className="text-xs text-black flex gap-2 items-center">
        <div className="text-sm text-[#4c4c4c]"> {label}</div>
        <CiCircleQuestion className="text-lg"></CiCircleQuestion>{" "}
      </div>
      <div className="text-md flex justify-between items-center ">
        <div className="text-3xl font-sans font-semibold">&#x20B9; {label==="Amount Processed" ? "23,92,312.19" : "92,312.20"}</div>
        <div className="flex gap-1 items-center underline underline-offset-1 text-cyan-600">
          <div className={label==="Amount Processed" ? "hidden":"text-sm font-medium"}>13 Orders</div>
          <RiArrowDropDownLine className={label==="Amount Processed" ? "hidden":"transform -rotate-90"}></RiArrowDropDownLine>
        </div>
      </div>
    </div>
  );
};

export default Payoutcard

