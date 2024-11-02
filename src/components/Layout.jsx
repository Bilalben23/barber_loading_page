import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import BackTopBtn from './BackTopBtn'
import ContactButtons from "../components/ContactButtons"

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ContactButtons />
            <BackTopBtn />
        </>
    )
}
