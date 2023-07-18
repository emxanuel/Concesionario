import { useState, useEffect } from 'react'
import { vehicleDefault } from '../modules/vehicle'
import { useParams } from 'react-router-dom'
import { getVehicleByID } from '../functions/vehicles.functions'

const Vehicle = () => {
    const [vehicle, setVehicle] = useState<typeof vehicleDefault>(vehicleDefault);
    const params = useParams();

    useEffect(() => {
        getVehicleByID((params.id? parseInt(params.id) : 0), setVehicle)
        .catch(err => console.log(err));
    }, [params])
    
    return (
        <div className='flex flex-col h-screen justify-center -mt-16'>
            <div>
                <h1 className='text-center text-white font-semibold text-5xl'
                >{vehicle.marca} {vehicle.modelo}</h1>
                <h2 className='text-center text-white font-semibold text-2xl'>{vehicle.año}</h2>
            </div>
            <div className='flex justify-around'>
                <div>
                    <h1 className='font-semibold text-2xl text-white text-center mb-5'>Details</h1>
                    <div className='shadow-md shadow-current h-full w-full p-6 justify-center items-center'>
                        <p className='text-white mb-2 '>Capacity: {vehicle.capacidad}</p>
                        <p className='text-white mb-2 '>Year: {vehicle.año}</p>
                        <p className='text-white mb-2 '>Combustible: {vehicle.tipoCombustible}</p>
                        <p className='text-white mb-2 '>Price/day: {vehicle.tarifa}</p>
                        <p className='text-white mb-2 '>KMs: {vehicle.kilometraje}</p>
                    </div>
                </div>
                <div className='shadow-md shadow-neutral-900 rounded-2xl'>
                    <img src={(`/src/assets/images/${vehicle.año}-${vehicle.marca}-${vehicle.modelo}.webp`).toLowerCase()} alt={`${vehicle.marca} ${vehicle.modelo} ${vehicle.año}`} 
                    className='text-white w-96'/>
                </div>
            </div>
        </div>
    )
}

export default Vehicle