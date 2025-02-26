import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Profile from "./pages/Profil";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
