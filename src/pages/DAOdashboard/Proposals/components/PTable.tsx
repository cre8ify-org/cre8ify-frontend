import React, { useState, useRef } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  HStack,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Heading,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import {  useEffect } from 'react';
import useContentDAO from '../../../../hooks/useDAO';
import { ProposalView, ProposalStatus } from '../../../../hooks/types'; 

const PTable: React.FC = () => {
 const {
    joinDAO,
    leaveDAO,
    createProposal,
    voteForProposal,
    voteAgainstProposal,
    executeProposal,
    getProposals,
  } = useContentDAO();
  const [stakeAmount, setStakeAmount] = useState('');
  const [proposalName, setProposalName] = useState('');
  const [proposalDescription, setProposalDescription] = useState('');
  const [proposalDuration, setProposalDuration] = useState('');
  const [proposals, setProposals] = useState<ProposalView[]>([]); // Initialize with an empty array of ProposalView

  useEffect(() => {
    const fetchProposals = async () => {
      const fetchedProposals = await getProposals();
      setProposals(fetchedProposals);
    };
    fetchProposals();
  }, [getProposals]);

  const handleJoinDAO = async () => {
    await joinDAO(parseFloat(stakeAmount));
    setStakeAmount('');
  };

  const handleLeaveDAO = async () => {
    await leaveDAO();
  };

  const handleCreateProposal = async () => {
    await createProposal(proposalName, proposalDescription, parseInt(proposalDuration));
    setProposalName('');
    setProposalDescription('');
    setProposalDuration('');
  };

  const handleVoteForProposal = async (proposalIndex: number) => {
    await voteForProposal(proposalIndex);
  };

  const handleVoteAgainstProposal = async (proposalIndex: number) => {
    await voteAgainstProposal(proposalIndex);
  };

  const handleExecuteProposal = async (proposalIndex: number) => {
    await executeProposal(proposalIndex);
  };

  // State for dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Ref for cancel button
  const cancelRef = useRef<HTMLButtonElement>(null);

  // State for form data
  // const [formData, setFormData] = useState({
  //   name: "",
  //   description: "",
  //   duration: "",
  // });

  // let proposalData = [
  //   {
  //     proposal: "Market Place ",
  //     status: "Ongoing button",
  //     timeLeft: "25hrs 15mins",
  //     totalVotes: "1000",
  //     votesFor: "925",
  //     votesAgainst: "25",
  //     vote: "Thumbs up or down click",
  //   },
  // ];

  // Function to handle form input change
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // Function to handle dialog close
  const handleCloseDialog = (): void => {
    setIsDialogOpen(false);
  };

  // // Function to handle form submit
  // const handleSubmit = (): void => {
  //   const durationNumber: number = parseInt(formData.duration);
  //   // Call your DAO function to create proposal
  //   createProposal(formData.name, formData.description, durationNumber);
  //   // Close dialog
  //   setIsDialogOpen(false);
  //   // Clear form data
  //   setFormData({ name: "", description: "", duration: "" });
  // };

  return (
    <>
      <Button
        colorScheme="teal"
        size="md"
        mb="20px"
        onClick={() => setIsDialogOpen(true)}
      >
        Create Proposal
      </Button>

      {/* Dialog for creating proposal */}
      <AlertDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        leastDestructiveRef={cancelRef}
        size="lg" // optional: specify the size of the dialog
      >
        <AlertDialogOverlay />
        <AlertDialogContent
          bg="gray.800" // set background color to match dark mode theme
          color="white" // set text color to match dark mode theme
        >
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Create Proposal
          </AlertDialogHeader>
          <AlertDialogBody>
            {/* Form for creating proposal */}
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Proposal Name"
                value={proposalName}
                onChange={(e) => setProposalName(e.target.value)}
                bg="gray.700" // set background color to match dark mode theme
                color="white" // set text color to match dark mode theme
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                placeholder="Proposal Description"
                value={proposalDescription}
                onChange={(e) => setProposalDescription(e.target.value)}
                bg="gray.700" // set background color to match dark mode theme
                color="white" // set text color to match dark mode theme
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Duration</FormLabel>
              <Input
                type="number"
                placeholder="Proposal Duration (seconds)"
                value={proposalDuration}
                onChange={(e) => setProposalDuration(e.target.value)}
                bg="gray.700" // set background color to match dark mode theme
                color="white" // set text color to match dark mode theme
              />
            </FormControl>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleCreateProposal}
              ml={3}
              bg="blue.600" // set background color to match dark mode theme
            >
              Create
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div>
        <h3>Join DAO</h3>
        <input
          type="number"
          placeholder="Stake Amount"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
        />
        <button onClick={handleJoinDAO}>Join DAO</button>
      </div>
      <div>
        <button onClick={handleLeaveDAO}>Leave DAO</button>
      </div>
      {/* <SimpleGrid
        spacing={9}
        m="20px"
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <Card>
          <CardHeader>
            <Heading size="md"> Total Proposals Created</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fetch </Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Approved Proposals</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fetch number</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Rejected Proposals</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fetch number</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">My Proposals</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fetch number</Text>
          </CardBody>
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid> */}

      <TableContainer>
        <Table variant="striped" colorScheme="">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Status</Th>
              {/* <Th isNumeric>Time Left</Th> */}
              <Th isNumeric>Total Votes</Th>
              {/* <Th isNumeric>Votes For</Th> */}
              {/* <Th isNumeric>Votes Against</Th> */}
              <Th isNumeric>Vote</Th>
              <Th isNumeric>Execute</Th>
            </Tr>
          </Thead>
          <Tbody>
            {proposals.map((proposal, index) => (
              <Tr key={index}>
                <Td>
                  {proposal.name}
                  <GoArrowUpRight />
                </Td>
                <Td>{ProposalStatus[proposal.status]}</Td>
                {/* <Td isNumeric>{proposal.timeLeft}</Td> */}
                <Td isNumeric>{proposal.totalVotes.toString()}</Td>
                {/* <Td isNumeric>{proposal.votesFor}</Td> */}
                {/* <Td isNumeric>{proposal.votesAgainst}</Td> */}
                <Td isNumeric>
                  <HStack spacing={2}>
                    <LuThumbsUp
                      style={{ marginRight: "10px" }}
                      onClick={() => handleVoteForProposal(index)}
                    />
                    <LuThumbsDown
                      onClick={() => handleVoteAgainstProposal(index)}
                    />
                  </HStack>
                </Td>
                <Td>
                  <button onClick={() => handleExecuteProposal(index)}>
                    Execute
                  </button>
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
    </>
  );
};

export default PTable;
