import React from 'react'
import backgroundImg from "../assets/img1.png"
import img2 from "../assets/img2.png"
import { FaCalendarCheck } from 'react-icons/fa'
import { BiListCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';


export default function Hero() {

    function scrollToAllServicesSection() {
        scroller.scrollTo("services", {
            smooth: true,
            offset: -95,
            duration: 500,
        });
    }

    return (
        <div id="home"
            className='w-full h-auto md:h-screen pt-[90px] flex flex-col-reverse md:flex-row justify-between gap-x-4'
            style={{ background: `url(${backgroundImg}) center center no-repeat`, backgroundSize: "cover" }}
        >
            <div className='self-center flex-1 px-6 pb-5 mt-4 md:pb-0 md:px-12 md:mt-0'>
                <div>
                    <h1 className='mb-3 font-semibold text-error'>Welcome To Barbero</h1>
                    <p className='mb-3 text-2xl font-semibold md:text-3xl lg:text-4xl'>Best Hair Salon For A Professional Look</p>
                    <p className='text-gray-500'>Barbero offers high performance customized facials to provide you with visible results.</p>
                    <div className='flex items-center justify-around mt-12 md:justify-start gap-x-14'>
                        <Link to="book-appointment" className='flex items-center rounded-full shadow btn btn-secondary'>
                            <FaCalendarCheck />
                            Book Now
                        </Link>
                        <button type="button" className='flex items-center rounded-full shadow btn btn-outline btn-secondary' onClick={scrollToAllServicesSection} >
                            <BiListCheck size={30} />
                            All Services
                        </button>
                    </div>
                </div>
            </div>

            <div className='select-none' draggable="false">
                <img src={img2} alt="barber" className='w-full md:h-full' />
            </div>
        </div>
    )
}
