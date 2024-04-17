import React from 'react'
import Payoutcard from './Payoutcard';
import FirstCard from './Firstcard';
import Transaction from './Transaction';
import { RiArrowDropDownLine } from "react-icons/ri";



const MainArea = () => {
  return (
    <div className='mx-4 flex-grow  flex flex-col gap-5 bg-[#fafafa] pb-8'>
      <div className='flex justify-between mt-7 '>
        <div className='text-lg font-semibold text-black'>Overview</div>
        <button className='flex gap-1 px-1.5 py-1 border font-sans text-sm border-[#d9d9d9] shadow-sm shadow-gray-200 rounded-sm items-center'>This Month <RiArrowDropDownLine className='text-lg'/></button>
      </div>
      <div className='grid grid:cols-1 md:grid-cols-3 gap-3   '>
        <FirstCard label="Next Payout"></FirstCard>
        <Payoutcard label="Amount Pending"></Payoutcard>
        <Payoutcard label="Amount Processed" ></Payoutcard>
      </div>
      <div className='text-lg font-semibold'>Transactions | This Month</div>
      <div className='flex gap-3'>
        <button className='text-xs rounded-xl px-3 py-1 text-[#808080] bg-[#e6e6e6]'>Payouts (22)</button>
        <button className='text-xs rounded-xl px-3 py-1 text-white bg-[#146eb4]'>Refunds (8)</button>
      </div>
      <Transaction></Transaction>
      <div className='text-center flex justify-center gap-2'>Made with ❤️ by <a href='https://twitter.com/SoniRahul3108' className='uderline underline-offset-1 text-cyan-800'>@SoniRahul3108</a></div>

    </div>
  )
}

export default MainArea
     