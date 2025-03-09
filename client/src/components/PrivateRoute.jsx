import {Outlet, Navigate} from "react-router-dom"
import {useUser} from "../context/UserContext.jsx"

export default function PrivateRoute(){
    const {user} = useUser()
    return user ? <Outlet/> :<Navigate to="/signin"/>
}
