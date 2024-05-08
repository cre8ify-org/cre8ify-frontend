import { Box, Image, Text } from "@chakra-ui/react";
import useGetRegUsers from "../../../../hooks/useGetRegUsers";
import useFetchExclContent from "../../../../hooks/useFetchExclContent";
import { useEffect, useState } from "react";

interface ContentItem {
  title: string;
  id: number;
  dateCreated: number;
  creatorProfile: string;
  ipfsHash: string;
  creator: string;
  isDeleted: boolean;
  isMonetized: boolean;
  views: number;
  likes: number;
  dislikes: number;
  shares: number;
  rating: number;
  contentType: string;
  creatorImage: string;
}

interface RegUser {
  username: string;
  walletAddress: string;
  profileImage: string;
}

const AllUser = () => {
  const [creator, setCreator] = useState("");
  const [exContent, setExContent] = useState("");
  const allUsers = useGetRegUsers();
  const exclusiveContent = useFetchExclContent();

  useEffect(() => {}, [creator]);

  console.log(exclusiveContent);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
      {(allUsers as RegUser[]).map((item, index) => (
        <Box
          onClick={() => setCreator(item.walletAddress)}
          key={index}
          display={"flex"}
          alignItems={"center"}
          gap={".7rem"}
        >
          <Image
            w={"50px"}
            h={"50px"}
            objectFit={"cover"}
            borderRadius={"full"}
            src={`https://${item.profileImage}`}
            alt=""
          />
          <Box>
            <Text fontSize={".9rem"}>{item.username}</Text>
            <Text color={"gray"} fontSize={".9rem"}>
              {item.walletAddress}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AllUser;
