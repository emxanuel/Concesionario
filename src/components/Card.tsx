import React from 'react'
import { vehicle } from '../types/types'
import { client } from '../types/types'
import { useNavigate } from 'react-router-dom'

interface props {
    vehicles?: vehicle[],
    clients?: client[]
}

const Card: React.FC<props> = ({ vehicles, clients }) => {
    const navigate = useNavigate()
    return (
        <div className='select-none cursor-pointer'>
            <div className='w-96 shadow-lg shadow-current h-24 rounded-lg overflow-hidden 
            hover:overflow-auto hover:h-36 hover:duration-300 duration-300 hover:shadow-teal-500'>

                {vehicles ? (
                    <div>
                        <nav className='text-white font-semibold text-center sticky top-0 
                        bg-emerald-700 h-8 hover:bg-teal-700 hover:duration-300 duration-300'
                            onClick={() => navigate('/vehicles')}>Vehicles</nav>
                        {vehicles[0].idAutomovil !== 0 ? (
                            <div className=''>
                                {vehicles.map(vehicle => (
                                    <div key={vehicle.idAutomovil} className='text-white grid grid-cols-3 place-items-center 
                                    justify-around items-center hover:bg-slate-600' onClick={() => {
                                            navigate(`vehicles/${vehicle.idAutomovil}`)
                                        }}>
                                        <p>{vehicle.marca}</p>
                                        <p>{vehicle.modelo}</p>
                                        <p>{vehicle.año}</p>
                                    </div>
                                ))}
                                <div className='text-white sticky bottom-0 h-3 w-full bg-black 
                                -mb-7 opacity-30 blur-sm' />
                            </div>
                        ) : (
                            <div>

                            </div>
                        )}
                    </div>
                ) : clients ? (
                    <div>
                        <nav className='text-white font-semibold text-center sticky top-0 
                        bg-emerald-700 h-8 hover:bg-teal-700 hover:duration-300 duration-300'
                            onClick={() => navigate('/clients')}>Clients</nav>
                        {clients[0].idCliente !== 0 ? (
                            <div>
                                {clients.map(client => (
                                    <div key={client.idCliente} className='text-white grid grid-cols-3 place-items-center 
                                    justify-around items-center hover:bg-slate-600' onClick={() => {
                                            navigate(`clients/${client.idCliente}`)
                                        }}>
                                        <p>{client.documento}</p>
                                        <p>{client.nombre}</p>
                                        <p>{client.apellido}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>

                            </div>
                        )}
                    </div>
                ) : (
                    <div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Card