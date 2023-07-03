import React from "react";
import Header from "../Header/Header";
import BookList from "../BookList/BookList";
import NewBookButton from "../NewBook/NewBookButton"
import AddAdminButton from "../AddAdmin/AddAdminButton/AddAdminButton";

const Dashboard = () => {

  return (
    <>
    <Header />
      <NewBookButton />
      <AddAdminButton />
      <BookList />
    </>
  );
};

export default Dashboard;