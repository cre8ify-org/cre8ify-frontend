import {
  SimpleGrid,
  CardHeader,
  Card,
  CardBody,
  Text,
  Box,
  List,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import "../../../../App.css";
import { Subscribe } from "./Subscribe";
import { SetSubAmt } from "./SetSubAmt";

const SubscriptionComponent = () => {
  return (
    <Box
      color="#fff"
      boxShadow="2xl"
      // border={"1px"}
      // borderColor="#04A67D"
      transition={"all .5s ease-in-out"}
      p={5}
    >
      {/* <Text className="font" fontWeight={"400"} fontSize={"1.4rem"}>
        Subscription
      </Text> */}

      <SimpleGrid spacing={3} templateColumns="repeat(3, 1fr)" p={"2rem"}>
        <Card
          bgGradient="linear(to-r, #1d1d1e, #252528)"
          color="#fff"
          boxShadow="lg"
          transition={"all .5s ease-in-out"}
        >
          <CardHeader pb={"0"}>
            <Text className="font" fontWeight={"600"} fontSize={"1.4rem"}>
              Subscriptions
            </Text>
          </CardHeader>
          <CardBody>
            <List spacing={3}>
              <ListItem>Lorem ipsum dolor sit</ListItem>
            </List>
          </CardBody>
        </Card>{" "}
        <Card
          bgGradient="linear(to-r, #1d1d1e, #252528)"
          color="#fff"
          boxShadow="lg"
          transition={"all .5s ease-in-out"}
        >
          <CardHeader pb={"0"}>
            <Text className="font" fontWeight={"600"} fontSize={"1.4rem"}>
              My Subscribers
            </Text>
          </CardHeader>
          <CardBody>
            <List spacing={3}>
              <ListItem>Lorem ipsum dolor sit</ListItem>
            </List>
          </CardBody>
        </Card>
        <Card
          bg="#1d1d1e"
          color="#fff"
          transition={"all .5s ease-in-out"}
          p={"1rem"}
        >
          <Flex gap={"1rem"} flexDirection={"column"} alignItems={"end"}>
            <Subscribe />
            <SetSubAmt />
          </Flex>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default SubscriptionComponent;
