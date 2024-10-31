import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import BookNow from '../components/BookNow'

export default function Home() {
    return (
        <>
            <Hero />
            <main className='my-20'>
                <AboutUs />
                <BookNow />
            </main>
        </>
    )
}
