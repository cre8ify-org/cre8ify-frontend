import * as React from "react";
import { Box, Image, Flex, Center } from "@chakra-ui/react";

interface CardProps {
  image: string;
}

const Card: React.FC<CardProps> = ({ image }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    w="300px"
    minH="300px"
  >
    <Image src={image} alt="" objectFit="cover" w="100%" h="100%" />
  </Box>
);

const CardRow: React.FC = () => {
  // Replace these with the paths to your images
  const image1 = "./assets/image1.jpg";
  const image2 = "./assets/image2.jpg";
  const image3 = "./assets/image3.jpg";
  const image4 = "./assets/image4.jpg";

  return (
    <Box>
      <Center>
        <h4>Most Viewed Content</h4>
      </Center>
      <Flex direction="row" mx="220px" justifyContent="space-around">
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
      </Flex>
    </Box>
  );
};

export default CardRow;
