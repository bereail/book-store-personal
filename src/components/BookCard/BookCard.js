import React from "react";

const BookCard = ({ book }) => {
  const { title, author, pages, description, img } = book;

  return (
    <div>
      <h3>{title}</h3>
      <p>Autor: {author}</p>
      <p>Páginas: {pages}</p>
      <p>Descripción: {description}</p>
      <img src={img} alt="Portada del libro" />
    </div>
  );
};

export default BookCard;