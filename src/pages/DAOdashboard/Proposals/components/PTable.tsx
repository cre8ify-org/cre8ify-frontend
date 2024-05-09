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
import useContentDAO from "../../../../hooks/useDAO";

const PTable: React.FC = () => {
  const { createProposal } = useContentDAO();

  // State for dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Ref for cancel button
  const cancelRef = useRef<HTMLButtonElement>(null);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
  });

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

  // Function to handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle dialog close
  const handleCloseDialog = (): void => {
    setIsDialogOpen(false);
  };

  // Function to handle form submit
  const handleSubmit = (): void => {
    const durationNumber: number = parseInt(formData.duration);
    // Call your DAO function to create proposal
    createProposal(formData.name, formData.description, durationNumber);
    // Close dialog
    setIsDialogOpen(false);
    // Clear form data
    setFormData({ name: "", description: "", duration: "" });
  };

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
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                bg="gray.700" // set background color to match dark mode theme
                color="white" // set text color to match dark mode theme
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                bg="gray.700" // set background color to match dark mode theme
                color="white" // set text color to match dark mode theme
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Duration</FormLabel>
              <Input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
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
              onClick={handleSubmit}
              ml={3}
              bg="blue.600" // set background color to match dark mode theme
            >
              Create
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <SimpleGrid
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
      </SimpleGrid>

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
          <Tbody>
            {proposalData.map((item, index) => (
              <Tr key={index}>
                <Td>
                  {item.proposal}
                  <GoArrowUpRight />
                </Td>
                <Td>
                  {item.status === "Completed" ? (
                    <Button colorScheme="blue">Ongoing</Button>
                  ) : (
                    <Button colorScheme="red">Completed</Button>
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
    </>
  );
};

export default PTable;
