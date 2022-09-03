import { Box, Flex } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <>
      <Flex>
        <Header />
        <Box style={{
          height: 'calc(100vh - 187px)',
          margin: '20px'
        }
        }>{children}</Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
