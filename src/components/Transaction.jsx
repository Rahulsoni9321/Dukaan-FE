import React, { useRef } from "react";
import { TransactionDetails } from "../config";
import TransactionDetailsCard from "./TransactionDetails";
import { BiSort } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const Transaction = () => {
  const inputref = useRef();
  const handlebuttonclick = () => {
    {
      inputref.current.focus();
    }
  };
  return (
    <div className="px-2 py-2 rounded-md bg-[#ffffff] flex flex-col gap-4  drop-shadow-md shadow-[#f4f4f4]">
      <div className="flex justify-between">
        <div className=" flex items-center justify-center ">
          <IoIosSearch
            onClick={handlebuttonclick}
            className="cursor-pointer text-gray-600 bg-white border border-[#d9d9d9] border-r-0  w-7 pl-0.5 py-1.5 h-7 rounded-tl-sm rounded-bl-sm  "
          ></IoIosSearch>
          <input
            ref={inputref}
            placeholder="Order ID or transaction ID"
            type="text"
            className="bg-white relative text-gray-400  rounded-sm border-l-0  outline-none text-xs py-1.5 placeholder:text-xs w-44 border  border-[#d9d9d9]"
          ></input>
        </div>
        <div className="flex gap-3">
          <button className="text-sm  rounded-sm px-2 flex items-center gap-1 border border-[#d9d9d9] shadow-sm shadow-gray-200">
            Sort<BiSort className=" w-3 h-3"></BiSort>
          </button>
          <button className="text-xs  rounded-sm px-1.5 border border-gray-200 shadow-sm shadow-gray-200">
            <FiDownload className="text-lg" />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div  className="flex justify-between px-2 bg-[#f2f2f2] font-sans text-[#4c4c4c] font-medium text-xs py-1.5 rounded-sm">
          <div>Order ID</div>
          <div>Status</div>
          <div>Transaction ID</div>
          <div>Refund Date</div>
          <div>Order Amount</div>
        </div>
        {TransactionDetails.map((detail, index) => {
          return (
            <div key={index}><TransactionDetailsCard
              key={index}
              orderid={detail.orderid}
              status={detail.status}
              transactionid={detail.Transactionid}
              refunddate={detail.refunddate}
              orderamount={detail.orderamount}
            ></TransactionDetailsCard>
            {index===TransactionDetails.length-1 ? "":<hr className="mx-2"></hr>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transaction;
