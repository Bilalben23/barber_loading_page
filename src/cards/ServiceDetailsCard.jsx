import React from 'react'
import { FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'

export default function ServiceDetailsCard({ service }) {
    return (
        <div className='flex flex-col items-center w-full mt-6 md:flex-row gap-x-10'>
            <div className='md:w-1/2'>
                <img src={service.imageUrl} alt={service.serviceName} className='w-full aspect-[16/11]' />
            </div>
            <div className='mt-5 md:w-1/2 md:mt-0'>
                <p className='mb-2 text-lg font-semibold md:text-xl md:w-3/4 lg:text-2xl'>{service.title}</p>
                <p className='opacity-60'>{service.description}</p>
                <div className='flex flex-col mt-5 ml-5 gap-y-2'>
                    {
                        service.benefits.map((benefit, index) => {
                            return <p key={`benefit-${index}`} className='flex items-center space-x-2 text-sm'>
                                <FaCheckCircle className='shadow text-secondary' />
                                <span className='text-gray-400'>{benefit}</span>
                            </p>
                        })
                    }
                </div>
                <div className='mt-5'>
                    <a href='#' className='rounded-full btn-secondary btn btn-outline'>
                        <FaCalendarAlt size={20} />
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    )
}
