import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import {
  getSubscriptionContract,
  getTokenContract,
} from "../constants/contract";
import { getProvider } from "../constants/provider";
import { toast } from "react-toastify";

const useApprove = (amount: number | undefined) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (chainId === undefined)
      return toast.error("Please connect your wallet first");
    if (!isSupportedChain(chainId)) return toast.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const subContract = getSubscriptionContract(signer);
    const contract = getTokenContract(signer);

    try {
      const transaction = await contract.approve(subContract.target, amount);
      const receipt = await transaction.wait();

      if (!receipt.status) {
        toast.error("Approval failed!");
        return;
      }

      toast.success("Approval successful!");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while approving.");
    }
  }, [amount, chainId, walletProvider]);
};

export default useApprove;
