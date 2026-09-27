import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";

const DeliveryInfo = () => {
    return (
        <div className='bg-[#eff6fb] p-5 rounded'>
            <p className='mb-2.5 text-[18px] mb-1.0 font-semibold text-[#3d597b]'><TbTruckDelivery size={30} /> Estimated Delivery</p>
            <h2 className='text-[18px] font-bold text-[#000] space-x-1.0'>April 27, 2025 - 12:00 PM - 4:00 PM</h2>
        </div>
    )
}

export default DeliveryInfo