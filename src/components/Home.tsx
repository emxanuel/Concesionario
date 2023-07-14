import React from 'react'

const Home = () => {
    return (
        <div className='flex bg-neutral-950 flex-col justify-center items-center'>
            <a href="/login" className='text-white'>Login</a>
            <a href="/register" className='text-white'>Register</a>
        </div>
    )
}

export default Home