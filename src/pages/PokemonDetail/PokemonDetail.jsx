import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { pokemonId } = useParams();

  return (
    <div>
      <h1>PokemonDetail</h1>
      <p>Informacion con el ID{" "}<mark>{pokemonId}</mark></p>
    </div>
  );
};

export default PokemonDetail;