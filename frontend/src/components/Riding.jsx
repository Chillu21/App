import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return(
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-bold ri-home-5-line"></i>
            </Link>
            <div className='h-1/2'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-1/2 p-4'>
            <div className='flex items-centre justify-between'>
                <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" alt="" />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>Chaitanya</h2>
                    <h4 className='text-xl font-semibold -mt-2 -mb-1' >MH12 AB 1245</h4>
                    <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                </div>
                </div>
                
                
                <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                  
                   <div className='flex items-center gap-5 p-3 border-b-2'>
                   <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-600'>pwd ground, pune</p>
                    </div>
                   </div>
                   <div className='flex items-center gap-5 p-3'>
                   <i className="ri-currency-line"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹192</h3>
                        <p className='text-sm text-gray-600'>Cash Cash</p>
                    </div>
                   </div>
                </div>
            </div>
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>

            </div>

        </div>
    )
}
export default Riding