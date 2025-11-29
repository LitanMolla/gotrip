import React from 'react'
const blogs = [
    {
        id: 1,
        date: "April 06, 2022",
        title: "10 European ski destinations you should visit this winter",
        excerpt:
            "Ut enim ad minim veniam, quis nostrud exerc ullamco laboris nisi ut aliquip.",
        image: "https://creativelayers.net/themes/gotrip-html/img/blog/1.png",
    },
    {
        id: 2,
        date: "April 06, 2022",
        title: "Booking travel during Corona: good advice in an uncertain time",
        excerpt:
            "Ut enim ad minim veniam, quis nostrud exerc ullamco laboris nisi ut aliquip.",
        image: "https://creativelayers.net/themes/gotrip-html/img/blog/2.png",
    },
];
const Inspiration = () => {
    return (
        <div>
            <div className='my-15 lg:my-30'>
                <div className="container">
                    <div className="text-center mb-10">
                        <h4 className='text-3xl font-bold'>Get inspiration for your next trip</h4>
                        <p className='text-slate-500'>Interdum et malesuada fames</p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-2">
                        {blogs.map((blog) => (
                            <article
                                key={blog.id}
                                className="flex gap-6 items-center flex-col md:flex-row"
                            >
                                {/* Image */}
                                <div className="md:w-1/2 rounded-md overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text content */}
                                <div className="md:w-1/2">
                                    <p className=" text-gray-400 mb-2">{blog.date}</p>
                                    <h3 className="text-2xl md:text-xl font-semibold text-slate-900 mb-2 leading-snug">
                                        {blog.title}
                                    </h3>
                                    <p className=" text-gray-500 leading-relaxed">
                                        {blog.excerpt}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inspiration