import Image from "next/image";

import Timeline from "@/components/Timeline";
import DeliveryInfo from "@/components/DeliveryInfo";
import OrderItem from "@/components/OrderItem";
import OrderSummary from "@/components/OrderSummary";
import SupportInfo from "@/components/SupportInfo";

import deliveryIcon from '../assets/delivery.png'

import { TiTick } from "react-icons/ti";

// import './style.css'

export default function Home() {
  return (
    <div className="max-w-[75%] mx-auto py-4 px-5 border border-[#d3deea] bg-[#fff] rounded">
      <div className="text-center my-2">
        <h2 className="text-[#020313] font-bold">Track Your Order</h2>
        <p>Order Id: #ORD-2847593</p>
      </div>
      <div className="flex justify-between items-start bg-[#e9faf0] p-3.5 rounded">
        <div className="p-1.5">
            <Image src={deliveryIcon} width={50} height={50} alt="delivery-icon" />
        </div>
        <div className="px-1.5">
           <h2 className="text-[#020313] font-bold mb-1.5">Out For Delivery</h2>
           <p className="font-semibold mb-1.5">Your order is on the way! It will be delivered soon</p>
        </div>
      </div>
      <Timeline />
      <DeliveryInfo />
      <OrderItem />
      <OrderSummary />
      <SupportInfo />
    </div>
  );
}
