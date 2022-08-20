import { useContext } from "react";
import { AppContext } from "context";

const useRickAndMorty = () => {
  const { characters, episodes } = useContext(AppContext);

  const store = { characters, episodes };

  return { store };
};

export default useRickAndMorty;
