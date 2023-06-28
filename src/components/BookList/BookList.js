import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import BookCard from "../Card/Card";
import { VscBug } from "react-icons/vsc";
import DeleteButton from "../BookButton/DeleteButton";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Consultar la colección "books" en Firebase
    db.collection("books")
      .get()
      .then((snapshot) => {
        // Crear un array con los datos de los libros
        const booksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Actualizar el estado con los componentes del libro
        setBooks(booksData);
      })
      .catch((error) => {
        console.error("Error al obtener los libros", error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de libros:</h2>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Autor: {book.author}</p>
          <p>Páginas: {book.pages}</p>
          <p>Descripción: {book.description}</p>
          <img src={book.img} alt="Portada del libro" />
          <DeleteButton bookId={book.id} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
