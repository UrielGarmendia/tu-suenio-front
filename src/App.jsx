import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Alcancias from "./Components/Alcancias/Alcancias";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer"

function App() {
  const location = useLocation();
  return (
    <div >
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/alcancias" element={<Alcancias />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer/>
      {location.pathname !== "/"}
    </div>
  );
}

export default App;
