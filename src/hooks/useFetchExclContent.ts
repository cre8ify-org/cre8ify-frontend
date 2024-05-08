import { useCallback, useEffect, useState } from "react";
import { getContentContract } from "../constants/contract";
import { getProvider } from "../constants/provider";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";
import { isSupportedChain } from "../utils";

interface ContentItem {
  title?: string;
  id?: number;
  dateCreated?: number;
  creatorProfile?: string;
  ipfsHash?: string;
  creator?: string;
  isDeleted?: boolean;
  isMonetized?: boolean;
  views?: number;
  likes?: number;
  dislikes?: number;
  shares?: number;
  rating?: number;
  contentType?: string;
  creatorImage?: string;
}

interface State {
  loading: boolean;
  data?: ContentItem | any;
  error?: string;
}

const useFetchExclContent = (): State => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const [creator, setCreator] = useState("");
  const [content, setContent] = useState<any>({
    loading: true,
    data: null,
    error: undefined,
  });

  useEffect(() => {
    const fetchContent = async () => {
      if (chainId === undefined)
        return toast.error("Please connect your wallet first");
      if (!isSupportedChain(chainId)) return toast.error("Wrong network");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const contract = getContentContract(signer);
      try {
        const contentItems = await contract.fetchExclusiveContent(creator); // Assuming this returns an array of ContentItem
        console.log("transaction: ", contentItems);
        const receipt = await contentItems.wait();
        console.log(receipt);
        const exclusiveContent = receipt.map((item: any) => ({
          title: item.title,
          id: item.id,
          dateCreated: item.dateCreated,
          creatorProfile: item.creatorProfile,
          ipfsHash: item.ipfsHash,
          creator: item.creator,
          isDeleted: item.isDeleted,
          isMonetized: item.isMonetized,
          views: item.views,
          likes: item.likes,
          dislikes: item.dislikes,
          shares: item.shares,
          rating: item.rating,
          contentType: item.contentType,
          creatorImage: item.creatorImage,
        }));
        setContent({
          loading: false,
          data: exclusiveContent,
          error: undefined,
        });
      } catch (err: any) {
        setContent({
          loading: false,
          data: undefined,
          error: err.message,
        });
      }
    };

    fetchContent();
  }, [chainId, creator, walletProvider]);

  const toReturn = {
    loading: content.loading,
    data: content.data,
    error: content.error,
    setCreator,
  };

  return toReturn;
};

export default useFetchExclContent;
