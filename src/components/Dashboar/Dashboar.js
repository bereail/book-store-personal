import React, { useContext, useEffect, useState } from "react";
import BooksFilter from "../Filter/BookFilter";
import Books from "../Books/Books";
import { useNavigate } from "react-router";
import { Button, Col, Row } from "react-bootstrap";
import { AuthenticationContext } from "../services/authentication/authentication.context";
import ToggleTheme from "../ui/ToggleTheme";
import { APIContext } from "../services/api/api.context";
import FireBase from "../../firebase/FireBase";
import NewBookButton from "../NewBook/NewBookButton";
import Header from "../Header/Header";
import DeleteBookButton from "../DeleteBook/DeleteBook";
import EditBookButton from "../EditBookButton/EditBookButton";
import ReserveBookButton from "../ReserveBookButton/ReserveBookButton";
import BookList from "../BookList/BookList";
import ReservedView from "../ReserveBookButton/ReservedView";

const Dashboard = () => {
  const { user, handleLogout } = useContext(AuthenticationContext);
  const { toggleLoading } = useContext(APIContext);

  const userName = user.email.split("@")[0];

  const [books, setBooks] = useState([]);
  const [filterYear, setFilterYear] = useState("2023");

  useEffect(() => {
    toggleLoading(true);

    fetch("https://63a44a012a73744b0072f847.mockapi.io/api/books/Books", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((bookData) => {
        const booksMapped = bookData.map((book) => ({
          ...book,
          dateRead: new Date(book.dateRead),
        }));
        setBooks(booksMapped);
        toggleLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toggleLoading(false);
      });
  }, []);

  const navigation = useNavigate();

  const addBookHandler = (book) => {
    const newBooksArray = [book, ...books];
    setBooks(newBooksArray);
    localStorage.setItem("books", JSON.stringify(newBooksArray));
  };

  const filterYearChanged = (year) => {
    setFilterYear(year);
  };

  const onLogoutHandler = () => {
    handleLogout();
    navigation("/login");
  };

  return (
    <>
    <Header />
      <NewBookButton />
      <ReservedView />
      <BookList />
    </>
  );
};

export default Dashboard;