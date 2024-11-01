import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

export default function WhatsappIcon() {
    return (
        <div>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20how%20are%20you%3F`} target='_blank' className="btn btn-circle btn-success">
                <FaWhatsapp size={35} />
            </a>
        </div >
    )
}
