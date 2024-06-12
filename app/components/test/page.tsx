import React from 'react'
import Test from '@/ui/test';
import Temp from '@/ui/temp';
const page = () => {
    return (
        <>
            <h1 className=' w-full text-3xl py-10 text-center'>JSX</h1>
            <Test />
            <h1 className=' w-full text-3xl py-10 text-center'>TSX</h1>
            <Temp />
        </>
    )
}

export default page