import React, { createContext, useState, useContext } from "react";

interface Props {
    children: JSX.Element
}

export type UserData = {
    id: number,
    first_name: string,
    last_name: string,
    idDocument: string,
    password: string,
    birthdate: string,
    hireDate: string,
    department: number,
    salary: number
};

const userContext = createContext<UserData>({
    id: 0,
    first_name: "",
    last_name: "",
    password: "",
    birthdate: "",
    idDocument: '',
    hireDate: '',
    department: 0,
    salary: 0
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