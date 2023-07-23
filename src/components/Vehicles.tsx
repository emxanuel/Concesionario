import { useState, useEffect } from 'react'
import { vehicleDefault } from '../modules/vehicle'
import { vehicle } from '../types/types'
import { getVehicles } from '../functions/vehicles.functions'

const Vehicles = () => {
    const [vehicles, setVehicles] = useState<vehicle[]>([vehicleDefault])

    const vehiclesProps = Object.keys(vehicles[0])
    console.log(vehiclesProps)

    useEffect(() => {
        getVehicles(setVehicles)
    }, [])

    return (
        <div className='w-full flex flex-col items-center h-full'>
            <h1 className='text-white text-5xl pb-8'>Vehiculos</h1>
            <table className='text-white text-center border'>
                <tr>
                    {vehiclesProps.map((prop) => (
                        <th className='px-4 border'>{prop.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()}</th>
                    ))}
                    <th className='p-2 border-b' colSpan={3}>Acciones</th>
                </tr>
                {vehicles.map((vehicle) => (
                    <tr>
                        {vehiclesProps.map((prop) => (
                            <td className='border-x'>{vehicle[prop as keyof typeof vehicle]}</td>
                        ))}
                        <td className=''><i className='fa-solid fa-pen' /></td>
                        <td className=''><i className='fa-solid fa-x' /></td>
                        <td className=''><i className='fa-solid fa-eye' /></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Vehicles