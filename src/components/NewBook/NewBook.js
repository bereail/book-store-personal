import { getDoc } from 'firebase/firestore';
import BookItem from "../BookItem/BookItems";
import React, { useState } from "react";
import BookForm from '../BookForm/BookForm';

const NewBook = ({ onBookAdded }) => {
  const [showForm, setShowForm] = useState(false);

  const onBookAddedHandler = (book) => {
    console.log(book);
    console.log("In new Book");
    onBookAdded(book);
  };

  const showBookForm = () => {
    setShowForm(true);
  };

  const hideBookForm = () => {
    setShowForm(false);
  };

  return (
    <div className="new-book">
      {showForm ? (
        <BookForm onHideForm={hideBookForm} onBookAdded={onBookAddedHandler} />
      ) : (
        <button onClick={showBookForm}>Registrar nuevo libro</button>
      )}
    </div>
  );
};

export default NewBook;