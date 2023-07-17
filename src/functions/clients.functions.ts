import React from "react";
import { server } from "../backend"
import { client } from "../types/client";

const getClients = async (
    setClients: React.Dispatch<React.SetStateAction<client[]>>
) => {
    const request = await fetch(`${server}/api/clients/list`);

    if (request.ok){
        setClients(await request.json())
    }
    else{
        console.log(request)
    }
}

export { getClients }