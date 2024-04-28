import { Flex, Box, Text, Image, Heading } from "@chakra-ui/react";

const image5 = "./assets/image5.jpg";

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
        <Image
          src={image5}
          alt="Description of the image"
          boxSize="70%"
          borderRadius="lg"
          mx="150px"
        />
      </Box>
      <Box flex="1" mx="200px">
        <Heading as="h1" size="2xl" noOfLines={2} mb={6}>
          Why Choose Us
        </Heading>
        <Text fontSize="xl">
          We are a Decentralised Content Creator platform where creatives get
          paid for their work without the presence of a middle man.Feel free to
          speak your mind without restrictions and regulations. Your voice is
          heard!
        </Text>
      </Box>
    </Flex>
  );
}
