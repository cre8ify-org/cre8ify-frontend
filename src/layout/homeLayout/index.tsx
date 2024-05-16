import { Box, Flex, Text } from "@chakra-ui/react";
import ConnectButton from "../../components/ConnectButton";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../pages/landingPage/home/components/Footer";

export default function HomeLayout(props: any) {
  const { isConnected } = useWeb3ModalAccount();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to "/feed" if the wallet is connected
    if (isConnected) {
      navigate("/feed");
    }
  }, [isConnected]);
  return (
    <Box>
      <Flex
        gap={"4"}
        p={"1rem 2rem"}
        align={"center"}
        justify={"space-between"}
        w={"100%"}
      >
        <Text
          className="fontOne"
          fontSize={"1.5rem"}
          fontWeight={"500"}
          bgGradient="linear(to-r, #e94c91, #5555fb)"
          bgClip={"text"}
        >
          cre
          <Text as={"span"} fontSize={"1.8rem"} color={"#e9ecef"}>
            8
          </Text>
          ify
        </Text>
        <Flex gap={"2rem"}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about-us"}>About Us</Link>
          <Link to={"/faq"}>FAQ</Link>
          <Link to={"/support"}>Support</Link>
        </Flex>
        <ConnectButton />
      </Flex>
      <Box px={"2rem"} py={"3rem"}>
        {props.children}
      </Box>
      <Footer />
    </Box>
  );
}
