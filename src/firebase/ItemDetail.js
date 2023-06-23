import React from "react";

const ItemDetail = ({ bookTitle, bookAuthor, bookDateRead, bookPageCount }) => {
  return (
    <div>
      <h2>{bookTitle}</h2>
      <h3>{bookAuthor}</h3>
      <p>Date Read: {bookDateRead}</p>
      <p>Page Count: {bookPageCount}</p>
    </div>
  );
};

export default ItemDetail;
