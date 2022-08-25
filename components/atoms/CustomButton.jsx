import React from "react";
import { PropTypes } from "prop-types";

import { Button } from "@chakra-ui/react";

const CustomButton = ({ content, bg, ftColor, hover, ...props }) => {
  return (
    <Button
      {...props}
      bg={bg ? bg : "brand.main"}
      _hover={hover && { bg: "brand.light", color: "black" }}
      _focus={{ border: "none" }}
      color={ftColor}
    >
      {content}
    </Button>
  );
};

CustomButton.propTypes = {
  content: PropTypes.string,
  bg: PropTypes.string,
  ftColor: PropTypes.string,
  hover: PropTypes.boolean,
  props: PropTypes.any,
};
export default CustomButton;
