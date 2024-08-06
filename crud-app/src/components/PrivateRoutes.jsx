import { Navigate, useLocation } from "react-router-dom"

const PrivateRoutes = ({ children }) => {
    const { state } = useLocation();

    return state?.logged ? children : <Navigate to="/" />
}

export default PrivateRoutes