import { useEffect, useState } from 'react';
import { FaCalendarCheck, FaChevronLeft, FaInfo } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const API_KEY = import.meta.env.VITE_API_KEY;


export default function BookAppointment() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        message: '',
    });

    const location = useLocation();
    const serviceName = location.state?.serviceName;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Format the date
        const formattedDate = new Date(formData.date).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });

        // Send email using EmailJS
        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                name: formData.name,
                phone: formData.phone,
                date: formattedDate,
                serviceName: serviceName || "No Service chosen",
                time: formData.time,
                message: formData.message
            },
            API_KEY
        )
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                toast.success('Appointment request sent successfully!'); // Success toast
            })
            .catch(err => {
                console.error('Failed to send email:', err);
                toast.error('Failed to send book appointment request, please try again.');
            })
            .finally(() => {
                setLoading(false);
                if (!error) {
                    setFormData({
                        name: '',
                        phone: '',
                        date: '',
                        time: '',
                        message: '',
                    });
                }
            })

        // Reset form data
        setFormData({
            name: '',
            phone: '',
            date: '',
            time: '',
            message: '',
        });
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }, [])

    // Get today's date for the min attribute
    const today = new Date().toISOString().split('T')[0];

    return (
        <section className='my-24'>
            <h2 className='flex items-center justify-center text-xl font-bold text-center mb-7 lg:text-3xl md:text-2xl text-error'>
                <FaCalendarCheck className='mr-2' />
                Book Your Appointment
            </h2>
            <form
                onSubmit={handleSubmit}
                className='max-w-lg p-8 mx-auto md:rounded shadow-md bg-[#F5F5F5]'

            >
                {
                    serviceName && <h3 className='flex items-center mb-3 text-info gap-x-2'>
                        <div>
                            <FaInfo size={10} className="p-1.5 btn btn-circle btn-xs btn-info shadow" />
                        </div>
                        <p>You selected <span className='font-semibold'>{serviceName}</span> service.</p>
                    </h3>
                }
                <div className='mb-4'>
                    <label htmlFor='name' className='block mb-0.5 font-medium text-gray-800'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full capitalize input input-bordered input-secondary'
                        placeholder='Your Name...'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='phone' className='block mb-0.5 font-medium text-gray-800'>Phone Number</label>
                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className='w-full input input-bordered input-secondary'
                        placeholder='Your phone number...'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='date' className='block mb-0.5 font-medium text-gray-800'>Preferred Date</label>
                    <input
                        type='date'
                        id='date'
                        name='date'
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={today}
                        className='w-full input input-bordered input-secondary'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='time' className='block mb-0.5 font-medium text-gray-800'>Preferred Time</label>
                    <input
                        type='time'
                        id='time'
                        name='time'
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className='w-full input input-bordered input-secondary'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='message' className='block mb-0.5 font-medium text-gray-800'>Message</label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        rows='4'
                        className='w-full textarea textarea-secondary'
                        placeholder='Type your message...'
                    />
                </div>
                <button type='submit' className={`btn btn-block disabled:bg-secondary disabled:text-white disabled:skeleton btn-secondary flex items-center justify-center`} disabled={loading}  >
                    <FaCalendarCheck className='mr-2' />
                    Book Appointment {loading && "..."}
                </button>
            </form>
            <div className='max-w-lg mx-auto mt-3'>
                <Link to="/" className='rounded-full btn btn-primary'>
                    <FaChevronLeft size={20} />
                    Go Back
                </Link>
            </div>
        </section>
    );
}
