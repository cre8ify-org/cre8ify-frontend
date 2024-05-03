import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  HStack,
} from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";

let proposalData = [
  {
    proposal: "Market Place ",
    status: "Ongoing button",
    timeLeft: "25hrs 15mins",
    totalVotes: "1000",
    votesFor: "925",
    votesAgainst: "25",
    vote: "Thumbs up or down click",
  },
];

const PTable = () => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th>Proposal</Th>
            <Th>Status</Th>
            <Th isNumeric>Time Left</Th>
            <Th isNumeric>Total Votes</Th>
            <Th isNumeric>Votes For</Th>
            <Th isNumeric>Votes Against</Th>
            <Th isNumeric>Vote</Th>
          </Tr>
        </Thead>
        <Tbody>
          {proposalData.map((item, index) => (
            <Tr key={index}>
              <Td>
                {item.proposal}
                <GoArrowUpRight />
              </Td>
              <Td>
                {item.status === "Ongoing" ? (
                  <Button color="primary">Ongoing</Button>
                ) : (
                  <Button color="secondary">Completed</Button>
                )}
              </Td>
              <Td isNumeric>{item.timeLeft}</Td>
              <Td isNumeric>{item.totalVotes}</Td>
              <Td isNumeric>{item.votesFor}</Td>
              <Td isNumeric>{item.votesAgainst}</Td>
              <Td isNumeric>
                <HStack spacing={2}>
                  <LuThumbsUp
                    style={{ marginRight: "10px" }}
                    onClick={() => {
                      /* Increase votes for */
                    }}
                  />
                  <LuThumbsDown
                    onClick={() => {
                      /* Increase votes against */
                    }}
                  />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
};

export default PTable;
