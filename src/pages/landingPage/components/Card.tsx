import { Box, Flex, Image, Text } from "@chakra-ui/react";

// Replace these with the paths to your images
import heroImage from "../../../assets/heroImage.jpg";
import heroImage from "../../../assets/heroImage.jpg";
import heroImage from "../../../assets/heroImage.jpg";
import heroImage from "../../../assets/heroImage.jpg";

const Card = ({ image, title }) => (
  <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={image} alt={title} />

    <Box p="6">
      <Box d="flex" alignItems="baseline">
        <Text
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Text>
      </Box>
    </Box>
  </Box>
);

const CardRow = () => (
  <Flex direction="row" justify="space-between">
    <Card image={image1} title="Card 1" />
    <Card image={image2} title="Card 2" />
    <Card image={image3} title="Card 3" />
    <Card image={image4} title="Card 4" />
  </Flex>
);

export default CardRow;
