import { Routes, Route ,useLocation } from "react-router-dom"; 
function App() {
    const location = useLocation();
    return (
     
      <div className="App">
        
      <Routes>
      
        <Route path="/" element={<Landing />} />  
        </Routes> 
        {location.pathname !== "/"}
      </div>
      
    );
  }
  
  export default App;