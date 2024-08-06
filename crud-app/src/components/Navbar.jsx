import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const logout=()=>{
        navigate("/", {
            replace: true,
            state:{
                logged:false
            }
        });
    }

    const handleClick=(to)=>{
        navigate(to, {
            replace:true,
            state:{
                logged: true,
                id:state.id_usuario,
                usuario: state.usuario
            }
        })
    }

    return (
        <>
            <nav className="main-header navbar navbar-expand-md navbar-light navbar-white m-0">
                <div className="container">
                    <Link to="/formulario1" className="navbar-brand">
                        <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: "0.8", width: "30px", marginRight: "5px" }} />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </Link>

                    <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className='nav-link btn' onClick={()=>handleClick("/formulario1")}>Inicio</button>
                            </li>
                            <li className="nav-item">
                                <button className='nav-link btn' onClick={()=>handleClick("/registrados")}>Resgistrados</button>
                            </li>
                            <li className="nav-item">
                                <button className='nav-link btn' onClick={()=>handleClick("/gestion")}>Gestión</button>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-xs btn-danger'
                                onClick={()=>logout()}>Salir</button>
                            </li>
                        </ul>
                    </div>
                    <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                        <li className="nav-item dropdown">
                            <strong>{state?.usuario}</strong>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar