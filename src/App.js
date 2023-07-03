import { useContext } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./App.css";

import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboar/Dashboar";
import Protected from "./components/routes/Protected";
import NotFound from "./components/routes/NotFound";
import { ThemeContext } from "./components/services/theme/theme.context";
import Spinner from "./components/ui/Spinner/Spinner";
import { APIContext } from "./components/services/api/api.context";
import Singin from "./components/Singup/Singup";
import Registered from "./components/routes/Registered";
//import BookItem from "./components/BookItem/BookItems";
import FireBase from "./firebase/FireBase";
import { useAuth } from "./components/services/authentication/authentication.context";

import AddAdminForm from "./components/AddAdmin/AddAdminForm/AddAdminForm";
import BookList from "./components/BookList/BookList";
import Footer from "./components/Footer/Footer";
import ReportProblem from "./components/Footer/ReportProblem/ReportProblem";

const App = () => {
  const { theme } = useContext(ThemeContext);
  //const { isLoading } = useContext(APIContext);
  const { isLoading } = useAuth();

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
    {
      path: "/reportProblem",
      element: <ReportProblem />
    },
    {
      path: "/fireBase",
      element: <FireBase />
    },
    {
      path: "/bookList",
      element: <BookList />
    },
    {
      path: "/addAdmin",
      element: <AddAdminForm />
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
