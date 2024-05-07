import DashboardLayout from "../../../layout/dashboardLayout";
import CreatorsList from "./components/CreatorsList";
import SubscriptionComponent from "./components/SubscriptionComponent";

const Subscription = () => {
  return (
    <DashboardLayout>
      {/* <Head /> */}
      <SubscriptionComponent />
      <CreatorsList />
    </DashboardLayout>
  );
};

export default Subscription;
