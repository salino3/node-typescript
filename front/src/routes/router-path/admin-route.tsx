import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UsersFunctions } from "@/core";
import jwtDecode from "jwt-decode";
import { SwitchRoutes } from "../interface";

export const AdminRoutes: React.FC = () => {
    
  const { getToken } = UsersFunctions();
  const token = getToken();
  let decodedToken: any;

  if (token) {
    decodedToken = jwtDecode(token);
  };
  
  if (decodedToken?.role !== "admin") {
    return <Navigate to={SwitchRoutes.dashboard} />;
  };

console.log(decodedToken, "www")
//   if (!decodedToken || decodedToken.role !== "admin") {
//     // Si no hay token o el rol no es 'admin', redirige a la página de inicio
//    <Navigate to={SwitchRoutes.dashboard} />;
//     return null; // No olvides retornar algo (o null) después de la redirección
//   }

  if (!token) {
    return <Navigate to={SwitchRoutes.root} />;
  };

  return (
    <>
      <Outlet />
    </>
  );
};
