import {
  Box,
  Flex,
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
import { SetStateAction, useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Content = ({ item, id, handleFullContent }: any) => {
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timestamp, setTimestamp] = useState(item.dateCreated); // Example timestamp
  const [timeAgo, setTimeAgo] = useState<SetStateAction<any>>(null);

  const handleLiked = () => {
    setLiked((prevLiked) => !prevLiked);
    
  };

  const handleDisLiked = () => {
    setDisLiked((prevDisLiked) => !prevDisLiked);
  };

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    const elapsedTime = currentTime - Number(timestamp); // Elapsed time in seconds

    const getTimeAgo = (elapsedTime: any) => {
      // Define time intervals in seconds
      const minute = 60;
      const hour = 60 * minute;
      const day = 24 * hour;
      const week = 7 * day;
      const month = 30 * day;
      const year = 365 * day;

      // Determine the appropriate time interval
      if (elapsedTime < minute) {
        return "Just now";
      } else if (elapsedTime < hour) {
        const minutes = Math.floor(elapsedTime / minute);
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < day) {
        const hours = Math.floor(elapsedTime / hour);
        return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < week) {
        const days = Math.floor(elapsedTime / day);
        return `${days} day${days > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < month) {
        const weeks = Math.floor(elapsedTime / week);
        return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
      } else if (elapsedTime < year) {
        const months = Math.floor(elapsedTime / month);
        return `${months} month${months > 1 ? "s" : ""} ago`;
      } else {
        const years = Math.floor(elapsedTime / year);
        return `${years} year${years > 1 ? "s" : ""} ago`;
      }
    };

    setTimeAgo(getTimeAgo(elapsedTime));
    setTimestamp((prevTime: any) => prevTime);
  }, [timestamp]);

  return (
    <GridItem w={"100%"} bg={"#292929"} p={".7rem"} borderRadius={".5rem"}>
      <Flex align={"center"} gap={".5rem"} mb={"1rem"}>
        <Img
          src={`https://${item.ipfsHash}`} // Assuming creatorProfile is the URL to the creator's profile image
          w={"50px"}
          h={"50px"}
          objectFit={"cover"}
          borderRadius={"100%"}
          alt="Creator Profile"
        />
        <Flex align={"end"} gap={".4rem"}>
          <Box>
            <Text>{item.creatorProfile}</Text>
          </Box>
          <Text color={"#15AB99"}>. {timeAgo}</Text>
        </Flex>
      </Flex>
      <Box
        mb={"1rem"}
        onClick={() => {
          onOpen();
          handleFullContent(item);
        }}
      >
        <Text mb={".5rem"}>{item.title}</Text>
        {(item.contentType === "image" && (
          <Img
            mb={"1rem"}
            src={`https://${item.ipfsHash}`} // Assuming ipfsHash is the URL to the content image
            alt="Content Image"
            h={"200px"}
            w={"100%"}
            objectFit={"cover"}
            cursor={"pointer"}
            borderRadius={".5rem"}
          />
        )) ||
          (item.contentType === "video" && (
            <video src={`https://${item.ipfsHash}`} width="100%" height="100" />
          )) ||
          (item.contentType === "audio" && (
            <audio src={`https://${item.ipfsHash}`} controls />
          ))}
      </Box>
      <Flex justify={"space-between"}>
        <Box>
          <Flex gap={"2rem"} align={"center"}>
            <Flex
              gap={".2rem"}
              onClick={handleLiked}
              cursor={"pointer"}
              align={"center"}
            >
              <Icon
                as={FaThumbsUp}
                fontSize={"1.5rem"}
                color={liked ? "#ff0000" : ""}
              />
              <Text>{Number(item.likes)}</Text>
            </Flex>
            <Flex gap={".2rem"} onClick={handleDisLiked} cursor={"pointer"}>
              <Icon
                as={FaThumbsDown}
                fontSize={"1.5rem"}
                color={disLiked ? "#ff0000" : ""}
              />
              <Text>{Number(item.dislikes)}</Text>
            </Flex>
            <Flex gap={".2rem"}>
              <Icon as={FiEye} fontSize={"1.5rem"} />
              <Text>{Number(item.views)}</Text>
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
            <Text mb={".5rem"}>{id?.title}</Text>
            {(item.contentType === "image" && (
              <Img
                mb={"1rem"}
                src={`https://${id?.ipfsHash}`} // Assuming ipfsHash is the URL to the content image
                alt="Content Image"
                objectFit={"cover"}
                cursor={"pointer"}
                borderRadius={".5rem"}
              />
            )) ||
              (item.contentType === "video" && (
                <video width="750" height="500" controls>
                  <source src={`https://${id?.ipfsHash}`} />
                </video>
              )) ||
              (item.contentType === "audio" && (
                <audio controls>
                  <source src={`https://${id?.ipfsHash}`} />
                  Your browser does not support the audio element.
                </audio>
              ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </GridItem>
  );
};

export default Content;
