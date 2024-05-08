import {
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from "@chakra-ui/react";
import "../../../../App.css";
import useGetAllUsers from "../../../../hooks/useGetAllUsers";

interface UserDetails {
  username: string;
  walletAddress: string;
  profileImage: string;
  subscriptionAmount: number;
}

const CreatorsList = () => {
  const { data: userDetails = [], loading, error } = useGetAllUsers();

  console.log(userDetails);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Text className="font" fontWeight={"400"} fontSize={"1.4rem"}>
        List of Creators
      </Text>
      <Box
        color="#fff"
        boxShadow="2xl"
        // border={"1px"}
        // borderColor="#04A67D"
        transition={"all .5s ease-in-out"}
        p={5}
      >
        <TableContainer>
          <Table variant="unstyled">
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Username</Th>
                <Th>Address</Th>
                <Th>Sub Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {(userDetails as UserDetails[]).map((details, index) => (
                <Tr key={index}>
                  <Td>
                    <Image
                      borderRadius="full"
                      boxSize="40px"
                      objectFit={"cover"}
                      src={`https://${details.profileImage}`}
                      alt={`${details.username}'s image`}
                    />
                  </Td>
                  <Td>{details.username}</Td>
                  <Td>{details.walletAddress}</Td>
                  <Td>{details.subscriptionAmount}</Td>{" "}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default CreatorsList;
