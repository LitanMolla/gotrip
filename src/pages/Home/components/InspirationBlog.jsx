import React from 'react'

const InspirationBlog = ({ blog }) => {
    const {image,excerpt,title,date} = blog || {}
    return (
        <article
            className="flex gap-6 items-center flex-col md:flex-row"
        >
            {/* Image */}
            <div className="md:w-1/2 rounded-md overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text content */}
            <div className="md:w-1/2">
                <p className=" text-gray-400 mb-2">{date}</p>
                <h3 className="text-2xl md:text-xl font-semibold text-slate-900 mb-2 leading-snug">
                    {title}
                </h3>
                <p className=" text-gray-500 leading-relaxed">
                    {excerpt}
                </p>
            </div>
        </article>
    )
}

export default InspirationBlog