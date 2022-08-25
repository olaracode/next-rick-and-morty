import { useContext } from "react";
import { AppContext } from "context";
const useStore = () => {
  const { characters, episodes } = useContext(AppContext);
  const store = { characters, episodes };
  return { store };
};

export default useStore;
