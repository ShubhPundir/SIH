import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Data from "./pages/Data"
// import Dashboard from "./components/Dashboard";
// import UserDetailsPage from "./components/UserDetailPage";
import Navbar from "./components/Navbar";
import CardsByDate from "./pages/CardByDate";
// import UserDataComponent from "./pages/UserDataComponent";
import NewDashboard from "./pages/NewDashboard";
import ViewDashboard from "./components/ViewDashboard";
import { data } from "./pages/jsonData.js";
import NetworkLogs from "./components/DummyComponents/NetworkLogs.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/data" element={<Data />} />
        {/* <Route path="/dashboard" element={<CardsByDate />} /> */}
        <Route path="/dashboard" element={<NewDashboard />} />
        <Route path="/view-audit/:role" element={<ViewDashboard items={data}/>} />
        <Route path="/network-logs/:userId" element={<NetworkLogs/>} />
        {/* <Route path="/list" element={<UserDataComponent />} /> */}
        {/* <Route path="/testing" element={<UserDetailsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
