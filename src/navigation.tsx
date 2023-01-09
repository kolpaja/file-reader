import {
  createBrowserRouter,
} from "react-router-dom";

import ErrorPage from './pages/ErrorPage';
import { Home } from "./pages/Home";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);