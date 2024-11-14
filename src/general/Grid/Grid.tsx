import React, { useEffect, useState } from "react";
import "./Grid.css";

export function Grid({ pokemonList, onClick }) {
  return (
    <div>
      <h2> {pokemonList.name} type </h2>
      <div className="table-container">
        {pokemonList.pokemon.map((pokemon) => (
          <div
            key={pokemon.pokemon.url.split("/")[6]}
            className="table-item"
            onClick={() => onClick(pokemon.pokemon.name)}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.pokemon.url.split("/")[6]
              }.png`}
              alt={pokemon.pokemon.name}
              className="pokemon-image"
            />
            <div className="pokemon-name">{pokemon.pokemon.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
