import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/atlas-world",
        element: <Home />,
      },
      {
        path: "/atlas-world/about",
        element: <About />,
      },
      {
        path: "/atlas-world/country",
        element: <Country />,
      },
      {
        path: "/atlas-world/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
