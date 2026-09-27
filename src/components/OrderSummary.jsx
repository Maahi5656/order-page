import React from 'react'

const OrderSummary = () => {
    return (
        <div>
            <h2 className='text-[16px] font-bold mb-1.5'>Order Summary</h2>
            <table className='w-[100%] mb-4'>
                <tbody>
                    <tr className='flex justify-between'>
                        <td>
                            <b className='text-[#7c8094] text-[14px] font-semibold'>Subtotal</b>
                        </td>
                        <td>
                            <b className='text-[#7c8094] text-[14px] font-semibold'>$59.99</b>
                        </td>
                    </tr>
                    <tr className='flex justify-between'>
                        <td>
                            <b className='text-[#7c8094] text-[14px] font-semibold'>Shipping</b>
                        </td>
                        <td>
                            <b className='text-[#7c8094] text-[14px] font-semibold'>$4.99</b>
                        </td>
                    </tr>
                    <tr className='flex justify-between'>
                        <td>
                            <b className='text-[#7c8094] text-[14px] font-semibold'>Tax</b>
                        </td>
                        <td>
                            <b className='text-[#7c8094] text-[14px] font-semibold'>$5.20</b>
                        </td>
                    </tr>
                    <hr/>
                    <tr className='flex justify-between'>
                        <td>
                            <b className='text-[#000] text-[14px] font-bold'>Total</b>
                        </td>
                        <td>
                            <b className='text-[#000] text-[14px] font-bold'>$5.20</b>
                        </td>
                    </tr>
                    <tr>
                        <td className='pt-3'>
                            <button className='w-full text-[14px] my-1 bg-[#0065eb] border-2 border-[#0065eb] text-white font-bold py-3 rounded cursor-pointer'>{"View Order Details >"}</button>
                            <button className="w-full text-[14px] my-1 bg-transparent border-2 border-[#0065eb] text-[#0065eb] font-bold py-3 rounded cursor-pointer">Contact Support</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrderSummary