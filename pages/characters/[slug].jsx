import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useStore from "hooks/useStore";
const Product = () => {
  const router = useRouter();
  const [character, setCharacter] = useState(null);
  const { store } = useStore();
  useEffect(() => {
    if (!store.characters || !router.query) return;

    const currentCharacter = store.characters.find(
      (item) => item.id == router.query.slug
    );
    setCharacter(currentCharacter);
  }, [store.characters]);
  return (
    <Flex 
	  my="100px" 
	  flexDir="column" 
	  align="center" 
	  backgroundColor="brand.card" 
	  borderRadius="18px" 
	  p="5"
    >
      
      <Image src={character?.image} w="100%" borderRadius="full" />
      <Box mt="5">
	  <Text>{character?.name}</Text>
	  <Text>{character?.status}</Text>
	  <Text>{character?.species}</Text>
	  <Text>{character?.origin.name}</Text>
      </Box>
    </Flex>
  );
};

export default Product;
