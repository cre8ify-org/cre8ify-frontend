import { useEffect, useState } from "react";
import { isSupportedChain } from "../utils";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getAuthContract } from "../constants/contract";
import { getProvider } from "../constants/provider";
import { toast } from "react-toastify";

const useGetUserDetails = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();
  const [userDetails, setUserDetails] = useState({
    username: "",
    walletAddress: "",
    profileImage: "",
  });

  useEffect(() => {
    async () => {
      if (chainId === undefined)
        return toast.error("Please connect your wallet first");
      if (!isSupportedChain(chainId)) return toast.error("Wrong network");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const contract = getAuthContract(signer);

      contract
        .getUserDetails(address)
        .then((res: any) => {
          setUserDetails({
            username: res.username,
            walletAddress: res.walletAddress,
            profileImage: res.profileImage,
          });
        })
        .catch((error: unknown) => {
          console.log(error);
        });
    };
  }, [chainId, walletProvider]);

  return userDetails;
};

export default useGetUserDetails;
