import './App.css';
import Pokegame from './Pokegame';
import React, { useEffect, useState } from 'react';

const getRandomUniqueIds = (count, min, max) => {
  const ids = [];
  while (ids.length < count) {
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    ids.push(id);
  }
  return ids;
};

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const randomIds = getRandomUniqueIds(8, 1, 150);
      
      try {
        const responses = await Promise.all(
          randomIds.map((id) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
              res.json()
            )
          )
        );
        setPokemons(responses);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="App">
      <Pokegame pokemons={pokemons} />
    </div>
  );
}

export default App;
