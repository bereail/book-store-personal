import { useContext } from "react";
import "./Card.css";
import { ThemeContext } from "../services/theme/theme.context";
import BookButton from "../BookButton/BookBotton";

const BookCard = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`book-item-container ${
        theme === "dark" && "book-item-container-dark"
      }`}
    >
      {children}
      <div>
        <BookButton />
      </div>
    </div>
  );
};

export default BookCard;