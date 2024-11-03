import React from 'react'
import { FaStar } from 'react-icons/fa'
import testimonialsData from "../data/testimonials.json"
import TestimonialCard from '../cards/TestimonialCard'

export default function Testimonials() {
    return (
        <div className='mt-20 w-[95%] md:w-[90%] lg:[w-[85%] mx-auto flex-col md:flex-row flex gap-x-5'>
            <div className='p-2 md:w-2/5'>
                <h5 className='mb-2 font-semibold text-error'>Testimonials</h5>
                <p className='mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl'>What Our Clients Say About Us</p>
                <p className='mb-6 text-gray-500'>Let your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!</p>

                <a href="#" className='rounded-full shadow btn btn-secondary group'>
                    <FaStar size={20} className='text-yellow-400 drop-shadow-md group-[:hover]:animate-spin' />
                    Give Review
                </a>
            </div>

            <div className="flex-1 py-5 overflow-x-auto carousel gap-x-6">
                {
                    testimonialsData.map(testimonial => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))
                }
            </div>

        </div>
    )
}