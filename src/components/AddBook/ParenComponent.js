import React, { useState } from "react";
import AddBook from "./AddBook";

const ParentComponent = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div>
      {/* Otros componentes */}
      <AddBook onAddBook={handleAddBook} />
    </div>
  );
};

export default ParentComponent;
