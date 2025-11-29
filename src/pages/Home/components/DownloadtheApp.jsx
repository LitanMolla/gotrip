import React from 'react'
import illustration from '../../../assets/dw.svg'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
const DownloadtheApp = () => {
    return (
        <>
            <div className='my-15 lg:my-30'>
                <div className="container">
                    <div className="flex gap-6 items-center flex-col-reverse lg:flex-row">
                        <div className="lg:w-1/2">
                            <img className='w-full' src={illustration} alt="illustration" />
                        </div>
                        <div className="lg:w-1/2">
                            <div className="flex justify-center">
                                <div className="max-w-lg space-y-6">
                                    <h4 className='font-bold text-4xl'>Your <span className='text-blue-600'>all-in-one</span> travel app.</h4>
                                    <p className='text-gray-500'>Book in advance or last-minute with GoTrip. Receive instant confirmation. Access your booking info offline.</p>
                                    <div className="flex gap-6">
                                        <button className='bg-blue-950 text-gray-100 px-5 py-2 rounded-sm cursor-pointer duration-300 hover:bg-blue-900'>
                                            <div className="flex justify-between items-center gap-5">
                                                <div className="">
                                                    <FaApple className='text-3xl' />
                                                </div>
                                                <div className="h-8 w-px bg-gray-500"></div>
                                                <div className="">
                                                    <p>Download on the</p>
                                                    <h4 className='text-lg font-medium'>Apple Store</h4>
                                                </div>
                                            </div>
                                        </button>
                                        <button className='bg-blue-950 text-gray-100 px-5 py-2 rounded-sm cursor-pointer duration-300 hover:bg-blue-900'>
                                            <div className="flex justify-between items-center gap-5">
                                                <div className="">
                                                    <FaGooglePlay className='text-3xl' />
                                                </div>
                                                <div className="h-8 w-px bg-gray-500"></div>
                                                <div className="">
                                                    <p>Get in on</p>
                                                    <h4 className='text-lg font-medium'>Google Play</h4>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DownloadtheApp