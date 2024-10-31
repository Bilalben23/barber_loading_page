import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'

export default function Home() {
    return (
        <>
            <Hero />
            <main className='mt-14'>
                <AboutUs />
            </main>
        </>
    )
}
