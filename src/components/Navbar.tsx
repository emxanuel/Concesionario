import React from 'react'
import { useUserContext } from './UserContext'

const Navbar = () => {
    const user = useUserContext()
    const Logged = () => (
        <div className='flex justify-around h-16 items-center bg-emerald-700'>
            <div className='text-white font-bold text-2xl'>
                <a href='/' className='select-none'>Concesionario</a>
            </div>
            <div className='text-white flex gap-8 font-semibold text-lg'>
                
            </div>
        </div>
    )


    const Unlogged = () => (
        <div className='flex justify-around h-16 items-center bg-emerald-700'>
            <div className='text-white font-bold text-2xl'>
                <a href='/' className='select-none'>Concesionario</a>
            </div>
            <div className='text-white flex gap-8 font-semibold text-lg'>
                <a href="/login" className='hover:text-neutral-800 hover:duration-300'>Login</a>
                <a href="/register" className='hover:text-neutral-800 hover:duration-300'>Register</a>
            </div>
        </div>
    )
    return (
        user.id !== 0? <Logged /> : <Unlogged />
    )
}

export default Navbar