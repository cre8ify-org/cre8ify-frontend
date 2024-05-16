import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import "../../../../App.css";

const Hero = () => {
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Box w={"100%"}>
        <Heading
          className="font"
          as="h1"
          size="2xl"
          noOfLines={2}
          mb="40px"
          color={"#e9ecef"}
        >
          About Cre8ify
        </Heading>
        <Text color={"#b7b5c8"}>
          Welcome to Cre8ify, the premier destination for content creators and
          enthusiasts in the decentralized space. At Cre8ify, we believe in
          empowering creators to take control of their content, connect with
          their audience, and monetize their creativity like never before.
        </Text>
      </Box>
      <Box w={"100%"}>
        <Image src="./images/about_us_hero.png" alt="img" />
      </Box>
    </Flex>
  );
};

export default Hero;
