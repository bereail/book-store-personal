import React, { useState } from "react";
import NewBook from "../NewBook/NewBook";
//import { useNavigate } from "react-router";

//import { APIContext } from "../services/api/api.context";
import FireBase from "../../firebase/FireBase";
import AddAdminButton from "../AddAdmin/AddAdminButton/AddAdminButton";
import BookList from "../BookList/BookList";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Dashboard = () => {
  const [books, setBooks] = useState([]);



  const addBookHandler = (book) => {
    const newBooksArray = [book, ...books];
    setBooks(newBooksArray);
    localStorage.setItem("books", JSON.stringify(newBooksArray));
  };
  

  return (
     <>
     <Navbar />  
      <AddAdminButton/>
      <NewBook onBookAdded={addBookHandler} />
      <BookList />
      <FireBase />
      <Footer />
    </>
  );
};

export default Dashboard;