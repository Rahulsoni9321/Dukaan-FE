import React from "react";
import { sidebaritems } from "../config";
import Sidebarholder from "./Sidebarholder";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-[#1e2640] h-screen flex flex-col relative overflow-y-auto">
      <div className="flex mx-3 2xl:mx-5 justify-between items-center mb-2 h-16 2xl:24">
        <div className="flex gap-3 h-full py-3 2xl:p items-center">
          <div className="my-0.5 py-1.5 2xl:py-3 2xl:px-1 bg-white rounded-sm text-xs">
            <img
              className="w-10 h-6"
              src="https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bPkU8fPvumIC9CXcX08qGZM3IXKR9Ljkm~OMRoscRnrrlOvp9G9nj35mOV82AVe0h-gHKwkLmFlHuLTzDTB9weAUDC5S402J9M~L8FQ5J~pXxZ6tO9SgJvvafoUhidfJZ0rTRghKQywS-~GcQ5gguWH-RrB-pNRta6sCF5sGBsJNzh15PM4t~fbqVEhfsCNXh1ykJFF3dO-GcKbpPPomiE-zq~k6bWF86GiqyxBtGeYdRl0p5f7BbpFFurX234F-ioYW6KQ~tZ9xY5Dwa-8E0T2toqjBJq5ejxKDzko3i~l9DszqUia3wOYskKFk1TqJW9tVbnmvNAgNAbxfrbZwYA__"
            />
          </div>
          <div className="flex flex-col gap-2 justify-between">
            <div className="text-sm 2xl:text-lg text-gray-100">Nishyan</div>
            <div className="underline underline-offset-1 text-gray-400 2xl:text-md text-xs">
              Visit store
            </div>
          </div>
        </div>
        <div className="text-white text-3xl">
          <RiArrowDropDownLine></RiArrowDropDownLine>
        </div>
      </div>
      {sidebaritems.map((items,index) => {
        return <Sidebarholder key={index} name={items.name}>{items.icon}</Sidebarholder>;
      })}
      <div className="absolute bottom-2 p-2 2xl:p-4 px-3 rounded-md  items-center w-11/12 bg-[#353c53] shadow-sm shadow-black/60 mx-2 flex 2xl:gap-5 gap-3">
        <div className="text-white   bg-[#494f64] rounded-md hidden md:block ">
          <CiWallet className="px-0.5 2xl:px-1  w-8 h-8 2xl:w-12 2xl:h-12" />
        </div>

        <div className="flex flex-col  justify-between">
          <div className="text-gray-300 text-xs 2xl:text-xl">
            Available credits
          </div>
          <div className="text-gray-100 text-sm 2xl:text-2xl">222.10</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
