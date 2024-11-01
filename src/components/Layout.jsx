import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import WhatsappIcon from './WhatsappIcon'
import PhoneIcon from './PhoneIcon'

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <div className='fixed flex flex-col bottom-2 left-2 gap-y-2'>
                <WhatsappIcon />
                <PhoneIcon />
            </div>

        </>
    )
}
