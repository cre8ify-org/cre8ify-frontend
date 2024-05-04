import {
  Box,
  Flex,
  Grid,
  GridItem,
  Img,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { FiEye } from "react-icons/fi";
import useGetContent from "../../../../hooks/useGetContent";

interface ContentItem {
  title: string;
  id: number;
  dateCreated: number;
  creatorProfile: string;
  ipfsHash: string;
  creator: string;
  isDeleted: boolean;
  isMonetized: boolean;
  views: bigint;
  likes: number;
  dislikes: number;
  shares: number;
  rating: number;
  contentType: string;
}

const Content = () => {
  const { data: contentItems = [], loading, error } = useGetContent();
  const [liked, setLiked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleLiked = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
      {(contentItems as ContentItem[]).map((item, index) => (
        <GridItem
          key={index}
          w={"100%"}
          bg={"#292929"}
          p={".7rem"}
          borderRadius={".5rem"}
        >
          <Flex align={"center"} gap={".5rem"} mb={"1rem"}>
            <Img
              src={item.creatorProfile} // Assuming creatorProfile is the URL to the creator's profile image
              w={"50px"}
              h={"50px"}
              objectFit={"cover"}
              borderRadius={"100%"}
              alt="Creator Profile"
            />
            <Flex align={"end"} gap={".4rem"}>
              <Box>
                <Text color={"#B1B1B1"} fontSize={".9rem"}>
                  {item.creator}
                </Text>
                <Text>{item.title}</Text>
              </Box>
              <Text color={"#15AB99"}>. 1 hr ago</Text>
            </Flex>
          </Flex>
          <Box
            onClick={() => {
              onOpen();
            }}
          >
            <Img
              mb={"1rem"}
              src={item.ipfsHash} // Assuming ipfsHash is the URL to the content image
              alt="Content Image"
              h={"200px"}
              w={"100%"}
              objectFit={"cover"}
              cursor={"pointer"}
              borderRadius={".5rem"}
            />
          </Box>
          <Flex justify={"space-between"}>
            <Box>
              <Flex gap={"2rem"}>
                <Flex gap={".2rem"} onClick={handleLiked} cursor={"pointer"}>
                  <Icon
                    as={GoHeartFill}
                    fontSize={"1.5rem"}
                    color={liked ? "#ff0000" : ""}
                  />
                  <Text>{item.likes}</Text>
                </Flex>
                <Flex gap={".2rem"}>
                  <Icon as={FiEye} fontSize={"1.5rem"} />
                  <Text>{item.views}</Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              borderRadius={"50rem"}
              px={"1rem"}
              bgGradient="linear(to-r, #04A67D, #24B1B6)"
              border={"none"}
              color={"#fff"}
              transition={"all .5s ease-in-out"}
              _hover={{
                bgGradient: "linear(to-r, #04A67D, #24B1B6)",
                border: "none",
              }}
              _focus={{ outline: "none" }}
            >
              {item.contentType}
            </Box>
          </Flex>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
              bg="blackAlpha.300"
              backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent bg={"#262628"} className="font">
              <ModalBody pb={6} pt={9}>
                <Img
                  mb={"1rem"}
                  src={item.ipfsHash} // Assuming ipfsHash is the URL to the content image
                  alt="Content Image"
                  objectFit={"cover"}
                  borderRadius={".5rem"}
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Content;
