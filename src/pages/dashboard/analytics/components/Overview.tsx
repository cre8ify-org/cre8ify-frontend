import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { analytics } from "../../../../constants/data";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Example from "./Chart";

const Overview = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {analytics.map((item, index) => (
          <GridItem key={index}>
            <Card
              bgGradient="linear(to-r, #1d1d1e, #1d1d1f)"
              color="#fff"
              border={"1px"}
              boxShadow="lg"
              borderColor="#04A67D"
              transition={"all .5s ease-in-out"}
            >
              <CardHeader>
                <Text className="font" fontWeight={"500"} fontSize={"1rem"}>
                  {item.title}
                </Text>
              </CardHeader>
              <CardBody>
                <Text className="font" fontWeight={"500"} fontSize={"1.5rem"}>
                  {item.amount}
                </Text>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
      <Example />
    </Box>
  );
};

export default Overview;
