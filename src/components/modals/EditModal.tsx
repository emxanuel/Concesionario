import React from 'react'
import { client, vehicle } from '../../types/types'

interface Props {
    vehicle?: vehicle,
    client?: client,
    show?: boolean
}

const EditModal: React.FC<Props> = ({ vehicle, client, show }) => {
    let vehicleProps: string[];
    let clientProps: string[];

    if (vehicle !== undefined) {
        vehicleProps = Object.keys(vehicle)
    }

    if (client !== undefined) {
        clientProps = Object.keys(client)
    }

    return (
        <div className={`w-full -mt-16 h-full bg-black bg-opacity-70 absolute left-0 justify-center items-center ${show? 'flex' : 'hidden'}`}>
            <div><button onClick={() => show = !show}><i className='fa-solid fa-x absolute top-0 right-0 p-10 text-white text-3xl' /></button></div>
            <div className='bg-neutral-800 w-max'>
                {vehicle ? (
                    <div className='p-10 '>
                        {vehicleProps.map((prop) => (
                            <div className='flex w-96 justify-around items-center h-full text-white' key={prop}>
                                <label className='mb-2 w-40'>{prop.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()}</label>
                                <input type="text" className='bg-neutral-900' defaultValue={vehicle[prop as keyof typeof vehicle]}/>
                            </div>
                            
                        ))}
                    </div>
                ) : <div></div>}
            </div>
        </div>
    )
}

export default EditModal