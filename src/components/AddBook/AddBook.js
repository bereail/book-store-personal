import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { db } from "../../firebase/config";
import "./AddBook.css";
import ParentComponent from "./ParenComponent";

const AddBook = (props) => {
  // Definición del estado inicial para los valores del formulario
  const initialStateValues = {
    title: "",
    author: "",
    description: "",
    pages: "",
    img: "",
    formValid: "",
  };

  // Uso del estado para almacenar los valores de los campos del formulario
  const [values, setValues] = useState(initialStateValues);

  // Manejador de cambio de entrada para actualizar los valores del estado
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar acciones con los valores del formulario
    console.log(values);

    setValues(initialStateValues); // Reiniciar los valores del formulario
    props.onAddBook(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={values.author}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={values.description}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div>
        <label>Pages:</label>
        <input
          type="text"
          name="pages"
          value={values.pages}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="img"
          value={values.img}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary btn-block" type="submit">
        {props.currentId === "" ? "Save" : "Update"}
      </button>
    </form>
  );
};

export default AddBook;



/*
const AddBook = ({ onBookAdded, onHideForm }) => {
//Estado local del componente
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [page, setPage] = useState("");
  const [img, setImg] = useState("");
  const [formValid, setFormValid] = useState(false);

  //efecto que se ejecutra cuando los valos del book cambian
  useEffect(() => {
    // Configura un temporizador para verificar la validez del formulario después de 500ms
    const timer = setTimeout(() => {
      console.log("Check form");
      setFormValid(title && author && dateRead && pageCount);
    }, 500);

    // Función de limpieza que se ejecuta cuando los valores del book cambiarn
    return () => {
      console.log("Cleanup");
      clearTimeout(timer);// Limpia el temporizador para evitar fugas de memoria
    };
  }, [title, author, dateRead, pageCount]);

  //manejadores de cambio de los campos de entrada
  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeAuthorHandler = (event) => {
    setAuthor(event.target.value);
  };

  const changeDateReadHandler = (event) => {
    setDateRead(event.target.value);
  };

  const changePageCountHandler = (event) => {
    setPageCount(event.target.value);
  };

  //manejador para agregar un nuevo libro
  const addBookHandler = (event) => {
    event.preventDefault();
    const newBook = {
      id: Math.random(),
      title,
      author,
      dateRead: new Date(dateRead),
      pageCount,
    };
    onBookAdded(newBook); // Llama a la función onBookAdded pasándole el nuevo libro como argumento
  };

  const hideFormHandler = (event) => {
    event.preventDefault();
    onHideForm();
  };

   // Renderizado del componente
  return (
    <div className="div-container">
      <h1>Add Book</h1>
      <form>
        <div className="div-add">
          <div className="new-book-controls">
            <div className="new-book-control">
              <label>Title: </label>
              <input
                onChange={changeTitleHandler}
                type="text"
                className="input-control"
              />
            </div>
            <div className="new-book-control">
              <label>Author: </label>
              <input
                onChange={changeAuthorHandler}
                type="text"
                className="input-control"
              />
            </div>
            <div className="new-book-control">
              <label>Pages: </label>
              <input
                onChange={changePageCountHandler}
                type="number"
                className="input-control"
                min="1"
                step="1"
              />
            </div>
            <div className="new-book-control">
              <label>Date: </label>
              <input
                onChange={changeDateReadHandler}
                type="date"
                className="input-control"
                min="2019-01-01"
                max="2023-12-31"
              />
            </div>
          </div>
          <div className="new-book-actions">
            <button onClick={hideFormHandler}>Cancel</button>
            <Button disabled={!formValid} onClick={addBookHandler}>
              Add Book
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
*/
