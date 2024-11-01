import { Link as ScrollLink } from 'react-scroll';
import { FaCalendarAlt, FaEnvelope, FaHome, FaInfoCircle, FaServicestack } from "react-icons/fa"
import logo from "../assets/img3.svg"
import backgroundImg from "../assets/img1.png"
import SmallMenu from './SmallMenu';

export default function Header() {
    return (
        <header
            className='fixed top-0 z-50 flex items-center justify-between w-full px-2 py-1 border-b border-gray-900 sm:px-8'
            style={{ background: `url(${backgroundImg}) center center no-repeat`, backgroundSize: "cover" }}
        >
            <div>
                <img src={logo} alt="logo" className='w-16 h-16' />
            </div>
            <div className='items-center hidden md:flex gap-x-10'>
                <nav>
                    <ul className='text-lg menu menu-horizontal'>
                        <li>
                            <ScrollLink
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <FaHome />
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
                                <FaInfoCircle />
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
                                <FaServicestack />
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
                                <FaEnvelope />

                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    <button type='button' className='flex items-center rounded-full btn-outline btn btn-secondary'>
                        <FaCalendarAlt size={20} />
                        Book Now
                    </button>
                </div>
            </div>

            <SmallMenu />

        </header>
    )
}
