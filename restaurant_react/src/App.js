import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home/Home';
import Inscription from './Identification/Inscription';
import Connexion from './Identification/Connexion';
import Error404 from "./Components/Error404/error404";
import Restaurant from "./Pages/Restaurant";
import Produits from "./Pages/Produits";
import Cartes from "./Pages/Cartes";
import './Styles/Home.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    error: <Error404 />
  },

  {
    path: '/restaurant',
    element: <Restaurant />
  },

  {
    path: '/produits',
    element: <Produits />
  },

  {
    path: '/cartes',
    element: <Cartes />
  },

  {
    path: '/inscription',
    element: <Inscription />
  },

  {
    path: '/connexion',
    element: <Connexion />
  }
]);

function App() {
  return <RouterProvider router={router} />

}



export default App;
