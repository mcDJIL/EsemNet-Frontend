import { Navigate, Outlet } from "react-router-dom"
import { sessionToken } from "../Constants/localStorage"

export const GuestSkin = () => {
    if (localStorage.getItem(sessionToken) != null) {
        return <Navigate to={'/dashboard'} />
    }

    return (
        <Outlet />
    )
}