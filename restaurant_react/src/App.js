import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home/Home';
import Inscription from './Identification/Inscription';
import Connexion from './Identification/Connexion';
import PasswordResetLink from './Identification/PasswordResetLink';
import NewPassword from './Identification/NewPassword';
import Error404 from "./Components/Error404/error404";
import CreationRestaurant from "./Pages/CreationRestaurant";
import Produits from "./Pages/Produits";
import Cartes from "./Pages/Cartes";
import Qrcode from "./Components/Qrcode/Qrcode";
import Restaurants from "./Pages/MesRestaurants";
import "./Styles/Home.css";
import Carte from "./Pages/Carte";
import Admin from "./Components/Admin/Admin";
import DetailsRestaurant from "./Pages/DetailsRestaurant";
import EditRestaurant from "./Pages/EditRestaurant";
import Profil from "./Pages/Profil";
import Formules from "./Pages/Formules";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    error: <Error404 />,
  },
  {
    path: '/creation/restaurant',
    element: <CreationRestaurant />,
    error: <Error404 />
  },
  {
    path: '/restaurants',
    element: <Restaurants />,
    error: <Error404 />
  },
  {
    path: '/details/restaurant/:id',
    element: <DetailsRestaurant />,
    error: <Error404 />
  },
  {
    path: '/produits',
    element: <Produits />,
    error: <Error404 />,
  },
  {
    path: '/cartes',
    element: <Cartes />,
    error: <Error404 />,
  },
  {
    path: '/carte/:id',
    element: <Carte />,
    error: <Error404 />,
  },
  {
    path: '/inscription',
    element: <Inscription />,
    error: <Error404 />,
  },
  {
    path: '/connexion',
    element: <Connexion />,
    error: <Error404 />,
  },
  {
    path: '/PasswordResetLink',
    element: <PasswordResetLink />,
    error: <Error404 />
  },
  {
    path: '/NewPassword',
    element: <NewPassword />,
    error: <Error404 />,
  },
  {
    path: '/qrcode',
    element: <Qrcode />,
    error: <Error404 />,
  },
  {
    path: '/admin',
    element: <Admin />,
    error: <Error404 />
  },
  {
    path: '/edit/restaurant/:id',
    element: <EditRestaurant />,
    error: <Error404 />
  },
  {
    path: '/profil',
    element: <Profil />,
    error: <Error404 />
  },
  {
    path: '/formules',
    element: <Formules />,
    error: <Error404 />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

