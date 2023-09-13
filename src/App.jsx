import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Alcancias from "./Components/Alcancias/Alcancias";
import Detail from "./Components/Detail/Detail";
function App() {
  const location = useLocation();
  return (
    <div >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/alcancias" element={<Alcancias />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      {location.pathname !== "/"}
    </div>
  );
}

export default App;
