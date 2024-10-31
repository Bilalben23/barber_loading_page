import React from 'react'
import { FaCalendarAlt, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img5 from "../assets/img5.png"

export default function BookNow() {
    return (
        <div
            className='w-full py-12 mt-20 bg-base-300'
            style={{ background: `url(${img5}) center center md:no-repeat`, backgroundSize: "cover" }}
        >
            <div className='flex w-[85%] items-center flex-col md:flex-row justify-between gap-x-12 md:w-[80%] mx-auto'>
                <div>
                    <h3 className='mb-2 text-sm text-error'>Book Now</h3>
                    <p className='mb-2 text-2xl font-semibold md:text-xl lg:text-4xl md:w-[90%]'>Book your Appointment Online.</p>
                    <p className='mb-3 md:mb-6 opacity-60 md:w-3/4'>Get 10% Discount on your first hair cut by using our website.</p>
                    <Link to="#" className='rounded-full btn btn-secondary'>
                        <FaCalendarAlt />
                        Book Appointment
                    </Link>
                </div>
                <div className='w-full mt-8 transition border-2 border-gray-900 rounded hover:border-gray-300 md:w-auto md:mt-0 bg-base-300 md:tooltip md:tooltip-left' data-tip="Click To Call">
                    <a href='tel:+212664897030' className='block w-full p-10'>
                        <div className='mx-auto mb-2.5 w-fit'>
                            <button type="button" className='btn btn-circle btn-neutral'>
                                <FaPhone />
                            </button>
                        </div>
                        <p className='mb-1 text-center opacity-60'>Call Now</p>
                        <p className='font-mono text-lg text-center'>+212664897030</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
