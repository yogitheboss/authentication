import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Singup from "./pages/Singup";
import Login from "./pages/Login";
import MainLayout from "./layouts/main";
import HelpLayout from "./layouts/help";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Homepage />} />,
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<div>FAQ</div>} />
        <Route path="contact" element={<div>Contact</div>} />
      </Route>
      <Route path="about" element={<About />} />,
      <Route path="login" element={<Login />} />,
      <Route path="signup" element={<Singup />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
