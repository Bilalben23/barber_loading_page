import { scroller } from 'react-scroll';
import { FaCalendarAlt, FaEnvelope, FaHome, FaInfoCircle, FaListAlt   } from "react-icons/fa"
import logo from "../assets/img3.svg"
import backgroundImg from "../assets/img1.png"
import SmallMenu from './SmallMenu';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    // Function to handle navigation and scroll
    function navigateAndScroll(section, offset = -70) {
        navigate('/');

        setTimeout(() => {
            scroller.scrollTo(section, {
                smooth: true,
                offset: offset,
                duration: 500,
            });
        }, 100);
    };

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
                        <li >
                            <button type="button" onClick={() => navigateAndScroll("home")}>
                                <FaHome />
                                Home
                            </button>
                        </li>
                        <li >
                            <button type="button" onClick={() => navigateAndScroll("about")}>
                                <FaInfoCircle />
                                About Us
                            </button>

                        </li>
                        <li>
                            <button type="button" onClick={() => navigateAndScroll("services")}>
                                <FaListAlt />
                                Services
                            </button>
                        </li>
                        <li>
                            <button type="button" onClick={() => navigateAndScroll("contact")}>
                                <FaEnvelope />
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Link to="book-appointment" className='flex items-center rounded-full btn-outline btn btn-secondary'>
                        <FaCalendarAlt size={20} />
                        Book Now
                    </Link>
                </div>
            </div>

            <SmallMenu navigateAndScroll={navigateAndScroll} />

        </header >
    )
}
