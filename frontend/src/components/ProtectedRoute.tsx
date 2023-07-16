import { useContext } from "react";
import { Store } from "../Store";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const {
    state: { user },
  } = useContext(Store);

  if (user) {
    return <Outlet />
  } else {
    return <Navigate to="/entrar" />
  }
}
