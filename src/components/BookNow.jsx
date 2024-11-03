import React from 'react'
import { FaCalendarAlt, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img5 from "../assets/img5.png"

const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER;

export default function BookNow() {
    return (
        <div
            className='w-full py-12 mt-20'
            style={{ background: `url(${img5}) center center no-repeat`, backgroundSize: "cover" }}
        >
            <div className='flex w-[85%] items-center flex-col md:flex-row justify-between gap-x-12 md:w-[80%] mx-auto'>
                <div>
                    <h3 className='mb-2 font-semibold text-error'>Book Now</h3>
                    <p className='mb-2 text-2xl font-semibold md:text-xl lg:text-4xl md:w-[90%]'>Book your Appointment Online.</p>
                    <p className='mb-3 text-gray-500 md:mb-6 md:w-3/4'>Get 10% Discount on your first hair cut by using our website.</p>
                    <Link to="book-appointment" className='rounded-full btn btn-secondary'>
                        <FaCalendarAlt />
                        Book Appointment
                    </Link>
                </div>
                <div className='w-full mt-8 transition border-2 border-gray-900 rounded hover:border-gray-300 md:w-auto md:mt-0 bg-secondary text-secondary-content md:tooltip md:tooltip-left' data-tip="Click To Call">
                    <a href={`tel:${PHONE_NUMBER}`} className='block w-full p-10'>
                        <div className='mx-auto mb-2.5 w-fit'>
                            <button type="button" className='btn btn-circle btn-neutral'>
                                <FaPhone size={23} />
                            </button>
                        </div>
                        <p className='mb-1 font-semibold text-center text-gray-700'>Call Now</p>
                        <p className='font-sans text-lg font-semibold text-center'>{PHONE_NUMBER}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
