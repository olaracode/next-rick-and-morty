import React, { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import { useEffect } from "react";
import useRickAndMorty from "hooks/useRickAndMorty";
const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  let [isDarkTheme, setDarkTheme] = useState(false);
  let [characters, setCharacters] = useState(null);
  let [episodes, setEpisodes] = useState(null);
  let { fetchCharacters } = useRickAndMorty();

  const data = {
    characters,
    setCharacters,
    episodes,
    setEpisodes,
    isDarkTheme,
    setDarkTheme,
  };

  useEffect(() => {
    (async () => {
      const response = await fetchCharacters();
      setCharacters(response);
    })();
  }, []);
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.any,
};

export default AppContext;
