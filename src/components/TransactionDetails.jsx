import React from "react";

const TransactionDetailsCard = ({
  orderid,
  status,
  transactionid,
  refunddate,
  orderamount,
}) => {
  return (
    
    <div className="flex  justify-between items-center px-2 text-xs   font-sans text-[#4c4c4c] py-2 rounded-sm">
      <div className="text-[#146eb4] font-medium">{orderid}</div>
      {status === "Successful" ? (
        <div className="flex gap-2 items-center">
           <div className="w-2 h-2 bg-[#17b31b] rounded-full"></div>
            <div className="text-xs text-[#1a181e] font-medium">{status}</div>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
         <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
         <div className="text-xs  font-medium text-[#1a181e]">{status}</div>
     </div>
      )}
      <div>{transactionid}</div>
      <div className="whitespace-nowrap px-3 py-[4px]">{refunddate}</div>
      <div>{orderamount}</div>
    </div>
  );
};

export default TransactionDetailsCard;
