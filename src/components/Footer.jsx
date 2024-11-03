import React from 'react'
import { FaCopyright, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'
import ContactItem from './ContactItem';
import SocialIcon from './SocialIcon';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER;
const EMAIL_ADDRESS = import.meta.env.VITE_EMAIL_ADDRESS;


export default function Footer() {
    const date = new Date();
    return (
        <footer className='pb-10 md:py-10 border-t border-gray-700 shadow-lg md:px-5 bg-base-300'>
            <div className='w-full'>
                <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.564498260091!2d-3.7708454899017307!3d40.39634377132369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418814f7d0729f%3A0x7d6bc3cd616d559a!2sP.%C2%BA%20de%20Extremadura%2C%20Madrid%2C%20Spain!5e0!3m2!1sen!2sma!4v1715513706651!5m2!1sen!2sma"
                    width="100%"
                    className='h-[300px] md:h-[400px] lg:h-[500px]'
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            <div className='px-5'>
                {/* Contact Section */}
                <div className='my-8'>
                    <h6 className='mb-5 text-xl font-bold text-center text-error'>Get In Touch </h6>
                    <div className="flex flex-wrap items-center justify-between gap-5">
                        <ContactItem icon={FaMapMarkerAlt} title="Our Address" content="123 Main Street, City, ZIP Code, Country" />
                        <ContactItem icon={FaPhone} title="Call Us" content={PHONE_NUMBER} />
                        <ContactItem icon={FaWhatsapp} title="Chat With Us" content={WHATSAPP_NUMBER} />
                        <ContactItem icon={FaEnvelope} title="Email Us" content={EMAIL_ADDRESS} />
                    </div>
                </div>

                <hr className='w-[80%] mx-auto opacity-25' />

                <div className='flex flex-col-reverse items-center mt-8 gap-y-4 justify-evenly md:flex-row'>
                    <div>
                        <div className='flex items-center text-sm gap-x-1'>
                            <FaCopyright />
                            <p><span className='font-sans'>{date.getFullYear()} </span> All Copyrights Reserved To Barbero</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <SocialIcon tooltip="Facebook" icon={FaFacebook} href="#" color="text-blue-500" />
                        <SocialIcon tooltip="Instagram" icon={FaInstagram} href="#" color="text-pink-500" />
                    </div>
                </div>
            </div>
        </footer >
    )
}
