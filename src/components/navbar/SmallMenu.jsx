import React, { useState } from 'react'
import { FaArrowRight, FaBars, FaCalendarAlt, FaEnvelope, FaHome, FaInfoCircle, FaListAlt } from 'react-icons/fa'
import backgroundImg from "../../assets/img1.png"
import { Link, useNavigate } from 'react-router-dom';
import { navigateAndScroll } from '../../helpers/navigateAndScroll';


export default function SmallMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuToggle() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu(section) {
        navigateAndScroll(section, -95)
        setIsMenuOpen(false)
    }

    const navigate = useNavigate();


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
                            <button type='button' onClick={() => closeMenu(navigate, "home")}>
                                <FaHome size={25} />
                                Home
                            </button>
                        </li>
                        <li>
                            <button type='button' onClick={() => closeMenu(navigate, "about")}>
                                <FaInfoCircle size={25} />
                                About Us
                            </button>
                        </li>
                        <li>
                            <button type='button' onClick={() => closeMenu(navigate, "services")}>
                                <FaListAlt size={25} />
                                Services
                            </button>
                        </li>
                        <li>
                            <button type='button' onClick={() => closeMenu(navigate, "contact")}>
                                <FaEnvelope size={25} />
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className='pl-5 mt-4'>
                    <Link
                        to="book-appointment"
                        className='flex items-center h-[50px] rounded-full btn-outline btn btn-secondary text-lg'
                        onClick={closeMenu}
                    >
                        <FaCalendarAlt size={25} />
                        Book Now
                    </Link>
                </div>
            </div>
        </div >
    )
}

// !I tried to apply the event delegation, it doesn't work.
