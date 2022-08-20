import React, { Suspense } from "react";
import useRickAndMorty from "hooks/useRickAndMorty";
import { Box, SimpleGrid } from "@chakra-ui/react";
import ArticleBox from "@/molecules/article/ArticleBox";
import Card from "@/molecules/card/Card";
function Home() {
  const { store } = useRickAndMorty();

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

export default Home;
