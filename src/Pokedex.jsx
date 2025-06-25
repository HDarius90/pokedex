import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ pokemons }) => {
    console.log(pokemons);
    
  return (
    <div className="Pokedex">
    <h1>Pokedex!</h1>
      {pokemons.map((pokemon) => (
        <Pokecard
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          exp={pokemon.base_experience}
        />
      ))}
    </div>
  );
};

export default Pokedex;