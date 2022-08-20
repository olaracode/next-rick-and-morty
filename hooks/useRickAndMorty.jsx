import { useContext } from "react";
import { AppContext } from "context";
import axios from "axios";

const useRickAndMorty = () => {
  const { characters, episodes } = useContext(AppContext);
  const CHARACTER_URL = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = async () => {
    const response = await axios.get(CHARACTER_URL);
    return await response.data.results;
  };

  const store = { characters, episodes };

  return { fetchCharacters, store };
};

export default useRickAndMorty;
