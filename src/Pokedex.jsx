import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ pokemons, exp, isWinner }) => {
  return (
    <div className="Pokedex">
      {isWinner ? (
        <h1 className="Pokedex-winner">Winning Hand</h1>
      ) : (
        <h1 className="Pokedex-loser">Losing Hand</h1>
      )}
      <h4>Total Experience: {exp}</h4>
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
