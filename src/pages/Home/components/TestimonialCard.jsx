import React from 'react'

const TestimonialCard = ({ testimonial }) => {
    const { quote, role, name } = testimonial || { }
    return (
        <div className="text-center">
            <h4 className='text-3xl font-bold mb-2'>Testimonials</h4>
            <p>Interdum et malesuada fames ac ante ipsum</p>
            <div className="max-w-xl mx-auto mt-10">
                <div className="text-center">
                    <img className='w-15 mx-auto' src="https://creativelayers.net/themes/gotrip-html/img/misc/quote.svg" alt="qute" />
                    <h4 className='text-2xl font-semibold my-10'>"{quote}"</h4>
                    <p className='font-medium'>{name}</p>
                    <p className='text-sm text-gray-500'>{role}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard