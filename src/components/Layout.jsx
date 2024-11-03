import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import BackTopBtn from './BackTopBtn'
import ContactButtons from "../components/ContactButtons"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ContactButtons />
            <BackTopBtn />
            {/* Other components */}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
                closeOnClick
                draggable
                theme="colored"
                style={{
                    margin: '0 auto',
                    zIndex: 9999
                }}
            />
        </>
    )
}
