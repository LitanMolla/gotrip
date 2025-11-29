import { useState } from 'react'
import TestimonialCard from './TestimonialCard';
import testimonials from '../../../lib/data/testimonials';

const Testimonials = () => {
    const [currrentTestimonial,setCurrrentTestimonial] = useState(1)
    const testimonial = testimonials.find(item=>item.id===currrentTestimonial)
    return (
        <div style={{ backgroundImage: `url(./bg-2.svg)` }} className='py-30 bg-center bg-cover bg-no-repeat bg-gray-100'>
            <div className="container">
                <div className="max-w-2xl mx-auto">
                    <div className="">
                        <TestimonialCard testimonial={testimonial}/>
                    </div>

                    <div className="flex gap-5 flex-wrap mt-10 justify-center">
                        {testimonials?.map((item, i) => (
                            <div className={`${currrentTestimonial === item?.id && 'border'} rounded-full size-26 flex justify-center items-center`}>
                                <button onClick={()=>setCurrrentTestimonial(item?.id)} key={i} className="size-21 overflow-hidden rounded-full cursor-pointer bg-transparent">
                                    <div className="h-full">
                                        <img className='w-full h-full  object-cover' src={item?.avatar} alt={item?.name} />
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials