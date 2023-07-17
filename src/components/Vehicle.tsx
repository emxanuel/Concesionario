import React, { useState, useEffect } from 'react'
import { vehicle } from '../types/vehicle'
import { vehicleDefault } from '../modules/vehicle'
import { useParams } from 'react-router-dom'
import { getVehicleByID } from '../functions/vehicles.functions'

const Vehicle = () => {
    const [vehicle, setVehicle] = useState<vehicle>(vehicleDefault);
    const params = useParams();

    useEffect(() => {
        getVehicleByID(params.id, setVehicle);
    }, [params])
    
    return (
        <div>
            <h1 className='text-center text-white font-semibold text-5xl'
            >{vehicle.marca} {vehicle.modelo}</h1>
            <h2 className='text-center text-white font-semibold text-2xl'>{vehicle.año}</h2>
        </div>
    )
}

export default Vehicle