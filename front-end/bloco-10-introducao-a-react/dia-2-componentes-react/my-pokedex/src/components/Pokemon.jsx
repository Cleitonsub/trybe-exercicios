import React from "react";
import pokemons from "../data";

class Pokemon extends React.Component {
  render() {
    return (
      pokemons.map((pokemon) => {
        return <>
        <div className="infoPoke">
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>{"Average weight: " + pokemon.averageWeight.value + pokemon.averageWeight.measurementUnit}</p>
          <img src={pokemon.image} alt={pokemon.name}/>
        </div>
        <br/>
        </>
      })
    )
  }
}

export default Pokemon;