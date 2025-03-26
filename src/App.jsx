import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/layout/CountryDetails";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/contact/:id",
          element: <CountryDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ],
  { basename: "/atlas-world" }
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
