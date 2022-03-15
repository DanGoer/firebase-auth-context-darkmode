import { Navigate, useLocation } from "react-router-dom"
import { useAuthContext } from "./AuthContextProvider"

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { userData } = useAuthContext()
  const location = useLocation()

  if (!userData) {
    return <Navigate to="/" state={{ from: location }} />
  }

  return children
}
