import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/page/login/Login";
import Signup from "../src/page/signup/Signup";
import Dashboard from "../src/page/dashboard/Dashborad"; // ✅ Dashboard import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Login ke baad navigate */}
      </Routes>
    </Router>
  );
}

export default App;
