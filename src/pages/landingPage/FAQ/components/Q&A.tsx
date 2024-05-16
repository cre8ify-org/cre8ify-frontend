import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { QAA } from "../../../../constants/data";

const QA = () => {
  return (
    <Box mt={"4rem"}>
      <Heading
        className="font"
        textAlign={"center"}
        as="h1"
        size="xl"
        mb="40px"
        color={"#e9ecef"}
      >
        Questions & Answers
      </Heading>
      <Flex align={"center"}>
        <Box w={"80%"} display={"flex"} justifyContent={"center"}>
          <Image src="./images/Q&A_asset.png" alt="img" />
        </Box>
        <Accordion allowToggle w={"100%"}>
          {QAA.map((item, index) => (
            <AccordionItem key={index}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _expanded={{
                        bgGradient: "linear(to-r, #e94c91, #5555fb)",
                        color: "#1c1c1e",
                      }}
                      borderRadius={"0"}
                      _focus={{ outline: "none" }}
                      _hover={{ border: "none" }}
                      border={"none"}
                      py={".8rem"}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        {item.question}
                      </Box>
                      {isExpanded ? (
                        <FaMinus fontSize="12px" />
                      ) : (
                        <FaPlus fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color={"#b7b5c8"}>
                    {item.answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </Box>
  );
};

export default QA;
