import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import About from "./pages/About";
import AppLayout from "./components/Layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import CountryDetails from "./components/CountryDetails/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails/>,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
