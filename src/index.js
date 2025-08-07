import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Hello from "./routes/hello";
import NotFoundPage from "./routes/404-page";

const App = () => {
  const router_page = createBrowserRouter([
    { path: "/", element: <Hello /> },
    { path: "/*", element: <Hello /> }
  ]);

  return <RouterProvider router={router_page} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);