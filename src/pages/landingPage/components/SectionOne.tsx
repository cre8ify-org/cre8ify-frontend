import { Flex, Box, Text, Image, Heading } from "@chakra-ui/react";

const heroImage = "./assets/heroImage.jpg";

export default function SectionOne() {
  return (
    <Flex
      gap={"4"}
      p={"2rem"}
      align={"center"}
      justify={"space-between"}
      w={"100%"}
    >
      <Box flex="1">
        <Image src={heroImage} alt="Description of the image" boxSize="90%" />
      </Box>
      <Box flex="1">
        <Heading as="h1" size="4xl" noOfLines={2} mb={6}>
          Discover Top Creators And Influencers
        </Heading>
        <Text fontSize="2xl">
          Jamii aim is to simplify the influencer marketing process for brands
          and provide them with access to a diverse range of talented creators
          who can help them achieve their marketing goals.
        </Text>
      </Box>
    </Flex>
  );
}
