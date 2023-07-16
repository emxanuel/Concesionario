import { useEffect, useState } from 'react'
import { login } from '../functions/users.functions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-center items-center mt-28'>
            <form action="" className='p-7 rounded-2xl shadow-md hover:shadow-neutral-800 hover:duration-500 shadow-current'>
                <div className='p-3 w-72 flex flex-col'>
                    <h1 className='text-white text-3xl font-bold text-center mb-6'>Login</h1>
                    <label htmlFor="" className='text-white font-semibold bold mb-1'>User</label>
                    <input type="text" placeholder='Your username' className='rounded-md mb-6 p-1' onChange={e => setUsername(e.target.value)} />
                    <label htmlFor="" className='text-white font-semibold mb-1'>Password</label>
                    <input type="password" placeholder='Your password' className='rounded-md p-1 ' onChange={e => setPassword(e.target.value)} />
                    <button type='submit' className='text-white border border-neutral-800 h-9    hover:border-teal-400
                    hover:bg-emerald-700 hover:duration-300 mt-5 rounded-md
                    '
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onClick={async (e) => {
                        e.preventDefault()
                        const logged = await login(username, password);
                        if (logged){
                            navigate('/')
                        }
                        else{
                            alert('you are out')
                        }
                    }}>Login</button>
                </div>
                <p className='text-white'>Dont you have an account? <a href="/register" className='text-emerald-700 
                hover:text-teal-400 hover:duration-300'>Create one</a></p>
            </form>
        </div>
    )
}

export default Login