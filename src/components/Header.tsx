import { Flex } from "@chakra-ui/react";
import ConnectButton from "./ConnectButton";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  const { isConnected } = useWeb3ModalAccount();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to "/feed" if the wallet is connected
    if (isConnected) {
      navigate("/feed");
    } else {
      navigate("/");
    }
  }, [isConnected]);
  return (
    <Flex
      gap={"4"}
      p={"2rem"}
      align={"center"}
      justify={"space-between"}
      w={"100%"}
    >
      <div>LOGO</div>
      <ConnectButton />
    </Flex>
  );
}
