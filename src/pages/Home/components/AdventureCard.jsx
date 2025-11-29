import React from 'react'

const AdventureCard = ({category}) => {
    const {icon,priceFrom,tours,title} = category || {}
    return (
        <div className='min-h-65 p-5 rounded-sm border border-gray-300 text-center group hover:bg-blue-600 duration-300 cursor-pointer'>
            <img className='w-15 mx-auto my-12 group-hover:invert group-hover:brightness-0 duration-300' src={icon} alt={title} />
            <h4 className='text-lg font-medium group-hover:text-gray-100'>{title}</h4>
            <p className='text-gray-500 group-hover:text-gray-100'>{tours} Tours From {priceFrom}$</p>
        </div>
    )
}

export default AdventureCard