import React from 'react'
import { Link } from 'react-router'

const BlogCard = ({post}) => {
    const {date,quote,image} = post || {}
    return (
        <Link to={'/'} className="space-y-2 cursor-pointer group overflow-hidden duration-300">
            <div className="overflow-hidden rounded-md">
                <img className='w-full rounded-md group-hover:scale-110 duration-300 h-60 object-cover' src={image} alt={quote} />
            </div>
            <h4 className='text-xl font-bold'>{quote}</h4>
            <p className='text-gray-500'>{date}</p>
        </Link>
    )
}

export default BlogCard
