import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import BookNow from '../components/BookNow'
import WorkingDays from '../components/WorkingDays'
import Testimonials from '../components/testiomonials/Testimonials'
import Services from '../components/services/Services'

export default function Home() {
    return (
        <>
            <Hero />
            <main className='my-20'>
                <AboutUs />
                <BookNow />
                <WorkingDays />
                <Testimonials />
                <Services />
            </main>
        </>
    )
}
