import { Grid } from "@chakra-ui/react";
import DashboardLayout from "../../../layout/dashboardLayout";
import ContentChart from "./components/ContentChart";
import DislikeChart from "./components/DislikeChart";
import Head from "./components/Head";
import LikeChart from "./components/LikeChart";
import Overview from "./components/Overview";

const Analytics = () => {
  return (
    <DashboardLayout>
      <Head />
      <Overview />
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={"5rem"}>
        <LikeChart />
        <DislikeChart />
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={"5rem"}>
        <ContentChart />
        <ContentChart />
      </Grid>
    </DashboardLayout>
  );
};

export default Analytics;
