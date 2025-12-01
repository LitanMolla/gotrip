import React from 'react'

const HowDoesItWorkCard = ({ badge, icon }) => {
  return (
    <div className='bg-[#EBFCEA] size-30 rounded-full relative flex justify-center items-center duration-300 hover:bg-slate-900'>
      <img src={icon} alt={badge} />
      <h4 className='bg-yellow-400 text-slate-900 size-9 flex justify-center items-center font-semibold absolute top-4 left-4 rounded-full -translate-1/2 border-2 border-white'>{badge}</h4>
    </div>
  )
}

export default HowDoesItWorkCard
