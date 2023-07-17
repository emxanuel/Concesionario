import React from "react";
import { server } from "../backend"
import { vehicle } from "../components/Vehicl";

const getVehicles = async (
    setVehicles: React.Dispatch<React.SetStateAction<vehicle[]>>
) => {
    const request = await fetch(`${server}/api/vehicles/list`);

    if (request.ok){
        setVehicles(await request.json())
    }
    else{
        console.log(request)
    }
}

const getVehicleByID = async (id: number,
    setVehicle: React.Dispatch<React.SetStateAction<vehicle>>) => {
    const request = await fetch(`${server}/api/vehicles/read/${id}`)

    if(request.ok){
        setVehicle(await request.json())
    }
    else{
        console.log('client not found')
    }
}

export { getVehicles, getVehicleByID }