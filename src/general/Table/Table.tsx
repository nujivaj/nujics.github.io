import React from "react";
import "./Table.css";

export function Table({ pokemonInfo }) {
  const generationIndex = {
    1: { start: 0, end: 151 },
    2: { start: 152, end: 251 },
    3: { start: 252, end: 386 },
    4: { start: 387, end: 493 },
    5: { start: 494, end: 649 },
    6: { start: 650, end: 721 },
    7: { start: 722, end: 809 },
    8: { start: 810, end: 905 },
    9: { start: 906, end: 1025 },
  };

  const findGen = (id) => {
    for (let generation in generationIndex) {
      const { start, end } = generationIndex[generation];
      if (id >= start && id <= end) {
        return `Gen ${generation}`;
      }
    }
    return "unknown";
  };

  const findType = (types) => {
    const pokemonTypes = types.map((type) => {
      return (
        <div className={`type-div ${type.type.name}`}>{type.type.name}</div>
      );
    });
    return <div>{pokemonTypes}</div>;
  };

  return (
    <div>
      {pokemonInfo != null ? (
        <div className="table">
          <div className="row">
            <div className="cell">Image</div>
            <div className="cell">Name</div>
            <div className="cell">ID</div>
            <div className="cell">Type</div>
            <div className="cell">Generation</div>
          </div>
          <div className="row">
            <div className="cell">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInfo.id}.png`}
              />
            </div>
            <div className="cell">{pokemonInfo.name}</div>
            <div className="cell">{pokemonInfo.id}</div>
            <div className="cell">{findType(pokemonInfo.types)}</div>
            <div className="cell">{findGen(pokemonInfo.id)}</div>
          </div>
        </div>
      ) : (
        <div> Loading </div>
      )}
    </div>
  );
}
