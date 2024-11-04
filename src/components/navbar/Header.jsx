import { FaCalendarAlt, FaEnvelope, FaHome, FaInfoCircle, FaListAlt } from "react-icons/fa"
import logo from "../../assets/logo.webp"
import backgroundImg from "../../assets/img1.png"
import SmallMenu from './SmallMenu';
import { Link, useNavigate } from 'react-router-dom';
import { navigateAndScroll } from "../../helpers/navigateAndScroll";

export default function Header() {
    const navigate = useNavigate()

    return (
        <header
            className='fixed top-0 z-40 flex items-center justify-between w-full px-2 py-0.5 border-b border-gray-900 sm:px-8'
            style={{ background: `url(${backgroundImg}) center center no-repeat`, backgroundSize: "cover" }}
        >
            <div>
                <img src={logo} alt="logo" className='w-12 h-12 rounded-full' />
            </div>
            <div className='items-center hidden md:flex gap-x-10'>
                <nav>
                    <ul className='text-lg menu menu-horizontal'>
                        <li >
                            <button type="button" onClick={() => navigateAndScroll(navigate, "home")}>
                                <FaHome />
                                Home
                            </button>
                        </li>
                        <li >
                            <button type="button" onClick={() => navigateAndScroll(navigate, "about")}>
                                <FaInfoCircle />
                                About Us
                            </button>

                        </li>
                        <li>
                            <button type="button" onClick={() => navigateAndScroll(navigate, "services")}>
                                <FaListAlt />
                                Services
                            </button>
                        </li>
                        <li>
                            <button type="button" onClick={() => navigateAndScroll(navigate, "contact")}>
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

            <SmallMenu />
        </header >
    )
}
