import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";
import { getAuthContract } from "../constants/contract";
import { getProvider } from "../constants/provider";

const useRegister = (name: string, image: string) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

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

      if (receipt.status) {
        return toast.success("registration successful!");
      }

      toast.error("registration failed!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(String(error));
      }
    }
  }, [chainId, walletProvider, name, image]);
};

export default useRegister;