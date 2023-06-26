import React from "react";
import { Button } from "react-bootstrap";
import BookCard from "../Card/Card";


const BookItem = ({ data }) => {
  if (!data) {
    return null; // Retorna null o muestra un indicador de carga mientras los datos se están obteniendo
  }

  const { Title, Author, Pages, Description, Img } = data;


  return (
    <BookCard>
    <div>
      <h1>{Title}</h1>
      <h1>{Author}</h1>
      <h3>{Pages}</h3>
      <p>{Description}</p>
      <img className="image" src={Img}  alt="descripcion img"/>
    </div>
    <Button>
         Reserved
        </Button>
    </BookCard>
  );
};

export default BookItem;