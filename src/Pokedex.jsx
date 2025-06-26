import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ pokemons, exp, isWinner }) => {
  return (
    <div className="Pokedex">
      <h1>Pokedex!</h1>
      <p>Total Experience: {exp}</p>
      <p>{isWinner ? 'WINNER' : 'LOOSER'}</p>
      <div className="Pokedex-cards">
        {pokemons.map((pokemon) => (
          <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
