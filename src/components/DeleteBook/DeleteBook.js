import { useNavigate } from "react-router";
import "./DeleteBookButton.css";

const DeleteBookButton = () => {
  const navigate = useNavigate();


const redireccionar = () => {
  navigate('/booklist');
}
  return (
    <div className="delete-book">
        <button onClick={redireccionar}>Delete Book</button>
    </div>
  );

  }

export default DeleteBookButton;