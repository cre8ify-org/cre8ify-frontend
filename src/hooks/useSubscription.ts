import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getSubscriptionContract } from "../constants/contract";
import { getProvider } from "../constants/provider";
import { toast } from "react-toastify";

const useSubscription = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (chainId === undefined)
      return toast.error("Please connect your wallet first");
    if (!isSupportedChain(chainId)) return toast.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getSubscriptionContract(signer);

    try {
      const transaction = await contract.subscribeOneMonth();
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);
    } catch (error: unknown) {
      console.log(error);
    }
  }, [chainId, walletProvider]);
};

export default useSubscription;
