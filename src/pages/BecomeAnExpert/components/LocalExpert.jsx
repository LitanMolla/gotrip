import React from 'react'
import Features from './Features'

const LocalExpert = () => {
    return (
        <div className='bg-blue-100'>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="lg:w-1/2 py-10">
                        <h4 className='text-3xl font-bold'>Why be a Local Expert</h4>
                        <p className='text-slate-500'>These popular destinations have a lot to offer</p>
                        <Features />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="aspect-video">
                            <iframe
                                className='h-full w-full'
                                src="https://www.youtube.com/embed/E6fefQGxg7g?si=oaCK9sCHat0F94c1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LocalExpert