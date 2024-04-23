import { configureWeb3Modal } from "./connection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/landingPage/components/Header";
import LandingPage from "./pages/landingPage";
import Home from "./pages/dashboard/home";
import DashboardLayout from "./layout/dashboardLayout";
import Feed from "./pages/dashboard/feed";
import About from "./pages/dashboard/about";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
