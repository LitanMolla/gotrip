import React from 'react'
import InspirationBlog from './InspirationBlog';
import blogs from '../../../lib/data/blogs';

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
                            <InspirationBlog blog={blog} key={blog?.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inspiration