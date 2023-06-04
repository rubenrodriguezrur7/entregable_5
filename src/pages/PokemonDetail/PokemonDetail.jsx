import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonById } from "../../services/getPokemonById";

import "./PokemonDetail.css";

const statsTarget = ["hp", "attack", "defense", "speed"];

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  
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
    <article className="pokemon-detail">
      {!pokemon && <p>Loading...</p>}

      {pokemon && (
        <>
          <section className="detail-container_img">
            <div className="pokemon-detail_img">
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
          </section>

          <section className="detail-container_title">
            <p className="pokemon-detail_id">#{pokemonId}</p>
            <h2 className="pokemon-detail_title">{pokemon.name}</h2>
          </section>

          <section className="container-tipo-ability">
            <div>
              <h3 className="pokemon-detail_subtitle">Tipo</h3>
              <ul className="pokemon-props_double">
                {pokemon.types.map((type) => (
                  <li key={type} className="pokemon-detail_item">
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>  

            <div>
              <h3 className="pokemon-detail_subtitle">Abilities</h3>
              <ul className="pokemon-props_double">
                {pokemon.abilities.map((ability) => (
                  <li key={ability} className="pokemon-detail_item">
                    {ability}
                  </li>
                ))}
              </ul>
            </div>  
          </section>

          <section className="">
            <h3 className="pokemon-detail_subtitle">Stats</h3>
            <ul className="pokemon-props">
              {stats.map((stat) => (
                <li key={stat.name} className="pokemon-detail_item">
                  <span><em>{stat.name.toUpperCase()}:</em>
                    {stat.value}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="pokemon-moves_container">
            <h3 className="pokemon-detail_subtitle">Moves</h3>
            <ul className="pokemon-props_double">
              {pokemon.moves.map((move) => (
                <li key={move} className="pokemon-detail_item_moves">
                  {move}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  );
};

export default PokemonDetail;
  
  
 


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon({ id }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(response.data);
    };
    getPokemon();
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>Moves:</h2>
      <ul>
        {pokemon.moves.map(move => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
    </div>
  );
}*/

/*const [pokemon, setPokemon] = useState('')
const {pokemonId} = useParams();*/