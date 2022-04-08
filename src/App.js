import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Credits from "./pages/Credits";
import Debits from "./pages/Debits";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/debits" element={<Debits />} />
    </Routes>
  </Router>
    
  );
}

export default App;
