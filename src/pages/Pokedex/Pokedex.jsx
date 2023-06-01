import { useContext } from "react";
import { UserNameContext } from "../../context/UserNameContext";
import { useLoaderData } from "react-router-dom";
import PokemonList from "../../components/pokedex/PokemonList/PokemonList";
import FiltersForm from "../../components/pokedex/FiltersForm/FiltersForm";
import "./Pokedex.css";

const Pokedex = () => {
  const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();
  const { userName } = useContext(UserNameContext);

  return (
    <section>
      <p className="pokedex_message">
        <em className="pokedex_message_username">
        Bienvenido {userName}</em>,
        aqui podras encontar tu pokemon favorito
      </p>

      <FiltersForm nameInitial={pokemonName} typeInitial={pokemonTypeId}/>

      {!pokemons.length ? (
        <p>No hay pokemons</p>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </section>
  );
};

export default Pokedex;