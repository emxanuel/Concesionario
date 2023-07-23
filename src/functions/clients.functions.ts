import React from "react";
import { server } from "../backend"
import { client } from "../types/types";

const getClients = async (
    setClients: React.Dispatch<React.SetStateAction<client[]>>
) => {
    await fetch(`${server}/api/clients/list`)
        .then(async (response) => setClients(await response.json()))
        .catch(e => console.log(e));
}

export { getClients }