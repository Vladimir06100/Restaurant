import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css';
import Contact from './Contact/Contact';
import Error404 from "./Components/Error404/error404";
import LoginPage from "./Pages/login_page";

const router = createBrowserRouter ([

  {
    path: "/",
    element: <Contact />,
    error: <Error404 />
  },

  {
    path: "/login",
    element: <LoginPage />,
    error: <Error404 />
  },
]);

function App() {



  return (
    <div className="App">

      <RouterProvider router={router} />
      
    </div>
  );
}


export default App;
