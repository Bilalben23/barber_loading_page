import React from 'react'
import { Link } from 'react-scroll'
import img4 from "../assets/img4.png"
import { FaChevronRight } from 'react-icons/fa'

export default function AboutUs() {
    return (
        <div className='w-[90%] md:w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-x-20 items-center'>
            <div className='w-full mt-5 md:mt-0 md:w-auto'>
                <img src={img4} alt="barber" className='w-full h-full' />
            </div>
            <div className='w-full md:w-1/2'>
                <h2 className='mb-2 text-sm text-error'>About us</h2>
                <p className='mb-2 text-2xl font-semibold md:text-3xl'>Premium Haircut & Grooming Salon for Men</p>
                <p className='mb-5 md:mb-10 opacity-60'>Let your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!</p>
                <Link to="#" className='rounded-full btn btn-secondary'>
                    Read More
                    <span className='btn btn-ghost btn-circle btn-sm'>
                        <FaChevronRight />
                    </span>

                </Link>
            </div>
        </div>
    )
}
