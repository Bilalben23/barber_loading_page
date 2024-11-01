import React, { useState } from 'react'
import { FaArrowRight, FaBars, FaCalendarAlt, FaEnvelope, FaHome, FaInfoCircle, FaServicestack } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll';
import backgroundImg from "../assets/img1.png"


export default function SmallMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuToggle() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false)
    }


    return (
        <div className='flex items-center md:hidden gap-x-10'>

            <button type='button' className={`btn btn-circle btn-ghost ${isMenuOpen && "btn-active"}`} onClick={handleMenuToggle}>
                {
                    isMenuOpen
                        ? <FaArrowRight size={27} />
                        : <FaBars size={30} />
                }

            </button>

            <div
                className={`fixed right-0 z-10 top-[72px] h-[calc(100vh-72px)] w-full p-5 transition-all duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                style={{ background: `url(${backgroundImg}) center no-repeat`, backgroundSize: "cover" }}
            >
                <nav>
                    <ul className='w-full pt-5 menu menu-vertical *:text-lg' >
                        <li>
                            <ScrollLink
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={closeMenu}
                            >
                                <FaHome size={25} />
                                Home
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <FaInfoCircle size={25} />
                                About Us
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <FaServicestack size={25} />
                                Services
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <FaEnvelope size={25} />
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </nav>
                <div className='pl-5 mt-4'>
                    <button type='button' className='flex items-center h-[50px] rounded-full btn-outline btn btn-secondary text-lg'>
                        <FaCalendarAlt size={25} />
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}

// !I tried to apply the event delegation, it doesn't work.
