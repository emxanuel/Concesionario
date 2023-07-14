import React from 'react'

const Register = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12'>
            <form action="" className='p-9 shadow-md shadow-current rounded-2xl hover:shadow-neutral-800 hover:duration-500'>
                <div className='flex flex-col w-72'>
                    <h1 className='text-white text-3xl font-bold mb-6 text-center '
                    >Register</h1>
                    <label htmlFor="" className='text-white font-semibold mb-1'>ID</label>
                    <input type="text" placeholder='ID document number' className='mb-5 rounded-md p-1' />
                    <label htmlFor="" className='text-white font-semibold mb-1'>Username</label>
                    <input type="text" placeholder='Employee username' className='mb-5 rounded-md p-1' />
                    <label htmlFor="" className='text-white font-semibold mb-1'>Password</label>
                    <input type="password" placeholder='Employee password' className='mb-5 rounded-md p-1' />
                    <label htmlFor="" className='text-white font-semibold mb-1'>Confirm Password</label>
                    <input type="text"placeholder='Password again'  className=' rounded-md p-1' />
                    <button type="submit" className='text-white border border-neutral-800 h-9    hover:border-teal-400
                    hover:bg-emerald-700 hover:duration-300 mt-5 rounded-md'>
                    Register</button>
                </div>
                <p className='text-white mt-4'>Do you already have an account? <a href="/login" className='text-emerald-700 
                hover:text-teal-400 hover:duration-300'>Log in</a></p>
            </form>
        </div>
    )
}

export default Register