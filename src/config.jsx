import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { PiSquaresFour } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiAnnouncement } from "react-icons/tfi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { HiCash } from "react-icons/hi";
import { CiDiscount1 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdOutlineColorLens } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";

export const sidebaritems=[{
    name:"Home",
    icon:<GoHome></GoHome> 
},{
    name:"Orders",
    icon: <LuClipboardList></LuClipboardList>
},{
    name:"Products",
    icon: <PiSquaresFour></PiSquaresFour>
},{
    name:"Delivery",
    icon: <CiDeliveryTruck></CiDeliveryTruck>
},{
    name:"Marketing",
    icon: <TfiAnnouncement></TfiAnnouncement>
},{
    name:"Analytics",
    icon: <TbBrandGoogleAnalytics></TbBrandGoogleAnalytics>
},{
    name:"Payouts",
    icon: <HiCash></HiCash>
},{
    name:"Discounts",
    icon: <CiDiscount1></CiDiscount1>
},{
    name:"Audience",
    icon: <GoPeople></GoPeople>
},{
    name:"Appearance",
    icon: <MdOutlineColorLens></MdOutlineColorLens>
},{
    name:"Plugins",
    icon: <AiOutlineThunderbolt></AiOutlineThunderbolt>
}]

let orderid=265908;
const transactionid=234589;
export const TransactionDetails=[
    {
        orderid:"#"+orderid++,
        status:"Successful",
        Transactionid:transactionid,
        refunddate:"12 Jul 2023, 02:45 PM",
        orderamount:"Rs 1,125.00"
    },
    {
        orderid:"#"+orderid++,
        status:"Processing",
        Transactionid:transactionid,
        refunddate:"12 Jul 2023, 06:35 AM",
        orderamount:"Rs 1,125.00"
    }, {
        orderid:"#"+orderid++,
        status:"Successful",
        Transactionid:transactionid,
        refunddate:"12 Jul 2023, 06:35 AM",
        orderamount:"Rs 1,125.00"
    }, {
        orderid:"#"+orderid++,
        status:"Successful",
        Transactionid:transactionid,
        refunddate:"12 Jul 2023, 06:35 AM",
        orderamount:"Rs 1,125.00"
    }, {
        orderid:"#"+orderid++,
        status:"Successful",
        Transactionid:transactionid,
        refunddate:"12 Jul 2023, 06:35 AM",
        orderamount:"Rs 1,125.00"
    }, {
        orderid:"#"+orderid++,
        status:"Successful",
        Transactionid:transactionid,
        refunddate:"12 Jul 2023, 06:35 AM",
        orderamount:"Rs 1,125.00"
    },
]