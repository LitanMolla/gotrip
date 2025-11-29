import React from 'react'

const PopularDestinationsCard = ({ country }) => {
    const {image,name} = country || {}
    return (
        <div style={{ backgroundImage: `url(${image})` }} className='min-h-100 mx-2 bg-cover bg-center object-cover bg-no-repeat rounded-sm overflow-hidden flex group cursor-pointer'>
            <div className="bg-black/20 p-8 flex-1 flex flex-col group-hover:bg-black/60 duration-300">
                <div className="flex-1"></div>
                <div className={`relative top-22 group-hover:top-0 duration-300`}>
                    <h4 className='text-2xl font-bold text-center text-gray-100'>{name}</h4>
                    <button className='btn btn-primary w-full mt-4'>Discover</button>
                </div>
            </div>
        </div>
    )
}

export default PopularDestinationsCard