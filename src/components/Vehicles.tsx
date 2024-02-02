import { useState, useEffect } from 'react'
import { vehicleDefault } from '../modules/vehicle'
import { vehicle } from '../types/types'
import { getVehicles } from '../functions/vehicles.functions'
import EditModal from './modals/EditModal'
import { toggleShowElement } from '../modules/elements'

const Vehicles = () => {
    const [vehicles, setVehicles] = useState<vehicle[]>([vehicleDefault])
    const [show, setShow] = useState(false)
    const [vehicle, setVehicle] = useState(vehicleDefault)

    const vehiclesProps = Object.keys(vehicles[0])

    useEffect(() => {
        getVehicles(setVehicles)
    }, [])

    return (
        <div className='w-full flex flex-col items-center'>
            <h1 className='text-white text-5xl pb-8'>Vehiculos</h1>
            <table className='text-white text-center border'>
                <thead>
                    <tr>
                        {vehiclesProps.map((prop) => (
                            <th key={prop} className='px-4 border'>{prop.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()}</th>
                        ))}
                        <th className='p-2 border-b' colSpan={3}>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle) => (
                        <tr key={vehicle.idAutomovil}>
                            {vehiclesProps.map((prop) => (
                                <td key={prop} className='border-x'>{vehicle[prop as keyof typeof vehicle]}</td>
                            ))}
                            <td className=''><button onClick={() => {
                                const element = document.getElementById('editModal') as HTMLElement
                                toggleShowElement(element)
                                setVehicle(vehicle);
                            }}><i className='fa-solid fa-pen' /></button></td>
                            <td className=''><i className='fa-solid fa-x' /></td>
                            <td className=''><a href={`/vehicles/${vehicle.idAutomovil}`}><i className='fa-solid fa-eye' /></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <EditModal vehicle={vehicle} show={show} />
        </div>
    )
}

export default Vehicles