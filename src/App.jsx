import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Dashboard from "./components/Dashboad";
function App() {
  return (
    <div className="text-5xl overflow-x-hidden">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
