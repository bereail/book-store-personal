import React from "react";
import "./BookItems.css";
import BookCard from "../Card/Card";


const BookItem = ({ data }) => {
  if (!data) {
    return null; // Retorna null o muestra un indicador de carga mientras los datos se están obteniendo
  }

  const { Author, Pages, Title, Img } = data;


  return (
    <BookCard>
    <div>
      <h1>{Author}</h1>
      <h3>{Pages}</h3>
      <h1>{Title}</h1>
      <img className="image" src={Img}  alt="descripcion img"/>
    </div>
    </BookCard>
  );
};

export default BookItem;