import { useEffect, useState } from "react";
import {
  getAuthContract,
  getSubscriptionContract,
} from "../constants/contract";
import { readOnlyProvider } from "../constants/provider";
import { ethers } from "ethers";

interface UserDetails {
  username: string;
  walletAddress: string;
  profileImage: string;
  subscriptionAmount: number;
}

interface State {
  loading: boolean;
  data?: UserDetails[];
  error?: string;
}

const useGetAllUsers = (): State => {
  const [details, setDetails] = useState<State>({
    loading: true,
    data: undefined,
    error: undefined,
  });

  console.log("details", details);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const authContract = getAuthContract(readOnlyProvider);
        const subContract = getSubscriptionContract(readOnlyProvider);
        const userDetails = await authContract.getAllUsers();

        const usersWithSubscriptionAmount = await Promise.all(
          userDetails.map(async (item: any) => {
            const subAmtWei = await subContract.creatorSubscriptionAmount(
              item.walletAddress
            );
            const subAmtEth = ethers.formatEther(subAmtWei); // Convert wei to ethers

            return {
              username: item.username,
              walletAddress: item.walletAddress,
              profileImage: item.profileImage,
              subscriptionAmount: subAmtEth,
            };
          })
        );

        setDetails({
          loading: false,
          data: usersWithSubscriptionAmount,
          error: undefined,
        });
      } catch (err: any) {
        setDetails({
          loading: false,
          data: undefined,
          error: err.message,
        });
      }
    };

    fetchDetails();
  }, []);

  return details;
};

export default useGetAllUsers;
