import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

// components
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import PoetryPage from "./pages/Poetry";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/khurramali" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/poetry" element={<PoetryPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
