import CreateInput from "./components/CreateInput";
import Head from "./components/Head";
import DashboardLayout from "../../../layout/dashboardLayout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import FreeContentMap from "./components/ContentMap";
import AllUser from "./components/AllUser";
import MyFreeContentMap from "./components/MyFreeContentMap";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const Feed = () => {
  const { address } = useWeb3ModalAccount();
  return (
    <DashboardLayout>
      <Head />
      <CreateInput />
      <Tabs>
        <TabList borderBottom={"1px solid #323436"} pb={".5rem"} gap={"1rem"}>
          <Tab
            _selected={{
              color: "#15AB99",
              boxShadow: "0px 0px 0px 1px #15AB99",
            }}
            _hover={{ color: "#15AB99", boxShadow: "0px 0px 0px 1px #15AB99" }}
            border={"none"}
            _focus={{ outline: "none" }}
            borderRadius={"0"}
          >
            Free
          </Tab>
          <Tab
            _selected={{
              color: "#15AB99",
              boxShadow: "0px 0px 0px 1px #15AB99",
            }}
            _hover={{ color: "#15AB99", boxShadow: "0px 0px 0px 1px #15AB99" }}
            border={"none"}
            _focus={{ outline: "none" }}
            borderRadius={"0"}
          >
            Exclusive
          </Tab>
          <Tab
            _selected={{
              color: "#15AB99",
              boxShadow: "0px 0px 0px 1px #15AB99",
            }}
            _hover={{ color: "#15AB99", boxShadow: "0px 0px 0px 1px #15AB99" }}
            border={"none"}
            _focus={{ outline: "none" }}
            borderRadius={"0"}
          >
            Your Posts
          </Tab>
          <Tab
            _selected={{
              color: "#15AB99",
              boxShadow: "0px 0px 0px 1px #15AB99",
            }}
            _hover={{ color: "#15AB99", boxShadow: "0px 0px 0px 1px #15AB99" }}
            border={"none"}
            _focus={{ outline: "none" }}
            borderRadius={"0"}
          >
            Live
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <FreeContentMap />
          </TabPanel>
          <TabPanel>
            <AllUser />
          </TabPanel>
          <TabPanel>
            <MyFreeContentMap userAddress={address} />
          </TabPanel>
          <TabPanel>
            <p>Top Creators</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DashboardLayout>
  );
};

export default Feed;
