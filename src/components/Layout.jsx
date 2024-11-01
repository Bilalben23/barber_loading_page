import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import WhatsappIcon from './WhatsappIcon'

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <WhatsappIcon />
        </>
    )
}
