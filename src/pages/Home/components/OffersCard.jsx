import React from 'react'
import { Link } from 'react-router'

const OffersCard = ({offer}) => {
    const {title,badge,target,targetLabel,image} = offer || {}
  return (
    <div className={`bg-cover bg-center bg-no-repeat p-12 rounded-sm min-h-90`} style={{backgroundImage: `url(${image})`}}>
        {badge&&<p className='text-gray-100 mb-2'>{badge}</p>}
        <h4 className='text-3xl font-bold text-gray-100 mb-8'>{title}</h4>
        <Link className='btn btn-primary inline-block' to={target}>{targetLabel}</Link>
    </div>
  )
}

export default OffersCard