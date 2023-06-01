import { useEffect, useState } from "react";
import { getPokemonById } from "../../../services/getPokemonById";
import "./PokemonCard.css";

const statsTarget = ["hp", "attack", "defense", "speed"];

const PokemonCard = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);
  
  const stats = pokemon?.stats.filter((stat) =>
    statsTarget.includes(stat.name.toLowerCase()));

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);
      setPokemon(pokemonData);
    };

    loadPokemon();
  }, [pokemonId]);

  return (
    <article className="pokemon-card">
      {!pokemon && <p>Loading...</p>}

      {pokemon && (
        <>
          <div className="pokemon-card_left">
            <h2 className="pokemon-card_title">{pokemon.name}</h2>

            <section>
              <h4 className="pokemon-card_subtitle">Tipo</h4>
              <ul className="pokemon-card_list">
                {pokemon.types.map((type) => (
                  <li key={type} className="pokemon-card_item">
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3></h3>
              <ul className="pokemon-card_list">
                {stats.map((stat) => (
                  <li key={stat.name} className="pokemon-card_item">
                    <span><em>{stat.name.toUpperCase()}:</em>
                    {stat.value}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          <div className="pokemon-card_right">
            <div className="pokemon-card_img">
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default PokemonCard;