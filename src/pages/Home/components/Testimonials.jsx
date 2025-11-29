import React, { useState } from 'react'
import TestimonialCard from './TestimonialCard';
// testimonialData.js (অথবা একই ফাইলে রাখলেও চলে)
export const testimonials = [
    {
        id: 1,
        name: "Ali Tufan",
        role: "Product Manager, Apple Inc",
        quote:
            "Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.",
        avatar:
            "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    },
    {
        id: 2,
        name: "John Carter",
        role: "Marketing Lead, Google",
        quote:
            "Amazing service and super friendly staff. The booking process was smooth and fast.",
        avatar:
            "https://images.unsplash.com/photo-1654110455429-cf322b40a906?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    {
        id: 3,
        name: "Sarah Lee",
        role: "UX Designer, Airbnb",
        quote:
            "Loved the experience! The hotel location and support team were both fantastic.",
        avatar:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    },
    {
        id: 4,
        name: "David Kim",
        role: "Software Engineer, Meta",
        quote:
            "I could manage my trip without any hassle. Highly recommended for frequent travelers.",
        avatar:
            "https://img.freepik.com/free-photo/isolated-image-attractive-red-haired-bearded-young-caucasian-male-dressed-elegant-stylish-clothes-staring-with-intense-concentrated-look-human-facial-expressions-attitude_343059-4782.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        id: 5,
        name: "Emma Watson",
        role: "Travel Blogger",
        quote:
            "From booking to checkout, everything was super smooth and easy to handle.",
        avatar:
            "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=200&q=80",
    },
];

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