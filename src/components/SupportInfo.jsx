import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { BiSupport } from "react-icons/bi";

const SupportInfo = () => {
    return (
        <div className='flex items-start bg-[#eff5fa] py-2.5 px-4 rounded'>
            <BiSupport className='text-[50px]' />
            <div className='px-2.5'>
                <h2 className='text-[18px] text-[#000] font-bold mb-1.5'>Need help with your delivery?</h2>
                <p className='text-[14px] font-medium mb-3.5'>If you hac any questions or need to report <br/> an issue our support team is here to help.</p>
                <Link href="#" className='text-[14px] font-bold text-[#0065eb]'>{"Contact Support ->"}</Link>
            </div>
        </div>
    )
}

export default SupportInfo