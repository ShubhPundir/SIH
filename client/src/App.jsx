import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Data from "./pages/Data"
// import Dashboard from "./components/Dashboard";
// import UserDetailsPage from "./components/UserDetailPage";
import Navbar from "./components/Navbar";
import CardsByDate from "./pages/CardByDate";
import UserDataComponent from "./pages/UserDataComponent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/data" element={<Data />} />
        <Route path="/dashboard" element={<CardsByDate />} />
        <Route path="/list" element={<UserDataComponent />} />
        {/* <Route path="/testing" element={<UserDetailsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
