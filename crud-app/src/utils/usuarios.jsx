// el consumo de endpoints es asíncrono
export const getUsuarios = async () => {
    const url = "http://127.0.0.1:8080/usuarios"
    const request = await fetch(url, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        })
    })
    //console.log(request)
    const response = await request.json();
    return (response);
}


export const setUsuario = async (user, pass) => {
    const url = "http://127.0.0.1:8080/usuarios"
    const request = await fetch(url, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
        body: JSON.stringify({
            "usuario": user,
            "contrasena": pass
        })
    })
    const response = await request.json();
    return (response);
}

export const getUsuarioByUserPass = async (user, pass) => {
    const url = "http://127.0.0.1:8080/usuarioByUC"
    const request = await fetch(url, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
        body: JSON.stringify({
            "usuario": user,
            "contrasena": pass
        })
    })
    const response = await request.json();
    return (response);
}

export const deleteUsuario = async (id) => {
    const url = "http://127.0.0.1:8080/usuarios"
    const request = await fetch(url, {
        method: "DELETE",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
        body: JSON.stringify({
            "id_usuario": id,
            "usuario": "",
            "contrasena": ""
        })
    })
    const response = await request.json();
    return (response);
}

export const getUsuarioByID = async (id) => {
    const url = "http://127.0.0.1:8080/usuarios/" + id;
    const request = await fetch(url, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        })
    })
    const response = await request.json();
    return (response);
}

export const updateUsuario = async (id, usuario, passw) => {
    const url = "http://127.0.0.1:8080/usuarios"
    const request = await fetch(url, {
        method: "PUT",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
        body: JSON.stringify({
            "id_usuario": id,
            "usuario": usuario,
            "contrasena": passw
        })
    })
    const response = await request.json();
    return (response);
}

export const getMensaje = (usuario) => {
    return "Saludos " + usuario;
}