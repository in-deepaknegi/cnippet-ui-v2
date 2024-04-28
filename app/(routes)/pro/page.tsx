import Navbar from '@/components/Navbar'
import Hero from '@/components/routes/home/Pricing'
import React from 'react'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    )
}

export default page