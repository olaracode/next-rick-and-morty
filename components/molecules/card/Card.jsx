import React, { useState } from "react";
import { PropTypes } from "prop-types";
// * Components
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useBreakpointValue } from "@chakra-ui/react";
const Card = ({ character }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const variants = useBreakpointValue({
    base: "-35%",
    md: "-50%",
    lg: "-30%",
  });
  const animation = {
    entry: {
      y: variants,
      transition: "1.5s",
    },
    exit: {
      y: "0px",
    },
  };
  const handleHover = () => {
    setIsAnimating(!isAnimating);
  };
  return (
    <Box
      key={character.id}
      position="relative"
      shadow={"md"}
      w="100%"
      minH={{ base: "300px", md: "200px", lg: "300px" }}
      borderRadius="3xl"
      boxSizing="border-box"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Image
        as={motion.img}
        src={character.image}
        alt={character.name}
        boxSizing="border-box"
        borderRadius={"inherit"}
        shadow="base"
        w="100%"
        h="100%"
        position="absolute"
        zIndex={10}
        layout="fill"
        animate={isAnimating ? { ...animation.entry } : { ...animation.exit }}
      />
      <Box px="2" py="3" position={"absolute"} bottom="0" w="100%">
        <Text p="0" my="2" textAlign={"center"}>
          {character.name}
        </Text>
        <Button variant={"outline"} w="100%">
          Ver más
        </Button>
      </Box>
    </Box>
  );
};

Card.propTypes = {
  character: PropTypes.object,
};

export default Card;