import React, { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FooterWrapper, FooterLink, FooterLogo } from "./footer.styled";
import Image from "next/image";
import { homeContext } from "context/home/HomeContext";

const Footer = () => {
  const { name } = useContext(homeContext);
  return (
    <>
      <FooterWrapper>
        <FooterLink
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {name} {" "}
          <FooterLogo>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </FooterLogo>
        </FooterLink>
      </FooterWrapper>
    </>
  );
};

export default Footer;
