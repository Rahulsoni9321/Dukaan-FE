import React, { useEffect, useRef, useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { RiArrowDropDownFill } from "react-icons/ri";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    const inputref=useRef();
   const handlebuttonclick=()=>{{
      inputref.current.focus();
   }}
  
  return (
    <div className="w-full  h-16 py-3 flex justify-between px-7 font-sans  items-center border border-b boder-gray-500">
      <div className="flex gap-3 items-center">
        <div className="text-black text-xl font-semibold ">PayOuts</div>
        <div className="text-xs text-black/70 flex gap-1 items-center ">
          <CiCircleQuestion></CiCircleQuestion>
          <div>How it works</div>
        </div>
      </div>
      <div className="flex-grow text-center  flex items-center justify-center ">
          <IoIosSearch onClick={handlebuttonclick} className="cursor-pointer text-gray-600 bg-[#f2f2f2] w-9 px-2.5 h-9 rounded-tl-md rounded-bl-md  "></IoIosSearch>
        <input
        ref={inputref}
          placeholder="Search features, tutorials etc."
          type="text"
          className="bg-[#f2f2f2] relative text-gray-400 w-1/2  py-2 rounded-sm text-sm  outline-none"
        ></input>
      </div>
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-[#e6e6e6] text-5xl rounded-full flex items-center justify-center p-0.5">
        <RiMessage2Fill className="transform -skew-y-6 text-[#4c4c4c]  text-lg"></RiMessage2Fill>
</div>
        <div className="w-8 h-8 bg-[#e6e6e6] text-5xl rounded-full flex items-center justify-center">
          <RiArrowDropDownFill className="text-[#4c4c4c] w-12 h-12"></RiArrowDropDownFill>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
