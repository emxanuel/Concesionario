import React, { createContext, useState, useContext } from "react";

interface Props {
    children: JSX.Element
}

export type UserData = {
    idEmpleado: number,
    nombre: string,
    apellido: string,
    cedula: string,
    contrasena: string,
    fechaNacimiento: string,
    fechaContratacion: string,
    departamento: number,
    sueldo: number
};

const userContext = createContext<UserData>({
    idEmpleado: 0,
    nombre: "",
    apellido: "",
    contrasena: "",
    fechaNacimiento: "",
    cedula: '',
    fechaContratacion: '',
    departamento: 0,
    sueldo: 0
});

const UserProvider: React.FC<Props> = ({ children }) => {
    const storedUser = localStorage.getItem("User");
    let [user] = storedUser !== null ? useState(JSON.parse(storedUser)) : useState({
        id: 0,
        first_name: "",
        last_name: "",
        password: "",
        birthdate: "",
        idDocument: '',
        hireDate: '',
        department: 0,
        salary: 0
    })

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    );
};

const useUserContext = () => {
    return useContext(userContext);
};

export { userContext, UserProvider, useUserContext };