import React from 'react'
import img6 from "../assets/img6.png"
import { Link } from 'react-router-dom'
import { FaCalendarAlt } from 'react-icons/fa'


export default function WorkingDays() {
    return (
        <div className='mt-20 w-[95%] md:w-[80%] mx-auto flex bg-gradient-to-tr from-info to-secondary text-secondary-content flex-col md:flex-row border border-gray-900 shadow'>
            <div className='w-full md:w-1/2'>
                <img src={img6} alt="barber" className='w-full h-full' />
            </div>
            <div className='self-center w-full py-4 md:w-1/2 px-7'>
                <h4 className='mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl'>Working Days</h4>
                <p className='mb-2 font-medium'>We are open on all six days in a week </p>
                <div className='flex flex-col gap-y-3'>
                    <div className='flex items-center justify-between py-0.5 border-b-2 border-gray-900 border-dotted'>
                        <p className='font-bold'>Monday</p>
                        <time className='font-mono'>9Am to 10pm</time>
                    </div>
                    <div className='flex items-center justify-between py-0.5 border-b-2 border-gray-900 border-dotted'>
                        <p className='font-bold'>Friday</p>
                        <time className='font-mono'>9Am to 10pm</time>
                    </div>
                </div>
                <Link to="#" className='mt-6 rounded-full shadow-md btn btn-error'>
                    <FaCalendarAlt />
                    Book Appointment
                </Link>
            </div>
        </div>
    )
}
