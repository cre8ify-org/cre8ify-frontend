import { Flex, Box, Text, Image, Heading } from "@chakra-ui/react";

const heroImage = "./assets/heroImage.jpg";

export default function Hero() {
  return (
    <Flex
      gap={"4"}
      p={"2rem"}
      align={"center"}
      justify={"space-between"}
      w={"100%"}
    >
      <Box flex="1" mx="100px" px="100px">
        <Heading as="h1" size="2xl" noOfLines={2} mb="50px">
          Discover Top Creators And Influencers
        </Heading>
        <Text fontSize="xl">
          Jamii aim is to simplify the influencer marketing process for brands
          and provide them with access to a diverse range of talented creators
          who can help them achieve their marketing goals.
        </Text>
      </Box>
      <Box flex="1">
        <Image
          src={heroImage}
          alt="Description of the image"
          boxSize="70%"
          borderRadius="lg"
        />
      </Box>
    </Flex>
  );
}
