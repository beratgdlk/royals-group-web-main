// import { createRoot } from "react-dom/client";
// import "./css/style.scss";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(<App />);
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  ContactPage,
  AboutPage,
  ErrorPage,
  Root,
  ProductsPage,
} from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/about",
            element: <AboutPage />,
          },
          {
            path: "/contact",
            element: <ContactPage />,
          },
          {
            path: "/product/:categories",
            element: <ProductsPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
