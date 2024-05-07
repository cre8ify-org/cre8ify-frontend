import { Text, Box } from "@chakra-ui/react";
import "../../../../App.css";

const CreatorsList = () => {
  return (
    <>
      <Text className="font" fontWeight={"400"} fontSize={"1.4rem"}>
        List of Creators and Sub Amount
      </Text>
      <Box
        color="#fff"
        boxShadow="2xl"
        border={"1px"}
        borderColor="#04A67D"
        transition={"all .5s ease-in-out"}
        p={5}
      >
        Table
      </Box>
    </>
  );
};

export default CreatorsList;
