import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/routes/templates/Hero'
import Projects from '@/components/routes/templates/Projects';
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Projects />
            </main>
            <Footer />
        </>
    )
}

export default page