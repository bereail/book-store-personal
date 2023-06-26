import { useContext } from "react";
import {
  Link,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import { Button, ToastContainer } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboar/Dashboar";
import Protected from "./components/routes/Protected";
import NotFound from "./components/routes/NotFound";
import { ThemeContext } from "./components/services/theme/theme.context";
import Spinner from "./components/ui/Spinner/Spinner";
import { APIContext } from "./components/services/api/api.context";
import Singin from "./components/Singup/Singup";
import Registered from "./components/routes/Registered";
import BookItem from "./components/BookItem/BookItems";
import BooksCRUD from "./components/BookItem/BookItems";
import BookButton from "./components/BookButton/Links";
import BookForm from "./components/BookForm/BookForm";
import Links from "./components/BookButton/Links";
import AddBook from "./components/AddBook/AddBook";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(APIContext);

  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="login" /> },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/singin",
      element: <Singin />, 
    },
    {
      path: "/registered",
      element: <Registered />, 
    },
    {
        path: "/books",
        element: <BooksCRUD />
    },
    {
      path: "/bookForm",
      element: <BookForm />
    },
    {
      path: "/buttons",
      element: <BookButton />
    },
    {
      path: "/links",
      element: <Links />
    },
    {
      path: "/addBook",
      element: <AddBook />
    },
    {
      path: "/home",
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div className={`${theme === "dark" && "dark-theme"}`}>
      {isLoading && <Spinner />}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;