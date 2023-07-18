import React, { useState, useEffect } from 'react'
import { useUserContext } from './UserContext'
import Card from './Card';
import { getVehicles } from '../functions/vehicles.functions';
import { getClients } from '../functions/clients.functions';
import { vehicle, client } from '../types/types';
import { vehicleDefault } from '../modules/vehicle';
import { clientDefault } from '../modules/client';

const Home = () => {
    const user = useUserContext();
    const [vehicles, setVehicles] = useState<vehicle[]>([vehicleDefault])

    const [clients, setClients] = useState<client[]>([clientDefault])

    useEffect(() => {
        getVehicles(setVehicles);
        getClients(setClients);
    }, [])

    return (
        <div className='flex flex-row justify-center items-center h-screen -mt-16'>
            {user.idEmpleado !== 0 ? (
                <div className='flex flex-row justify-around gap-20'>
                    <div className='w-96'>
                        
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                        <Card vehicles={vehicles}/>
                        <Card clients={clients} />
                    </div>
                </div>
            ) : (
                <div className='flex bg-neutral-950 flex-col justify-center items-center h-screen -mt-16'>
                    <a href="/login" className='text-white'>Login</a>
                    <a href="/register" className='text-white'>Register</a>
                </div>
            )}

        </div>
    )
}

export default Home