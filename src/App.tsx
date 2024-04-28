import { configureWeb3Modal } from "./connection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/landingPage/components/Header";
import LandingPage from "./pages/landingPage";
import Home from "./pages/dashboard/home";
import DashboardLayout from "./layout/dashboardLayout";
import Feed from "./pages/dashboard/feed";
import Monetization from "./pages/dashboard/monetization";
import Analytics from "./pages/dashboard/analytics";
import Overview from "./pages/DAOdashboard/Overview";
import Proposals from "./pages/DAOdashboard/Proposals";
import Voting from "./pages/DAOdashboard/Voting";
import Treasury from "./pages/DAOdashboard/Treasury";

configureWeb3Modal();

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="feed" element={<Feed />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="feed" element={<Feed />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="monetization" element={<Monetization />} />
        </Routes>
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="proposals" element={<Proposals />} />
          <Route path="voting" element={<Voting />} />
          <Route path="treasury" element={<Treasury />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
