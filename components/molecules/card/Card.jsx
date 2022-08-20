import React, { useState } from "react";
import { useRouter } from "next/router";
import { PropTypes } from "prop-types";
// * Components
import { Box, Image, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
const Card = ({ character }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  const variants = useBreakpointValue({
    base: "-60%",
    sm: "-55%",
    md: "-50%",
    lg: "-40%",
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

  const handleRouting = () => {
    router.push(`/characters/${character.id}`);
  };

  return (
    <Box
      key={character.id}
      position="relative"
      shadow={"md"}
      w="100%"
      minH={{
        base: "180px",
        sm: "200px",
        md: "220px",
        lg: "250px",
      }}
      background={"brand.card"}
      borderRadius="3xl"
      boxSizing="border-box"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Image
        as={motion.img}
        src={character.image}
        alt={character.name}
        cursor={"pointer"}
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
        <Button variant={"outline"} w="100%" onClick={handleRouting}>
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
