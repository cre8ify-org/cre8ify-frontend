import { ethers } from "ethers";
import AuthAbi from "./ABI/Auth.json";
import ContentAbi from "./ABI/Content.json";
import SubscriptionAbi from "./ABI/Subscription.json";

export const getAuthContract = (
  providerOrSigner: ethers.ContractRunner | null | undefined
) =>
  new ethers.Contract(
    import.meta.env.VITE_authorization_contract_address,
    AuthAbi,
    providerOrSigner
  );
export const getContentContract = (
  providerOrSigner: ethers.ContractRunner | null | undefined
) =>
  new ethers.Contract(
    import.meta.env.VITE_content_contract_address,
    ContentAbi,
    providerOrSigner
  );
export const getSubscriptionContract = (
  providerOrSigner: ethers.ContractRunner | null | undefined
) =>
  new ethers.Contract(
    import.meta.env.VITE_subscription_contract_address,
    SubscriptionAbi,
    providerOrSigner
  );
