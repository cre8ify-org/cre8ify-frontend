import {
  Flex,
  Spacer,
  Text,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      gap={"4"}
      p={"2rem"}
      align={"center"}
      justify={"space-between"}
      w={"100%"}
    >
      <div>
        <Center w="50%" bg="green.500">
          <Text fontSize="3xl">Discover Top Creators And Influencers</Text>
          <Text fontSize="2xl">
            Jamii aim is to simplify the influencer marketing process for brands
            and provide them with access to a diverse range of talented creators
            who can help them achieve their marketing goals.
          </Text>
          <Button colorScheme="blue">Get Started</Button>
        </Center>
      </div>
      <div>
        <h2>Image Here</h2>
      </div>
    </Flex>
  );
}
