import React, { Suspense, useContext } from "react";
import { AppContext } from "context";
import { PropTypes } from "prop-types";
import useRickAndMorty from "hooks/useRickAndMorty";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ArticleBox from "@/molecules/article/ArticleBox";
import Card from "@/molecules/card/Card";
import { fetchCharacters, fetchEpisodes } from "./api/getCharacters";
import { useEffect } from "react";
function Home({ characters, episodes }) {
  const { store } = useRickAndMorty();
  const { setCharacters, setEpisodes } = useContext(AppContext);

  useEffect(() => {
    if (store.characters > 0) return;
    console.log("me seteo en el home");
    setCharacters(characters);
    setEpisodes(episodes);
  }, []);

  return (
    <Box my={"2%"}>
      <Suspense fallback={<ArticleBox skeleton={true} />}>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} gap="10" my="15vh">
          {store.characters?.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </SimpleGrid>
      </Suspense>
    </Box>
  );
}

Home.propTypes = {
  characters: PropTypes.array,
  episodes: PropTypes.array,
};

export async function getStaticProps() {
  const response = await fetchCharacters();
  const episodesReponse = await fetchEpisodes();
  return {
    props: {
      characters: await response,
      episodes: await episodesReponse,
    },
  };
}

export default Home;
