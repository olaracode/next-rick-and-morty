import React, { Suspense, useContext, useEffect } from "react";
import { PropTypes } from "prop-types";
import { AppContext } from "context";
import useRickAndMorty from "hooks/useRickAndMorty";
import { fetchCharacters, fetchEpisodes } from "./api/getCharacters";
// * Components
import { Box, SimpleGrid, Image, Flex } from "@chakra-ui/react";
import Card from "@/molecules/card/Card";

import { motion } from "framer-motion";
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
      <Flex position="relative" align={"center"} justify="center">
        <Image
          src="assets/imgs/rick.png"
          alt="Rick img"
          position="absolute"
          top={50}
          zIndex={10}
        />
        <Box
          mt="15vh"
          as={motion.div}
          animate={{
            rotate: 360,
            transition: {
              ease: "linear",
              duration: 20,
              repeat: Infinity,
              delay: 1,
            },
          }}
          align="center"
        >
          <Image src="assets/imgs/portal.png" alt="portal image" />
        </Box>
      </Flex>

      <Suspense fallback={"loading"}>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 3 }} gap="10" my="10vh">
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
