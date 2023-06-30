import React, {useState, useEffect} from "react";
import { db } from "../../firebase/config";
import BookCard from "../Card/Card";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        //consultar la coleccion"books" en firebase
        db.collection('books').get()
        .then((snapshot) => {
            //Creat un array con los datos de los libros
            const booksData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            //Actualizar el estado con los componentes del libro
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
            </div>
          ))}
        </div>
      );
    
    };

export default BookList;