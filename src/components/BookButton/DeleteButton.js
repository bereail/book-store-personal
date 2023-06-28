import React from "react";
import { Button } from "react-bootstrap";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const DeleteButton = ({ bookId }) => {
  const handleDelete = async () => {
    // Mostrar una ventana emergente de confirmación antes de eliminar el libro
    const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este libro?");

    if (confirmed) {
      try {
        const bookRef = firebase.firestore().collection("books").doc(bookId);

        // Obtén el título del libro utilizando el ID y verifica si existe
        const bookDoc = await bookRef.get();
        if (bookDoc.exists) {
          await bookRef.delete();
          alert("Libro eliminado exitosamente.");
        } else {
          alert("El libro no existe.");
        }
      } catch (error) {
        alert("Error al eliminar el libro:", error);
      }
    }
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      Eliminar libro
    </Button>
  );
};

export default DeleteButton;