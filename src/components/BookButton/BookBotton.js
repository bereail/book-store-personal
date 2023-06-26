import React from "react";
import { Button } from "react-bootstrap";
import { addDoc, collection, getFirestore } from "firebase/firestore";

/*const ReservedButton = ({ onReserved }) => {
    const handleReserved = () => {
      // Lógica para reservar el libro
      onReserved(); // Llamar a la función onReserved si es necesario
    };
  
    return (
      <Button onClick={handleReserved}>
        Reserved
      </Button>
    );
  };
  
  const EditButton = ({ onEdit }) => {
    const handleEdit = () => {
      // Lógica para editar el libro
      onEdit(); // Llamar a la función onEdit si es necesario
    };
  
    return (
      <Button onClick={handleEdit}>
        Edit
      </Button>
    );

      const DeleteButton = ({ onDelete }) => {
    const handleDelete = () => {
      // Lógica para eliminar el libro
      onDelete(); // Llamar a la función onDelete si es necesario
        return (
      <Button onClick={handleDelete}>
        Delete
      </Button>
    );
  };
    };
  
  };
  
        <ReservedButton onReserved={onReserved} />
        <EditButton onEdit={onEdit} />
        <DeleteButton onDelete={onDelete} />

  
        const AddButton = ({ onAdd }) => {
            const handleAdd = async () => {
              try {
                // Lógica para agregar un libro
                const firestore = getFirestore();
                const booksCollection = collection(firestore, 'books');
          
                // Aquí puedes construir el objeto con los datos del libro a agregar
                const newBook = {
                  title: "Nuevo libro",
                  author: "Autor",
                  // Agrega más propiedades según necesites
                };
          
                // Agregar el nuevo libro a la colección "books"
                await addDoc(booksCollection, newBook);
          
                // Llamar a la función onAdd para notificar al componente padre sobre la acción de agregar libro
                onAdd(); // Llamar a la función onAdd si es necesario
              } catch (error) {
                console.log('Error adding book:', error);
              }
            };
          
            return (
              <Button onClick={handleAdd}>
                Add
              </Button>
            );
          };
            */

const BookButton = () => {
    return (
        <div>
        <Button>Reserved</Button>
        <Button>Edit</Button>
        <Button>Delete</Button>
        </div>
    )
}
export default BookButton;