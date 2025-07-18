import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padToThree = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;

const Pokecard = ({ id, name, type, exp }) => {
  const imgSrc = `${POKE_API}${padToThree(id)}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">
        {name.slice(0, 1).toUpperCase() + name.slice(1)}
      </h1>
      <div className="Pokecard-image">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {exp}</div>
    </div>
  );
};

export default Pokecard;
