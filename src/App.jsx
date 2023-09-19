import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Alcancias from "./Components/Alcancias/Alcancias";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer"
import Create from "./Components/Create/Create"
import Dashboard from "./Components/Dashboard/Dashboard"
import FilteredOrdered from "./Components/Filter/Filter";

function App() {
  const location = useLocation();
  return (
    <div >
      
      {location.pathname === "/login" || "/detail" &&  <NavBar />}
      {location.pathname == "/alcancias" && <FilteredOrdered/>}
     
      <Routes>
        <Route path="/login" element={<Landing />} />
        <Route path="/alcancias" element={<Alcancias />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create/>} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
