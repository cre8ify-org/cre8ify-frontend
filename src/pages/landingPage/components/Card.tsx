import * as React from "react";
import { Box, Flex, Center, Heading } from "@chakra-ui/react";

interface CardProps {
  videoUrl: string;
}

const Card: React.FC<CardProps> = ({ videoUrl }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    w="300px"
    minH="300px"
    position="relative"
  >
    <video width="100%" height="100%" controls>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Box>
);

const CardRow: React.FC = () => {
  // Replace these with the URLs to your videos
  const video1 = "https://www.example.com/video1.mp4";
  const video2 = "https://www.example.com/video2.mp4";
  const video3 = "https://www.example.com/video3.mp4";
  const video4 = "https://www.example.com/video4.mp4";

  return (
    <Box>
      <Center>
        <Heading my="20px">Most Viewed Content</Heading>
      </Center>
      <Flex direction="row" justifyContent="space-around" mx="220px" my="50px">
        <Card videoUrl={video1} />
        <Card videoUrl={video2} />
        <Card videoUrl={video3} />
        <Card videoUrl={video4} />
      </Flex>
    </Box>
  );
};

export default CardRow;
