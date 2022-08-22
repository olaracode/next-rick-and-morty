import React, { useContext } from "react";
import { AppContext } from "context";
import { useRouter } from "next/router";
// * Components
import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const { isDarkTheme, setDarkTheme } = useContext(AppContext);
  const router = useRouter();

  const logo = "/assets/imgs/logo.png";
  return (
    <Box
      w="100%"
      bg="brand.card"
      shadow={"md"}
      position="fixed"
      top="0px"
      zIndex={999}
    >
      <Flex
        justify={"space-between"}
        h={"60px"}
        mx={{ base: "5%", md: "15%", xl: "25%" }}
        align="center"
      >
        <Flex
          justify={"center"}
          align="center"
          gap="3"
          onClick={() => router.push("/")}
        >
          <Image src={logo} alt="logo" h="50px" cursor="pointer" />
        </Flex>

        <Box>
          <Menu>
            <MenuButton
              border="2px solid"
              borderColor="brand.main"
              py="10px"
              px="15px"
              backgroundColor="brand.card"
              borderRadius="18px"
              color="brand.main"
            >
              <FontAwesomeIcon icon={faBars} />
            </MenuButton>
            <MenuList
              p={1}
              py={3}
              bg={"brand.card"}
              borderColor="transparent"
              shadow={"md"}
            >
              <MenuItem
                _hover={{ color: "text.hover" }}
                borderRadius="18px"
                onClick={() => setDarkTheme(!isDarkTheme)}
              >
                <Flex gap={2} w="100%" align="center">
                  <FontAwesomeIcon icon={faMoon} />
                  <Text>Theme</Text>
                </Flex>
              </MenuItem>
              <MenuItem _hover={{ color: "text.hover" }} borderRadius="18px">
                About
              </MenuItem>
              <MenuItem _hover={{ color: "text.hover" }} borderRadius="18px">
                Characters
              </MenuItem>
              <MenuItem _hover={{ color: "text.hover" }} borderRadius="18px">
                Episodes
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
