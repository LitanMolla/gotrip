import React from 'react'

const FeatureCard = ({ feature }) => {
    const {image, title, details} = feature || {}
    return (
        <div className='flex gap-2'>
            <div className="size-[50px]">
                <img className='w-full' src={image} alt={title} />
            </div>
            <div className="">
                <h4 className='text-lg font-medium'>{title}</h4>
                <p className='text-slate-600'>{details}</p>
            </div>
        </div>
    )
}

export default FeatureCard