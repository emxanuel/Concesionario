import { getVehicles } from "../functions/vehicles.functions"
import { useState, useEffect } from 'react'
import { client, vehicle } from "../types/types"
import { vehicleDefault } from "../modules/vehicle"

interface Props {
    vehicles?: vehicle[],
    clients?: client[]
}

const Rent: React.FC<Props> = ({ vehicles, clients }) => {

    return (
        <div className="rounded-lg shadow-xl shadow-current">
            <h1 className="text-4xl text-white text-center mb-5">Rent</h1>
            <form className="flex flex-col w-full p-5 text-white gap-2 mb-4 ">
                <div className="flex justify-around items-center w-42">
                    <label className="text-left w-full" htmlFor="">Vehicle</label>
                    <select className="bg-neutral-800">
                        {vehicles ? (vehicles[0].idAutomovil !== 0 ?
                            vehicles.map(vehicle => (
                                <option value={vehicle.idAutomovil}>
                                    {`${vehicle.marca} ${vehicle.modelo} ${vehicle.año}`}
                                </option>
                            )) : (<div></div>)) : (<div></div>)}
                    </select>
                </div>
                <div className="flex justify-around items-center w-42">
                    <label className="text-left w-full" htmlFor="">Client</label>
                    <select className="bg-neutral-800">
                        {clients ? (clients[0].idCliente !== 0 ?
                            clients.map((client) => (
                                <option value={client.idCliente}>
                                    {`${client.documento} ${client.nombre} ${client.apellido}`}
                                </option>
                            )) : (<div></div>)) : (<div></div>)}
                    </select>
                </div>
                <div className="flex justify-around items-center w-42">
                    <label className="text-left w-full" htmlFor="">Final Date</label>
                    <input className="bg-neutral-800 text-white" type="date" />
                </div>
                <div className="flex justify-around items-center w-42">
                    <label className="text-left w-full" htmlFor="">Payment Method</label>
                    <select className="bg-neutral-800">
                        <option value="card">Credit/Debit card</option>
                        <option value="money">Money</option>
                    </select>
                </div>
            </form>
            <p className="text-white text-lg border-t-2 p-2">Days: </p>
        </div>
    )
}

export default Rent