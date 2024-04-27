import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  Input,
  FormControl,
} from "@chakra-ui/react";
import { menu } from "../../constants/data.ts";
import { NavLink } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { FaImage } from "react-icons/fa6";
import "../../App.css";
import ConnectButton from "../../components/ConnectButton.tsx";
import useRegister from "../../hooks/useRegister.tsx";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  const [username, setUsername] = useState<string>("");
  const [cid, setCid] = useState<string>("");

  const { address } = useWeb3ModalAccount();

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  const handleRegister = useRegister(
    username,
    `${import.meta.env.VITE_GATEWAY_URL}/ipfs/${cid}`
  );

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      await handleSubmission(selectedFile);
    }
  };

  const handleSubmission = async (fileToUpload: string | Blob) => {
    try {
      const formData = new FormData();
      formData.append("file", fileToUpload);
      const metadata = JSON.stringify({
        name: "File name",
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );

      const resData = await res.json();
      setCid(resData.IpfsHash);
      console.log(resData.IpfsHash);
    } catch (e) {
      console.log(e);
      alert("Trouble uploading file");
    }
  };

  return (
    <Flex h="100vh">
      <Box
        w="400px"
        h="100vh"
        py={"2rem"}
        px={"1.8rem"}
        bg={"#171717"}
        overflowY={"auto"}
        overflowX={"hidden"}
      >
        <Box
          mb={"5rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text>LOGO</Text>
          <ConnectButton />
        </Box>

        <Flex flexDirection={"column"} justify={"space-between"} h={"77%"}>
          <Flex flexDirection={"column"} gap={"1rem"}>
            {menu.map((item, index) => (
              <NavLink to={item.link} key={index} className="activeClassName">
                <Flex align={"center"} px={"1rem"}>
                  <Icon as={item.icon} />
                  <Text fontSize={".9rem"} p={".8rem"}>
                    {item.title}
                  </Text>
                </Flex>
              </NavLink>
            ))}
          </Flex>
          <Box>
            <Button
              bgGradient="linear(to-r, #04A67D, #24B1B6)"
              borderRadius={"100rem"}
              border={"none"}
              color={"#fff"}
              transition={"all .5s ease-in-out"}
              w={"150px"}
              _hover={{
                bgGradient: "linear(to-r, #04A67D, #24B1B6)",
                border: "none",
              }}
              _focus={{ outline: "none" }}
              onClick={() => {
                setOverlay(<OverlayOne />);
                onOpen();
              }}
            >
              <Text>Register</Text>
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box
        w={"100%"}
        h={"100vh"}
        overflowY={"auto"}
        overflowX={"hidden"}
        py={"2.5rem"}
        px={"1.5rem"}
      >
        {props.children}
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent bg={"#262628"} className="font">
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton
            _focus={{ outline: "none" }}
            _hover={{ border: "1px solid #15AB99" }}
          />
          <ModalBody pb={6}>
            <Box>
              <Input
                type="file"
                border={"none"}
                id="selectFile"
                onChange={changeHandler}
                hidden
              />
              <Flex align={"end"} justify={"space-between"} mb={"1rem"}>
                <label htmlFor="selectFile">
                  <Flex
                    borderRadius={".5rem"}
                    align={"center"}
                    justify={"center"}
                    color={"#B7B7B6"}
                    w={"200px"}
                    h={"150px"}
                    bg={"#323436"}
                  >
                    <Flex flexDirection={"column"} align={"center"}>
                      <Icon as={FaImage} fontSize={"3rem"} />
                      <Text fontSize={"1rem"}>Upload Profile</Text>
                    </Flex>
                  </Flex>
                </label>
              </Flex>
            </Box>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Username"
                value={username}
                _placeholder={{ color: "#767677" }}
                size="md"
                border={"1px solid #535354"}
                outline={"none"}
                _hover={{ outline: "none" }}
                _focus={{ boxShadow: "none" }}
                px={".5rem"}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input
                size="md"
                border={"1px solid #535354"}
                outline={"none"}
                _hover={{ outline: "none" }}
                _focus={{ boxShadow: "none" }}
                px={".5rem"}
                value={address}
                disabled
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bgGradient="linear(to-r, #04A67D, #24B1B6)"
              borderRadius={"100rem"}
              border={"none"}
              color={"#fff"}
              transition={"all .5s ease-in-out"}
              w={"150px"}
              _hover={{
                bgGradient: "linear(to-r, #04A67D, #24B1B6)",
                border: "none",
              }}
              _focus={{ outline: "none" }}
              onClick={handleRegister}
            >
              <Text>Register</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default DashboardLayout;
