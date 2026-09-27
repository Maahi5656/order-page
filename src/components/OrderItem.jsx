import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import chair from '../assets/chair.png'

const OrderItem = () => {
    return (
        <div className='border-2 border-[#f7f7f7] my-5 p-2.5 rounded-2xl'>
            <div className='flex justify-between'>
                <h2 className='text-[14px] font-bold mb-2.5'>Order Items</h2>
                <Link href="#" className='text-[12px] text-blue-600 font-bold'>{"View Details >"}</Link> 
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <Image src={chair} width={150} height={150} alt='order-item' className='p-2.5 rounded' />
                    <div>
                        <h2 className='font-bold'>Chair</h2>
                        <p className='font-bold'>Quantity: 1</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-[16px] font-bold'>$60</h2>
                </div>
            </div>
        </div>

    )
}

export default OrderItem