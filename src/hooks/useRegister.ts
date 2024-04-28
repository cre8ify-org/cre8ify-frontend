import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getAuthContract } from "../constants/contract";
import { getProvider } from "../constants/provider";
import { useToast } from "@chakra-ui/react";

const useRegister = (name: string, image: string) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  // const toast = useToast();

  return useCallback(async () => {
    if (chainId === undefined) return console.error("Chain ID is undefined");
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getAuthContract(signer);

    try {
      const transaction = await contract.registerUser(name, image);
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);

      // return toast({
      //   title: "Account created.",
      //   status: "success",
      //   position: "top-right",
      //   duration: 9000,
      //   isClosable: true,
      // });
    } catch (error: unknown) {
      console.log(error);
    }
  }, [chainId, walletProvider, name, image]);
};

export default useRegister;
