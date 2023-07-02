import "./EditBook.css"
import "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase/config"; // Importa el objeto db desde el archivo de configuración de Firebase

const EditBook = ({ bookId, onBookUpdated }) => {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedAuthor, setUpdatedAuthor] = useState("");
  const [updatedPages, setUpdatedPages] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");

  const handleUpdateBook = async () => {
    try {
      const updatedBook = {
        title: updatedTitle,
        author: updatedAuthor,
        pages: updatedPages,
        description: updatedDescription,
        img: updatedImage,
      };

      await db.collection("books").doc(bookId).update(updatedBook);
      onBookUpdated(bookId, updatedBook);
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="edit-book">
      <h3>Edit Book</h3>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        value={updatedAuthor}
        onChange={(e) => setUpdatedAuthor(e.target.value)}
      />
      <label htmlFor="pages">Pages:</label>
      <input
        type="text"
        id="pages"
        value={updatedPages}
        onChange={(e) => setUpdatedPages(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={updatedDescription}
        onChange={(e) => setUpdatedDescription(e.target.value)}
      ></textarea>
      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        value={updatedImage}
        onChange={(e) => setUpdatedImage(e.target.value)}
      />
      <button onClick={handleUpdateBook}>Update</button>
    </div>
  );
};

export default EditBook;