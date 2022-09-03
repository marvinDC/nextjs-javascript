import React, { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { HeaderWrapper } from "./header.styled";
import { homeContext } from "context/home/HomeContext";
const Header = () => {
  const { name } = useContext(homeContext);

  return (
    <>
      <HeaderWrapper>
        <Box>{name}</Box>
      </HeaderWrapper>
    </>
  );
};

export default Header;
