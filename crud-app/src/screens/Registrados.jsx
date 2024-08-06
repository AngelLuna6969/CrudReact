import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Titlebreadcrumbs from '../components/Titlebreadcrumbs';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import { deleteUsuario, getUsuarioByID, updateUsuario } from '../utils/usuarios';

//import { Link } from 'react-router-dom';

const Registrados = () => {

    const handledelete = (id) => {
        Swal.fire({
            title: "¿Desea eliminar este usuario?",
            icon: "warning",
            showDenyButton: true,
            confirmButtonText: "Sí",
            denyButtonText: "No"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const respuesta = await deleteUsuario(id);
                if (respuesta.status == "ok") {
                    Swal.fire({
                        title: respuesta.msg,
                        icon: "success"
                    })
                    getUsuarios();
                }
                else {
                    Swal.fire({
                        title: respuesta.msg,
                        icon: "warning"
                    })
                }
            }
            else if (result.isDenied) {
                Swal.fire({
                    title: "Acción Cancelada",
                    icon: "info"
                })
            }
        })
    }
    const [usuario, setUsuario] = useState("");
    const [passw, setPassw] = useState("");
    const [ide, setIde] = useState("");

    const handleUpdate = async (id) => {
        const respuesta = await getUsuarioByID(id);
        if (respuesta.status == "ok") {
            setIde(respuesta.data.id_usuario);
            setUsuario(respuesta.data.usuario);
            setPassw(respuesta.data.contrasena);
        }
        else {
            Swal.fire({
                title: respuesta.msg,
                icon: "error"
            })
        }
    }

    const handleConfirmUpdate=async()=>{
        const respuesta=await updateUsuario(ide, usuario, passw);
        if (respuesta.status == "ok") {
            Swal.fire({
                title: respuesta.msg,
                icon: "success"
            });
            getUsuarios();
        }
        else {
            Swal.fire({
                title: respuesta.msg,
                icon: "warning"
            })
        }
    }

    const [columnas, setColumnas] = useState([
        {
            name: 'Usuario',
            selector: row => row.user,
        },
        {
            name: 'Contraseña',
            selector: row => row.pass,
        },
        {
            button: true,
            cell: (row) => {
                return (
                    <>
                        <div className="btn-group">
                            <button className="btn btn-warning"
                                data-toggle="modal" data-target="#modal-update"
                                title='Editar Usuario'
                                onClick={() => handleUpdate(row.id)}
                            >
                                <i className='fas fa-user-edit'></i>
                            </button>
                            <button className="btn btn-danger"
                                title='Eliminar Usuario'
                                onClick={() => handledelete(row.id)}>
                                <i className='fas fa-trash'></i>
                            </button>
                        </div>
                    </>
                )
            }
        }
    ])

    const [datos, setDatos] = useState([
        {
            id: 1,
            user: 'Beetlejuice',
            pass: '1988',
        },
        {
            id: 2,
            user: 'Ghostbusters',
            pass: '1984',
        },
    ])

    const getUsuarios = async () => {
        const url = "http://127.0.0.1:8080/usuarios"
        const request = await fetch(url, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            })
        })
        const response = await request.json();
        const { data } = response;
        let datos_usuarios = []
        data.map(e => {
            const user = {
                id: e.id_usuario,
                user: e.usuario,
                pass: e.contrasena
            }
            datos_usuarios.push(user)
        })
        setDatos(datos_usuarios)
    }

    useEffect(() => {
        getUsuarios();
    }, [])


    return (
        <div className='layout-top-nav'>
            <Navbar />
            <div className="content-wrapper m-0">
                <Titlebreadcrumbs
                    title='Usuarios Registrados'
                    breadcrumbs={["Usuarios", "Registro"]}
                    subtitle='' />
                <div className="content">
                    <div className="container">
                        <DataTable
                            columns={columnas}
                            data={datos}
                            responsive
                        />
                    </div>
                </div>
            </div>
            <div className="modal fade show" id="modal-update" style={{ display: "none" }} aria-modal="true" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Actualización</h4>
                            <button className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">ID</label>
                                <div className="col-sm-10">
                                    <input type="text" readonly className="form-control-plaintext"
                                        value={ide}
                                    />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Usuario</label>
                                <div className="col-sm-10">
                                    <input type="text" readonly className="form-control-plaintext"
                                        value={usuario}
                                        onChange={(e) => setUsuario(e.target.value)} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="text" readonly className="form-control-plaintext"
                                        value={passw}
                                        onChange={(e) => setPassw(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button className="btn btn-primary"
                            data-dismiss="modal"
                            onClick={()=>handleConfirmUpdate()}>
                                Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Registrados