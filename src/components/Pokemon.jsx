import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => setPokemon(response.data.results))
    }, []); // This empty array forces useEffect to render ONLY when the component first renders
    console.log(pokemon);
  return (
    <div>
        <div className='container'>
            <ol>
                {
                    pokemon.map((pokemon, i) => (
                        <div>
                            <li key={i}>{pokemon.name}</li>
                        </div>
                    ))
                }
            </ol>
        </div>
    </div>
  )
}

export default Pokemon