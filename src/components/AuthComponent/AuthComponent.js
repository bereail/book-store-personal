import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";

const AuthComponent = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Obtener el usuario actualmente autenticado (puedes usar Firebase Authentication)
    const currentUser = // Obtén el usuario actualmente autenticado

    // Realizar una consulta a Firebase Firestore para obtener el rol del usuario
    const unsubscribe = db.collection("users").doc(currentUser.uid).onSnapshot((doc) => {
      if (doc.exists) {
        const userData = doc.data();
        const role = userData.role; // Obtén el campo 'role' del documento del usuario
        setUserRole(role);
      }
    });

    return () => {
      unsubscribe(); // Detener la escucha de cambios cuando el componente se desmonte
    };
  }, []);

  // Renderizar componentes según el rol de usuario
  return (
    <div>
      <h1>Auth Component</h1>
      {userRole === "admin" && <AdminComponent />}
      {userRole === "superadmin" && <SuperadminComponent />}
      {userRole !== "admin" && userRole !== "superadmin" && <RegularComponent />}
    </div>
  );
};

export default AuthComponent;