import { server } from "../backend";

const login = async(user: string, password: string) => {
    let logged = false;

    const request = await fetch(`${server}/api/employees/login`, {
        method: "POST",
        body: JSON.stringify({
            usuario: user,
            contrasena: password
        }),
        headers: {
            "meta-charset": "utf-8",
            "Content-Type": "application/json"
        }
    });

    if (request.ok){
        localStorage.User = JSON.stringify(await request.json())
        logged = true;
    }
    else{
        logged = false
    }

    return logged
}

export { login }