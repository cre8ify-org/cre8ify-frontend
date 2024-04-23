import { Flex, Spacer, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      gap={"4"}
      p={"2rem"}
      align={"center"}
      justify={"space-between"}
      w={"100%"}
    >
      <Text fontSize="3xl">(3xl) Discover Top Creators And INfluencers</Text>
      <div>Meta NFT</div>
      <w3m-button />
    </Flex>
  );
}
