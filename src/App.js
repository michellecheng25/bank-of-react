import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Credits from "./pages/Credits";
import Debits from "./pages/Debits";
import { useState } from "react";

function App() {
  const [clientInfo, setClientInfo] = useState({
    accountBalance: 14568.27,
    currentUser: {
      username: "Joe Smith",
      memberSince: "07/23/96",
    },
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/userprofile"
          element={<UserProfile clientInfo={clientInfo} />}
        />
        <Route path="/credits" element={<Credits />} />
        <Route path="/debits" element={<Debits />} />
      </Routes>
    </Router>
  );
}

export default App;
