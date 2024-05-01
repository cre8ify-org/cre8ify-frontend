import {
  Box,
  Input,
  Text,
  Textarea,
  Flex,
  Icon,
  Button,
} from "@chakra-ui/react";
import { FaImage, FaMusic } from "react-icons/fa6";
import { RiFileVideoFill } from "react-icons/ri";

const CreateInput = () => {
  return (
    <Box mb={"3rem"}>
      <Text fontSize={"2rem"} fontWeight={"600"} mb={"1rem"}>
        What will create today, Username?
      </Text>
      {/* <Flex
        w={"500px"}
        justify={"space-between"}
        bg={"#252528"}
        gap={"1rem"}
        p={".5rem"}
        borderRadius={".5rem"}
        mb={"1.5rem"}
      >
        <Button
          p={"1rem"}
          h={"0"}
          bg={"none"}
          color={"#fff"}
          _hover={{ border: "none", boxShadow: "0px 0px 0px 1px #15AB99" }}
          boxShadow={`${text && "0px 0px 0px 1px #15AB99"}`}
          border={"none"}
          textAlign={"center"}
          w={"100%"}
          _active={{ bg: "none" }}
          _focus={{ outline: "none" }}
          onClick={handleText}
        >
          <Text>Text</Text>
        </Button>
        <Button
          p={"1rem"}
          h={"0"}
          bg={"none"}
          color={"#fff"}
          _hover={{ border: "none", boxShadow: "0px 0px 0px 1px #15AB99" }}
          boxShadow={`${image && "0px 0px 0px 1px #15AB99"}`}
          border={"none"}
          textAlign={"center"}
          w={"100%"}
          _active={{ bg: "none" }}
          _focus={{ outline: "none" }}
          onClick={handleImage}
        >
          <Text>Image</Text>
        </Button>
        <Button
          p={"1rem"}
          h={"0"}
          bg={"none"}
          color={"#fff"}
          _hover={{ border: "none", boxShadow: "0px 0px 0px 1px #15AB99" }}
          boxShadow={`${video && "0px 0px 0px 1px #15AB99"}`}
          border={"none"}
          textAlign={"center"}
          w={"100%"}
          _active={{ bg: "none" }}
          _focus={{ outline: "none" }}
          onClick={handleVideo}
        >
          <Text>Video</Text>
        </Button>
        <Button
          p={"1rem"}
          h={"0"}
          bg={"none"}
          color={"#fff"}
          _hover={{ border: "none", boxShadow: "0px 0px 0px 1px #15AB99" }}
          boxShadow={`${audio && "0px 0px 0px 1px #15AB99"}`}
          border={"none"}
          textAlign={"center"}
          w={"100%"}
          _active={{ bg: "none" }}
          _focus={{ outline: "none" }}
          onClick={handleAudio}
        >
          <Text>Audio</Text>
        </Button>
      </Flex> */}
      <Box
        border={"1px solid #535354"}
        py={"1rem"}
        px={".8rem"}
        borderRadius={".8rem"}
        transition={"all 1s"}
      >
        <Textarea
          placeholder="What is in your mind, Username?"
          resize={"none"}
          border={"none"}
          _focus={{ boxShadow: "none" }}
          _placeholder={{ color: "#B7B7B6", fontSize: ".9rem" }}
          p={"0"}
          mb={"0.5rem"}
        />
        <Flex justify={"space-between"} align={"end"}>
          <Flex gap={"1rem"}>
            <Flex>
              <Input
                accept="image/*"
                type="file"
                border={"none"}
                id="image"
                hidden
              />
              <Flex align={"end"} justify={"space-between"}>
                <label style={{ cursor: "pointer" }} htmlFor="image">
                  <Flex color={"#B7B7B6"} align={"center"} gap={".2rem"}>
                    <Icon as={FaImage} fontSize={".7rem"} />
                    <Text fontSize={".8rem"}>Photo</Text>
                  </Flex>
                </label>
              </Flex>
            </Flex>
            <Flex>
              <Input
                accept="video/*"
                type="file"
                border={"none"}
                id="video"
                hidden
              />
              <Flex align={"end"} justify={"space-between"}>
                <label style={{ cursor: "pointer" }} htmlFor="video">
                  <Flex color={"#B7B7B6"} align={"center"} gap={".2rem"}>
                    <Icon as={RiFileVideoFill} fontSize={".8rem"} />
                    <Text fontSize={".8rem"}>Video</Text>
                  </Flex>
                </label>
              </Flex>
            </Flex>
            <Flex>
              <Input
                accept="audio/mp3, audio/WAV, audio/FLAC, audio/M4A"
                type="file"
                border={"none"}
                id="audio"
                hidden
              />
              <Flex align={"end"} justify={"space-between"}>
                <label style={{ cursor: "pointer" }} htmlFor="audio">
                  <Flex color={"#B7B7B6"} align={"center"} gap={".2rem"}>
                    <Icon as={FaMusic} fontSize={".7rem"} />
                    <Text fontSize={".8rem"}>Audio</Text>
                  </Flex>
                </label>
              </Flex>
            </Flex>
          </Flex>
          <Button
            bgGradient="linear(to-r, #04A67D, #24B1B6)"
            border={"none"}
            color={"#fff"}
            transition={"all .5s ease-in-out"}
            w={"150px"}
            _hover={{
              bgGradient: "linear(to-r, #04A67D, #24B1B6)",
              border: "none",
            }}
            _focus={{ outline: "none" }}
          >
            <Text>Create</Text>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default CreateInput;
