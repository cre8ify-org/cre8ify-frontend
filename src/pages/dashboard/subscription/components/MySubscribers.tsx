import { List, ListItem } from "@chakra-ui/react";
import useGetMySubscribers from "../../../../hooks/useGetMySubscribers";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

interface subscriberInfo {
  username: string;
  addr: `0x${string}` | undefined;
}

const MySubscribers = () => {
  const { address } = useWeb3ModalAccount();
  const {
    data: subscribersInfo = [],
    loading,
    error,
  } = useGetMySubscribers(address);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {(subscribersInfo as subscriberInfo[]).map((info, index) => (
        <List spacing={3} key={index}>
          <ListItem>Address: {info.addr}</ListItem>
          <ListItem>Username: {info.username}</ListItem>
        </List>
      ))}
    </>
  );
};

export default MySubscribers;
