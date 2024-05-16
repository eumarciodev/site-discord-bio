import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Perfil } from "./routes/perfil";
import { Home } from "./routes/home";
import { HelloWorld } from "./routes/HelloWorld.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/perfil",
        element: <Perfil />,
      },
      {
        path: "/helloworld",
        element: <HelloWorld />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
