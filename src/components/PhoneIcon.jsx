import React from 'react'
import { FaPhone } from 'react-icons/fa';

const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER;

export default function PhoneIcon() {
    return (
        <div className='md:hidden'>
            <a href={`tel:${PHONE_NUMBER}`} target="_blank" className='btn btn-circle btn-secondary'>
                <FaPhone size={30} className='rotate-90' />
            </a>
        </div >
    )
}
