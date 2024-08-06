import { useState, useEffect} from 'react'

const Signin = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")

     // el consumo de endpoints es asíncrono
     const getUsuarios = async () => {
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
        return(response);
    }


    const setUsuario = async () => {
        const url = "http://127.0.0.1:8080/usuarios"
        const request = await fetch(url, {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }),
            body: JSON.stringify({
                "id_usuario": 0,
                "usuario": user,
                "contrasena": password
            })
        })
        //console.log(request)
        const response = await request.json();
        console.log(response);
    }


    useEffect(() => {
        getUsuarios();
    }, [])

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <h2>Sign In</h2>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Registrar Usuario</p>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Usuario"
                                value={user}
                                onChange={e => setUser(e.target.value)} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <a href="/" className="btn btn-primary btn-block"
                                >Sign In</a>
                            </div>
                            <div className='col-6'>
                                <a href="#" className="btn btn-block btn-danger" onClick={()=>setUsuario()} >
                                    <i className="mr-2"></i> Add User
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin