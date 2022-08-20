import axios from "axios";

const CHARACTER_URL = "https://rickandmortyapi.com/api/character";
const EPISODES_URL = "https://rickandmortyapi.com/api/episode";

export const fetchCharacters = async () => {
  try {
    const response = await axios.get(CHARACTER_URL);
    return await response.data.results;
  } catch (error) {
    return { msg: error };
  }
};

export const fetchEpisodes = async () => {
  try {
    const response = await axios.get(EPISODES_URL);
    return await response.data.results;
  } catch (error) {
    return { msg: error };
  }
};
