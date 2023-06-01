import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import ProtectedRoute from "../components/common/ProtectedRoute";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import { pokedexLoader } from "./loaders/pokedexLoader";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail"


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokedex',
    element: (
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Pokedex/>,
        loader: pokedexLoader,
      },
      {
        path: ':pokemonId',
        element: <PokemonDetail />,
      },
    ],
  },
]);