import React, { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { fetchCharacters } from "pages/api/getCharacters";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  let [isDarkTheme, setDarkTheme] = useState(false);
  let [characters, setCharacters] = useState();
  let [episodes, setEpisodes] = useState();

  const data = {
    characters,
    setCharacters,
    episodes,
    setEpisodes,
    isDarkTheme,
    setDarkTheme,
  };

  useEffect(() => {
    if (characters?.length > 0) return;
    (async () => {
      console.log("me seteo en el contexto");
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
