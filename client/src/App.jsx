import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import TestingPage from "./pages/TestingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<MainPage />} />
        <Route path="/test" element={<TestingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
