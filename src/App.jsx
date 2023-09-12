import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
function App() {
  const location = useLocation();
  return (
    <div >
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      {location.pathname !== "/"}
    </div>
  );
}

export default App;
