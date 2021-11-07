import { useLocation, Navigate } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "./context"

const RequireAuth = ({children}) => {
  const location = useLocation()
  const { isLogged } = useContext(AuthContext)

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}

export default RequireAuth
