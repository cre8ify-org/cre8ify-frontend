import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box>
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
            We're Here to Help
          </Heading>
          <Text mb={"1rem"} color={"#b7b5c8"}>
            Welcome to the Cre8ify Support Center. Whether you're a creator
            looking for guidance, a user with a question, or anyone needing
            assistance, you've come to the right place. Our dedicated support
            team is here to ensure your experience on our platform is smooth and
            enjoyable. Explore our resources, reach out for help, and find the
            answers you need to get the most out of Cre8ify.
          </Text>
        </Box>
        <Box w={"100%"}>
          <Image src="./images/support_hero.png" alt="img" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
