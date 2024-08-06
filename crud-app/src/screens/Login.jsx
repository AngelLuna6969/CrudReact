import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { getUsuarioByUserPass } from '../utils/usuarios';
import Swal from 'sweetalert2';
import { crudContext } from '../components/crudContext';

const Login = () => {
    const {setUsuario} = useContext(crudContext);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const handleAcces = async () => {
        if (user != "" && pass != "") {
            console.log("Usuario: ", user, "Contraseña ", pass);
            const acceso = await getUsuarioByUserPass(user, pass)
            if (acceso.status == "ok") {
                console.log(acceso);
                //setUsuario(acceso.data);
                Swal.fire({
                    title: acceso.msg,
                    icon: "success"
                });
                navigate("/formulario1", {
                    replace: true,
                    state:{
                        logged: true,
                        id:acceso.data.id_usuario,
                        usuario: acceso.data.usuario
                    }
                })
               // window.location.href="/formulario1"
            }
            else {
                Swal.fire({
                    title: acceso.msg,
                    icon: "error",
                    text: "Datos incorrectos",
                    timer: 2000,
                    footer: "Intentalo nuevamente"
                });
            }
        }
        else {
            Swal.fire({
                title: "¡No hay nada!",
                text: "Ingresa usuario y contraseña",
                icon: "warning",
                footer: '<Link to="/adduser">¿Deseas crear una cuenta?</Link>'
            });
        }
    }

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <h2><b>Admin</b>LTE</h2>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Agrega tus datos de acceso</p>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Usuario"
                                value={user}
                                onChange={e => setUser(e.target.value)} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-user"></span>
                                </div>
                            </div>
                        </div>

                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password"
                                value={pass}
                                onChange={e => setPass(e.target.value)} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <button className='btn btn-primary btn-block'
                                    onClick={() => handleAcces()}>Ingresar</button>
                            </div>
                        </div>
                        <hr />
                        <p className="mb-0 text-center">
                            <Link to="/adduser">Crea una cuenta</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login
