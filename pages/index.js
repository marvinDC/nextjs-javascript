import { WithLayout } from "~/layout/hooks/withLayout";
import { homeContext } from "~/context/home/HomeContext";
import { useContext, useEffect } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Home = () => {
  const { name, setName } = useContext(homeContext);

  const handleButtonClick = (e) => {
    const appName = e.target.value;
    setName(appName);
  };

  return (
    <>
      <Box margin="20px">
        <Text>Set Application name using context</Text>
        <Flex justifyContent={"space-between"} w={'100%'} flexDir={"column"}>
          <Button onClick={handleButtonClick} value="Next JS app">
            Next JS app
          </Button>
          <Button onClick={handleButtonClick} value="Sample app">
            Sample app
          </Button>
          <Button onClick={handleButtonClick} value="React app">
            React App
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default WithLayout(Home);
