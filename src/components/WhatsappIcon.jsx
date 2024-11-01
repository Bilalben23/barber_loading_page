import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsappIcon() {
    return (
        <div className='fixed z-10 left-2 bottom-2'>
            <a href="https://wa.me/+212664897030?text=Hi,%20how%20are%20you%3F" target='_blank' className="btn btn-circle btn-success">
                <FaWhatsapp size={35} />
            </a>

        </div>
    )
}
