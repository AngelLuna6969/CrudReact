import { useState } from "react"
import { crudContext } from "./crudContext"

const ContextProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({
        "id_usuario": 0,
        "usuario": "",
        "contrasena": ""
      })
    return (
        <crudContext.Provider
        value={{
            usuario,
            setUsuario,
        }}
        >
            { children }
        </crudContext.Provider>
    )
}

export default ContextProvider