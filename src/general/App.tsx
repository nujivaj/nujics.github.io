import "./styles.css";
import { Button } from "./GeneralComponents/Button/Button";
import { Table } from "./GeneralComponents/Table/Table";
import { Grid } from "./GeneralComponents/Grid/Grid";
import React, { useState, useEffect } from "react";

const APIS = {
  pokemon: "https://pokeapi.co/api/v2",
  airplane: "",
  dinosaur: "",
  space: "",
  disney: "",
};

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [pokemonTypeList, setPokemonTypeList] = useState([]);
  const [singlePokemonInfo, setSinglePokemonInfo] = useState(null);
  const [selectSinglePokemon, setSelectSinglePokemon] = useState(null);
  // const [sortAlphabetical, setSortAlphabetical] = useState(false);
  // const [sortReverseAlpha, setSortReverseAlpha] = useState(false);
  // const [toggleDisplay, setToggleDisplay] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const url = `${APIS.pokemon}/type`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setPokemonTypeList(result.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const url = `${APIS.pokemon}/type/${selectedType}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setPokemonList(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const url = `${APIS.pokemon}/pokemon/${selectSinglePokemon}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network respons was not ok");
        }
        const result = await response.json();
        setSinglePokemonInfo(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectSinglePokemon]);

  const handleClick = (type) => {
    setSelectedType(type);
    setSelectSinglePokemon(null);
    setSinglePokemonInfo(null);
  };

  const handleGridClick = (name) => {
    setSelectSinglePokemon(name);
    setPokemonList(null);
    setSelectedType(null);
  };

  return (
    <div className="App">
      {/* Implement this switch select later */}
      {/* <div>
        <input className="toggle-display" type="checkbox" />
      </div> */}
      <div className="button-container">
        {pokemonTypeList.length > 0 ? (
          pokemonTypeList.map((type) => (
            <Button
              key={type.name}
              onClick={() => handleClick(type.name)}
              label={type.name}
              className={`button ${type.name}`}
            >
              {type.name}
            </Button>
          ))
        ) : (
          <div>No types available.</div>
        )}
      </div>
      <Button
        onClick={handleClick}
        label="Disabled Button"
        disabled={true}
        className="my-custom-class"
      />
      {pokemonList && pokemonList.pokemon ? (
        <Table pokemonList={pokemonList} onClick={handleGridClick} />
      ) : (
        <div>{selectSinglePokemon == null ? "no type selected" : null}</div>
      )}
      {selectSinglePokemon ? (
        <Grid pokemonInfo={singlePokemonInfo} />
      ) : (
        <div> {pokemonList == [] ? "no pokemon selected" : null} </div>
      )}
    </div>
  );
}

export default App;
