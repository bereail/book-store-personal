import React, { useEffect, useState } from "react";
import BookForm from "../BookForm/BookForm";
import { db } from "../../firebase/config";
import { Toast } from "react-bootstrap";
import { toast } from "react-toastify";
import BookItem from "../BookItem/BookItems";

const Links = () => {
  const [books, setBooks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    const unsubscribe = db.collection("books").onSnapshot((snapshot) => {
      const booksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooks(booksData);
    });

    return () => unsubscribe(); // Devolver la función de limpieza para cancelar la suscripción al desmontar el componente
  }, []);

  const addBook = async (bookObject) => {
    try {
      await db.collection("books").add(bookObject);
      toast("New book added", {
        type: "success",
        autoClose: 2000,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <BookForm addBook={addBook} />

      {/* Renderizar la lista de libros */}
      {books.map((book) => (
        <BookItem key={book.id} data={book} />
      ))}
    </div>
  );
};

export default Links;
